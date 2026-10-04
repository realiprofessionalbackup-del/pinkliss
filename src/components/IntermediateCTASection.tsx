import React from 'react';
import { ShoppingCart, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { WHATSAPP_URL, trackEvent } from '../config/constants';

interface IntermediateCTASectionProps {
  onScrollToOffers: () => void;
}

export const IntermediateCTASection: React.FC<IntermediateCTASectionProps> = ({ onScrollToOffers }) => {
  const handlePrimary = () => {
    trackEvent('click_buy', { source: 'intermediate_cta_primary' });
    onScrollToOffers();
  };

  const handleWhatsApp = () => {
    trackEvent('click_whatsapp', { source: 'intermediate_cta_whatsapp' });
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-14 md:py-20 bg-gradient-to-r from-pink-950/40 via-[#0e0712] to-pink-950/40 border-t border-b border-pink-500/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-pink-500/30 text-xs font-bold text-pink-300 uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>Direto do Fabricante</span>
        </div>

        <h2 className="text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight mb-3">
          PRONTA PARA GARANTIR <br className="sm:hidden" />
          <span className="text-pink-gradient">A SUA?</span>
        </h2>

        <p className="text-zinc-300 text-sm sm:text-lg md:text-xl font-medium tracking-tight mb-6 sm:mb-8">
          Escolha sua quantidade e faça seu pedido.
        </p>

        {/* Botoes de Ação */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 max-w-lg mx-auto">
          <button
            onClick={handlePrimary}
            className="w-full sm:w-auto flex-1 py-3.5 sm:py-4 md:py-5 px-5 sm:px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-white font-black text-sm sm:text-base md:text-lg uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.5)] active:scale-95 cursor-pointer flex items-center justify-center gap-2 shine-effect"
          >
            <span>QUERO GARANTIR A MINHA</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto py-3 sm:py-4 px-5 sm:px-6 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-pink-500/50 text-zinc-200 hover:text-white font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>FALAR COM UM ATENDENTE</span>
          </button>
        </div>

      </div>
    </section>
  );
};
