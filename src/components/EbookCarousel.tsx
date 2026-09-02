import React from 'react';
import { ChefHat, FileText } from 'lucide-react';
import { EBOOK_SAMPLES } from '../data';

export default function EbookCarousel() {
  // Duplicate items to ensure a seamless infinite marquee scroll
  const duplicatedEbooks = [...EBOOK_SAMPLES, ...EBOOK_SAMPLES];

  return (
    <div className="space-y-8">
      
      {/* Centered Clean Header */}
      <div className="text-center space-y-2.5 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2A140E] leading-tight">
          FEUILLETEZ LES E-BOOKS DE LA COLLECTION
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#634E42] leading-relaxed">
          Découvrez les différents volumes thématiques inclus dans votre collection numérique.
        </p>
      </div>

      {/* Smooth Continuous Slow Marquee Carousel Container */}
      <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden py-4">
        
        {/* Subtle Edge Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#F5EDE1] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#F5EDE1] to-transparent z-10" />

        {/* Outer scrollable area */}
        <div className="overflow-x-auto no-scrollbar scroll-smooth">
          <div className="animate-marquee-left-slow flex gap-5 sm:gap-6 px-4 sm:px-8">
            {duplicatedEbooks.map((ebook, idx) => (
              <div
                key={`${ebook.id}-${idx}`}
                className="w-[270px] sm:w-[310px] shrink-0 bg-white rounded-3xl overflow-hidden border-2 border-[#DFCDB7] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Book Cover Visual with 3D Effect */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#20100A]">
                    <img
                      src={ebook.coverImage}
                      alt={ebook.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 select-none pointer-events-none"
                    />
                    
                    {/* Spine gradient effect on left */}
                    <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-black/60 via-black/20 to-transparent shadow-inner" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 right-3 flex items-center justify-end">
                      <span className="bg-black/75 backdrop-blur-xs text-amber-200 text-[10px] font-mono px-2 py-0.5 rounded-md border border-white/20 shadow-xs">
                        {ebook.recipesCount}
                      </span>
                    </div>

                    {/* Bottom gradient on cover with title preview */}
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-12">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block mb-1">
                        {ebook.tag}
                      </span>
                      <h3 className="text-sm sm:text-base font-serif font-bold text-white leading-snug drop-shadow-sm">
                        {ebook.title}
                      </h3>
                    </div>
                  </div>

                  {/* Book Metadata & Highlights */}
                  <div className="p-4 sm:p-5 space-y-3">
                    <p className="text-xs text-[#634E42] leading-relaxed line-clamp-2">
                      {ebook.subtitle}
                    </p>

                    {/* Highlight recipes */}
                    <div className="space-y-1.5 pt-2.5 border-t border-[#F0E6D8]">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#8B1E3F] block">
                        Exemples de fiches incluses :
                      </span>
                      <ul className="space-y-1 text-[11px] text-[#5C4538]">
                        {ebook.highlightRecipes.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <ChefHat className="w-3 h-3 text-[#C5A059] shrink-0 mt-0.5" />
                            <span className="leading-tight line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="p-4 sm:p-5 pt-0">
                  <div className="p-2.5 bg-[#FAF7F2] rounded-xl border border-[#E8DEC8] flex items-center justify-between text-[11px] text-[#7A6359] font-medium">
                    <span className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-[#8B1E3F]" />
                      {ebook.pages}
                    </span>
                    <span className="text-emerald-700 font-bold">
                      Format PDF HD
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
