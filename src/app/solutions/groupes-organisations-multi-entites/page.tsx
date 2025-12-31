"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Network, Sparkles, Shield, BarChart3, Users, GitBranch, Building2, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GroupesMultiEntitesVisual, GroupesWorkflowVisual, BenefitVisualization } from "@/components/marketing/SolutionVisualization";
import { FeatureCardVisual } from "@/components/marketing/FeatureCardVisual";

export default function GroupesOrganisationsMultiEntitesPage() {
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const benefitsRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const workflowRef = useScrollAnimation();

  return (
    <>
      <section className="relative py-40 bg-gradient-to-br from-[#fcfcfd] via-white to-[#6F5DE9]/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6F5DE9]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6F5DE9]/10 border border-[#6F5DE9]/20 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#6F5DE9]" />
              <span className="text-sm font-medium text-[#6F5DE9]">Solution</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#344054] mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Harmonisez, consolidez et pilotez l'ESG à l'échelle du groupe
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Ekyo permet de standardiser et consolider vos données ESG et climat sur l'ensemble de vos filiales et périmètres, pour une vision claire, comparable et fiable — en local comme au niveau groupe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link href="/contact?intent=expert" className="group bg-[#3F2F8D] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Voir comment Ekyo s'adapte à votre organisation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link href="/contact?intent=demo" className="bg-white text-[#3F2F8D] border-2 border-[#3F2F8D] px-8 py-4 rounded-lg font-medium hover:bg-[#3F2F8D]/5 transition-all inline-flex items-center justify-center">
                Programmer une démo personnalisée
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
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
                Visualisez la consolidation multi-entités
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Harmonisez et consolidez les données ESG de toutes vos entités dans un hub centralisé avec synchronisation en temps réel.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Synchronisation automatique multi-entités</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Harmonisation des données et référentiels</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Vue consolidée et vues par entité</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#6F5DE9] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - Consolidation Multi-entités</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <GroupesMultiEntitesVisual />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Workflow Interactif */}
      <section className="py-40 section-background bg-gradient-to-br from-[#fcfcfd] via-white to-[#f8f9fa] relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="absolute inset-0 bg-radial-gradient"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6F5DE9]/30 to-transparent"></div>
        <div ref={workflowRef.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-4">
              Comment Ekyo harmonise votre groupe
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {workflowSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveWorkflow(idx)}
                className={`px-8 py-4 rounded-xl font-medium transition-all relative group ${
                  activeWorkflow === idx
                    ? 'bg-[#3F2F8D] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#6F5DE9]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeWorkflow === idx ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    <step.icon className={`w-5 h-5 ${activeWorkflow === idx ? 'text-white' : ''}`} style={activeWorkflow !== idx ? { color: step.color } : {}} />
                  </div>
                  <span className="text-lg font-semibold">{step.label}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-500 ${workflowRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h3 className="text-3xl font-bold text-[#344054]">{workflowSteps[activeWorkflow].title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{workflowSteps[activeWorkflow].description}</p>
              <ul className="space-y-3">
                {workflowSteps[activeWorkflow].points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`relative transition-all duration-500 ${workflowRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#6F5DE9] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo : {workflowSteps[activeWorkflow].label}</span>
                  </div>
                </div>
                <div className="p-6 space-y-4 bg-gradient-to-br from-gray-50 to-white relative min-h-[400px]">
                  <div className="bg-gradient-to-br from-[#6F5DE9]/20 to-[#beb2ff]/20 rounded-xl p-6 border border-[#6F5DE9]/30">
                    <div className="text-center mb-4">
                      {(() => {
                        const IconComponent = workflowSteps[activeWorkflow].icon;
                        return <IconComponent className="w-16 h-16 mx-auto mb-4" style={{ color: workflowSteps[activeWorkflow].color }} />;
                      })()}
                      <h4 className="text-xl font-bold text-[#344054] mb-2">{workflowSteps[activeWorkflow].title}</h4>
                    </div>
                    {GroupesWorkflowVisual(activeWorkflow)}
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Découvrez comment Ekyo harmonise votre groupe</p>
          </div>
          
          {benefits.map((benefit, index) => (
            <div key={index} className={`mb-24 last:mb-0 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6F5DE9]/10 border border-[#6F5DE9]/20 mb-6">
                    <CheckCircle2 className="w-4 h-4 text-[#6F5DE9]" />
                    <span className="text-sm font-medium text-[#6F5DE9]">Bénéfice {index + 1}</span>
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
                    <div className="bg-gradient-to-r from-[#6F5DE9] to-[#beb2ff] p-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="flex-1 text-center">
                        <span className="text-white text-sm font-medium">Ekyo - {benefit.title}</span>
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[400px]">
                      {BenefitVisualization('groupes', index)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 1: Cadre standardisé */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-4">Ce que permet Ekyo</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6F5DE9]/10 border border-[#6F5DE9]/20 mb-6">
                <Network className="w-4 h-4 text-[#6F5DE9]" />
                <span className="text-sm font-medium text-[#6F5DE9]">Fonctionnalité</span>
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
                  <span className="text-gray-700">Référentiel unique pour toutes les entités</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Standards harmonisés de collecte</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Processus unifiés et reproductibles</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#6F5DE9] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[0].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="cadre_standardise"
                    title={features[0].title}
                    description={features[0].description}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Collecte et consolidation */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#6F5DE9] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[1].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="collecte_consolidation_groupe"
                    title={features[1].title}
                    description={features[1].description}
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6F5DE9]/10 border border-[#6F5DE9]/20 mb-6">
                <GitBranch className="w-4 h-4 text-[#6F5DE9]" />
                <span className="text-sm font-medium text-[#6F5DE9]">Fonctionnalité</span>
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
                  <span className="text-gray-700">Consolidation automatique multi-entités</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Contrôles qualité intégrés</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Synchronisation en temps réel</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Tableaux de bord multi-niveaux */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6F5DE9]/10 border border-[#6F5DE9]/20 mb-6">
                <BarChart3 className="w-4 h-4 text-[#6F5DE9]" />
                <span className="text-sm font-medium text-[#6F5DE9]">Fonctionnalité</span>
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
                  <span className="text-gray-700">Vues par entité, BU, région, périmètre</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Pilotage à tous les niveaux</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Tableaux de bord personnalisables</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#6F5DE9] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[2].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="tableaux_bord_multi_niveaux"
                    title={features[2].title}
                    description={features[2].description}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Rôles & droits */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#6F5DE9] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[3].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="roles_droits_avances"
                    title={features[3].title}
                    description={features[3].description}
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6F5DE9]/10 border border-[#6F5DE9]/20 mb-6">
                <Users className="w-4 h-4 text-[#6F5DE9]" />
                <span className="text-sm font-medium text-[#6F5DE9]">Fonctionnalité</span>
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
                  <span className="text-gray-700">Rôles personnalisés par entité</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Gestion fine des accès</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Responsabilisation locale</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Traçabilité et audit */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6F5DE9]/10 border border-[#6F5DE9]/20 mb-6">
                <Shield className="w-4 h-4 text-[#6F5DE9]" />
                <span className="text-sm font-medium text-[#6F5DE9]">Fonctionnalité</span>
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
                  <span className="text-gray-700">Historique complet de toutes les données</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Justifications documentées</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                  <span className="text-gray-700">Prêt pour les audits</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-gradient-to-r from-[#6F5DE9] to-[#beb2ff] p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white text-sm font-medium">Ekyo - {features[4].title}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[500px]">
                  <FeatureCardVisual 
                    type="traceabilite_audit"
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
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#beb2ff]/5 via-transparent to-[#83F0C8]/5"></div>
        <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">Prêt à harmoniser votre ESG à l'échelle du groupe ?</h2>
          <p className="text-xl text-gray-600 mb-10">Contactez-nous pour découvrir comment Ekyo peut vous accompagner.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?intent=expert" className="bg-[#3F2F8D] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl">
              Télécharger le guide multi-entités
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link href="/contact?intent=demo" className="bg-white text-[#3F2F8D] border-2 border-[#3F2F8D] px-8 py-4 rounded-lg font-medium hover:bg-[#3F2F8D]/5 transition-all inline-flex items-center justify-center">
              Voir un cas d'usage groupe
            </Link>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

const workflowSteps = [
  {
    label: "Standardiser",
    title: "1. Standardisez votre référentiel ESG",
    description: "Définissez un cadre commun pour toutes vos entités avec des processus harmonisés.",
    icon: Layers,
    color: "#6F5DE9",
    points: [
      "Référentiel unique pour tout le groupe",
      "Processus harmonisés",
      "Standards de collecte communs",
      "Gouvernance claire"
    ],
    visual: (
      <div className="grid grid-cols-2 gap-3">
        {["Référentiel", "Processus", "Standards", "Gouvernance"].map((item, i) => (
          <div key={i} className="bg-white rounded-lg p-3 text-center border border-gray-200 hover:border-[#6F5DE9] transition-all">
            <div className="w-8 h-8 bg-[#6F5DE9]/20 rounded mx-auto mb-2 flex items-center justify-center">
              <Layers className="w-4 h-4 text-[#6F5DE9]" />
            </div>
            <p className="text-xs font-medium text-gray-700">{item}</p>
          </div>
        ))}
      </div>
    )
  },
  {
    label: "Collecter",
    title: "2. Collectez localement, consolidez automatiquement",
    description: "Chaque entité collecte ses données localement, la consolidation se fait automatiquement au niveau groupe.",
    icon: Building2,
    color: "#beb2ff",
    points: [
      "Collecte locale par entité",
      "Consolidation automatique",
      "Contrôles qualité intégrés",
      "Traçabilité complète"
    ],
    visual: (
      <div className="space-y-3">
        {["Entité A", "Entité B", "Entité C"].map((ent, i) => (
          <div key={i} className="bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-between hover:border-[#beb2ff] transition-all">
            <span className="text-sm font-medium text-gray-700">{ent}</span>
            <CheckCircle2 className="w-5 h-5 text-[#83F0C8]" />
          </div>
        ))}
        <div className="mt-4 bg-white rounded-lg p-3 border border-gray-200 text-center">
          <span className="text-xs text-gray-500">Consolidation automatique → Groupe</span>
        </div>
      </div>
    )
  },
  {
    label: "Piloter",
    title: "3. Pilotez à tous les niveaux",
    description: "Des tableaux de bord adaptés pour chaque niveau : entité, BU, région, groupe.",
    icon: BarChart3,
    color: "#83F0C8",
    points: [
      "Tableaux de bord par entité",
      "Vue consolidée groupe",
      "Pilotage par BU / région",
      "Rôles & droits personnalisés"
    ],
    visual: (
      <div className="space-y-3">
        {["Entité", "BU", "Région", "Groupe"].map((level, i) => (
          <div key={i} className="bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-between hover:border-[#83F0C8] transition-all">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#83F0C8]"></div>
              <span className="text-sm font-medium text-gray-700">{level}</span>
            </div>
            <BarChart3 className="w-5 h-5 text-[#83F0C8]" />
          </div>
        ))}
      </div>
    )
  }
];

const benefits = [
  {
    title: "Un référentiel commun pour tout le groupe",
    description: "Standardisez vos données ESG et climat avec un référentiel unique applicable à toutes vos entités.",
    points: [
      "Référentiel unique pour toutes les entités",
      "Standards harmonisés de collecte",
      "Processus unifiés et reproductibles",
      "Gouvernance claire et partagée"
    ]
  },
  {
    title: "Consolidation fiable et automatique",
    description: "Des indicateurs avec des contrôles automatiques et une traçabilité complète.",
    points: [
      "Consolidation automatique multi-entités",
      "Contrôles qualité intégrés",
      "Traçabilité complète des données",
      "Synchronisation en temps réel"
    ]
  },
  {
    title: "Gouvernance claire et responsabilisation locale",
    description: "Avec des droits d'accès personnalisés et des workflows adaptés à votre organisation.",
    points: [
      "Rôles et droits personnalisés par entité",
      "Workflows adaptés à votre organisation",
      "Responsabilisation locale",
      "Coordination groupe facilitée"
    ]
  },
  {
    title: "Pilotage cohérent des risques et priorités",
    description: "À tous les niveaux de votre organisation avec des tableaux de bord dédiés.",
    points: [
      "Tableaux de bord par niveau (entité, BU, groupe)",
      "Vision consolidée et vues locales",
      "Pilotage des risques harmonisé",
      "Priorisation cohérente à tous les niveaux"
    ]
  },
];

const features = [
  {
    icon: <Network className="w-8 h-8 text-[#beb2ff]" />,
    title: "Cadre ESG & climat standardisé",
    description: "Pour toutes les entités avec un référentiel unique et des processus harmonisés.",
  },
  {
    icon: <GitBranch className="w-8 h-8 text-[#beb2ff]" />,
    title: "Collecte locale → consolidation automatique groupe",
    description: "Automatisez la consolidation de vos données ESG et climat à tous les niveaux.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-[#beb2ff]" />,
    title: "Tableaux de bord par entité / BU / région / périmètre",
    description: "Pilotez votre performance ESG à tous les niveaux de votre organisation.",
  },
  {
    icon: <Users className="w-8 h-8 text-[#beb2ff]" />,
    title: "Rôles & droits avancés",
    description: "Gérez les accès et les responsabilités avec des droits personnalisés par entité.",
  },
  {
    icon: <Shield className="w-8 h-8 text-[#beb2ff]" />,
    title: "Traçabilité et audit-readiness",
    description: "Conservez l'historique de toutes vos données pour faciliter les audits.",
  },
];

