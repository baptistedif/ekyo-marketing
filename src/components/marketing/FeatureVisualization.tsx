"use client";

import { ReactNode, useState, useEffect } from "react";

interface FeatureVisualizationProps {
  children: ReactNode;
  color?: string;
  className?: string;
}

export function FeatureVisualization({ children, color = "#3F2F8D", className = "" }: FeatureVisualizationProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white rounded-xl"></div>
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
}

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

// Visualisation pour Pilotage & Gouvernance ESG
export function PilotageGouvernanceVisual() {
  const [activeTab, setActiveTab] = useState(0);
  const kpis = [
    { label: "Enjeux", value: "12", color: "#3F2F8D", trend: "+3" },
    { label: "KPIs", value: "45", color: "#83F0C8", trend: "+8" },
    { label: "Actions", value: "28", color: "#beb2ff", trend: "+5" }
  ];
  const activeKpi = useCycleAnimation(kpis, 3000);

  return (
    <div className="space-y-4">
      {/* Dashboard mockup avec onglets */}
      <div className="bg-gradient-to-br from-[#3F2F8D]/10 to-[#beb2ff]/10 rounded-lg p-5 border border-[#3F2F8D]/20 shadow-sm">
        {/* Header avec onglets */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            {["Dashboard", "Enjeux", "KPIs"].map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  activeTab === i
                    ? 'bg-[#3F2F8D] text-white shadow-sm'
                    : 'bg-white/50 text-gray-600 hover:bg-white/80'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="h-3 w-16 bg-[#83F0C8]/30 rounded"></div>
        </div>
        
        {/* KPI Cards animées */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {kpis.map((kpi, i) => (
            <div 
              key={i} 
              className={`bg-white/90 rounded-lg p-3 border-2 transition-all duration-300 ${
                activeKpi === i 
                  ? 'border-[#3F2F8D] shadow-md scale-105' 
                  : 'border-gray-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="text-xs text-gray-500">{kpi.label}</div>
                <div className="text-xs font-semibold text-[#83F0C8]">{kpi.trend}</div>
              </div>
              <div className="text-xl font-bold mb-2" style={{ color: kpi.color }}>{kpi.value}</div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-1.5 rounded-full transition-all duration-1000" 
                  style={{ 
                    width: `${60 + i * 15}%`, 
                    backgroundColor: kpi.color,
                    animation: activeKpi === i ? 'pulse 2s infinite' : 'none'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contenu dynamique selon l'onglet */}
        {activeTab === 0 && (
          <div className="grid grid-cols-2 gap-3 animate-fade-in">
            <div className="bg-white/90 rounded-lg p-3 border border-gray-200">
              <div className="text-xs font-semibold text-gray-600 mb-2">Performance ESG</div>
              <div className="space-y-2">
                {[
                  { label: "Environnement", value: 75, color: "#83F0C8" },
                  { label: "Social", value: 60, color: "#beb2ff" },
                  { label: "Gouvernance", value: 85, color: "#3F2F8D" },
                  { label: "Climat", value: 70, color: "#83F0C8" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-16 text-xs text-gray-600">{item.label}</div>
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
            <div className="bg-white/90 rounded-lg p-3 border border-gray-200">
              <div className="text-xs font-semibold text-gray-600 mb-2">Plans d'actions</div>
              <div className="space-y-2">
                {[
                  { status: "En cours", count: 8, color: "#beb2ff" },
                  { status: "Validé", count: 12, color: "#83F0C8" },
                  { status: "En attente", count: 3, color: "#3F2F8D" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-xs text-gray-700 font-medium">{item.status}</span>
                    </div>
                    <span className="text-xs font-bold" style={{ color: item.color }}>{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 1 && (
          <div className="bg-white/90 rounded-lg p-3 border border-gray-200 animate-fade-in">
            <div className="text-xs font-semibold text-gray-600 mb-3">Enjeux prioritaires</div>
            <div className="space-y-2">
              {[
                { name: "Émissions carbone", priority: "Haut", progress: 65 },
                { name: "Diversité & Inclusion", priority: "Moyen", progress: 45 },
                { name: "Gouvernance", priority: "Haut", progress: 80 }
              ].map((enjeu, i) => (
                <div key={i} className="p-2 bg-gray-50 rounded border border-gray-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-gray-700">{enjeu.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded" style={{ 
                      backgroundColor: enjeu.priority === "Haut" ? "#83F0C8" : "#beb2ff",
                      color: enjeu.priority === "Haut" ? "#3F2F8D" : "white"
                    }}>
                      {enjeu.priority}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-200 rounded-full">
                    <div className="h-1.5 bg-gradient-to-r from-[#3F2F8D] to-[#beb2ff] rounded-full transition-all duration-1000" style={{ width: `${enjeu.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 2 && (
          <div className="bg-white/90 rounded-lg p-3 border border-gray-200 animate-fade-in">
            <div className="text-xs font-semibold text-gray-600 mb-3">KPIs en temps réel</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Taux diversité", value: "42%", trend: "↗" },
                { name: "Émissions", value: "-15%", trend: "↘" },
                { name: "Formation", value: "89%", trend: "↗" },
                { name: "Satisfaction", value: "4.2/5", trend: "→" }
              ].map((kpi, i) => (
                <div key={i} className="p-2 bg-gray-50 rounded border border-gray-200">
                  <div className="text-xs text-gray-500 mb-1">{kpi.name}</div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-[#3F2F8D]">{kpi.value}</span>
                    <span className="text-xs text-[#83F0C8]">{kpi.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Status indicators avec animation */}
      <div className="grid grid-cols-4 gap-2">
        {["Enjeux", "KPIs", "Actions", "Risques"].map((label, i) => (
          <div 
            key={i} 
            className="bg-white rounded-lg p-3 border-2 border-gray-200 text-center hover:border-[#3F2F8D]/30 transition-all hover:shadow-md cursor-pointer"
          >
            <div className="w-3 h-3 rounded-full bg-[#83F0C8] mx-auto mb-2 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
            <div className="text-xs font-semibold text-gray-700 mb-1">{label}</div>
            <div className="text-xs font-bold text-[#3F2F8D]">{12 + i * 3}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Visualisation pour ESG & Carbone Data Hub
export function DataHubVisual() {
  const [activeSource, setActiveSource] = useState(0);
  const sources = ["ERP", "Finance", "SIRH", "Métier"];
  const activeSourceIndex = useCycleAnimation(sources, 2500);

  return (
    <div className="space-y-4">
      {/* Data flow avec animation */}
      <div className="bg-gradient-to-br from-[#83F0C8]/10 to-[#beb2ff]/10 rounded-lg p-5 border border-[#83F0C8]/20 shadow-sm">
        {/* Sources avec animation */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {["ERP", "Finance", "SIRH", "Métier"].map((source, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center transition-all duration-500 ${
                activeSourceIndex === i ? 'scale-110' : 'scale-100'
              }`}
              onClick={() => setActiveSource(i)}
            >
              <div className={`w-14 h-14 bg-white rounded-xl border-2 flex items-center justify-center mb-2 shadow-md hover:shadow-lg transition-all cursor-pointer ${
                activeSourceIndex === i 
                  ? 'border-[#83F0C8] shadow-lg ring-2 ring-[#83F0C8]/30' 
                  : 'border-[#83F0C8]/30'
              }`}>
                <div className={`w-8 h-8 bg-gradient-to-br rounded-lg flex items-center justify-center transition-all ${
                  activeSourceIndex === i
                    ? 'from-[#83F0C8] to-[#83F0C8]/70 scale-110'
                    : 'from-[#83F0C8]/30 to-[#83F0C8]/10'
                }`}>
                  <div className={`w-4 h-4 rounded transition-all ${
                    activeSourceIndex === i ? 'bg-white scale-125' : 'bg-[#83F0C8]'
                  }`}></div>
                </div>
              </div>
              <div className={`text-xs font-semibold transition-colors ${
                activeSourceIndex === i ? 'text-[#83F0C8]' : 'text-gray-700'
              }`}>{source}</div>
              <div className={`text-xs mt-1 transition-all ${
                activeSourceIndex === i 
                  ? 'text-[#83F0C8] font-semibold animate-pulse' 
                  : 'text-gray-400'
              }`}>
                {activeSourceIndex === i ? '🔄 Syncing...' : '✓ Connecté'}
              </div>
            </div>
          ))}
        </div>
        
        {/* Connection lines animées */}
        <div className="relative h-20 mb-4">
          {/* Lignes de connexion */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#83F0C8] via-[#beb2ff] to-[#83F0C8] rounded-full opacity-30"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#83F0C8] via-[#beb2ff] to-[#83F0C8] rounded-full opacity-30"></div>
          
          {/* Points animés sur les lignes */}
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute top-1/2"
              style={{
                left: `${12.5 + i * 25}%`,
                transform: 'translate(-50%, -50%)',
                animation: `pulse 2s infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            >
              <div className="w-3 h-3 bg-[#83F0C8] rounded-full shadow-lg"></div>
            </div>
          ))}
          
          {/* Hub central */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-[#83F0C8]/40 to-[#beb2ff]/40 rounded-full border-4 border-white shadow-xl flex items-center justify-center animate-pulse">
            <div className="w-16 h-16 bg-gradient-to-br from-[#83F0C8] to-[#beb2ff] rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-[#83F0C8] rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Central hub avec stats dynamiques */}
        <div className="bg-gradient-to-br from-[#83F0C8] to-[#beb2ff] rounded-xl p-4 text-center text-white shadow-lg">
          <div className="text-sm font-bold mb-1">ESG & Carbone Data Hub</div>
          <div className="text-xs opacity-90 mb-3">Données centralisées & fiabilisées</div>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div className="bg-white/20 rounded-lg p-2">
              <div className="font-bold text-sm">12.5K</div>
              <div className="opacity-80">Données</div>
            </div>
            <div className="bg-white/20 rounded-lg p-2">
              <div className="font-bold text-sm">98%</div>
              <div className="opacity-80">Validé</div>
            </div>
            <div className="bg-white/20 rounded-lg p-2">
              <div className="font-bold text-sm">4</div>
              <div className="opacity-80">Sources</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Data quality indicators avec progression */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Validé", count: "8.2K", color: "#83F0C8", progress: 65 },
          { label: "En cours", count: "1.1K", color: "#beb2ff", progress: 9 },
          { label: "Traçable", count: "12.5K", color: "#3F2F8D", progress: 100 }
        ].map((status, i) => (
          <div key={i} className="bg-white rounded-lg p-3 border-2 border-gray-200 text-center hover:border-[#83F0C8]/30 transition-all hover:shadow-md">
            <div className="w-3 h-3 rounded-full mx-auto mb-2 animate-pulse" style={{ backgroundColor: status.color, animationDelay: `${i * 0.2}s` }}></div>
            <div className="text-sm font-bold text-gray-700 mb-1">{status.count}</div>
            <div className="text-xs text-gray-500 mb-2">{status.label}</div>
            <div className="h-1 w-full bg-gray-100 rounded-full">
              <div className="h-1 rounded-full transition-all duration-1000" style={{ width: `${status.progress}%`, backgroundColor: status.color }}></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Process flow */}
      <div className="bg-white rounded-lg p-3 border border-gray-200">
        <div className="text-xs font-semibold text-gray-600 mb-2">Processus de validation</div>
        <div className="flex items-center justify-between">
          {["Collecte", "Validation", "Consolidation", "Export"].map((step, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 transition-all ${
                i <= 2 ? 'bg-[#83F0C8] text-white' : 'bg-gray-200 text-gray-400'
              }`}>
                {i <= 2 ? '✓' : i + 1}
              </div>
              <div className="text-xs text-gray-600 text-center">{step}</div>
              {i < 3 && (
                <div className={`absolute w-full h-0.5 ${i <= 1 ? 'bg-[#83F0C8]' : 'bg-gray-200'}`} style={{ left: `${(i + 1) * 25}%`, top: '16px', width: '25%' }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Visualisation pour Reporting & Conformité
export function ReportingConformiteVisual() {
  const [activeReport, setActiveReport] = useState(0);
  const reports = [
    { name: "CSRD", status: "Complet", progress: 100, sections: 12, color: "#83F0C8" },
    { name: "ESRS", status: "En cours", progress: 85, sections: 10, color: "#beb2ff" },
    { name: "Taxonomie", status: "Validé", progress: 100, sections: 8, color: "#3F2F8D" }
  ];
  const activeReportIndex = useCycleAnimation(reports, 3000);

  return (
    <div className="space-y-4">
      {/* Report structure avec sélection */}
      <div className="bg-gradient-to-br from-[#beb2ff]/10 to-[#83F0C8]/10 rounded-lg p-5 border border-[#beb2ff]/20 shadow-sm">
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
                backgroundColor: reports[activeReport].status === "Complet" ? "#83F0C8" : reports[activeReport].status === "Validé" ? "#beb2ff" : "#beb2ff",
                color: reports[activeReport].status === "En cours" ? "#3F2F8D" : "white"
              }}>
                {reports[activeReport].status}
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
        
        {/* Versioning avec timeline */}
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-3 w-32 bg-[#beb2ff]/30 rounded"></div>
            <div className="h-3 w-20 bg-gray-200 rounded"></div>
          </div>
          <div className="flex gap-2 mb-3">
            {[
              { v: "v2.1", active: true, date: "Aujourd'hui" },
              { v: "v2.0", active: false, date: "15/01" },
              { v: "v1.9", active: false, date: "01/01" }
            ].map((version, i) => (
              <div key={i} className={`flex-1 rounded-lg border-2 p-3 transition-all cursor-pointer hover:scale-105 ${
                version.active 
                  ? 'bg-gradient-to-br from-[#beb2ff]/20 to-[#83F0C8]/20 border-[#beb2ff] shadow-sm' 
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <div className={`text-sm font-bold mb-1 ${version.active ? 'text-[#3F2F8D]' : 'text-gray-400'}`}>
                  {version.v}
                </div>
                <div className="text-xs text-gray-500">{version.date}</div>
              </div>
            ))}
          </div>
          <div className="text-xs text-gray-500 text-center">
            <span className="font-semibold text-[#beb2ff]">v2.1</span> - Version actuelle
          </div>
        </div>
      </div>
      
      {/* Audit trail avec timeline */}
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
        <div className="mt-3 pt-3 border-t border-gray-200">
          <div className="flex items-center justify-center gap-2 text-xs text-[#beb2ff]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#beb2ff] animate-pulse"></div>
            <span>Toutes les actions sont tracées</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Visualisation pour Intégrations & Sécurité
export function IntegrationsSecuriteVisual() {
  const [activeIntegration, setActiveIntegration] = useState(0);
  const integrations = [
    { name: "ERP", status: "Actif", icon: "📊", data: "12.5K", color: "#3F2F8D" },
    { name: "SSO", status: "Actif", icon: "🔐", data: "245", color: "#beb2ff" },
    { name: "API", status: "Actif", icon: "🔌", data: "1.2M", color: "#83F0C8" }
  ];
  const activeIntegrationIndex = useCycleAnimation(integrations, 2500);

  return (
    <div className="space-y-4">
      {/* Integration network avec animation */}
      <div className="bg-gradient-to-br from-[#3F2F8D]/10 to-[#beb2ff]/10 rounded-lg p-5 border border-[#3F2F8D]/20 shadow-sm">
        {/* Top systems avec sélection */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {integrations.map((system, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-xl p-3 border-2 text-center shadow-sm hover:shadow-md transition-all cursor-pointer ${
                activeIntegrationIndex === i 
                  ? 'border-[#3F2F8D] ring-2 ring-[#3F2F8D]/30 scale-105' 
                  : 'border-[#3F2F8D]/30'
              }`}
              onClick={() => setActiveIntegration(i)}
            >
              <div className="text-2xl mb-2">{system.icon}</div>
              <div className={`text-xs font-semibold mb-1 transition-colors ${
                activeIntegrationIndex === i ? 'text-[#3F2F8D]' : 'text-gray-700'
              }`}>{system.name}</div>
              <div className={`text-xs font-medium mb-1 ${
                activeIntegrationIndex === i ? 'text-[#83F0C8]' : 'text-gray-500'
              }`}>{system.status}</div>
              <div className="text-xs font-bold" style={{ color: system.color }}>
                {system.data}
              </div>
            </div>
          ))}
        </div>
        
        {/* Connection lines animées */}
        <div className="relative h-20 mb-4">
          {/* Lignes horizontales */}
          <div className="absolute top-0 left-1/3 w-1/3 h-1.5 bg-gradient-to-r from-[#3F2F8D] via-[#beb2ff] to-[#3F2F8D] rounded-full shadow-sm"></div>
          <div className="absolute bottom-0 left-1/3 w-1/3 h-1.5 bg-gradient-to-r from-[#3F2F8D] via-[#beb2ff] to-[#3F2F8D] rounded-full shadow-sm"></div>
          
          {/* Ligne centrale */}
          <div className="absolute top-1/2 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#3F2F8D] to-transparent rounded-full opacity-50"></div>
          
          {/* Points animés */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute top-1/2"
              style={{
                left: `${16.66 + i * 33.33}%`,
                transform: 'translate(-50%, -50%)',
                animation: `pulse 2s infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            >
              <div className="w-3 h-3 bg-[#3F2F8D] rounded-full shadow-lg"></div>
            </div>
          ))}
        </div>
        
        {/* Central hub avec stats */}
        <div className="bg-gradient-to-br from-[#3F2F8D] to-[#6F5DE9] rounded-xl p-4 text-center text-white shadow-lg">
          <div className="text-sm font-bold mb-1">Ekyo Platform</div>
          <div className="text-xs opacity-90 mb-3">Sécurisé & RGPD</div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-white/20 rounded-lg p-2">
              <div className="font-bold">3</div>
              <div className="opacity-80">Intégrations</div>
            </div>
            <div className="bg-white/20 rounded-lg p-2">
              <div className="font-bold">99.9%</div>
              <div className="opacity-80">Uptime</div>
            </div>
            <div className="bg-white/20 rounded-lg p-2">
              <div className="font-bold">256</div>
              <div className="opacity-80">Bits</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Security badges avec détails */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { name: "RGPD", status: "Conforme", color: "#83F0C8", icon: "✓" },
          { name: "SSO", status: "Actif", color: "#beb2ff", icon: "🔐" },
          { name: "Chiffrement", status: "AES-256", color: "#3F2F8D", icon: "🔒" },
          { name: "Audit", status: "Logs", color: "#83F0C8", icon: "📋" }
        ].map((badge, i) => (
          <div 
            key={i} 
            className="bg-white rounded-lg p-3 border-2 border-gray-200 flex items-center justify-between hover:border-[#3F2F8D]/30 transition-all shadow-sm hover:shadow-md cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all group-hover:scale-110`} style={{ backgroundColor: `${badge.color}20` }}>
                {badge.icon}
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-700">{badge.name}</div>
                <div className="text-xs text-gray-500">{badge.status}</div>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full flex items-center justify-center transition-all group-hover:scale-110" style={{ backgroundColor: `${badge.color}20` }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: badge.color }}></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Status monitoring */}
      <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
        <div className="text-xs font-semibold text-gray-600 mb-2 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#83F0C8] animate-pulse"></div>
          Monitoring en temps réel
        </div>
        <div className="space-y-2">
          {[
            { service: "API Gateway", status: "Opérationnel", latency: "45ms" },
            { service: "Base de données", status: "Opérationnel", latency: "12ms" },
            { service: "Cache", status: "Opérationnel", latency: "3ms" }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#83F0C8]"></div>
                <span className="text-xs font-medium text-gray-700">{item.service}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#83F0C8] font-semibold">{item.status}</span>
                <span className="text-xs text-gray-500">{item.latency}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
