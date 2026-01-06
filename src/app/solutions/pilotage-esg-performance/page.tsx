"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Target, Sparkles, BarChart3, TrendingUp, Users, CheckSquare } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PilotageESGVisual, PilotageESGStepVisual, BenefitVisualization } from "@/components/marketing/SolutionVisualization";
import { FeatureCardVisual } from "@/components/marketing/FeatureCardVisual";

export default function PilotageESGPerformancePage() {
  const [activeStep, setActiveStep] = useState(0);
  const benefitsRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const stepsRef = useScrollAnimation();

  return (
    <>
      <section className="relative py-40 bg-gradient-to-br from-[#fcfcfd] via-white to-[#3F2F8D]/5 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#3F2F8D]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3F2F8D]/10 border border-[#3F2F8D]/20 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#3F2F8D]" />
              <span className="text-sm font-medium text-[#3F2F8D]">Solution</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#344054] mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Transformez l'ESG en levier de pilotage et de performance
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Ekyo structure votre démarche ESG pour en faire un véritable outil de décision : priorisation des enjeux, KPIs, plans d'actions, gouvernance et reporting consolidé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link href="/contact?intent=demo" className="group bg-[#3F2F8D] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Découvrir un exemple de pilotage ESG
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link href="/contact?intent=expert" className="bg-white text-[#3F2F8D] border-2 border-[#3F2F8D] px-8 py-4 rounded-lg font-medium hover:bg-[#3F2F8D]/5 transition-all inline-flex items-center justify-center">
                Parler à un expert Ekyo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visualisation principale */}
      <section className="py-40 bg-gradient-to-br from-[#fcfcfd] to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots"></div>
        <div className="absolute inset-0 bg-radial-gradient"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                Visualisez votre pilotage ESG en action
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Structurez votre démarche ESG avec des tableaux de bord interactifs pour suivre vos enjeux, KPIs et plans d'actions en temps réel.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Priorisation automatique des enjeux</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">KPIs en temps réel avec alertes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Plans d'actions avec ownership et suivi</span>
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
                    <span className="text-white text-sm font-medium">Ekyo - Pilotage ESG</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <PilotageESGVisual />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Étapes Interactif */}
      <section className="py-40 section-background bg-gradient-to-br from-[#fcfcfd] via-white to-[#f8f9fa] relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3F2F8D]/30 to-transparent"></div>
        <div ref={stepsRef.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-4">
              Comment Ekyo structure votre pilotage ESG
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {pilotageSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`px-8 py-4 rounded-xl font-medium transition-all relative group ${
                  activeStep === idx
                    ? 'bg-[#3F2F8D] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#3F2F8D]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeStep === idx ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    <step.icon className={`w-5 h-5 ${activeStep === idx ? 'text-white' : ''}`} style={activeStep !== idx ? { color: step.color } : {}} />
                  </div>
                  <span className="text-lg font-semibold">{step.label}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-500 ${stepsRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h3 className="text-3xl font-bold text-[#344054]">{pilotageSteps[activeStep].title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{pilotageSteps[activeStep].description}</p>
              <ul className="space-y-3">
                {pilotageSteps[activeStep].points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`relative transition-all duration-500 ${stepsRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#3F2F8D] to-[#6F5DE9] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo : {pilotageSteps[activeStep].label}</span>
                  </div>
                </div>
                <div className="p-6 space-y-4 bg-gradient-to-br from-gray-50 to-white relative min-h-[400px]">
                  <div className="bg-gradient-to-br from-[#3F2F8D]/20 to-[#83F0C8]/20 rounded-xl p-6 border border-[#3F2F8D]/30">
                    <div className="text-center mb-4">
                      {(() => {
                        const IconComponent = pilotageSteps[activeStep].icon;
                        return <IconComponent className="w-16 h-16 mx-auto mb-4" style={{ color: pilotageSteps[activeStep].color }} />;
                      })()}
                      <h4 className="text-xl font-bold text-[#344054] mb-2">{pilotageSteps[activeStep].title}</h4>
                    </div>
                    {PilotageESGStepVisual(activeStep)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Bénéfices avec visualisations pleine largeur */}
      <section ref={benefitsRef.ref} className={`py-32 section-background bg-gradient-to-br from-white via-[#fcfcfd] to-[#f8f9fa] relative overflow-hidden transition-all duration-700 ${benefitsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="absolute inset-0 bg-radial-gradient"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-4">Les bénéfices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Découvrez comment Ekyo transforme votre pilotage ESG</p>
          </div>
          
          {benefits.map((benefit, index) => (
            <div key={index} className={`mb-24 last:mb-0 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3F2F8D]/10 border border-[#3F2F8D]/20 mb-6">
                    <CheckCircle2 className="w-4 h-4 text-[#3F2F8D]" />
                    <span className="text-sm font-medium text-[#3F2F8D]">Bénéfice {index + 1}</span>
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
                    <div className="bg-gradient-to-r from-[#3F2F8D] to-[#6F5DE9] p-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="flex-1 text-center">
                        <span className="text-white text-sm font-medium">Ekyo - {benefit.title}</span>
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[400px]">
                      {BenefitVisualization('pilotage', index)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 1: Cartographie des enjeux */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-4">Ce que permet Ekyo</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3F2F8D]/10 border border-[#3F2F8D]/20 mb-6">
                <Target className="w-4 h-4 text-[#3F2F8D]" />
                <span className="text-sm font-medium text-[#3F2F8D]">Fonctionnalité</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {features[0].title}
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {features[0].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Méthodologie structurée de matérialité</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Priorisation automatique des enjeux</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Matrice interactive</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#3F2F8D] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[0].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="cartographie_enjeux"
                    title={features[0].title}
                    description={features[0].description}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: KPIs ESG & climat */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#3F2F8D] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[1].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="kpis_esg_climat"
                    title={features[1].title}
                    description={features[1].description}
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3F2F8D]/10 border border-[#3F2F8D]/20 mb-6">
                <BarChart3 className="w-4 h-4 text-[#3F2F8D]" />
                <span className="text-sm font-medium text-[#3F2F8D]">Fonctionnalité</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {features[1].title}
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {features[1].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Tableaux de bord en temps réel</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Suivi des tendances</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Alertes automatiques</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Plans d'actions */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3F2F8D]/10 border border-[#3F2F8D]/20 mb-6">
                <CheckSquare className="w-4 h-4 text-[#3F2F8D]" />
                <span className="text-sm font-medium text-[#3F2F8D]">Fonctionnalité</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {features[2].title}
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {features[2].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Responsabilités et échéances claires</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Suivi de l'avancement</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Outils adaptés à votre organisation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#3F2F8D] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[2].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="plans_actions_ownership"
                    title={features[2].title}
                    description={features[2].description}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Tableaux de bord */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#3F2F8D] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[3].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="tableaux_bord_filiales"
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
              <h3 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {features[3].title}
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {features[3].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Vues par rôle (Direction, RSE, DAF, RH)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Pilotage multi-niveaux</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Tableaux de bord personnalisables</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Collaboration */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3F2F8D]/10 border border-[#3F2F8D]/20 mb-6">
                <Users className="w-4 h-4 text-[#3F2F8D]" />
                <span className="text-sm font-medium text-[#3F2F8D]">Fonctionnalité</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                {features[4].title}
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {features[4].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Workflows de validation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Droits d'accès personnalisés</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Travail collaboratif en équipe</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#3F2F8D] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[4].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="collaboration_workflows"
                    title={features[4].title}
                    description={features[4].description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 section-background bg-gradient-to-br from-[#3F2F8D]/10 via-white to-[#83F0C8]/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3F2F8D]/5 via-transparent to-[#83F0C8]/5"></div>
        <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">Prêt à transformer l'ESG en levier de performance ?</h2>
          <p className="text-xl text-gray-600 mb-10">Contactez-nous pour découvrir comment Ekyo peut vous accompagner.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?intent=demo" className="bg-[#3F2F8D] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl">
              Télécharger le guide du pilotage ESG
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link href="/contact?intent=expert" className="bg-white text-[#3F2F8D] border-2 border-[#3F2F8D] px-8 py-4 rounded-lg font-medium hover:bg-[#3F2F8D]/5 transition-all inline-flex items-center justify-center">
              Voir un cas d'usage
            </Link>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

const benefits = [
  {
    title: "Identifiez et maîtrisez vos enjeux clés",
    description: "Risques & opportunités avec une approche structurée de la double matérialité.",
    points: [
      "Cartographie complète des enjeux ESG",
      "Analyse de double matérialité structurée",
      "Priorisation automatique des risques",
      "Suivi de l'évolution dans le temps"
    ]
  },
  {
    title: "Alignez l'ESG avec la stratégie",
    description: "Et les résultats business pour en faire un véritable outil de pilotage.",
    points: [
      "Intégration avec la stratégie d'entreprise",
      "KPIs alignés sur les objectifs business",
      "Pilotage en temps réel de la performance",
      "Décisions basées sur les données"
    ]
  },
  {
    title: "Donnez de la visibilité au COMEX et aux équipes",
    description: "Avec des tableaux de bord dédiés et des indicateurs de performance en temps réel.",
    points: [
      "Tableaux de bord personnalisés par rôle",
      "Indicateurs en temps réel avec alertes",
      "Reporting automatique et régulier",
      "Communication transparente"
    ]
  },
  {
    title: "Passez d'un reporting subi à un pilotage structuré",
    description: "L'ESG devient un outil de pilotage au même niveau que la finance.",
    points: [
      "Transformation de l'ESG en levier stratégique",
      "Outils de pilotage au même niveau que la finance",
      "Processus structurés et reproductibles",
      "Culture ESG intégrée à l'organisation"
    ]
  },
];

const pilotageSteps = [
  {
    label: "Cartographier",
    title: "1. Cartographiez vos enjeux ESG",
    description: "Identifiez et priorisez vos enjeux ESG selon une méthodologie structurée de double matérialité.",
    icon: Target,
    color: "#3F2F8D",
    points: [
      "Identification des enjeux ESG",
      "Analyse de double matérialité",
      "Priorisation des risques et opportunités",
      "Cartographie complète des enjeux"
    ]
  },
  {
    label: "Piloter",
    title: "2. Définissez et pilotez vos KPIs",
    description: "Structurez vos indicateurs de performance ESG avec des objectifs clairs et un suivi en temps réel.",
    icon: BarChart3,
    color: "#83F0C8",
    points: [
      "Définition des KPIs ESG & climat",
      "Objectifs et cibles mesurables",
      "Suivi en temps réel avec alertes",
      "Tableaux de bord par rôle"
    ]
  },
  {
    label: "Agir",
    title: "3. Structurez et suivez vos plans d'actions",
    description: "Organisez vos plans d'actions avec des responsabilités claires, des échéances et un suivi de l'avancement.",
    icon: TrendingUp,
    color: "#beb2ff",
    points: [
      "Plans d'actions structurés",
      "Responsabilités et ownership",
      "Échéances et jalons",
      "Suivi de l'avancement"
    ]
  }
];

const features = [
  {
    icon: <Target className="w-8 h-8 text-[#3F2F8D]" />,
    title: "Cartographie des enjeux et matérialité",
    description: "Identifiez et priorisez vos enjeux ESG selon une méthodologie structurée.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-[#3F2F8D]" />,
    title: "Définition et suivi des KPIs ESG & climat",
    description: "Pilotez vos indicateurs en temps réel avec des tableaux de bord dédiés.",
  },
  {
    icon: <CheckSquare className="w-8 h-8 text-[#3F2F8D]" />,
    title: "Plans d'actions avec responsabilités et échéances",
    description: "Structurez et pilotez vos plans d'actions avec des outils adaptés.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#3F2F8D]" />,
    title: "Tableaux de bord direction & filiales",
    description: "Pilotez votre performance ESG à tous les niveaux de votre organisation.",
  },
  {
    icon: <Users className="w-8 h-8 text-[#3F2F8D]" />,
    title: "Collaboration et workflows de validation",
    description: "Travaillez en équipe avec des droits d'accès personnalisés et des workflows adaptés.",
  },
];

