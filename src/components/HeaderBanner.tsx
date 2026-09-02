import React from 'react';
import { Flame } from 'lucide-react';

interface HeaderBannerProps {
  onCtaClick?: () => void;
}

export default function HeaderBanner({ onCtaClick }: HeaderBannerProps) {
  return (
    <header className="bg-red-600 text-white border-b border-red-700/50 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-2.5 flex items-center justify-center text-xs sm:text-sm">
        {/* Centered Urgency Phrase with Flame Icons */}
        <div className="flex items-center justify-center gap-2 font-bold tracking-wide uppercase text-xs sm:text-sm text-center">
          <Flame className="w-4 h-4 text-amber-300 fill-amber-300 animate-pulse shrink-0" />
          <span>Offre valable uniquement aujourd'hui !</span>
          <Flame className="w-4 h-4 text-amber-300 fill-amber-300 animate-pulse shrink-0" />
        </div>
      </div>
    </header>
  );
}
