import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/marketing/Header";
import Footer from "@/components/marketing/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ekyo.app"),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  title: {
    default: "Ekyo - Pilotez votre performance ESG & Climat simplement",
    template: "%s | Ekyo",
  },
  description:
    "Mesurez, structurez et valorisez vos engagements extra-financiers avec la suite Ekyo. Solutions complètes pour la conformité CSRD, le Bilan Carbone et la trajectoire de décarbonation.",
  keywords: [
    "ESG",
    "CSRD",
    "Bilan Carbone",
    "RSE",
    "décarbonation",
    "durabilité",
    "performance extra-financière",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.ekyo.app",
    siteName: "Ekyo",
    title: "Ekyo - Pilotez votre performance ESG & Climat simplement",
    description:
      "Mesurez, structurez et valorisez vos engagements extra-financiers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekyo - Pilotez votre performance ESG & Climat",
    description:
      "Mesurez, structurez et valorisez vos engagements extra-financiers",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
