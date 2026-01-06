"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Sparkles, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#fcfcfd] via-white to-[#beb2ff]/5 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/10 border border-[#beb2ff]/20 mb-8 shadow-sm animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#beb2ff]" />
              <span className="text-sm font-semibold text-[#beb2ff]">
                Ressources & Actualités
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#344054] mb-6 leading-tight animate-slide-up">
              Nos actualités
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-1000">
              Découvrez nos articles de blog, études de cas et actualités sur le climat et la performance ESG.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm text-gray-600 animate-scale-in">
              <span className="font-medium">{blogPosts.length} articles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {currentPosts.map((post, index) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#beb2ff] transition-all hover:shadow-xl group hover-lift card-elevated animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="h-48 group-hover:scale-105 transition-transform relative overflow-hidden">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
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
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 gap-4 flex-wrap">
                    <div className="flex items-center gap-2 px-2 py-1 bg-gray-50 rounded-lg">
                      <Calendar className="w-4 h-4 text-[#3F2F8D]" />
                      <span className="font-medium">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 bg-gray-50 rounded-lg">
                      <Clock className="w-4 h-4 text-[#83F0C8]" />
                      <span className="font-medium">{post.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold text-[#344054] mb-3 group-hover:text-[#3F2F8D] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#3F2F8D] font-semibold inline-flex items-center hover:text-[#4c30d6] group-hover:gap-2 transition-all"
                  >
                    Lire la suite
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border-2 border-gray-200 bg-white text-gray-700 hover:border-[#beb2ff] hover:text-[#3F2F8D] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 font-medium"
              >
                <ChevronLeft className="w-4 h-4" />
                Précédent
              </button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-lg border-2 font-semibold transition-all min-w-[44px] ${
                          currentPage === page
                            ? "bg-[#3F2F8D] text-white border-[#3F2F8D] shadow-lg"
                            : "bg-white text-gray-700 border-gray-200 hover:border-[#beb2ff] hover:text-[#3F2F8D]"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <span key={page} className="px-2 text-gray-400">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border-2 border-gray-200 bg-white text-gray-700 hover:border-[#beb2ff] hover:text-[#3F2F8D] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 font-medium"
              >
                Suivant
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Page info */}
          <div className="text-center mt-8 text-sm text-gray-500">
            Page {currentPage} sur {totalPages} • {currentPosts.length} article{currentPosts.length > 1 ? "s" : ""} affiché{currentPosts.length > 1 ? "s" : ""}
          </div>
        </div>
      </section>
    </>
  );
}
