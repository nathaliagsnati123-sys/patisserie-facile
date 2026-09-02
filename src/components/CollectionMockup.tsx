import React from 'react';

interface CollectionMockupProps {
  onOpenRecipe?: () => void;
}

export default function CollectionMockup({ onOpenRecipe }: CollectionMockupProps) {
  return (
    <div className="relative w-full flex justify-center select-none my-2">
      
      {/* Background ambient glow */}
      <div className="absolute inset-0 max-w-lg mx-auto bg-gradient-to-tr from-[#8B1E3F]/15 via-[#C5A059]/15 to-transparent rounded-3xl blur-2xl -z-10" />

      {/* Main Image Container */}
      <div className="relative w-fit max-w-full sm:max-w-lg rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(32,16,10,0.18)] border border-[#C5A059]/40 group">
        <img
          src="https://i.ibb.co/H1Mmq1G/Chat-GPT-Image-2-de-set-de-2026-08-42-40.png"
          alt="100 Recettes Gourmandes à Réaliser Chez Vous"
          referrerPolicy="no-referrer"
          loading="eager"
          className="w-full h-auto max-h-[480px] object-contain block transition-transform duration-500 group-hover:scale-[1.01]"
        />
      </div>

    </div>
  );
}

