# Guide d'application - UI/UX Ekyo Marketing → Project/monapp

## 📦 Fichiers préparés

Tous les fichiers sont disponibles dans le dossier `ekyo-ui-package/` :

### Fichiers à copier

1. **`ekyo-ui-package/globals.css`** → `monapp/src/app/globals.css`
   - Tous les styles CSS et animations
   - Fusionner avec votre CSS existant si nécessaire

2. **`ekyo-ui-package/useScrollAnimation.ts`** → `monapp/src/hooks/useScrollAnimation.ts`
   - Hook React pour animations au scroll

3. **`ekyo-ui-package/AnimatedSection.tsx`** → `monapp/src/components/AnimatedSection.tsx`
   - Composant wrapper pour animations
   - ⚠️ **Important**: Corriger l'import dans le fichier copié :
     ```typescript
     // Remplacer:
     import { useScrollAnimation } from "./useScrollAnimation";
     // Par:
     import { useScrollAnimation } from "@/hooks/useScrollAnimation";
     ```

4. **`ekyo-ui-package/tailwind.config.ts`** → Fusionner dans `monapp/tailwind.config.ts`
   - Ajouter les couleurs dans la section `theme.extend.colors`

## 🚀 Application manuelle

### Option 1: Script PowerShell

Si vous connaissez le chemin exact du projet monapp :

```powershell
.\apply-to-monapp.ps1 "C:\chemin\vers\Project\monapp"
```

### Option 2: Copie manuelle

1. Ouvrez le projet monapp dans Cursor
2. Créez les dossiers si nécessaire :
   - `src/hooks/`
   - `src/components/`
3. Copiez les fichiers depuis `ekyo-ui-package/`
4. Corrigez l'import dans `AnimatedSection.tsx` (voir ci-dessus)
5. Fusionnez `tailwind.config.ts` avec votre config existante

## ✅ Vérifications post-installation

1. **globals.css importé** : Vérifiez que `globals.css` est importé dans votre `layout.tsx` :
   ```typescript
   import "./globals.css";
   ```

2. **Tailwind configuré** : Vérifiez que les couleurs sont dans `tailwind.config.ts`

3. **Dépendances** : Installez si nécessaire :
   ```bash
   npm install lucide-react
   ```

4. **Imports corrigés** : Vérifiez `AnimatedSection.tsx`

## 🎨 Utilisation

Consultez `ekyo-ui-package/EXAMPLES.md` pour des exemples d'utilisation des patterns UI/UX.

## 📝 Notes importantes

- Les fichiers sont prêts à être utilisés
- Les animations fonctionnent avec `useScrollAnimation` et `AnimatedSection`
- Les couleurs Tailwind sont disponibles via `brand.*`, `accent.*`, `primary.*`, `secondary.*`
- Les classes CSS personnalisées sont disponibles : `.card-elevated`, `.card-gradient`, `.gradient-text`, etc.
