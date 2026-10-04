import React from 'react';
import { Tag, Sparkles, Truck, Check, ArrowRight } from 'lucide-react';
import { trackEvent } from '../config/constants';

interface PriceAnchorSectionProps {
  onScrollToOffers: () => void;
}

export const PriceAnchorSection: React.FC<PriceAnchorSectionProps> = ({ onScrollToOffers }) => {
  return (
    <section className="py-14 md:py-24 bg-gradient-to-b from-[#070709] via-[#140b19] to-[#070709] relative overflow-hidden">
      
      {/* Background glow radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-pink-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Bloco Central de Ancoragem */}
        <div className="rounded-3xl p-5 sm:p-8 md:p-12 bg-black/80 border-2 border-pink-500/60 shadow-[0_0_50px_rgba(236,72,153,0.25)] relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-pink-950 border border-pink-500/40 text-[10px] sm:text-xs font-bold text-pink-300 uppercase tracking-widest mb-4 sm:mb-6">
            <Tag className="w-3.5 h-3.5 text-pink-400" />
            <span>Oportunidade Direto de Fábrica</span>
          </div>

          {/* Preço de Tabela Riscado */}
          <div className="mb-2">
            <span className="text-xs sm:text-sm md:text-base font-bold text-zinc-400 uppercase tracking-widest block mb-1">
              Valor de Tabela em Distribuidoras:
            </span>
            <div className="text-2xl sm:text-3xl md:text-5xl font-black text-zinc-500 line-through tracking-tight decoration-rose-500/70 decoration-2">
              DE R$ 350,00
            </div>
          </div>

          {/* Preço Promocional Enorme */}
          <div className="my-3 sm:my-4">
            <span className="text-[11px] sm:text-xs md:text-sm font-black uppercase text-pink-400 tracking-wider">
              Nesta página oficial por apenas:
            </span>
            <div className="text-3xl min-[380px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight my-1">
              <span className="text-pink-gradient drop-shadow-[0_0_35px_rgba(236,72,153,0.5)]">
                POR APENAS R$ 119,90
              </span>
            </div>
          </div>

          {/* Economia Real */}
          <div className="my-3 sm:my-5 inline-block">
            <div className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-emerald-950 via-emerald-900/60 to-emerald-950 border border-emerald-500/50 text-emerald-300 text-xs sm:text-base md:text-lg font-black uppercase tracking-wider shadow-lg">
              ECONOMIZE R$ 230,10
            </div>
          </div>

          {/* Frete Fixo Nordeste Destacado */}
          <div className="mt-4 p-4 rounded-xl bg-zinc-900/90 border border-pink-500/30 max-w-md mx-auto flex items-center justify-center gap-3">
            <Truck className="w-5 h-5 text-pink-400 shrink-0 animate-bounce" />
            <span className="text-xs sm:text-sm font-black uppercase tracking-wide text-white">
              FRETE FIXO NORDESTE: <span className="text-amber-300 font-black">R$ 19,90</span>
            </span>
          </div>

          {/* Botão de Chamada Imediata */}
          <div className="mt-8 max-w-md mx-auto">
            <button
              onClick={() => {
                trackEvent('click_buy', { source: 'price_anchor_cta' });
                onScrollToOffers();
              }}
              className="w-full py-4 sm:py-5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-black text-base sm:text-lg uppercase tracking-wider shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2 shine-effect"
            >
              <span>GARANTIR COM ESSE DESCONTO</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
