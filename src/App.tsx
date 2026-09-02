import React, { useState, useEffect, Suspense, lazy } from 'react';
import {
  Star,
  ShieldCheck,
  Clock,
  BookOpen,
  Sparkles,
  Download,
  Check,
  Plus,
  Minus,
  HelpCircle,
  Lock,
  Flame,
  Award,
  TrendingUp,
  Smile,
  Heart,
  ChefHat,
  ArrowRight,
  Eye,
  ChevronRight,
  Users,
  Gift,
  CheckCircle,
  ShoppingBag,
  RotateCcw,
  SearchX,
  HeartHandshake,
  Smartphone,
  Zap,
  Globe
} from 'lucide-react';

// Custom components
import HeaderBanner from './components/HeaderBanner';
import CollectionMockup from './components/CollectionMockup';
import EbookCarousel from './components/EbookCarousel';
import TestimonialsCarousel from './components/TestimonialsCarousel';
const PurchaseModal = lazy(() => import('./components/PurchaseModal'));
const RecipePreviewModal = lazy(() => import('./components/RecipePreviewModal'));

import { useCurrency } from './context/CurrencyContext';

// Static Data in French
import {
  HERO_BULLETS,
  TRUST_POINTS,
  PROBLEM_CARDS,
  PRODUCT_HIGHLIGHTS,
  RECIPE_CATEGORIES,
  RECIPE_SAMPLES,
  BENEFITS,
  TARGET_AUDIENCE,
  BONUSES,
  BEFORE_AFTER,
  TESTIMONIALS,
  FAQS
} from './data';
import { RecipeSampleItem } from './types';

export default function App() {
  const { formattedPromoPrice, formattedOriginalPrice, formattedTotalValue } = useCurrency();
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState<boolean>(false);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeSampleItem | null>(null);
  const [openFaq, setOpenFaq] = useState<string | null>(FAQS[0].id);

  const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/U107434282P?checkoutMode=10';

  const openCheckout = () => {
    window.location.href = HOTMART_CHECKOUT_URL;
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(prev => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2A140E] font-sans antialiased selection:bg-[#8B1E3F] selection:text-white">
      
      {/* 1. TOP HEADER BANNER */}
      <HeaderBanner onCtaClick={openCheckout} />

      {/* 2. HERO / PREMIÈRE DOBRA */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Subtle decorative background gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#F3ECE0] via-[#FAF7F2] to-transparent -z-10" />

        <div className="max-w-7xl mx-auto">
          
          {/* Top Pill Tag */}
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-2 bg-[#F3ECE0] border border-[#C5A059]/40 px-4 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#8B1E3F]" />
              <span className="text-xs sm:text-sm font-serif font-bold text-[#8B1E3F] tracking-wide uppercase">
                BIBLIOTHÈQUE NUMÉRIQUE PREMIUM
              </span>
            </div>
          </div>

          {/* Centralized Hero Content */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2A140E] leading-[1.15] tracking-tight uppercase">
              +100 RECETTES FACILES ET GOURMANDES
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#5C4538] leading-relaxed max-w-2xl mx-auto font-normal">
              Des recettes simples et délicieuses aux créations plus raffinées, avec des techniques et astuces pour réussir vos desserts comme un véritable pâtissier.
            </p>

            {/* Mockup Image directly below the subtitle phrase */}
            <div className="py-4 flex justify-center">
              <CollectionMockup onOpenRecipe={() => setSelectedRecipe(RECIPE_SAMPLES[0])} />
            </div>

            {/* Badges Pill Rows (3 top, 2 bottom) */}
            <div className="space-y-2 pt-2 max-w-xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                {["100 RECETTES", "RECETTES VARIÉES", "ACCÈS NUMÉRIQUE"].map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-white border border-[#DFCDB7] text-[#4A3226] text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full shadow-xs"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    {badge}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                {["POUR TOUS LES NIVEAUX", "ACCÈS IMMÉDIAT"].map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-white border border-[#DFCDB7] text-[#4A3226] text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full shadow-xs"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* 4. LE PROBLÈME ET LA SOLUTION */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5EDE1] border-b border-[#DFCDB7]">
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Header */}
          <div className="text-center space-y-2.5 max-w-3xl mx-auto">
            <span className="inline-block text-[11px] font-serif font-bold tracking-widest text-[#8B1E3F] uppercase bg-[#8B1E3F]/10 px-3 py-1 rounded-full border border-[#8B1E3F]/20">
              LE QUOTIDIEN EN CUISINE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2A140E] tracking-tight">
              VOUS MANQUEZ PARFOIS D'INSPIRATION ?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#634E42] max-w-2xl mx-auto leading-relaxed">
              Préparer de délicieux desserts devrait toujours être un plaisir simple et gratifiant, pas une corvée ni un casse-tête.
            </p>
          </div>

          {/* 4 Problem Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {PROBLEM_CARDS.map((card, idx) => (
              <div
                key={card.id}
                className="bg-white p-5 rounded-2xl border border-[#DFCDB7] hover:border-[#8B1E3F]/50 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#8B1E3F]/10 text-[#8B1E3F] group-hover:bg-[#8B1E3F] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 shadow-xs">
                      {card.id === 'prob-1' && <RotateCcw className="w-5 h-5" />}
                      {card.id === 'prob-2' && <SearchX className="w-5 h-5" />}
                      {card.id === 'prob-3' && <Sparkles className="w-5 h-5" />}
                      {card.id === 'prob-4' && <HeartHandshake className="w-5 h-5" />}
                    </div>
                    <span className="text-xs font-bold tracking-wider text-[#8B1E3F] bg-[#FAF7F2] border border-[#DFCDB7] px-2.5 py-1 rounded-full font-mono">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#2A140E] leading-snug mb-2 group-hover:text-[#8B1E3F] transition-colors">
                    {card.question}
                  </h3>
                </div>
                <p className="text-xs text-[#634E42] leading-relaxed pt-3 border-t border-[#F0E6D8] mt-2">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. LES 6 BONUS EXCLUSIFS (100% GRATUITS) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF7F2] to-[#F5EDE1] border-b border-[#DFCDB7]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-3 mb-12">
            <span className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-red-200 shadow-xs">
              <Gift className="w-3.5 h-3.5 text-red-600" />
              6 BONUS EXCLUSIFS • 100% GRATUITS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2A140E]">
              RECEVEZ CES 6 BONUS EXCLUSIFS 100% GRATUITS
            </h2>
            <p className="text-sm sm:text-base text-[#634E42] max-w-3xl mx-auto leading-relaxed">
              En commandant aujourd'hui votre collection de 100 recettes, vous débloquez immédiatement ces 6 ressources numériques d'exception sans débourser un centime de plus.
            </p>
          </div>

          {/* 6 Bonuses Grid (3 columns on lg, 2 on sm) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {BONUSES.map((bonus) => (
              <div
                key={bonus.id}
                className="bg-white border-2 border-[#DFCDB7] hover:border-[#8B1E3F] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Cover */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#2A140E]">
                    <img
                      src={bonus.image}
                      alt={bonus.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <span className="absolute top-3 left-3 bg-[#8B1E3F] text-amber-200 text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-amber-300/30 shadow-xs">
                      BONUS #{bonus.number}
                    </span>

                    <span className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-full shadow-xs">
                      OFFERT
                    </span>
                  </div>

                  {/* Details */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-[#2A140E] leading-snug group-hover:text-[#8B1E3F] transition-colors">
                        {bonus.title}
                      </h3>
                      <p className="text-xs text-[#8B1E3F] font-semibold mt-1">
                        {bonus.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#634E42] leading-relaxed">
                      {bonus.description}
                    </p>

                    {/* Features checklist */}
                    {bonus.features && (
                      <ul className="space-y-1.5 pt-3 border-t border-[#F0E6D8] text-xs text-[#5C4538]">
                        {bonus.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-tight">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Price tag with Red Strikethrough and 0€ */}
                <div className="p-5 pt-0">
                  <div className="p-3 bg-[#FAF7F2] rounded-2xl border border-[#E8DEC8] flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10.5px] text-[#7A6359] font-medium">Valeur réelle</span>
                      <span className="text-sm font-bold text-red-600 line-through">
                        {bonus.originalPrice},00 €
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full block mb-0.5">
                        100% GRATUIT
                      </span>
                      <span className="text-base sm:text-lg font-black text-emerald-700 font-mono">
                        0,00 €
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. ÉCHANTILLONS & APERÇU DES E-BOOKS (DÉFILEMENT FLUIDE GAUCHE) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EDE1] border-b border-[#DFCDB7] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <EbookCarousel />
        </div>
      </section>

      {/* 5. AVIS CLIENTS & TÉMOIGNAGES (DÉFILEMENT FLUIDE GAUCHE) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF7F2] to-[#F5EDE1] border-b border-[#DFCDB7] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* 6. SECTION OFFRE & TARIF (CLEAN & VISUEL AVEC IMAGE DU PRODUIT) */}
      <section id="offre" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF0DC]/50 border-b border-[#DFCDB7]">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center space-y-3 mb-12">
            <span className="inline-block bg-[#8B1E3F] text-amber-100 text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full border border-amber-300/30">
              OFFRE SPÉCIALE D'ACCÈS IMMÉDIAT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2A140E]">
              ACCÉDEZ À LA COLLECTION COMPLÈTE
            </h2>
            <p className="text-sm sm:text-base text-[#634E42] max-w-xl mx-auto">
              Recevez l'intégralité de la bibliothèque gourmande ainsi que tous les bonus exclusifs en accès immédiat à vie.
            </p>
          </div>

          {/* Clean & Elegant Product Offer Card */}
          <div className="bg-white rounded-3xl border-2 border-[#DFCDB7] shadow-xl overflow-hidden p-6 sm:p-10 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              
              {/* Product Image Column */}
              <div className="flex flex-col items-center justify-center relative">
                <div className="relative w-full max-w-sm rounded-2xl overflow-hidden bg-[#FAF7F2] p-2 border border-[#DFCDB7] shadow-md group">
                  <img
                    src="https://i.ibb.co/H1Mmq1G/Chat-GPT-Image-2-de-set-de-2026-08-42-40.png"
                    alt="Collection Complète 100 Recettes Gourmandes et Bonus"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Clean Offer & Pricing Details Column */}
              <div className="space-y-6 flex flex-col justify-center">
                
                <div className="space-y-2 border-b border-[#DFCDB7]/80 pb-5">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2A140E]">
                    La Grande Collection Gourmande
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7A6359]">
                    Le guide complet des passionnés de pâtisserie et de desserts faits maison.
                  </p>
                </div>

                {/* Key Points - Clean & Minimal */}
                <div className="space-y-2.5 text-xs sm:text-sm text-[#3D261C]">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>100 recettes pas à pas</strong> illustrées et détaillées</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>6 e-books bonus inclus</strong> (Masterclass, Lenôtre, Macarons...)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Format <strong>PDF haute qualité</strong> interactif & imprimable</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Accès immédiat et à vie</strong> sur smartphone, tablette & PC</span>
                  </div>
                </div>

                {/* Pricing Block */}
                <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#DFCDB7] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-[#8C766B] line-through block">
                      Prix régulier : {formattedOriginalPrice}
                    </span>
                    <span className="text-3xl sm:text-4xl font-serif font-black text-[#8B1E3F] block leading-tight">
                      {formattedPromoPrice}
                    </span>
                  </div>
                  <div className="text-center sm:text-right">
                    <span className="inline-block bg-emerald-100 text-emerald-800 font-bold text-[11px] px-2.5 py-1 rounded-full border border-emerald-300">
                      Paiement unique
                    </span>
                    <span className="text-[11px] text-[#7A6359] block mt-1">
                      Aucun abonnement
                    </span>
                  </div>
                </div>

                {/* CTA & Security */}
                <div className="space-y-3 pt-1">
                  <a
                    href={HOTMART_CHECKOUT_URL}
                    className="w-full bg-[#8B1E3F] hover:bg-[#70162A] text-white font-bold text-sm sm:text-base py-4 px-6 rounded-2xl uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>JE VEUX MA COLLECTION GOURMANDE</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>

                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[#7A6359] pt-1">
                    <span>✓ Téléchargement immédiat</span>
                    <span>✓ Paiement sécurisé</span>
                    <span>✓ Garantie 7 jours</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 15. SECTION GARANTIE */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white via-[#FDFBF7] to-[#FAF4EB] p-6 sm:p-10 md:p-12 rounded-3xl border-2 border-[#DFCDB7] shadow-xl relative overflow-hidden">
          
          {/* Subtle decorative background watermarks */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#8B1E3F]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 text-center md:text-left relative z-10">
            
            {/* Premium Gold & Wine Guarantee Seal */}
            <div className="relative shrink-0">
              {/* Outer decorative ring */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#FAF0DC] to-[#E8D3AB] p-1.5 shadow-lg border border-[#C5A059]/40 flex items-center justify-center">
                {/* Inner deep medallion */}
                <div className="w-full h-full rounded-full bg-[#20100A] text-[#FAF7F2] border-2 border-[#C5A059] flex flex-col items-center justify-center p-2 shadow-inner text-center">
                  <div className="flex items-center gap-0.5 text-[#E6C37A] mb-0.5">
                    <Star className="w-3 h-3 fill-[#E6C37A]" />
                    <Star className="w-3.5 h-3.5 fill-[#E6C37A]" />
                    <Star className="w-3 h-3 fill-[#E6C37A]" />
                  </div>
                  
                  <span className="text-xl sm:text-2xl font-serif font-black text-amber-300 leading-none tracking-tight">
                    7 JOURS
                  </span>
                  
                  <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-amber-100/90 leading-tight mt-1">
                    Garantie 100%
                  </span>
                  
                  <span className="text-[8px] text-emerald-400 font-semibold uppercase tracking-widest mt-0.5">
                    Satisfait ou Remboursé
                  </span>
                </div>
              </div>

              {/* Bottom badge ribbon */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#8B1E3F] text-amber-100 font-bold text-[9px] uppercase tracking-widest px-3 py-0.5 rounded-full shadow-md border border-amber-300/40 whitespace-nowrap">
                Zéro Risque
              </div>
            </div>

            {/* Guarantee Copy & Reassurance Badges */}
            <div className="space-y-4 flex-1">
              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-1.5 text-xs font-serif font-bold tracking-widest text-[#8B1E3F] uppercase">
                  <ShieldCheck className="w-4 h-4 text-[#8B1E3F]" />
                  VOTRE SÉRÉNITÉ TOTALE
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2A140E]">
                  Essayez la collection sans aucun risque
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#5C4538] leading-relaxed">
                Prenez le temps d'explorer l'intégralité de vos 100 recettes et de vos 6 e-books bonus. Testez vos premières créations gourmandes à votre rythme. Si pour quelque raison que ce soit vous n'êtes pas comblé(e), un simple message par e-mail suffit pour recevoir votre remboursement intégral sous 7 jours.
              </p>

              {/* 3 Trust micro-points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-[#DFCDB7]/70">
                <div className="flex items-center gap-2 text-xs text-[#2A140E] font-medium bg-white/80 p-2 rounded-xl border border-[#DFCDB7]/60">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Remboursement direct</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#2A140E] font-medium bg-white/80 p-2 rounded-xl border border-[#DFCDB7]/60">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sans justification</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#2A140E] font-medium bg-white/80 p-2 rounded-xl border border-[#DFCDB7]/60">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Support 7j/7</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 16. FAQ ACCORDION */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EDE1]">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-serif font-bold tracking-widest text-[#8B1E3F] uppercase">
              FOIRE AUX QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2A140E]">
              QUESTIONS FRÉQUEMMENT POSÉES
            </h2>
            <p className="text-sm sm:text-base text-[#634E42]">
              Toutes les réponses pour vous lancer en toute confiance.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#DFCDB7] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-[#2A140E] hover:text-[#8B1E3F] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="w-6 h-6 rounded-full bg-[#FAF7F2] text-[#8B1E3F] flex items-center justify-center shrink-0 text-sm font-bold border border-[#E8DEC8]">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#634E42] leading-relaxed border-t border-[#F0E6D8]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Final Call to Action under FAQ */}
          <div className="mt-10 text-center">
            <a
              href={HOTMART_CHECKOUT_URL}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#8B1E3F] hover:bg-[#70162A] text-white font-bold text-sm sm:text-base py-4 px-8 rounded-2xl uppercase tracking-wider transition-all duration-300 shadow-[0_10px_25px_rgba(139,30,63,0.35)] hover:shadow-[0_12px_28px_rgba(139,30,63,0.45)] cursor-pointer"
            >
              <span>JE VEUX MA COLLECTION GOURMANDE</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>

      {/* 18. FOOTER */}
      <footer className="bg-[#150905] text-[#A89487] py-10 px-4 sm:px-6 lg:px-8 border-t border-[#C5A059]/20 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-1">
            <p className="font-serif font-bold text-sm text-white">
              La Grande Collection de Recettes Gourmandes
            </p>
            <p className="text-[11px] text-[#8C766B]">
              Bibliothèque numérique de recettes de pâtisserie et de desserts. Tous droits réservés.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-[11px] text-[#8C766B]">
            <span>Mentions Légales</span>
            <span>•</span>
            <span>Politique de Confidentialité</span>
            <span>•</span>
            <span>Conditions Générales de Vente</span>
            <span>•</span>
            <span>Contact & Support</span>
          </div>

        </div>
      </footer>

      {/* 20. MODALS */}
      <Suspense fallback={null}>
        <PurchaseModal
          isOpen={isPurchaseModalOpen}
          onClose={() => setIsPurchaseModalOpen(false)}
        />
        <RecipePreviewModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          onCtaClick={openCheckout}
        />
      </Suspense>

    </div>
  );
}
