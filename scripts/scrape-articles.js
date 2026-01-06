/**
 * Scrape les articles du blog Ekyo (https://www.ekyo.app/nos-actualites/)
 * et génère :
 * - src/data/blogPosts.ts (liste des posts + image featured)
 * - src/data/blogContent.tsx (HTML complet des articles + liens OK)
 * - public/blog/<slug>/... (images téléchargées localement)
 *
 * Usage:
 *   node scripts/scrape-articles.js
 */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const cheerio = require("cheerio");

const BASE_URL = "https://www.ekyo.app";
const LISTING_URL = `${BASE_URL}/nos-actualites/`;

const OUTPUT_POSTS_TS = path.join(__dirname, "..", "src", "data", "blogPosts.ts");
const OUTPUT_CONTENT_TSX = path.join(__dirname, "..", "src", "data", "blogContent.tsx");
const OUTPUT_IMAGES_DIR = path.join(__dirname, "..", "public", "blog");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function normalizeWhitespace(s) {
  return (s || "").replace(/\s+/g, " ").trim();
}

function extractSlugFromUrl(url) {
  try {
    const u = new URL(url);
    const p = u.pathname.replace(/^\/+|\/+$/g, "");
    return p;
  } catch {
    return url.replace(/^\/+|\/+$/g, "");
  }
}

function absolutizeUrl(maybeRelativeUrl) {
  if (!maybeRelativeUrl) return maybeRelativeUrl;
  if (maybeRelativeUrl.startsWith("http://") || maybeRelativeUrl.startsWith("https://")) return maybeRelativeUrl;
  if (maybeRelativeUrl.startsWith("//")) return `https:${maybeRelativeUrl}`;
  if (maybeRelativeUrl.startsWith("/")) return `${BASE_URL}${maybeRelativeUrl}`;
  return maybeRelativeUrl;
}

function safeFileExtFromUrl(url) {
  try {
    const u = new URL(url);
    const ext = path.extname(u.pathname).toLowerCase();
    if (ext && ext.length <= 6) return ext;
  } catch {
    // ignore
  }
  return ".jpg";
}

function safeLocalFileName(prefix, url) {
  const ext = safeFileExtFromUrl(url);
  const hash = crypto.createHash("sha1").update(url).digest("hex").slice(0, 10);
  return `${prefix}-${hash}${ext}`;
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; ekyo-marketing-scraper/1.0)",
      Accept: "text/html,application/xhtml+xml",
    },
  });
  if (!res.ok) {
    throw new Error(`Fetch failed ${res.status} for ${url}`);
  }
  return await res.text();
}

async function downloadToFile(url, destPath) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; ekyo-marketing-scraper/1.0)",
      Accept: "image/*,*/*;q=0.8",
    },
  });
  if (!res.ok) throw new Error(`Image download failed ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destPath, buf);
}

function findArticleCards($) {
  // Sur la page "nos actualités", chaque carte est un lien englobant qui contient un <h3> et du texte "Posté le".
  const candidates = $("a[href]")
    .toArray()
    .filter((el) => {
      const $el = $(el);
      const href = $el.attr("href") || "";
      if (!href.startsWith(BASE_URL)) return false;
      if (!href.endsWith("/")) return false;
      if ($el.find("h3").length === 0) return false;
      const txt = $el.text();
      return txt.includes("Posté le") && txt.includes("minutes de lecture");
    });
  return candidates;
}

function parsePostFromCard($, el) {
  const $el = $(el);
  const url = $el.attr("href");
  const title = normalizeWhitespace($el.find("h3").first().text());
  const excerpt = normalizeWhitespace($el.find("p").first().text());
  const text = normalizeWhitespace($el.text());
  const dateMatch = text.match(/Posté le\s+(\d{2}\/\d{2}\/\d{4})/);
  const readTimeMatch = text.match(/(\d+)\s*minutes?\s+de\s+lecture/);
  const date = dateMatch ? dateMatch[1] : "";
  const readTime = readTimeMatch ? `${readTimeMatch[1]} min` : "";
  const slug = extractSlugFromUrl(url);
  return { title, excerpt, date, slug, readTime, url };
}

async function scrapeAllPosts() {
  const postsBySlug = new Map();
  for (let page = 1; page <= 20; page++) {
    const url = page === 1 ? LISTING_URL : `${LISTING_URL}page/${page}/`;
    console.log(`[listing] Fetch ${url}`);
    const html = await fetchText(url);
    const $ = cheerio.load(html);
    const cards = findArticleCards($);
    if (cards.length === 0) {
      console.log(`[listing] No cards found on page ${page}, stop.`);
      break;
    }
    for (const card of cards) {
      const post = parsePostFromCard($, card);
      if (!post.slug || post.slug === "") continue;
      if (!postsBySlug.has(post.slug)) postsBySlug.set(post.slug, post);
    }
    // petit throttling
    await sleep(250);
  }

  // conserver l'ordre : page 1 -> page N (déjà du plus récent au plus ancien)
  const posts = Array.from(postsBySlug.values());
  console.log(`[listing] Found ${posts.length} unique posts`);
  return posts;
}

function extractFeaturedImageUrl($) {
  const style = $(".article-single-image").first().attr("style") || "";
  const m = style.match(/url\(['"]?([^'")]+)['"]?\)/i);
  return m ? absolutizeUrl(m[1]) : null;
}

function rewriteLinksAndCollectImages($content, knownSlugsSet) {
  const imageUrls = new Set();

  // Links
  $content.find("a[href]").each((_, a) => {
    const $a = $content.find(a);
    const hrefRaw = $a.attr("href");
    if (!hrefRaw) return;
    if (hrefRaw.startsWith("#") || hrefRaw.startsWith("mailto:") || hrefRaw.startsWith("tel:")) return;
    const hrefAbs = absolutizeUrl(hrefRaw);
    // si le lien pointe vers un autre article du blog, on le convertit vers /blog/<slug>
    const slug = extractSlugFromUrl(hrefAbs);
    if (hrefAbs.startsWith(BASE_URL) && knownSlugsSet.has(slug)) {
      $a.attr("href", `/blog/${slug}`);
    } else {
      $a.attr("href", hrefAbs);
      $a.attr("target", "_blank");
      $a.attr("rel", "noopener noreferrer");
    }
  });

  // Images <img>
  $content.find("img").each((idx, img) => {
    const $img = $content.find(img);
    const src = $img.attr("src") || $img.attr("data-src") || "";
    if (!src) return;
    const abs = absolutizeUrl(src);
    imageUrls.add(abs);
    $img.attr("src", abs);
    $img.removeAttr("srcset");
    $img.removeAttr("sizes");
    $img.removeAttr("loading");
  });

  // Background images via style="background-image:url(...)"
  $content.find("[style]").each((_, el) => {
    const $el = $content.find(el);
    const style = $el.attr("style") || "";
    const m = style.match(/background-image\s*:\s*url\(['"]?([^'")]+)['"]?\)/i);
    if (!m) return;
    const abs = absolutizeUrl(m[1]);
    imageUrls.add(abs);
  });

  // Clean script/style
  $content.find("script,style").remove();

  return Array.from(imageUrls);
}

function escapeTemplateLiteral(s) {
  return (s || "")
    .replace(/\\\\/g, "\\\\\\\\")
    .replace(/`/g, "\\`")
    .replace(/\\$\\{/g, "\\\\${");
}

function formatTsString(s) {
  return escapeTemplateLiteral(s);
}

async function scrapeArticle(post, knownSlugsSet) {
  console.log(`[article] Fetch ${post.url}`);
  const html = await fetchText(post.url);
  const $ = cheerio.load(html);

  const featuredImageUrl = extractFeaturedImageUrl($);

  const $content = $(".article-single-content").first();
  if ($content.length === 0) {
    throw new Error(`Cannot find .article-single-content for ${post.url}`);
  }

  // rewrite links and collect images
  const imageUrls = rewriteLinksAndCollectImages($content, knownSlugsSet);

  // featured image fallback: si pas d'image "hero", on prend la 1ère image du contenu
  const preferredFeaturedUrl = featuredImageUrl || imageUrls[0] || null;

  // include images in downloads
  const allImages = new Set(imageUrls);
  if (preferredFeaturedUrl) allImages.add(preferredFeaturedUrl);

  // download images & rewrite <img src> to local
  const slugDir = path.join(OUTPUT_IMAGES_DIR, post.slug);
  ensureDir(slugDir);

  const urlToLocal = new Map();
  let imgIndex = 0;

  for (const imgUrl of allImages) {
    const localName =
      imgUrl === preferredFeaturedUrl
        ? safeLocalFileName("featured", imgUrl)
        : safeLocalFileName(`img${++imgIndex}`, imgUrl);
    const absLocalPath = path.join(slugDir, localName);
    const publicPath = `/blog/${post.slug}/${localName}`;
    urlToLocal.set(imgUrl, publicPath);

    if (!fs.existsSync(absLocalPath)) {
      try {
        await downloadToFile(imgUrl, absLocalPath);
        // throttle a bit to stay polite
        await sleep(120);
      } catch (e) {
        console.warn(`[warn] Failed to download ${imgUrl}: ${e.message}`);
      }
    }
  }

  // apply rewrites for <img> tags
  $content.find("img").each((_, img) => {
    const $img = $content.find(img);
    const src = $img.attr("src") || "";
    const local = urlToLocal.get(src);
    if (local) $img.attr("src", local);
  });

  // apply rewrites for background images (style)
  $content.find("[style]").each((_, el) => {
    const $el = $content.find(el);
    const style = $el.attr("style") || "";
    const m = style.match(/background-image\s*:\s*url\(['"]?([^'")]+)['"]?\)/i);
    if (!m) return;
    const abs = absolutizeUrl(m[1]);
    const local = urlToLocal.get(abs);
    if (!local) return;
    const nextStyle = style.replace(m[1], local);
    $el.attr("style", nextStyle);
  });

  const contentHtml = $content.html() || "";
  const featuredImageLocal = preferredFeaturedUrl ? urlToLocal.get(preferredFeaturedUrl) || null : null;

  return { contentHtml, featuredImageLocal };
}

function generateBlogPostsTs(posts, imagesBySlug) {
  const lines = [];
  lines.push("export interface BlogPost {");
  lines.push("  title: string;");
  lines.push("  excerpt: string;");
  lines.push("  date: string; // dd/mm/yyyy");
  lines.push("  slug: string;");
  lines.push("  readTime: string; // \"X min\"");
  lines.push("  image?: string; // /blog/<slug>/featured-....png");
  lines.push("}");
  lines.push("");
  lines.push("export const blogPosts: BlogPost[] = [");
  for (const p of posts) {
    const image = imagesBySlug.get(p.slug) || null;
    lines.push("  {");
    lines.push(`    title: ${JSON.stringify(p.title)},`);
    lines.push(`    excerpt: ${JSON.stringify(p.excerpt)},`);
    lines.push(`    date: ${JSON.stringify(p.date)},`);
    lines.push(`    slug: ${JSON.stringify(p.slug)},`);
    lines.push(`    readTime: ${JSON.stringify(p.readTime)},`);
    if (image) lines.push(`    image: ${JSON.stringify(image)},`);
    lines.push("  },");
  }
  lines.push("];");
  lines.push("");
  return lines.join("\n");
}

function generateBlogContentTsx(posts, htmlBySlug) {
  const lines = [];
  lines.push("// Contenu complet des articles de blog (généré automatiquement)");
  lines.push("import React from \"react\";");
  lines.push("import { parseArticleContent } from \"@/utils/articleParser\";");
  lines.push("");
  lines.push("export const blogContent: Record<string, React.ReactNode> = {");
  for (const p of posts) {
    const html = htmlBySlug.get(p.slug) || "";
    lines.push(`  ${JSON.stringify(p.slug)}: parseArticleContent(\``);
    lines.push(formatTsString(html));
    lines.push("  `),");
  }
  lines.push("};");
  lines.push("");
  return lines.join("\n");
}

async function main() {
  ensureDir(path.dirname(OUTPUT_POSTS_TS));
  ensureDir(path.dirname(OUTPUT_CONTENT_TSX));
  ensureDir(OUTPUT_IMAGES_DIR);

  const posts = await scrapeAllPosts();
  const knownSlugsSet = new Set(posts.map((p) => p.slug));

  const htmlBySlug = new Map();
  const imagesBySlug = new Map();

  for (const post of posts) {
    try {
      const { contentHtml, featuredImageLocal } = await scrapeArticle(post, knownSlugsSet);
      htmlBySlug.set(post.slug, contentHtml);
      if (featuredImageLocal) imagesBySlug.set(post.slug, featuredImageLocal);
    } catch (e) {
      console.error(`[error] ${post.slug}: ${e.message}`);
      htmlBySlug.set(post.slug, `<p>Contenu indisponible temporairement.</p>`);
    }
  }

  fs.writeFileSync(OUTPUT_POSTS_TS, generateBlogPostsTs(posts, imagesBySlug), "utf8");
  fs.writeFileSync(OUTPUT_CONTENT_TSX, generateBlogContentTsx(posts, htmlBySlug), "utf8");

  console.log(`\n✅ Généré: ${OUTPUT_POSTS_TS}`);
  console.log(`✅ Généré: ${OUTPUT_CONTENT_TSX}`);
  console.log(`✅ Images: ${OUTPUT_IMAGES_DIR}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
