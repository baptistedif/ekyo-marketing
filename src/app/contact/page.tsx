"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  ArrowRight,
  Loader2,
  ChevronDown,
  ChevronUp,
  Info,
  Building2,
  Users,
  Briefcase,
  Calendar,
  Target,
  CheckCircle2,
  FileText,
  AlertCircle,
  Linkedin,
  ExternalLink,
  Clock,
  HelpCircle,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ToastContainer, Toast } from "@/components/marketing/Toast";

// Composant interne pour éviter l'erreur Suspense
function ContactFormContent() {
  const searchParams = useSearchParams();
  const intent = useMemo(() => {
    const raw = (searchParams.get("intent") ?? "").toLowerCase();
    return raw === "demo" || raw === "expert" ? (raw as "demo" | "expert") : null;
  }, [searchParams]);

  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showQualification, setShowQualification] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [trackingData, setTrackingData] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    referrer: "",
  });

  const [formData, setFormData] = useState({
    // Champs de base
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    // Champs de qualification (optionnels)
    organizationType: "",
    sector: "",
    companySize: "",
    role: "",
    timeline: "",
    // Champs de contexte détaillé (optionnels)
    contextOrganization: "",
    currentChallenges: "",
    mainObjectives: [] as string[],
  });

  // Tracking des métadonnées UTM
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const utm_source = urlParams.get("utm_source") || "";
      const utm_medium = urlParams.get("utm_medium") || "";
      const utm_campaign = urlParams.get("utm_campaign") || "";
      const referrer = document.referrer || "";

      setTrackingData({
        utm_source,
        utm_medium,
        utm_campaign,
        referrer,
      });
    }
  }, []);

  // Ouvrir automatiquement la section qualification si intent présent
  useEffect(() => {
    if (intent && !showQualification) {
      setShowQualification(true);
    }
  }, [intent]);

  // Validation en temps réel
  const validateField = (name: string, value: string) => {
    const newErrors: Record<string, string> = { ...errors };

    switch (name) {
      case "email":
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = "Format d'email invalide";
        } else {
          delete newErrors.email;
        }
        break;
      case "phone":
        if (value && !/^[\d\s\+\-\(\)]+$/.test(value)) {
          newErrors.phone = "Format de téléphone invalide";
        } else {
          delete newErrors.phone;
        }
        break;
      case "name":
        if (value && value.length < 2) {
          newErrors.name = "Le nom doit contenir au moins 2 caractères";
        } else {
          delete newErrors.name;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, value);
  };

  const handleObjectiveChange = (objective: string) => {
    setFormData((prev) => ({
      ...prev,
      mainObjectives: prev.mainObjectives.includes(objective)
        ? prev.mainObjectives.filter((o) => o !== objective)
        : [...prev.mainObjectives, objective],
    }));
  };

  // Calcul du score de qualification
  const calculateLeadScore = () => {
    let score = 0;
    if (formData.organizationType === "eti" || formData.organizationType === "groupe") score += 30;
    if (formData.companySize === "1000-5000" || formData.companySize === "5000-10000" || formData.companySize === "10000+") score += 20;
    if (formData.timeline === "urgent" || formData.timeline === "1-3mois") score += 25;
    if (formData.role === "daf" || formData.role === "directeur-rse") score += 15;
    // Bonus pour contexte détaillé rempli
    if (formData.contextOrganization.trim().length > 0) score += 5;
    if (formData.currentChallenges.trim().length > 0) score += 5;
    if (formData.mainObjectives.length > 0) score += 10;
    return score;
  };

  const addToast = (message: string, type: Toast["type"] = "info") => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation finale
    const finalErrors: Record<string, string> = {};
    if (!formData.name.trim()) finalErrors.name = "Le nom est requis";
    if (!formData.email.trim()) finalErrors.email = "L'email est requis";
    if (!formData.message.trim()) finalErrors.message = "Le message est requis";
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      finalErrors.email = "Format d'email invalide";
    }

    if (Object.keys(finalErrors).length > 0) {
      setErrors(finalErrors);
      setTouched({
        name: true,
        email: true,
        message: true,
      });
      addToast("Veuillez corriger les erreurs dans le formulaire", "error");
      return;
    }

    setIsLoading(true);

    // Calcul du score de qualification
    const leadScore = calculateLeadScore();
    const qualification = {
      score: leadScore,
      level: leadScore >= 60 ? "hot" : leadScore >= 40 ? "qualified" : "information",
    };

    // Simulation d'envoi (à remplacer par un vrai appel API)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      const submissionData = {
        ...formData,
        intent: intent || "general",
        leadScore: qualification.score,
        qualificationLevel: qualification.level,
        timestamp: new Date().toISOString(),
        tracking: trackingData,
      };

      console.log("Form submitted:", submissionData);
      
      addToast("Merci pour votre message ! Vous recevrez une confirmation par email dans quelques instants.", "success");
      
      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        organizationType: "",
        sector: "",
        companySize: "",
        role: "",
        timeline: "",
        contextOrganization: "",
        currentChallenges: "",
        mainObjectives: [],
      });
      setTouched({});
      setErrors({});
    } catch (error) {
      addToast("Une erreur est survenue. Veuillez réessayer.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const hasErrors = Object.keys(errors).length > 0;
  const currentStep = showQualification ? 2 : 1;
  const totalSteps = 2;

  return (
    <>
      <ToastContainer toasts={toasts} onClose={removeToast} />
      
      {/* Hero Section - Amélioré */}
      <section className="relative py-32 bg-gradient-to-br from-[#fcfcfd] via-white to-[#beb2ff]/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#beb2ff]/10 border border-[#beb2ff]/20 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#beb2ff]" />
              <span className="text-sm font-medium text-[#beb2ff]">
                Contactez-nous
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#344054] mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Parlons de votre
              <br />
              <span className="bg-gradient-to-r from-[#3F2F8D] via-[#6F5DE9] to-[#beb2ff] bg-clip-text text-transparent">
                stratégie ESG
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Nos équipes d'experts sont à votre disposition pour répondre à vos questions et vous accompagner dans votre démarche ESG et climat.
            </p>
            {intent && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-gray-200 text-sm text-gray-700 animate-fade-in mb-6" style={{ animationDelay: "0.3s" }}>
                <span className="font-semibold text-[#3F2F8D]">Contexte :</span>
                <span>
                  {intent === "demo" ? "Demande de démo" : "Échange avec un expert"}
                </span>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link
                href="https://calendly.com/wafa-jerbi-ekyo/point-de-suivi?back=1&month=2026-01"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3F2F8D] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl group"
              >
                Planifier un rendez-vous
                <Calendar className="ml-2 group-hover:scale-110 transition-transform" size={20} />
              </Link>
              <Link
                href="#contact-form"
                className="bg-white text-[#3F2F8D] border-2 border-[#3F2F8D] px-8 py-4 rounded-lg font-medium hover:bg-[#3F2F8D]/5 transition-all inline-flex items-center justify-center"
              >
                Remplir le formulaire
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-4">Ils nous font confiance</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              <div className="text-lg font-semibold text-gray-400">Deezer</div>
              <div className="text-lg font-semibold text-gray-400">Groupe Vyv</div>
              <div className="text-lg font-semibold text-gray-400">In Extenso</div>
              <div className="text-lg font-semibold text-gray-400">Arcade Beauty</div>
              <div className="text-lg font-semibold text-gray-400">Luminess</div>
              <div className="text-lg font-semibold text-gray-400">+200 entreprises</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info - Amélioré */}
            <div>
              <h2 className="text-3xl font-bold text-[#344054] mb-8">
                Informations de contact
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start group hover-lift p-4 rounded-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-[#beb2ff]/20 mr-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Mail className="text-[#beb2ff]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#344054] mb-1 text-lg group-hover:text-[#3F2F8D] transition-colors">Email</h3>
                    <a
                      href="mailto:contact@ekyo.app"
                      className="text-[#3F2F8D] hover:text-[#4c30d6] transition-colors font-medium"
                      aria-label="Envoyer un email à contact@ekyo.app"
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
                      aria-label="Appeler le +33 1 23 45 67 89"
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
                      Saint Cloud, France
                    </p>
                  </div>
                </div>
                <div className="flex items-start group hover-lift p-4 rounded-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-[#0077b5]/20 mr-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Linkedin className="text-[#0077b5]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#344054] mb-1 text-lg group-hover:text-[#3F2F8D] transition-colors">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/company/ekyo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0077b5] hover:text-[#005885] transition-colors font-medium inline-flex items-center gap-1"
                      aria-label="Visiter la page LinkedIn d'Ekyo"
                    >
                      Suivez-nous sur LinkedIn
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="flex items-start group hover-lift p-4 rounded-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-[#0069ff]/20 mr-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Calendar className="text-[#0069ff]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#344054] mb-1 text-lg group-hover:text-[#3F2F8D] transition-colors">Planifier un rendez-vous</h3>
                    <a
                      href="https://calendly.com/wafa-jerbi-ekyo/point-de-suivi?back=1&month=2026-01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0069ff] hover:text-[#0052cc] transition-colors font-medium inline-flex items-center gap-1"
                      aria-label="Planifier un rendez-vous avec Ekyo"
                    >
                      Réserver un créneau
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ / Ressources */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-[#344054] mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#beb2ff]" />
                  Besoin d'aide ?
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/blog"
                    className="flex items-center gap-2 text-gray-600 hover:text-[#3F2F8D] transition-colors group"
                  >
                    <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Consulter notre blog</span>
                  </Link>
                  <Link
                    href="/plateforme"
                    className="flex items-center gap-2 text-gray-600 hover:text-[#3F2F8D] transition-colors group"
                  >
                    <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Découvrir la plateforme</span>
                  </Link>
                  <Link
                    href="/etudes-de-cas"
                    className="flex items-center gap-2 text-gray-600 hover:text-[#3F2F8D] transition-colors group"
                  >
                    <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Voir nos études de cas</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {/* Indicateur de progression */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    Étape {currentStep} sur {totalSteps}
                  </span>
                  <span className="text-sm text-gray-500">
                    {currentStep === 1 ? "Informations de base" : "Qualification"}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-[#3F2F8D] to-[#6F5DE9] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  ></div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[#344054] mb-8">
                {intent === "demo"
                  ? "Demander une démonstration"
                  : intent === "expert"
                    ? "Échanger avec un expert"
                    : "Envoyez-nous un message"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Champs de base */}
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
                    onBlur={handleBlur}
                    aria-invalid={touched.name && errors.name ? "true" : "false"}
                    aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#3F2F8D] focus:border-[#3F2F8D] transition-all ${
                      touched.name && errors.name
                        ? "border-red-300 bg-red-50"
                        : touched.name && !errors.name
                        ? "border-[#83F0C8] bg-[#83F0C8]/5"
                        : "border-gray-200"
                    }`}
                  />
                  {touched.name && errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.name}
                    </p>
                  )}
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
                    onBlur={handleBlur}
                    aria-invalid={touched.email && errors.email ? "true" : "false"}
                    aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#3F2F8D] focus:border-[#3F2F8D] transition-all ${
                      touched.email && errors.email
                        ? "border-red-300 bg-red-50"
                        : touched.email && !errors.email
                        ? "border-[#83F0C8] bg-[#83F0C8]/5"
                        : "border-gray-200"
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.email}
                    </p>
                  )}
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
                    aria-invalid={touched.phone && errors.phone ? "true" : "false"}
                    aria-describedby={touched.phone && errors.phone ? "phone-error" : undefined}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#3F2F8D] focus:border-[#3F2F8D] transition-all ${
                      touched.phone && errors.phone
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200"
                    }`}
                  />
                  {touched.phone && errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.phone}
                    </p>
                  )}
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
                    onBlur={handleBlur}
                    placeholder="Décrivez votre besoin, votre contexte ou posez-nous vos questions..."
                    aria-invalid={touched.message && errors.message ? "true" : "false"}
                    aria-describedby={touched.message && errors.message ? "message-error" : undefined}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#3F2F8D] focus:border-[#3F2F8D] transition-all resize-none ${
                      touched.message && errors.message
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200"
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.message}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3 inline mr-1" />
                    Temps de réponse moyen : sous 24h
                  </p>
                </div>

                {/* Section de qualification optionnelle */}
                <div className="border-t border-gray-200 pt-6">
                  <button
                    type="button"
                    onClick={() => setShowQualification(!showQualification)}
                    className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-[#beb2ff]/5 to-[#83F0C8]/5 rounded-lg border border-gray-200 hover:border-[#beb2ff] transition-all group"
                    aria-expanded={showQualification}
                    aria-controls="qualification-section"
                  >
                    <div className="flex items-center gap-3">
                      <Info className="w-5 h-5 text-[#beb2ff]" />
                      <span className="text-sm font-medium text-[#344054]">
                        Aidez-nous à mieux vous comprendre
                        <span className="text-gray-500 font-normal ml-1">(optionnel)</span>
                      </span>
                    </div>
                    {showQualification ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 group-hover:text-[#3F2F8D] transition-colors" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-[#3F2F8D] transition-colors" />
                    )}
                  </button>

                  {showQualification && (
                    <div
                      id="qualification-section"
                      className="mt-4 space-y-4 p-4 bg-white rounded-lg border border-gray-200 animate-fade-in"
                    >
                      <div>
                        <label
                          htmlFor="organizationType"
                          className="block text-sm font-medium text-[#344054] mb-2"
                        >
                          <Building2 className="w-4 h-4 inline mr-1" />
                          Type d'organisation
                        </label>
                        <select
                          id="organizationType"
                          name="organizationType"
                          value={formData.organizationType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3F2F8D] focus:border-[#3F2F8D] transition-all bg-white"
                        >
                          <option value="">Sélectionnez...</option>
                          <option value="eti">ETI</option>
                          <option value="groupe">Groupe</option>
                          <option value="pme">PME</option>
                          <option value="startup">Startup</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="sector"
                          className="block text-sm font-medium text-[#344054] mb-2"
                        >
                          Secteur d'activité
                        </label>
                        <select
                          id="sector"
                          name="sector"
                          value={formData.sector}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3F2F8D] focus:border-[#3F2F8D] transition-all bg-white"
                        >
                          <option value="">Sélectionnez...</option>
                          <option value="industrie">Industrie</option>
                          <option value="services">Services</option>
                          <option value="tech">Technologie</option>
                          <option value="retail">Distribution/Retail</option>
                          <option value="finance">Finance</option>
                          <option value="sante">Santé</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="companySize"
                            className="block text-sm font-medium text-[#344054] mb-2"
                          >
                            <Users className="w-4 h-4 inline mr-1" />
                            Taille
                          </label>
                          <select
                            id="companySize"
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3F2F8D] focus:border-[#3F2F8D] transition-all bg-white"
                          >
                            <option value="">Sélectionnez...</option>
                            <option value="1-50">1-50 employés</option>
                            <option value="51-250">51-250 employés</option>
                            <option value="251-1000">251-1000 employés</option>
                            <option value="1000-5000">1000-5000 employés</option>
                            <option value="5000-10000">5000-10000 employés</option>
                            <option value="10000+">Plus de 10000 employés</option>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="role"
                            className="block text-sm font-medium text-[#344054] mb-2"
                          >
                            <Briefcase className="w-4 h-4 inline mr-1" />
                            Fonction
                          </label>
                          <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3F2F8D] focus:border-[#3F2F8D] transition-all bg-white"
                          >
                            <option value="">Sélectionnez...</option>
                            <option value="daf">DAF</option>
                            <option value="directeur-rse">Directeur RSE</option>
                            <option value="ceo">CEO/DG</option>
                            <option value="responsable-achats">Responsable Achats</option>
                            <option value="autre">Autre</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="timeline"
                          className="block text-sm font-medium text-[#344054] mb-2"
                        >
                          <Calendar className="w-4 h-4 inline mr-1" />
                          Quand souhaitez-vous démarrer ?
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3F2F8D] focus:border-[#3F2F8D] transition-all bg-white"
                        >
                          <option value="">Sélectionnez...</option>
                          <option value="urgent">Urgent (sous 1 mois)</option>
                          <option value="1-3mois">1-3 mois</option>
                          <option value="3-6mois">3-6 mois</option>
                          <option value="exploration">En exploration</option>
                        </select>
                      </div>

                      {/* Section contexte détaillé */}
                      <div className="border-t border-gray-200 pt-4 mt-4">
                        <h3 className="text-sm font-semibold text-[#344054] mb-3 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#beb2ff]" />
                          Contexte détaillé (optionnel)
                        </h3>
                        <p className="text-xs text-gray-500 mb-4">
                          Ces informations nous aident à mieux comprendre votre situation et à personnaliser notre réponse.
                        </p>

                        <div className="space-y-4">
                          <div>
                            <label
                              htmlFor="contextOrganization"
                              className="block text-sm font-medium text-[#344054] mb-2"
                            >
                              Contexte organisation / périmètre
                            </label>
                            <textarea
                              id="contextOrganization"
                              name="contextOrganization"
                              value={formData.contextOrganization}
                              onChange={handleChange}
                              rows={3}
                              placeholder="Décrivez votre organisation, votre périmètre, vos entités..."
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3F2F8D] focus:border-[#3F2F8D] transition-all resize-none text-sm"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="currentChallenges"
                              className="block text-sm font-medium text-[#344054] mb-2"
                            >
                              <AlertCircle className="w-4 h-4 inline mr-1" />
                              Enjeux actuels
                            </label>
                            <textarea
                              id="currentChallenges"
                              name="currentChallenges"
                              value={formData.currentChallenges}
                              onChange={handleChange}
                              rows={3}
                              placeholder="Quels sont vos principaux défis ESG / climat actuels ?"
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3F2F8D] focus:border-[#3F2F8D] transition-all resize-none text-sm"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-[#344054] mb-2">
                              <Target className="w-4 h-4 inline mr-1" />
                              Objectifs principaux (plusieurs choix possibles)
                            </label>
                            <div className="space-y-2">
                              {[
                                { value: "csrd", label: "CSRD / Reporting durable" },
                                { value: "bilan-carbone", label: "Bilan Carbone / Empreinte carbone" },
                                { value: "pilotage-esg", label: "Pilotage ESG / Performance" },
                                { value: "conformite", label: "Conformité réglementaire" },
                                { value: "consolidation", label: "Consolidation multi-entités" },
                                { value: "autre", label: "Autre" },
                              ].map((objective) => (
                                <label
                                  key={objective.value}
                                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                                >
                                  <input
                                    type="checkbox"
                                    checked={formData.mainObjectives.includes(objective.value)}
                                    onChange={() => handleObjectiveChange(objective.value)}
                                    className="w-4 h-4 text-[#3F2F8D] border-gray-300 rounded focus:ring-[#3F2F8D]"
                                  />
                                  <span className="text-sm text-gray-700">{objective.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-[#83F0C8]/5 border border-[#83F0C8]/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#83F0C8] flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-700">
                      <p className="font-medium mb-1">Confirmation par email</p>
                      <p className="text-gray-600">Vous recevrez une confirmation par email dans quelques instants après l'envoi de votre message.</p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || hasErrors}
                  className="w-full bg-[#3F2F8D] text-white px-6 py-4 rounded-lg font-medium hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl group hover:-translate-y-0.5 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100"
                  aria-busy={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={20} />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </>
                  )}
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
              className="bg-[#3F2F8D] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#3F2F8D]/20"
              aria-label="Essayer gratuitement Ekyo"
            >
              Essayer gratuitement
            </Link>
            <Link
              href="https://calendly.com/wafa-jerbi-ekyo/point-de-suivi?back=1&month=2026-01"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#3F2F8D] border-2 border-[#3F2F8D] px-8 py-4 rounded-lg font-medium hover:bg-[#3F2F8D]/5 transition-all inline-flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#3F2F8D]/20"
              aria-label="Planifier un rendez-vous"
            >
              Planifier un rendez-vous
              <Calendar className="ml-2" size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky CTA Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg z-40 md:hidden">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Link
            href="https://calendly.com/wafa-jerbi-ekyo/point-de-suivi?back=1&month=2026-01"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#3F2F8D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4c30d6] transition-all inline-flex items-center justify-center shadow-md focus:outline-none focus:ring-4 focus:ring-[#3F2F8D]/20"
            aria-label="Planifier un rendez-vous avec Ekyo"
          >
            Planifier un rendez-vous
            <Calendar className="ml-2" size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}

// Composant principal avec Suspense
export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="animate-spin text-[#3F2F8D]" size={32} />
        </div>
      }
    >
      <ContactFormContent />
    </Suspense>
  );
}
