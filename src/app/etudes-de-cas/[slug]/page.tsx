"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, Sparkles, Share2, BookOpen } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { caseStudiesContent } from "@/data/caseStudiesContent";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = use(params);
  const study = caseStudies.find((p) => p.slug === slug);
  const currentIndex = caseStudies.findIndex((p) => p.slug === slug);
  const nextStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const prevStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;
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
          title: study?.title,
          text: study?.excerpt,
          url: window.location.href,
        });
      } catch {
        // ignore
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Lien copié dans le presse-papiers !");
    }
  };

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Étude de cas non trouvée</h1>
          <Link href="/etudes-de-cas" className="text-[#3F2F8D] hover:underline">
            Retour aux études de cas
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
            href="/etudes-de-cas"
            className="inline-flex items-center gap-2 text-[#3F2F8D] hover:text-[#4c30d6] mb-8 transition-all group px-4 py-2 rounded-lg hover:bg-[#3F2F8D]/5 hover-lift"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Retour aux études de cas</span>
          </Link>

          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/10 border border-[#beb2ff]/20 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#beb2ff]" />
              <span className="text-sm font-semibold text-[#beb2ff]">Étude de cas</span>
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
            {study.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
              <Calendar className="w-4 h-4 text-[#3F2F8D]" />
              <span className="font-semibold text-gray-700">{study.date}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
              <Clock className="w-4 h-4 text-[#83F0C8]" />
              <span className="font-semibold text-gray-700">{study.readTime} de lecture</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
              <BookOpen className="w-4 h-4 text-[#beb2ff]" />
              <span className="font-semibold text-gray-700">Étude</span>
            </div>
          </div>

          {study.image && (
            <div className="mt-2 mb-10">
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
                <img src={study.image} alt={study.title} className="w-full h-auto" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 md:p-10 lg:p-14 card-elevated">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed">
                <div className="p-6 md:p-8 mb-10 bg-gradient-to-br from-[#beb2ff]/5 via-[#83F0C8]/5 to-[#beb2ff]/5 rounded-xl border-l-4 border-[#3F2F8D] shadow-sm animate-fade-in">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">{study.excerpt}</p>
                </div>

                <div className="article-content space-y-8 animate-fade-in">
                  {caseStudiesContent[study.slug] || (
                    <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 text-center">
                      <p className="text-gray-600 italic">Le contenu complet sera disponible prochainement.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Navigation */}
      {(prevStudy || nextStudy) && (
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {prevStudy && (
                <Link
                  href={`/etudes-de-cas/${prevStudy.slug}`}
                  className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-[#beb2ff] transition-all hover:shadow-lg hover-lift card-elevated"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-semibold">Étude précédente</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#344054] group-hover:text-[#3F2F8D] transition-colors line-clamp-2">
                    {prevStudy.title}
                  </h3>
                </Link>
              )}
              {nextStudy && (
                <Link
                  href={`/etudes-de-cas/${nextStudy.slug}`}
                  className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-[#beb2ff] transition-all hover:shadow-lg hover-lift card-elevated md:ml-auto text-right md:text-left"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 md:justify-end">
                    <span className="font-semibold">Étude suivante</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-[#344054] group-hover:text-[#3F2F8D] transition-colors line-clamp-2">
                    {nextStudy.title}
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

