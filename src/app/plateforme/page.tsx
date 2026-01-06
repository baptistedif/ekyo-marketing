"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  BarChart3,
  FileText,
  Target,
  Sparkles,
  Shield,
  Network,
  FileCheck,
  TrendingUp,
} from "lucide-react";
import { FeatureCardVisual } from "@/components/marketing/FeatureCardVisual";

export default function PlateformePage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {/* Hero Section - Renforcé */}
      <section className="relative py-40 bg-gradient-to-br from-[#fcfcfd] via-white to-[#beb2ff]/12 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#beb2ff]/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#83F0C8]/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/20 border-2 border-[#beb2ff]/40 mb-8 animate-fade-in shadow-sm">
              <Sparkles className="w-4 h-4 text-[#beb2ff]" />
              <span className="text-sm font-medium text-[#beb2ff]">La plateforme Ekyo</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#344054] mb-6 leading-tight animate-fade-in drop-shadow-sm" style={{ animationDelay: "0.1s" }}>
              Pilotez votre performance ESG et climat sans multiplier les outils
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Structurez votre reporting ESG, sécurisez l'audit, et transformez la CSRD en véritable outil de pilotage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link
                href="/contact?intent=demo"
                className="bg-[#3F2F8D] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-violet shadow-violet-hover transform hover:-translate-y-1 hover:scale-105 group"
              >
                Voir Ekyo en démo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/solutions/pilotage-esg-performance"
                className="bg-white text-[#3F2F8D] border-2 border-[#3F2F8D] px-8 py-4 rounded-lg font-medium hover:bg-[#3F2F8D]/10 transition-all inline-flex items-center justify-center shadow-md hover:shadow-lg hover:shadow-violet transform hover:-translate-y-0.5"
              >
                Découvrir la solution
              </Link>
            </div>
            <div className="mt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link
                href="#usages"
                className="text-gray-500 hover:text-[#3F2F8D] text-sm font-medium transition-colors inline-flex items-center gap-1"
              >
                Vue d'ensemble produit
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-4">Ils nous font confiance</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              <div className="text-lg font-semibold text-gray-400">Deezer</div>
              <div className="text-lg font-semibold text-gray-400">Groupe Vyv</div>
              <div className="text-lg font-semibold text-gray-400">In Extenso</div>
              <div className="text-lg font-semibold text-gray-400">Arcade Beauty</div>
              <div className="text-lg font-semibold text-gray-400">Luminess</div>
              <div className="text-lg font-semibold text-gray-400">+200 entreprises</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Ekyo ? - Amélioré */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#3F2F8D]/15 to-[#beb2ff]/15 rounded-2xl p-12 border-2 border-[#beb2ff]/40 shadow-lg shadow-violet animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#344054] mb-4">
                Pourquoi Ekyo ?
              </h2>
              <p className="text-xl text-gray-700 font-semibold mb-8">
                Parce que la performance extra-financière doit être pilotée avec la même rigueur que la performance financière.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {whyEkyo.map((item, index) => (
                <div key={index} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle2 className="w-6 h-6 text-[#83F0C8] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <p className="text-lg font-semibold text-[#3F2F8D] flex items-center justify-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Une plateforme unique, pour passer du reporting au pilotage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les 4 grands usages couverts - Amélioré avec icônes */}
      <section id="usages" className="py-32 bg-gradient-to-br from-[#fcfcfd] to-white relative">
        <div className="absolute inset-0 bg-pattern-dots"></div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-4">
              Les 4 grands usages couverts
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                href: "/solutions/pilotage-esg-performance",
                icon: Target,
                title: "Pilotage ESG & Performance",
                description: "Priorisez vos enjeux, suivez vos KPIs et pilotez vos plans d'actions — pour transformer l'ESG en levier de décision, pas en contrainte administrative.",
                color: "#3F2F8D",
                delay: "0.1s",
              },
              {
                href: "/solutions/csrd-reporting-durable",
                icon: FileText,
                title: "CSRD & Reporting durable",
                description: "Préparez, structurez et sécurisez votre reporting extra-financier — avec un niveau d'exigence compatible investisseurs, sans transformer votre organisation en usine à reporting.",
                color: "#beb2ff",
                delay: "0.2s",
              },
              {
                href: "/solutions/climat-empreinte-carbone",
                icon: TrendingUp,
                title: "Climat & Empreinte carbone",
                description: "Mesurez, pilotez et réduisez vos émissions — Scope 1, 2, 3 et Product Carbon Footprint — pour anticiper les risques et créer de la valeur.",
                color: "#83F0C8",
                delay: "0.3s",
              },
              {
                href: "/solutions/groupes-organisations-multi-entites",
                icon: Network,
                title: "Groupes & multi-entités",
                description: "Harmonisez et consolidez vos données ESG à l'échelle du groupe — en conservant la flexibilité locale et la cohérence globale.",
                color: "#beb2ff",
                delay: "0.4s",
              },
            ].map((usage, index) => {
              const Icon = usage.icon;
              return (
                <Link
                  key={index}
                  href={usage.href}
                  className="bg-white rounded-2xl p-8 border-2 border-[#beb2ff]/30 transition-all hover:border-[#beb2ff]/60 hover:shadow-xl shadow-lg shadow-violet hover:shadow-violet-hover group animate-fade-in hover-lift"
                  style={{ 
                    animationDelay: usage.delay,
                    borderColor: usage.color === "#beb2ff" ? "#beb2ff" : usage.color === "#83F0C8" ? "#83F0C8" : usage.color === "#3F2F8D" ? "#3F2F8D" : "#e5e7eb"
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = usage.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#e5e7eb";
                  }}
                >
                  <div className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: `${usage.color}20` }}>
                    <Icon className="w-8 h-8" style={{ color: usage.color }} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#344054] mb-3 group-hover:text-[#3F2F8D] transition-colors">
                    {usage.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {usage.description}
                  </p>
                  <div className="flex items-center text-[#3F2F8D] font-medium group-hover:gap-2 transition-all">
                    En savoir plus
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        </div>
      </section>

      {/* Comment fonctionne Ekyo - Amélioré */}
      <section className="py-32 bg-white relative">
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-4">
              Comment fonctionne Ekyo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Process simple et clair
            </p>
          </div>

          {/* Section Interactive avec étapes */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { id: 0, label: "Collecter & fiabiliser la donnée", icon: Database, color: "#beb2ff" },
                { id: 1, label: "Structurer & piloter", icon: BarChart3, color: "#83F0C8" },
                { id: 2, label: "Reporter & sécuriser", icon: FileText, color: "#3F2F8D" },
              ].map((step) => {
                const StepIcon = step.icon;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveStep(step.id);
                      }
                    }}
                    className={`px-8 py-4 rounded-xl font-medium transition-all relative group focus:outline-none focus:ring-4 focus:ring-[#3F2F8D]/20 ${
                      activeStep === step.id
                        ? 'bg-[#3F2F8D] text-white shadow-violet scale-105'
                        : 'bg-white text-gray-700 border-2 border-[#beb2ff]/30 hover:border-[#beb2ff]/60'
                    }`}
                    aria-pressed={activeStep === step.id}
                    aria-label={`Étape ${step.id + 1}: ${step.label}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activeStep === step.id ? 'bg-white/20' : 'bg-gray-100'
                      }`}>
                        <StepIcon className={`w-5 h-5 ${activeStep === step.id ? 'text-white' : ''}`} style={activeStep !== step.id ? { color: step.color } : {}} aria-hidden="true" />
                      </div>
                      <span className="text-lg font-semibold">{step.label}</span>
                    </div>
                    {activeStep === step.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-b-xl" aria-hidden="true"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Contenu dynamique selon l'étape */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                {activeStep === 0 && (
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#beb2ff]/20 flex items-center justify-center">
                        <Database className="w-6 h-6 text-[#beb2ff]" />
                      </div>
                      <h3 className="text-3xl font-bold text-[#344054]">Collecter & fiabiliser la donnée</h3>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Ekyo centralise vos données ESG & climat issues de vos outils existants :
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                        <span className="text-gray-700">données comptables et FEC</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                        <span className="text-gray-700">factures et activité opérationnelle</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                        <span className="text-gray-700">contributions locales</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                        <span className="text-gray-700">chaîne de valeur et Scope 3</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 italic mt-4">
                      Avec audit-trail complet, contrôle qualité et gestion des périmètres.
                    </p>
                  </>
                )}
                {activeStep === 1 && (
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#83F0C8]/20 flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-[#83F0C8]" />
                      </div>
                      <h3 className="text-3xl font-bold text-[#344054]">Structurer & piloter</h3>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      La plateforme vous permet de :
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                        <span className="text-gray-700">prioriser vos enjeux</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                        <span className="text-gray-700">définir vos objectifs</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                        <span className="text-gray-700">suivre vos indicateurs</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                        <span className="text-gray-700">piloter vos plans d'actions</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                        <span className="text-gray-700">donner de la visibilité au COMEX et aux équipes</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 italic mt-4 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Du sens, de la clarté et de la responsabilité.
                    </p>
                  </>
                )}
                {activeStep === 2 && (
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#3F2F8D]/20 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-[#3F2F8D]" />
                      </div>
                      <h3 className="text-3xl font-bold text-[#344054]">Reporter & sécuriser</h3>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Vous produisez un reporting :
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                        <span className="text-gray-700">fiable</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                        <span className="text-gray-700">traçable</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" />
                        <span className="text-gray-700">conforme CSRD / ESRS / Taxonomie</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 italic mt-4">
                      Avec documentation, versioning et préparation audit.
                    </p>
                  </>
                )}
              </div>

              {/* Visuels dynamiques améliorés */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl shadow-violet border-2 border-[#3F2F8D]/30 overflow-hidden transform hover:scale-[1.02] hover:border-[#3F2F8D]/60 transition-all">
                  <div className="bg-gradient-to-r from-[#3F2F8D] to-[#6F5DE9] p-4 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    <div className="flex-1 text-center">
                      <span className="text-white text-sm font-medium">
                        {activeStep === 0 && "Ekyo - Collecte de données"}
                        {activeStep === 1 && "Ekyo - Structurer & piloter"}
                        {activeStep === 2 && "Ekyo - Reporter & sécuriser"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4 bg-gradient-to-br from-gray-50 to-white relative min-h-[400px]">
                    {activeStep === 0 && (
                      <FeatureCardVisual
                        type="collecte"
                        title="Collecte multi-sources"
                        description="Centralisez vos données depuis toutes vos sources"
                      />
                    )}
                    {activeStep === 1 && (
                      <FeatureCardVisual
                        type="kpis"
                        title="Pilotage en temps réel"
                        description="Suivez vos KPIs et pilotez vos actions"
                      />
                    )}
                    {activeStep === 2 && (
                      <FeatureCardVisual
                        type="versioning"
                        title="Reporting conforme"
                        description="CSRD / ESRS / Taxonomie avec traçabilité complète"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Les 4 piliers fonctionnels - Amélioré avec icônes */}
      <section className="py-32 bg-gradient-to-br from-[#fcfcfd] to-white relative">
        <div className="absolute inset-0 bg-pattern-dots"></div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-4">
              Les 4 piliers fonctionnels de la plateforme
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                href: "/fonctionnalites/pilotage-gouvernance-esg",
                icon: Target,
                title: "Pilotage & Gouvernance ESG",
                description: "Structurez votre démarche, alignez vos équipes, suivez vos plans d'actions.",
                color: "#3F2F8D",
                delay: "0.1s",
              },
              {
                href: "/fonctionnalites/esg-carbone-data-hub",
                icon: Database,
                title: "ESG & Carbone Data Hub",
                description: "Centralisez, fiabilisez et tracez vos données.",
                color: "#83F0C8",
                delay: "0.2s",
              },
              {
                href: "/fonctionnalites/reporting-conformite",
                icon: FileCheck,
                title: "Reporting & Conformité",
                description: "Un reporting durable fiable, traçable et compatible audit.",
                color: "#beb2ff",
                delay: "0.3s",
              },
              {
                href: "/fonctionnalites/integrations-securite",
                icon: Shield,
                title: "Intégrations & Sécurité",
                description: "Connecté à votre SI. Sécurisé. RGPD-ready.",
                color: "#3F2F8D",
                delay: "0.4s",
              },
            ].map((piller, index) => {
              const PillerIcon = piller.icon;
              return (
                <Link
                  key={index}
                  href={piller.href}
                  className="bg-white rounded-2xl p-8 border-2 border-[#beb2ff]/30 transition-all hover:border-[#beb2ff]/60 hover:shadow-xl shadow-lg shadow-violet hover:shadow-violet-hover group animate-fade-in hover-lift"
                  style={{ animationDelay: piller.delay } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = piller.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#e5e7eb";
                  }}
                >
                  <div className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: `${piller.color}20` }}>
                    <PillerIcon className="w-8 h-8" style={{ color: piller.color }} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#344054] mb-3 group-hover:text-[#3F2F8D] transition-colors">
                    {piller.title}
                  </h3>
                  <p className="text-gray-600">
                    {piller.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
        </div>
      </section>

      {/* Ce qui différencie Ekyo - Amélioré */}
      <section className="py-32 bg-white relative">
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-4">
              Ce qui différencie Ekyo
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-gradient-to-br from-white to-[#beb2ff]/15 rounded-xl p-6 border-2 border-[#beb2ff]/30 hover:border-[#beb2ff]/60 transition-all group animate-fade-in hover-lift shadow-md shadow-violet hover:shadow-violet-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 rounded-xl bg-[#83F0C8]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                  <CheckCircle2 className="w-6 h-6 text-[#83F0C8]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#344054] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center max-w-3xl mx-auto space-y-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-lg text-gray-700 italic">
              Notre approche est volontairement sobre, pragmatique et orientée pilotage.
            </p>
            <p className="text-lg font-semibold text-[#3F2F8D]">
              Notre conviction : la durabilité devient un vrai levier de performance quand elle est pilotée.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* CTA Final - Amélioré */}
      <section className="py-32 bg-gradient-to-br from-[#beb2ff]/15 via-white to-[#83F0C8]/15 relative">
        <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6 animate-fade-in">
            Prêt à découvrir la plateforme Ekyo ?
          </h2>
          <p className="text-xl text-gray-600 mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Parlons de votre organisation, de vos enjeux et de vos attentes.
          </p>
          <p className="text-lg text-gray-500 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Nous adaptons la démonstration à votre contexte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link
              href="/contact?intent=demo"
              className="bg-[#3F2F8D] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-violet shadow-violet-hover transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#3F2F8D]/20"
              aria-label="Demander une démonstration d'Ekyo"
            >
              Voir Ekyo en démo
              <ArrowRight className="ml-2" size={20} aria-hidden="true" />
            </Link>
            <Link
              href="/solutions/pilotage-esg-performance"
              className="bg-white text-[#3F2F8D] border-2 border-[#3F2F8D] px-8 py-4 rounded-lg font-medium hover:bg-[#3F2F8D]/10 transition-all inline-flex items-center justify-center shadow-md hover:shadow-lg hover:shadow-violet transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#3F2F8D]/20"
              aria-label="Découvrir la solution Ekyo"
            >
              Découvrir la solution
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* Sticky CTA Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-[#beb2ff]/30 shadow-lg z-40 md:hidden">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Link
            href="/contact?intent=demo"
            className="w-full bg-[#3F2F8D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-md focus:outline-none focus:ring-4 focus:ring-[#3F2F8D]/20"
            aria-label="Demander une démonstration d'Ekyo"
          >
            Voir Ekyo en démo
            <ArrowRight className="ml-2" size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}

const whyEkyo = [
  "Transformer l'ESG en véritable outil de pilotage et de décision",
  "Préparer et sécuriser votre reporting CSRD avec un niveau d'exigence audit",
  "Mesurer et réduire votre empreinte carbone : organisation et produits",
  "Collecter et fiabiliser vos données ESG & climat à l'échelle du groupe",
];

const differentiators = [
  {
    title: "Du reporting au pilotage",
    description: "Passez d'une logique de conformité subie à un véritable outil de décision pour la direction.",
  },
  {
    title: "Adoption rapide par les équipes",
    description: "Une interface sobre et intuitive qui facilite la contribution des équipes locales sans formation lourde.",
  },
  {
    title: "Crédibilité auprès des auditeurs",
    description: "Traçabilité complète (audit-trail), versioning et preuves pour sécuriser vos audits et rassurer vos investisseurs.",
  },
  {
    title: "Pilotage à l'échelle groupe",
    description: "Consolidez et harmonisez vos données multi-entités tout en conservant la flexibilité locale.",
  },
  {
    title: "Une plateforme unique, pas une collection d'outils",
    description: "ESG, climat, CSRD et pilotage intégrés — sans multiplier les licences et les interfaces.",
  },
];
