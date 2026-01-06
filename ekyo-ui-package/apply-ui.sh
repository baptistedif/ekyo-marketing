#!/bin/bash

# Script d'installation automatique de l'UI/UX Ekyo Marketing
# Usage: ./apply-ui.sh [chemin-du-projet]

PROJECT_PATH=${1:-"."}

echo "🎨 Application de l'UI/UX Ekyo Marketing..."
echo "📁 Projet: $PROJECT_PATH"

# Vérifier que le projet existe
if [ ! -d "$PROJECT_PATH" ]; then
  echo "❌ Erreur: Le projet n'existe pas à $PROJECT_PATH"
  exit 1
fi

# Créer les dossiers nécessaires
mkdir -p "$PROJECT_PATH/src/hooks"
mkdir -p "$PROJECT_PATH/src/components"

# Copier les fichiers
echo "📝 Copie des fichiers..."

# Styles globaux (fusionner au lieu de remplacer)
if [ -f "$PROJECT_PATH/src/app/globals.css" ]; then
  echo "⚠️  globals.css existe déjà. Veuillez fusionner manuellement."
else
  cp globals.css "$PROJECT_PATH/src/app/globals.css"
  echo "✅ globals.css copié"
fi

# Hook
cp useScrollAnimation.ts "$PROJECT_PATH/src/hooks/useScrollAnimation.ts"
echo "✅ useScrollAnimation.ts copié"

# Composant
cp AnimatedSection.tsx "$PROJECT_PATH/src/components/AnimatedSection.tsx"
echo "✅ AnimatedSection.tsx copié"

# Tailwind config (à fusionner manuellement)
echo "⚠️  tailwind.config.ts doit être fusionné manuellement avec votre config existante"

echo ""
echo "✅ Installation terminée!"
echo "📖 Consultez INSTALL.md pour les étapes suivantes"
