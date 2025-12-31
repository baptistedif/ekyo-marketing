import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/Logo blanc.svg"
              alt="Ekyo"
              width={120}
              height={36}
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Nos solutions
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/solutions/csrd-reporting-durable"
                  className="hover:text-white transition-colors"
                >
                  CSRD & Reporting durable
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/climat-empreinte-carbone"
                  className="hover:text-white transition-colors"
                >
                  Climat & Empreinte carbone
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/pilotage-esg-performance"
                  className="hover:text-white transition-colors"
                >
                  Pilotage ESG & Performance
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/groupes-organisations-multi-entites"
                  className="hover:text-white transition-colors"
                >
                  Groupes & multi-entités
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Ressources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/etudes-de-cas"
                  className="hover:text-white transition-colors"
                >
                  Études de cas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Autres</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Se connecter
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://app.ekyo.app"
                  className="hover:text-white transition-colors"
                >
                  Se connecter
                </Link>
              </li>
              <li>
                <Link
                  href="/plateforme"
                  className="hover:text-white transition-colors"
                >
                  Découvrir la plateforme
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>© 2025 Ekyo. Tous droits réservés.</p>
          <div className="mt-4 space-x-4">
            <Link
              href="/mentions-legales"
              className="hover:text-white transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="hover:text-white transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

