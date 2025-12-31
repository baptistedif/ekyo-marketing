"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [fonctionnalitesOpen, setFonctionnalitesOpen] = useState(false);

  // Fermer le menu mobile quand on clique ailleurs
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo bleu et vert.svg"
                alt="Ekyo"
                width={120}
                height={36}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Solutions - 4 solutions */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center focus:outline-none focus:ring-2 focus:ring-[#3F2F8D]/20 rounded"
                aria-expanded={solutionsOpen}
                aria-haspopup="true"
              >
                Solutions
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    solutionsOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                className={`absolute left-0 top-full pt-2 w-72 ${
                  solutionsOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-md shadow-lg border border-gray-100 py-2 transition-all duration-200">
                  <Link
                    href="/solutions/csrd-reporting-durable"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    <div className="font-semibold text-[#344054]">CSRD & Reporting durable</div>
                  </Link>
                  <Link
                    href="/solutions/climat-empreinte-carbone"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    <div className="font-semibold text-[#344054]">Climat & Empreinte carbone</div>
                  </Link>
                  <Link
                    href="/solutions/pilotage-esg-performance"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    <div className="font-semibold text-[#344054]">Pilotage ESG & Performance</div>
                  </Link>
                  <Link
                    href="/solutions/groupes-organisations-multi-entites"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    <div className="font-semibold text-[#344054]">Groupes & organisations multi-entités</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Fonctionnalités - 4 fonctionnalités */}
            <div
              className="relative"
              onMouseEnter={() => setFonctionnalitesOpen(true)}
              onMouseLeave={() => setFonctionnalitesOpen(false)}
            >
              <button 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center focus:outline-none focus:ring-2 focus:ring-[#3F2F8D]/20 rounded"
                aria-expanded={fonctionnalitesOpen}
                aria-haspopup="true"
              >
                Fonctionnalités
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    fonctionnalitesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                className={`absolute left-0 top-full pt-2 w-72 ${
                  fonctionnalitesOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-md shadow-lg border border-gray-100 py-2 transition-all duration-200">
                  <Link
                    href="/fonctionnalites/pilotage-gouvernance-esg"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setFonctionnalitesOpen(false)}
                  >
                    <div className="font-semibold text-[#344054]">Pilotage & Gouvernance ESG</div>
                  </Link>
                  <Link
                    href="/fonctionnalites/esg-carbone-data-hub"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setFonctionnalitesOpen(false)}
                  >
                    <div className="font-semibold text-[#344054]">ESG & Carbone Data Hub</div>
                  </Link>
                  <Link
                    href="/fonctionnalites/reporting-conformite"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setFonctionnalitesOpen(false)}
                  >
                    <div className="font-semibold text-[#344054]">Reporting & Conformité</div>
                  </Link>
                  <Link
                    href="/fonctionnalites/integrations-securite"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setFonctionnalitesOpen(false)}
                  >
                    <div className="font-semibold text-[#344054]">Intégrations & Sécurité</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Ressources */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center">
                Ressources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link
                    href="/blog"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/etudes-de-cas"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Études de cas
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#3F2F8D]/20 rounded"
            >
              Contact
            </Link>
            <Link
              href="https://app.ekyo.app"
              className="bg-[#3F2F8D] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4c30d6] transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#3F2F8D]/20"
            >
              Se connecter
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-[#3F2F8D]/20 rounded"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Overlay pour mobile */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 top-16"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t bg-white relative z-50">
            {/* Solutions */}
            <div>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3F2F8D]/20 rounded"
                aria-expanded={solutionsOpen}
              >
                Solutions
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    solutionsOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {solutionsOpen && (
                <div className="pl-4 space-y-1">
                  <Link href="/solutions/csrd-reporting-durable" className="block px-3 py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>CSRD & Reporting durable</Link>
                  <Link href="/solutions/climat-empreinte-carbone" className="block px-3 py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Climat & Empreinte carbone</Link>
                  <Link href="/solutions/pilotage-esg-performance" className="block px-3 py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Pilotage ESG & Performance</Link>
                  <Link href="/solutions/groupes-organisations-multi-entites" className="block px-3 py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Groupes & organisations multi-entités</Link>
                </div>
              )}
            </div>

            {/* Fonctionnalités */}
            <div>
              <button
                onClick={() => setFonctionnalitesOpen(!fonctionnalitesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3F2F8D]/20 rounded"
                aria-expanded={fonctionnalitesOpen}
              >
                Fonctionnalités
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    fonctionnalitesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {fonctionnalitesOpen && (
                <div className="pl-4 space-y-1">
                  <Link href="/fonctionnalites/pilotage-gouvernance-esg" className="block px-3 py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Pilotage & Gouvernance ESG</Link>
                  <Link href="/fonctionnalites/esg-carbone-data-hub" className="block px-3 py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>ESG & Carbone Data Hub</Link>
                  <Link href="/fonctionnalites/reporting-conformite" className="block px-3 py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Reporting & Conformité</Link>
                  <Link href="/fonctionnalites/integrations-securite" className="block px-3 py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Intégrations & Sécurité</Link>
                </div>
              )}
            </div>
            <Link
              href="/blog"
              className="block px-3 py-2 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/etudes-de-cas"
              className="block px-3 py-2 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Études de cas
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="https://app.ekyo.app"
              className="block px-3 py-2 bg-[#3F2F8D] text-white rounded-lg text-center font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Se connecter
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

