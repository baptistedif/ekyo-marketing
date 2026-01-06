# Guide UI/UX Ekyo Marketing - Éléments à appliquer

Ce document récapitule tous les éléments UI/UX et animations du site ekyo-marketing à appliquer dans le projet "project".

## 🎨 Palette de couleurs

### Couleurs principales
- **Violet bleu principal**: `#3F2F8D`
- **Violet violet**: `#6F5DE9`
- **Vert fluo**: `#83F0C8`
- **Mauve**: `#beb2ff`
- **Gris foncé**: `#344054`
- **Fond blanc**: `#fcfcfd`

### Configuration Tailwind
```typescript
// tailwind.config.ts
colors: {
  primary: {
    "violet-bleu": "#3F2F8D",
    "vert-fluo": "#83F0C8",
    "violet-violet": "#6F5DE9",
  },
  secondary: {
    "fond-blanc": "#fcfcfd",
    gris: "#d0d5dd",
    "gris-fonce": "#344054",
    "violet-bleu-clair": "#4c30d6",
    "vert-clair": "#02dba1",
    mauve: "#beb2ff",
  },
  brand: {
    DEFAULT: "#3F2F8D",
    light: "#6F5DE9",
    dark: "#4c30d6",
  },
  accent: {
    DEFAULT: "#83F0C8",
    light: "#02dba1",
  },
}
```

## 🎬 Animations CSS

### Animations de base
- `fade-in`: Apparition en fondu avec translation verticale
- `slide-up`: Glissement vers le haut
- `slide-in-right`: Glissement depuis la droite
- `scale-in`: Zoom d'apparition
- `pulse`: Pulsation douce

### Classes utilitaires
- `.animate-fade-in`
- `.animate-slide-up`
- `.animate-slide-in-right`
- `.animate-scale-in`
- `.animate-pulse`

## 🎯 Patterns de design récurrents

### 1. Hero Section
- Background: `bg-gradient-to-br from-[#fcfcfd] via-white to-[#beb2ff]/5`
- Pattern de grille: `bg-grid-pattern opacity-[0.02]`
- Blur animé: `bg-[#beb2ff]/20 rounded-full blur-3xl animate-pulse`
- Titre avec gradient: `bg-gradient-to-r from-[#3F2F8D] via-[#6F5DE9] to-[#beb2ff] bg-clip-text text-transparent`

### 2. Cards avec élévation
- Classe: `.card-elevated`
- Hover: Translation Y + scale + ombre augmentée
- Gradient border au hover: `.card-gradient`

### 3. Sections avec patterns
- Background dots: `bg-pattern-dots opacity-10`
- Grid pattern: `bg-grid-pattern`
- Radial gradients animés

### 4. Boutons
- Principal: `bg-[#3F2F8D] text-white hover:bg-[#4c30d6]`
- Secondaire: `bg-white text-[#3F2F8D] border-2 border-[#3F2F8D]`
- Transitions: `transition-all transform hover:-translate-y-0.5`
- Shadow: `shadow-lg hover:shadow-xl`

### 5. Badges/Tags
- Style: `inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/10 border border-[#beb2ff]/20`
- Icône + texte avec couleur de thème

## 🪝 Hooks React

### useScrollAnimation
```typescript
// src/hooks/useScrollAnimation.ts
// Détecte quand un élément entre dans le viewport
// Retourne { ref, isVisible }
```

### AnimatedSection
```typescript
// src/components/marketing/AnimatedSection.tsx
// Wrapper pour animer les sections au scroll
// Props: children, className, delay
```

## 📐 Composants réutilisables

### Header
- Sticky avec backdrop blur: `bg-white/80 backdrop-blur-md`
- Navigation avec dropdowns animés
- Menu mobile avec overlay

### Footer
- Background sombre: `bg-gray-900`
- Grid responsive avec liens organisés

### Cards de fonctionnalités
- Structure: Icon container + titre + description + visualisation
- Hover effects avec gradients
- Animations au scroll

## 🎨 Styles globaux (globals.css)

### Scrollbar personnalisée
```css
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}
```

### Smooth scrolling
```css
html {
  scroll-behavior: smooth;
}
```

### Patterns de background
- `.bg-grid-pattern`: Grille subtile
- `.bg-pattern-dots`: Points radiaux
- `.bg-gradient-section`: Gradient animé

### Effets visuels
- `.glass`: Glass morphism
- `.gradient-text`: Texte avec gradient
- `.hover-lift`: Élévation au hover

## 🚀 Animations spécifiques

### Scroll Progress Indicator
- Barre de progression en haut de page
- Gradient: `from-[#3F2F8D] via-[#6F5DE9] to-[#beb2ff]`

### Sections alternées
- Pattern: Image à gauche, texte à droite, puis inversé
- Animation au scroll avec `useScrollAnimation`

### Cards interactives
- Hover: Scale + shadow + border gradient
- Transitions: `transition-all duration-300`

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints Tailwind standards
- Menu mobile avec overlay
- Grids adaptatifs: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## ⚡ Optimisations Performance

- `will-change-transform` pour les animations
- `prefers-reduced-motion` support
- Lazy loading des images
- Transitions GPU-accelerated

## 📦 Dépendances nécessaires

```json
{
  "lucide-react": "^0.562.0",
  "next": "16.1.1",
  "react": "19.2.3",
  "tailwindcss": "^4"
}
```

## 🔧 Fichiers à copier/modifier

1. `src/app/globals.css` - Tous les styles CSS
2. `src/hooks/useScrollAnimation.ts` - Hook d'animation
3. `src/components/marketing/AnimatedSection.tsx` - Composant animation
4. `tailwind.config.ts` - Configuration des couleurs
5. Patterns de composants depuis les pages existantes
