import React from 'react';
import { Sparkles, Truck, Check, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { WHATSAPP_URL, trackEvent } from '../config/constants';
import pinkLissBottleImg from '../assets/productImage';

interface FinalCTASectionProps {
  onScrollToOffers: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onScrollToOffers }) => {
  const handlePrimaryBuy = () => {
    trackEvent('click_buy', { source: 'final_cta_primary' });
    onScrollToOffers();
  };

  const handleWhatsApp = () => {
    trackEvent('click_whatsapp', { source: 'final_cta_whatsapp' });
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 md:py-28 bg-black relative overflow-hidden border-t border-pink-500/30">
      
      {/* Heavy pink & amber ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[550px] bg-gradient-to-r from-pink-600/20 via-fuchsia-600/15 to-pink-700/20 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Brand stamp */}
        <div className="inline-block text-xs font-black uppercase tracking-[0.3em] text-pink-400 bg-pink-950/60 px-4 py-1.5 rounded-full border border-pink-500/30 mb-6">
          BELUTTI PROFESSIONAL
        </div>

        {/* Headline Obrigatória */}
        <h2 className="text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.1] max-w-4xl mx-auto mb-8 sm:mb-10">
          SE É PARA ENTREGAR <br className="hidden sm:inline" />
          UM LISO DE IMPACTO, <br />
          <span className="text-pink-gradient drop-shadow-[0_0_35px_rgba(236,72,153,0.5)]">
            COMECE PELO PRODUTO CERTO.
          </span>
        </h2>

        {/* Produto Grande em Destaque */}
        <div className="relative max-w-[260px] min-[380px]:max-w-[300px] sm:max-w-sm mx-auto mb-8 sm:mb-10 group">
          <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/30 to-amber-500/20 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition duration-700" />
          <div className="relative rounded-2xl overflow-hidden border-2 border-pink-500/60 bg-black/90 shadow-2xl">
            <img
              src={pinkLissBottleImg}
              alt="Pink Liss Belutti Professional 1L"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 rounded-full bg-black/90 border border-pink-500 text-[10px] sm:text-xs font-black uppercase tracking-wider text-pink-300">
            PASSO ÚNICO • 1L
          </div>
        </div>

        {/* Ancoragem de Preço e Frete */}
        <div className="max-w-lg mx-auto bg-gradient-to-b from-[#14101d] to-[#0c0912] border border-pink-500/50 rounded-3xl p-5 sm:p-7 md:p-8 mb-8 shadow-[0_0_35px_rgba(236,72,153,0.2)]">
          <div className="text-zinc-500 text-base sm:text-lg md:text-xl font-bold line-through">
            DE R$ 350,00
          </div>
          
          <div className="text-xs font-black uppercase text-pink-400 mt-1 tracking-wider">
            POR:
          </div>

          <div className="text-4xl min-[380px]:text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight my-1">
            <span className="text-pink-gradient">R$ 119,90</span>
          </div>

          {/* Frete Destacado */}
          <div className="mt-4 p-3 rounded-xl bg-pink-950/50 border border-pink-500/40 flex items-center justify-center gap-2 text-xs sm:text-sm font-extrabold uppercase text-amber-300">
            <Truck className="w-4 h-4 text-pink-400 shrink-0" />
            <span>R$ 19,90 FIXO PARA O NORDESTE</span>
          </div>

          {/* Super Gatilho Mental: Se Não Alisar Devolvemos Seu Dinheiro */}
          <div className="mt-3.5 p-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-pink-500/15 to-amber-500/20 border border-amber-400/60 flex items-center justify-center gap-2 text-center">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 shrink-0" />
            <span className="text-xs sm:text-sm font-black text-amber-200 uppercase tracking-wide">
              GARANTIA BLINDADA: SE NÃO ALISAR, DEVOLVEMOS SEU DINHEIRO!
            </span>
          </div>
        </div>

        {/* CTAs Finais */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <button
            onClick={handlePrimaryBuy}
            className="w-full sm:w-auto flex-1 py-5 px-7 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-white font-black text-lg sm:text-xl uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.6)] active:scale-95 cursor-pointer flex items-center justify-center gap-3 shine-effect animate-pulse-glow"
          >
            <span>QUERO GARANTIR A MINHA AGORA</span>
            <ArrowRight className="w-6 h-6 shrink-0" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto py-4 px-6 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 hover:border-pink-500 text-zinc-200 hover:text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>FALAR COM UM ATENDENTE</span>
          </button>
        </div>

        {/* Badges de tranquilidade */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs text-zinc-300 font-bold uppercase tracking-wider">
          <span className="flex items-center gap-1.5 text-amber-300 bg-pink-950/60 px-3 py-1.5 rounded-lg border border-pink-500/30">
            <Truck className="w-4 h-4 text-emerald-400" /> Envio em até 24 Horas
          </span>
          <span className="flex items-center gap-1.5 text-emerald-300 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-500/30">
            <MessageCircle className="w-4 h-4 text-emerald-400" /> Nosso time atende você após a compra
          </span>
          <span className="flex items-center gap-1.5 text-zinc-200">
            <Check className="w-4 h-4 text-emerald-400" /> Direto do Fabricante
          </span>
        </div>

      </div>
    </section>
  );
};
