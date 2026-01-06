/**
 * Scrape les "Études de cas" depuis ekyo.app et génère :
 * - src/data/caseStudies.ts
 * - src/data/caseStudiesContent.tsx
 * - public/case-studies/<slug>/... (images)
 *
 * Usage:
 *   node scripts/scrape-case-studies.js
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const cheerio = require("cheerio");

const BASE_URL = "https://www.ekyo.app";
const LISTING_URL = `${BASE_URL}/nos-actualites/?category=etudes-de-cas`;

const OUTPUT_STUDIES_TS = path.join(__dirname, "..", "src", "data", "caseStudies.ts");
const OUTPUT_CONTENT_TSX = path.join(__dirname, "..", "src", "data", "caseStudiesContent.tsx");
const OUTPUT_IMAGES_DIR = path.join(__dirname, "..", "public", "case-studies");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function normalizeWhitespace(s) {
  return (s || "").replace(/\s+/g, " ").trim();
}

function normalizeCategoryLabel(s) {
  return normalizeWhitespace(s)
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
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
  if (!res.ok) throw new Error(`Fetch failed ${res.status} for ${url}`);
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
  // cartes = <a href> englobant, avec <h3> et texte "Posté le" et "minutes de lecture"
  return $("a[href]")
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
}

function parseCard($, el) {
  const $el = $(el);
  const url = $el.attr("href");
  const title = normalizeWhitespace($el.find("h3").first().text());
  const excerpt = normalizeWhitespace($el.find("p").first().text());
  const fullText = normalizeWhitespace($el.text());
  const dateMatch = fullText.match(/Posté le\s+(\d{2}\/\d{2}\/\d{4})/);
  const readTimeMatch = fullText.match(/(\d+)\s*minutes?\s+de\s+lecture/);
  const date = dateMatch ? dateMatch[1] : "";
  const readTime = readTimeMatch ? `${readTimeMatch[1]} min` : "";
  const slug = extractSlugFromUrl(url);

  // label catégorie = badge dans la carte
  const category = normalizeWhitespace($el.find(".category-badge").first().text());

  return { title, excerpt, date, slug, readTime, url, category };
}

async function loadBlogSlugsIfAvailable() {
  try {
    // Node v24+ arrive à require des .ts simples; sinon, on ignore.
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const mod = require(path.join(__dirname, "..", "src", "data", "blogPosts.ts"));
    const posts = mod?.blogPosts || [];
    return new Set(posts.map((p) => p.slug).filter(Boolean));
  } catch {
    return new Set();
  }
}

async function scrapeCaseStudyList() {
  const bySlug = new Map();
  const targetCategory = "etudes de cas";

  for (let page = 1; page <= 10; page++) {
    const url =
      page === 1 ? LISTING_URL : `${BASE_URL}/nos-actualites/page/${page}/?category=etudes-de-cas`;
    console.log(`[listing] Fetch ${url}`);
    const html = await fetchText(url);
    const $ = cheerio.load(html);
    const cards = findArticleCards($);
    if (cards.length === 0) {
      console.log(`[listing] No cards found on page ${page}, stop.`);
      break;
    }

    for (const card of cards) {
      const item = parseCard($, card);
      if (!item.slug) continue;
      // Sur cette page, le filtre mélange d'autres catégories : on garde uniquement celles affichées comme "Études de cas"
      if (normalizeCategoryLabel(item.category) !== targetCategory) continue;
      if (!bySlug.has(item.slug)) bySlug.set(item.slug, item);
    }

    await sleep(250);
  }

  const studies = Array.from(bySlug.values());
  console.log(`[listing] Found ${studies.length} case studies`);
  return studies;
}

function extractFeaturedImageUrl($) {
  const style = $(".article-single-image").first().attr("style") || "";
  const m = style.match(/url\(['"]?([^'")]+)['"]?\)/i);
  return m ? absolutizeUrl(m[1]) : null;
}

function rewriteLinksAndCollectImages($content, routeBySlug) {
  const imageUrls = new Set();

  // Links
  $content.find("a[href]").each((_, a) => {
    const $a = $content.find(a);
    const hrefRaw = $a.attr("href");
    if (!hrefRaw) return;
    if (hrefRaw.startsWith("#") || hrefRaw.startsWith("mailto:") || hrefRaw.startsWith("tel:")) return;

    const hrefAbs = absolutizeUrl(hrefRaw);
    const slug = extractSlugFromUrl(hrefAbs);
    if (hrefAbs.startsWith(BASE_URL) && routeBySlug.has(slug)) {
      $a.attr("href", routeBySlug.get(slug));
    } else {
      $a.attr("href", hrefAbs);
      $a.attr("target", "_blank");
      $a.attr("rel", "noopener noreferrer");
    }
  });

  // Images <img>
  $content.find("img").each((_, img) => {
    const $img = $content.find(img);
    const src = $img.attr("src") || $img.attr("data-src") || $img.attr("data-lazy-src") || "";
    if (!src) return;
    const abs = absolutizeUrl(src);
    imageUrls.add(abs);
    $img.attr("src", abs);
    $img.removeAttr("srcset");
    $img.removeAttr("sizes");
    $img.removeAttr("loading");
    $img.removeAttr("data-src");
    $img.removeAttr("data-lazy-src");
  });

  // Iframes lazyloaded (ex: YouTube)
  $content.find("iframe").each((_, iframe) => {
    const $iframe = $content.find(iframe);
    const src = $iframe.attr("src") || "";
    const lazy = $iframe.attr("data-lazy-src") || "";
    if (src === "about:blank" && lazy) {
      $iframe.attr("src", lazy);
      $iframe.removeAttr("data-lazy-src");
    }
  });

  // Background images
  $content.find("[style]").each((_, el) => {
    const $el = $content.find(el);
    const style = $el.attr("style") || "";
    const m = style.match(/background-image\s*:\s*url\(['"]?([^'")]+)['"]?\)/i);
    if (!m) return;
    imageUrls.add(absolutizeUrl(m[1]));
  });

  $content.find("script,style").remove();
  return Array.from(imageUrls);
}

function escapeTemplateLiteral(s) {
  return (s || "")
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

async function scrapeCaseStudy(study, routeBySlug) {
  console.log(`[study] Fetch ${study.url}`);
  const html = await fetchText(study.url);
  const $ = cheerio.load(html);

  const featuredImageUrl = extractFeaturedImageUrl($);
  const $content = $(".article-single-content").first();
  if ($content.length === 0) throw new Error(`Cannot find .article-single-content for ${study.url}`);

  const imageUrls = rewriteLinksAndCollectImages($content, routeBySlug);
  const preferredFeaturedUrl = featuredImageUrl || imageUrls[0] || null;

  const allImages = new Set(imageUrls);
  if (preferredFeaturedUrl) allImages.add(preferredFeaturedUrl);

  const slugDir = path.join(OUTPUT_IMAGES_DIR, study.slug);
  ensureDir(slugDir);

  const urlToLocal = new Map();
  let imgIndex = 0;

  for (const imgUrl of allImages) {
    const localName =
      imgUrl === preferredFeaturedUrl
        ? safeLocalFileName("featured", imgUrl)
        : safeLocalFileName(`img${++imgIndex}`, imgUrl);
    const absLocalPath = path.join(slugDir, localName);
    const publicPath = `/case-studies/${study.slug}/${localName}`;
    urlToLocal.set(imgUrl, publicPath);

    if (!fs.existsSync(absLocalPath)) {
      try {
        await downloadToFile(imgUrl, absLocalPath);
        await sleep(120);
      } catch (e) {
        console.warn(`[warn] Failed to download ${imgUrl}: ${e.message}`);
      }
    }
  }

  $content.find("img").each((_, img) => {
    const $img = $content.find(img);
    const src = $img.attr("src") || "";
    const local = urlToLocal.get(src);
    if (local) $img.attr("src", local);
  });

  $content.find("[style]").each((_, el) => {
    const $el = $content.find(el);
    const style = $el.attr("style") || "";
    const m = style.match(/background-image\s*:\s*url\(['"]?([^'")]+)['"]?\)/i);
    if (!m) return;
    const abs = absolutizeUrl(m[1]);
    const local = urlToLocal.get(abs);
    if (!local) return;
    $el.attr("style", style.replace(m[1], local));
  });

  const contentHtml = $content.html() || "";
  const featuredImageLocal = preferredFeaturedUrl ? urlToLocal.get(preferredFeaturedUrl) || null : null;
  return { contentHtml, featuredImageLocal };
}

function generateCaseStudiesTs(studies, imagesBySlug) {
  const lines = [];
  lines.push("export interface CaseStudy {");
  lines.push("  title: string;");
  lines.push("  excerpt: string;");
  lines.push("  date: string; // dd/mm/yyyy");
  lines.push("  slug: string;");
  lines.push("  readTime: string; // \"X min\"");
  lines.push("  image?: string; // /case-studies/<slug>/featured-....png");
  lines.push("}");
  lines.push("");
  lines.push("export const caseStudies: CaseStudy[] = [");
  for (const s of studies) {
    const image = imagesBySlug.get(s.slug) || null;
    lines.push("  {");
    lines.push(`    title: ${JSON.stringify(s.title)},`);
    lines.push(`    excerpt: ${JSON.stringify(s.excerpt)},`);
    lines.push(`    date: ${JSON.stringify(s.date)},`);
    lines.push(`    slug: ${JSON.stringify(s.slug)},`);
    lines.push(`    readTime: ${JSON.stringify(s.readTime)},`);
    if (image) lines.push(`    image: ${JSON.stringify(image)},`);
    lines.push("  },");
  }
  lines.push("];");
  lines.push("");
  return lines.join("\n");
}

function generateCaseStudiesContentTsx(studies, htmlBySlug) {
  const lines = [];
  lines.push("// Contenu complet des études de cas (généré automatiquement)");
  lines.push("import React from \"react\";");
  lines.push("import { parseArticleContent } from \"@/utils/articleParser\";");
  lines.push("");
  lines.push("export const caseStudiesContent: Record<string, React.ReactNode> = {");
  for (const s of studies) {
    const html = htmlBySlug.get(s.slug) || "";
    lines.push(`  ${JSON.stringify(s.slug)}: parseArticleContent(\``);
    lines.push(escapeTemplateLiteral(html));
    lines.push("  `),");
  }
  lines.push("};");
  lines.push("");
  return lines.join("\n");
}

async function main() {
  ensureDir(path.dirname(OUTPUT_STUDIES_TS));
  ensureDir(path.dirname(OUTPUT_CONTENT_TSX));
  ensureDir(OUTPUT_IMAGES_DIR);

  const studies = await scrapeCaseStudyList();

  const blogSlugs = await loadBlogSlugsIfAvailable();
  const caseStudySlugs = new Set(studies.map((s) => s.slug));

  // Pour la réécriture des liens ekyo.app -> routes internes
  // priorité aux études de cas
  const routeBySlug = new Map();
  for (const slug of blogSlugs) routeBySlug.set(slug, `/blog/${slug}`);
  for (const slug of caseStudySlugs) routeBySlug.set(slug, `/etudes-de-cas/${slug}`);

  const htmlBySlug = new Map();
  const imagesBySlug = new Map();

  for (const s of studies) {
    try {
      const { contentHtml, featuredImageLocal } = await scrapeCaseStudy(s, routeBySlug);
      htmlBySlug.set(s.slug, contentHtml);
      if (featuredImageLocal) imagesBySlug.set(s.slug, featuredImageLocal);
    } catch (e) {
      console.error(`[error] ${s.slug}: ${e.message}`);
      htmlBySlug.set(s.slug, `<p>Contenu indisponible temporairement.</p>`);
    }
  }

  fs.writeFileSync(OUTPUT_STUDIES_TS, generateCaseStudiesTs(studies, imagesBySlug), "utf8");
  fs.writeFileSync(OUTPUT_CONTENT_TSX, generateCaseStudiesContentTsx(studies, htmlBySlug), "utf8");

  console.log(`\n✅ Généré: ${OUTPUT_STUDIES_TS}`);
  console.log(`✅ Généré: ${OUTPUT_CONTENT_TSX}`);
  console.log(`✅ Images: ${OUTPUT_IMAGES_DIR}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

