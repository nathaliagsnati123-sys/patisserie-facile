import React, { useState, useEffect } from 'react';
import { ShoppingBag, CheckCircle, Sparkles } from 'lucide-react';

interface PurchaseAlert {
  name: string;
  location: string;
  timeAgo: string;
}

const PURCHASE_POOL: PurchaseAlert[] = [
  { name: "Marie L.", location: "Lyon, France", timeAgo: "il y a 2 min." },
  { name: "Sophie D.", location: "Bruxelles, Belgique", timeAgo: "il y a 4 min." },
  { name: "Camille B.", location: "Genève, Suisse", timeAgo: "il y a 1 min." },
  { name: "Émilie T.", location: "Montréal, Canada", timeAgo: "il y a 6 min." },
  { name: "Antoine G.", location: "Paris, France", timeAgo: "il y a 3 min." },
  { name: "Claire M.", location: "Bordeaux, France", timeAgo: "il y a 8 min." },
  { name: "Laurence R.", location: "Lausanne, Suisse", timeAgo: "il y a 5 min." },
  { name: "Isabelle V.", location: "Liège, Belgique", timeAgo: "il y a 7 min." }
];

export default function NotificationToast() {
  const [current, setCurrent] = useState<PurchaseAlert>(PURCHASE_POOL[0]);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    // Delay first toast showing
    const firstShowTimeout = setTimeout(() => {
      setVisible(true);
    }, 3500);

    const interval = setInterval(() => {
      setVisible(false);
      
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * PURCHASE_POOL.length);
        setCurrent(PURCHASE_POOL[randomIndex]);
        setVisible(true);
      }, 1000);
      
    }, 14000);

    return () => {
      clearTimeout(firstShowTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`fixed top-14 left-3 sm:top-16 sm:left-5 z-40 max-w-[230px] bg-[#FAF6F0] border border-[#C5A059]/40 rounded-xl px-2.5 py-2 shadow-[0_8px_20px_-4px_rgba(42,20,14,0.2)] transition-all duration-700 ease-out flex items-center gap-2.5 ${
        visible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-6 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="relative flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-[#8B1E3F]/10 flex items-center justify-center text-[#8B1E3F] border border-[#8B1E3F]/20">
          <ShoppingBag className="w-4 h-4 text-[#8B1E3F]" />
        </div>
        <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-bold text-[#2A140E] truncate leading-tight">
          {current.name}
        </p>
        <p className="text-[10px] text-emerald-800 font-medium mt-0.5 flex items-center gap-1 leading-tight truncate">
          <CheckCircle className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
          <span>a acheté {current.timeAgo}</span>
        </p>
      </div>

      <button
        onClick={() => setVisible(false)}
        className="text-[#A38F85] hover:text-[#2A140E] transition-colors self-start text-[10px] font-bold leading-none p-0.5"
        aria-label="Fermer"
      >
        ✕
      </button>
    </div>
  );
}
