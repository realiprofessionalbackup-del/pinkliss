import React, { useState, useEffect } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { trackEvent } from '../config/constants';

interface MobileStickyBarProps {
  onScrollToOffers: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onScrollToOffers }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece após o usuário rolar 180px para não sobrepor o botão inicial da dobra
      if (window.scrollY > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleClick = () => {
    trackEvent('click_buy', { source: 'mobile_sticky_bar' });
    onScrollToOffers();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gradient-to-t from-black via-[#0d0912] to-[#120a17] border-t border-pink-500/40 px-3.5 pt-2.5 pb-safe shadow-[0_-8px_25px_rgba(0,0,0,0.85)] backdrop-blur-lg">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold uppercase tracking-wider text-pink-400">
            PINK LISS • 1L
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-zinc-500 text-xs line-through">R$ 350</span>
            <span className="text-lg font-black text-white">R$ 119,90</span>
          </div>
        </div>

        <button
          onClick={handleClick}
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-extrabold text-sm uppercase tracking-wide shadow-[0_0_15px_rgba(16,185,129,0.5)] active:scale-95 transition-all flex items-center justify-center gap-1.5 shine-effect"
        >
          <ShoppingBag className="w-4 h-4 shrink-0" />
          <span>QUERO GARANTIR</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </button>
      </div>
    </div>
  );
};
