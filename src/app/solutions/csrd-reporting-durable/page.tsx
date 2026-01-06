"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle2, FileText, Sparkles, Shield, FileCheck, BarChart3, Target, Database, Layers, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CSRDReportingVisual, CSRDProcessVisual, BenefitVisualization } from "@/components/marketing/SolutionVisualization";
import { FeatureCardVisual } from "@/components/marketing/FeatureCardVisual";

export default function CSRDReportingDurablePage() {
  const [activeProcess, setActiveProcess] = useState(0);
  const benefitsRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const processRef = useScrollAnimation();

  return (
    <>
      <section className="relative py-40 bg-gradient-to-br from-[#fcfcfd] via-white to-[#beb2ff]/12 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#beb2ff]/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#83F0C8]/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/20 border-2 border-[#beb2ff]/40 mb-8 animate-fade-in shadow-sm">
              <Sparkles className="w-4 h-4 text-[#beb2ff]" />
              <span className="text-sm font-medium text-[#beb2ff]">Solution</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#344054] mb-6 leading-tight animate-fade-in drop-shadow-sm" style={{ animationDelay: "0.1s" }}>
              Préparez et sécurisez votre reporting extra-financier à l'échelle du groupe
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Ekyo vous aide à structurer, fiabiliser et industrialiser votre reporting de durabilité (CSRD, ESRS, Taxonomie), en consolidant l'ensemble des données ESG et climat de vos entités — avec traçabilité et auditabilité complètes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link href="/contact?intent=expert" className="group bg-[#3F2F8D] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-violet shadow-violet-hover transform hover:-translate-y-1 hover:scale-105">
                Échanger avec un expert CSRD
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link href="/contact?intent=demo" className="bg-white text-[#3F2F8D] border-2 border-[#3F2F8D] px-8 py-4 rounded-lg font-medium hover:bg-[#3F2F8D]/10 transition-all inline-flex items-center justify-center shadow-md hover:shadow-lg hover:shadow-violet transform hover:-translate-y-0.5">
                Demander une démonstration
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
                Visualisez votre reporting CSRD en action
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Générez vos rapports conformes CSRD, ESRS et Taxonomie avec traçabilité complète et préparation audit.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Templates conformes aux dernières réglementations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Versioning et suivi des modifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Audit-trail complet pour chaque donnée</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl shadow-violet border-2 border-[#beb2ff]/30 overflow-hidden transform hover:scale-[1.02] hover:border-[#beb2ff]/60 transition-all">
                <div className="bg-gradient-to-r from-[#beb2ff] to-[#83F0C8] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - Reporting CSRD</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <CSRDReportingVisual />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Processus Interactif */}
      <section className="py-40 section-background bg-gradient-to-br from-[#fcfcfd] via-white to-[#f8f9fa] relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#beb2ff]/30 to-transparent"></div>
        <div ref={processRef.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-4">
              Comment Ekyo sécurise votre reporting CSRD
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {processSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveProcess(idx)}
                className={`px-8 py-4 rounded-xl font-medium transition-all relative group ${
                  activeProcess === idx
                    ? 'bg-[#3F2F8D] text-white shadow-violet scale-105'
                    : 'bg-white text-gray-700 border-2 border-[#beb2ff]/30 hover:border-[#beb2ff]/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeProcess === idx ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    <step.icon className={`w-5 h-5 ${activeProcess === idx ? 'text-white' : ''}`} style={activeProcess !== idx ? { color: step.color } : {}} />
                  </div>
                  <span className="text-lg font-semibold">{step.label}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-500 ${processRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h3 className="text-3xl font-bold text-[#344054]">{processSteps[activeProcess].title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{processSteps[activeProcess].description}</p>
              <ul className="space-y-3">
                {processSteps[activeProcess].points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`relative transition-all duration-500 ${processRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="bg-white rounded-2xl shadow-2xl shadow-violet border-2 border-[#beb2ff]/30 overflow-hidden transform hover:scale-[1.02] hover:border-[#beb2ff]/60 transition-all">
                <div className="bg-gradient-to-r from-[#3F2F8D] to-[#6F5DE9] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo : {processSteps[activeProcess].label}</span>
                  </div>
                </div>
                <div className="p-6 space-y-4 bg-gradient-to-br from-gray-50 to-white relative min-h-[400px]">
                  <div className="bg-gradient-to-br from-[#beb2ff]/20 to-[#83F0C8]/20 rounded-xl p-6 border border-[#beb2ff]/30">
                    <div className="text-center mb-4">
                      {(() => {
                        const IconComponent = processSteps[activeProcess].icon;
                        return <IconComponent className="w-16 h-16 mx-auto mb-4" style={{ color: processSteps[activeProcess].color }} />;
                      })()}
                      <h4 className="text-xl font-bold text-[#344054] mb-2">{processSteps[activeProcess].title}</h4>
                    </div>
                    {CSRDProcessVisual(activeProcess)}
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Découvrez comment Ekyo transforme votre reporting CSRD</p>
          </div>
          
          {benefits.map((benefit, index) => (
            <div key={index} className={`mb-24 last:mb-0 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/10 border border-[#beb2ff]/20 mb-6">
                    <CheckCircle2 className="w-4 h-4 text-[#beb2ff]" />
                    <span className="text-sm font-medium text-[#beb2ff]">Bénéfice {index + 1}</span>
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
                  <div className="bg-white rounded-2xl shadow-2xl shadow-violet border-2 border-[#beb2ff]/30 overflow-hidden transform hover:scale-[1.02] hover:border-[#beb2ff]/60 transition-all">
                    <div className="bg-gradient-to-r from-[#beb2ff] to-[#83F0C8] p-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="flex-1 text-center">
                        <span className="text-white text-sm font-medium">Ekyo - {benefit.title}</span>
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[400px]">
                      {BenefitVisualization('csrd', index)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 1: Cadre structurant pour la double matérialité */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/10 border border-[#beb2ff]/20 mb-6">
                <FileText className="w-4 h-4 text-[#beb2ff]" />
                <span className="text-sm font-medium text-[#beb2ff]">Fonctionnalité</span>
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
              <div className="bg-white rounded-2xl shadow-2xl shadow-violet border-2 border-[#beb2ff]/30 overflow-hidden transform hover:scale-[1.02] hover:border-[#beb2ff]/60 transition-all">
                <div className="bg-gradient-to-r from-[#beb2ff] to-[#83F0C8] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[0].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="double_materialite"
                    title={features[0].title}
                    description={features[0].description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Collecte et consolidation multi-périmètres */}
      <section className="py-32 bg-gradient-to-br from-[#fcfcfd] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl shadow-violet border-2 border-[#beb2ff]/30 overflow-hidden transform hover:scale-[1.02] hover:border-[#beb2ff]/60 transition-all">
                <div className="bg-gradient-to-r from-[#beb2ff] to-[#83F0C8] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[1].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="collecte_consolidation"
                    title={features[1].title}
                    description={features[1].description}
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83F0C8]/10 border border-[#83F0C8]/20 mb-6">
                <Target className="w-4 h-4 text-[#83F0C8]" />
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
                  <span className="text-gray-700">Workflows adaptés à votre organisation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Contrôles automatiques multi-périmètres</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Consolidation en temps réel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Traçabilité des données et preuves */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/10 border border-[#beb2ff]/20 mb-6">
                <Shield className="w-4 h-4 text-[#beb2ff]" />
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
                  <span className="text-gray-700">Audit-trail complet pour chaque donnée</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Justifications documentées</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Préparation optimale aux audits</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl shadow-violet border-2 border-[#beb2ff]/30 overflow-hidden transform hover:scale-[1.02] hover:border-[#beb2ff]/60 transition-all">
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
                    type="traceabilite_preuves"
                    title={features[2].title}
                    description={features[2].description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Suivi des exigences et points de données ESRS */}
      <section className="py-32 bg-gradient-to-br from-[#fcfcfd] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl shadow-violet border-2 border-[#beb2ff]/30 overflow-hidden transform hover:scale-[1.02] hover:border-[#beb2ff]/60 transition-all">
                <div className="bg-gradient-to-r from-[#beb2ff] to-[#83F0C8] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[3].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="suivi_exigences_esrs"
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
                  <span className="text-gray-700">Suivi automatique du respect des exigences</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Contrôles automatiques des points de données</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Alertes pour les exigences non remplies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Versioning et production du rapport */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/10 border border-[#beb2ff]/20 mb-6">
                <BarChart3 className="w-4 h-4 text-[#beb2ff]" />
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
                  <span className="text-gray-700">Génération automatique du rapport</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Versioning complet avec historique</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Export conforme aux standards</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl shadow-violet border-2 border-[#beb2ff]/30 overflow-hidden transform hover:scale-[1.02] hover:border-[#beb2ff]/60 transition-all">
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
                    type="versioning_rapport"
                    title={features[4].title}
                    description={features[4].description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 section-background bg-gradient-to-br from-[#beb2ff]/10 via-white to-[#83F0C8]/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#beb2ff]/5 via-transparent to-[#83F0C8]/5"></div>
        <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">Prêt à sécuriser votre reporting CSRD ?</h2>
          <p className="text-xl text-gray-600 mb-10">Contactez-nous pour découvrir comment Ekyo peut vous accompagner.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?intent=expert" className="bg-[#3F2F8D] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-violet shadow-violet-hover transform hover:-translate-y-1 hover:scale-105">
              Télécharger le guide CSRD
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link href="/contact?intent=demo" className="bg-white text-[#3F2F8D] border-2 border-[#3F2F8D] px-8 py-4 rounded-lg font-medium hover:bg-[#3F2F8D]/10 transition-all inline-flex items-center justify-center shadow-md hover:shadow-lg hover:shadow-violet transform hover:-translate-y-0.5">
              Voir un exemple de rapport
            </Link>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

const processSteps = [
  {
    label: "Structurer",
    title: "1. Structurez votre démarche CSRD",
    description: "Définissez votre périmètre, identifiez vos enjeux matériels et organisez votre collecte de données.",
    icon: Layers,
    color: "#beb2ff",
    points: [
      "Définition du périmètre de reporting",
      "Identification des enjeux matériels (double matérialité)",
      "Cartographie des entités et périmètres",
      "Organisation de la collecte multi-entités"
    ],
    visual: (
      <div className="grid grid-cols-2 gap-3">
        {["Périmètre", "Enjeux", "Entités", "Collecte"].map((item, i) => (
          <div key={i} className="bg-white rounded-lg p-3 text-center border-2 border-[#beb2ff]/30 hover:border-[#beb2ff]/60 transition-all shadow-sm hover:shadow-md">
            <div className="w-8 h-8 bg-[#beb2ff]/20 rounded mx-auto mb-2 flex items-center justify-center">
              <Layers className="w-4 h-4 text-[#beb2ff]" />
            </div>
            <p className="text-xs font-medium text-gray-700">{item}</p>
          </div>
        ))}
      </div>
    )
  },
  {
    label: "Collecter",
    title: "2. Collectez et consolidez vos données",
    description: "Centralisez les données ESG et climat de toutes vos entités avec des contrôles qualité automatiques.",
    icon: Database,
    color: "#83F0C8",
    points: [
      "Collecte multi-entités automatisée",
      "Contrôles qualité et cohérence",
      "Consolidation automatique",
      "Audit-trail complet"
    ],
    visual: (
      <div className="space-y-3">
        {["Entité A", "Entité B", "Entité C"].map((ent, i) => (
          <div key={i} className="bg-white rounded-lg p-3 border-2 border-[#83F0C8]/30 flex items-center justify-between hover:border-[#83F0C8]/60 transition-all shadow-sm hover:shadow-md">
            <span className="text-sm font-medium text-gray-700">{ent}</span>
            <CheckCircle2 className="w-5 h-5 text-[#83F0C8]" />
          </div>
        ))}
        <div className="mt-4 bg-white rounded-lg p-3 border border-gray-200 text-center">
          <span className="text-xs text-gray-500">Consolidation automatique</span>
        </div>
      </div>
    )
  },
  {
    label: "Reporter",
    title: "3. Générez votre rapport de durabilité",
    description: "Produisez votre rapport conforme CSRD/ESRS avec traçabilité complète et préparation audit.",
    icon: FileText,
    color: "#3F2F8D",
    points: [
      "Génération du rapport de durabilité",
      "Conformité CSRD / ESRS / Taxonomie",
      "Versioning et suivi des modifications",
      "Préparation audit avec preuves"
    ],
    visual: (
      <div className="space-y-3">
        {["CSRD", "ESRS", "Taxonomie"].map((report, i) => (
          <div key={i} className="bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-between hover:border-[#3F2F8D] transition-all">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#83F0C8]"></div>
              <span className="text-sm font-medium text-gray-700">{report}</span>
            </div>
            <CheckCircle2 className="w-5 h-5 text-[#83F0C8]" />
          </div>
        ))}
        <div className="mt-4 bg-white rounded-lg p-3 border border-gray-200 text-center">
          <span className="text-xs text-gray-500">Données tracées et documentées</span>
        </div>
      </div>
    )
  }
];

const benefits = [
  {
    title: "Réduisez le risque réglementaire",
    description: "Grâce à des données fiables et documentées, vous minimisez les risques de non-conformité et renforcez la crédibilité de votre reporting.",
    points: [
      "Traçabilité complète de toutes les données",
      "Audit-trail automatique pour chaque modification",
      "Conformité garantie aux dernières réglementations",
      "Préparation optimale aux audits"
    ]
  },
  {
    title: "Industrialisez la collecte multi-entités",
    description: "Gagnez en efficacité en automatisant la collecte et la consolidation des données ESG et climat de toutes vos entités.",
    points: [
      "Collecte automatisée depuis toutes les entités",
      "Consolidation en temps réel",
      "Contrôles qualité automatiques",
      "Réduction du temps de traitement de 60%"
    ]
  },
  {
    title: "Renforcez la crédibilité",
    description: "Aupres des auditeurs et investisseurs avec un reporting traçable, documenté et conforme aux exigences réglementaires.",
    points: [
      "Documentation complète et accessible",
      "Preuves justificatives pour chaque donnée",
      "Versioning et historique des modifications",
      "Export conforme aux standards"
    ]
  },
  {
    title: "Pilotez le déploiement CSRD",
    description: "Dans le temps, durablement, avec des outils adaptés à l'évolution réglementaire et à vos besoins.",
    points: [
      "Mise à jour automatique des templates",
      "Suivi de l'évolution réglementaire",
      "Adaptation rapide aux nouveaux besoins",
      "Scalabilité pour votre croissance"
    ]
  },
];

const features = [
  {
    icon: <FileText className="w-8 h-8 text-[#beb2ff]" />,
    title: "Cadre structurant pour la double matérialité",
    description: "Identifiez et priorisez vos enjeux ESG selon une méthodologie structurée et conforme aux ESRS.",
  },
  {
    icon: <Target className="w-8 h-8 text-[#beb2ff]" />,
    title: "Collecte et consolidation multi-périmètres",
    description: "Multi-entités avec des workflows adaptés à votre organisation et des contrôles automatiques.",
  },
  {
    icon: <Shield className="w-8 h-8 text-[#beb2ff]" />,
    title: "Traçabilité des données et preuves",
    description: "Audit-trail complet pour faciliter les audits et justifier vos données publiées.",
  },
  {
    icon: <FileCheck className="w-8 h-8 text-[#beb2ff]" />,
    title: "Suivi des exigences et points de données ESRS",
    description: "Respectez toutes les exigences ESRS avec des outils dédiés et des contrôles automatiques.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-[#beb2ff]" />,
    title: "Versioning et production du rapport",
    description: "Générez votre rapport de durabilité au format requis avec un suivi des versions et des modifications.",
  },
];

