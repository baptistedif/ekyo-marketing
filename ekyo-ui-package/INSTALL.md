# Guide d'installation - UI/UX Ekyo Marketing

Ce guide vous explique comment appliquer l'UI/UX d'ekyo-marketing dans votre projet "Project/monapp".

## 📋 Prérequis

- Projet Next.js avec Tailwind CSS configuré
- TypeScript (recommandé)
- React 18+

## 🚀 Installation étape par étape

### 1. Copier les styles globaux

Copiez le contenu de `globals.css` dans votre fichier `src/app/globals.css` (ou fusionnez avec votre CSS existant).

**Important**: Si vous avez déjà du CSS, fusionnez les styles au lieu de remplacer complètement.

### 2. Mettre à jour Tailwind Config

Fusionnez les couleurs de `tailwind.config.ts` dans votre configuration Tailwind existante :

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      // Ajoutez ces couleurs à votre config existante
      primary: {
        "violet-bleu": "#3F2F8D",
        "vert-fluo": "#83F0C8",
        "violet-violet": "#6F5DE9",
      },
      // ... etc
    }
  }
}
```

### 3. Installer les Hooks

Créez le dossier `src/hooks/` s'il n'existe pas, puis copiez :
- `useScrollAnimation.ts` → `src/hooks/useScrollAnimation.ts`

### 4. Installer les Composants

Créez le dossier `src/components/` s'il n'existe pas, puis copiez :
- `AnimatedSection.tsx` → `src/components/AnimatedSection.tsx`

**Note**: Ajustez le chemin d'import dans `AnimatedSection.tsx` si nécessaire :
```typescript
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
```

### 5. Vérifier les dépendances

Assurez-vous d'avoir installé :
```bash
npm install lucide-react
```

## ✅ Vérification

Après installation, testez que tout fonctionne :

1. Vérifiez que les styles s'appliquent (couleurs, animations)
2. Testez le hook `useScrollAnimation` dans un composant
3. Testez le composant `AnimatedSection`

## 🎨 Utilisation

Consultez `EXAMPLES.md` pour voir comment utiliser les différents patterns UI/UX.

## 🔧 Dépannage

### Les couleurs ne s'affichent pas
- Vérifiez que Tailwind a bien été recompilé : `npm run dev`
- Vérifiez que les chemins dans `tailwind.config.ts` incluent vos fichiers

### Les animations ne fonctionnent pas
- Vérifiez que `globals.css` est bien importé dans votre `layout.tsx`
- Vérifiez que les classes CSS sont bien présentes dans le fichier compilé

### Erreurs TypeScript
- Vérifiez que les chemins d'import sont corrects (alias `@/` configuré dans `tsconfig.json`)
