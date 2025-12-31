"use client";

import { useState, useEffect } from "react";
import { FileText, CheckCircle2, Database, BarChart3, Network, TrendingUp, Target, Shield, Building2, Layers } from "lucide-react";

// Hook pour animations cycliques
function useCycleAnimation(items: any[], interval = 2000) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  return activeIndex;
}

// Visualisation pour CSRD & Reporting Durable
export function CSRDReportingVisual() {
  const [activeReport, setActiveReport] = useState(0);
  const reports = [
    { name: "CSRD", sections: 12, progress: 100, color: "#beb2ff" },
    { name: "ESRS", sections: 10, progress: 85, color: "#83F0C8" },
    { name: "Taxonomie", sections: 8, progress: 100, color: "#3F2F8D" }
  ];
  const activeReportIndex = useCycleAnimation(reports, 3000);

  return (
    <div className="space-y-4">
      {/* Sélecteur de rapports */}
      <div className="flex gap-2 mb-4">
        {reports.map((report, i) => (
          <button
            key={i}
            onClick={() => setActiveReport(i)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeReport === i
                ? 'bg-[#beb2ff] text-white shadow-sm'
                : 'bg-white/50 text-gray-600 hover:bg-white/80'
            }`}
          >
            {report.name}
          </button>
        ))}
      </div>

      {/* Rapport actif */}
      <div className="bg-white rounded-xl p-4 border-2 border-[#beb2ff]/30 mb-4 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-4 h-4 rounded-full bg-[#beb2ff] animate-pulse"></div>
          <div className="h-3 w-48 bg-gray-200 rounded"></div>
          <div className="ml-auto flex items-center gap-2">
            <div className="text-xs text-gray-500">{reports[activeReport].sections} sections</div>
            <div className={`h-3 w-20 rounded text-xs flex items-center justify-center text-white font-medium`} style={{ 
              backgroundColor: reports[activeReport].color
            }}>
              {reports[activeReport].progress}%
            </div>
          </div>
        </div>
        
        {/* Barre de progression */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-600">Progression globale</span>
            <span className="text-xs font-bold" style={{ color: reports[activeReport].color }}>
              {reports[activeReport].progress}%
            </span>
          </div>
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-2 rounded-full transition-all duration-1000" 
              style={{ 
                width: `${reports[activeReport].progress}%`, 
                background: `linear-gradient(90deg, ${reports[activeReport].color}, ${reports[activeReport].color}dd)`
              }}
            ></div>
          </div>
        </div>

        {/* Sections du rapport */}
        <div className="space-y-2">
          {[
            { name: "Gouvernance", completed: true },
            { name: "Stratégie", completed: true },
            { name: "Impact", completed: activeReport !== 1 },
            { name: "Métriques", completed: true }
          ].map((section, i) => (
            <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#beb2ff]/50 transition-colors">
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded flex items-center justify-center ${
                  section.completed ? 'bg-[#83F0C8]' : 'bg-gray-300'
                }`}>
                  {section.completed ? (
                    <span className="text-white text-xs">✓</span>
                  ) : (
                    <div className="w-2 h-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  )}
                </div>
                <span className="text-sm font-medium text-gray-700">{section.name}</span>
              </div>
              <div className="text-xs text-gray-500">
                {section.completed ? "Complété" : "En cours"}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Audit trail */}
      <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
        <div className="text-xs font-bold text-gray-600 mb-3 uppercase tracking-wider flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#beb2ff] animate-pulse"></div>
          Audit-trail en temps réel
        </div>
        <div className="space-y-2">
          {[
            { action: "Modification", user: "J. Dupont", time: "Il y a 2h", type: "edit" },
            { action: "Validation", user: "M. Martin", time: "Il y a 1j", type: "check" },
            { action: "Export PDF", user: "Système", time: "Il y a 3j", type: "export" }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  item.type === "edit" ? "bg-[#beb2ff]/20" : 
                  item.type === "check" ? "bg-[#83F0C8]/20" : 
                  "bg-[#3F2F8D]/20"
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    item.type === "edit" ? "bg-[#beb2ff]" : 
                    item.type === "check" ? "bg-[#83F0C8]" : 
                    "bg-[#3F2F8D]"
                  }`}></div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-700">{item.action}</div>
                  <div className="text-xs text-gray-400">par {item.user}</div>
                </div>
              </div>
              <span className="text-xs text-gray-500">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Visualisation pour Climat & Empreinte Carbone
export function ClimatEmpreinteVisual() {
  const [activeScope, setActiveScope] = useState(0);
  const scopes = [
    { name: "Scope 1", emissions: "2.5K", color: "#83F0C8", percentage: 15 },
    { name: "Scope 2", emissions: "8.2K", color: "#beb2ff", percentage: 50 },
    { name: "Scope 3", emissions: "6.8K", color: "#3F2F8D", percentage: 35 }
  ];
  const activeScopeIndex = useCycleAnimation(scopes, 2500);

  return (
    <div className="space-y-4">
      {/* Graphique des émissions par scope */}
      <div className="bg-gradient-to-br from-[#83F0C8]/10 to-[#beb2ff]/10 rounded-lg p-5 border border-[#83F0C8]/20 shadow-sm">
        <div className="text-xs font-semibold text-gray-600 mb-4">Répartition des émissions</div>
        
        {/* Graphique en barres */}
        <div className="space-y-3 mb-4">
          {scopes.map((scope, i) => (
            <div key={i} className={`transition-all duration-500 ${
              activeScopeIndex === i ? 'scale-105' : 'scale-100'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full transition-all ${
                    activeScopeIndex === i ? 'ring-2 ring-[#83F0C8]' : ''
                  }`} style={{ backgroundColor: scope.color }}></div>
                  <span className={`text-sm font-semibold transition-colors ${
                    activeScopeIndex === i ? 'text-[#83F0C8]' : 'text-gray-700'
                  }`}>{scope.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold" style={{ color: scope.color }}>{scope.emissions}</span>
                  <span className="text-xs text-gray-500">tCO₂e</span>
                </div>
              </div>
              <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-4 rounded-full transition-all duration-1000"
                  style={{ 
                    width: `${scope.percentage}%`,
                    backgroundColor: scope.color
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
          <div className="text-xs text-gray-500 mb-1">Total émissions</div>
          <div className="text-2xl font-bold text-[#3F2F8D]">17.5K tCO₂e</div>
          <div className="text-xs text-[#83F0C8] font-semibold mt-1">↘ -12% vs N-1</div>
        </div>
      </div>

      {/* Trajectoire de réduction */}
      <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
        <div className="text-xs font-semibold text-gray-600 mb-3">Trajectoire de réduction</div>
        <div className="h-24 relative">
          <svg className="w-full h-full">
            <polyline
              points="10,80 40,60 70,50 100,40 130,30 160,25"
              fill="none"
              stroke="#83F0C8"
              strokeWidth="3"
              className="transition-all duration-1000"
            />
            <polyline
              points="10,80 40,70 70,65 100,60 130,55 160,50"
              fill="none"
              stroke="#beb2ff"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400">
            <span>2024</span>
            <span>2025</span>
            <span>2026</span>
            <span>2027</span>
            <span>2028</span>
            <span>2030</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-3 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[#83F0C8]"></div>
            <span>Réel</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[#beb2ff]"></div>
            <span>Objectif</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Visualisation pour Pilotage ESG Performance
export function PilotageESGVisual() {
  const [activeKpi, setActiveKpi] = useState(0);
  const kpis = [
    { label: "Enjeux", value: "12", trend: "+3", color: "#3F2F8D", progress: 75 },
    { label: "KPIs", value: "45", trend: "+8", color: "#83F0C8", progress: 85 },
    { label: "Actions", value: "28", trend: "+5", color: "#beb2ff", progress: 65 }
  ];
  const activeKpiIndex = useCycleAnimation(kpis, 2500);

  return (
    <div className="space-y-4">
      {/* KPIs en temps réel */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {kpis.map((kpi, i) => (
          <div 
            key={i} 
            className={`p-3 bg-white rounded-lg border-2 transition-all ${
              activeKpiIndex === i ? 'border-[#3F2F8D] shadow-md scale-105' : 'border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="text-xs text-gray-500">{kpi.label}</div>
              <div className="text-xs font-semibold text-[#83F0C8]">{kpi.trend}</div>
            </div>
            <div className="text-xl font-bold mb-2" style={{ color: kpi.color }}>{kpi.value}</div>
            <div className="h-1.5 w-full bg-gray-100 rounded-full">
              <div 
                className="h-1.5 rounded-full transition-all duration-1000" 
                style={{ 
                  width: `${kpi.progress}%`, 
                  backgroundColor: kpi.color
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Performance ESG */}
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="text-xs font-semibold text-gray-600 mb-3">Performance ESG globale</div>
        <div className="space-y-2">
          {[
            { label: "Environnement", value: 75, color: "#83F0C8" },
            { label: "Social", value: 60, color: "#beb2ff" },
            { label: "Gouvernance", value: 85, color: "#3F2F8D" },
            { label: "Climat", value: 70, color: "#83F0C8" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-20 text-xs text-gray-600">{item.label}</div>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-2 rounded-full transition-all duration-1000" 
                  style={{ 
                    width: `${item.value}%`, 
                    background: `linear-gradient(90deg, ${item.color}, ${item.color}dd)`
                  }}
                ></div>
              </div>
              <div className="text-xs text-gray-500 w-8">{item.value}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Visualisation pour Groupes & Multi-entités
export function GroupesMultiEntitesVisual() {
  const [activeEntity, setActiveEntity] = useState(0);
  const entities = [
    { name: "Siège", data: "12.5K", status: "Synchronisé", color: "#6F5DE9" },
    { name: "Entité A", data: "8.2K", status: "Synchronisé", color: "#beb2ff" },
    { name: "Entité B", data: "5.8K", status: "En cours", color: "#83F0C8" },
    { name: "Entité C", data: "3.2K", status: "Synchronisé", color: "#6F5DE9" }
  ];
  const activeEntityIndex = useCycleAnimation(entities, 2500);

  return (
    <div className="space-y-4">
      {/* Réseau d'entités */}
      <div className="bg-gradient-to-br from-[#6F5DE9]/10 to-[#beb2ff]/10 rounded-lg p-5 border border-[#6F5DE9]/20 shadow-sm">
        <div className="text-xs font-semibold text-gray-600 mb-4">Consolidation multi-entités</div>
        
        {/* Entités */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {entities.map((entity, i) => (
            <div 
              key={i}
              className={`p-3 bg-white rounded-lg border-2 transition-all cursor-pointer ${
                activeEntityIndex === i 
                  ? 'border-[#6F5DE9] shadow-md scale-105' 
                  : 'border-gray-200'
              }`}
              onClick={() => setActiveEntity(i)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full transition-all ${
                    activeEntityIndex === i ? 'ring-2 ring-[#6F5DE9]' : ''
                  }`} style={{ backgroundColor: entity.color }}></div>
                  <span className={`text-sm font-semibold transition-colors ${
                    activeEntityIndex === i ? 'text-[#6F5DE9]' : 'text-gray-700'
                  }`}>{entity.name}</span>
                </div>
                <div className={`text-xs px-2 py-0.5 rounded font-semibold ${
                  entity.status === "Synchronisé" 
                    ? 'bg-[#83F0C8]/20 text-[#83F0C8]' 
                    : 'bg-[#beb2ff]/20 text-[#beb2ff]'
                }`}>
                  {entity.status}
                </div>
              </div>
              <div className="text-lg font-bold" style={{ color: entity.color }}>{entity.data}</div>
              <div className="text-xs text-gray-500">données</div>
            </div>
          ))}
        </div>

        {/* Hub central */}
        <div className="bg-gradient-to-br from-[#6F5DE9] to-[#beb2ff] rounded-xl p-4 text-center text-white shadow-lg">
          <div className="text-sm font-bold mb-1">Hub de consolidation</div>
          <div className="text-xs opacity-90 mb-2">Données harmonisées</div>
          <div className="text-lg font-bold">29.7K</div>
          <div className="text-xs opacity-80">Total consolidé</div>
        </div>
      </div>

      {/* Statut de synchronisation */}
      <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
        <div className="text-xs font-semibold text-gray-600 mb-2">Synchronisation</div>
        <div className="space-y-2">
          {[
            { entity: "Siège", progress: 100, status: "✓" },
            { entity: "Entité A", progress: 100, status: "✓" },
            { entity: "Entité B", progress: 75, status: "⏳" },
            { entity: "Entité C", progress: 100, status: "✓" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-16 text-xs text-gray-600">{item.entity}</div>
              <div className="flex-1 h-2 bg-gray-100 rounded-full">
                <div 
                  className="h-2 bg-gradient-to-r from-[#6F5DE9] to-[#beb2ff] rounded-full transition-all duration-1000"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
              <div className="text-xs font-semibold text-[#83F0C8]">{item.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Visualisations différenciées pour sections interactives (plus détaillées)

// Visualisation détaillée pour CSRD - Section Processus
export function CSRDProcessVisual(step: number) {
  const steps = [
    {
      items: ["Périmètre", "Enjeux", "Entités", "Collecte"],
      icon: Layers,
      color: "#beb2ff"
    },
    {
      items: ["Entité A", "Entité B", "Entité C"],
      icon: Database,
      color: "#83F0C8"
    },
    {
      items: ["CSRD", "ESRS", "Taxonomie"],
      icon: FileText,
      color: "#3F2F8D"
    }
  ];
  
  const currentStep = steps[step] || steps[0];
  const IconComponent = currentStep.icon;
  
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border-2 border-gray-200">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#beb2ff]/20 to-[#83F0C8]/20 flex items-center justify-center border-2 border-gray-200">
            <IconComponent className="w-8 h-8" style={{ color: currentStep.color }} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {currentStep.items.map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-3 text-center border border-gray-200 hover:border-[#beb2ff] transition-all shadow-sm">
              <div className="w-8 h-8 bg-[#beb2ff]/20 rounded mx-auto mb-2 flex items-center justify-center">
                <IconComponent className="w-4 h-4 text-[#beb2ff]" />
              </div>
              <p className="text-xs font-medium text-gray-700">{item}</p>
              <div className="mt-2 h-1 bg-gray-100 rounded-full">
                <div className="h-1 bg-[#83F0C8] rounded-full" style={{ width: `${75 + i * 5}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="text-xs font-semibold text-gray-600 mb-2">Progression</div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-gray-100 rounded-full">
            <div 
              className="h-2 rounded-full transition-all duration-1000" 
              style={{ 
                width: `${step === 0 ? 30 : step === 1 ? 70 : 100}%`,
                background: `linear-gradient(90deg, ${currentStep.color}, ${currentStep.color}dd)`
              }}
            ></div>
          </div>
          <span className="text-xs font-bold" style={{ color: currentStep.color }}>
            {step === 0 ? "30%" : step === 1 ? "70%" : "100%"}
          </span>
        </div>
      </div>
    </div>
  );
}

// Visualisation détaillée pour Climat - Section Scopes
export function ClimatScopeVisual(scopeIndex: number) {
  const scopes = [
    { name: "Scope 1", items: ["Combustion", "Procédés", "Fugitives", "Transport"], color: "#83F0C8", total: "2.5K" },
    { name: "Scope 2", items: ["Électricité", "Chaleur", "Froid"], color: "#beb2ff", total: "8.2K" },
    { name: "Scope 3", items: ["Achats", "Transport", "Utilisation", "Fin de vie"], color: "#3F2F8D", total: "6.8K" }
  ];
  
  const currentScope = scopes[scopeIndex] || scopes[0];
  
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border-2 border-gray-200">
        <div className="text-center mb-4">
          <div className="text-lg font-bold text-gray-700 mb-2">{currentScope.name}</div>
          <div className="text-2xl font-bold mb-1" style={{ color: currentScope.color }}>{currentScope.total}</div>
          <div className="text-xs text-gray-500">tCO₂e</div>
        </div>
        <div className="space-y-2">
          {currentScope.items.map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-between hover:border-[#83F0C8] transition-all">
              <span className="text-sm font-medium text-gray-700">{item}</span>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: currentScope.color }}></div>
                <span className="text-xs text-gray-500">{Math.floor(Math.random() * 500 + 200)} tCO₂e</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="text-xs font-semibold text-gray-600 mb-2">Répartition</div>
        <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-3 rounded-full transition-all duration-1000" 
            style={{ 
              width: `${scopeIndex === 0 ? 15 : scopeIndex === 1 ? 50 : 35}%`,
              backgroundColor: currentScope.color
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

// Visualisation détaillée pour Pilotage ESG - Section Étapes
export function PilotageESGStepVisual(stepIndex: number) {
  const steps = [
    {
      title: "Cartographie",
      items: ["Enjeux ESG", "Double matérialité", "Priorisation", "Risques"],
      icon: Target,
      color: "#3F2F8D"
    },
    {
      title: "KPIs & Métriques",
      items: ["Indicateurs", "Objectifs", "Suivi", "Alertes"],
      icon: BarChart3,
      color: "#83F0C8"
    },
    {
      title: "Actions & Plans",
      items: ["Plans d'actions", "Responsabilités", "Échéances", "Suivi"],
      icon: TrendingUp,
      color: "#beb2ff"
    }
  ];
  
  const currentStep = steps[stepIndex] || steps[0];
  const IconComponent = currentStep.icon;
  
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border-2 border-gray-200">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3F2F8D]/20 to-[#83F0C8]/20 flex items-center justify-center border-2 border-gray-200">
            <IconComponent className="w-8 h-8" style={{ color: currentStep.color }} />
          </div>
        </div>
        <div className="text-center mb-4">
          <h4 className="text-lg font-bold text-gray-700">{currentStep.title}</h4>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {currentStep.items.map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-3 text-center border border-gray-200 hover:border-[#3F2F8D] transition-all shadow-sm">
              <div className="w-8 h-8 bg-[#3F2F8D]/20 rounded mx-auto mb-2 flex items-center justify-center">
                <IconComponent className="w-4 h-4 text-[#3F2F8D]" />
              </div>
              <p className="text-xs font-medium text-gray-700">{item}</p>
              <div className="mt-2 h-1 bg-gray-100 rounded-full">
                <div className="h-1 rounded-full" style={{ 
                  width: `${60 + i * 10}%`,
                  backgroundColor: currentStep.color
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="text-xs font-semibold text-gray-600 mb-2">Avancement</div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-gray-100 rounded-full">
            <div 
              className="h-2 rounded-full transition-all duration-1000" 
              style={{ 
                width: `${stepIndex === 0 ? 40 : stepIndex === 1 ? 75 : 90}%`,
                background: `linear-gradient(90deg, ${currentStep.color}, ${currentStep.color}dd)`
              }}
            ></div>
          </div>
          <span className="text-xs font-bold" style={{ color: currentStep.color }}>
            {stepIndex === 0 ? "40%" : stepIndex === 1 ? "75%" : "90%"}
          </span>
        </div>
      </div>
    </div>
  );
}

// Visualisation détaillée pour Groupes - Section Workflow
export function GroupesWorkflowVisual(workflowIndex: number) {
  const workflows = [
    {
      title: "Standardisation",
      items: ["Référentiel", "Processus", "Standards", "Gouvernance"],
      icon: Layers,
      color: "#6F5DE9"
    },
    {
      title: "Collecte & Consolidation",
      items: ["Entité A", "Entité B", "Entité C"],
      icon: Building2,
      color: "#beb2ff"
    },
    {
      title: "Pilotage Multi-niveaux",
      items: ["Entité", "BU", "Région", "Groupe"],
      icon: BarChart3,
      color: "#83F0C8"
    }
  ];
  
  const currentWorkflow = workflows[workflowIndex] || workflows[0];
  const IconComponent = currentWorkflow.icon;
  
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border-2 border-gray-200">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6F5DE9]/20 to-[#beb2ff]/20 flex items-center justify-center border-2 border-gray-200">
            <IconComponent className="w-8 h-8" style={{ color: currentWorkflow.color }} />
          </div>
        </div>
        <div className="text-center mb-4">
          <h4 className="text-lg font-bold text-gray-700">{currentWorkflow.title}</h4>
        </div>
        <div className={workflowIndex === 1 ? "space-y-2" : "grid grid-cols-2 gap-3"}>
          {currentWorkflow.items.map((item, i) => (
            <div key={i} className={`bg-white rounded-lg p-3 ${workflowIndex === 1 ? 'flex items-center justify-between' : 'text-center'} border border-gray-200 hover:border-[#6F5DE9] transition-all shadow-sm`}>
              {workflowIndex === 1 ? (
                <>
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8]" />
                </>
              ) : (
                <>
                  <div className="w-8 h-8 bg-[#6F5DE9]/20 rounded mx-auto mb-2 flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-[#6F5DE9]" />
                  </div>
                  <p className="text-xs font-medium text-gray-700">{item}</p>
                  <div className="mt-2 h-1 bg-gray-100 rounded-full">
                    <div className="h-1 bg-[#83F0C8] rounded-full" style={{ width: `${70 + i * 10}%` }}></div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        {workflowIndex === 1 && (
          <div className="mt-4 bg-white rounded-lg p-3 border border-gray-200 text-center">
            <span className="text-xs text-gray-500">Consolidation automatique → Groupe</span>
          </div>
        )}
      </div>
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="text-xs font-semibold text-gray-600 mb-2">Synchronisation</div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-gray-100 rounded-full">
            <div 
              className="h-2 rounded-full transition-all duration-1000" 
              style={{ 
                width: `${workflowIndex === 0 ? 50 : workflowIndex === 1 ? 80 : 100}%`,
                background: `linear-gradient(90deg, ${currentWorkflow.color}, ${currentWorkflow.color}dd)`
              }}
            ></div>
          </div>
          <span className="text-xs font-bold" style={{ color: currentWorkflow.color }}>
            {workflowIndex === 0 ? "50%" : workflowIndex === 1 ? "80%" : "100%"}
          </span>
        </div>
      </div>
    </div>
  );
}

// Visualisations pour sections bénéfices (format pleine largeur)
export function BenefitVisualization(type: string, index: number) {
  // S'assurer que l'index est valide
  const validIndex = Math.max(0, Math.min(index, 10));
  
  const visuals = {
    csrd: [
      // 0: Réduisez le risque réglementaire
      <div key={0} className="space-y-4 min-h-[350px]">
        <div className="bg-gradient-to-br from-[#beb2ff]/10 to-[#83F0C8]/10 rounded-xl p-6 border border-[#beb2ff]/20 h-full">
          <div className="text-sm font-semibold text-gray-700 mb-4">Réduction des risques</div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600">Avant Ekyo</span>
            <span className="text-xs text-gray-600">Avec Ekyo</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-24 text-xs text-gray-600">Erreurs</div>
              <div className="flex-1 h-3 bg-gray-200 rounded-full">
                <div className="h-3 bg-red-400 rounded-full" style={{ width: "45%" }}></div>
              </div>
              <div className="w-24 text-xs text-gray-600">15%</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-24 text-xs text-gray-600">Temps</div>
              <div className="flex-1 h-3 bg-gray-200 rounded-full">
                <div className="h-3 bg-[#83F0C8] rounded-full" style={{ width: "25%" }}></div>
              </div>
              <div className="w-24 text-xs text-gray-600">-60%</div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <div className="w-2 h-2 rounded-full bg-[#83F0C8]"></div>
              <span>Traçabilité 100%</span>
            </div>
          </div>
        </div>
      </div>,
      // 1: Industrialisez la collecte multi-entités
      <div key={1} className="space-y-4 min-h-[350px]">
        <div className="bg-gradient-to-br from-[#beb2ff]/10 to-[#83F0C8]/10 rounded-xl p-6 border border-[#beb2ff]/20 h-full">
          <div className="text-sm font-semibold text-gray-700 mb-4">Efficacité multi-entités</div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {["Entité A", "Entité B", "Entité C"].map((ent, i) => (
              <div key={i} className="bg-white rounded-lg p-3 border border-gray-200 text-center">
                <div className="text-xs text-gray-500 mb-1">{ent}</div>
                <div className="text-lg font-bold text-[#beb2ff]">{i === 0 ? "100%" : i === 1 ? "95%" : "100%"}</div>
                <div className="text-xs text-[#83F0C8]">✓ Automatisé</div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Temps de traitement</span>
              <span className="text-xs font-bold text-[#83F0C8]">-60%</span>
            </div>
          </div>
        </div>
      </div>,
      // 2: Renforcez la crédibilité
      <div key={2} className="space-y-4 min-h-[350px]">
        <div className="bg-gradient-to-br from-[#beb2ff]/10 to-[#83F0C8]/10 rounded-xl p-6 border border-[#beb2ff]/20 h-full">
          <div className="text-sm font-semibold text-gray-700 mb-4">Crédibilité renforcée</div>
          <div className="space-y-3">
            {[
              { label: "Documentation", value: "100%", color: "#beb2ff" },
              { label: "Preuves justificatives", value: "98%", color: "#83F0C8" },
              { label: "Conformité standards", value: "100%", color: "#beb2ff" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-200">
                <span className="text-xs text-gray-700">{item.label}</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-16 bg-gray-100 rounded-full">
                    <div className="h-2 rounded-full" style={{ width: item.value, backgroundColor: item.color }}></div>
                  </div>
                  <span className="text-xs font-bold" style={{ color: item.color }}>{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>,
      // 3: Pilotez le déploiement CSRD
      <div key={3} className="space-y-4 min-h-[350px]">
        <div className="bg-gradient-to-br from-[#beb2ff]/10 to-[#83F0C8]/10 rounded-xl p-6 border border-[#beb2ff]/20 h-full">
          <div className="text-sm font-semibold text-gray-700 mb-4">Déploiement durable</div>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Mise à jour templates</span>
                <span className="text-xs text-[#83F0C8] font-semibold">✓ Automatique</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Suivi réglementaire</span>
                <span className="text-xs text-[#83F0C8] font-semibold">✓ Actif</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="text-xs text-gray-500 mb-1">Scalabilité</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-[#beb2ff] rounded-full" style={{ width: "85%" }}></div>
                </div>
                <span className="text-xs font-bold text-[#beb2ff]">+∞</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ],
    climat: [
      // 0: Vision consolidée et fiable
      <div key={0} className="space-y-4 min-h-[350px]">
        <div className="bg-gradient-to-br from-[#83F0C8]/10 to-[#beb2ff]/10 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-sm font-semibold text-gray-700 mb-4">Vision consolidée</div>
          <div className="space-y-3">
            {["Scope 1", "Scope 2", "Scope 3"].map((scope, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-20 text-xs text-gray-600">{scope}</div>
                <div className="flex-1 h-4 bg-gray-200 rounded-full">
                  <div className="h-4 bg-[#83F0C8] rounded-full" style={{ width: `${30 + i * 20}%` }}></div>
                </div>
                <div className="text-xs font-bold text-[#83F0C8]">{i === 0 ? "2.5K" : i === 1 ? "8.2K" : "6.8K"} tCO₂e</div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Total émissions</span>
              <span className="text-sm font-bold text-[#3F2F8D]">17.5K tCO₂e</span>
            </div>
          </div>
        </div>
      </div>,
      // 1: Scope 3 et chaîne de valeur intégrés
      <div key={1} className="space-y-4 min-h-[350px]">
        <div className="bg-gradient-to-br from-[#83F0C8]/10 to-[#beb2ff]/10 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-sm font-semibold text-gray-700 mb-4">Scope 3 intégré</div>
          <div className="space-y-3 mb-4">
            {["Fournisseurs", "Transport", "Utilisation", "Fin de vie"].map((item, i) => (
              <div key={i} className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-200 hover:border-[#83F0C8] transition-colors">
                <span className="text-sm font-medium text-gray-700">{item}</span>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#83F0C8] animate-pulse"></div>
                  <span className="text-xs text-[#83F0C8] font-semibold">Connecté</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-4 border-2 border-[#83F0C8]/30">
            <div className="text-xs text-gray-500 mb-2">Conformité GHG Protocol</div>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-[#83F0C8]">✓ 100%</div>
              <div className="flex-1 h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-[#83F0C8] rounded-full" style={{ width: "100%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>,
      // 2: Mesure standardisée de l'empreinte carbone produit
      <div key={2} className="space-y-4 min-h-[350px]">
        <div className="bg-gradient-to-br from-[#83F0C8]/10 to-[#beb2ff]/10 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-sm font-semibold text-gray-700 mb-4">PCF standardisé</div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {["ISO 14067", "PAS 2050", "GHG Protocol", "PCF"].map((standard, i) => (
              <div key={i} className="bg-white rounded-lg p-2 border border-gray-200 text-center">
                <div className="text-xs text-gray-600 mb-1">{standard}</div>
                <div className="w-3 h-3 rounded-full bg-[#83F0C8] mx-auto"></div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Produits calculés</div>
            <div className="text-lg font-bold text-[#83F0C8]">45</div>
          </div>
        </div>
      </div>,
      // 3: Priorisation des leviers d'action
      <div key={3} className="space-y-4 min-h-[350px]">
        <div className="bg-gradient-to-br from-[#83F0C8]/10 to-[#beb2ff]/10 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-sm font-semibold text-gray-700 mb-4">Leviers d'action</div>
          <div className="space-y-2">
            {[
              { name: "Efficacité énergétique", impact: "-15%", priority: 1 },
              { name: "Transport durable", impact: "-8%", priority: 2 },
              { name: "Fournisseurs", impact: "-12%", priority: 3 }
            ].map((action, i) => (
              <div key={i} className="bg-white rounded-lg p-2 border border-gray-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-700">{action.name}</span>
                  <span className="text-xs font-bold text-[#83F0C8]">{action.impact}</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full">
                  <div className="h-1.5 bg-gradient-to-r from-[#83F0C8] to-[#beb2ff] rounded-full" style={{ width: `${100 - action.priority * 20}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>,
      // 4: Communication climat transparente
      <div key={4} className="space-y-4 min-h-[350px]">
        <div className="bg-gradient-to-br from-[#83F0C8]/10 to-[#beb2ff]/10 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-sm font-semibold text-gray-700 mb-4">Communication transparente</div>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Alignement SBTi</span>
                <span className="text-xs text-[#83F0C8] font-semibold">✓ Validé</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Net Zero 2030</span>
                <span className="text-xs text-[#83F0C8] font-semibold">✓ En cours</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="text-xs text-gray-500 mb-1">Trajectoire de réduction</div>
              <div className="h-8 relative">
                <svg className="w-full h-full">
                  <polyline points="0,30 30,25 60,20 90,15 120,10" fill="none" stroke="#83F0C8" strokeWidth="3" />
                </svg>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400">
                  <span>2024</span>
                  <span>2026</span>
                  <span>2028</span>
                  <span>2030</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ],
    pilotage: [
      // 0: Identifiez et maîtrisez vos enjeux clés
      <div key={0} className="space-y-4 min-h-[350px]">
        <div className="bg-gradient-to-br from-[#3F2F8D]/10 to-[#83F0C8]/10 rounded-xl p-6 border border-[#3F2F8D]/20 h-full">
          <div className="text-sm font-semibold text-gray-700 mb-4">Maîtrise des enjeux</div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="text-xs text-gray-500 mb-1">Enjeux identifiés</div>
              <div className="text-2xl font-bold text-[#3F2F8D]">12</div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="text-xs text-gray-500 mb-1">Priorisés</div>
              <div className="text-2xl font-bold text-[#83F0C8]">8</div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Risques maîtrisés</div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-[#3F2F8D] rounded-full" style={{ width: "85%" }}></div>
              </div>
              <span className="text-xs font-bold text-[#3F2F8D]">85%</span>
            </div>
          </div>
        </div>
      </div>,
      // 1: Alignez l'ESG avec la stratégie
      <div key={1} className="space-y-4 min-h-[350px]">
        <div className="bg-gradient-to-br from-[#3F2F8D]/10 to-[#83F0C8]/10 rounded-xl p-6 border border-[#3F2F8D]/20 h-full">
          <div className="text-sm font-semibold text-gray-700 mb-4">Alignement stratégique</div>
          <div className="space-y-3">
            {[
              { label: "KPIs alignés", value: "45", color: "#3F2F8D" },
              { label: "Objectifs business", value: "12", color: "#83F0C8" },
              { label: "Décisions data-driven", value: "100%", color: "#beb2ff" }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-700">{item.label}</span>
                  <span className="text-sm font-bold" style={{ color: item.color }}>{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>,
      // 2: Donnez de la visibilité au COMEX et aux équipes
      <div key={2} className="space-y-4 min-h-[350px]">
        <div className="bg-gradient-to-br from-[#3F2F8D]/10 to-[#83F0C8]/10 rounded-xl p-6 border border-[#3F2F8D]/20 h-full">
          <div className="text-sm font-semibold text-gray-700 mb-4">Visibilité en temps réel</div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {["Direction", "RSE", "DAF", "RH"].map((role, i) => (
              <div key={i} className="bg-white rounded-lg p-2 border border-gray-200 text-center">
                <div className="text-xs text-gray-600 mb-1">{role}</div>
                <div className="w-3 h-3 rounded-full bg-[#83F0C8] mx-auto"></div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Tableaux de bord actifs</div>
            <div className="text-lg font-bold text-[#3F2F8D]">24</div>
          </div>
        </div>
      </div>,
      // 3: Passez d'un reporting subi à un pilotage structuré
      <div key={3} className="space-y-4 min-h-[350px]">
        <div className="bg-gradient-to-br from-[#3F2F8D]/10 to-[#83F0C8]/10 rounded-xl p-6 border border-[#3F2F8D]/20 h-full">
          <div className="text-sm font-semibold text-gray-700 mb-4">Transformation ESG</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-white rounded-lg p-2 border border-gray-200">
              <span className="text-xs text-gray-600">Avant</span>
              <span className="text-xs text-gray-600">Reporting subi</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl text-[#83F0C8]">→</div>
            </div>
            <div className="flex items-center justify-between bg-white rounded-lg p-2 border-2 border-[#83F0C8]">
              <span className="text-xs text-gray-600">Après</span>
              <span className="text-xs font-bold text-[#83F0C8]">Pilotage structuré</span>
            </div>
          </div>
          <div className="mt-4 bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Niveau de maturité</div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-gradient-to-r from-[#3F2F8D] to-[#83F0C8] rounded-full" style={{ width: "90%" }}></div>
              </div>
              <span className="text-xs font-bold text-[#3F2F8D]">90%</span>
            </div>
          </div>
        </div>
      </div>
    ],
    groupes: [
      // 0: Un référentiel commun pour tout le groupe
      <div key={0} className="space-y-4 min-h-[350px]">
        <div className="bg-gradient-to-br from-[#6F5DE9]/10 to-[#beb2ff]/10 rounded-xl p-6 border border-[#6F5DE9]/20 h-full">
          <div className="text-sm font-semibold text-gray-700 mb-4">Référentiel commun</div>
          <div className="space-y-2">
            {["Siège", "Entité A", "Entité B", "Entité C"].map((ent, i) => (
              <div key={i} className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-200">
                <span className="text-sm text-gray-700">{ent}</span>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#83F0C8]"></div>
                  <span className="text-xs text-[#83F0C8] font-semibold">Synchronisé</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Entités couvertes</div>
            <div className="text-lg font-bold text-[#6F5DE9]">12</div>
          </div>
        </div>
      </div>,
      // 1: Consolidation fiable et automatique
      <div key={1} className="space-y-4 min-h-[350px]">
        <div className="bg-gradient-to-br from-[#6F5DE9]/10 to-[#beb2ff]/10 rounded-xl p-6 border border-[#6F5DE9]/20 h-full">
          <div className="text-sm font-semibold text-gray-700 mb-4">Consolidation automatique</div>
          <div className="space-y-2 mb-4">
            {["Siège", "Entité A", "Entité B", "Entité C"].map((ent, i) => (
              <div key={i} className="flex items-center justify-between bg-white rounded-lg p-2 border border-gray-200">
                <span className="text-xs text-gray-700">{ent}</span>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-16 bg-gray-100 rounded-full">
                    <div className="h-1.5 bg-[#6F5DE9] rounded-full" style={{ width: `${75 + i * 8}%` }}></div>
                  </div>
                  <span className="text-xs text-[#83F0C8] font-semibold">✓</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Données consolidées</div>
            <div className="text-lg font-bold text-[#6F5DE9]">29.7K</div>
          </div>
        </div>
      </div>,
      // 2: Gouvernance claire et responsabilisation locale
      <div key={2} className="space-y-4 min-h-[350px]">
        <div className="bg-gradient-to-br from-[#6F5DE9]/10 to-[#beb2ff]/10 rounded-xl p-6 border border-[#6F5DE9]/20 h-full">
          <div className="text-sm font-semibold text-gray-700 mb-4">Gouvernance</div>
          <div className="space-y-2 mb-4">
            {["Admin Groupe", "Responsable Entité", "Contributeur", "Lecteur"].map((role, i) => (
              <div key={i} className="flex items-center justify-between bg-white rounded-lg p-2 border border-gray-200">
                <span className="text-xs text-gray-700">{role}</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#83F0C8]"></div>
                  <span className="text-xs text-[#83F0C8] font-semibold">Actif</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Utilisateurs</div>
            <div className="text-lg font-bold text-[#6F5DE9]">156</div>
          </div>
        </div>
      </div>,
      // 3: Pilotage cohérent des risques et priorités
      <div key={3} className="space-y-4 min-h-[350px]">
        <div className="bg-gradient-to-br from-[#6F5DE9]/10 to-[#beb2ff]/10 rounded-xl p-6 border border-[#6F5DE9]/20 h-full">
          <div className="text-sm font-semibold text-gray-700 mb-4">Pilotage multi-niveaux</div>
          <div className="space-y-2 mb-4">
            {["Groupe", "BU", "Région", "Entité"].map((level, i) => (
              <div key={i} className="flex items-center justify-between bg-white rounded-lg p-2 border border-gray-200">
                <span className="text-xs text-gray-700">{level}</span>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#6F5DE9]" />
                  <span className="text-xs text-[#6F5DE9] font-semibold">Tableau de bord</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Tableaux de bord</div>
            <div className="text-lg font-bold text-[#6F5DE9]">48</div>
          </div>
        </div>
      </div>
    ]
  };
  
  const typeVisuals = visuals[type as keyof typeof visuals];
  if (!typeVisuals || !typeVisuals[validIndex]) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 min-h-[350px] flex items-center justify-center">
        <div className="text-center">
          <div className="text-sm font-semibold text-gray-700 mb-2">Visualisation</div>
          <div className="text-xs text-gray-500">Contenu en préparation</div>
        </div>
      </div>
    );
  }
  
  return typeVisuals[validIndex];
}
