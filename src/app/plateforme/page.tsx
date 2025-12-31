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
  Layers,
  FileCheck,
  Zap,
  Users,
  Building2,
} from "lucide-react";

export default function PlateformePage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#fcfcfd] via-white to-[#beb2ff]/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/10 border border-[#beb2ff]/20 mb-8">
              <Sparkles className="w-4 h-4 text-[#beb2ff]" />
              <span className="text-sm font-medium text-[#beb2ff]">La plateforme Ekyo</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#344054] mb-6 leading-tight">
              La plateforme pour piloter votre performance extra-financière — de la donnée au pilotage
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ekyo centralise et fiabilise vos données ESG & climat, structure votre reporting (CSRD, ESRS, Taxonomie) et vous permet de piloter vos enjeux, indicateurs et plans d'actions — avec un niveau d'exigence compatible audit.
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi Ekyo ? */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#3F2F8D]/10 to-[#beb2ff]/10 rounded-2xl p-12 border-2 border-[#beb2ff]/20">
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
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#83F0C8] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-[#3F2F8D]">
                👉 Une plateforme unique, pour passer du reporting au pilotage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les 4 grands usages couverts */}
      <section className="py-32 bg-gradient-to-br from-[#fcfcfd] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-4">
              Les 4 grands usages couverts
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/solutions/csrd-reporting-durable"
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#beb2ff] transition-all hover:shadow-xl group"
            >
              <h3 className="text-2xl font-bold text-[#344054] mb-3 group-hover:text-[#3F2F8D] transition-colors">
                CSRD & Reporting durable
              </h3>
              <p className="text-gray-600 mb-4">
                Préparez, structurez et sécurisez votre reporting extra-financier.
              </p>
              <div className="flex items-center text-[#3F2F8D] font-medium group-hover:gap-2 transition-all">
                En savoir plus
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
              </div>
            </Link>

            <Link
              href="/solutions/climat-empreinte-carbone"
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#83F0C8] transition-all hover:shadow-xl group"
            >
              <h3 className="text-2xl font-bold text-[#344054] mb-3 group-hover:text-[#3F2F8D] transition-colors">
                Climat & Empreinte carbone (organisation & produits)
              </h3>
              <p className="text-gray-600 mb-4">
                Mesurez, pilotez et réduisez vos émissions — y compris le Scope 3 et le Product Carbon Footprint.
              </p>
              <div className="flex items-center text-[#3F2F8D] font-medium group-hover:gap-2 transition-all">
                En savoir plus
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
              </div>
            </Link>

            <Link
              href="/solutions/pilotage-esg-performance"
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#3F2F8D] transition-all hover:shadow-xl group"
            >
              <h3 className="text-2xl font-bold text-[#344054] mb-3 group-hover:text-[#3F2F8D] transition-colors">
                Pilotage ESG & Performance
              </h3>
              <p className="text-gray-600 mb-4">
                Priorisez vos enjeux, suivez vos KPIs et pilotez vos plans d'actions.
              </p>
              <div className="flex items-center text-[#3F2F8D] font-medium group-hover:gap-2 transition-all">
                En savoir plus
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
              </div>
            </Link>

            <Link
              href="/solutions/groupes-organisations-multi-entites"
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#beb2ff] transition-all hover:shadow-xl group"
            >
              <h3 className="text-2xl font-bold text-[#344054] mb-3 group-hover:text-[#3F2F8D] transition-colors">
                Groupes & organisations multi-entités
              </h3>
              <p className="text-gray-600 mb-4">
                Harmonisez et consolidez vos données à l'échelle du groupe.
              </p>
              <div className="flex items-center text-[#3F2F8D] font-medium group-hover:gap-2 transition-all">
                En savoir plus
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Comment fonctionne Ekyo */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
              ].map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`px-8 py-4 rounded-xl font-medium transition-all relative group ${
                    activeStep === step.id
                      ? 'bg-[#3F2F8D] text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#beb2ff]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeStep === step.id ? 'bg-white/20' : 'bg-gray-100'
                    }`}>
                      <step.icon className={`w-5 h-5 ${activeStep === step.id ? 'text-white' : ''}`} style={activeStep !== step.id ? { color: step.color } : {}} />
                    </div>
                    <span className="text-lg font-semibold">{step.label}</span>
                  </div>
                  {activeStep === step.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-b-xl"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Contenu dynamique selon l'étape */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {activeStep === 0 && (
                  <>
                    <h3 className="text-3xl font-bold text-[#344054]">1️⃣ Collecter & fiabiliser la donnée</h3>
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
                    <h3 className="text-3xl font-bold text-[#344054]">2️⃣ Structurer & piloter</h3>
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
                    <p className="text-sm text-gray-600 italic mt-4">
                      👉 Du sens, de la clarté et de la responsabilité.
                    </p>
                  </>
                )}
                {activeStep === 2 && (
                  <>
                    <h3 className="text-3xl font-bold text-[#344054]">3️⃣ Reporter & sécuriser</h3>
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

              {/* Visuels dynamiques */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
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
                    {/* Visuel Collecte */}
                    <div className={`transition-all duration-500 ease-in-out ${activeStep === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 absolute pointer-events-none w-full'}`}>
                      <div className="bg-gradient-to-br from-[#beb2ff]/20 to-[#83F0C8]/20 rounded-xl p-6 border border-[#beb2ff]/30">
                        <div className="text-center mb-4">
                          <Database className="w-16 h-16 mx-auto mb-4 text-[#beb2ff]" />
                          <h4 className="text-xl font-bold text-[#344054] mb-2">Collecte multi-sources</h4>
                          <p className="text-sm text-gray-600">FEC, factures, contributions locales</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {["FEC", "Factures", "Contributions", "Scope 3"].map((source, i) => (
                            <div key={i} className="bg-white rounded-lg p-3 text-center border border-gray-200 hover:border-[#beb2ff] transition-all">
                              <div className="w-8 h-8 bg-[#beb2ff]/20 rounded mx-auto mb-2 flex items-center justify-center">
                                <Database className="w-4 h-4 text-[#beb2ff]" />
                              </div>
                              <p className="text-xs font-medium text-gray-700">{source}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 bg-white rounded-lg p-3 border border-gray-200 text-center">
                          <span className="text-xs text-gray-500">Audit-trail complet</span>
                        </div>
                      </div>
                    </div>

                    {/* Visuel Structurer */}
                    <div className={`transition-all duration-500 ease-in-out ${activeStep === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 absolute pointer-events-none w-full'}`}>
                      <div className="bg-gradient-to-br from-[#83F0C8]/20 to-[#beb2ff]/20 rounded-xl p-6 border border-[#83F0C8]/30">
                        <div className="text-center mb-4">
                          <BarChart3 className="w-16 h-16 mx-auto mb-4 text-[#83F0C8]" />
                          <h4 className="text-xl font-bold text-[#344054] mb-2">Pilotage en temps réel</h4>
                          <p className="text-sm text-gray-600">Enjeux, KPIs, Plans d'actions</p>
                        </div>
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-2">
                            {["Enjeux", "KPIs", "Actions", "COMEX"].map((item, i) => (
                              <div key={i} className="bg-white rounded p-2 text-center border border-gray-200 hover:border-[#83F0C8] transition-all">
                                <div className="text-sm font-bold text-[#3F2F8D]">{item}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Visuel Reporter */}
                    <div className={`transition-all duration-500 ease-in-out ${activeStep === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 absolute pointer-events-none w-full'}`}>
                      <div className="bg-gradient-to-br from-[#3F2F8D]/20 to-[#6F5DE9]/20 rounded-xl p-6 border border-[#3F2F8D]/30">
                        <div className="text-center mb-4">
                          <FileText className="w-16 h-16 mx-auto mb-4 text-[#3F2F8D]" />
                          <h4 className="text-xl font-bold text-[#344054] mb-2">Reporting conforme</h4>
                          <p className="text-sm text-gray-600">CSRD / ESRS / Taxonomie</p>
                        </div>
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
                        </div>
                        <div className="mt-4 bg-white rounded-lg p-3 border border-gray-200 text-center">
                          <span className="text-xs text-gray-500">Documentation & versioning</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les 4 piliers fonctionnels */}
      <section className="py-32 bg-gradient-to-br from-[#fcfcfd] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-4">
              Les 4 piliers fonctionnels de la plateforme
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/fonctionnalites/pilotage-gouvernance-esg"
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#3F2F8D] transition-all hover:shadow-xl group"
            >
              <h3 className="text-2xl font-bold text-[#344054] mb-3 group-hover:text-[#3F2F8D] transition-colors">
                Pilotage & Gouvernance ESG
              </h3>
              <p className="text-gray-600">
                Structurez votre démarche, alignez vos équipes, suivez vos plans d'actions.
              </p>
            </Link>

            <Link
              href="/fonctionnalites/esg-carbone-data-hub"
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#83F0C8] transition-all hover:shadow-xl group"
            >
              <h3 className="text-2xl font-bold text-[#344054] mb-3 group-hover:text-[#3F2F8D] transition-colors">
                ESG & Carbone Data Hub
              </h3>
              <p className="text-gray-600">
                Centralisez, fiabilisez et tracez vos données.
              </p>
            </Link>

            <Link
              href="/fonctionnalites/reporting-conformite"
              className="bg-white rounded-2xl p-8 border-2 border:gray-200 hover:border:[#beb2ff] transition-all hover:shadow:xl group"
            >
              <h3 className="text-2xl font-bold text-[#344054] mb-3 group-hover:text-[#3F2F8D] transition-colors">
                Reporting & Conformité
              </h3>
              <p className="text-gray-600">
                Un reporting durable fiable, traçable et compatible audit.
              </p>
            </Link>

            <Link
              href="/fonctionnalites/integrations-securite"
              className="bg-white rounded-2xl p-8 border-2 border:gray-200 hover:border:[#3F2F8D] transition-all hover:shadow:xl group"
            >
              <h3 className="text-2xl font-bold text-[#344054] mb-3 group-hover:text-[#3F2F8D] transition-colors">
                Intégrations & Sécurité
              </h3>
              <p className="text-gray-600">
                Connecté à votre SI. Sécurisé. RGPD-ready.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Ce qui différencie Ekyo */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-4">
              Ce qui différencie Ekyo
            </h2>
          </div>
          <div className="grid md:grid:cols-2 gap-8 max-w-4xl mx-auto">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-gradient-to-br from-white to-[#beb2ff]/5 rounded-xl p-6 border-2 border-gray-200 hover:border-[#beb2ff] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#83F0C8]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-[#83F0C8]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#344054] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-gray-700 italic">
              Notre approche est volontairement sobre, pragmatique et orientée pilotage.
            </p>
            <p className="text-lg font-semibold text-[#3F2F8D]">
              Notre conviction : la durabilité devient un vrai levier de performance quand elle est pilotée.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-gradient-to-br from-[#beb2ff]/10 via-white to-[#83F0C8]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
            Prêt à découvrir la plateforme Ekyo ?
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Parlons de votre organisation, de vos enjeux et de vos attentes.
          </p>
          <p className="text-lg text-gray-500 mb-10">
            Nous adaptons la démonstration à votre contexte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#3F2F8D] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              Voir Ekyo en démo
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/contact"
              className="bg-white text-[#3F2F8D] border-2 border-[#3F2F8D] px-8 py-4 rounded-lg font-medium hover:bg-[#3F2F8D]/5 transition-all inline-flex items-center justify-center"
            >
              Échanger avec un expert
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const whyEkyo = [
  "Collecter et fiabiliser vos données ESG & climat à l'échelle du groupe",
  "Préparer et sécuriser votre reporting CSRD",
  "Mesurer et réduire votre empreinte carbone : organisation et produits",
  "Transformer l'ESG en véritable outil de décision",
];

const differentiators = [
  {
    title: "Une plateforme pensée pour les ETI et groupes",
    description: "Conçue spécifiquement pour répondre aux besoins des entreprises de taille intermédiaire et des groupes.",
  },
  {
    title: "Simplicité d'usage pour les équipes locales",
    description: "Une interface intuitive qui facilite l'adoption par tous les utilisateurs.",
  },
  {
    title: "Robustesse et fiabilité pour la direction",
    description: "Des fonctionnalités puissantes pour le pilotage stratégique et la prise de décision.",
  },
  {
    title: "Traçabilité complète pour l'audit",
    description: "Des données tracées et documentées pour garantir la crédibilité et faciliter les audits.",
  },
  {
    title: "Capacité multi-entités et multi-périmètres",
    description: "Gérez plusieurs entités, sites et périmètres depuis une plateforme centralisée.",
  },
];

