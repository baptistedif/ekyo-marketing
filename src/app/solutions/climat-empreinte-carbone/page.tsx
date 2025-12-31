"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Calculator, Sparkles, TrendingDown, Activity, Package, FileCheck, Zap, Database, BarChart3, Network, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ClimatEmpreinteVisual, ClimatScopeVisual, BenefitVisualization } from "@/components/marketing/SolutionVisualization";
import { FeatureCardVisual } from "@/components/marketing/FeatureCardVisual";

export default function ClimatEmpreinteCarbonePage() {
  const [activeScope, setActiveScope] = useState(0);
  const benefitsRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const scopesRef = useScrollAnimation();

  return (
    <>
      <section className="relative py-40 bg-gradient-to-br from-[#fcfcfd] via-white to-[#83F0C8]/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#83F0C8]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83F0C8]/10 border border-[#83F0C8]/20 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#83F0C8]" />
              <span className="text-sm font-medium text-[#83F0C8]">Solution</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#344054] mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Mesurez, pilotez et réduisez votre empreinte carbone : organisation et produits
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Ekyo vous permet de mesurer votre empreinte carbone à partir de données financières et opérationnelles, de construire vos trajectoires de réduction et de suivre vos plans d'actions à l'échelle du groupe. La plateforme intègre également le calcul de l'empreinte carbone produit (PCF) pour répondre aux exigences clients, achats et marché.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link href="/contact?intent=expert" className="group bg-[#3F2F8D] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Évaluer votre maturité climat et produit
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link href="/contact?intent=demo" className="bg-white text-[#3F2F8D] border-2 border-[#3F2F8D] px-8 py-4 rounded-lg font-medium hover:bg-[#3F2F8D]/5 transition-all inline-flex items-center justify-center">
                Voir comment Ekyo calcule vos émissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visualisation principale */}
      <section className="py-40 bg-gradient-to-br from-[#fcfcfd] to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute inset-0 bg-radial-gradient"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#83F0C8] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - Empreinte Carbone</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <ClimatEmpreinteVisual />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                Visualisez votre empreinte carbone en temps réel
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Mesurez, pilotez et réduisez vos émissions avec des calculs précis par scope et des trajectoires de réduction.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Calcul automatique Scopes 1, 2 & 3</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Trajectoires de réduction personnalisables</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Empreinte carbone produit (PCF) intégrée</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Scopes Interactif */}
      <section className="py-40 section-background bg-gradient-to-br from-[#fcfcfd] via-white to-[#f8f9fa] relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="absolute inset-0 bg-radial-gradient"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#83F0C8]/30 to-transparent"></div>
        <div ref={scopesRef.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-4">
              Calcul complet des émissions : Scopes 1, 2 & 3
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {scopes.map((scope, idx) => (
              <button
                key={idx}
                onClick={() => setActiveScope(idx)}
                className={`px-8 py-4 rounded-xl font-medium transition-all relative group ${
                  activeScope === idx
                    ? 'bg-[#3F2F8D] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#83F0C8]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeScope === idx ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    <scope.icon className={`w-5 h-5 ${activeScope === idx ? 'text-white' : ''}`} style={activeScope !== idx ? { color: scope.color } : {}} />
                  </div>
                  <span className="text-lg font-semibold">{scope.label}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-500 ${scopesRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h3 className="text-3xl font-bold text-[#344054]">{scopes[activeScope].title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{scopes[activeScope].description}</p>
              <ul className="space-y-3">
                {scopes[activeScope].points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`relative transition-all duration-500 ${scopesRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#83F0C8] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo : {scopes[activeScope].label}</span>
                  </div>
                </div>
                <div className="p-6 space-y-4 bg-gradient-to-br from-gray-50 to-white relative min-h-[400px]">
                  <div className="bg-gradient-to-br from-[#83F0C8]/20 to-[#beb2ff]/20 rounded-xl p-6 border border-[#83F0C8]/30">
                    <div className="text-center mb-4">
                      {(() => {
                        const IconComponent = scopes[activeScope].icon;
                        return <IconComponent className="w-16 h-16 mx-auto mb-4" style={{ color: scopes[activeScope].color }} />;
                      })()}
                      <h4 className="text-xl font-bold text-[#344054] mb-2">{scopes[activeScope].title}</h4>
                    </div>
                    {ClimatScopeVisual(activeScope)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Bénéfices avec visualisations pleine largeur */}
      <section ref={benefitsRef.ref} className={`py-32 section-background bg-gradient-to-br from-white via-[#fcfcfd] to-[#f8f9fa] relative overflow-hidden transition-all duration-700 ${benefitsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute inset-0 bg-radial-gradient"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-4">Les bénéfices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Découvrez comment Ekyo transforme votre mesure carbone</p>
          </div>
          
          {benefits.map((benefit, index) => (
            <div key={index} className={`mb-24 last:mb-0 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83F0C8]/10 border border-[#83F0C8]/20 mb-6">
                    <CheckCircle2 className="w-4 h-4 text-[#83F0C8]" />
                    <span className="text-sm font-medium text-[#83F0C8]">Bénéfice {index + 1}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#344054] mb-6">{benefit.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{benefit.description}</p>
                  <ul className="space-y-3">
                    {benefit.points?.map((point, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 0 ? '' : 'lg:order-1'}>
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                    <div className="bg-gradient-to-r from-[#83F0C8] to-[#beb2ff] p-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="flex-1 text-center">
                        <span className="text-white text-sm font-medium">Ekyo - {benefit.title}</span>
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[400px]">
                      {BenefitVisualization('climat', index)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Organisation - Calculs Scopes */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-4">Ce que permet Ekyo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">Organisation</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83F0C8]/10 border border-[#83F0C8]/20 mb-6">
                <Calculator className="w-4 h-4 text-[#83F0C8]" />
                <span className="text-sm font-medium text-[#83F0C8]">Fonctionnalité</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {featuresOrg[0].title}
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {featuresOrg[0].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Facteurs d'émission à jour</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Conforme GHG Protocol</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Calcul automatique multi-scopes</span>
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
                    <span className="text-white text-sm font-medium">Ekyo - {featuresOrg[0].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="calculs_scopes"
                    title={featuresOrg[0].title}
                    description={featuresOrg[0].description}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Connexion FEC */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#83F0C8] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {featuresOrg[1].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="connexion_fec"
                    title={featuresOrg[1].title}
                    description={featuresOrg[1].description}
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83F0C8]/10 border border-[#83F0C8]/20 mb-6">
                <Zap className="w-4 h-4 text-[#83F0C8]" />
                <span className="text-sm font-medium text-[#83F0C8]">Fonctionnalité</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {featuresOrg[1].title}
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {featuresOrg[1].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Intégration automatique FEC</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Collecte depuis factures</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Synchronisation données d'activité</span>
                </div>
              </div>
            </div>
          </div>

          {/* Facteurs d'émissions */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83F0C8]/10 border border-[#83F0C8]/20 mb-6">
                <FileCheck className="w-4 h-4 text-[#83F0C8]" />
                <span className="text-sm font-medium text-[#83F0C8]">Fonctionnalité</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {featuresOrg[2].title}
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {featuresOrg[2].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Référentiels ADEME, Base Carbone, GHG Protocol</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Traçabilité complète des sources</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Mise à jour automatique</span>
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
                    <span className="text-white text-sm font-medium">Ekyo - {featuresOrg[2].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="facteurs_emissions"
                    title={featuresOrg[2].title}
                    description={featuresOrg[2].description}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Trajectoires */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#83F0C8] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {featuresOrg[3].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="trajectoires_climat"
                    title={featuresOrg[3].title}
                    description={featuresOrg[3].description}
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83F0C8]/10 border border-[#83F0C8]/20 mb-6">
                <TrendingDown className="w-4 h-4 text-[#83F0C8]" />
                <span className="text-sm font-medium text-[#83F0C8]">Fonctionnalité</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {featuresOrg[3].title}
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {featuresOrg[3].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Alignement SBTi et Net Zero</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Scénarios personnalisables</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Suivi de l'avancement</span>
                </div>
              </div>
            </div>
          </div>

          {/* Suivi plans de réduction */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83F0C8]/10 border border-[#83F0C8]/20 mb-6">
                <Activity className="w-4 h-4 text-[#83F0C8]" />
                <span className="text-sm font-medium text-[#83F0C8]">Fonctionnalité</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {featuresOrg[4].title}
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {featuresOrg[4].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Suivi opérationnel des actions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Mesure de l'impact sur les émissions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Reporting automatique</span>
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
                    <span className="text-white text-sm font-medium">Ekyo - {featuresOrg[4].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="suivi_plans_reduction"
                    title={featuresOrg[4].title}
                    description={featuresOrg[4].description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section PCF */}
      <section className="py-32 bg-gradient-to-br from-[#fcfcfd] to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-semibold">Empreinte carbone produit (PCF)</p>
          </div>

          {/* Méthodologie standardisée */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83F0C8]/10 border border-[#83F0C8]/20 mb-6">
                <Package className="w-4 h-4 text-[#83F0C8]" />
                <span className="text-sm font-medium text-[#83F0C8]">Fonctionnalité</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {featuresPCF[0].title}
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {featuresPCF[0].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Standards ISO 14067, PAS 2050</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Méthodologie reproductible</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Documentation complète</span>
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
                    <span className="text-white text-sm font-medium">Ekyo - {featuresPCF[0].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="methodologie_pcf"
                    title={featuresPCF[0].title}
                    description={featuresPCF[0].description}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Cycle de vie */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#83F0C8] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {featuresPCF[1].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="cycle_vie"
                    title={featuresPCF[1].title}
                    description={featuresPCF[1].description}
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83F0C8]/10 border border-[#83F0C8]/20 mb-6">
                <Activity className="w-4 h-4 text-[#83F0C8]" />
                <span className="text-sm font-medium text-[#83F0C8]">Fonctionnalité</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {featuresPCF[1].title}
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {featuresPCF[1].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Analyse complète du cycle de vie</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">De la matière première à la fin de vie</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Couverture 100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lien données financières */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83F0C8]/10 border border-[#83F0C8]/20 mb-6">
                <Zap className="w-4 h-4 text-[#83F0C8]" />
                <span className="text-sm font-medium text-[#83F0C8]">Fonctionnalité</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {featuresPCF[2].title}
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {featuresPCF[2].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Intégration automatique avec Finance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Connexion aux données Achats</span>
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
                    <span className="text-white text-sm font-medium">Ekyo - {featuresPCF[2].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="lien_donnees_financieres"
                    title={featuresPCF[2].title}
                    description={featuresPCF[2].description}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Export */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#83F0C8] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {featuresPCF[3].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="export_pcf"
                    title={featuresPCF[3].title}
                    description={featuresPCF[3].description}
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83F0C8]/10 border border-[#83F0C8]/20 mb-6">
                <FileCheck className="w-4 h-4 text-[#83F0C8]" />
                <span className="text-sm font-medium text-[#83F0C8]">Fonctionnalité</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {featuresPCF[3].title}
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {featuresPCF[3].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Formats PDF, Excel, XML, JSON</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Pour clients et appels d'offres</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Documentation complète incluse</span>
                </div>
              </div>
            </div>
          </div>

          {/* Traçabilité PCF */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83F0C8]/10 border border-[#83F0C8]/20 mb-6">
                <Shield className="w-4 h-4 text-[#83F0C8]" />
                <span className="text-sm font-medium text-[#83F0C8]">Fonctionnalité</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {featuresPCF[4].title}
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {featuresPCF[4].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Justifications documentées</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Audit-trail complet</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Documentation 100%</span>
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
                    <span className="text-white text-sm font-medium">Ekyo - {featuresPCF[4].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="traceabilite_pcf"
                    title={featuresPCF[4].title}
                    description={featuresPCF[4].description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 section-background bg-gradient-to-br from-[#83F0C8]/10 via-white to-[#beb2ff]/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#83F0C8]/5 via-transparent to-[#beb2ff]/5"></div>
        <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">Prêt à mesurer votre empreinte carbone ?</h2>
          <p className="text-xl text-gray-600 mb-10">Contactez-nous pour découvrir comment Ekyo peut vous accompagner.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?intent=expert" className="bg-[#3F2F8D] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl">
              Télécharger le guide carbone
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link href="/contact?intent=demo" className="bg-white text-[#3F2F8D] border-2 border-[#3F2F8D] px-8 py-4 rounded-lg font-medium hover:bg-[#3F2F8D]/5 transition-all inline-flex items-center justify-center">
              Voir un exemple de calcul
            </Link>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

const scopes = [
  {
    label: "Scope 1",
    title: "Émissions directes",
    description: "Émissions directes de gaz à effet de serre provenant des sources détenues ou contrôlées par l'entreprise.",
    icon: Activity,
    color: "#83F0C8",
    points: [
      "Combustion de combustibles fossiles",
      "Émissions de procédés industriels",
      "Fugitives (fuites, évaporations)",
      "Transport de la flotte de véhicules"
    ],
    visual: (
      <div className="space-y-3">
        {["Combustion", "Procédés", "Fugitives", "Transport"].map((item, i) => (
          <div key={i} className="bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-between hover:border-[#83F0C8] transition-all">
            <span className="text-sm font-medium text-gray-700">{item}</span>
            <div className="w-3 h-3 rounded-full bg-[#83F0C8]"></div>
          </div>
        ))}
      </div>
    )
  },
  {
    label: "Scope 2",
    title: "Émissions indirectes : Énergie",
    description: "Émissions indirectes liées à la consommation d'électricité, de chaleur ou de vapeur achetées.",
    icon: Zap,
    color: "#beb2ff",
    points: [
      "Électricité achetée",
      "Chaleur et vapeur achetées",
      "Froid acheté",
      "Facteurs d'émission locaux"
    ],
    visual: (
      <div className="space-y-3">
        {["Électricité", "Chaleur", "Froid"].map((item, i) => (
          <div key={i} className="bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-between hover:border-[#beb2ff] transition-all">
            <span className="text-sm font-medium text-gray-700">{item}</span>
            <div className="w-3 h-3 rounded-full bg-[#beb2ff]"></div>
          </div>
        ))}
      </div>
    )
  },
  {
    label: "Scope 3",
    title: "Émissions indirectes : Chaîne de valeur",
    description: "Toutes les autres émissions indirectes qui se produisent dans la chaîne de valeur de l'entreprise.",
    icon: Network,
    color: "#3F2F8D",
    points: [
      "Achats de biens et services",
      "Transport amont et aval",
      "Utilisation des produits vendus",
      "Fin de vie des produits"
    ],
    visual: (
      <div className="space-y-3">
        {["Achats", "Transport", "Utilisation", "Fin de vie"].map((item, i) => (
          <div key={i} className="bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-between hover:border-[#3F2F8D] transition-all">
            <span className="text-sm font-medium text-gray-700">{item}</span>
            <CheckCircle2 className="w-5 h-5 text-[#83F0C8]" />
          </div>
        ))}
      </div>
    )
  }
];

const benefits = [
  {
    title: "Vision consolidée et fiable",
    description: "De vos émissions sur l'ensemble du périmètre avec des données traçables et documentées.",
    points: [
      "Vue d'ensemble de tous les scopes",
      "Données consolidées multi-entités",
      "Traçabilité complète des calculs",
      "Documentation automatique"
    ]
  },
  {
    title: "Scope 3 et chaîne de valeur intégrés",
    description: "Simplement, avec des outils adaptés à la complexité de votre chaîne de valeur.",
    points: [
      "Calcul automatique Scope 3",
      "Intégration avec vos fournisseurs",
      "Méthodologie conforme GHG Protocol",
      "Suivi de l'évolution dans le temps"
    ]
  },
  {
    title: "Mesure standardisée de l'empreinte carbone produit",
    description: "Répondez aux exigences clients, achats et marché avec une méthodologie reproductible.",
    points: [
      "Méthodologie standardisée PCF",
      "Calcul cycle de vie complet",
      "Export pour clients et appels d'offres",
      "Documentation complète"
    ]
  },
  {
    title: "Priorisation des leviers d'action",
    description: "Concrets et pilotage des résultats avec des outils dédiés au suivi des plans d'actions.",
    points: [
      "Identification des postes prioritaires",
      "Simulation d'impact des actions",
      "Suivi des plans de réduction",
      "Mesure de l'efficacité"
    ]
  },
  {
    title: "Communication climat transparente",
    description: "Et maîtrisée avec des données fiables et des trajectoires claires.",
    points: [
      "Trajectoires de réduction personnalisables",
      "Alignement SBTi et Net Zero",
      "Reporting transparent et crédible",
      "Communication adaptée aux parties prenantes"
    ]
  },
];

const featuresOrg = [
  {
    icon: <Calculator className="w-8 h-8 text-[#83F0C8]" />,
    title: "Calculs Scopes 1 / 2 / 3",
    description: "Calculez vos émissions selon le GHG Protocol avec des facteurs d'émission à jour.",
  },
  {
    icon: <Zap className="w-8 h-8 text-[#83F0C8]" />,
    title: "Connexion aux FEC, factures et données d'activité",
    description: "Automatisez la collecte de vos données d'émissions depuis vos systèmes existants.",
  },
  {
    icon: <FileCheck className="w-8 h-8 text-[#83F0C8]" />,
    title: "Facteurs d'émissions documentés et traçables",
    description: "Capitalisez sur les meilleurs référentiels du marché avec une traçabilité complète.",
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-[#83F0C8]" />,
    title: "Trajectoires et scénarios climat",
    description: "Alignés avec vos objectifs (SBTi, Net Zero) pour piloter votre décarbonation.",
  },
  {
    icon: <Activity className="w-8 h-8 text-[#83F0C8]" />,
    title: "Suivi opérationnel des plans de réduction",
    description: "Pilotez l'avancement de vos actions et mesurez leur impact sur vos émissions.",
  },
];

const featuresPCF = [
  {
    icon: <Package className="w-8 h-8 text-[#83F0C8]" />,
    title: "Méthodologie standardisée et reproductible",
    description: "Calculez l'empreinte carbone de vos produits selon les standards reconnus.",
  },
  {
    icon: <Activity className="w-8 h-8 text-[#83F0C8]" />,
    title: "Prise en compte du cycle de vie",
    description: "Matières premières, production, transport, usage et fin de vie pour une analyse complète.",
  },
  {
    icon: <Zap className="w-8 h-8 text-[#83F0C8]" />,
    title: "Lien direct avec les données financières et achats",
    description: "Automatisez les calculs à partir de vos données existantes pour gagner du temps.",
  },
  {
    icon: <FileCheck className="w-8 h-8 text-[#83F0C8]" />,
    title: "Export et partage des résultats",
    description: "Pour clients et appels d'offres avec une documentation complète.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-[#83F0C8]" />,
    title: "Traçabilité et justification complètes",
    description: "Conservez l'historique de tous vos calculs pour faciliter les audits.",
  },
];

