"use client";

import Link from "next/link";
import { ArrowRight, Building2, Sparkles, CheckCircle2 } from "lucide-react";

export default function EtudesDeCasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#fcfcfd] via-white to-[#beb2ff]/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
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
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-[#beb2ff] transition-all hover:shadow-xl group hover-lift"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-xl bg-[#beb2ff]/20 mr-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Building2 className="text-[#beb2ff]" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#344054]">
                      {study.company}
                    </h3>
                    <p className="text-sm text-gray-600">{study.sector}</p>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-[#344054] mb-4 group-hover:text-[#3F2F8D] transition-colors">
                  {study.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.solutions.map((solution, i) => (
                    <span
                      key={i}
                      className="bg-[#beb2ff]/10 text-[#3F2F8D] px-3 py-1 rounded-full text-xs font-medium border border-[#beb2ff]/20"
                    >
                      {solution}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/etudes-de-cas/${study.slug}`}
                  className="text-[#3F2F8D] font-medium inline-flex items-center hover:text-[#4c30d6] group-hover:gap-2 transition-all"
                >
                  Lire l'étude de cas
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </div>
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

const caseStudies = [
  {
    company: "Groupe Kardol",
    sector: "Industrie",
    title: "Intégration de la dimension environnementale dans l'analyse stratégique",
    description:
      "Découvrez comment le Groupe Kardol a intégré la dimension environnementale dans son analyse stratégique avec Ekyo.",
    solutions: ["Ekyo Mesure", "Ekyo Trajectoire"],
    slug: "groupe-kardol",
  },
  {
    company: "Harmonie Mutuelle",
    sector: "Assurance",
    title: "Adaptation de la plateforme aux besoins spécifiques",
    description:
      "Comment Harmonie Mutuelle a bénéficié d'une plateforme évolutive parfaitement adaptée à ses besoins.",
    solutions: ["Ekyo CSRD", "Ekyo Mesure"],
    slug: "harmonie-mutuelle",
  },
  {
    company: "Picoty",
    sector: "Transport",
    title: "Pilotage du plan de décarbonation",
    description:
      "Picoty utilise Ekyo pour scénariser et piloter son plan de décarbonation avec succès.",
    solutions: ["Ekyo Trajectoire", "Ekyo Mesure"],
    slug: "picoty",
  },
  {
    company: "Constellation",
    sector: "Services",
    title: "Stratégie environnementale complète",
    description:
      "Le Groupe Constellation fait confiance à Ekyo depuis 2022 pour l'élaboration et la gestion de sa stratégie environnementale.",
    solutions: ["Ekyo Mesure", "Ekyo Trajectoire", "Ekyo CSRD"],
    slug: "constellation",
  },
];
