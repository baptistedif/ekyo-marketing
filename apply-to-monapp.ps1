# Script pour appliquer l'UI/UX Ekyo Marketing au projet monapp
# Usage: .\apply-to-monapp.ps1 [chemin-du-projet-monapp]

param(
    [string]$MonappPath = ""
)

$ErrorActionPreference = "Stop"

Write-Host "Application de l'UI/UX Ekyo Marketing au projet monapp..." -ForegroundColor Cyan
Write-Host ""

# Si le chemin n'est pas fourni, chercher dans les emplacements standards
if ([string]::IsNullOrEmpty($MonappPath)) {
    # Chemins possibles pour le projet monapp
    $possiblePaths = @(
        "C:\Users\BaptisteDIF\OneDrive\cursor\Project\monapp",
        "C:\Users\BaptisteDIF\OneDrive\cursor\monapp",
        "C:\Users\BaptisteDIF\OneDrive\Project\monapp",
        "C:\Users\BaptisteDIF\Project\monapp",
        "..\Project\monapp",
        "..\monapp",
        "C:\Users\BaptisteDIF\OneDrive\cursor\*\monapp"
    )

    $monappPath = $null

    # Chercher le projet
    foreach ($path in $possiblePaths) {
        if ($path -like "*`*") {
            # Pattern avec wildcard - chercher récursivement
            $found = Get-ChildItem -Path (Split-Path $path -Parent) -Recurse -Directory -Filter "monapp" -ErrorAction SilentlyContinue | Select-Object -First 1
            if ($found) {
                $testPath = $found.FullName
                $packageJson = Join-Path $testPath "package.json"
                if (Test-Path $packageJson) {
                    $monappPath = $testPath
                    break
                }
            }
        } else {
            if (Test-Path $path) {
                $packageJson = Join-Path $path "package.json"
                if (Test-Path $packageJson) {
                    $monappPath = $path
                    break
                }
            }
        }
    }
} else {
    $monappPath = $MonappPath
}

if (-not $monappPath -or -not (Test-Path $monappPath)) {
    Write-Host "ERREUR: Projet monapp non trouve." -ForegroundColor Red
    Write-Host "Usage: .\apply-to-monapp.ps1 [chemin-du-projet]" -ForegroundColor Yellow
    Write-Host "Exemple: .\apply-to-monapp.ps1 'C:\Users\BaptisteDIF\OneDrive\cursor\Project\monapp'" -ForegroundColor Yellow
    exit 1
}

Write-Host "Projet trouve: $monappPath" -ForegroundColor Green

# Vérifier la structure du projet
$srcPath = Join-Path $monappPath "src"
$appPath = Join-Path $srcPath "app"

if (-not (Test-Path $srcPath)) {
    Write-Host "⚠️  Le dossier 'src' n'existe pas. Création..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $srcPath -Force | Out-Null
}

if (-not (Test-Path $appPath)) {
    Write-Host "⚠️  Le dossier 'src/app' n'existe pas. Création..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $appPath -Force | Out-Null
}

# Créer les dossiers nécessaires
$hooksPath = Join-Path $srcPath "hooks"
$componentsPath = Join-Path $srcPath "components"

New-Item -ItemType Directory -Force -Path $hooksPath | Out-Null
New-Item -ItemType Directory -Force -Path $componentsPath | Out-Null

Write-Host "📁 Structure de dossiers vérifiée" -ForegroundColor Green
Write-Host ""

# Chemin du package UI
$packagePath = Join-Path $PSScriptRoot "ekyo-ui-package"

if (-not (Test-Path $packagePath)) {
    Write-Host "❌ Le dossier ekyo-ui-package n'existe pas." -ForegroundColor Red
    exit 1
}

Write-Host "📝 Application des fichiers..." -ForegroundColor Cyan
Write-Host ""

# 1. Copier/Merger globals.css
$globalsSource = Join-Path $packagePath "globals.css"
$globalsDest = Join-Path $appPath "globals.css"

if (Test-Path $globalsDest) {
    Write-Host "⚠️  globals.css existe déjà. Fusion manuelle requise." -ForegroundColor Yellow
    Write-Host "   Source: $globalsSource" -ForegroundColor Gray
    Write-Host "   Destination: $globalsDest" -ForegroundColor Gray
} else {
    Copy-Item $globalsSource -Destination $globalsDest
    Write-Host "✅ globals.css copié" -ForegroundColor Green
}

# 2. Copier useScrollAnimation.ts
$hookSource = Join-Path $packagePath "useScrollAnimation.ts"
$hookDest = Join-Path $hooksPath "useScrollAnimation.ts"

Copy-Item $hookSource -Destination $hookDest -Force
Write-Host "✅ useScrollAnimation.ts copié" -ForegroundColor Green

# 3. Copier AnimatedSection.tsx avec correction du chemin d'import
$componentSource = Join-Path $packagePath "AnimatedSection.tsx"
$componentDest = Join-Path $componentsPath "AnimatedSection.tsx"

$componentContent = Get-Content $componentSource -Raw
# Corriger le chemin d'import pour utiliser @/hooks
$componentContent = $componentContent -replace 'from "\./useScrollAnimation"', 'from "@/hooks/useScrollAnimation"'
$componentContent | Set-Content $componentDest
Write-Host "AnimatedSection.tsx copie avec import corrige" -ForegroundColor Green

# 4. Mettre à jour tailwind.config.ts
$tailwindSource = Join-Path $packagePath "tailwind.config.ts"
$tailwindDest = Join-Path $monappPath "tailwind.config.ts"

if (Test-Path $tailwindDest) {
    Write-Host "⚠️  tailwind.config.ts existe déjà. Fusion manuelle requise." -ForegroundColor Yellow
    Write-Host "   Ajoutez les couleurs depuis: $tailwindSource" -ForegroundColor Gray
} else {
    Copy-Item $tailwindSource -Destination $tailwindDest
    Write-Host "✅ tailwind.config.ts copié" -ForegroundColor Green
}

Write-Host ""
Write-Host "✅ Installation terminée!" -ForegroundColor Green
Write-Host ""
Write-Host "Prochaines etapes:" -ForegroundColor Cyan
Write-Host "   1. Verifiez que globals.css est importe dans votre layout.tsx" -ForegroundColor White
Write-Host "   2. Fusionnez les couleurs Tailwind si necessaire" -ForegroundColor White
Write-Host "   3. Installez lucide-react si ce n'est pas deja fait: npm install lucide-react" -ForegroundColor White
Write-Host "   4. Consultez ekyo-ui-package/EXAMPLES.md pour des exemples d'utilisation" -ForegroundColor White
Write-Host ""
