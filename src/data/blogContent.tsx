// Contenu complet des articles de blog
import React from "react";
import { createStructuredContent } from "@/utils/articleParser";

// Fonction helper pour créer du contenu structuré
export const createArticleContent = (content: {
  introduction?: string;
  sections?: Array<{
    title: string;
    level?: 1 | 2 | 3 | 4;
    paragraphs?: string[];
    list?: string[];
    table?: Array<Array<string>>;
  }>;
  conclusion?: string;
}): React.ReactNode => {
  return (
    <div className="space-y-8">
      {content.introduction && (
        <p className="text-xl text-gray-600 leading-relaxed">{content.introduction}</p>
      )}
      
      {content.sections?.map((section, index) => (
        <div key={index} className="space-y-4">
          {section.title && (
            section.level === 1 ? (
              <h2 className="text-3xl font-bold text-[#344054] mt-12 mb-6">{section.title}</h2>
            ) : section.level === 2 ? (
              <h3 className="text-2xl font-bold text-[#344054] mt-10 mb-4">{section.title}</h3>
            ) : (
              <h4 className="text-xl font-bold text-[#344054] mt-8 mb-3">{section.title}</h4>
            )
          )}
          
          {section.paragraphs?.map((para, pIndex) => (
            <p key={pIndex} className="text-gray-700 leading-relaxed">
              {para}
            </p>
          ))}
          
          {section.list && (
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {section.list.map((item, lIndex) => (
                <li key={lIndex} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          )}
          
          {section.table && (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border-2 border-gray-300 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-[#3F2F8D] to-[#6F5DE9] text-white">
                    {section.table[0]?.map((header, hIndex) => (
                      <th key={hIndex} className="border-2 border-gray-300 px-4 py-3 text-left font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.slice(1).map((row, rIndex) => (
                    <tr key={rIndex} className={rIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      {row.map((cell, cIndex) => (
                        <td key={cIndex} className="border-2 border-gray-300 px-4 py-3 text-gray-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
      
      {content.conclusion && (
        <div className="mt-8 p-6 bg-gradient-to-br from-[#beb2ff]/10 to-[#83F0C8]/10 rounded-xl border-2 border-[#beb2ff]/30">
          <p className="text-gray-700 leading-relaxed">{content.conclusion}</p>
        </div>
      )}
    </div>
  );
};

// Contenu des articles - à compléter avec tous les articles
// Le contenu sera récupéré progressivement depuis le site d'origine
export const blogContent: Record<string, React.ReactNode> = {
  "synthese-impact-des-simplifications-omnibus-i-sur-le-reporting-csrd": createArticleContent({
    introduction: "Les ajustements introduits par le paquet Omnibus I et les ESRS simplifiés ont des implications concrètes sur la préparation du reporting de durabilité des entreprises européennes :",
    sections: [
      {
        title: "1. Seuil d'éligibilité (CSRD/CSDDD) : qui est concerné ?",
        level: 3,
        table: [
          ["Réglementation", "Seuil Omnibus I (Accords Provisoires)", "Implication directe pour l'entreprise"],
          [
            "Publication Durabilité (CSRD)",
            "+ 1 000 employés et + 450 M€ de Chiffre d'Affaires net (CA net).",
            "Le relèvement du seuil provoque un soulagement réglementaire immédiat pour de nombreuses ETI et PME, les exemptant de l'obligation légale de se conformer à la CSRD pour l'instant."
          ],
          [
            "Devoir de Vigilance (CSDDD)",
            "+ 5 000 employés et + 1,5 Md€ de CA net.",
            "La CSDDD se concentre uniquement sur les très grandes entreprises. Les entreprises non soumises au devoir de vigilance sont protégées contre les exigences d'informations inutiles de la part de leurs clients dans le champ d'application."
          ]
        ],
        paragraphs: [
          "Rappel pour les PME : les entreprises de moins de 1 000 employés peuvent refuser de communiquer des informations au-delà de ce qui est prévu par les normes volontaires VSME."
        ]
      },
      {
        title: "2. Contenu du reporting (ESRS) : ce qui change vraiment",
        level: 3,
        table: [
          ["Point de simplification", "Implication directe", "Impact sur la préparation du reporting"],
          [
            "Réduction de 61 % des points de données",
            "Moins de données à collecter et à divulguer. Suppression des informations purement volontaires.",
            "Réduction significative de la charge de travail. Permet de se concentrer sur la qualité des données restantes plutôt que sur la quantité."
          ],
          [
            "Simplification de l'analyse de double matérialité",
            "Processus plus clair et aligné sur l'audit. Recentrage sur l'utilité de l'information.",
            "Moins de temps et de ressources consacrés à la phase d'évaluation. Aide à mieux cibler les enjeux de durabilité cruciaux."
          ],
          [
            "Flexibilité sur la chaîne de valeur",
            "Utilisation possible des estimations et des données génériques/sectorielles.",
            "Allègement de la pression sur les fournisseurs (souvent PME). Accélère la compilation des données complexes (ex. : Scope 3)."
          ],
          [
            "Interopérabilité avec l'ISSB",
            "Meilleure convergence sur des thèmes clés.",
            "Optimisation du reporting pour les entreprises multinationales, évitant de dupliquer le travail pour différents cadres."
          ]
        ],
        paragraphs: [
          "Prochaine étape : La Commission européenne va maintenant préparer l'Acte Délégué révisant le premier ensemble d'ESRS sur la base de l'avis technique de l'EFRAG."
        ]
      },
      {
        title: "3. Implications stratégiques clés",
        level: 3,
        list: [
          "Réallocation des ressources : les efforts peuvent être redirigés vers la gouvernance des données et les contrôles internes plutôt que vers la collecte massive de datapoints, augmentant la fiabilité des données publiées.",
          "Focus stratégique : l'entreprise est encouragée à utiliser l'évaluation de matérialité comme un filtre puissant pour ne publier que ce qui est pertinent (matériel) pour les parties prenantes, transformant ainsi le reporting en un outil de communication stratégique.",
          "Compétitivité : la réduction des coûts de conformité pour les entreprises qui restent dans le champ d'application devient un élément de compétitivité.",
          "Digitalisation (soutien de la Commission) : la Commission créera un portail numérique avec des modèles et des lignes directrices pour faciliter l'accès aux exigences de publication. Ceci est un signal fort de l'engagement à réduire l'effort administratif."
        ]
      },
      {
        title: "4. Dates clés :",
        level: 3,
        paragraphs: [
          "Le mardi 16 décembre, le Parlement européen a définitivement approuvé le paquet Omnibus I, confirmant ainsi l'accord conclu le 9 décembre avec le Conseil.",
          "Mi-2026 – Adoption par la Commission de l'Acte Délégué révisant les ESRS. Les normes deviennent officielles et juridiquement contraignantes."
        ]
      },
      {
        title: "Conclusion et accompagnement :",
        level: 3,
        paragraphs: [
          "Ces simplifications réglementaires confirment notre approche : face au contexte évolutif, nous vous accompagnons pour structurer votre démarche de durabilité de manière plus simple et plus efficace. Notre objectif est de transformer les exigences complexes du reporting CSRD en un processus clair et pilotable pour votre entreprise."
        ]
      }
    ]
  }),
  
  "du-daf-au-directeur-de-la-valeur": createArticleContent({
    introduction: "Les directions financières voient leur rôle se transformer à mesure que les critères ESG s'imposent comme un levier de performance nécessaire pour garantir la pérennité des opérations d'une organisation.",
    sections: [
      {
        title: "Une transformation du rôle du DAF",
        level: 2,
        paragraphs: [
          "En 2025, le directeur financier ne se limite plus à la gestion des flux ; il doit orchestrer la création de valeur dans toutes ses dimensions : économique, environnementale et sociale.",
          "Dans un entretien pour Daf-Mag.fr, Baptiste Dif, Directeur général d'Ekyo, explique ce changement de paradigme dans la gestion de la performance globale de l'organisation :"
        ],
        highlight: "« Le directeur financier doit cesser de subir le sujet de la durabilité. Son rôle traditionnel d'arbitrage avec un prisme financier s'applique désormais à la performance extra-financière : identification des risques, évaluation de leur coût, puis arbitrage sur les plans de remédiation. »"
      },
      {
        title: "La donnée comme pierre angulaire",
        level: 2,
        paragraphs: [
          "Pour y parvenir, la donnée s'impose comme la pierre angulaire de cette transformation. Structurer et fiabiliser les indicateurs extra-financiers à partir des systèmes comptables existants permet d'intégrer la durabilité dans le pilotage quotidien, sans complexifier les processus. Le directeur financier devient alors moteur dans la conduite du changement durable d'une organisation.",
          "Consultez l'article dans son intégralité ici."
        ]
      }
    ]
  }),
  
  "ekyo-est-leader-des-solutions-esg-par-exaegis-markess": createArticleContent({
    introduction: "Nous sommes fiers d'annoncer qu'Ekyo a été désigné comme leader sur le marché de solutions ESG par le Blueprint® 2025, référence incontournable dans l'évaluation des solutions digitales en France. Ce nouveau cap vient récompenser une ambition claire : rendre la performance durable aussi lisible et pilotable que la performance financière.",
    sections: [
      {
        title: "Ekyo reconnu comme leader des solutions ESG par Exaegis Markess",
        level: 2,
        paragraphs: [
          "Comme le souligne Baptiste Dif, Directeur Général d'Ekyo :"
        ],
        highlight: "Aujourd'hui, nous observons chez nos clients un défi majeur : intégrer les enjeux carbone et ESG dans leurs décisions stratégiques au même titre que les indicateurs financiers.",
        paragraphs: [
          "Face à un contexte en perpétuelle évolution, entre réglementations européennes (CSRD, VSME), attentes des parties prenantes, et urgence climatique, les entreprises doivent pouvoir s'appuyer sur des outils fiables, simples et robustes."
        ]
      },
      {
        title: "Une réponse concrète aux nouveaux défis ESG",
        level: 2,
        paragraphs: [
          "Ekyo accompagne plus de 200 organisations (Deezer, In Extenso, Groupe Vyv, Arcade Beauty…) dans leur transition durable grâce à sa plateforme SaaS intuitive et collaborative.",
          "Deux modules pour couvrir l'ensemble des enjeux extra-financiers :"
        ],
        list: [
          "Ekyo CSR : Conformité CSRD & VSME, analyse de double matérialité, pilotage ESG.",
          "Ekyo Carbon : Réalisez votre Bilan Carbone® (scopes 1-2-3), structurez vos plans d'action et suivez votre trajectoire de décarbonation."
        ],
        paragraphs: [
          "Notre solution permet de :",
          "✅ Centraliser et fiabiliser les données ESG",
          "✅ Réduire par 4 le temps consacré au reporting",
          "✅ Modéliser l'impact ESG des décisions stratégiques",
          "✅ Créer de la valeur durable"
        ]
      },
      {
        title: "Une reconnaissance du marché et des partenaires clés",
        level: 2,
        paragraphs: [
          "Le partenariat exclusif d'Ekyo avec Sage, leader mondial des solutions de comptabilité et de gestion, valide la robustesse de notre offre et sa pertinence dans le paysage numérique européen.",
          "Nicolas Beyer, Directeur de la Recherche Exaegis Markess souligne « Avec Ekyo, les utilisateurs Sage disposent d'un outil de reporting RSE nativement connecté à leur ERP, appuyé par un important réseau de partenaires formés pour les accompagner. »"
        ]
      },
      {
        title: "Et la suite ?",
        level: 2,
        paragraphs: [
          "Ekyo accélère le développement de fonctionnalités d'aide à la décision avancées. Objectif : permettre aux entreprises de comparer projets et investissements selon un double prisme financier et environnemental, avec un indicateur clé : le Return On Planet.",
          "Cela passe par une automatisation poussée de la collecte et de l'analyse ESG, pour rendre ces données :"
        ],
        list: [
          "Plus accessibles,",
          "Plus fiables,",
          "Et directement intégrables à la stratégie business."
        ],
        paragraphs: [
          "Une ambition forte : aider les ETI et PME à rester compétitives dans un monde en transition.",
          "Intégré au groupe Constellation, Ekyo se positionne comme un acteur montant des solutions ESG, couvrant la mesure Carbone, le reporting et le pilotage RSE."
        ]
      },
      {
        title: "Prêt à transformer vos obligations ESG en avantage stratégique ?",
        level: 2,
        paragraphs: [
          "Ekyo vous permet de piloter vos engagements RSE et vos émissions carbone avec simplicité, rigueur et efficacité ! Nous pouvons vous accompagner dès aujourd'hui, discutons ensemble de vos enjeux."
        ]
      }
    ]
  })
};
