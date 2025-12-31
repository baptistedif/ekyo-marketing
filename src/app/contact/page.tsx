"use client";

import { useEffect, useMemo, useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const intent = useMemo(() => {
    const raw = (searchParams.get("intent") ?? "").toLowerCase();
    return raw === "demo" || raw === "expert" ? (raw as "demo" | "expert") : null;
  }, [searchParams]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (!intent) return;
    setFormData((prev) => {
      if (prev.message.trim().length > 0) return prev;
      const base =
        intent === "demo"
          ? "Bonjour, je souhaite voir Ekyo en démo.\n\nContexte (organisation / périmètre / enjeux):\n- \n\nObjectifs (CSRD / climat / pilotage):\n- \n"
          : "Bonjour, je souhaite échanger avec un expert Ekyo.\n\nContexte (organisation / périmètre / enjeux):\n- \n\nSujets à couvrir:\n- \n";
      return { ...prev, message: base };
    });
  }, [intent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#fcfcfd] via-white to-[#beb2ff]/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/10 border border-[#beb2ff]/20 mb-8">
              <Sparkles className="w-4 h-4 text-[#beb2ff]" />
              <span className="text-sm font-medium text-[#beb2ff]">
                Contactez-nous
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#344054] mb-6 leading-tight">
              Parlons de votre
              <br />
              <span className="bg-gradient-to-r from-[#3F2F8D] via-[#6F5DE9] to-[#beb2ff] bg-clip-text text-transparent">
                stratégie ESG
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Nos équipes d'experts sont à votre disposition pour répondre à vos questions et vous accompagner dans votre démarche.
            </p>
            {intent && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-gray-200 text-sm text-gray-700">
                <span className="font-semibold text-[#3F2F8D]">Contexte :</span>
                <span>
                  {intent === "demo" ? "Demande de démo" : "Échange avec un expert"}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#344054] mb-8">
                Informations de contact
              </h2>
              <div className="space-y-6">
                <div className="flex items-start group hover-lift p-4 rounded-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-[#beb2ff]/20 mr-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Mail className="text-[#beb2ff]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#344054] mb-1 text-lg group-hover:text-[#3F2F8D] transition-colors">Email</h3>
                    <a
                      href="mailto:contact@ekyo.app"
                      className="text-[#3F2F8D] hover:text-[#4c30d6] transition-colors font-medium"
                    >
                      contact@ekyo.app
                    </a>
                  </div>
                </div>
                <div className="flex items-start group hover-lift p-4 rounded-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-[#83F0C8]/20 mr-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Phone className="text-[#83F0C8]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#344054] mb-1 text-lg group-hover:text-[#3F2F8D] transition-colors">Téléphone</h3>
                    <a
                      href="tel:+33123456789"
                      className="text-gray-600 hover:text-[#3F2F8D] transition-colors font-medium"
                    >
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>
                <div className="flex items-start group hover-lift p-4 rounded-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-[#3F2F8D]/20 mr-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <MapPin className="text-[#3F2F8D]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#344054] mb-1 text-lg group-hover:text-[#3F2F8D] transition-colors">Adresse</h3>
                    <p className="text-gray-600 font-medium">
                      Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#344054] mb-8">
                {intent === "demo"
                  ? "Demander une démonstration"
                  : intent === "expert"
                    ? "Échanger avec un expert"
                    : "Envoyez-nous un message"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#344054] mb-2"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3F2F8D] focus:border-[#3F2F8D] transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#344054] mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3F2F8D] focus:border-[#3F2F8D] transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-[#344054] mb-2"
                  >
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3F2F8D] focus:border-[#3F2F8D] transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#344054] mb-2"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3F2F8D] focus:border-[#3F2F8D] transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#344054] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3F2F8D] focus:border-[#3F2F8D] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#3F2F8D] text-white px-6 py-4 rounded-lg font-medium hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl group hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                  Envoyer le message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#beb2ff]/10 via-white to-[#83F0C8]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">
            Prêt à démarrer ?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Commencez votre essai gratuit dès aujourd'hui et découvrez comment Ekyo peut transformer votre gestion ESG.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.ekyo.app"
              className="bg-[#3F2F8D] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              Essayer gratuitement
            </Link>
            <Link
              href="/"
              className="bg-white text-[#3F2F8D] border-2 border-[#3F2F8D] px-8 py-4 rounded-lg font-medium hover:bg-[#3F2F8D]/5 transition-all inline-flex items-center justify-center"
            >
              Retour à l'accueil
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
