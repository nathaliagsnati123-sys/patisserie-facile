import React from 'react';
import { Clock, ChefHat, Users, Sparkles, Check, X, ShieldCheck } from 'lucide-react';
import { RecipeSampleItem } from '../types';

interface RecipePreviewModalProps {
  recipe: RecipeSampleItem | null;
  onClose: () => void;
  onCtaClick: () => void;
}

export default function RecipePreviewModal({ recipe, onClose, onCtaClick }: RecipePreviewModalProps) {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] border border-[#C5A059]/40 rounded-3xl shadow-2xl overflow-hidden my-6 text-[#2A140E]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero Image */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-black/30" />
          
          <div className="absolute bottom-3 left-4 sm:left-6 right-4">
            <span className="inline-block bg-[#8B1E3F] text-amber-200 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
              {recipe.category}
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#2A140E] drop-shadow-sm">
              {recipe.title}
            </h3>
          </div>
        </div>

        {/* Recipe Quick Meta */}
        <div className="px-5 sm:px-8 py-3 bg-[#F3ECE0] border-y border-[#DFCDB7] flex flex-wrap items-center justify-between gap-3 text-xs text-[#5C4538]">
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-4 h-4 text-[#8B1E3F]" />
            <span>Préparation : <strong>{recipe.prepTime}</strong></span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-4 h-4 text-amber-700" />
            <span>Cuisson : <strong>{recipe.cookTime}</strong></span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <ChefHat className="w-4 h-4 text-[#8B1E3F]" />
            <span>Niveau : <strong>{recipe.difficulty}</strong></span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Users className="w-4 h-4 text-[#5C4538]" />
            <span>Portions : <strong>{recipe.servings}</strong></span>
          </div>
        </div>

        <div className="p-5 sm:p-8 space-y-5 max-h-[55vh] overflow-y-auto">
          {/* Description */}
          <p className="text-xs sm:text-sm text-[#5C4538] leading-relaxed italic border-l-2 border-[#8B1E3F] pl-3">
            "{recipe.description}"
          </p>

          {/* Ingredients & Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            
            {/* Ingredients column */}
            <div className="md:col-span-2 bg-white p-4 rounded-2xl border border-[#DFCDB7]">
              <h4 className="font-serif font-bold text-xs sm:text-sm text-[#2A140E] uppercase tracking-wider mb-3 flex items-center gap-2">
                <span>Ingrédients</span>
              </h4>
              <ul className="space-y-2 text-xs text-[#4A3226]">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B1E3F] mt-1.5 shrink-0" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preparation Steps column */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="font-serif font-bold text-xs sm:text-sm text-[#2A140E] uppercase tracking-wider mb-2">
                Étapes de Préparation
              </h4>
              <div className="space-y-2.5 text-xs sm:text-[13px] text-[#4A3226]">
                {recipe.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-[#E8DEC8]">
                    <span className="w-5 h-5 rounded-full bg-[#8B1E3F] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Chef Tip */}
          <div className="bg-[#FAF0DC] border border-[#E6CCA0] p-4 rounded-2xl flex items-start gap-3 text-xs text-[#7A4B1A]">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold text-[#573412] mb-0.5">Le Secret du Chef :</strong>
              <p>{recipe.chefTip}</p>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-5 bg-[#F3ECE0] border-t border-[#DFCDB7] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#7A6359] text-center sm:text-left">
            Cette fiche fait partie des <strong>100 recettes</strong> de la collection complète.
          </span>
          <button
            onClick={() => {
              onClose();
              onCtaClick();
            }}
            className="w-full sm:w-auto bg-[#8B1E3F] hover:bg-[#70162A] text-white font-bold py-2.5 px-6 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer shrink-0"
          >
            Débloquer toute la collection
          </button>
        </div>

      </div>
    </div>
  );
}
