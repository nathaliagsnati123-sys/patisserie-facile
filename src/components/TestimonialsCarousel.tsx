import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function TestimonialsCarousel() {
  // Duplicate the 5 reviews for a seamless continuous marquee loop
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="space-y-8">
      
      {/* Centered Clean Header */}
      <div className="text-center space-y-2.5 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2A140E] leading-tight">
          CE QUE DISENT NOS CLIENTS
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#634E42] leading-relaxed">
          Découvrez les retours authentiques de ceux qui cuisinent déjà avec la collection au quotidien.
        </p>
      </div>

      {/* Marquee Scroller with Slow Smooth Flow */}
      <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden py-3">
        
        {/* Subtle Edge Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10" />

        <div className="overflow-x-auto no-scrollbar scroll-smooth">
          <div className="animate-marquee-left-slow flex gap-5 sm:gap-6 px-4 sm:px-8">
            {duplicatedTestimonials.map((test, idx) => (
              <div
                key={`${test.id}-${idx}`}
                className="w-[290px] sm:w-[340px] shrink-0 bg-white rounded-3xl p-5 sm:p-6 border-2 border-[#DFCDB7] hover:border-[#8B1E3F] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  
                  {/* Top Bar with Stars & Verified Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10.5px] text-emerald-700 bg-emerald-50 border border-emerald-200/80 font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-emerald-600" /> Avis vérifié
                    </span>
                  </div>

                  {/* Quote Content */}
                  <p className="text-xs sm:text-sm text-[#4A3226] leading-relaxed font-normal">
                    "{test.quote}"
                  </p>
                </div>

                {/* Author Info with Profile Picture */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#F0E6D8] mt-4">
                  <img
                    src={test.avatarUrl}
                    alt={test.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#8B1E3F]/30 shadow-xs group-hover:border-[#8B1E3F] transition-colors shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-[#2A140E] truncate">
                      {test.name}
                    </h4>
                    <p className="text-[11px] text-[#7A6359] truncate">
                      {test.role} • {test.location}
                    </p>
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
