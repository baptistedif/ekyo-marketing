"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Database, Sparkles, Shield, FileCheck, Network, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { DataHubVisual } from "@/components/marketing/FeatureVisualization";
import { FeatureCardVisual } from "@/components/marketing/FeatureCardVisual";

export default function ESGCarboneDataHubPage() {
  const featuresRef = useScrollAnimation();

  return (
    <>
      <section className="relative py-32 bg-gradient-to-br from-[#fcfcfd] via-white to-[#83F0C8]/5 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#83F0C8]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83F0C8]/10 border border-[#83F0C8]/20 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#83F0C8]" />
              <span className="text-sm font-medium text-[#83F0C8]">Fonctionnalité</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#344054] mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Centralisez, fiabilisez et tracez vos données ESG et climat
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Votre référentiel unique pour des données fiables, consolidées et auditables.
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
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#83F0C8] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - ESG & Carbone Data Hub</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                  <DataHubVisual />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                Centralisez toutes vos données ESG & climat
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connectez vos systèmes existants et centralisez vos données dans un hub unique, fiable et traçable.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Intégration avec ERP, Finance, SIRH, Appli métier, ...</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Contrôles qualité et validation automatiques</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Audit-trail complet pour chaque donnée</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Collecte multi-sources */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83F0C8]/10 border border-[#83F0C8]/20 mb-6">
                <Database className="w-4 h-4 text-[#83F0C8]" />
                <span className="text-sm font-medium text-[#83F0C8]">Fonctionnalité</span>
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
                  <span className="text-gray-700">Collecte automatisée depuis toutes vos sources</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Multi-entités avec consolidation automatique</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Synchronisation en temps réel</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#83F0C8] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[0].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="collecte"
                    title={features[0].title}
                    description={features[0].description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Imports et connecteurs */}
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
                    type="integrations"
                    title={features[1].title}
                    description={features[1].description}
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/10 border border-[#beb2ff]/20 mb-6">
                <Zap className="w-4 h-4 text-[#beb2ff]" />
                <span className="text-sm font-medium text-[#beb2ff]">Fonctionnalité</span>
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
                  <span className="text-gray-700">Connecteurs pré-configurés pour vos systèmes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Import automatique des données</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Configuration simple et rapide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Contrôles qualité */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83F0C8]/10 border border-[#83F0C8]/20 mb-6">
                <Shield className="w-4 h-4 text-[#83F0C8]" />
                <span className="text-sm font-medium text-[#83F0C8]">Fonctionnalité</span>
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
                  <span className="text-gray-700">Règles de validation personnalisables</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Détection automatique des anomalies</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Alertes en temps réel</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#83F0C8] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[2].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="controles"
                    title={features[2].title}
                    description={features[2].description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Audit-trail */}
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
                    <span className="text-white text-sm font-medium">Ekyo - {features[3].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="audit"
                    title={features[3].title}
                    description={features[3].description}
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83F0C8]/10 border border-[#83F0C8]/20 mb-6">
                <FileCheck className="w-4 h-4 text-[#83F0C8]" />
                <span className="text-sm font-medium text-[#83F0C8]">Fonctionnalité</span>
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
                  <span className="text-gray-700">Historique complet de toutes les modifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Justifications documentées pour chaque donnée</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Préparation optimale aux audits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Périmètres */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/10 border border-[#beb2ff]/20 mb-6">
                <Network className="w-4 h-4 text-[#beb2ff]" />
                <span className="text-sm font-medium text-[#beb2ff]">Fonctionnalité</span>
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
                  <span className="text-gray-700">Gestion multi-périmètres (Scopes 1, 2, 3)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Cartographie de la chaîne de valeur</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Outils adaptés à votre organisation</span>
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
                    <span className="text-white text-sm font-medium">Ekyo - {features[4].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="perimetres"
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">Votre référentiel unique</h2>
          <p className="text-xl text-gray-600 mb-10">Pour des données fiables, consolidées et auditables.</p>
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
    icon: <Database className="w-8 h-8 text-[#83F0C8]" />,
    title: "Collecte multi-sources & multi-entités",
    description: "Automatisez la collecte de vos données ESG et climat depuis toutes vos sources et entités.",
  },
  {
    icon: <Zap className="w-8 h-8 text-[#83F0C8]" />,
    title: "Imports et connecteurs finance / IT / comptabilité",
    description: "Connectez vos systèmes existants pour automatiser la collecte et gagner du temps.",
  },
  {
    icon: <Shield className="w-8 h-8 text-[#83F0C8]" />,
    title: "Contrôles qualité et cohérence",
    description: "Fiabilisez vos données avec des contrôles automatiques et des alertes en temps réel.",
  },
  {
    icon: <FileCheck className="w-8 h-8 text-[#83F0C8]" />,
    title: "Audit-trail complet",
    description: "Conservez l'historique de toutes vos données et justifications pour faciliter les audits.",
  },
  {
    icon: <Network className="w-8 h-8 text-[#83F0C8]" />,
    title: "Gestion des périmètres & chaîne de valeur",
    description: "Gérez vos périmètres et votre chaîne de valeur avec des outils adaptés à votre organisation.",
  },
];

