# Script PowerShell d'installation automatique de l'UI/UX Ekyo Marketing
# Usage: .\apply-ui.ps1 [chemin-du-projet]

param(
    [string]$ProjectPath = "."
)

Write-Host "🎨 Application de l'UI/UX Ekyo Marketing..." -ForegroundColor Cyan
Write-Host "📁 Projet: $ProjectPath" -ForegroundColor Gray

# Vérifier que le projet existe
if (-not (Test-Path $ProjectPath)) {
    Write-Host "❌ Erreur: Le projet n'existe pas à $ProjectPath" -ForegroundColor Red
    exit 1
}

# Créer les dossiers nécessaires
$hooksPath = Join-Path $ProjectPath "src\hooks"
$componentsPath = Join-Path $ProjectPath "src\components"
$appPath = Join-Path $ProjectPath "src\app"

New-Item -ItemType Directory -Force -Path $hooksPath | Out-Null
New-Item -ItemType Directory -Force -Path $componentsPath | Out-Null
Write-Host "✅ Dossiers créés" -ForegroundColor Green

# Copier les fichiers
Write-Host "📝 Copie des fichiers..." -ForegroundColor Cyan

# Styles globaux
$globalsPath = Join-Path $appPath "globals.css"
if (Test-Path $globalsPath) {
    Write-Host "⚠️  globals.css existe déjà. Veuillez fusionner manuellement." -ForegroundColor Yellow
} else {
    Copy-Item "globals.css" -Destination $globalsPath
    Write-Host "✅ globals.css copié" -ForegroundColor Green
}

# Hook
$hookDest = Join-Path $hooksPath "useScrollAnimation.ts"
Copy-Item "useScrollAnimation.ts" -Destination $hookDest
Write-Host "✅ useScrollAnimation.ts copié" -ForegroundColor Green

# Composant
$componentDest = Join-Path $componentsPath "AnimatedSection.tsx"
Copy-Item "AnimatedSection.tsx" -Destination $componentDest
Write-Host "✅ AnimatedSection.tsx copié" -ForegroundColor Green

# Tailwind config
Write-Host "⚠️  tailwind.config.ts doit être fusionné manuellement avec votre config existante" -ForegroundColor Yellow

Write-Host ""
Write-Host "✅ Installation terminée!" -ForegroundColor Green
Write-Host "📖 Consultez INSTALL.md pour les étapes suivantes" -ForegroundColor Cyan
