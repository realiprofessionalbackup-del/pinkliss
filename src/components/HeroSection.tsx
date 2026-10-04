import React from 'react';
import { Check, ShieldCheck, Sparkles, Truck, MessageCircle, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL, WHATSAPP_URL, trackEvent } from '../config/constants';
import pinkLissBottleImg from '../assets/productImage';

interface HeroSectionProps {
  onScrollToOffers: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToOffers }) => {
  const handlePrimaryBuy = () => {
    trackEvent('click_buy', { source: 'hero_primary_button' });
    onScrollToOffers();
  };

  const handleWhatsApp = () => {
    trackEvent('click_whatsapp', { source: 'hero_whatsapp_button' });
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative pt-6 pb-14 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-[#0a0a0c] via-[#09090b] to-[#0d0912]">
      {/* Glow e iluminação de fundo premium */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[520px] bg-gradient-to-b from-pink-600/15 via-fuchsia-600/10 to-transparent blur-[120px] pointer-events-none -z-0" />
      <div className="absolute top-40 right-[-10%] w-[350px] h-[350px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none -z-0" />
      
      {/* Top Notification Bar para Nordeste */}
      <div className="w-full bg-gradient-to-r from-pink-950/80 via-black to-pink-950/80 border-b border-pink-500/30 py-2 px-4 mb-6">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-pink-200">
          <Truck className="w-4 h-4 text-pink-400 shrink-0 animate-pulse" />
          <span>EXCLUSIVO: <strong className="text-white font-extrabold uppercase">FRETE FIXO DE R$ 19,90</strong> PARA TODO O NORDESTE POR PEDIDO!</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Marca */}
        <div className="text-center mb-5 md:mb-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-pink-950/60 via-pink-900/40 to-pink-950/60 border border-pink-500/30 text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>BELUTTI PROFESSIONAL</span>
          </div>
        </div>

        {/* Headline Principal & Subheadline */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] uppercase text-white mb-3 sm:mb-5">
            PROGRESSIVA ORGÂNICA <br className="hidden sm:inline" />
            <span className="text-pink-gradient drop-shadow-[0_0_25px_rgba(236,72,153,0.4)]">
              QUE ENTREGA LISO
            </span> <br className="hidden sm:inline" />
            COM EFEITO NATURAL
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-300 font-medium tracking-tight">
            Mais liso. Menos volume. <span className="text-pink-400 font-semibold">Toque aveludado.</span>
          </p>
        </div>

        {/* Grid com Produto Protagonista e Caixa de Oferta Imediata */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          
          {/* Imagem Premium Protagonista da Pink Liss */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            
            {/* Selo Flutuante Passo Único • 1 Litro */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-8 z-20">
              <div className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg bg-black/90 backdrop-blur-md border border-pink-500/60 shadow-[0_4px_20px_rgba(236,72,153,0.3)] flex items-center gap-1.5 sm:gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
                <span className="text-[10px] sm:text-xs md:text-sm font-extrabold tracking-wider uppercase text-pink-300">
                  PASSO ÚNICO • 1 LITRO
                </span>
              </div>
            </div>

            {/* Imagem do Produto com reflexo e glow */}
            <div className="relative group w-full max-w-[280px] min-[400px]:max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[440px] mx-auto">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-pink-600/40 via-fuchsia-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000" />
              <div className="relative rounded-2xl overflow-hidden bg-black/80 border border-pink-500/30 shadow-2xl">
                <img
                  src={pinkLissBottleImg}
                  alt="Belutti-Pink-Liss-brilho-profissional"
                  className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>

              {/* Tag de autoridade de salão */}
              <div className="mt-2.5 sm:mt-3 text-center">
                <span className="text-[10px] sm:text-xs text-zinc-400 tracking-wide font-medium">
                  Uso exclusivo para Cabeleireiras & Salões de Beleza
                </span>
              </div>
            </div>
          </div>

          {/* Coluna de Preço e Conversão Imediata */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Card de Ancoragem e Preço de Choque */}
            <div className="bg-gradient-to-b from-[#14121a] to-[#0c0a10] border border-pink-500/40 rounded-2xl p-5 sm:p-7 md:p-8 shadow-[0_0_40px_rgba(236,72,153,0.15)] relative">
              
              <div className="flex items-center justify-between mb-3 sm:mb-4 pb-3 border-b border-zinc-800">
                <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-widest uppercase text-pink-400">
                  OFERTA ESPECIAL DIRETO DE FÁBRICA
                </span>
                <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded bg-pink-950 text-pink-300 border border-pink-700/50">
                  65% OFF
                </span>
              </div>

              {/* Preço de Ancoragem Riscado */}
              <div className="mb-1">
                <span className="text-xs sm:text-sm md:text-base text-zinc-400 uppercase font-semibold">
                  Preço de tabela:
                </span>
                <div className="text-zinc-500 text-lg sm:text-xl md:text-2xl font-bold line-through tracking-tight">
                  DE R$ 350,00
                </div>
              </div>

              {/* Preço de Oferta ENORME */}
              <div className="my-1 sm:my-2">
                <div className="text-[11px] sm:text-xs md:text-sm font-bold text-pink-400 uppercase tracking-wider">
                  Por apenas:
                </div>
                <div className="text-4xl min-[380px]:text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-black text-white tracking-tight flex items-baseline gap-1">
                  <span className="text-pink-gradient font-black">
                    R$ 119,90
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  ou em até 12x no cartão de crédito • 1 Litro Passo Único
                </p>
              </div>

              {/* Frete Fixo Nordeste Destacado */}
              <div className="my-4 sm:my-5 p-3 sm:p-3.5 rounded-xl bg-pink-950/40 border border-pink-500/40 flex items-center gap-2.5 sm:gap-3">
                <div className="p-2 rounded-lg bg-pink-600/20 text-pink-400 shrink-0">
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold uppercase text-white tracking-wide">
                    FRETE FIXO PARA O NORDESTE
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-black text-amber-300">
                    APENAS R$ 19,90 <span className="text-[10px] sm:text-xs font-normal text-zinc-300">(por pedido)</span>
                  </div>
                </div>
              </div>

              {/* Botões de Ação Principais (Verde CTA de Alta Conversão) */}
              <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
                <button
                  onClick={handlePrimaryBuy}
                  className="w-full py-3.5 sm:py-4 md:py-5 px-4 sm:px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-white font-black text-base sm:text-lg md:text-xl tracking-wide uppercase transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 sm:gap-3 shine-effect animate-pulse-glow"
                >
                  <span>QUERO GARANTIR A MINHA</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-pink-500/50 text-zinc-200 hover:text-white font-bold text-xs sm:text-sm md:text-base tracking-wide uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                  <span>FALAR COM UM ATENDENTE NO WHATSAPP</span>
                </button>
              </div>

              {/* Super Gatilho Mental: Garantia Blindada */}
              <div className="mt-3.5 p-3 rounded-xl bg-gradient-to-r from-amber-500/20 via-pink-500/15 to-amber-500/20 border border-amber-400/60 flex items-center justify-center gap-2.5 text-center shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                <ShieldCheck className="w-5 h-5 text-amber-300 shrink-0" />
                <span className="text-xs sm:text-sm font-black text-amber-200 uppercase tracking-wide">
                  GARANTIA BLINDADA: SE NÃO ALISAR, DEVOLVEMOS SEU DINHEIRO!
                </span>
              </div>

              {/* Microelementos de Confiança */}
              <div className="grid grid-cols-2 gap-2.5 mt-6 pt-5 border-t border-zinc-800/80">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Produto profissional</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1 litro com alto rendimento</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Passo único prático</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Envio para o Nordeste</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-300 col-span-2 bg-pink-950/30 p-2 rounded-lg border border-pink-500/20">
                  <Truck className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Envio em até 24h + Nosso time atende você após a compra</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
