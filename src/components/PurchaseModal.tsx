import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  CreditCard,
  ChevronRight,
  CheckCircle,
  Download,
  BookOpen,
  Sparkles,
  Gift,
  Star,
  Check
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PurchaseModal({ isOpen, onClose }: PurchaseModalProps) {
  const { formattedPromoPrice, formattedOriginalPrice, formattedTotalValue } = useCurrency();
  const [formData, setFormData] = useState({ name: '', email: '', cardNum: '', cardDate: '', cardCvc: '' });
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/U107434282P?checkoutMode=10';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = HOTMART_CHECKOUT_URL;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#FAF7F2] border border-[#C5A059]/40 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden my-8 text-[#2A140E]">
        
        {/* Close Button */}
        {status !== 'success' && (
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-[#8C766B] hover:text-[#2A140E] bg-[#EFE8DC] hover:bg-[#E4DACB] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold transition-colors z-10"
            aria-label="Fermer"
          >
            ✕
          </button>
        )}

        {status === 'idle' && (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-300/60">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                COMMANDE 100% SÉCURISÉE & ACCÈS IMMÉDIAT
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2A140E] tracking-tight">
              Finalisez votre commande en toute sécurité
            </h3>
            <p className="text-xs text-[#7A6359] mt-1">
              Remplissez les informations ci-dessous pour recevoir immédiatement votre accès à la collection et aux 8 bonus dans votre boîte e-mail.
            </p>

            {errorMsg && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-xs font-semibold p-3 rounded-xl mt-3">
                {errorMsg}
              </div>
            )}

            {/* Order Summary */}
            <div className="bg-[#F3ECE0] border border-[#DFCDB7] rounded-2xl p-4 my-5 space-y-2.5">
              <div className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-[#2A140E] block">La Grande Collection de Recettes Gourmandes</span>
                  <span className="text-[11px] text-[#7A6359]">Bibliothèque numérique complète • 100 recettes</span>
                </div>
                <span className="text-xs text-[#8C766B] line-through font-medium">{formattedOriginalPrice}</span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-[#8B1E3F] flex items-center gap-1.5">
                  <Gift className="w-3.5 h-3.5" /> 6 Bonus Exclusifs (Masterclass, Macarons, Lenôtre...)
                </span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full uppercase">
                  OFFERT
                </span>
              </div>

              <div className="h-[1px] bg-[#DFCDB7] my-2" />

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs text-[#7A6359] uppercase tracking-wider font-semibold block">Total aujourd'hui :</span>
                  <span className="text-[11px] text-emerald-700 font-medium">Paiement unique • Aucun abonnement</span>
                </div>
                <span className="text-2xl font-serif font-black text-[#8B1E3F]">{formattedPromoPrice}</span>
              </div>
            </div>

            <div className="space-y-3.5">
              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-bold text-[#4A3226] uppercase tracking-wider mb-1">
                  Nom et Prénom
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Ex. Émilie Dupont"
                  className="w-full bg-white border border-[#D5C3AE] rounded-xl py-3 px-4 text-xs text-[#2A140E] placeholder-[#A89487] focus:outline-none focus:border-[#8B1E3F] transition-colors"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-[11px] font-bold text-[#4A3226] uppercase tracking-wider mb-1">
                  Adresse E-mail (Pour la réception immédiate des fichiers)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="votre-email@exemple.com"
                  className="w-full bg-white border border-[#D5C3AE] rounded-xl py-3 px-4 text-xs text-[#2A140E] placeholder-[#A89487] focus:outline-none focus:border-[#8B1E3F] transition-colors"
                />
              </div>

              {/* Payment Methods toggle */}
              <div>
                <label className="block text-[11px] font-bold text-[#4A3226] uppercase tracking-wider mb-1.5">
                  Moyen de Paiement Sécurisé
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2.5 px-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'bg-[#8B1E3F] text-white border-[#8B1E3F] shadow-sm'
                        : 'bg-white border-[#D5C3AE] text-[#5C4538] hover:bg-[#F5EDE1]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" /> Carte Bancaire
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`py-2.5 px-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      paymentMethod === 'paypal'
                        ? 'bg-[#003087] text-white border-[#003087] shadow-sm'
                        : 'bg-white border-[#D5C3AE] text-[#5C4538] hover:bg-[#F5EDE1]'
                    }`}
                  >
                    <span className="font-bold tracking-tight">PayPal</span>
                  </button>
                </div>
              </div>

              {/* Card inputs */}
              {paymentMethod === 'card' && (
                <div className="space-y-3 pt-1">
                  <div>
                    <label className="block text-[10.5px] font-semibold text-[#7A6359] uppercase tracking-wider mb-1">
                      Numéro de Carte
                    </label>
                    <input
                      type="text"
                      name="cardNum"
                      value={formData.cardNum}
                      onChange={handleInputChange}
                      placeholder="4000 •••• •••• 9010"
                      className="w-full bg-white border border-[#D5C3AE] rounded-xl py-2.5 px-4 text-xs text-[#2A140E] placeholder-[#A89487] focus:outline-none focus:border-[#8B1E3F] transition-colors font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10.5px] font-semibold text-[#7A6359] uppercase tracking-wider mb-1">
                        Date d'expiration
                      </label>
                      <input
                        type="text"
                        name="cardDate"
                        value={formData.cardDate}
                        onChange={handleInputChange}
                        placeholder="MM/AA"
                        maxLength={5}
                        className="w-full bg-white border border-[#D5C3AE] rounded-xl py-2.5 px-4 text-xs text-[#2A140E] placeholder-[#A89487] focus:outline-none focus:border-[#8B1E3F] transition-colors font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10.5px] font-semibold text-[#7A6359] uppercase tracking-wider mb-1">
                        Code CVC / CVV
                      </label>
                      <input
                        type="password"
                        name="cardCvc"
                        value={formData.cardCvc}
                        onChange={handleInputChange}
                        placeholder="•••"
                        maxLength={4}
                        className="w-full bg-white border border-[#D5C3AE] rounded-xl py-2.5 px-4 text-xs text-[#2A140E] placeholder-[#A89487] focus:outline-none focus:border-[#8B1E3F] transition-colors font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Reassurance Banner */}
            <div className="flex gap-2.5 items-start mt-5 text-[11px] text-[#634E42] bg-[#F1E9DC] p-3 rounded-xl border border-[#DFCDB7]">
              <Lock className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <p>
                Vos informations sont sécurisées par un protocole de chiffrement SSL 256 bits. L'accès aux recettes et aux 8 bonus est immédiat après validation.
              </p>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full mt-5 bg-[#8B1E3F] hover:bg-[#70162A] text-white font-bold py-4 px-6 rounded-2xl text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_8px_20px_rgba(139,30,63,0.35)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>DÉBLOQUER MA COLLECTION MAINTENANT ({formattedPromoPrice})</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {status === 'processing' && (
          <div className="p-12 text-center flex flex-col items-center justify-center min-h-[420px]">
            <div className="w-16 h-16 border-4 border-[#8B1E3F] border-t-transparent rounded-full animate-spin mb-6" />
            <h4 className="text-xl font-serif font-bold text-[#2A140E]">Génération de vos accès en cours...</h4>
            <p className="text-xs text-[#7A6359] mt-2 max-w-sm">
              Votre paiement sécurisé est validé. Nous préparons votre bibliothèque de 100 recettes et vos 8 bonus exclusifs...
            </p>
          </div>
        )}

        {status === 'success' && (
          <div className="p-6 sm:p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 border border-emerald-300">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2A140E] leading-tight">
              Félicitations et bienvenue !
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4538] mt-2 max-w-md">
              Merci <strong className="text-[#2A140E]">{formData.name}</strong> ! Votre accès à vie est activé. Nous avons envoyé un récapitulatif ainsi que vos liens de téléchargement à <strong className="text-[#8B1E3F]">{formData.email}</strong>.
            </p>

            <div className="w-full bg-[#F3ECE0] border border-[#DFCDB7] rounded-2xl p-4 my-5 text-left space-y-3">
              <div className="text-[11px] font-bold text-[#4A3226] uppercase tracking-wider border-b border-[#DFCDB7] pb-2 flex items-center justify-between">
                <span>VOS RESSOURCES PRÊTES AU TÉLÉCHARGEMENT :</span>
                <span className="text-emerald-700 font-bold">9 GUIDES NUMÉRIQUES</span>
              </div>

              {/* Main Book */}
              <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-xl border border-[#DFCDB7]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#8B1E3F]/10 text-[#8B1E3F] flex items-center justify-center font-serif font-bold text-sm">
                    100
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2A140E]">La Grande Collection de Recettes Gourmandes</p>
                    <p className="text-[10.5px] text-[#7A6359]">Format PDF Haute Résolution • 100 Recettes</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => alert("Téléchargement du livre principal démarré !")}
                  className="bg-[#8B1E3F] hover:bg-[#70162A] text-white p-2.5 rounded-xl transition-colors flex items-center justify-center cursor-pointer"
                  title="Télécharger"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

              {/* Bonus 1 & 2 */}
              <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-xl border border-[#DFCDB7]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                    #1
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2A140E]">Bonus 1 : 100 Recettes au Chocolat</p>
                    <p className="text-[10.5px] text-[#7A6359]">Fondants, brownies, truffes & ganaches</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => alert("Téléchargement du bonus #1 démarré !")}
                  className="bg-[#8B1E3F] hover:bg-[#70162A] text-white p-2.5 rounded-xl transition-colors flex items-center justify-center cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

              {/* Bonus Pack all */}
              <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-xl border border-[#DFCDB7]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                    #2-8
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2A140E]">Pack Complet des 7 Autres Bonus Exclusifs</p>
                    <p className="text-[10.5px] text-[#7A6359]">Gâteaux spectaculaires, Crèmes, Fruits, Techniques...</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => alert("Téléchargement du pack bonus complet démarré !")}
                  className="bg-[#8B1E3F] hover:bg-[#70162A] text-white p-2.5 rounded-xl transition-colors flex items-center justify-center cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-[#E8DEC8] hover:bg-[#DFCDB7] text-[#2A140E] font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Fermer et retourner à la page
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
