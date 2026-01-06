export interface CaseStudy {
  title: string;
  excerpt: string;
  date: string; // dd/mm/yyyy
  slug: string;
  readTime: string; // "X min"
  image?: string; // /case-studies/<slug>/featured-....png
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Arcade Beauty partage les dessous de son Bilan Carbone",
    excerpt: "Spécialisé dans la création d’échantillons et de solutions de conditionnement pour les produits cosmétiques et parfums, Arcade Beauty est un fabricant mondial de premier plan pour l’industrie de la beauté. L’entreprise est présente partout dans le monde avec 11 sites...",
    date: "28/10/2024",
    slug: "arcade-beauty-partage-les-dessous-de-son-bilan-carbone-avec-impakt",
    readTime: "6 min",
  },
  {
    title: "Harmonie Mutuelle a choisi Ekyo pour sa stratégie climat",
    excerpt: "Découvrez l’interview vidéo sur notre chaîne YouTube 👉 ‍ Il y a quelques semaines, nous avons interrogé Eva Bergier, Responsable Climat chez Harmonie Mutuelle sur la réalisation de son Bilan Carbone avec Impakt. Elle revient sur les grands défis de son...",
    date: "28/10/2024",
    slug: "bilan-carbone-dune-mutuelle-sante",
    readTime: "8 min",
    image: "/case-studies/bilan-carbone-dune-mutuelle-sante/featured-37f859dbd2.png",
  },
  {
    title: "Luminess choisit Ekyo pour réaliser son Bilan Carbone®",
    excerpt: "Leader de l’Intelligent Document Processing, le Groupe Luminess franchit une nouvelle étape dans son engagement pour le climat en collaborant avec Ekyo pour la réalisation d’un Bilan Carbone® complet. Qui est Luminess ? 💻 Luminess est une Entreprise de Services...",
    date: "28/10/2024",
    slug: "luminess-choisit-ekyopour-son-bilan-carbone",
    readTime: "3 min",
    image: "/case-studies/luminess-choisit-ekyopour-son-bilan-carbone/featured-2faa53ee32.png",
  },
  {
    title: "RETEX – Stratégie bas carbone du Groupe In Extenso",
    excerpt: "Témoignage de notre partenaire In Extenso Innovation Croissance Pour en parler, nous avons rencontré Thierry Gentes, consultant en stratégie bas carbone et stratégie climat, chez In Extenso Innovation Croissance et pilote du Bilan Carbone du Groupe In Extenso. Portrait de Thierry...",
    date: "28/10/2024",
    slug: "retex-strategie-bas-carbone-des-entreprises-du-groupe-in-extenso",
    readTime: "5 min",
    image: "/case-studies/retex-strategie-bas-carbone-des-entreprises-du-groupe-in-extenso/featured-c5af791c10.jpg",
  },
  {
    title: "Témoignage d’une ESN française sur son Bilan Carbone",
    excerpt: "Le bilan carbone, quésaco ? De la même manière que le bilan comptable vient donner une valeur monétaire (€) à une entreprise, le bilan carbone permet de mesurer la quantité de gaz à effet de serre (GES) émis dans l’atmosphère par cette même entreprise. Ces gaz peuvent être...",
    date: "28/10/2024",
    slug: "retour-dexperience-sur-le-bilan-carbone-dune-esn-constellation",
    readTime: "8 min",
    image: "/case-studies/retour-dexperience-sur-le-bilan-carbone-dune-esn-constellation/featured-f5133c597f.png",
  },
];
