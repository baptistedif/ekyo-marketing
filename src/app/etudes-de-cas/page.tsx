"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Calendar, Clock } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export default function EtudesDeCasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#fcfcfd] via-white to-[#beb2ff]/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/10 border border-[#beb2ff]/20 mb-8">
              <Sparkles className="w-4 h-4 text-[#beb2ff]" />
              <span className="text-sm font-medium text-[#beb2ff]">
                Retours d'expérience
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#344054] mb-6 leading-tight">
              Études de cas
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Découvrez comment nos clients utilisent Ekyo pour piloter leur stratégie ESG et atteindre leurs objectifs de durabilité.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((study) => (
              <article
                key={study.slug}
                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#beb2ff] transition-all hover:shadow-xl group hover-lift card-elevated"
              >
                <Link href={`/etudes-de-cas/${study.slug}`}>
                  <div className="h-52 relative overflow-hidden">
                    {study.image ? (
                      <img
                        src={study.image}
                        alt={study.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#beb2ff]/20 via-[#83F0C8]/20 to-[#3F2F8D]/20" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 gap-4 flex-wrap">
                    <div className="flex items-center gap-2 px-2 py-1 bg-gray-50 rounded-lg">
                      <Calendar className="w-4 h-4 text-[#3F2F8D]" />
                      <span className="font-medium">{study.date}</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 bg-gray-50 rounded-lg">
                      <Clock className="w-4 h-4 text-[#83F0C8]" />
                      <span className="font-medium">{study.readTime}</span>
                    </div>
                  </div>

                  <Link href={`/etudes-de-cas/${study.slug}`}>
                    <h2 className="text-xl font-bold text-[#344054] mb-3 group-hover:text-[#3F2F8D] transition-colors line-clamp-2">
                      {study.title}
                    </h2>
                  </Link>

                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{study.excerpt}</p>

                  <Link
                    href={`/etudes-de-cas/${study.slug}`}
                    className="text-[#3F2F8D] font-semibold inline-flex items-center hover:text-[#4c30d6] group-hover:gap-2 transition-all"
                  >
                    Lire l'étude de cas
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-br from-[#fcfcfd] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-4">
              Résultats concrets
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nos clients constatent des améliorations mesurables de leur performance ESG
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "85%", label: "Réduction du temps de reporting", icon: CheckCircle2 },
              { stat: "92%", label: "Satisfaction client", icon: CheckCircle2 },
              { stat: "3x", label: "Augmentation de la précision des données", icon: CheckCircle2 },
            ].map((item, i) => (
              <div key={i} className="text-center bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#beb2ff] transition-all">
                <div className="w-16 h-16 rounded-xl bg-[#beb2ff]/20 mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#beb2ff]" />
                </div>
                <div className="text-4xl font-bold text-[#3F2F8D] mb-2">{item.stat}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
