"use client";

import { useState, useEffect } from "react";
import { Target, BarChart3, CheckSquare, TrendingUp, AlertTriangle, Database, Zap, Shield, FileCheck, Network, FileText, GitBranch, Download, Lock, Server, Code, Layers, Calculator, Activity, Package, TrendingDown, Users, BarChart } from "lucide-react";

interface FeatureCardVisualProps {
  type: "materiality" | "kpis" | "actions" | "dashboards" | "risks" | 
        "collecte" | "integrations" | "controles" | "audit" | "perimetres" |
        "templates" | "exigences" | "justification" | "versioning" | "exports" |
        "api" | "sso" | "hebergement" | "gouvernance" |
        // Solutions CSRD
        "double_materialite" | "collecte_consolidation" | "traceabilite_preuves" | "suivi_exigences_esrs" | "versioning_rapport" |
        // Solutions Climat
        "calculs_scopes" | "connexion_fec" | "facteurs_emissions" | "trajectoires_climat" | "suivi_plans_reduction" |
        "methodologie_pcf" | "cycle_vie" | "lien_donnees_financieres" | "export_pcf" | "traceabilite_pcf" |
        // Solutions Pilotage ESG
        "cartographie_enjeux" | "kpis_esg_climat" | "plans_actions_ownership" | "tableaux_bord_filiales" | "collaboration_workflows" |
        // Solutions Groupes
        "cadre_standardise" | "collecte_consolidation_groupe" | "tableaux_bord_multi_niveaux" | "roles_droits_avances" | "traceabilite_audit";
  title: string;
  description: string;
}

export function FeatureCardVisual({ type, title, description }: FeatureCardVisualProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  if (type === "materiality") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#3F2F8D]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#3F2F8D]/20 h-full">
          {/* Matrice de matérialité */}
          <div className="mb-4">
            <div className="text-xs font-semibold text-gray-600 mb-3">Matrice de priorisation</div>
            <div className="relative h-48 bg-white rounded-lg p-4 border border-gray-200">
              {/* Axes */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gray-300"></div>
              
              {/* Quadrants */}
              <div className="absolute top-0 left-0 w-1/2 h-1/2 border-r border-b border-gray-200/50"></div>
              <div className="absolute top-0 right-0 w-1/2 h-1/2 border-b border-gray-200/50"></div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 border-r border-gray-200/50"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2"></div>
              
              {/* Points animés */}
              {[
                { x: 75, y: 80, label: "Émissions", priority: "Haut" },
                { x: 60, y: 40, label: "Diversité", priority: "Moyen" },
                { x: 85, y: 25, label: "Gouvernance", priority: "Haut" },
                { x: 30, y: 60, label: "Formation", priority: "Bas" }
              ].map((point, i) => (
                <div
                  key={i}
                  className={`absolute transition-all duration-500 ${
                    activeIndex === i % 3 ? 'scale-125 z-10' : 'scale-100'
                  }`}
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                    point.priority === "Haut" ? 'bg-[#3F2F8D] border-white' :
                    point.priority === "Moyen" ? 'bg-[#beb2ff] border-white' :
                    'bg-gray-300 border-white'
                  } ${activeIndex === i % 3 ? 'ring-2 ring-[#83F0C8]' : ''}`}></div>
                  {activeIndex === i % 3 && (
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#3F2F8D] text-white text-xs px-2 py-1 rounded shadow-lg">
                      {point.label}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Labels axes */}
              <div className="absolute -bottom-6 left-0 text-xs text-gray-500">Faible</div>
              <div className="absolute -bottom-6 right-0 text-xs text-gray-500">Élevé</div>
              <div className="absolute -left-12 top-0 text-xs text-gray-500 rotate-90 origin-left">Impact</div>
            </div>
          </div>
          
          {/* Liste des enjeux prioritaires */}
          <div className="space-y-2">
            {[
              { name: "Émissions carbone", score: 95, active: activeIndex === 0 },
              { name: "Diversité & Inclusion", score: 78, active: activeIndex === 1 },
              { name: "Gouvernance", score: 88, active: activeIndex === 2 }
            ].map((enjeu, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border transition-all ${
                enjeu.active ? 'border-[#3F2F8D] shadow-sm' : 'border-gray-200'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-gray-700">{enjeu.name}</span>
                  <span className="text-xs font-bold text-[#3F2F8D]">{enjeu.score}</span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full">
                  <div 
                    className="h-1.5 bg-gradient-to-r from-[#3F2F8D] to-[#beb2ff] rounded-full transition-all duration-1000"
                    style={{ width: `${enjeu.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "kpis") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#83F0C8]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          {/* Header avec indicateur live */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-semibold text-gray-700">KPIs en temps réel</div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#83F0C8] animate-pulse"></div>
              <span className="text-xs text-[#83F0C8] font-semibold">Live</span>
            </div>
          </div>
          
          {/* KPIs Grid amélioré */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { label: "Taux diversité", value: "42%", trend: "+5%", color: "#83F0C8", icon: Users, progress: 42, target: 50, active: activeIndex === 0 },
              { label: "Émissions", value: "-15%", trend: "↘", color: "#beb2ff", icon: TrendingDown, progress: 75, target: 100, active: activeIndex === 1 },
              { label: "Formation", value: "89%", trend: "+12%", color: "#3F2F8D", icon: Activity, progress: 89, target: 100, active: activeIndex === 2 },
              { label: "Satisfaction", value: "4.2/5", trend: "→", color: "#83F0C8", icon: Target, progress: 84, target: 100, active: false }
            ].map((kpi, i) => (
              <div 
                key={i} 
                className={`p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 transition-all duration-300 shadow-sm hover:shadow-md ${
                  kpi.active ? 'border-[#83F0C8] scale-105 shadow-lg' : 'border-gray-200 hover:border-[#83F0C8]/30'
                }`}>
                {/* Icon et badge de tendance */}
                <div className="flex items-center justify-between mb-2">
                  <kpi.icon className="w-4 h-4" style={{ color: kpi.color }} />
                  <div className={`text-xs font-semibold px-2 py-0.5 rounded ${
                    kpi.trend.includes('+') ? 'bg-[#83F0C8]/20 text-[#83F0C8]' :
                    kpi.trend.includes('-') ? 'bg-[#beb2ff]/20 text-[#beb2ff]' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {kpi.trend}
                  </div>
                </div>
                <div className="text-xs text-gray-600 mb-2">{kpi.label}</div>
                
                {/* Valeur principale */}
                <div className="text-2xl font-bold mb-2" style={{ color: kpi.color }}>
                  {kpi.value}
                </div>
                
                {/* Barre de progression avec target */}
                <div className="relative mb-1">
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-2 rounded-full transition-all duration-1000 shadow-sm"
                      style={{ width: `${kpi.progress}%`, backgroundColor: kpi.color }}
                    ></div>
                  </div>
                  {kpi.target && (
                    <div 
                      className="absolute top-0 h-2 w-0.5 bg-gray-400 opacity-50"
                      style={{ left: `${kpi.target}%` }}
                    ></div>
                  )}
                </div>
                
                {/* Métrique secondaire */}
                <div className="text-xs text-gray-500">
                  Objectif: {kpi.target}%
                </div>
              </div>
            ))}
          </div>
          
          {/* Graphique de tendance amélioré */}
          <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-semibold text-gray-700">Évolution trimestrielle</div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#83F0C8]"></div>
                  <span className="text-xs text-gray-500">Réel</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#beb2ff] border border-dashed"></div>
                  <span className="text-xs text-gray-500">Objectif</span>
                </div>
              </div>
            </div>
            <div className="h-24 relative">
              <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                {/* Grille */}
                {[0, 15, 30, 45, 60].map((y) => (
                  <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#e5e7eb" strokeWidth="0.5" />
                ))}
                {/* Ligne objectif (pointillée) */}
                <polyline
                  points="10,45 30,42 50,40 70,38 90,36 110,34 130,32"
                  fill="none"
                  stroke="#beb2ff"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="transition-all duration-1000"
                />
                {/* Ligne réelle */}
                <polyline
                  points="10,50 30,45 50,35 70,40 90,30 110,25 130,20"
                  fill="none"
                  stroke="#83F0C8"
                  strokeWidth="2.5"
                  className="transition-all duration-1000"
                />
                {/* Zone sous la courbe */}
                <polygon
                  points="10,50 30,45 50,35 70,40 90,30 110,25 130,20 130,60 10,60"
                  fill="url(#gradient-kpi)"
                  opacity="0.15"
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradient-kpi" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#83F0C8" />
                    <stop offset="100%" stopColor="#83F0C8" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Points */}
                {[10, 30, 50, 70, 90, 110, 130].map((x, i) => (
                  <circle
                    key={i}
                    cx={x}
                    cy={50 - i * 4}
                    r="3"
                    fill="#83F0C8"
                    stroke="white"
                    strokeWidth="1.5"
                    className="transition-all duration-1000"
                  />
                ))}
              </svg>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400 px-1">
                <span>T1</span>
                <span>T2</span>
                <span>T3</span>
                <span>T4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "actions") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#beb2ff]/5 to-[#83F0C8]/5 rounded-xl p-6 border border-[#beb2ff]/20 h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-semibold text-gray-700">Plans d'actions</div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#83F0C8]"></div>
              <span className="text-xs text-[#83F0C8] font-semibold">3 actifs</span>
            </div>
          </div>
          
          {/* Plans d'actions améliorés */}
          <div className="space-y-3 mb-4">
            {[
              { name: "Réduction émissions", owner: "J. Martin", progress: 75, status: "En cours", impact: "-15%", deadline: "15/03", active: activeIndex === 0 },
              { name: "Formation diversité", owner: "M. Dupont", progress: 45, status: "En cours", impact: "+8%", deadline: "28/02", active: activeIndex === 1 },
              { name: "Audit énergétique", owner: "S. Bernard", progress: 90, status: "Bientôt", impact: "-12%", deadline: "10/03", active: activeIndex === 2 }
            ].map((action, i) => (
              <div
                key={i}
                className={`p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 transition-all duration-300 shadow-sm hover:shadow-md ${
                  action.active ? 'border-[#beb2ff] shadow-lg scale-105' : 'border-gray-200 hover:border-[#beb2ff]/30'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckSquare className="w-4 h-4" style={{ color: action.active ? "#beb2ff" : "#gray" }} />
                      <div className="text-sm font-bold text-gray-700">{action.name}</div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <span>👤 {action.owner}</span>
                      <span>📅 {action.deadline}</span>
                    </div>
                  </div>
                  <div className={`text-xs px-2.5 py-1 rounded-full font-semibold shadow-sm ${
                    action.status === "En cours" ? 'bg-[#83F0C8]/20 text-[#83F0C8] border border-[#83F0C8]/30' : 
                    'bg-[#beb2ff]/20 text-[#beb2ff] border border-[#beb2ff]/30'
                  }`}>
                    {action.status}
                  </div>
                </div>
                
                {/* Impact */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-600">Impact estimé:</span>
                  <span className="text-xs font-bold text-[#83F0C8]">{action.impact}</span>
                </div>
                
                {/* Barre de progression améliorée */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-500">Avancement</span>
                    <span className="text-xs font-bold text-[#3F2F8D]">{action.progress}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
                    <div 
                      className="h-3 bg-gradient-to-r from-[#beb2ff] via-[#83F0C8] to-[#beb2ff] rounded-full transition-all duration-1000 shadow-sm relative"
                      style={{ width: `${action.progress}%` }}
                    >
                      {/* Effet de brillance */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    </div>
                  </div>
                  {/* Jalons */}
                  <div className="flex justify-between mt-1">
                    {[0, 25, 50, 75, 100].map((milestone) => (
                      <div key={milestone} className="flex flex-col items-center">
                        <div className={`w-1 h-1 rounded-full ${action.progress >= milestone ? 'bg-[#83F0C8]' : 'bg-gray-300'}`}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Timeline améliorée */}
          <div className="bg-white rounded-lg p-4 border-2 border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-semibold text-gray-700">Prochaines échéances</div>
              <div className="w-2 h-2 rounded-full bg-[#beb2ff] animate-pulse"></div>
            </div>
            <div className="space-y-2">
              {[
                { date: "15/02", task: "Revue trimestrielle", priority: "Haute", active: activeIndex === 0 },
                { date: "28/02", task: "Rapport intermédiaire", priority: "Moyenne", active: activeIndex === 1 },
                { date: "10/03", task: "Audit énergétique", priority: "Haute", active: activeIndex === 2 }
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 p-2.5 rounded-lg border transition-all ${
                  item.active ? 'bg-[#beb2ff]/10 border-[#beb2ff] shadow-sm' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                }`}>
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full border-2 ${
                      item.active ? 'bg-[#beb2ff] border-[#beb2ff]' : 'bg-white border-gray-300'
                    }`}></div>
                    {i < 2 && (
                      <div className={`w-0.5 h-6 mt-1 ${item.active ? 'bg-[#beb2ff]' : 'bg-gray-200'}`}></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-gray-700">{item.date}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                        item.priority === "Haute" ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {item.priority}
                      </span>
                    </div>
                    <span className="text-xs text-gray-600">{item.task}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "dashboards") {
    const roleData = [
      { enjeux: 12, actions: 8, kpis: 45, tendance: "+5%", alerts: 2 },
      { enjeux: 24, actions: 18, kpis: 67, tendance: "+12%", alerts: 5 },
      { enjeux: 8, actions: 5, kpis: 23, tendance: "+3%", alerts: 1 },
      { enjeux: 15, actions: 12, kpis: 34, tendance: "+8%", alerts: 3 }
    ];
    const currentData = roleData[activeIndex];
    
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#3F2F8D]/5 to-[#83F0C8]/5 rounded-xl p-6 border border-[#3F2F8D]/20 h-full">
          {/* Sélecteur de rôle amélioré */}
          <div className="flex gap-2 mb-4">
            {["COMEX", "RSE", "DAF", "RH"].map((role, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`flex-1 p-2.5 rounded-lg text-center text-xs font-semibold transition-all duration-300 ${
                  activeIndex === i
                    ? 'bg-[#3F2F8D] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#3F2F8D]/30 hover:bg-gray-50'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
          
          {/* Dashboard complet selon le rôle */}
          <div className="bg-white rounded-xl p-4 border-2 border-gray-200 shadow-lg">
            {/* Header avec titre et badge */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
              <div>
                <div className="text-sm font-bold text-[#344054]">
                  Vue {["COMEX", "RSE", "DAF", "RH"][activeIndex]}
                </div>
                <div className="text-xs text-gray-500">Mise à jour il y a 5 min</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#83F0C8] animate-pulse"></div>
                <span className="text-xs font-semibold text-[#83F0C8]">En ligne</span>
              </div>
            </div>
            
            {/* KPIs Grid amélioré */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { label: "Enjeux", value: currentData.enjeux, icon: Target, color: "#3F2F8D", trend: "+2" },
                { label: "Actions", value: currentData.actions, icon: CheckSquare, color: "#83F0C8", trend: "+1" },
                { label: "KPIs", value: currentData.kpis, icon: BarChart3, color: "#beb2ff", trend: currentData.tendance }
              ].map((kpi, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-3 border border-gray-200 hover:border-[#3F2F8D]/30 transition-all shadow-sm hover:shadow-md">
                  <div className="flex items-center justify-between mb-1">
                    <kpi.icon className="w-4 h-4" style={{ color: kpi.color }} />
                    <span className="text-xs font-semibold text-[#83F0C8]">{kpi.trend}</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-1">{kpi.label}</div>
                  <div className="text-xl font-bold" style={{ color: kpi.color }}>{kpi.value}</div>
                </div>
              ))}
            </div>
            
            {/* Graphique en ligne temporelle amélioré */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-3 border border-gray-200 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-700">Évolution trimestrielle</span>
                <span className="text-xs text-gray-500">Q1-Q4 2024</span>
              </div>
              <div className="h-24 relative">
                <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                  {/* Grille */}
                  {[0, 20, 40, 60, 80].map((y) => (
                    <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#e5e7eb" strokeWidth="0.5" />
                  ))}
                  {/* Ligne de tendance */}
                  <polyline
                    points="10,60 40,55 70,50 100,45 130,40 160,35 190,30"
                    fill="none"
                    stroke="#3F2F8D"
                    strokeWidth="2.5"
                    className="transition-all duration-1000"
                  />
                  {/* Points sur la ligne */}
                  {[
                    { x: 10, y: 60 },
                    { x: 40, y: 55 },
                    { x: 70, y: 50 },
                    { x: 100, y: 45 },
                    { x: 130, y: 40 },
                    { x: 160, y: 35 },
                    { x: 190, y: 30 }
                  ].map((point, i) => (
                    <circle
                      key={i}
                      cx={point.x}
                      cy={point.y}
                      r="3"
                      fill="#3F2F8D"
                      className="transition-all duration-1000"
                    />
                  ))}
                  {/* Zone sous la courbe */}
                  <polygon
                    points="10,60 40,55 70,50 100,45 130,40 160,35 190,30 190,80 10,80"
                    fill="url(#gradient-dash)"
                    opacity="0.2"
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="gradient-dash" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3F2F8D" />
                      <stop offset="100%" stopColor="#83F0C8" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400">
                  <span>Q1</span>
                  <span>Q2</span>
                  <span>Q3</span>
                  <span>Q4</span>
                </div>
              </div>
            </div>
            
            {/* Graphique en barres amélioré */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-3 border border-gray-200 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Répartition par domaine</div>
              <div className="space-y-2">
                {[
                  { label: "Environnement", value: 45, color: "#83F0C8" },
                  { label: "Social", value: 32, color: "#beb2ff" },
                  { label: "Gouvernance", value: 23, color: "#3F2F8D" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-16 text-xs text-gray-600">{item.label}</div>
                    <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-4 rounded-full transition-all duration-1000 shadow-sm"
                        style={{ width: `${item.value}%`, backgroundColor: item.color }}
                      ></div>
                    </div>
                    <div className="w-10 text-xs font-bold text-right" style={{ color: item.color }}>
                      {item.value}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Alertes améliorées */}
            <div className="bg-white rounded-lg p-3 border-2 border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-semibold text-gray-700">Alertes actives</div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-xs font-bold text-red-500">{currentData.alerts}</span>
                </div>
              </div>
              <div className="space-y-1.5">
                {[
                  { type: "Urgent", message: "Action en retard", time: "2h", active: activeIndex === 0 },
                  { type: "Info", message: "Nouvelle donnée disponible", time: "5h", active: activeIndex === 1 }
                ].map((alert, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-2 rounded-lg border transition-all ${
                      alert.active
                        ? 'bg-red-50 border-red-200 shadow-sm'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          alert.type === "Urgent" ? 'bg-red-500 animate-pulse' : 'bg-blue-500'
                        }`}
                      ></div>
                      <span className="text-xs font-medium text-gray-700">{alert.message}</span>
                    </div>
                    <span className="text-xs text-gray-400">{alert.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "risks") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#3F2F8D]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#3F2F8D]/20 h-full">
          {/* Matrice de risques */}
          <div className="mb-4">
            <div className="text-xs font-semibold text-gray-600 mb-3">Cartographie des risques</div>
            <div className="relative h-40 bg-white rounded-lg p-4 border border-gray-200">
              {/* Quadrants */}
              <div className="absolute top-0 left-0 w-1/2 h-1/2 border-r border-b border-red-200"></div>
              <div className="absolute top-0 right-0 w-1/2 h-1/2 border-b border-orange-200"></div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 border-r border-yellow-200"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-green-200"></div>
              
              {/* Risques */}
              {[
                { x: 80, y: 20, label: "Réglementaire", severity: "Haut", active: activeIndex === 0 },
                { x: 60, y: 35, label: "Climatique", severity: "Moyen", active: activeIndex === 1 },
                { x: 30, y: 70, label: "Réputation", severity: "Bas", active: activeIndex === 2 }
              ].map((risk, i) => (
                <div
                  key={i}
                  className={`absolute transition-all duration-500 ${
                    risk.active ? 'scale-125 z-10' : 'scale-100'
                  }`}
                  style={{
                    left: `${risk.x}%`,
                    top: `${risk.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className={`w-5 h-5 rounded-full border-2 ${
                    risk.severity === "Haut" ? 'bg-red-500 border-white' :
                    risk.severity === "Moyen" ? 'bg-orange-400 border-white' :
                    'bg-yellow-400 border-white'
                  } ${risk.active ? 'ring-2 ring-[#83F0C8] animate-pulse' : ''}`}></div>
                  {risk.active && (
                    <div className="absolute top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#3F2F8D] text-white text-xs px-2 py-1 rounded shadow-lg">
                      {risk.label}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Liste des risques */}
          <div className="space-y-2">
            {[
              { name: "Risque réglementaire", level: "Élevé", mitigation: "En cours", active: activeIndex === 0 },
              { name: "Risque climatique", level: "Moyen", mitigation: "Planifié", active: activeIndex === 1 },
              { name: "Risque réputation", level: "Faible", mitigation: "Surveillé", active: activeIndex === 2 }
            ].map((risk, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${
                risk.active ? 'border-[#3F2F8D] shadow-sm' : 'border-gray-200'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-gray-700">{risk.name}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                    risk.level === "Élevé" ? 'bg-red-100 text-red-700' :
                    risk.level === "Moyen" ? 'bg-orange-100 text-orange-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {risk.level}
                  </span>
                </div>
                <div className="text-xs text-gray-500">Mitigation: {risk.mitigation}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Types pour ESG & Carbone Data Hub
  if (type === "collecte") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#83F0C8]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Sources de données</div>
          <div className="space-y-3 mb-4">
            {["ERP", "Finance", "SIRH", "Métier"].map((source, i) => (
              <div key={i} className={`p-3 bg-white rounded-lg border-2 transition-all ${
                activeIndex === i ? 'border-[#83F0C8] shadow-md' : 'border-gray-200'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">{source}</span>
                  <div className="w-3 h-3 rounded-full bg-[#83F0C8] animate-pulse"></div>
                </div>
                <div className="mt-2 h-1.5 bg-gray-100 rounded-full">
                  <div className="h-1.5 bg-[#83F0C8] rounded-full" style={{ width: `${75 + i * 5}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Données collectées</div>
            <div className="text-2xl font-bold text-[#83F0C8]">12.5K</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "integrations") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#83F0C8]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Connecteurs actifs</div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {["ERP", "Compta", "Achats", "IT"].map((connector, i) => (
              <div key={i} className={`p-3 bg-white rounded-lg border-2 transition-all ${
                activeIndex === i ? 'border-[#beb2ff] shadow-md scale-105' : 'border-gray-200'
              }`}>
                <div className="text-xs font-semibold text-gray-700 mb-1">{connector}</div>
                <div className="text-xs text-[#83F0C8]">✓ Connecté</div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Synchronisation</div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-[#83F0C8] rounded-full" style={{ width: "95%" }}></div>
              </div>
              <span className="text-xs font-bold text-[#83F0C8]">95%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "controles") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#83F0C8]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Règles de validation</div>
          <div className="space-y-2 mb-4">
            {[
              { rule: "Plage de valeurs", status: "✓", color: "#83F0C8", active: activeIndex === 0 },
              { rule: "Cohérence temporelle", status: "✓", color: "#83F0C8", active: activeIndex === 1 },
              { rule: "Complétude", status: "⚠", color: "#beb2ff", active: activeIndex === 2 },
              { rule: "Référentiel", status: "✓", color: "#83F0C8", active: false }
            ].map((item, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${
                item.active ? 'border-[#83F0C8] shadow-sm' : 'border-gray-200'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-700">{item.rule}</span>
                  <span className="text-xs font-semibold" style={{ color: item.color }}>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Taux de validation</div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-gradient-to-r from-[#83F0C8] to-[#beb2ff] rounded-full" style={{ width: "92%" }}></div>
              </div>
              <span className="text-xs font-bold text-[#83F0C8]">92%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "audit") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#83F0C8]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Audit-trail récent</div>
          <div className="space-y-2 mb-4">
            {[
              { action: "Modification", user: "J. Dupont", time: "Il y a 2h", active: activeIndex === 0 },
              { action: "Validation", user: "M. Martin", time: "Il y a 1j", active: activeIndex === 1 },
              { action: "Export", user: "Système", time: "Il y a 3j", active: activeIndex === 2 }
            ].map((item, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border transition-all ${
                item.active ? 'border-[#83F0C8] shadow-sm' : 'border-gray-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-gray-700">{item.action}</div>
                    <div className="text-xs text-gray-500">par {item.user}</div>
                  </div>
                  <span className="text-xs text-gray-400">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Traçabilité</div>
            <div className="text-2xl font-bold text-[#83F0C8]">100%</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "perimetres") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#83F0C8]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Périmètres actifs</div>
          <div className="space-y-2 mb-4">
            {["Scope 1", "Scope 2", "Scope 3", "Chaîne valeur"].map((perim, i) => (
              <div key={i} className={`p-3 bg-white rounded-lg border-2 transition-all ${
                activeIndex === i ? 'border-[#83F0C8] shadow-md' : 'border-gray-200'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">{perim}</span>
                  <div className="w-3 h-3 rounded-full bg-[#83F0C8]"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Entités couvertes</div>
            <div className="text-2xl font-bold text-[#83F0C8]">12</div>
          </div>
        </div>
      </div>
    );
  }

  // Types pour Reporting & Conformité
  if (type === "templates") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#beb2ff]/5 to-[#83F0C8]/5 rounded-xl p-6 border border-[#beb2ff]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Templates disponibles</div>
          <div className="space-y-2 mb-4">
            {[
              { name: "CSRD", sections: 12, status: "Prêt", color: "#83F0C8", active: activeIndex === 0 },
              { name: "ESRS", sections: 10, status: "Prêt", color: "#beb2ff", active: activeIndex === 1 },
              { name: "Taxonomie", sections: 8, status: "Prêt", color: "#3F2F8D", active: activeIndex === 2 },
              { name: "GRI", sections: 15, status: "Disponible", color: "#83F0C8", active: false }
            ].map((template, i) => (
              <div key={i} className={`p-3 bg-white rounded-lg border-2 transition-all ${
                template.active ? 'border-[#beb2ff] shadow-md' : 'border-gray-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${template.color}20` }}>
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: template.color }}></div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-700">{template.name}</div>
                      <div className="text-xs text-gray-500">{template.sections} sections</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded" style={{ 
                    backgroundColor: `${template.color}20`,
                    color: template.color
                  }}>
                    {template.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "exigences") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#beb2ff]/5 to-[#83F0C8]/5 rounded-xl p-6 border border-[#beb2ff]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Suivi des exigences ESRS</div>
          <div className="space-y-2 mb-4">
            {[
              { requirement: "E1 - Changement climatique", progress: 100, active: activeIndex === 0 },
              { requirement: "E2 - Pollution", progress: 85, active: activeIndex === 1 },
              { requirement: "E3 - Eau", progress: 90, active: activeIndex === 2 },
              { requirement: "S1 - Travailleurs", progress: 75, active: false }
            ].map((req, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${
                req.active ? 'border-[#beb2ff] shadow-sm' : 'border-gray-200'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-gray-700">{req.requirement}</span>
                  <span className="text-xs font-bold text-[#beb2ff]">{req.progress}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full">
                  <div className="h-1.5 bg-gradient-to-r from-[#beb2ff] to-[#83F0C8] rounded-full" style={{ width: `${req.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "justification") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#beb2ff]/5 to-[#83F0C8]/5 rounded-xl p-6 border border-[#beb2ff]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Justifications documentées</div>
          <div className="space-y-2 mb-4">
            {[
              { doc: "Preuve calcul émissions", status: "Validé", active: activeIndex === 0 },
              { doc: "Justification méthodologie", status: "Validé", active: activeIndex === 1 },
              { doc: "Source données Scope 3", status: "En attente", active: activeIndex === 2 }
            ].map((item, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${
                item.active ? 'border-[#beb2ff] shadow-sm' : 'border-gray-200'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-700">{item.doc}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                    item.status === "Validé" ? 'bg-[#83F0C8]/20 text-[#83F0C8]' : 'bg-[#beb2ff]/20 text-[#beb2ff]'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Documentation</div>
            <div className="text-2xl font-bold text-[#beb2ff]">98%</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "versioning") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#beb2ff]/5 to-[#83F0C8]/5 rounded-xl p-6 border border-[#beb2ff]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Versions du rapport</div>
          <div className="space-y-2 mb-4">
            {[
              { version: "v2.1", date: "15/01/2024", status: "Publié", active: activeIndex === 0 },
              { version: "v2.0", date: "10/12/2023", status: "Archivé", active: activeIndex === 1 },
              { version: "v1.9", date: "20/11/2023", status: "Archivé", active: activeIndex === 2 }
            ].map((v, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${
                v.active ? 'border-[#beb2ff] shadow-sm' : 'border-gray-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-gray-700">{v.version}</div>
                    <div className="text-xs text-gray-500">{v.date}</div>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                    v.status === "Publié" ? 'bg-[#83F0C8]/20 text-[#83F0C8]' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {v.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "exports") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#beb2ff]/5 to-[#83F0C8]/5 rounded-xl p-6 border border-[#beb2ff]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Formats d'export</div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {["PDF", "Excel", "XML", "JSON"].map((format, i) => (
              <div key={i} className={`p-3 bg-white rounded-lg border-2 transition-all ${
                activeIndex === i ? 'border-[#beb2ff] shadow-md scale-105' : 'border-gray-200'
              }`}>
                <div className="text-sm font-semibold text-gray-700 mb-1">{format}</div>
                <div className="text-xs text-[#83F0C8]">✓ Disponible</div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Exports ce mois</div>
            <div className="text-2xl font-bold text-[#beb2ff]">24</div>
          </div>
        </div>
      </div>
    );
  }

  // Types pour Intégrations & Sécurité
  if (type === "api") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#3F2F8D]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#3F2F8D]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Endpoints API</div>
          <div className="space-y-2 mb-4">
            {[
              { method: "GET", endpoint: "/api/v1/data", status: "200 OK", active: activeIndex === 0 },
              { method: "POST", endpoint: "/api/v1/validate", status: "201 Created", active: activeIndex === 1 },
              { method: "POST", endpoint: "/graphql", status: "200 OK", active: activeIndex === 2 }
            ].map((api, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all font-mono text-xs ${
                api.active ? 'border-[#3F2F8D] shadow-sm' : 'border-gray-200'
              }`}>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded font-semibold ${
                    api.method === "GET" ? "bg-[#83F0C8]/20 text-[#83F0C8]" :
                    "bg-[#beb2ff]/20 text-[#beb2ff]"
                  }`}>
                    {api.method}
                  </span>
                  <span className="flex-1 text-gray-700">{api.endpoint}</span>
                  <span className="text-gray-500">{api.status}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Rate limit</div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-gradient-to-r from-[#3F2F8D] to-[#beb2ff] rounded-full" style={{ width: "75%" }}></div>
              </div>
              <span className="text-xs font-bold text-[#3F2F8D]">750/1000</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "sso") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#3F2F8D]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#3F2F8D]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Méthodes d'authentification</div>
          <div className="space-y-2 mb-4">
            {["SAML 2.0", "OAuth 2.0", "OpenID Connect"].map((method, i) => (
              <div key={i} className={`p-3 bg-white rounded-lg border-2 transition-all ${
                activeIndex === i ? 'border-[#3F2F8D] shadow-md' : 'border-gray-200'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">{method}</span>
                  <div className="w-3 h-3 rounded-full bg-[#83F0C8]"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Utilisateurs connectés</div>
            <div className="text-2xl font-bold text-[#3F2F8D]">156</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "hebergement") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#3F2F8D]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#3F2F8D]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Certifications</div>
          <div className="grid grid-cols-2 gap-3">
            {["ISO 27001", "RGPD", "ISO 9001", "Uptime"].map((cert, i) => (
              <div key={i} className={`p-3 bg-white rounded-lg border-2 transition-all ${
                activeIndex === i ? 'border-[#3F2F8D] shadow-md scale-105' : 'border-gray-200'
              }`}>
                {i === 3 ? (
                  <>
                    <div className="text-xs text-gray-500 mb-1">{cert}</div>
                    <div className="text-lg font-bold text-[#3F2F8D]">99.9%</div>
                  </>
                ) : (
                  <>
                    <div className="text-xs font-semibold text-gray-700 mb-1">{cert}</div>
                    <div className="text-xs text-[#83F0C8]">✓ Certifié</div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "gouvernance") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#3F2F8D]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#3F2F8D]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Journalisation</div>
          <div className="space-y-2 mb-4">
            {[
              { action: "Connexion", user: "admin@ekyo.fr", time: "Il y a 5min", active: activeIndex === 0 },
              { action: "Modification", user: "user@ekyo.fr", time: "Il y a 1h", active: activeIndex === 1 },
              { action: "Export", user: "admin@ekyo.fr", time: "Il y a 2h", active: activeIndex === 2 }
            ].map((log, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${
                log.active ? 'border-[#3F2F8D] shadow-sm' : 'border-gray-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-gray-700">{log.action}</div>
                    <div className="text-xs text-gray-500">{log.user}</div>
                  </div>
                  <span className="text-xs text-gray-400">{log.time}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Traçabilité</div>
            <div className="text-2xl font-bold text-[#3F2F8D]">100%</div>
          </div>
        </div>
      </div>
    );
  }

  // Visualisations pour Solutions CSRD
  if (type === "double_materialite") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#beb2ff]/5 to-[#83F0C8]/5 rounded-xl p-6 border border-[#beb2ff]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Matrice de matérialité</div>
          <div className="relative h-48 bg-white rounded-lg p-4 border border-gray-200 mb-4">
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300"></div>
            <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gray-300"></div>
            {[
              { x: 75, y: 80, label: "Émissions", active: activeIndex === 0 },
              { x: 60, y: 40, label: "Diversité", active: activeIndex === 1 },
              { x: 85, y: 25, label: "Gouvernance", active: activeIndex === 2 }
            ].map((point, i) => (
              <div key={i} className={`absolute transition-all duration-500 ${point.active ? 'scale-125 z-10' : 'scale-100'}`} style={{ left: `${point.x}%`, top: `${point.y}%`, transform: 'translate(-50%, -50%)' }}>
                <div className={`w-4 h-4 rounded-full border-2 bg-[#beb2ff] border-white ${point.active ? 'ring-2 ring-[#83F0C8]' : ''}`}></div>
                {point.active && <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#beb2ff] text-white text-xs px-2 py-1 rounded shadow-lg">{point.label}</div>}
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {[["Enjeux identifiés", "12"], ["Priorisés", "8"], ["En cours", "4"]].map((item, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${activeIndex === i ? 'border-[#beb2ff] shadow-sm' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-700">{item[0]}</span>
                  <span className="text-xs font-bold text-[#beb2ff]">{item[1]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "collecte_consolidation") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#beb2ff]/5 to-[#83F0C8]/5 rounded-xl p-6 border border-[#beb2ff]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Consolidation multi-entités</div>
          <div className="space-y-2 mb-4">
            {["Entité A", "Entité B", "Entité C"].map((ent, i) => (
              <div key={i} className={`p-3 bg-white rounded-lg border-2 transition-all ${activeIndex === i ? 'border-[#beb2ff] shadow-md' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">{ent}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#83F0C8]"></div>
                    <span className="text-xs text-[#83F0C8] font-semibold">✓ Synchronisé</span>
                  </div>
                </div>
                <div className="mt-2 h-1.5 bg-gray-100 rounded-full">
                  <div className="h-1.5 bg-[#beb2ff] rounded-full" style={{ width: `${80 + i * 5}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Données consolidées</div>
            <div className="text-2xl font-bold text-[#beb2ff]">24.5K</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "traceabilite_preuves") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#beb2ff]/5 to-[#83F0C8]/5 rounded-xl p-6 border border-[#beb2ff]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Audit-trail en temps réel</div>
          <div className="space-y-2 mb-4">
            {[
              { action: "Modification", user: "J. Dupont", time: "Il y a 2h", active: activeIndex === 0 },
              { action: "Validation", user: "M. Martin", time: "Il y a 1j", active: activeIndex === 1 },
              { action: "Export PDF", user: "Système", time: "Il y a 3j", active: activeIndex === 2 }
            ].map((item, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${item.active ? 'border-[#beb2ff] shadow-sm' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-gray-700">{item.action}</div>
                    <div className="text-xs text-gray-500">par {item.user}</div>
                  </div>
                  <span className="text-xs text-gray-400">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Traçabilité</div>
            <div className="text-2xl font-bold text-[#beb2ff]">100%</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "suivi_exigences_esrs") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#beb2ff]/5 to-[#83F0C8]/5 rounded-xl p-6 border border-[#beb2ff]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Exigences ESRS</div>
          <div className="space-y-2 mb-4">
            {[
              { req: "E1 - Changement climatique", progress: 100, active: activeIndex === 0 },
              { req: "E2 - Pollution", progress: 85, active: activeIndex === 1 },
              { req: "E3 - Eau", progress: 90, active: activeIndex === 2 },
              { req: "S1 - Travailleurs", progress: 75, active: false }
            ].map((item, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${item.active ? 'border-[#beb2ff] shadow-sm' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-gray-700">{item.req}</span>
                  <span className="text-xs font-bold text-[#beb2ff]">{item.progress}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full">
                  <div className="h-1.5 bg-gradient-to-r from-[#beb2ff] to-[#83F0C8] rounded-full" style={{ width: `${item.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "versioning_rapport") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#beb2ff]/5 to-[#83F0C8]/5 rounded-xl p-6 border border-[#beb2ff]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Versions du rapport</div>
          <div className="space-y-2 mb-4">
            {[
              { version: "v2.1", date: "15/01/2024", status: "Publié", active: activeIndex === 0 },
              { version: "v2.0", date: "10/12/2023", status: "Archivé", active: activeIndex === 1 },
              { version: "v1.9", date: "20/11/2023", status: "Archivé", active: activeIndex === 2 }
            ].map((v, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${v.active ? 'border-[#beb2ff] shadow-sm' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-gray-700">{v.version}</div>
                    <div className="text-xs text-gray-500">{v.date}</div>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${v.status === "Publié" ? 'bg-[#83F0C8]/20 text-[#83F0C8]' : 'bg-gray-100 text-gray-600'}`}>{v.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Visualisations pour Solutions Climat
  if (type === "calculs_scopes") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#83F0C8]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Répartition par scope</div>
          <div className="space-y-3 mb-4">
            {[
              { scope: "Scope 1", emissions: "2.5K", percentage: 15, color: "#83F0C8", active: activeIndex === 0 },
              { scope: "Scope 2", emissions: "8.2K", percentage: 50, color: "#beb2ff", active: activeIndex === 1 },
              { scope: "Scope 3", emissions: "6.8K", percentage: 35, color: "#3F2F8D", active: activeIndex === 2 }
            ].map((item, i) => (
              <div key={i} className={`transition-all duration-500 ${item.active ? 'scale-105' : 'scale-100'}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${item.active ? 'ring-2 ring-[#83F0C8]' : ''}`} style={{ backgroundColor: item.color }}></div>
                    <span className={`text-sm font-semibold transition-colors ${item.active ? 'text-[#83F0C8]' : 'text-gray-700'}`}>{item.scope}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold" style={{ color: item.color }}>{item.emissions}</span>
                    <span className="text-xs text-gray-500">tCO₂e</span>
                  </div>
                </div>
                <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-4 rounded-full transition-all duration-1000" style={{ width: `${item.percentage}%`, backgroundColor: item.color }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
            <div className="text-xs text-gray-500 mb-1">Total émissions</div>
            <div className="text-2xl font-bold text-[#3F2F8D]">17.5K tCO₂e</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "connexion_fec") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#83F0C8]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Sources connectées</div>
          <div className="space-y-2 mb-4">
            {["FEC", "Factures", "Données activité"].map((source, i) => (
              <div key={i} className={`p-3 bg-white rounded-lg border-2 transition-all ${activeIndex === i ? 'border-[#83F0C8] shadow-md' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">{source}</span>
                  <div className="w-3 h-3 rounded-full bg-[#83F0C8] animate-pulse"></div>
                </div>
                <div className="mt-2 h-1.5 bg-gray-100 rounded-full">
                  <div className="h-1.5 bg-[#83F0C8] rounded-full" style={{ width: `${70 + i * 10}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Données collectées</div>
            <div className="text-2xl font-bold text-[#83F0C8]">8.5K</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "facteurs_emissions") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#83F0C8]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Référentiels disponibles</div>
          <div className="space-y-2 mb-4">
            {["ADEME", "Base Carbone", "GHG Protocol", "IPCC"].map((ref, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${activeIndex === i ? 'border-[#83F0C8] shadow-sm' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-700">{ref}</span>
                  <span className="text-xs text-[#83F0C8] font-semibold">✓ Actif</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Facteurs disponibles</div>
            <div className="text-2xl font-bold text-[#83F0C8]">1,250+</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "trajectoires_climat") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#83F0C8]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Trajectoire de réduction</div>
          <div className="h-32 relative mb-4 bg-white rounded-lg p-3 border border-gray-200">
            <svg className="w-full h-full">
              <polyline points="10,80 40,60 70,50 100,40 130,30 160,25" fill="none" stroke="#83F0C8" strokeWidth="3" className="transition-all duration-1000" />
              <polyline points="10,80 40,70 70,65 100,60 130,55 160,50" fill="none" stroke="#beb2ff" strokeWidth="2" strokeDasharray="4 4" className="transition-all duration-1000" />
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400">
              <span>2024</span><span>2025</span><span>2026</span><span>2027</span><span>2028</span><span>2030</span>
            </div>
          </div>
          <div className="space-y-2">
            {[["SBTi", "Aligné"], ["Net Zero", "2030"], ["Réduction", "-50%"]].map((item, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${activeIndex === i ? 'border-[#83F0C8] shadow-sm' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-700">{item[0]}</span>
                  <span className="text-xs font-bold text-[#83F0C8]">{item[1]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "suivi_plans_reduction") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#83F0C8]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Plans de réduction</div>
          <div className="space-y-2 mb-4">
            {[
              { name: "Efficacité énergétique", progress: 75, impact: "-15%", active: activeIndex === 0 },
              { name: "Transport durable", progress: 45, impact: "-8%", active: activeIndex === 1 },
              { name: "Fournisseurs", progress: 60, impact: "-12%", active: activeIndex === 2 }
            ].map((action, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${action.active ? 'border-[#83F0C8] shadow-sm' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-gray-700">{action.name}</span>
                  <span className="text-xs font-bold text-[#83F0C8]">{action.impact}</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full">
                  <div className="h-1.5 bg-gradient-to-r from-[#83F0C8] to-[#beb2ff] rounded-full" style={{ width: `${action.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "methodologie_pcf") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#83F0C8]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Standards PCF</div>
          <div className="space-y-2 mb-4">
            {["ISO 14067", "PAS 2050", "GHG Protocol"].map((standard, i) => (
              <div key={i} className={`p-3 bg-white rounded-lg border-2 transition-all ${activeIndex === i ? 'border-[#83F0C8] shadow-md' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">{standard}</span>
                  <div className="w-3 h-3 rounded-full bg-[#83F0C8]"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Produits calculés</div>
            <div className="text-2xl font-bold text-[#83F0C8]">45</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "cycle_vie") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#83F0C8]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Cycle de vie</div>
          <div className="space-y-2 mb-4">
            {["Matières premières", "Production", "Transport", "Usage", "Fin de vie"].map((etape, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${activeIndex === i % 3 ? 'border-[#83F0C8] shadow-sm' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-700">{etape}</span>
                  <div className="w-3 h-3 rounded-full bg-[#83F0C8]"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Couverture</div>
            <div className="text-2xl font-bold text-[#83F0C8]">100%</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "lien_donnees_financieres") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#83F0C8]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Sources connectées</div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {["Finance", "Achats", "Production", "Ventes"].map((source, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${activeIndex === i ? 'border-[#83F0C8] shadow-md scale-105' : 'border-gray-200'}`}>
                <div className="text-xs font-semibold text-gray-700 mb-1">{source}</div>
                <div className="text-xs text-[#83F0C8]">✓ Connecté</div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Synchronisation</div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-[#83F0C8] rounded-full" style={{ width: "95%" }}></div>
              </div>
              <span className="text-xs font-bold text-[#83F0C8]">95%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "export_pcf") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#83F0C8]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Formats d'export</div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {["PDF", "Excel", "XML", "JSON"].map((format, i) => (
              <div key={i} className={`p-3 bg-white rounded-lg border-2 transition-all ${activeIndex === i ? 'border-[#83F0C8] shadow-md scale-105' : 'border-gray-200'}`}>
                <div className="text-sm font-semibold text-gray-700 mb-1">{format}</div>
                <div className="text-xs text-[#83F0C8]">✓ Disponible</div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Exports ce mois</div>
            <div className="text-2xl font-bold text-[#83F0C8]">18</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "traceabilite_pcf") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#83F0C8]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#83F0C8]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Justifications documentées</div>
          <div className="space-y-2 mb-4">
            {[
              { doc: "Preuve calcul PCF", status: "Validé", active: activeIndex === 0 },
              { doc: "Source données", status: "Validé", active: activeIndex === 1 },
              { doc: "Méthodologie", status: "Validé", active: activeIndex === 2 }
            ].map((item, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${item.active ? 'border-[#83F0C8] shadow-sm' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-700">{item.doc}</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#83F0C8]/20 text-[#83F0C8]">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Documentation</div>
            <div className="text-2xl font-bold text-[#83F0C8]">100%</div>
          </div>
        </div>
      </div>
    );
  }

  // Visualisations pour Solutions Pilotage ESG
  if (type === "cartographie_enjeux") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#3F2F8D]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#3F2F8D]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Enjeux identifiés</div>
          <div className="relative h-40 bg-white rounded-lg p-4 border border-gray-200 mb-4">
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300"></div>
            <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gray-300"></div>
            {[
              { x: 75, y: 80, label: "Émissions", active: activeIndex === 0 },
              { x: 60, y: 40, label: "Diversité", active: activeIndex === 1 },
              { x: 85, y: 25, label: "Gouvernance", active: activeIndex === 2 }
            ].map((point, i) => (
              <div key={i} className={`absolute transition-all duration-500 ${point.active ? 'scale-125 z-10' : 'scale-100'}`} style={{ left: `${point.x}%`, top: `${point.y}%`, transform: 'translate(-50%, -50%)' }}>
                <div className={`w-4 h-4 rounded-full border-2 bg-[#3F2F8D] border-white ${point.active ? 'ring-2 ring-[#83F0C8]' : ''}`}></div>
                {point.active && <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#3F2F8D] text-white text-xs px-2 py-1 rounded shadow-lg">{point.label}</div>}
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {[["Enjeux", "12"], ["Priorisés", "8"], ["En cours", "4"]].map((item, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${activeIndex === i ? 'border-[#3F2F8D] shadow-sm' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-700">{item[0]}</span>
                  <span className="text-xs font-bold text-[#3F2F8D]">{item[1]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "kpis_esg_climat") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#3F2F8D]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#3F2F8D]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">KPIs en temps réel</div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { label: "Taux diversité", value: "42%", trend: "+5%", color: "#83F0C8", active: activeIndex === 0 },
              { label: "Émissions", value: "-15%", trend: "↘", color: "#beb2ff", active: activeIndex === 1 },
              { label: "Formation", value: "89%", trend: "+12%", color: "#3F2F8D", active: activeIndex === 2 },
              { label: "Satisfaction", value: "4.2/5", trend: "→", color: "#83F0C8", active: false }
            ].map((kpi, i) => (
              <div key={i} className={`p-3 bg-white rounded-lg border-2 transition-all ${kpi.active ? 'border-[#3F2F8D] shadow-md scale-105' : 'border-gray-200'}`}>
                <div className="text-xs text-gray-500 mb-1">{kpi.label}</div>
                <div className="flex items-baseline gap-2">
                  <div className="text-lg font-bold" style={{ color: kpi.color }}>{kpi.value}</div>
                  <div className="text-xs font-semibold text-[#83F0C8]">{kpi.trend}</div>
                </div>
                <div className="h-1 w-full bg-gray-100 rounded-full mt-2">
                  <div className="h-1 rounded-full transition-all duration-1000" style={{ width: `${60 + i * 10}%`, backgroundColor: kpi.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "plans_actions_ownership") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#3F2F8D]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#3F2F8D]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Plans d'actions</div>
          <div className="space-y-2 mb-4">
            {[
              { name: "Réduction émissions", owner: "J. Martin", progress: 75, active: activeIndex === 0 },
              { name: "Formation diversité", owner: "M. Dupont", progress: 45, active: activeIndex === 1 },
              { name: "Audit énergétique", owner: "S. Bernard", progress: 90, active: activeIndex === 2 }
            ].map((action, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${action.active ? 'border-[#3F2F8D] shadow-sm' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-gray-700">{action.name}</div>
                    <div className="text-xs text-gray-500">Responsable: {action.owner}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-[#3F2F8D] to-[#beb2ff] rounded-full" style={{ width: `${action.progress}%` }}></div>
                  </div>
                  <span className="text-xs font-bold text-[#3F2F8D]">{action.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "tableaux_bord_filiales") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#3F2F8D]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#3F2F8D]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Vues par niveau</div>
          <div className="flex gap-2 mb-4">
            {["Direction", "RSE", "DAF", "RH"].map((role, i) => (
              <div key={i} className={`flex-1 p-2 rounded-lg text-center text-xs font-semibold transition-all cursor-pointer ${activeIndex === i ? 'bg-[#3F2F8D] text-white shadow-sm' : 'bg-white text-gray-600 border border-gray-200 hover:border-[#3F2F8D]/30'}`} onClick={() => setActiveIndex(i)}>
                {role}
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-xs font-semibold text-gray-600 mb-3">Vue {["Direction", "RSE", "DAF", "RH"][activeIndex]}</div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {[
                { label: "Enjeux", value: activeIndex === 0 ? "12" : activeIndex === 1 ? "24" : activeIndex === 2 ? "8" : "15" },
                { label: "Actions", value: activeIndex === 0 ? "8" : activeIndex === 1 ? "18" : activeIndex === 2 ? "5" : "12" }
              ].map((kpi, i) => (
                <div key={i} className="p-2 bg-gray-50 rounded border border-gray-200">
                  <div className="text-xs text-gray-500 mb-1">{kpi.label}</div>
                  <div className="text-lg font-bold text-[#3F2F8D]">{kpi.value}</div>
                </div>
              ))}
            </div>
            <div className="h-20 bg-gray-50 rounded border border-gray-200 p-2">
              <div className="flex items-end justify-between h-full gap-1">
                {[65, 75, 68, 82, 78, 85].map((val, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-[#3F2F8D] to-[#beb2ff] rounded-t transition-all duration-500" style={{ height: `${val}%` }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "collaboration_workflows") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#3F2F8D]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#3F2F8D]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Workflows actifs</div>
          <div className="space-y-2 mb-4">
            {[
              { workflow: "Validation données", status: "En cours", users: 3, active: activeIndex === 0 },
              { workflow: "Approbation rapport", status: "En attente", users: 2, active: activeIndex === 1 },
              { workflow: "Revue trimestrielle", status: "Planifié", users: 5, active: activeIndex === 2 }
            ].map((item, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${item.active ? 'border-[#3F2F8D] shadow-sm' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-gray-700">{item.workflow}</div>
                    <div className="text-xs text-gray-500">{item.users} participants</div>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                    item.status === "En cours" ? 'bg-[#83F0C8]/20 text-[#83F0C8]' :
                    item.status === "En attente" ? 'bg-[#beb2ff]/20 text-[#beb2ff]' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Utilisateurs actifs</div>
            <div className="text-2xl font-bold text-[#3F2F8D]">24</div>
          </div>
        </div>
      </div>
    );
  }

  // Visualisations pour Solutions Groupes
  if (type === "cadre_standardise") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#6F5DE9]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#6F5DE9]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Référentiel commun</div>
          <div className="space-y-2 mb-4">
            {["Standards", "Processus", "Métriques", "Gouvernance"].map((item, i) => (
              <div key={i} className={`p-3 bg-white rounded-lg border-2 transition-all ${activeIndex === i ? 'border-[#6F5DE9] shadow-md' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">{item}</span>
                  <div className="w-3 h-3 rounded-full bg-[#83F0C8]"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Entités couvertes</div>
            <div className="text-2xl font-bold text-[#6F5DE9]">12</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "collecte_consolidation_groupe") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#6F5DE9]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#6F5DE9]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Synchronisation</div>
          <div className="space-y-2 mb-4">
            {["Siège", "Entité A", "Entité B", "Entité C"].map((ent, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${activeIndex === i ? 'border-[#6F5DE9] shadow-sm' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-gray-700">{ent}</span>
                  <div className="w-3 h-3 rounded-full bg-[#83F0C8]"></div>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full">
                  <div className="h-1.5 bg-gradient-to-r from-[#6F5DE9] to-[#beb2ff] rounded-full" style={{ width: `${75 + i * 8}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Données consolidées</div>
            <div className="text-2xl font-bold text-[#6F5DE9]">29.7K</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "tableaux_bord_multi_niveaux") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#6F5DE9]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#6F5DE9]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Niveaux de pilotage</div>
          <div className="space-y-2 mb-4">
            {["Entité", "BU", "Région", "Groupe"].map((level, i) => (
              <div key={i} className={`p-3 bg-white rounded-lg border-2 transition-all ${activeIndex === i ? 'border-[#6F5DE9] shadow-md' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#83F0C8]"></div>
                    <span className="text-sm font-semibold text-gray-700">{level}</span>
                  </div>
                  <BarChart3 className="w-5 h-5 text-[#6F5DE9]" />
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Tableaux de bord</div>
            <div className="text-2xl font-bold text-[#6F5DE9]">48</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "roles_droits_avances") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#6F5DE9]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#6F5DE9]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Rôles configurés</div>
          <div className="space-y-2 mb-4">
            {["Admin Groupe", "Responsable Entité", "Contributeur", "Lecteur"].map((role, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${activeIndex === i ? 'border-[#6F5DE9] shadow-sm' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-700">{role}</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#83F0C8]"></div>
                    <span className="text-xs text-[#83F0C8] font-semibold">Actif</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Utilisateurs</div>
            <div className="text-2xl font-bold text-[#6F5DE9]">156</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "traceabilite_audit") {
    return (
      <div className="relative h-full">
        <div className="bg-gradient-to-br from-[#6F5DE9]/5 to-[#beb2ff]/5 rounded-xl p-6 border border-[#6F5DE9]/20 h-full">
          <div className="text-xs font-semibold text-gray-600 mb-4">Audit-readiness</div>
          <div className="space-y-2 mb-4">
            {[
              { item: "Données tracées", status: "100%", active: activeIndex === 0 },
              { item: "Justifications", status: "98%", active: activeIndex === 1 },
              { item: "Historique complet", status: "100%", active: activeIndex === 2 }
            ].map((item, i) => (
              <div key={i} className={`p-2 bg-white rounded-lg border-2 transition-all ${item.active ? 'border-[#6F5DE9] shadow-sm' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-700">{item.item}</span>
                  <span className="text-xs font-bold text-[#6F5DE9]">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Prêt pour audit</div>
            <div className="text-2xl font-bold text-[#6F5DE9]">✓ Oui</div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
