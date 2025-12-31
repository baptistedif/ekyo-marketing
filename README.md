# Ekyo Marketing Website

Site web marketing pour Ekyo - Plateforme de pilotage ESG & Climat.

## 🚀 Technologies

- **Next.js 16** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utilitaire
- **Lucide React** - Icônes

## 📁 Structure du projet

```
ekyo-marketing/
├── src/
│   ├── app/                    # Pages et routes
│   │   ├── page.tsx           # Page d'accueil
│   │   ├── layout.tsx         # Layout principal
│   │   ├── blog/              # Blog et actualités
│   │   ├── contact/           # Page contact
│   │   ├── solutions/         # Pages des solutions
│   │   └── etudes-de-cas/     # Études de cas
│   ├── components/
│   │   └── marketing/         # Composants marketing
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   └── app/
│       ├── globals.css        # Styles globaux
│       ├── sitemap.ts         # Sitemap SEO
│       └── robots.ts          # Robots.txt
└── public/                    # Assets statiques
```

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Lancer en production
npm start
```

## 📄 Pages disponibles

- `/` - Page d'accueil
- `/solutions/ekyo-csrd` - Solution Ekyo CSRD
- `/solutions/ekyo-mesure` - Solution Ekyo Mesure
- `/solutions/ekyo-trajectoire` - Solution Ekyo Trajectoire
- `/blog` - Blog et actualités
- `/etudes-de-cas` - Études de cas clients
- `/contact` - Formulaire de contact

## 🎨 Design

Le site utilise un design moderne avec :
- Palette de couleurs verte (ESG/Durabilité)
- Design responsive (mobile-first)
- Animations et transitions fluides
- Typographie claire et lisible

## 🔍 SEO

- Métadonnées optimisées pour chaque page
- Sitemap.xml automatique
- Robots.txt configuré
- Structure sémantique HTML5

## 🚢 Déploiement

### Vercel (Recommandé)

1. Connecter le repository GitHub
2. Vercel détecte automatiquement Next.js
3. Déploiement automatique à chaque push

### Autres plateformes

Le projet peut être déployé sur :
- Netlify
- AWS Amplify
- Docker + VPS

## 📝 Notes

- Le lien "Se connecter" pointe vers `https://app.ekyo.app`
- Les formulaires de contact nécessitent une intégration backend
- Les images de placeholder doivent être remplacées par les vraies images

## 📧 Contact

Pour toute question, contactez : contact@ekyo.app
