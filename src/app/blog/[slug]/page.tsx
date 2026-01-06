"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, Sparkles, Share2, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { blogContent } from "@/data/blogContent";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const prevPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / documentHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Lien copié dans le presse-papiers !");
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <Link href="/blog" className="text-[#3F2F8D] hover:underline">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#3F2F8D] via-[#6F5DE9] to-[#beb2ff] transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#fcfcfd] via-white to-[#beb2ff]/5 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#3F2F8D] hover:text-[#4c30d6] mb-8 transition-all group px-4 py-2 rounded-lg hover:bg-[#3F2F8D]/5 hover-lift"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Retour au blog</span>
          </Link>

          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/10 border border-[#beb2ff]/20 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#beb2ff]" />
              <span className="text-sm font-semibold text-[#beb2ff]">Actus</span>
            </div>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border-2 border-gray-200 text-gray-700 hover:border-[#beb2ff] hover:text-[#3F2F8D] transition-all hover-lift"
            >
              <Share2 className="w-4 h-4" />
              <span className="font-medium text-sm">Partager</span>
            </button>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#344054] mb-8 leading-tight animate-slide-up">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
              <Calendar className="w-4 h-4 text-[#3F2F8D]" />
              <span className="font-semibold text-gray-700">{post.date}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
              <Clock className="w-4 h-4 text-[#83F0C8]" />
              <span className="font-semibold text-gray-700">{post.readTime} de lecture</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
              <BookOpen className="w-4 h-4 text-[#beb2ff]" />
              <span className="font-semibold text-gray-700">Article</span>
            </div>
          </div>

          {post.image && (
            <div className="mt-2 mb-10">
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 md:p-10 lg:p-14 card-elevated">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed">
                {/* Excerpt */}
                <div className="p-6 md:p-8 mb-10 bg-gradient-to-br from-[#beb2ff]/5 via-[#83F0C8]/5 to-[#beb2ff]/5 rounded-xl border-l-4 border-[#3F2F8D] shadow-sm animate-fade-in">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                    {post.excerpt}
                  </p>
                </div>
                
                {/* Contenu de l'article */}
                <div className="article-content space-y-8 animate-fade-in">
                  {blogContent[post.slug] || (
                    <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 text-center">
                      <p className="text-gray-600 italic">
                        Le contenu complet de l'article sera disponible prochainement.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#3F2F8D] via-[#6F5DE9] to-[#3F2F8D] relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Engager une stratégie ESG
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contactez nos équipes d'experts pour définir les objectifs climatiques de votre entreprise.
          </p>
          <a
            href="https://calendly.com/d/ckwf-jsd-2wx/decouvrez-ekyo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#3F2F8D] rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover-lift transform hover:scale-105"
          >
            Demander une démo
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-[#344054] mb-4">
              Découvrir plus d'articles
            </h2>
            <p className="text-gray-600 text-lg">
              Continuez votre lecture avec nos autres actualités
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost, index) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#beb2ff] transition-all hover:shadow-xl group hover-lift card-elevated animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 group-hover:scale-105 transition-transform relative overflow-hidden">
                    {relatedPost.image ? (
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#beb2ff]/20 via-[#83F0C8]/20 to-[#3F2F8D]/20" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#3F2F8D] opacity-0 group-hover:opacity-100 transition-opacity">
                      Lire
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3 gap-4 flex-wrap">
                      <div className="flex items-center gap-2 px-2 py-1 bg-gray-50 rounded-lg">
                        <Calendar className="w-4 h-4 text-[#3F2F8D]" />
                        <span className="font-medium">{relatedPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 bg-gray-50 rounded-lg">
                        <Clock className="w-4 h-4 text-[#83F0C8]" />
                        <span className="font-medium">{relatedPost.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#344054] mb-3 group-hover:text-[#3F2F8D] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{relatedPost.excerpt}</p>
                    <div className="text-[#3F2F8D] font-semibold inline-flex items-center hover:text-[#4c30d6] group-hover:gap-2 transition-all">
                      Lire la suite
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      {(prevPost || nextPost) && (
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {prevPost && (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-[#beb2ff] transition-all hover:shadow-lg hover-lift card-elevated"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-semibold">Article précédent</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#344054] group-hover:text-[#3F2F8D] transition-colors line-clamp-2">
                    {prevPost.title}
                  </h3>
                </Link>
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-[#beb2ff] transition-all hover:shadow-lg hover-lift card-elevated md:ml-auto text-right md:text-left"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 md:justify-end">
                    <span className="font-semibold">Article suivant</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-[#344054] group-hover:text-[#3F2F8D] transition-colors line-clamp-2">
                    {nextPost.title}
                  </h3>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
