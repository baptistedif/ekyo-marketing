"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Sparkles, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#fcfcfd] via-white to-[#beb2ff]/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="absolute inset-0 bg-radial-gradient"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/10 border border-[#beb2ff]/20 mb-8 shadow-sm animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#beb2ff]" />
              <span className="text-sm font-semibold text-[#beb2ff]">
                Ressources & Actualités
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#344054] mb-6 leading-tight animate-slide-up">
              Nos actualités
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-1000">
              Découvrez nos articles de blog, études de cas et actualités sur le climat et la performance ESG.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm text-gray-600 animate-scale-in">
              <span className="font-medium">{blogPosts.length} articles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {currentPosts.map((post, index) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#beb2ff] transition-all hover:shadow-xl group hover-lift card-elevated animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="h-48 bg-gradient-to-br from-[#beb2ff]/20 via-[#83F0C8]/20 to-[#3F2F8D]/20 group-hover:scale-105 transition-transform relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#3F2F8D] opacity-0 group-hover:opacity-100 transition-opacity">
                      Lire
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 gap-4 flex-wrap">
                    <div className="flex items-center gap-2 px-2 py-1 bg-gray-50 rounded-lg">
                      <Calendar className="w-4 h-4 text-[#3F2F8D]" />
                      <span className="font-medium">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 bg-gray-50 rounded-lg">
                      <Clock className="w-4 h-4 text-[#83F0C8]" />
                      <span className="font-medium">{post.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold text-[#344054] mb-3 group-hover:text-[#3F2F8D] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#3F2F8D] font-semibold inline-flex items-center hover:text-[#4c30d6] group-hover:gap-2 transition-all"
                  >
                    Lire la suite
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border-2 border-gray-200 bg-white text-gray-700 hover:border-[#beb2ff] hover:text-[#3F2F8D] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 font-medium"
              >
                <ChevronLeft className="w-4 h-4" />
                Précédent
              </button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-lg border-2 font-semibold transition-all min-w-[44px] ${
                          currentPage === page
                            ? "bg-[#3F2F8D] text-white border-[#3F2F8D] shadow-lg"
                            : "bg-white text-gray-700 border-gray-200 hover:border-[#beb2ff] hover:text-[#3F2F8D]"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <span key={page} className="px-2 text-gray-400">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border-2 border-gray-200 bg-white text-gray-700 hover:border-[#beb2ff] hover:text-[#3F2F8D] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 font-medium"
              >
                Suivant
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Page info */}
          <div className="text-center mt-8 text-sm text-gray-500">
            Page {currentPage} sur {totalPages} • {currentPosts.length} article{currentPosts.length > 1 ? "s" : ""} affiché{currentPosts.length > 1 ? "s" : ""}
          </div>
        </div>
      </section>
    </>
  );
}

export const blogPosts = [
  {
    title: "Synthèse : Impact des simplifications Omnibus I sur le reporting CSRD",
    excerpt: "Les ajustements introduits par le paquet Omnibus I et les ESRS simplifiés ont des implications concrètes sur la préparation du reporting de durabilité des entreprises européennes.",
    date: "17/12/2025",
    slug: "synthese-impact-des-simplifications-omnibus-i-sur-le-reporting-csrd",
    readTime: "4 min",
  },
  {
    title: "Du DAF au directeur de la valeur : une transformation au service de la performance globale",
    excerpt: "Les directions financières voient leur rôle se transformer à mesure que les critères ESG s'imposent comme un levier de performance nécessaire pour garantir la pérennité des opérations d'une organisation.",
    date: "14/11/2025",
    slug: "du-daf-au-directeur-de-la-valeur",
    readTime: "2 min",
  },
  {
    title: "Ekyo est leader des solutions ESG par Exaegis Markess",
    excerpt: "Nous sommes fiers d'annoncer qu'Ekyo a été désigné comme leader sur le marché de solutions ESG par le Blueprint® 2025, référence incontournable dans l'évaluation des solutions digitales en France.",
    date: "21/05/2025",
    slug: "ekyo-est-leader-des-solutions-esg-par-exaegis-markess",
    readTime: "3 min",
  },
  {
    title: "Webinaire | Pilotez votre stratégie ESG : les clés d'une réussite collective",
    excerpt: "Un Bilan Carbone® réussi, ce n'est pas qu'une affaire de collecte de données. C'est avant tout un projet collectif qui mobilise des fonctions diverses au sein de votre entreprise.",
    date: "21/05/2025",
    slug: "webinaire-pilotez-votre-strategie-esg-les-cles-dune-reussite-collective",
    readTime: "1 min",
  },
  {
    title: "Étude-Benchmark des logiciels RSE/ESG par AdVaes",
    excerpt: "Le 20 mai 2025, AdVaes publie une étude benchmark pour évaluer le secteur des logiciels RSE/ESG. Dans cette étude, AdVaes analyse une centaine d'acteurs du numérique/éditeurs de logiciels.",
    date: "20/05/2025",
    slug: "etude-benchmark-des-logiciels-rse-esg-par-advaes",
    readTime: "1 min",
  },
  {
    title: "VSME : 9 arguments clés pour convaincre votre Direction",
    excerpt: "Depuis l'adoption du projet de loi OMNIBUS, la CSRD concerne moins d'entreprises qu'initialement prévu. Résultat : dans de nombreuses ETI et PME, la stratégie RSE n'est plus une priorité.",
    date: "13/05/2025",
    slug: "vsme-9-arguments-cles-pour-convaincre-votre-direction",
    readTime: "4 min",
  },
  {
    title: "Ekyo, partenaire de Move For Climate! 2025",
    excerpt: "Chez Ekyo, nous sommes ravis et fiers de renouveler notre engagement en tant que partenaire de Move For Climate 2025 ! Après une première participation qui a marqué les esprits, nous sommes de retour pour une édition qui s'annonce encore plus ambitieuse.",
    date: "29/04/2025",
    slug: "ekyo-partenaire-de-move-for-climate-2025",
    readTime: "4 min",
  },
  {
    title: "Tout savoir sur le VSME : un outil clé pour votre stratégie RSE",
    excerpt: "Le VSME, ou Voluntary Sustainability and Management Report, est un rapport volontaire permettant aux entreprises de structurer et de communiquer leurs engagements en matière de durabilité et de gouvernance.",
    date: "10/04/2025",
    slug: "tout-savoir-sur-le-vsme-un-outil-cle-pour-votre-strategie-rse",
    readTime: "5 min",
  },
  {
    title: "Ekyo sur BFM Business : la solution pour simplifier le reporting ESG",
    excerpt: "Et si le reporting extra-financier était un levier stratégique pour toutes les entreprises ? Chez Ekyo, nous avons une conviction : le reporting extra-financier ne doit pas être une contrainte, mais un moteur de performance durable.",
    date: "07/04/2025",
    slug: "ekyo-sur-bfm-business",
    readTime: "2 min",
  },
  {
    title: "Capital Banking Solutions structure sa stratégie climat avec Ekyo",
    excerpt: "Capital Banking Solutions, éditeur international de logiciels bancaires intégrés, a structuré son Bilan Carbone grâce à la solution Ekyo et à l'accompagnement du cabinet de conseil StelR.",
    date: "03/04/2025",
    slug: "capital-banking-solutions-structure-sa-strategie-climat-avec-ekyo",
    readTime: "5 min",
  },
  {
    title: "Webinaire | CSRD : ne subissez pas le changement, tirez-en parti !",
    excerpt: "Les récentes annonces autour de la CSRD confirment la volonté de simplifier la conformité et le reporting pour en faire un levier de compétitivité et répondre aux attentes croissantes des investisseurs.",
    date: "25/03/2025",
    slug: "webinaire-csrd-ne-subissez-pas-le-changement-tirez-en-parti",
    readTime: "1 min",
  },
  {
    title: "Webinaire Sage X Ekyo : CSRD, VSME et comptabilité carbone",
    excerpt: "PME et durabilité: restez dans la course ! L'incertitude plane sur la CSRD pour les PME, mais une chose est sûre : les entreprises qui anticipent les enjeux de durabilité sont celles qui gagnent en résilience et compétitivité.",
    date: "24/03/2025",
    slug: "webinaire-sage-x-ekyo-csrd-vsme-et-comptabilite-carbone",
    readTime: "1 min",
  },
  {
    title: "Bilan Carbone industrie textile : Comment Fremaux Delorme utilise la solution Ekyo",
    excerpt: "Fremaux Delorme, acteur international majeur du textile de luxe français, est présent dans plus de 70 pays et sur 5 continents. Le groupe a fait le choix de la plateforme Ekyo pour réaliser et piloter le Bilan Carbone.",
    date: "11/03/2025",
    slug: "bilan-carbone-industrie-textile-fremaux-delorme",
    readTime: "5 min",
  },
  {
    title: "CSRD, Loi Omnibus et reporting ESG : comment s'adapter efficacement ?",
    excerpt: "Le 26 février dernier, la Commission européenne rendait son premier verdict sur la loi OMNIBUS. La loi Omnibus est une révision globale de plusieurs réglementations européennes en matière de reporting de durabilité.",
    date: "03/03/2025",
    slug: "csrd-loi-omnibus-et-reporting-esg-comment-sadapter",
    readTime: "5 min",
  },
  {
    title: "Suppression de la CSRD : quelles sont les conséquences ?",
    excerpt: "Le lundi 20 janvier, Stéphane Séjourné a jeté un pavé dans la mare. À l'occasion du « Blue Monday », il a annoncé une décision choc : la suppression de la CSRD « dans son état actuel ».",
    date: "27/01/2025",
    slug: "la-csrd-est-elle-vouee-a-lechec",
    readTime: "3 min",
  },
  {
    title: "Retour d'expérience – Le Bilan Carbone d'une mutuelle de santé",
    excerpt: "Au début de l'année 2025, nous avons interrogé Anne-Lise Bernard, Responsable Marque Employeur, communication interne et RSE chez M comme Mutuelle sur la réalisation de son Bilan Carbone avec Ekyo.",
    date: "21/01/2025",
    slug: "retour-dexperience-le-bilan-carbone-dune-mutuelle-de-sante",
    readTime: "8 min",
  },
  {
    title: "Glossaire CSRD",
    excerpt: "Le jargon à connaître pour votre reporting extra-financier. L'entrée en application de la Corporate Sustainability Reporting Directive (CSRD) en 2024 a ouvert la porte à un nouveau vocabulaire.",
    date: "20/01/2025",
    slug: "glossaire-csrd",
    readTime: "7 min",
  },
  {
    title: "Comment choisir le bon logiciel CSRD ?",
    excerpt: "Avec la CSRD (Corporate Sustainability Reporting Directive), plus de 50 000 entreprises européennes doivent désormais publier un rapport détaillé sur leur stratégie ESG (Environnement, Social et Gouvernance).",
    date: "06/01/2025",
    slug: "comment-choisir-le-bon-logiciel-csrd",
    readTime: "4 min",
  },
  {
    title: "Les IRO dans la CSRD : Définition et Enjeux Stratégiques",
    excerpt: "IRO et CSRD : pourquoi leur intégration est stratégique pour votre entreprise ? Le reporting ESG évolue avec la CSRD, une directive européenne qui impose aux entreprises de mieux rendre compte de leurs Impacts, Risques et Opportunités.",
    date: "06/12/2024",
    slug: "les-iro-dans-la-csrd-definition-et-enjeux-strategiques",
    readTime: "5 min",
  },
  {
    title: "Sage s'associe à Ekyo pour offrir un logiciel CSRD à ses clients",
    excerpt: "Ekyo et Sage s'associent pour guider les entreprises face aux exigences de la CSRD. Paris, le 5 décembre 2024. Ekyo, filiale du groupe Constellation, et éditeur de logiciel spécialisé dans le pilotage de la performance extra-financière annonce aujourd'hui un partenariat stratégique.",
    date: "05/12/2024",
    slug: "sage-sassocie-a-ekyo-pour-offrir-un-logiciel-csrd-a-ses-clients",
    readTime: "5 min",
  },
  {
    title: "La double matérialité en 3 étapes",
    excerpt: "Comment analyser sa double matérialité. Nous avons souhaité simplifier l'exercice réglementaire de la CSRD en commençant par l'analyse de la double matérialité. Cette étape stratégique consiste à analyser à la fois sa matérialité financière et sa matérialité d'impact.",
    date: "03/12/2024",
    slug: "double-materialite-en-3-etapes",
    readTime: "2 min",
  },
  {
    title: "Guide CSRD : Comprendre la norme européenne",
    excerpt: "Transformez la CSRD en un levier stratégique pour votre entreprise. Vous percevez la CSRD comme une contrainte réglementaire ? Vous souhaitez en savoir plus sur cette directive européenne et comprendre comment elle peut devenir un véritable atout pour votre stratégie.",
    date: "14/11/2024",
    slug: "guide-strategique-se-preparer-a-la-csrd",
    readTime: "6 min",
  },
  {
    title: "Aptiskills choisit Ekyo CSRD pour piloter sa stratégie ESG",
    excerpt: "AptiSkills choisit de collaborer avec Ekyo pour piloter sa stratégie ESG et fait partie des premiers utilisateurs du nouveau module Ekyo CSRD. Un grand merci pour leur confiance.",
    date: "28/10/2024",
    slug: "aptiskills-choisit-le-nouveau-module-dimpakt-ekyo-csrd-pour-piloter-sa-strategie-esg",
    readTime: "4 min",
  },
  {
    title: "Impakt se recentre sur l'édition de logiciels pour devenir Leader du pilotage de la performance extra-financière",
    excerpt: "Impakt, acteur innovant dans le domaine de la mesure et du pilotage de l'empreinte carbone annonce une réorientation stratégique en recentrant ses activités sur l'édition de logiciels.",
    date: "28/10/2024",
    slug: "impakt-se-recentre-sur-ledition-de-logiciels-pour-devenir-leader-du-pilotage-de-la-performance-extra-financiere",
    readTime: "3 min",
  },
  {
    title: "Comment choisir son outil de comptabilité carbone ?",
    excerpt: "Aujourd'hui, réaliser un Bilan Carbone® est devenu indispensable pour mesurer et réduire ses émissions de gaz à effet de serre (GES). Mais l'exercice reste complexe et peut être long à mettre en place.",
    date: "28/10/2024",
    slug: "comment-choisir-son-outil-de-comptabilite-carbone",
    readTime: "5 min",
  },
  {
    title: "Webinaire CSRD : Transformez une réglementation en une opportunité stratégique pour votre entreprise",
    excerpt: "Toutes les entreprises déjà soumises devront répondre à la CSRD et publier un rapport de durabilité sur l'année 2024. Ensuite, ce sera au tour des entreprises de plus de 250 salariés, puis les PME cotées en bourse.",
    date: "28/10/2024",
    slug: "webinaire-csrd-transformez-une-reglementation-en-une-opportunite-strategique-pour-votre-entreprise",
    readTime: "1 min",
  },
  {
    title: "Ekyo accompagne Picoty dans le pilotage de sa stratégie bas carbone",
    excerpt: "En parallèle de sa participation à Tech For Climate, l'entreprise Picoty vient renforcer sa stratégie bas carbone en signant un Bilan Carbone et un Plan d'action de réduction avec nos équipes.",
    date: "28/10/2024",
    slug: "picoty-choisit-ekyo-pour-son-bilan-carbone",
    readTime: "3 min",
  },
  {
    title: "Renforcer sa stratégie RSE : un pari gagnant pour votre business ?",
    excerpt: "Pourquoi investir dans la RSE en 2025 ? La Responsabilité Sociétale des Entreprises (RSE) n'est plus une option, mais un levier essentiel pour assurer la pérennité et la compétitivité de votre entreprise.",
    date: "28/10/2024",
    slug: "renforcer-sa-strategie-rse-un-pari-gagnant-pour-votre-business",
    readTime: "4 min",
  },
  {
    title: "Arcade Beauty partage les dessous de son Bilan Carbone",
    excerpt: "Spécialisé dans la création d'échantillons et de solutions de conditionnement pour les produits cosmétiques et parfums, Arcade Beauty est un fabricant mondial de premier plan pour l'industrie de la beauté.",
    date: "28/10/2024",
    slug: "arcade-beauty-partage-les-dessous-de-son-bilan-carbone-avec-impakt",
    readTime: "6 min",
  },
  {
    title: "Harmonie Mutuelle a choisi Ekyo pour sa stratégie climat",
    excerpt: "Il y a quelques semaines, nous avons interrogé Eva Bergier, Responsable Climat chez Harmonie Mutuelle sur la réalisation de son Bilan Carbone avec Impakt. Elle revient sur les grands défis de son entreprise.",
    date: "28/10/2024",
    slug: "bilan-carbone-dune-mutuelle-sante",
    readTime: "8 min",
  },
  {
    title: "Luminess choisit Ekyo pour réaliser son Bilan Carbone®",
    excerpt: "Leader de l'Intelligent Document Processing, le Groupe Luminess franchit une nouvelle étape dans son engagement pour le climat en collaborant avec Ekyo pour la réalisation d'un Bilan Carbone® complet.",
    date: "28/10/2024",
    slug: "luminess-choisit-ekyopour-son-bilan-carbone",
    readTime: "3 min",
  },
  {
    title: "Comprendre la double matérialité : un pilier essentiel de la CSRD",
    excerpt: "La Corporate Sustainability Reporting Directive (CSRD) introduit des exigences renforcées pour le reporting de durabilité des entreprises au sein de l'Union Européenne. Au cœur de cette directive se trouve le concept de double matérialité.",
    date: "28/10/2024",
    slug: "comprendre-la-double-materialite-un-pilier-essentiel-de-la-csrd",
    readTime: "4 min",
  },
  {
    title: "Peut-on encore créer des événements sportifs soutenables ? Décryptage du Bilan Carbone des Jeux de Paris 2024",
    excerpt: "Paris 2024 : premiers jeux alignés avec l'Accord de Paris ? C'est l'une des promesses du Comité International Olympique qui souhaite que le mouvement olympique soit acteur du changement avec la durabilité en tant que chef de file.",
    date: "28/10/2024",
    slug: "peut-on-encore-creer-des-evenements-sportifs-soutenables-decryptage-du-bilan-carbone-des-jeux-de-paris-2024",
    readTime: "14 min",
  },
  {
    title: "Comprendre la notion de budget carbone",
    excerpt: "Avez-vous déjà entendu parler de budget carbone ? C'est une notion essentielle pour tous les dirigeants d'entreprise et responsables RSE qui pilotent une stratégie bas carbone et définissent une trajectoire de réduction.",
    date: "28/10/2024",
    slug: "comprendre-la-notion-de-budget-carbone",
    readTime: "4 min",
  },
  {
    title: "CSRD : qui est concerné par cette nouvelle réglementation ?",
    excerpt: "La CSRD est la nouvelle réglementation à connaître absolument en 2024. Elle suscite de nombreuses interrogations chez les dirigeants et responsables RSE, et pour cause. C'est la première fois que l'Europe impose à un grand nombre d'entreprises de produire un rapport de durabilité.",
    date: "28/10/2024",
    slug: "csrd-qui-est-concerne-par-cette-nouvelle-reglementation",
    readTime: "5 min",
  },
  {
    title: "Ekyo accompagne la FFHandball dans la réalisation de son premier Bilan Carbone®",
    excerpt: "À quelques mois des Jeux de Paris 2024, la Fédération française de handball vient concrétiser ses engagements durables en officialisant la réalisation de son premier Bilan Carbone® avec les équipes d'Impakt.",
    date: "28/10/2024",
    slug: "ekyo-accompagne-la-ffhandball-dans-son-premier-bilan-carbone",
    readTime: "3 min",
  },
  {
    title: "Tout ce qu'il faut savoir sur la méthode Bilan Carbone®",
    excerpt: "S'il y a bien une chose à connaître quand on se lance dans le Bilan Carbone de son organisation c'est la méthode Bilan Carbone® : un outil conçu par Jean-Marc Jancovici et mis en place par l'ADEME en 2004.",
    date: "28/10/2024",
    slug: "tout-ce-quil-faut-savoir-sur-la-methode-bilan-carbone",
    readTime: "6 min",
  },
  {
    title: "Pourquoi faut-il réaliser le Bilan Carbone® de ses événements ?",
    excerpt: "Vous le savez, vous allez être confrontés tôt ou tard à l'organisation d'un événement. Que ce soit pour présenter vos nouveaux produits, vos nouveaux services, pour réunir vos partenaires ou encore former vos collaborateurs.",
    date: "28/10/2024",
    slug: "pourquoi-faut-il-realiser-le-bilan-carbone-de-ses-evenements",
    readTime: "6 min",
  },
  {
    title: "Comment gagner du temps dans sa collecte de données ?",
    excerpt: "La collecte de données peut souvent être un défi de taille pour de nombreuses organisations. Entre le manque de ressources humaines dédiées, les tâches fastidieuses et le risque de perte de données, il est essentiel d'adopter une approche méthodique.",
    date: "28/10/2024",
    slug: "comment-gagner-du-temps-dans-sa-collecte-de-donnees",
    readTime: "6 min",
  },
  {
    title: "La fast-fashion va-t-elle finir par passer de mode ?",
    excerpt: "La mode jetable mise à l'amende par l'Assemblée nationale. Le 14 mars 2024, l'Assemblée a adopté à l'unanimité une loi historique pour « démoder la fast-fashion ». Ce texte, porté par la députée Horizons Anne-Cécile Violland.",
    date: "28/10/2024",
    slug: "la-fast-fashion-va-t-elle-finir-par-passer-de-mode",
    readTime: "13 min",
  },
  {
    title: "Un partenariat stratégique pour une transition écologique accélérée",
    excerpt: "Impakt est ravi d'annoncer officiellement son partenariat stratégique avec In Extenso Innovation Croissance pour l'année 2024. Ce partenariat marque le début d'une alliance cohérente et robuste au service de la transformation durable des organisations.",
    date: "28/10/2024",
    slug: "un-partenariat-strategique-pour-une-transition-ecologique-acceleree",
    readTime: "4 min",
  },
  {
    title: "Impakt et Endrix annoncent leur partenariat stratégique",
    excerpt: "Un partenariat avec Endrix pour accélérer la transformation des organisations. Impakt est fier d'annoncer son partenariat avec Endrix, acteur français majeur de l'Expertise Comptable, de l'Audit et du Conseil.",
    date: "28/10/2024",
    slug: "impakt-et-endrix-annoncent-leur-partenariat-strategique",
    readTime: "3 min",
  },
  {
    title: "Notre plateforme SaaS Ekyo est référencée UGAP-SCC",
    excerpt: "Depuis septembre 2023, notre solution logicielle Ekyo est disponible sur le catalogue multi-éditeurs de l'UGAP. Une bonne nouvelle pour la décarbonation du secteur public !",
    date: "28/10/2024",
    slug: "notre-plateforme-saas-ekyo-est-referencee-ugap-scc",
    readTime: "2 min",
  },
  {
    title: "Impakt est heureux de soutenir les 10 principes pour une stratégie climat d'entreprise ambitieuse, portée par le projet Net Zero Initiative",
    excerpt: "Le net zéro désigne avant tout l'ambition planétaire d'équilibrage des émissions de GES et des puits de carbone. L'objectif principal de l'action climat est de limiter le réchauffement à l'objectif de température défini dans l'Accord de Paris.",
    date: "28/10/2024",
    slug: "impakt-est-heureux-de-soutenir-les-10-principes-pour-une-strategie-climat-dentreprise-ambitieuse-portee-par-le-projet-net-zero-initiative",
    readTime: "4 min",
  },
  {
    title: "RETEX – Stratégie bas carbone du Groupe In Extenso",
    excerpt: "Témoignage de notre partenaire In Extenso Innovation Croissance. Pour en parler, nous avons rencontré Thierry Gentes, consultant en stratégie bas carbone et stratégie climat, chez In Extenso Innovation Croissance.",
    date: "28/10/2024",
    slug: "retex-strategie-bas-carbone-des-entreprises-du-groupe-in-extenso",
    readTime: "5 min",
  },
  {
    title: "Climat et météo : quelle différence ?",
    excerpt: "Il n'est pas rare d'entendre des personnalités publiques confondre le climat et la météo. Si les deux sciences sont relativement proches puisqu'elles s'appuient sur les mêmes phénomènes, elles se différencient principalement par 2 indicateurs : l'échelle temporelle et le périmètre géographique.",
    date: "28/10/2024",
    slug: "climat-et-meteo-quelle-difference",
    readTime: "11 min",
  },
  {
    title: "Pourquoi les entreprises doivent-elles s'adapter aux risques climatiques ?",
    excerpt: "Lorsqu'on aborde la crise climatique, notre première pensée se dirige souvent vers les moyens d'y échapper. Trouver des solutions pour réduire les émissions de gaz à effet de serre, responsables du réchauffement climatique, par exemple.",
    date: "28/10/2024",
    slug: "pourquoi-les-entreprises-doivent-elles-sadapter-aux-risques-climatiques",
    readTime: "8 min",
  },
  {
    title: "Climat et biodiversité : même combat ?",
    excerpt: "À l'occasion de la journée de la Terre, nos équipes et celles de notre partenaire Ekodev ont collaboré ensemble pour réfléchir au lien entre la biodiversité et le climat. Pourquoi mettre en évidence ce lien ?",
    date: "28/10/2024",
    slug: "climat-et-biodiversite-meme-combat",
    readTime: "14 min",
  },
  {
    title: "Témoignage d'une ESN française sur son Bilan Carbone",
    excerpt: "Le bilan carbone, quésaco ? De la même manière que le bilan comptable vient donner une valeur monétaire (€) à une entreprise, le bilan carbone permet de mesurer la quantité de gaz à effet de serre (GES) émis dans l'atmosphère.",
    date: "28/10/2024",
    slug: "retour-dexperience-sur-le-bilan-carbone-dune-esn-constellation",
    readTime: "8 min",
  },
  {
    title: "Pourquoi faut-il réinventer le numérique ? Un guide pour les DSI",
    excerpt: "Dans cet article, nous avons choisi de nous concentrer sur un seul pilier de la transformation du numérique : l'environnement. Il y a bien d'autres sujets à aborder sur le numérique de demain, notamment sur le plan social et sociétal.",
    date: "24/10/2024",
    slug: "pourquoi-faut-il-reinventer-le-numerique-un-guide-pour-les-dsi",
    readTime: "15 min",
  },
];
