"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  CheckSquare,
  Zap,
  BarChart3,
  Target,
  Sparkles,
  Database,
  FileText,
  Network,
  TrendingDown,
  Shield,
  Layers,
} from "lucide-react";

// Fonction pour générer les visualisations orientées DÉCISION selon le point clé
function renderSoftwarePreview(useCaseIndex: number, bulletIndex: number, accentColor: string) {
  // CSRD & Reporting durable
  if (useCaseIndex === 1) {
    if (bulletIndex === 0) {
      // Suivi des exigences CSRD / ESRS - DÉCISION : Prioriser les actions
      return (
        <div className="bg-white rounded-lg border border-gray-200/60 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r p-2.5 flex items-center gap-1.5" style={{ background: `linear-gradient(90deg, ${accentColor}15, ${accentColor}08)` }}>
            <Target className="w-3 h-3" style={{ color: accentColor }} />
            <span className="text-xs font-semibold" style={{ color: accentColor }}>Décision : Prioriser les actions</span>
          </div>
          <div className="p-3 space-y-2.5">
            <div className="p-2.5 bg-red-50/50 rounded border-l-3" style={{ borderLeftColor: accentColor }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-800">ESRS E1 - Changement climatique</span>
                <span className="text-xs font-semibold text-red-600">Action requise</span>
              </div>
              <div className="text-xs text-gray-600">3 points critiques non documentés</div>
              <div className="mt-1.5 text-xs font-medium" style={{ color: accentColor }}>→ Décision : Allouer 2 jours équipe</div>
            </div>
            <div className="p-2.5 bg-gray-50 rounded border border-gray-200/60">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-gray-700">ESRS 1 - Gouvernance</span>
                <CheckCircle2 className="w-3 h-3 text-[#83F0C8]" />
              </div>
              <div className="text-xs text-gray-500">Complété • Prêt pour audit</div>
            </div>
            <div className="pt-2 border-t border-gray-200/60">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Impact décisionnel</span>
                <span className="font-bold" style={{ color: accentColor }}>12 normes • 3 actions prioritaires</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (bulletIndex === 1) {
      // Traçabilité & preuves - DÉCISION : Sécuriser l'audit
      return (
        <div className="bg-white rounded-lg border border-gray-200/60 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r p-2.5 flex items-center gap-1.5" style={{ background: `linear-gradient(90deg, ${accentColor}15, ${accentColor}08)` }}>
            <Shield className="w-3 h-3" style={{ color: accentColor }} />
            <span className="text-xs font-semibold" style={{ color: accentColor }}>Décision : Sécuriser l'audit</span>
          </div>
          <div className="p-3 space-y-2.5">
            <div className="p-2.5 bg-green-50/50 rounded border-l-3" style={{ borderLeftColor: "#83F0C8" }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-800">Indicateur E1-1</span>
                <span className="text-xs font-semibold text-green-600">Audit-ready</span>
              </div>
              <div className="text-xs text-gray-600 mb-1">5 preuves documentées • Dernière modif : J. Martin (il y a 2h)</div>
              <div className="text-xs font-medium text-green-700">✓ Décision : Prêt pour validation COMEX</div>
            </div>
            <div className="p-2.5 bg-yellow-50/50 rounded border-l-3" style={{ borderLeftColor: accentColor }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-800">Indicateur E1-3</span>
                <span className="text-xs font-semibold" style={{ color: accentColor }}>À compléter</span>
              </div>
              <div className="text-xs text-gray-600">2 preuves manquantes</div>
              <div className="mt-1.5 text-xs font-medium" style={{ color: accentColor }}>→ Décision : Relancer équipe métier</div>
            </div>
            <div className="pt-2 border-t border-gray-200/60">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Niveau de confiance audit</span>
                <span className="font-bold text-green-600">87% • 3 actions restantes</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (bulletIndex === 2) {
      // Versioning - DÉCISION : Valider et publier
      return (
        <div className="bg-white rounded-lg border border-gray-200/60 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r p-2.5 flex items-center gap-1.5" style={{ background: `linear-gradient(90deg, ${accentColor}15, ${accentColor}08)` }}>
            <Layers className="w-3 h-3" style={{ color: accentColor }} />
            <span className="text-xs font-semibold" style={{ color: accentColor }}>Décision : Valider et publier</span>
          </div>
          <div className="p-3 space-y-2.5">
            <div className="p-2.5 bg-gradient-to-br rounded border-2 shadow-sm" style={{ 
              background: `linear-gradient(135deg, ${accentColor}10, ${accentColor}05)`,
              borderColor: `${accentColor}40`
            }}>
              <div className="flex items-center justify-between mb-1">
                <div>
                  <div className="text-xs font-bold text-gray-800">v2.1 - Version actuelle</div>
                  <div className="text-xs text-gray-500">Modifiée aujourd'hui • +12 points de données</div>
                </div>
                <div className="text-xs px-2 py-1 rounded font-semibold text-white" style={{ backgroundColor: accentColor }}>
                  À valider
                </div>
              </div>
              <div className="mt-2 pt-2 border-t border-gray-200/60">
                <div className="text-xs font-medium text-gray-700 mb-1">Comparaison v2.0 → v2.1</div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-green-600 font-semibold">+12 indicateurs</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">3 corrections</span>
                </div>
              </div>
              <div className="mt-2 text-xs font-semibold" style={{ color: accentColor }}>→ Décision : Validation COMEX requise</div>
            </div>
            <div className="p-2 bg-gray-50 rounded border border-gray-200/60">
              <div className="text-xs font-semibold text-gray-600">v2.0 - Publiée le 15/01</div>
              <div className="text-xs text-gray-500">Version de référence audit</div>
            </div>
            <div className="pt-2 border-t border-gray-200/60">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Statut publication</span>
                <span className="font-bold" style={{ color: accentColor }}>En attente validation</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (bulletIndex === 3) {
      // Consolidation multi-entités - DÉCISION : Harmoniser les écarts
      return (
        <div className="bg-white rounded-lg border border-gray-200/60 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r p-2.5 flex items-center gap-1.5" style={{ background: `linear-gradient(90deg, ${accentColor}15, ${accentColor}08)` }}>
            <Network className="w-3 h-3" style={{ color: accentColor }} />
            <span className="text-xs font-semibold" style={{ color: accentColor }}>Décision : Harmoniser les écarts</span>
          </div>
          <div className="p-3 space-y-2.5">
            <div className="p-2.5 bg-green-50/50 rounded border-l-3" style={{ borderLeftColor: "#83F0C8" }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-800">Siège + Entité A</span>
                <span className="text-xs font-semibold text-green-600">Alignées</span>
              </div>
              <div className="text-xs text-gray-600">Méthodologie cohérente • Prêt consolidation</div>
            </div>
            <div className="p-2.5 bg-yellow-50/50 rounded border-l-3" style={{ borderLeftColor: accentColor }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-800">Entité B</span>
                <span className="text-xs font-semibold" style={{ color: accentColor }}>Écart détecté</span>
              </div>
              <div className="text-xs text-gray-600 mb-1">Méthode de calcul différente sur 3 indicateurs</div>
              <div className="mt-1.5 text-xs font-medium" style={{ color: accentColor }}>→ Décision : Aligner sur référentiel groupe</div>
            </div>
            <div className="p-2 bg-gray-50 rounded border border-gray-200/60">
              <div className="text-xs font-semibold text-gray-700">Entité C</div>
              <div className="text-xs text-gray-500">En attente de saisie</div>
            </div>
            <div className="pt-2 border-t border-gray-200/60">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Vision groupe</span>
                <span className="font-bold" style={{ color: accentColor }}>75% consolidé • 1 action requise</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  // Pilotage ESG & Performance
  if (useCaseIndex === 0) {
    if (bulletIndex === 0) {
      // Matérialité - DÉCISION : Prioriser les investissements
      return (
        <div className="bg-white rounded-lg border border-gray-200/60 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r p-2.5 flex items-center gap-1.5" style={{ background: `linear-gradient(90deg, ${accentColor}15, ${accentColor}08)` }}>
            <Target className="w-3 h-3" style={{ color: accentColor }} />
            <span className="text-xs font-semibold" style={{ color: accentColor }}>Décision : Prioriser les investissements</span>
          </div>
          <div className="p-3 space-y-2.5">
            <div className="p-2.5 bg-red-50/50 rounded border-l-3" style={{ borderLeftColor: accentColor }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-800">Émissions carbone</span>
                <span className="text-xs font-semibold text-red-600">Priorité critique</span>
              </div>
              <div className="text-xs text-gray-600 mb-1">Impact financier : -15% vs objectif</div>
              <div className="mt-1.5 text-xs font-medium" style={{ color: accentColor }}>→ Décision : Allouer budget décarbonation</div>
            </div>
            <div className="p-2.5 bg-gray-50 rounded border border-gray-200/60">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-gray-700">Diversité</span>
                <span className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: `${accentColor}10`, color: accentColor }}>
                  Moyen
                </span>
              </div>
              <div className="text-xs text-gray-500">Sur la trajectoire • Suivi trimestriel</div>
            </div>
            <div className="p-2.5 bg-green-50/50 rounded border-l-3" style={{ borderLeftColor: "#83F0C8" }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-800">Gouvernance</span>
                <span className="text-xs font-semibold text-green-600">Maîtrisé</span>
              </div>
              <div className="text-xs text-gray-600">90% des objectifs atteints</div>
            </div>
            <div className="pt-2 border-t border-gray-200/60">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Impact décisionnel</span>
                <span className="font-bold" style={{ color: accentColor }}>1 décision stratégique requise</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (bulletIndex === 1) {
      // KPIs - DÉCISION : Agir sur les écarts
      return (
        <div className="bg-white rounded-lg border border-gray-200/60 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r p-2.5 flex items-center gap-1.5" style={{ background: `linear-gradient(90deg, ${accentColor}15, ${accentColor}08)` }}>
            <BarChart3 className="w-3 h-3" style={{ color: accentColor }} />
            <span className="text-xs font-semibold" style={{ color: accentColor }}>Décision : Agir sur les écarts</span>
          </div>
          <div className="p-3 space-y-2.5">
            <div className="p-2.5 bg-red-50/50 rounded border-l-3" style={{ borderLeftColor: accentColor }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-800">Émissions CO₂</span>
                <span className="text-xs font-semibold text-red-600">-15% vs objectif</span>
              </div>
              <div className="text-xs text-gray-600 mb-1">Objectif : -20% • Réalisé : -5%</div>
              <div className="mt-1.5 text-xs font-medium" style={{ color: accentColor }}>→ Décision : Renforcer plan d'actions</div>
            </div>
            <div className="p-2.5 bg-green-50/50 rounded border-l-3" style={{ borderLeftColor: "#83F0C8" }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-800">Taux diversité</span>
                <span className="text-xs font-semibold text-green-600">+2% vs objectif</span>
              </div>
              <div className="text-xs text-gray-600">42% • Objectif 40% atteint</div>
            </div>
            <div className="p-2 bg-gray-50 rounded border border-gray-200/60">
              <div className="text-xs font-semibold text-gray-700">Formation</div>
              <div className="text-xs text-gray-500">89% • Sur la trajectoire</div>
            </div>
            <div className="pt-2 border-t border-gray-200/60">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Actions requises</span>
                <span className="font-bold" style={{ color: accentColor }}>1 décision prioritaire</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (bulletIndex === 2) {
      // Plans d'actions - DÉCISION : Réallouer les ressources
      return (
        <div className="bg-white rounded-lg border border-gray-200/60 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r p-2.5 flex items-center gap-1.5" style={{ background: `linear-gradient(90deg, ${accentColor}15, ${accentColor}08)` }}>
            <CheckSquare className="w-3 h-3" style={{ color: accentColor }} />
            <span className="text-xs font-semibold" style={{ color: accentColor }}>Décision : Réallouer les ressources</span>
          </div>
          <div className="p-3 space-y-2.5">
            <div className="p-2.5 bg-yellow-50/50 rounded border-l-3" style={{ borderLeftColor: accentColor }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-800">3 actions en retard</span>
                <span className="text-xs font-semibold" style={{ color: accentColor }}>Action requise</span>
              </div>
              <div className="text-xs text-gray-600 mb-1">Décarbonation • Échéance dépassée</div>
              <div className="mt-1.5 text-xs font-medium" style={{ color: accentColor }}>→ Décision : Réassigner à équipe dédiée</div>
            </div>
            <div className="p-2.5 bg-green-50/50 rounded border-l-3" style={{ borderLeftColor: "#83F0C8" }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-800">12 actions validées</span>
                <span className="text-xs font-semibold text-green-600">Sur la trajectoire</span>
              </div>
              <div className="text-xs text-gray-600">8 actions en cours • 3 en attente</div>
            </div>
            <div className="pt-2 border-t border-gray-200/60">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Impact décisionnel</span>
                <span className="font-bold" style={{ color: accentColor }}>3 réallocations nécessaires</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (bulletIndex === 3) {
      // Tableaux de bord - DÉCISION : Valider la stratégie
      return (
        <div className="bg-white rounded-lg border border-gray-200/60 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r p-2.5 flex items-center gap-1.5" style={{ background: `linear-gradient(90deg, ${accentColor}15, ${accentColor}08)` }}>
            <BarChart3 className="w-3 h-3" style={{ color: accentColor }} />
            <span className="text-xs font-semibold" style={{ color: accentColor }}>Décision : Valider la stratégie</span>
          </div>
          <div className="p-3 space-y-2.5">
            <div className="p-2.5 bg-gradient-to-br rounded border-2 shadow-sm" style={{ 
              background: `linear-gradient(135deg, ${accentColor}10, ${accentColor}05)`,
              borderColor: `${accentColor}40`
            }}>
              <div className="text-xs font-bold text-gray-800 mb-1">Performance ESG globale</div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-lg font-bold" style={{ color: accentColor }}>75%</span>
                <span className="text-xs text-gray-500">vs objectif 80%</span>
              </div>
              <div className="text-xs text-gray-600 mb-1.5">3 enjeux critiques identifiés</div>
              <div className="text-xs font-semibold" style={{ color: accentColor }}>→ Décision COMEX : Renforcer plan d'actions</div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 bg-gray-50 rounded border border-gray-200/60">
                <div className="text-xs text-gray-500 mb-1">Actions</div>
                <div className="text-sm font-bold" style={{ color: accentColor }}>28</div>
              </div>
              <div className="p-2 bg-gray-50 rounded border border-gray-200/60">
                <div className="text-xs text-gray-500 mb-1">Enjeux</div>
                <div className="text-sm font-bold" style={{ color: "#83F0C8" }}>12</div>
              </div>
            </div>
            <div className="pt-2 border-t border-gray-200/60">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Prochaine décision</span>
                <span className="font-bold" style={{ color: accentColor }}>COMEX du 15/02</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  // Climat & Empreinte carbone
  if (useCaseIndex === 3) {
    if (bulletIndex === 0) {
      // Scopes - DÉCISION : Cibler les réductions
      return (
        <div className="bg-white rounded-lg border border-gray-200/60 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r p-2.5 flex items-center gap-1.5" style={{ background: `linear-gradient(90deg, ${accentColor}15, ${accentColor}08)` }}>
            <TrendingDown className="w-3 h-3" style={{ color: accentColor }} />
            <span className="text-xs font-semibold" style={{ color: accentColor }}>Décision : Cibler les réductions</span>
          </div>
          <div className="p-3 space-y-2.5">
            <div className="p-2.5 bg-red-50/50 rounded border-l-3" style={{ borderLeftColor: accentColor }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-800">Scope 2 : 8.2K tCO₂e</span>
                <span className="text-xs font-semibold text-red-600">50% du total</span>
              </div>
              <div className="text-xs text-gray-600 mb-1">Principal levier de réduction</div>
              <div className="mt-1.5 text-xs font-medium" style={{ color: accentColor }}>→ Décision : Prioriser énergies renouvelables</div>
            </div>
            <div className="p-2 bg-gray-50 rounded border border-gray-200/60">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-gray-700">Scope 1 : 2.5K tCO₂e</span>
                <span className="text-xs text-gray-500">15%</span>
              </div>
            </div>
            <div className="p-2 bg-gray-50 rounded border border-gray-200/60">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-gray-700">Scope 3 : 6.8K tCO₂e</span>
                <span className="text-xs text-gray-500">35%</span>
              </div>
            </div>
            <div className="pt-2 border-t border-gray-200/60">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Impact décisionnel</span>
                <span className="font-bold" style={{ color: accentColor }}>1 décision stratégique</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (bulletIndex === 1) {
      // Connexion FEC / factures - DÉCISION : Automatiser la collecte
      return (
        <div className="bg-white rounded-lg border border-gray-200/60 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r p-2.5 flex items-center gap-1.5" style={{ background: `linear-gradient(90deg, ${accentColor}15, ${accentColor}08)` }}>
            <Database className="w-3 h-3" style={{ color: accentColor }} />
            <span className="text-xs font-semibold" style={{ color: accentColor }}>Décision : Automatiser la collecte</span>
          </div>
          <div className="p-3 space-y-2.5">
            <div className="p-2.5 bg-green-50/50 rounded border-l-3" style={{ borderLeftColor: "#83F0C8" }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-800">FEC automatisé</span>
                <span className="text-xs font-semibold text-green-600">Actif</span>
              </div>
              <div className="text-xs text-gray-600">12.5K données importées • Gain : 2 jours/mois</div>
            </div>
            <div className="p-2.5 bg-yellow-50/50 rounded border-l-3" style={{ borderLeftColor: accentColor }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-800">Lecture factures</span>
                <span className="text-xs font-semibold" style={{ color: accentColor }}>À optimiser</span>
              </div>
              <div className="text-xs text-gray-600 mb-1">70% automatisé • 30% manuel</div>
              <div className="mt-1.5 text-xs font-medium" style={{ color: accentColor }}>→ Décision : Activer OCR factures</div>
            </div>
            <div className="pt-2 border-t border-gray-200/60">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Gain de temps</span>
                <span className="font-bold" style={{ color: accentColor }}>2 jours/mois économisés</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (bulletIndex === 2) {
      // Trajectoires - DÉCISION : Valider le scénario
      return (
        <div className="bg-white rounded-lg border border-gray-200/60 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r p-2.5 flex items-center gap-1.5" style={{ background: `linear-gradient(90deg, ${accentColor}15, ${accentColor}08)` }}>
            <Target className="w-3 h-3" style={{ color: accentColor }} />
            <span className="text-xs font-semibold" style={{ color: accentColor }}>Décision : Valider le scénario</span>
          </div>
          <div className="p-3 space-y-2.5">
            <div className="p-2.5 bg-green-50/50 rounded border-l-3" style={{ borderLeftColor: "#83F0C8" }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-800">Objectif SBTi : -30%</span>
                <span className="text-xs font-semibold text-green-600">Sur la trajectoire</span>
              </div>
              <div className="text-xs text-gray-600">Réalisé : -12% • Objectif 2030 : -30%</div>
            </div>
            <div className="p-2.5 bg-gradient-to-br rounded border-2" style={{ 
              background: `linear-gradient(135deg, ${accentColor}10, ${accentColor}05)`,
              borderColor: `${accentColor}40`
            }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-800">Scénario -50%</span>
                <span className="text-xs font-semibold" style={{ color: accentColor }}>À valider</span>
              </div>
              <div className="text-xs text-gray-600 mb-1">Impact : 3.5M€ investissement requis</div>
              <div className="mt-1.5 text-xs font-medium" style={{ color: accentColor }}>→ Décision COMEX : Valider budget</div>
            </div>
            <div className="pt-2 border-t border-gray-200/60">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Prochaine décision</span>
                <span className="font-bold" style={{ color: accentColor }}>COMEX du 20/02</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (bulletIndex === 3) {
      // PCF - DÉCISION : Optimiser les produits
      return (
        <div className="bg-white rounded-lg border border-gray-200/60 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r p-2.5 flex items-center gap-1.5" style={{ background: `linear-gradient(90deg, ${accentColor}15, ${accentColor}08)` }}>
            <Sparkles className="w-3 h-3" style={{ color: accentColor }} />
            <span className="text-xs font-semibold" style={{ color: accentColor }}>Décision : Optimiser les produits</span>
          </div>
          <div className="p-3 space-y-2.5">
            <div className="p-2.5 bg-yellow-50/50 rounded border-l-3" style={{ borderLeftColor: accentColor }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-800">Produit A : 12.5 kgCO₂e</span>
                <span className="text-xs font-semibold" style={{ color: accentColor }}>Au-dessus moyenne</span>
              </div>
              <div className="text-xs text-gray-600 mb-1">+25% vs référence marché</div>
              <div className="mt-1.5 text-xs font-medium" style={{ color: accentColor }}>→ Décision : Réviser fournisseurs</div>
            </div>
            <div className="p-2.5 bg-green-50/50 rounded border-l-3" style={{ borderLeftColor: "#83F0C8" }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-800">Produit B : 8.2 kgCO₂e</span>
                <span className="text-xs font-semibold text-green-600">Conforme</span>
              </div>
              <div className="text-xs text-gray-600">-15% vs référence marché</div>
            </div>
            <div className="pt-2 border-t border-gray-200/60">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Actions requises</span>
                <span className="font-bold" style={{ color: accentColor }}>1 décision produit</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  
  // Fallback par défaut
  return (
    <div className="bg-white rounded-lg border border-gray-200/60 shadow-sm p-3">
      <div className="text-xs text-gray-500 text-center">Aperçu du logiciel</div>
    </div>
  );
}

export default function HomePage() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [activeBullet, setActiveBullet] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#3F2F8D] via-[#6F5DE9] to-[#beb2ff] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </div>

      {/* Hero Section - Renforcé avec profondeur */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fcfcfd] via-white to-[#beb2ff]/12">
        {/* Effets blur renforcés */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#beb2ff]/25 rounded-full blur-3xl will-change-transform animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#83F0C8]/25 rounded-full blur-3xl will-change-transform animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6F5DE9]/10 rounded-full blur-3xl will-change-transform"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#344054] mb-6 leading-tight drop-shadow-sm">
              Le pilotage extra-financier
              <br />
              <span className="bg-gradient-to-r from-[#3F2F8D] via-[#6F5DE9] to-[#beb2ff] bg-clip-text text-transparent">
                simple et accessible
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Centralisez la donnée ESG & climat, sécurisez votre CSRD, pilotez enjeux et KPIs — avec une fiabilité compatible audit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Link
                href="/contact?intent=demo"
                className="group bg-[#3F2F8D] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-violet shadow-violet-hover transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#3F2F8D]/20"
                aria-label="Demander une démonstration d'Ekyo"
              >
                Voir Ekyo en démo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} aria-hidden="true" />
              </Link>
              <Link
                href="/contact?intent=expert"
                className="bg-white text-[#3F2F8D] border-2 border-[#3F2F8D] px-8 py-4 rounded-lg font-semibold hover:bg-[#3F2F8D]/10 transition-all inline-flex items-center justify-center hover:border-[#4c30d6] hover:text-[#4c30d6] shadow-md hover:shadow-lg hover:shadow-violet transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#3F2F8D]/20"
                aria-label="Échanger avec un expert Ekyo"
              >
                Échanger avec un expert
              </Link>
            </div>
            
            {/* Preuves / crédibilité - Optimisé */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" aria-hidden="true" />
                <span>Conçue pour les ETI et groupes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" aria-hidden="true" />
                <span>Données tracées et auditables</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" aria-hidden="true" />
                <span>Intégrée au SI finance et ERP</span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/plateforme"
                className="text-[#3F2F8D] font-semibold inline-flex items-center gap-2 hover:text-[#4c30d6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3F2F8D]/20 rounded px-2 py-1"
                aria-label="Découvrir la plateforme Ekyo"
              >
                Découvrir la plateforme
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section - 4 usages (interactif) - Renforcé */}
      <section className="py-20 md:py-32 section-background bg-gradient-to-br from-[#fcfcfd] via-white to-[#beb2ff]/15 relative">
        <div className="absolute inset-0 bg-pattern-dots"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#beb2ff]/20 rounded-full blur-3xl will-change-transform"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#83F0C8]/20 rounded-full blur-3xl will-change-transform"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#344054] mb-4">
                4 usages clés, une plateforme unique
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-2">
                Choisissez votre point d'entrée.
              </p>
              <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
                Ekyo s'adapte à votre organisation et à vos priorités.
              </p>
            </div>

          {/* Onglets horizontaux - Responsive amélioré */}
          <div className="mb-8 md:mb-12">
            <div
              className="flex flex-wrap justify-center gap-2 border-b border-gray-200 pb-1 overflow-x-auto scrollbar-hide"
              role="tablist"
              aria-label="Usages Ekyo"
            >
              {useCases.map((uc, idx) => {
                const isActive = activeUseCase === idx;
                return (
                  <button
                    key={uc.href}
                    type="button"
                    onClick={() => { setActiveUseCase(idx); setActiveBullet(0); }}
                    onKeyDown={(e) => {
                      const key = e.key;
                      if (key === "ArrowLeft" || key === "ArrowRight" || key === "Home" || key === "End") {
                        e.preventDefault();
                        const last = useCases.length - 1;
                        if (key === "Home") return setActiveUseCase(0);
                        if (key === "End") return setActiveUseCase(last);
                        const delta = key === "ArrowLeft" ? -1 : 1;
                        const next = (idx + delta + useCases.length) % useCases.length;
                        setActiveUseCase(next);
                      }
                    }}
                    className={`relative px-4 sm:px-6 py-3 rounded-t-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3F2F8D]/20 ${
                      isActive
                        ? "bg-white text-[#3F2F8D] border-t-2 border-x-2 border-gray-200 shadow-sm"
                        : "text-gray-500 hover:text-[#3F2F8D] hover:bg-gray-50/80"
                    }`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`usecase-panel-${idx}`}
                    id={`usecase-tab-${idx}`}
                  >
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      {(() => {
                        const IconComponent = uc.icon;
                        return (
                          <IconComponent
                            className={`w-4 h-4 transition-colors flex-shrink-0 ${
                              isActive ? "text-[#3F2F8D]" : "text-gray-400"
                            }`}
                            style={isActive ? { color: uc.accent } : {}}
                            aria-hidden="true"
                          />
                        );
                      })()}
                      <span className={`text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                        isActive ? "text-[#344054]" : "text-gray-500"
                      }`}>{uc.title}</span>
                    </div>
                    {isActive && (
                      <div
                        className="absolute bottom-0 left-0 right-0 h-1 rounded-full"
                        style={{ backgroundColor: uc.accent }}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Panneau de contenu - Renforcé */}
          <div
            className="relative bg-gradient-to-br from-white via-[#fcfcfd] to-[#f8f9fa] rounded-2xl p-6 sm:p-8 lg:p-12 border-2 border-[#beb2ff]/30 shadow-2xl shadow-violet transition-all duration-500 overflow-hidden hover:border-[#6F5DE9]/50 hover:shadow-violet-hover"
            role="tabpanel"
            id={`usecase-panel-${activeUseCase}`}
            aria-labelledby={`usecase-tab-${activeUseCase}`}
          >
            <div className="absolute inset-0 bg-pattern-dots"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#beb2ff]/12 via-transparent to-[#83F0C8]/12"></div>
            <div className="relative z-10">
              <div className="max-w-5xl mx-auto">
                {/* Badge et titre - Hiérarchie claire */}
                <div className="mb-5 md:mb-6">
                <div
                  className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border mb-3"
                  style={{
                    borderColor: `${useCases[activeUseCase].accent}15`,
                    backgroundColor: `${useCases[activeUseCase].accent}05`,
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full opacity-40"
                    style={{ backgroundColor: useCases[activeUseCase].accent }}
                  />
                  <span className="text-xs font-medium text-gray-400">
                    {useCases[activeUseCase].kicker}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#344054] mb-3 leading-tight max-w-3xl">
                  {useCases[activeUseCase].headline}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
                  {useCases[activeUseCase].long}
                </p>
              </div>

              {/* Grille 2 colonnes - Points clés interactifs, Aperçu dynamique */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Carte Points clés - Interactive renforcée */}
                <div className="bg-gradient-to-br from-white to-[#f8f9ff] rounded-xl p-5 sm:p-6 border-2 border-[#3F2F8D]/40 shadow-lg shadow-violet hover:border-[#6F5DE9]/60 hover:shadow-xl hover:shadow-violet-hover transition-all">
                  <p className="text-xs font-bold text-[#3F2F8D] uppercase tracking-wider mb-4">
                    Points clés
                  </p>
                  <ul className="space-y-2" role="listbox" aria-label="Points clés">
                    {useCases[activeUseCase].bullets.map((bullet, idx) => {
                      const isActive = activeBullet === idx;
                      return (
                        <li key={bullet.text}>
                          <button
                            type="button"
                            onClick={() => setActiveBullet(idx)}
                            onKeyDown={(e) => {
                              if (e.key === "ArrowDown") {
                                e.preventDefault();
                                setActiveBullet((idx + 1) % useCases[activeUseCase].bullets.length);
                              } else if (e.key === "ArrowUp") {
                                e.preventDefault();
                                setActiveBullet((idx - 1 + useCases[activeUseCase].bullets.length) % useCases[activeUseCase].bullets.length);
                              }
                            }}
                            className={`w-full flex items-start gap-3 text-left p-2.5 rounded-lg transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[#3F2F8D]/30 ${
                              isActive
                                ? "bg-[#3F2F8D]/8 border border-[#3F2F8D]/20 shadow-sm"
                                : "hover:bg-gray-100/80 border border-transparent hover:shadow-sm"
                            }`}
                            role="option"
                            aria-selected={isActive}
                          >
                            <CheckCircle2 
                              className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${
                                isActive ? "text-[#3F2F8D]" : "text-[#83F0C8]"
                              }`} 
                              aria-hidden="true" 
                            />
                            <span className={`text-sm sm:text-base leading-relaxed transition-colors ${
                              isActive ? "text-[#344054] font-medium" : "text-gray-700"
                            }`}>
                              {bullet.text}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Carte Aperçu - Visualisation logiciel dynamique */}
                <div className="bg-gray-50/30 rounded-xl p-4 sm:p-5 border border-gray-200/80 overflow-hidden">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                    Aperçu
                  </p>
                  <div className="relative min-h-[200px]">
                    {(() => {
                      const preview = useCases[activeUseCase].bullets[activeBullet]?.preview;
                      if (!preview) return null;
                      
                      // Générer la visualisation selon le point clé
                      return (
                        <div 
                          key={`${activeUseCase}-${activeBullet}`}
                          className="animate-fade-in-right"
                        >
                          {renderSoftwarePreview(activeUseCase, activeBullet, useCases[activeUseCase].accent)}
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>

              {/* Rupture visuelle avant CTAs */}
              <div className="my-6 border-t border-gray-200/60"></div>

              {/* CTAs - Hiérarchie stricte : Principal → Secondaire → Tertiaire */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                  {/* CTA Principal - Plein, contrasté */}
                  <Link
                    href="/contact?intent=demo"
                    className="bg-[#3F2F8D] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#3F2F8D]/20 text-center"
                    aria-label="Voir Ekyo en démonstration"
                  >
                    Voir Ekyo en démo
                    <ArrowRight className="ml-2" size={18} aria-hidden="true" />
                  </Link>
                  {/* CTA Secondaire - Outline */}
                  <Link
                    href={useCases[activeUseCase].href}
                    className="bg-white text-[#3F2F8D] border border-[#3F2F8D]/40 px-6 py-3.5 rounded-lg font-medium hover:bg-[#3F2F8D]/5 hover:border-[#3F2F8D]/60 transition-all inline-flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#3F2F8D]/20 text-center"
                    aria-label={`Découvrir la solution ${useCases[activeUseCase].title}`}
                  >
                    Découvrir la solution
                  </Link>
                </div>
                {/* CTA Tertiaire - Lien discret */}
                <Link
                  href="/plateforme"
                  className="text-sm text-gray-500 hover:text-[#3F2F8D] transition-colors inline-flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#3F2F8D]/20 rounded px-2 py-1"
                  aria-label="Vue d'ensemble de la plateforme"
                >
                  Vue d'ensemble produit
                  <ArrowRight size={12} aria-hidden="true" />
                </Link>
              </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Micro-section - Audit-ready - Renforcé */}
      <section className="py-20 md:py-32 section-background bg-gradient-to-br from-[#3F2F8D]/12 via-white to-[#83F0C8]/12 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#344054] mb-4">
                Audit-ready, sans complexité
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Des données fiables, tracées et documentées — pour sécuriser la conformité et la crédibilité du reporting.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Audit-trail */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#3F2F8D]/30 hover:border-[#3F2F8D]/60 transition-all shadow-lg shadow-violet hover:shadow-xl hover:shadow-violet-hover hover-lift">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md" style={{ backgroundColor: "#3F2F8D25" }}>
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: "#3F2F8D" }} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#344054]">Audit-trail</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Historique complet</p>
                  </div>
                </div>
                <div className="space-y-2.5 sm:space-y-3 mt-6">
                  {[
                    { action: "Modification", user: "J. Martin", time: "Il y a 2h", progress: 100 },
                    { action: "Validation", user: "M. Dupont", time: "Il y a 1j", progress: 100 },
                    { action: "Export", user: "Système", time: "Il y a 3j", progress: 100 }
                  ].map((log, i) => (
                    <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg p-2.5 sm:p-3 border border-gray-200">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-700 truncate">{log.action}</div>
                        <div className="text-xs sm:text-sm text-gray-500">par {log.user}</div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                        <div className="w-2 h-2 rounded-full bg-[#83F0C8]" aria-hidden="true"></div>
                        <span className="text-xs text-gray-400 whitespace-nowrap">{log.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Traçabilité</span>
                    <span className="text-base sm:text-lg font-bold text-[#3F2F8D]">100%</span>
                  </div>
                </div>
              </div>

              {/* Versioning */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#6F5DE9]/30 hover:border-[#6F5DE9]/60 transition-all shadow-lg shadow-violet hover:shadow-xl hover:shadow-violet-hover hover-lift">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md" style={{ backgroundColor: "#6F5DE925" }}>
                    <Layers className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: "#6F5DE9" }} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#344054]">Versioning</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Suivi des versions</p>
                  </div>
                </div>
                <div className="space-y-2.5 sm:space-y-2 mt-6">
                  {[
                    { version: "v2.1", date: "15/01/2024", status: "Publié", active: true },
                    { version: "v2.0", date: "10/12/2023", status: "Archivé", active: false },
                    { version: "v1.9", date: "20/11/2023", status: "Archivé", active: false }
                  ].map((v, i) => (
                    <div key={i} className={`p-2.5 sm:p-3 rounded-lg border-2 transition-all ${v.active ? 'border-[#6F5DE9] bg-[#6F5DE9]/5' : 'border-gray-200 bg-gray-50'}`}>
                      <div className="flex items-center justify-between gap-2">
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-gray-700">{v.version}</div>
                          <div className="text-xs sm:text-sm text-gray-500">{v.date}</div>
                        </div>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 ${v.status === "Publié" ? 'bg-[#83F0C8]/20 text-[#83F0C8]' : 'bg-gray-100 text-gray-600'}`}>
                          {v.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Versions actives</span>
                    <span className="text-base sm:text-lg font-bold text-[#6F5DE9]">3</span>
                  </div>
                </div>
              </div>

              {/* Consolidation groupe */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#83F0C8]/30 hover:border-[#83F0C8]/60 transition-all shadow-lg shadow-green hover:shadow-xl hover:shadow-green-hover hover-lift sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md" style={{ backgroundColor: "#83F0C825" }}>
                    <Network className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: "#83F0C8" }} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#344054]">Consolidation</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Multi-entités</p>
                  </div>
                </div>
                <div className="space-y-2.5 sm:space-y-2 mt-6">
                  {["Siège", "Entité A", "Entité B", "Entité C"].map((ent, i) => (
                    <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg p-2.5 sm:p-3 border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">{ent}</span>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <div className="h-1.5 w-12 sm:w-16 bg-gray-200 rounded-full">
                          <div className="h-1.5 bg-[#83F0C8] rounded-full" style={{ width: `${75 + i * 8}%` }} aria-hidden="true"></div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-[#83F0C8]" aria-hidden="true"></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Entités synchronisées</span>
                    <span className="text-base sm:text-lg font-bold text-[#83F0C8]">4/4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Comment ça marche - Optimisé */}
      <section className="py-20 md:py-32 section-background bg-gradient-to-br from-white via-[#fcfcfd] to-[#83F0C8]/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#83F0C8]/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#344054] mb-4">
              Comment ça marche
            </h2>
          </div>

          {/* Section Interactive avec étapes - Optimisé */}
          <div className="mb-12 md:mb-16">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              {[
                { id: 0, label: "Collecter & fiabiliser la donnée", icon: Database, color: "#beb2ff" },
                { id: 1, label: "Structurer & piloter", icon: BarChart3, color: "#83F0C8" },
                { id: 2, label: "Reporter & sécuriser", icon: FileText, color: "#3F2F8D" },
              ].map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveStep(step.id);
                    }
                  }}
                  className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all relative group focus:outline-none focus:ring-4 focus:ring-[#3F2F8D]/20 ${
                    activeStep === step.id
                      ? 'bg-[#3F2F8D] text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#beb2ff]'
                  }`}
                  aria-pressed={activeStep === step.id}
                  aria-label={`Étape ${step.id + 1}: ${step.label}`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      activeStep === step.id ? 'bg-white/20' : 'bg-gray-100'
                    }`}>
                      <step.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${activeStep === step.id ? 'text-white' : ''}`} style={activeStep !== step.id ? { color: step.color } : {}} aria-hidden="true" />
                    </div>
                    <span className="text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap">{step.label}</span>
                  </div>
                  {activeStep === step.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-b-xl" aria-hidden="true"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Contenu dynamique selon l'étape - Hauteur dynamique */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="space-y-4 sm:space-y-6">
                {activeStep === 0 && (
                  <>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#344054]">Collecter & fiabiliser la donnée</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" aria-hidden="true" />
                        <span className="text-base sm:text-lg text-gray-700">Multi-entités</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" aria-hidden="true" />
                        <span className="text-base sm:text-lg text-gray-700">Multi-sources</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" aria-hidden="true" />
                        <span className="text-base sm:text-lg text-gray-700">Audit-trail complet</span>
                      </li>
                    </ul>
                  </>
                )}
                {activeStep === 1 && (
                  <>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#344054]">Structurer & piloter</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" aria-hidden="true" />
                        <span className="text-base sm:text-lg text-gray-700">Enjeux</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" aria-hidden="true" />
                        <span className="text-base sm:text-lg text-gray-700">KPIs</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" aria-hidden="true" />
                        <span className="text-base sm:text-lg text-gray-700">Plans d'actions</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" aria-hidden="true" />
                        <span className="text-base sm:text-lg text-gray-700">Tableaux de bord</span>
                      </li>
                    </ul>
                  </>
                )}
                {activeStep === 2 && (
                  <>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#344054]">Reporter & sécuriser</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" aria-hidden="true" />
                        <span className="text-base sm:text-lg text-gray-700">CSRD / ESRS / Taxonomie</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" aria-hidden="true" />
                        <span className="text-base sm:text-lg text-gray-700">Données tracées et documentées</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0" aria-hidden="true" />
                        <span className="text-base sm:text-lg text-gray-700">Exports & préparation audit</span>
                      </li>
                    </ul>
                  </>
                )}
              </div>

              {/* Visuels dynamiques - Hauteur dynamique optimisée */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.01] transition-transform will-change-transform">
                  <div className="bg-gradient-to-r from-[#3F2F8D] to-[#6F5DE9] p-3 sm:p-4 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/30" aria-hidden="true"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/30" aria-hidden="true"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/30" aria-hidden="true"></div>
                    <div className="flex-1 text-center">
                      <span className="text-white text-xs sm:text-sm font-medium">
                        {activeStep === 0 && "Ekyo - Collecte de données"}
                        {activeStep === 1 && "Ekyo - Structurer & piloter"}
                        {activeStep === 2 && "Ekyo - Reporter & sécuriser"}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
                    {/* Visuel Collecte amélioré */}
                    <div className={`transition-all duration-500 ease-in-out ${activeStep === 0 ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-4 scale-95 absolute pointer-events-none w-full top-0 left-0'}`}>
                      <div className="bg-gradient-to-br from-[#beb2ff]/10 to-[#83F0C8]/10 rounded-xl p-6 border-2 border-[#beb2ff]/30 h-full shadow-lg">
                        {/* Header amélioré */}
                        <div className="mb-4 pb-3 border-b border-gray-200">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-[#beb2ff]/20 rounded-xl flex items-center justify-center">
                              <Database className="w-6 h-6 text-[#beb2ff]" />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-[#344054]">Collecte multi-entités & multi-sources</h4>
                              <p className="text-xs text-gray-600">Audit-trail complet</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="w-2 h-2 rounded-full bg-[#83F0C8]"></div>
                            <span className="text-xs text-[#83F0C8] font-semibold">Synchronisation en temps réel</span>
                          </div>
                        </div>
                        
                        {/* Sources connectées améliorées */}
                        <div className="space-y-3 mb-4">
                          {[
                            { name: "ERP", status: "Connecté", data: "8.2K", color: "#beb2ff" },
                            { name: "Finance", status: "Connecté", data: "6.5K", color: "#83F0C8" },
                            { name: "SIRH", status: "Connecté", data: "4.8K", color: "#beb2ff" },
                            { name: "Métier", status: "Connecté", data: "5.0K", color: "#83F0C8" }
                          ].map((source, i) => (
                            <div key={i} className="bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-[#beb2ff] transition-all shadow-sm hover:shadow-md">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 bg-gradient-to-br from-[#beb2ff]/20 to-[#83F0C8]/20 rounded-lg flex items-center justify-center">
                                    <Database className="w-6 h-6 text-[#beb2ff]" />
                                  </div>
                                  <div>
                                    <span className="text-sm font-bold text-gray-700">{source.name}</span>
                                    <div className="text-xs text-gray-500">{source.data} données</div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 rounded-full bg-[#83F0C8]"></div>
                                  <span className="text-xs text-[#83F0C8] font-semibold">{source.status}</span>
                                </div>
                              </div>
                              <div className="h-1.5 bg-gray-100 rounded-full">
                                <div className="h-1.5 rounded-full transition-all duration-1000" style={{ width: `${85 + i * 3}%`, backgroundColor: source.color }}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Statistiques globales */}
                        <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-4 border-2 border-gray-200 shadow-sm">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-xs text-gray-600 mb-1">Données collectées</div>
                              <div className="text-2xl font-bold text-[#beb2ff]">24.5K</div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-600 mb-1">Taux de synchronisation</div>
                              <div className="text-2xl font-bold text-[#83F0C8]">98%</div>
                            </div>
                          </div>
                          <div className="mt-3 h-2 bg-gray-100 rounded-full">
                            <div className="h-2 bg-gradient-to-r from-[#beb2ff] to-[#83F0C8] rounded-full shadow-sm" style={{ width: "98%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Visuel Structurer amélioré */}
                    <div className={`transition-all duration-500 ease-in-out ${activeStep === 1 ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-4 scale-95 absolute pointer-events-none w-full top-0 left-0'}`}>
                      <div className="bg-gradient-to-br from-[#83F0C8]/10 to-[#beb2ff]/10 rounded-xl p-6 border-2 border-[#83F0C8]/30 h-full shadow-lg">
                        {/* Header amélioré */}
                        <div className="mb-4 pb-3 border-b border-gray-200">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-[#83F0C8]/20 rounded-xl flex items-center justify-center">
                              <BarChart3 className="w-6 h-6 text-[#83F0C8]" />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-[#344054]">Pilotage en temps réel</h4>
                              <p className="text-xs text-gray-600">Enjeux, KPIs, Plans d'actions</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="w-2 h-2 rounded-full bg-[#83F0C8]"></div>
                            <span className="text-xs text-[#83F0C8] font-semibold">Mise à jour en temps réel</span>
                          </div>
                        </div>
                        
                        {/* KPIs Grid amélioré */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          {[
                            { label: "Enjeux identifiés", value: 12, icon: Target, color: "#3F2F8D", trend: "+2" },
                            { label: "KPIs actifs", value: 45, icon: BarChart3, color: "#83F0C8", trend: "+5" }
                          ].map((kpi, i) => (
                            <div key={i} className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-3 border-2 border-gray-200 shadow-sm hover:shadow-md transition-all">
                              <div className="flex items-center justify-between mb-1">
                                <kpi.icon className="w-4 h-4" style={{ color: kpi.color }} />
                                <span className="text-xs font-semibold text-[#83F0C8]">{kpi.trend}</span>
                              </div>
                              <div className="text-xs text-gray-500 mb-1">{kpi.label}</div>
                              <div className="text-2xl font-bold" style={{ color: kpi.color }}>{kpi.value}</div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Graphique de progression amélioré */}
                        <div className="space-y-2 mb-4">
                          {[
                            { label: "Enjeux prioritaires", value: 85, color: "#3F2F8D", icon: Target },
                            { label: "Actions en cours", value: 72, color: "#83F0C8", icon: CheckSquare },
                            { label: "KPIs alignés", value: 90, color: "#beb2ff", icon: BarChart3 }
                          ].map((item, i) => (
                            <div key={i} className="bg-white rounded-lg p-3 border-2 border-gray-200 shadow-sm hover:shadow-md transition-all">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <item.icon className="w-4 h-4" style={{ color: item.color }} />
                                  <span className="text-xs font-semibold text-gray-700">{item.label}</span>
                                </div>
                                <span className="text-xs font-bold" style={{ color: item.color }}>{item.value}%</span>
                              </div>
                              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                                <div 
                                  className="h-2.5 rounded-full transition-all duration-1000 shadow-sm relative"
                                  style={{ width: `${item.value}%`, backgroundColor: item.color }}
                                >
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Mini graphique de tendance */}
                        <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-3 border-2 border-gray-200 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-xs font-semibold text-gray-700">Évolution mensuelle</div>
                            <div className="text-xs text-gray-500">6 mois</div>
                          </div>
                          <div className="h-16 relative">
                            <svg className="w-full h-full" viewBox="0 0 200 50" preserveAspectRatio="none">
                              {/* Grille */}
                              {[0, 12.5, 25, 37.5, 50].map((y) => (
                                <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#e5e7eb" strokeWidth="0.5" />
                              ))}
                              {/* Ligne de tendance */}
                              <polyline
                                points="10,40 30,35 50,30 70,28 90,25 110,22 130,20 150,18 170,15 190,12"
                                fill="none"
                                stroke="#83F0C8"
                                strokeWidth="2.5"
                                className="transition-all duration-1000"
                              />
                              {/* Points */}
                              {[10, 30, 50, 70, 90, 110, 130, 150, 170, 190].map((x, i) => (
                                <circle
                                  key={i}
                                  cx={x}
                                  cy={40 - i * 3}
                                  r="2.5"
                                  fill="#83F0C8"
                                  stroke="white"
                                  strokeWidth="1"
                                  className="transition-all duration-1000"
                                />
                              ))}
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Visuel Reporter amélioré */}
                    <div className={`transition-all duration-500 ease-in-out ${activeStep === 2 ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-4 scale-95 absolute pointer-events-none w-full top-0 left-0'}`}>
                      <div className="bg-gradient-to-br from-[#3F2F8D]/10 to-[#6F5DE9]/10 rounded-xl p-6 border-2 border-[#3F2F8D]/30 h-full shadow-lg">
                        {/* Header amélioré */}
                        <div className="mb-4 pb-3 border-b border-gray-200">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-[#3F2F8D]/20 rounded-xl flex items-center justify-center">
                              <FileText className="w-6 h-6 text-[#3F2F8D]" />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-[#344054]">Reporting conforme et traçable</h4>
                              <p className="text-xs text-gray-600">CSRD / ESRS / Taxonomie</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="w-2 h-2 rounded-full bg-[#83F0C8]"></div>
                            <span className="text-xs text-[#83F0C8] font-semibold">Prêt pour audit</span>
                          </div>
                        </div>
                        
                        {/* Rapports avec détails améliorés */}
                        <div className="space-y-3 mb-4">
                          {[
                            { report: "CSRD", progress: 100, status: "Complet", sections: 12, color: "#3F2F8D" },
                            { report: "ESRS", progress: 95, status: "En cours", sections: 10, color: "#6F5DE9" },
                            { report: "Taxonomie", progress: 100, status: "Complet", sections: 8, color: "#beb2ff" }
                          ].map((item, i) => (
                            <div key={i} className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-4 border-2 border-gray-200 hover:border-[#3F2F8D] transition-all shadow-sm hover:shadow-md">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-[#3F2F8D]/20 to-[#6F5DE9]/20 rounded-lg flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-[#3F2F8D]" />
                                  </div>
                                  <div>
                                    <span className="text-sm font-bold text-gray-700">{item.report}</span>
                                    <div className="text-xs text-gray-500">{item.sections} sections</div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CheckCircle2 className="w-5 h-5 text-[#83F0C8]" />
                                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                                    item.status === "Complet" ? 'bg-[#83F0C8]/20 text-[#83F0C8]' : 'bg-[#beb2ff]/20 text-[#beb2ff]'
                                  }`}>
                                    {item.status}
                                  </span>
                                </div>
                              </div>
                              <div className="relative">
                                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                                  <div 
                                    className="h-2.5 bg-gradient-to-r from-[#3F2F8D] to-[#6F5DE9] rounded-full transition-all duration-1000 shadow-sm"
                                    style={{ width: `${item.progress}%` }}
                                  >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between mt-1">
                                  <span className="text-xs text-gray-500">Progression</span>
                                  <span className="text-xs font-bold text-[#3F2F8D]">{item.progress}%</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Statistiques de traçabilité */}
                        <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-4 border-2 border-[#83F0C8]/30 shadow-sm">
                          <div className="grid grid-cols-2 gap-4 mb-3">
                            <div>
                              <div className="text-xs text-gray-600 mb-1">Traçabilité</div>
                              <div className="text-2xl font-bold text-[#3F2F8D]">100%</div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-600 mb-1">Documentation</div>
                              <div className="text-2xl font-bold text-[#83F0C8]">98%</div>
                            </div>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full">
                            <div className="h-2 bg-gradient-to-r from-[#3F2F8D] to-[#83F0C8] rounded-full shadow-sm" style={{ width: "99%" }}></div>
                          </div>
                          <div className="mt-2 text-xs text-gray-500 text-center">Données documentées et auditables</div>
                        </div>
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

      {/* Section - Ce qui différencie Ekyo - Renforcé */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#beb2ff]/15 via-white to-[#83F0C8]/15 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#beb2ff]/40 to-transparent"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#344054] mb-4">
                Ce qui différencie Ekyo
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {differentiators.map((item, index) => {
              // Visualisations spécifiques pour chaque différenciateur
              const visualizations = [
                // ETI & groupes
                <div key="0" className="mt-4 bg-white rounded-lg p-4 border border-gray-200">
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {["ETI", "Groupes", "PME"].map((type, i) => (
                      <div key={i} className="bg-gradient-to-br from-[#beb2ff]/10 to-[#83F0C8]/10 rounded-lg p-2 text-center border border-gray-200">
                        <div className="text-xs font-semibold text-gray-700">{type}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">Organisations couvertes</span>
                    <span className="text-sm font-bold text-[#3F2F8D]">500+</span>
                  </div>
                </div>,
                // Simple & robuste
                <div key="1" className="mt-4 bg-white rounded-lg p-4 border border-gray-200">
                  <div className="space-y-2 mb-3">
                    {["Équipes", "Direction", "COMEX"].map((role, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-xs text-gray-700">{role}</span>
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-16 bg-gray-100 rounded-full">
                            <div className="h-1.5 bg-[#83F0C8] rounded-full" style={{ width: `${80 + i * 10}%` }}></div>
                          </div>
                          <span className="text-xs text-[#83F0C8] font-semibold">✓</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 text-center">Interface adaptée par rôle</div>
                </div>,
                // Fiabilité & traçabilité
                <div key="2" className="mt-4 bg-white rounded-lg p-4 border border-gray-200">
                  <div className="space-y-2 mb-3">
                    {[
                      { label: "Traçabilité", value: "100%" },
                      { label: "Documentation", value: "98%" },
                      { label: "Audit-ready", value: "100%" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-xs text-gray-700">{item.label}</span>
                        <span className="text-xs font-bold text-[#83F0C8]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-[#beb2ff] to-[#83F0C8] rounded-full" style={{ width: "99%" }}></div>
                  </div>
                </div>,
                // Multi-sites & multi-périmètres
                <div key="3" className="mt-4 bg-white rounded-lg p-4 border border-gray-200">
                  <div className="space-y-2 mb-3">
                    {["Entités", "Sites", "Périmètres"].map((type, i) => (
                      <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
                        <span className="text-xs text-gray-700">{type}</span>
                        <div className="flex items-center gap-2">
                          <Network className="w-4 h-4 text-[#83F0C8]" />
                          <span className="text-xs font-bold text-[#3F2F8D]">{i === 0 ? "12" : i === 1 ? "24" : "8"}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 text-center">Gestion centralisée</div>
                </div>
              ];
              
              return (
                <div key={index} className="relative card-elevated card-gradient rounded-2xl p-8 border-2 border-[#beb2ff]/30 hover:border-[#beb2ff]/60 transition-all group overflow-hidden shadow-violet hover:shadow-violet-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#beb2ff]/12 via-transparent to-[#83F0C8]/12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-4">
                      <div className="icon-container w-16 h-16 rounded-2xl bg-gradient-to-br from-[#83F0C8]/30 to-[#83F0C8]/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg shadow-green group-hover:shadow-xl group-hover:shadow-green-hover border-2 border-[#83F0C8]/30">
                        <CheckCircle2 className="w-8 h-8 text-[#83F0C8]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#344054] mb-3 group-hover:text-[#3F2F8D] transition-colors">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">{item.description}</p>
                      </div>
                    </div>
                    {visualizations[index]}
                  </div>
                  
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#beb2ff]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              );
            })}
            </div>
            <div className="mt-10 md:mt-12 text-center max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-gray-700 italic">
                Notre conviction : la performance extra-financière doit être pilotée avec le même niveau d'exigence que la performance financière.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Métriques / Preuves sociales - Renforcé */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#3F2F8D]/12 via-white to-[#beb2ff]/12 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3F2F8D]/30 to-transparent"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#344054] mb-4">
                Ekyo en chiffres
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Une plateforme éprouvée par des organisations de toutes tailles
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { value: "500+", label: "Organisations", icon: Network, color: "#3F2F8D" },
                { value: "2M+", label: "Données tracées", icon: Database, color: "#6F5DE9" },
                { value: "99.9%", label: "Uptime", icon: Shield, color: "#83F0C8" },
                { value: "100%", label: "Audit-ready", icon: CheckCircle2, color: "#beb2ff" }
              ].map((metric, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#beb2ff]/50 transition-all shadow-lg hover:shadow-xl hover-lift text-center">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${metric.color}18` }}>
                    <metric.icon className="w-8 h-8" style={{ color: metric.color }} />
                  </div>
                  <div className="text-4xl font-bold text-[#344054] mb-2" style={{ color: metric.color }}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Optimisé */}
      <section className="py-20 md:py-32 pb-28 md:pb-32 section-background bg-gradient-to-br from-[#beb2ff]/10 via-white to-[#83F0C8]/10 relative overflow-hidden">
        {/* Pas de pattern pour alterner avec la section précédente */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#beb2ff]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#83F0C8]/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#344054] mb-4 sm:mb-6">
              Prêt à piloter votre performance extra-financière ?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              Nous adaptons la démonstration à votre contexte et à votre organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?intent=demo"
                className="bg-[#3F2F8D] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#3F2F8D]/20"
                aria-label="Demander une démonstration personnalisée d'Ekyo"
              >
                Demander une démo personnalisée
                <ArrowRight className="ml-2" size={20} aria-hidden="true" />
              </Link>
              <Link
                href="/contact?intent=expert"
                className="bg-white text-[#3F2F8D] border-2 border-[#3F2F8D] px-8 py-4 rounded-lg font-semibold hover:bg-[#3F2F8D]/5 transition-all inline-flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#3F2F8D]/20"
                aria-label="Échanger avec un expert Ekyo"
              >
                Échanger avec un expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg z-40 md:hidden">
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

const differentiators = [
  {
    title: "Pensé pour les ETI & groupes",
    description: "Une plateforme adaptée aux besoins spécifiques des entreprises de taille intermédiaire et des groupes.",
  },
  {
    title: "Simple pour les équipes — robuste pour la direction",
    description: "Une interface intuitive pour les utilisateurs quotidiens, avec la puissance nécessaire pour le pilotage stratégique.",
  },
  {
    title: "Fiabilité et traçabilité des données",
    description: "Des données fiables, tracées et documentées pour garantir la crédibilité de votre reporting.",
  },
  {
    title: "Adapté au multi-sites et multi-périmètres",
    description: "Gérez plusieurs entités, sites et périmètres depuis une plateforme centralisée.",
  },
];

const useCases = [
  {
    title: "Pilotage ESG & Performance",
    kicker: "Pilotage & gouvernance",
    headline: "Transformez l'ESG en levier de pilotage et de performance",
    short: "Enjeux, KPIs, plans d'actions, gouvernance et visibilité COMEX.",
    long: "Priorisez vos enjeux, définissez vos objectifs, suivez vos indicateurs et pilotez les plans d'actions — avec une gouvernance claire et des tableaux de bord direction.",
    bullets: [
      {
        text: "Matérialité & priorisation des enjeux",
        preview: {
          title: "Matérialité & priorisation",
          description: "Identifiez et hiérarchisez vos enjeux ESG selon leur impact financier et extra-financier.",
          items: ["Analyse de double matérialité", "Priorisation par parties prenantes", "Cartographie des enjeux"],
        },
      },
      {
        text: "KPIs ESG & climat",
        preview: {
          title: "KPIs ESG & climat",
          description: "Suivez vos indicateurs clés avec des objectifs mesurables et comparables.",
          items: ["Bibliothèque d'indicateurs", "Objectifs et cibles", "Suivi temporel"],
        },
      },
      {
        text: "Plans d'actions (ownership & échéances)",
        preview: {
          title: "Plans d'actions",
          description: "Pilotez vos initiatives avec des responsables identifiés et des échéances claires.",
          items: ["Attribution des responsabilités", "Jalons et deadlines", "Suivi d'avancement"],
        },
      },
      {
        text: "Tableaux de bord direction",
        preview: {
          title: "Tableaux de bord direction",
          description: "Donnez à votre COMEX une visibilité synthétique sur la performance ESG.",
          items: ["Vue consolidée groupe", "Alertes et tendances", "Export COMEX"],
        },
      },
    ],
    href: "/solutions/pilotage-esg-performance",
    accent: "#3F2F8D",
    icon: Target,
  },
  {
    title: "Gouvernance & pilotage stratégique",
    kicker: "Gouvernance stratégique",
    headline: "Structurez votre gouvernance ESG et pilotez la stratégie à tous les niveaux",
    short: "Référentiel commun, consolidation automatique, gouvernance locale et vision groupe.",
    long: "Harmonisez vos pratiques ESG à l'échelle du groupe, consolidez automatiquement les données et pilotez une gouvernance claire — du local au niveau stratégique.",
    bullets: [
      {
        text: "Référentiel commun groupe",
        preview: {
          title: "Référentiel groupe",
          description: "Un cadre commun pour harmoniser les pratiques ESG de toutes vos entités.",
          items: ["Indicateurs standardisés", "Méthodologies partagées", "Nomenclatures communes"],
        },
      },
      {
        text: "Collecte locale → consolidation automatique",
        preview: {
          title: "Collecte & consolidation",
          description: "Les entités saisissent localement, la consolidation se fait automatiquement.",
          items: ["Saisie décentralisée", "Agrégation automatique", "Contrôles de cohérence"],
        },
      },
      {
        text: "Rôles & droits avancés",
        preview: {
          title: "Rôles & droits",
          description: "Gérez finement qui peut voir et modifier quoi dans la plateforme.",
          items: ["Profils utilisateurs", "Droits par entité", "Validation hiérarchique"],
        },
      },
      {
        text: "Vision par entité / BU / périmètre",
        preview: {
          title: "Vision multi-périmètres",
          description: "Analysez vos données à tous les niveaux de votre organisation.",
          items: ["Vue par entité", "Agrégation par BU", "Filtres dynamiques"],
        },
      },
    ],
    href: "/solutions/groupes-organisations-multi-entites",
    accent: "#6F5DE9",
    icon: Shield,
  },
  {
    title: "CSRD & Reporting durable",
    kicker: "Reporting structuré & pilotage",
    headline: "Préparez, structurez et sécurisez votre reporting extra-financier pour en faire un véritable outil de pilotage.",
    short: "CSRD / ESRS / Taxonomie, avec traçabilité et auditabilité complètes.",
    long: "Structurez le reporting de durabilité à l'échelle du groupe, consolidez les données ESG et climat, et préparez l'audit avec un niveau d'exigence compatible investisseurs, sans transformer votre organisation en usine à reporting.",
    bullets: [
      {
        text: "Suivi des exigences CSRD / ESRS sans dispersion des équipes",
        preview: {
          title: "Suivi CSRD / ESRS",
          description: "Centralisez le suivi des exigences réglementaires sans multiplier les outils.",
          items: ["Bibliothèque ESRS complète", "Points de données structurés", "Suivi par norme"],
        },
      },
      {
        text: "Traçabilité & preuves (audit-trail) pour un audit maîtrisé",
        preview: {
          title: "Traçabilité & audit-trail",
          description: "Chaque donnée est documentée avec son origine et son historique de modifications.",
          items: ["Journal des preuves", "Historique des modifications", "Pièces justificatives"],
        },
      },
      {
        text: "Versioning & préparation audit sans stress de dernière minute",
        preview: {
          title: "Versioning & audit",
          description: "Gérez les versions de votre reporting et préparez sereinement les audits.",
          items: ["Historique des versions", "Comparaison N/N-1", "Export audit-ready"],
        },
      },
      {
        text: "Consolidation multi-entités pour une vision groupe cohérente",
        preview: {
          title: "Consolidation groupe",
          description: "Agrégez automatiquement les données de toutes vos entités.",
          items: ["Consolidation automatique", "Règles de périmètre", "Vue groupe unifiée"],
        },
      },
    ],
    href: "/solutions/csrd-reporting-durable",
    accent: "#beb2ff",
    icon: FileText,
  },
  {
    title: "Climat & Empreinte carbone",
    kicker: "Climat & décarbonation",
    headline: "Mesurez, pilotez et réduisez vos émissions — organisation & produits",
    short: "Scopes 1/2/3, Scope 3 simplifié, et empreinte carbone produit (PCF).",
    long: "Mesurez vos émissions à partir de données financières et opérationnelles, pilotez vos trajectoires et suivez vos plans d'actions. Intégrez aussi l'empreinte carbone produit pour répondre aux exigences marché.",
    bullets: [
      {
        text: "Scopes 1 / 2 / 3 + chaîne de valeur",
        preview: {
          title: "Scopes 1, 2 & 3",
          description: "Mesurez l'ensemble de vos émissions directes et indirectes.",
          items: ["Émissions directes (scope 1)", "Énergie (scope 2)", "Chaîne de valeur (scope 3)"],
        },
      },
      {
        text: "Connexion FEC / factures / activité",
        preview: {
          title: "Connexion données sources",
          description: "Importez vos données depuis vos systèmes existants.",
          items: ["Import FEC automatisé", "Lecture factures", "Données d'activité"],
        },
      },
      {
        text: "Trajectoires & scénarios climat",
        preview: {
          title: "Trajectoires climat",
          description: "Définissez vos objectifs de réduction et simulez différents scénarios.",
          items: ["Objectifs SBTi", "Scénarios de réduction", "Suivi des progrès"],
        },
      },
      {
        text: "Empreinte carbone produit (PCF)",
        preview: {
          title: "Empreinte produit (PCF)",
          description: "Calculez l'empreinte carbone de vos produits pour répondre aux exigences marché.",
          items: ["Cycle de vie produit", "Données fournisseurs", "Étiquetage carbone"],
        },
      },
    ],
    href: "/solutions/climat-empreinte-carbone",
    accent: "#83F0C8",
    icon: TrendingDown,
  },
];

const auditReady = [
  {
    title: "Audit-trail",
    desc: "Historique complet et preuves associées.",
    icon: Shield,
    accent: "#3F2F8D",
  },
  {
    title: "Versioning",
    desc: "Suivi des versions et des validations.",
    icon: Layers,
    accent: "#6F5DE9",
  },
  {
    title: "Consolidation groupe",
    desc: "Multi-entités, périmètres et droits.",
    icon: Network,
    accent: "#83F0C8",
  },
];
