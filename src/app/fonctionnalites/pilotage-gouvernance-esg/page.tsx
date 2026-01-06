"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Target, Sparkles, BarChart3, TrendingUp, CheckSquare, Users, AlertTriangle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PilotageGouvernanceVisual } from "@/components/marketing/FeatureVisualization";
import { FeatureCardVisual } from "@/components/marketing/FeatureCardVisual";

export default function PilotageGouvernanceESGPage() {
  const featuresRef = useScrollAnimation();

  return (
    <>
      <section className="relative py-32 bg-gradient-to-br from-[#fcfcfd] via-white to-[#3F2F8D]/5 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#3F2F8D]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3F2F8D]/10 border border-[#3F2F8D]/20 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#3F2F8D]" />
              <span className="text-sm font-medium text-[#3F2F8D]">Fonctionnalité</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#344054] mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Structurez, pilotez et animez votre démarche ESG
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Pensé pour le pilotage stratégique et opérationnel des ETI et groupes.
            </p>
            <Link href="/contact?intent=demo" className="group bg-[#3F2F8D] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Découvrir cette fonctionnalité
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Visualisation principale */}
      <section className="py-32 bg-gradient-to-br from-[#fcfcfd] to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                Visualisez votre pilotage ESG en action
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Des tableaux de bord interactifs pour suivre vos enjeux, KPIs et plans d'actions en temps réel.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Tableaux de bord personnalisables par rôle</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Suivi en temps réel des indicateurs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Alertes et notifications automatiques</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#3F2F8D] to-[#6F5DE9] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - Pilotage & Gouvernance ESG</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                  <PilotageGouvernanceVisual />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Matérialité et priorisation des enjeux */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3F2F8D]/10 border border-[#3F2F8D]/20 mb-6">
                <Target className="w-4 h-4 text-[#3F2F8D]" />
                <span className="text-sm font-medium text-[#3F2F8D]">Fonctionnalité</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {features[0].title}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {features[0].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Méthodologie structurée conforme ESRS</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Priorisation automatique des enjeux</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Matrice de matérialité interactive</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#3F2F8D] to-[#6F5DE9] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[0].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="materiality"
                    title={features[0].title}
                    description={features[0].description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Objectifs & KPIs ESG / climat */}
      <section className="py-32 bg-gradient-to-br from-[#fcfcfd] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#83F0C8] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[1].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="kpis"
                    title={features[1].title}
                    description={features[1].description}
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83F0C8]/10 border border-[#83F0C8]/20 mb-6">
                <BarChart3 className="w-4 h-4 text-[#83F0C8]" />
                <span className="text-sm font-medium text-[#83F0C8]">Fonctionnalité</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {features[1].title}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {features[1].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Tableaux de bord dédiés en temps réel</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Suivi des tendances et alertes automatiques</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Objectifs personnalisables par indicateur</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Plans d'actions avec ownership et suivi */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/10 border border-[#beb2ff]/20 mb-6">
                <CheckSquare className="w-4 h-4 text-[#beb2ff]" />
                <span className="text-sm font-medium text-[#beb2ff]">Fonctionnalité</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {features[2].title}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {features[2].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Responsabilités claires avec ownership</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Suivi en temps réel de la progression</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Timeline et échéances automatiques</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#beb2ff] to-[#83F0C8] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[2].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="actions"
                    title={features[2].title}
                    description={features[2].description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Tableaux de bord par rôle */}
      <section className="py-32 bg-gradient-to-br from-[#fcfcfd] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#3F2F8D] to-[#6F5DE9] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[3].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="dashboards"
                    title={features[3].title}
                    description={features[3].description}
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3F2F8D]/10 border border-[#3F2F8D]/20 mb-6">
                <TrendingUp className="w-4 h-4 text-[#3F2F8D]" />
                <span className="text-sm font-medium text-[#3F2F8D]">Fonctionnalité</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {features[3].title}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {features[3].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Vues personnalisables par profil</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Alertes et notifications ciblées</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Export et partage facilités</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Suivi des risques et opportunités */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3F2F8D]/10 border border-[#3F2F8D]/20 mb-6">
                <AlertTriangle className="w-4 h-4 text-[#3F2F8D]" />
                <span className="text-sm font-medium text-[#3F2F8D]">Fonctionnalité</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {features[4].title}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {features[4].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Cartographie visuelle des risques</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Alertes automatiques selon la sévérité</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Plans de mitigation intégrés</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#3F2F8D] to-[#6F5DE9] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[4].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="risks"
                    title={features[4].title}
                    description={features[4].description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-[#fcfcfd] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">Pensé pour le pilotage stratégique et opérationnel</h2>
          <p className="text-xl text-gray-600 mb-10">Des ETI et groupes avec des outils adaptés à votre organisation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?intent=demo" className="bg-[#3F2F8D] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl">
              Découvrir cette fonctionnalité
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link href="/" className="bg-white text-[#3F2F8D] border-2 border-[#3F2F8D] px-8 py-4 rounded-lg font-medium hover:bg-[#3F2F8D]/5 transition-all inline-flex items-center justify-center">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const features = [
  {
    icon: <Target className="w-8 h-8 text-[#3F2F8D]" />,
    title: "Matérialité et priorisation des enjeux",
    description: "Identifiez et priorisez vos enjeux ESG selon une méthodologie structurée et conforme aux ESRS.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-[#3F2F8D]" />,
    title: "Objectifs & KPIs ESG / climat",
    description: "Définissez et pilotez vos objectifs et indicateurs en temps réel avec des tableaux de bord dédiés.",
  },
  {
    icon: <CheckSquare className="w-8 h-8 text-[#3F2F8D]" />,
    title: "Plans d'actions avec ownership et suivi",
    description: "Structurez et pilotez vos plans d'actions avec des responsabilités claires et un suivi en temps réel.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#3F2F8D]" />,
    title: "Tableaux de bord COMEX, RSE, DAF, Achats, RH",
    description: "Pilotez votre performance ESG à tous les niveaux avec des tableaux de bord adaptés à chaque rôle.",
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-[#3F2F8D]" />,
    title: "Suivi des risques et opportunités",
    description: "Identifiez et pilotez vos risques ESG avec des outils dédiés et des alertes automatiques.",
  },
];

