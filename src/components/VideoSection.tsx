import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { trackEvent } from '../config/constants';

interface VideoSectionProps {
  onScrollToOffers?: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onScrollToOffers }) => {
  const handleScroll = () => {
    trackEvent('click_buy', { source: 'video_section_cta' });
    if (onScrollToOffers) {
      onScrollToOffers();
    } else {
      const el = document.getElementById('ofertas');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 md:py-24 bg-gradient-to-b from-[#070709] via-[#0f0714] to-[#08080a] relative overflow-hidden border-t border-b border-zinc-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/70 border border-pink-500/30 text-xs sm:text-sm font-bold text-pink-300 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>DEMONSTRAÇÃO REAL EM VÍDEO</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-[1.12]">
            VEJA A TRANSFORMAÇÃO <br />
            <span className="text-pink-gradient drop-shadow-[0_0_25px_rgba(236,72,153,0.35)]">
              DA PINK LISS NA PRÁTICA
            </span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto mt-3 font-medium">
            Assista ao vídeo real gravado em salão e veja como o cabelo reage à aplicação da Pink Liss: liso, solto e com brilho espelhado.
          </p>
        </div>

        {/* Grid com Vídeo Vertical (Shorts 9:16) Adaptado + Destaques da Aplicação */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna do Vídeo (Enquadramento perfeito 9:16 estilo smartphone de luxo) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[310px] min-[400px]:max-w-[340px] sm:max-w-[360px] mx-auto">
              
              {/* Efeito Glow atrás da moldura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-pink-600/40 via-fuchsia-600/20 to-amber-500/20 rounded-[36px] blur-xl opacity-75" />

              {/* Moldura de Smartphone / Player Vertical */}
              <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden border-2 border-pink-500/50 bg-black shadow-[0_0_40px_rgba(236,72,153,0.3)] aspect-[9/16]">
                
                {/* Top Notch / Indicador */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-20 w-24 h-4 bg-black/90 backdrop-blur-md rounded-full border border-pink-500/20 flex items-center justify-center gap-1.5 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                  <span className="text-[9px] font-black uppercase text-pink-300 tracking-wider">PINK LISS 1L</span>
                </div>

                {/* YouTube Shorts Embed Iframe */}
                <iframe
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/AFlY0kB-z3g?rel=0&modestbranding=1&playsinline=1"
                  title="Demonstração Real da Progressiva Orgânica Pink Liss Belutti Professional"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Legenda sob o player */}
              <div className="text-center mt-3">
                <span className="text-[11px] sm:text-xs text-zinc-400 font-medium">
                  ▶ Dê o play acima e ative o som para conferir todos os detalhes
                </span>
              </div>
            </div>
          </div>

          {/* Coluna de Destaques e Argumentos de Conversão */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            
            {/* Etapas do Processo */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 w-fit">
              <span className="text-pink-400 font-black">1. APLICAÇÃO</span>
              <span>→</span>
              <span className="text-pink-400 font-black">2. PAUSA</span>
              <span>→</span>
              <span className="text-pink-400 font-black">3. LISO ESPELHADO</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
              O que você nota de imediato ao aplicar:
            </h3>

            {/* 3 Cards de Benefícios Práticos comprovados no vídeo */}
            <div className="space-y-3 pt-1">
              
              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-pink-500/20 hover:border-pink-500/50 transition-all flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white uppercase">
                    Passo Único Sem Complicação
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 leading-relaxed">
                    Não exige shampoo anti-resíduo agressivo nem pré-misturas complexas. Você economiza tempo no lavatório e atende mais clientes por dia.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-pink-500/20 hover:border-pink-500/50 transition-all flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white uppercase">
                    Sem Fumaça Excessiva e Conforto Total
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 leading-relaxed">
                    Fórmula orgânica desenvolvida para proporcionar um ambiente agradável de trabalho tanto para a cabeleireira quanto para a cliente na cadeira.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-pink-500/20 hover:border-pink-500/50 transition-all flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white uppercase">
                    Toque Aveludado & Balanço Real
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 leading-relaxed">
                    O cabelo não fica esticado com aspecto de tábua. O movimento é solto, a fibra capilar fica densa e o reflexo da luz é imediato.
                  </p>
                </div>
              </div>

            </div>

            {/* Chamada para Ação Rápida */}
            <div className="pt-2">
              <button
                onClick={handleScroll}
                className="w-full sm:w-auto py-3.5 sm:py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-white font-black text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95 cursor-pointer flex items-center justify-center gap-2 shine-effect"
              >
                <span>QUERO ESSA TRANSFORMAÇÃO NO MEU SALÃO</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

