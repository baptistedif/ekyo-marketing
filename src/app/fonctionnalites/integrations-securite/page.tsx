"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Sparkles, Zap, Lock, Server, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { IntegrationsSecuriteVisual } from "@/components/marketing/FeatureVisualization";
import { FeatureCardVisual } from "@/components/marketing/FeatureCardVisual";

export default function IntegrationsSecuritePage() {
  const featuresRef = useScrollAnimation();

  return (
    <>
      <section className="relative py-32 bg-gradient-to-br from-[#fcfcfd] via-white to-[#3F2F8D]/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#3F2F8D]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3F2F8D]/10 border border-[#3F2F8D]/20 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#3F2F8D]" />
              <span className="text-sm font-medium text-[#3F2F8D]">Fonctionnalité</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#344054] mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Une plateforme sécurisée, intégrée à votre système d'information
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Une plateforme fiable, sécurisée et industrielle, conçue pour les ETI et groupes.
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
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#3F2F8D] to-[#6F5DE9] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - Intégrations & Sécurité</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                  <IntegrationsSecuriteVisual />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                Intégrez Ekyo à votre système d'information
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connectez vos systèmes existants via API, SSO et intégrations natives. Sécurité et conformité RGPD garanties.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Intégrations ERP, comptabilité, achats, IT</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">SSO / IAM pour la gestion des accès</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Hébergement sécurisé et conforme RGPD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Intégrations ERP */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3F2F8D]/10 border border-[#3F2F8D]/20 mb-6">
                <Zap className="w-4 h-4 text-[#3F2F8D]" />
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
                  <span className="text-gray-700">Connecteurs pré-configurés pour vos systèmes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Synchronisation automatique des données</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Configuration simple et rapide</span>
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
                    type="integrations"
                    title={features[0].title}
                    description={features[0].description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: API & automatisations */}
      <section className="py-32 bg-gradient-to-br from-[#fcfcfd] to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#3F2F8D] to-[#6F5DE9] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[1].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="api"
                    title={features[1].title}
                    description={features[1].description}
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/10 border border-[#beb2ff]/20 mb-6">
                <Code className="w-4 h-4 text-[#beb2ff]" />
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
                  <span className="text-gray-700">API REST complète avec documentation Swagger</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">API GraphQL pour requêtes flexibles</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">SDK et exemples de code disponibles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: SSO / IAM */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3F2F8D]/10 border border-[#3F2F8D]/20 mb-6">
                <Lock className="w-4 h-4 text-[#3F2F8D]" />
                <span className="text-sm font-medium text-[#3F2F8D]">Fonctionnalité</span>
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
                  <span className="text-gray-700">Authentification unique (SSO)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Gestion centralisée des identités</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Standards de sécurité élevés</span>
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
                    <span className="text-white text-sm font-medium">Ekyo - {features[2].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="sso"
                    title={features[2].title}
                    description={features[2].description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Hébergement sécurisé */}
      <section className="py-32 bg-gradient-to-br from-[#fcfcfd] to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
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
                    type="hebergement"
                    title={features[3].title}
                    description={features[3].description}
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83F0C8]/10 border border-[#83F0C8]/20 mb-6">
                <Server className="w-4 h-4 text-[#83F0C8]" />
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
                  <span className="text-gray-700">Infrastructure sécurisée et certifiée</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Conformité RGPD garantie</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Haute disponibilité (99.9% uptime)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Journalisation & gouvernance */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3F2F8D]/10 border border-[#3F2F8D]/20 mb-6">
                <Shield className="w-4 h-4 text-[#3F2F8D]" />
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
                  <span className="text-gray-700">Journalisation complète de toutes les actions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Gestion fine des droits d'accès</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Outils de gouvernance avancés</span>
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
                    type="gouvernance"
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">Une plateforme fiable, sécurisée et industrielle</h2>
          <p className="text-xl text-gray-600 mb-10">Conçue pour les ETI et groupes avec des standards de sécurité élevés.</p>
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
    icon: <Zap className="w-8 h-8 text-[#3F2F8D]" />,
    title: "Intégrations ERP, comptabilité, achats, IT…",
    description: "Connectez vos systèmes existants pour automatiser la collecte et gagner du temps.",
  },
  {
    icon: <Code className="w-8 h-8 text-[#3F2F8D]" />,
    title: "API & automatisations",
    description: "Intégrez Ekyo à votre système d'information avec des APIs robustes et documentées.",
  },
  {
    icon: <Lock className="w-8 h-8 text-[#3F2F8D]" />,
    title: "SSO / IAM",
    description: "Gérez les accès avec des standards de sécurité élevés et une intégration SSO.",
  },
  {
    icon: <Server className="w-8 h-8 text-[#3F2F8D]" />,
    title: "Hébergement sécurisé & RGPD",
    description: "Une infrastructure sécurisée et conforme au RGPD pour protéger vos données.",
  },
  {
    icon: <Shield className="w-8 h-8 text-[#3F2F8D]" />,
    title: "Journalisation & gouvernance des accès",
    description: "Tracez toutes les actions et gérez les accès avec des outils de gouvernance avancés.",
  },
];

