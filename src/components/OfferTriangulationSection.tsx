import React from 'react';
import { Check, Star, Sparkles, Truck, ShieldCheck, ArrowRight, Zap } from 'lucide-react';
import { OFFERS, OfferPlan, trackEvent, CHECKOUT_URL } from '../config/constants';
import pinkLissBottleImg from '../assets/productImage';

interface OfferTriangulationSectionProps {
  onSelectPlan?: (plan: OfferPlan) => void;
}

export const OfferTriangulationSection: React.FC<OfferTriangulationSectionProps> = ({ onSelectPlan }) => {
  const handleBuy = (plan: OfferPlan, e?: React.MouseEvent) => {
    trackEvent('begin_checkout', {
      plan_id: plan.id,
      units: plan.units,
      price: plan.promoPriceNumber,
      currency: 'BRL',
    });
    trackEvent(plan.eventTrack, { units: plan.units, value: plan.promoPriceNumber });
  };

  return (
    <section id="ofertas" className="py-16 md:py-28 bg-gradient-to-b from-[#070709] via-[#100817] to-[#070709] relative overflow-hidden">
      
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-pink-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-950 via-zinc-900 to-pink-950 border border-pink-500/40 text-xs sm:text-sm font-extrabold text-pink-300 uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(236,72,153,0.2)]">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Condição Especial para Salões & Cabeleireiras</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase text-white tracking-tight leading-[1.08] mb-3">
            LEVE MAIS E PAGUE <br />
            <span className="text-pink-gradient">MENOS POR UNIDADE.</span>
          </h2>

          <p className="text-zinc-300 text-base sm:text-xl font-medium tracking-tight">
            Escolha a quantidade ideal para o seu salão.
          </p>
        </div>

        {/* Super Gatilho Mental: Garantia Blindada de Satisfação Belutti */}
        <div className="mb-10 sm:mb-12 max-w-4xl mx-auto p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-[#200d1e] via-[#140a1c] to-[#1c0e25] border-2 border-amber-400/80 shadow-[0_0_40px_rgba(245,158,11,0.25)] flex flex-col md:flex-row items-center gap-5 text-center md:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-400/20 border-2 border-amber-400 flex items-center justify-center text-amber-300 shrink-0 shadow-[0_0_25px_rgba(245,158,11,0.4)]">
            <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <div className="flex-1 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/50 text-[11px] font-black uppercase tracking-wider mb-2">
              ⭐ RISCO ZERO PARA SEU SALÃO
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white tracking-tight leading-tight">
              SE NÃO ALISAR, <span className="text-amber-300 underline decoration-pink-500 underline-offset-4">DEVOLVEMOS O SEU DINHEIRO!</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-200 mt-1.5 leading-relaxed">
              Temos tanta certeza da potência da nossa fórmula à base de ácido orgânico que assumimos todo o risco por você: aplique seguindo o passo a passo no seu salão e, <strong>se o cabelo não alisar, devolvemos 100% do seu dinheiro</strong>. Sem burocracia e sem letras miúdas.
            </p>
          </div>
        </div>

        {/* Grid dos 3 Cards de Oferta Triangulada */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
          
          {/* OFERTA 1: 1 PINK LISS */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#131119] to-[#0a090e] border border-zinc-800 p-6 sm:p-7 flex flex-col justify-between hover:border-pink-500/40 transition-all duration-300">
            <div>
              <div className="text-center pb-4 border-b border-zinc-800">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Experimentação
                </span>
                <h3 className="text-2xl font-black uppercase text-white tracking-wide">
                  1 PINK LISS
                </h3>
                <span className="text-xs text-zinc-400">1 Litro • Passo Único</span>
              </div>

              {/* Foto Ampliada em Primeiro Plano - Frasco 1L em Evidência */}
              <div className="my-4 flex justify-center">
                <div className="w-full max-w-[220px] h-48 sm:h-52 rounded-2xl bg-black/80 border border-pink-500/30 p-1 flex items-center justify-center overflow-hidden relative shadow-lg group">
                  <img
                    src={pinkLissBottleImg}
                    alt="1 Frasco Pink Liss 1L"
                    className="w-full h-full object-cover object-center scale-110 group-hover:scale-115 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-black/85 backdrop-blur-md border border-pink-500/40 text-[10px] font-black uppercase text-pink-300 tracking-wider">
                    1 FRASCO • 1 LITRO
                  </div>
                </div>
              </div>

              {/* Preços */}
              <div className="text-center my-4">
                <div className="text-zinc-500 text-sm font-bold line-through">
                  DE R$ 350,00
                </div>
                <div className="text-xs font-bold uppercase text-pink-400 mt-1">POR:</div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  R$ 119,90
                </div>
                <div className="mt-2 text-xs font-semibold text-zinc-400">
                  <strong className="text-white font-bold">R$ 119,90</strong> por unidade
                </div>
              </div>

              {/* Frete */}
              <div className="my-4 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center">
                <div className="text-[11px] font-bold text-zinc-400 uppercase">
                  Frete fixo Nordeste:
                </div>
                <div className="text-xs font-black text-amber-300">
                  R$ 19,90 por pedido
                </div>
              </div>

              {/* Itens */}
              <ul className="space-y-2 text-xs text-zinc-300 py-3 border-t border-zinc-800/80">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1 Frasco de 1 Litro Oficial</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Passo único de alto rendimento</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Economia de R$ 230,10</span>
                </li>
              </ul>
            </div>

            {/* Botão */}
            <div className="pt-4">
              <a
                href={OFFERS[0].checkoutUrl}
                onClick={(e) => handleBuy(OFFERS[0], e)}
                className="w-full py-4 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-black text-base uppercase tracking-wider transition-all duration-200 shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>QUERO 1 UNIDADE</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>

          {/* OFERTA 2: 2 PINK LISS */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#14101e] to-[#0a0812] border border-pink-500/30 p-6 sm:p-7 flex flex-col justify-between hover:border-pink-500/60 transition-all duration-300">
            <div>
              <div className="text-center pb-4 border-b border-zinc-800">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-400 block mb-1">
                  Estoque Médio
                </span>
                <h3 className="text-2xl font-black uppercase text-white tracking-wide">
                  2 PINK LISS
                </h3>
                <span className="text-xs text-zinc-400">2 Litros Totais • Passo Único</span>
              </div>

              {/* Foto Ampliada Dupla em Primeiro Plano */}
              <div className="my-4 flex justify-center">
                <div className="w-full max-w-[240px] h-48 sm:h-52 rounded-2xl bg-black/80 border border-pink-500/40 p-2 flex items-center justify-center relative overflow-hidden shadow-lg group">
                  <div className="flex items-center justify-center -space-x-8 w-full h-full">
                    <div className="w-28 sm:w-32 h-full rounded-xl overflow-hidden border border-pink-500/30 bg-black/70 shadow-md transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                      <img
                        src={pinkLissBottleImg}
                        alt="Pink Liss 1L Frasco 1"
                        className="w-full h-full object-cover object-center scale-115"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="w-28 sm:w-32 h-full rounded-xl overflow-hidden border border-pink-500/50 bg-black/70 shadow-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 z-10">
                      <img
                        src={pinkLissBottleImg}
                        alt="Pink Liss 1L Frasco 2"
                        className="w-full h-full object-cover object-center scale-115"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 px-3 py-0.5 rounded-full bg-black/85 backdrop-blur-md border border-pink-500/40 text-[10px] font-black uppercase text-pink-300 tracking-wider shadow">
                    COMBO 2 LITROS
                  </div>
                </div>
              </div>

              {/* Preços */}
              <div className="text-center my-4">
                <div className="text-zinc-500 text-sm font-bold line-through">
                  VALOR NORMAL: R$ 700,00
                </div>
                <div className="text-xs font-bold uppercase text-pink-400 mt-1">POR:</div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  R$ 199,00
                </div>
                <div className="mt-2 text-xs font-semibold text-zinc-300">
                  <strong className="text-amber-300 font-extrabold text-sm">R$ 99,50</strong> por unidade
                </div>
                <div className="mt-1.5 inline-block text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/50">
                  ECONOMIZE R$ 501,00
                </div>
              </div>

              {/* Frete */}
              <div className="my-4 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center">
                <div className="text-[11px] font-bold text-zinc-400 uppercase">
                  Frete fixo Nordeste:
                </div>
                <div className="text-xs font-black text-amber-300">
                  R$ 19,90 por pedido
                </div>
              </div>

              {/* Itens */}
              <ul className="space-y-2 text-xs text-zinc-300 py-3 border-t border-zinc-800/80">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>2 Frascos de 1 Litro (2L no total)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Redução imediata para R$ 99,50 cada</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mesmo frete fixo de R$ 19,90</span>
                </li>
              </ul>
            </div>

            {/* Botão */}
            <div className="pt-4">
              <a
                href={OFFERS[1].checkoutUrl}
                onClick={(e) => handleBuy(OFFERS[1], e)}
                className="w-full py-4 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-black text-base uppercase tracking-wider transition-all duration-200 shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>QUERO 2 UNIDADES</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>

          {/* OFERTA 3: 3 PINK LISS (DESTAQUE VISUALMENTE O CARD DE 3 UNIDADES - ESCOLHA MAIS INTELIGENTE) */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#220d29] via-[#150a1b] to-[#0d0714] border-2 border-pink-500 p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(236,72,153,0.35)] transform lg:-translate-y-3 z-20">
            
            {/* SELOS EXTREMAMENTE CHAMATIVOS */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-11/12 max-w-xs flex flex-col gap-1 items-center">
              <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-black text-xs sm:text-sm font-black uppercase tracking-wider shadow-[0_4px_15px_rgba(245,158,11,0.6)] flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-black" />
                <span>⭐ MAIS VANTAJOSA</span>
              </div>
            </div>

            <div>
              <div className="text-center pt-3 pb-4 border-b border-pink-500/40">
                <div className="inline-block mt-2 mb-1 px-3 py-0.5 rounded-full bg-pink-950 text-pink-300 border border-pink-500/60 text-[11px] font-black uppercase tracking-widest">
                  MAIOR ECONOMIA POR UNIDADE
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
                  3 PINK LISS
                </h3>
                <span className="text-xs text-pink-300 font-bold">3 Litros Totais • Máximo Rendimento</span>
              </div>

              {/* Foto Ampliada Tripla em Primeiro Plano - Efeito Bundle 3D */}
              <div className="my-4 flex justify-center">
                <div className="w-full max-w-[260px] h-52 sm:h-56 rounded-2xl bg-gradient-to-b from-[#250d30] to-black/90 border-2 border-pink-500/60 p-2 flex items-center justify-center relative overflow-hidden shadow-[0_0_25px_rgba(236,72,153,0.35)] group">
                  <div className="flex items-center justify-center -space-x-7 w-full h-full">
                    <div className="w-24 sm:w-28 h-[88%] rounded-xl overflow-hidden border border-pink-500/40 bg-black/70 shadow-md transform -rotate-6 group-hover:-rotate-8 transition-transform duration-300 opacity-95">
                      <img
                        src={pinkLissBottleImg}
                        alt="Pink Liss Frasco 1"
                        className="w-full h-full object-cover object-center scale-115"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="w-28 sm:w-32 h-full rounded-xl overflow-hidden border-2 border-pink-400 bg-black shadow-[0_0_20px_rgba(236,72,153,0.6)] transform z-10 scale-105 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={pinkLissBottleImg}
                        alt="Pink Liss Frasco 2 Destaque"
                        className="w-full h-full object-cover object-center scale-115"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="w-24 sm:w-28 h-[88%] rounded-xl overflow-hidden border border-pink-500/40 bg-black/70 shadow-md transform rotate-6 group-hover:rotate-8 transition-transform duration-300 opacity-95">
                      <img
                        src={pinkLissBottleImg}
                        alt="Pink Liss Frasco 3"
                        className="w-full h-full object-cover object-center scale-115"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 px-3 py-0.5 rounded-full bg-pink-950/95 backdrop-blur-md border border-pink-400 text-[10px] font-black uppercase text-pink-200 tracking-wider shadow-[0_0_10px_rgba(236,72,153,0.5)] whitespace-nowrap">
                    TRIO 3L (MÁXIMO RENDIMENTO)
                  </div>
                </div>
              </div>

              {/* Preços Super Destacados */}
              <div className="text-center my-4">
                <div className="text-zinc-400 text-sm font-bold line-through">
                  VALOR NORMAL: R$ 1.050,00
                </div>
                <div className="text-xs font-black uppercase text-pink-400 mt-1">POR APENAS:</div>
                <div className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                  <span className="text-pink-gradient font-black">R$ 259,00</span>
                </div>
                
                {/* Preço Unitário Imbatível */}
                <div className="mt-2.5 p-2 rounded-xl bg-amber-400/10 border border-amber-400/50">
                  <div className="text-xs text-zinc-300 font-bold uppercase">
                    CADA UNIDADE SAI POR APENAS:
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-300">
                    R$ 86,33
                  </div>
                </div>

                <div className="mt-2 inline-block text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/60">
                  ECONOMIZE R$ 791,00
                </div>
              </div>

              {/* Frete */}
              <div className="my-4 p-3 rounded-xl bg-pink-950/60 border border-pink-500/50 text-center">
                <div className="text-[11px] font-bold text-pink-300 uppercase">
                  Frete fixo Nordeste:
                </div>
                <div className="text-sm font-black text-white">
                  R$ 19,90 por pedido <span className="text-[11px] font-normal text-pink-300">(o mesmo frete!)</span>
                </div>
              </div>

              {/* Itens */}
              <ul className="space-y-2 text-xs text-zinc-200 py-3 border-t border-pink-500/30">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>3 Frascos de 1L</strong> (Abastece o salão por meses)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Menor custo por aplicação</strong> da linha Belutti</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Economia monumental</strong> de R$ 791,00</span>
                </li>
              </ul>
            </div>

            {/* Botão de Compra Super Chamativo */}
            <div className="pt-4">
              <a
                href={OFFERS[2].checkoutUrl}
                onClick={(e) => handleBuy(OFFERS[2], e)}
                className="w-full py-5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-white font-black text-lg sm:text-xl uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.7)] active:scale-95 cursor-pointer flex items-center justify-center gap-2.5 shine-effect animate-pulse-glow"
              >
                <Zap className="w-5 h-5 fill-white shrink-0" />
                <span>QUERO 3 UNIDADES</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>
            </div>
          </div>

        </div>

        {/* Garantia de Envio 24h e Atendimento do Time */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-pink-950/60 via-zinc-950 to-pink-950/60 border border-pink-500/50 max-w-4xl mx-auto shadow-[0_0_30px_rgba(236,72,153,0.15)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                <Truck className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-black uppercase text-white flex items-center justify-center md:justify-start gap-2">
                  <span>ENVIO FEITO EM ATÉ 24 HORAS APÓS A COMPRA</span>
                  <span className="hidden sm:inline px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-extrabold border border-emerald-500/50">ÁGIL</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1">
                  Assim que sua compra for confirmada, <strong>nosso time vai entrar em contato diretamente pelo WhatsApp</strong> para acompanhar seu pedido e fornecer todas as atualizações de rastreio.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 shrink-0">
              <div className="px-3.5 py-1.5 rounded-xl bg-pink-950 border border-pink-500/40 text-pink-300 text-xs font-bold uppercase tracking-wider">
                Suporte Personalizado
              </div>
            </div>
          </div>
        </div>

        {/* Garantia e Segurança de Compra */}
        <div className="mt-5 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-extrabold uppercase text-white">
                Compra 100% Segura & Envio Rápido
              </div>
              <div className="text-xs text-zinc-400">
                Pagamento processado em ambiente PagBank/PagSeguro criptografado com garantia e rastreamento.
              </div>
            </div>
          </div>
          <div className="text-xs font-bold text-amber-300 uppercase tracking-wide px-3 py-1 rounded bg-amber-950/50 border border-amber-500/40 shrink-0">
            Direto da Fábrica
          </div>
        </div>

      </div>
    </section>
  );
};
