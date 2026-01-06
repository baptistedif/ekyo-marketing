# Exemples d'utilisation - UI/UX Ekyo Marketing

## 🎨 Hero Section

```tsx
<section className="relative py-40 bg-gradient-to-br from-[#fcfcfd] via-white to-[#beb2ff]/5 overflow-hidden">
  <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
  <div className="absolute top-20 left-10 w-72 h-72 bg-[#beb2ff]/20 rounded-full blur-3xl animate-pulse"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold text-[#344054] mb-6">
        Votre titre principal
        <br />
        <span className="bg-gradient-to-r from-[#3F2F8D] via-[#6F5DE9] to-[#beb2ff] bg-clip-text text-transparent">
          avec gradient
        </span>
      </h1>
    </div>
  </div>
</section>
```

## 🎴 Card avec élévation

```tsx
<div className="card-elevated card-gradient rounded-2xl p-8 border border-gray-100">
  <div className="icon-container w-16 h-16 rounded-2xl bg-gradient-to-br from-[#83F0C8]/20 to-[#83F0C8]/10 flex items-center justify-center">
    <Icon className="w-8 h-8 text-[#83F0C8]" />
  </div>
  <h3 className="text-xl font-bold text-[#344054] mb-3">Titre</h3>
  <p className="text-gray-600">Description</p>
</div>
```

## 🎯 Section avec animation au scroll

```tsx
import { AnimatedSection } from "@/components/AnimatedSection";

<AnimatedSection delay={100}>
  <div className="text-center">
    <h2 className="text-4xl font-bold text-[#344054]">Titre animé</h2>
  </div>
</AnimatedSection>
```

## 🔘 Boutons

```tsx
// Bouton principal
<button className="bg-[#3F2F8D] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4c30d6] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
  Action principale
</button>

// Bouton secondaire
<button className="bg-white text-[#3F2F8D] border-2 border-[#3F2F8D] px-8 py-4 rounded-lg font-medium hover:bg-[#3F2F8D]/5 transition-all">
  Action secondaire
</button>
```

## 🏷️ Badge/Tag

```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/10 border border-[#beb2ff]/20">
  <Icon className="w-4 h-4 text-[#beb2ff]" />
  <span className="text-sm font-medium text-[#beb2ff]">Label</span>
</div>
```

## 📊 Section avec pattern de fond

```tsx
<section className="py-32 bg-white relative overflow-hidden">
  <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Contenu */}
  </div>
</section>
```

## 🎬 Scroll Progress Indicator

```tsx
"use client";
import { useState, useEffect } from "react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
      <div
        className="h-full bg-gradient-to-r from-[#3F2F8D] via-[#6F5DE9] to-[#beb2ff] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
```

## 🎨 Texte avec gradient

```tsx
<h1 className="gradient-text text-5xl font-bold">
  Texte avec gradient
</h1>
```

## 🔄 Section alternée (image gauche/droite)

```tsx
<section className="py-32 bg-gradient-to-br from-[#fcfcfd] to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Texte */}
      <div>
        <h2 className="text-4xl font-bold text-[#344054] mb-6">Titre</h2>
        <p className="text-xl text-gray-600">Description</p>
      </div>
      {/* Image/Visualisation */}
      <div className="relative">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
          {/* Contenu */}
        </div>
      </div>
    </div>
  </div>
</section>
```
