import React, { useState } from 'react';
import { Sparkles, SlidersHorizontal, Check, Star, Camera, ShieldCheck } from 'lucide-react';
import { BEFORE_AFTER_OFFICIAL_IMG, CASE_RESULT_1_IMG, CASE_RESULT_2_IMG } from '../assets/productImage';
import salonAppImg from '../assets/images/salon_application_1791145484097.jpg';

export const ProofVisualSection: React.FC = () => {
  // Slider interativo do Antes e Depois
  const [sliderPos, setSliderPos] = useState<number>(50);

  const realCases = [
    {
      id: 1,
      image: CASE_RESULT_1_IMG,
      title: "Resultado 01 • Alinhamento Impecável & Brilho Espelhado",
      tipo: "Curvatura com Frizz / Fio Médio",
      antesDesc: "Fios ressecados, cutículas abertas e frizz rebelde que exigia escovação frequente.",
      depoisDesc: "Liso alinhado com efeito natural, reflexo luminoso intenso e toque aveludado.",
      badge: "Alinhamento & Brilho Máximo",
    },
    {
      id: 2,
      image: CASE_RESULT_2_IMG,
      title: "Resultado 02 • Transformação Capilar Completa no Salão",
      tipo: "Volume & Fio Resistente",
      antesDesc: "Volume excessivo, estrutura densa com frizz persistente e dificuldade de alinhamento.",
      depoisDesc: "Passo único com disciplina duradoura, caimento leve, hidratação profunda e redução total de volume.",
      badge: "Disciplina & Caimento Leve",
    },
  ];

  return (
    <section className="py-14 md:py-24 bg-[#09080d] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-pink-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-pink-500/30 text-xs font-bold text-pink-300 uppercase tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5 text-pink-400" />
            <span>Resultados de Salão</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-[1.12]">
            ANTES E DEPOIS <br />
            <span className="text-pink-gradient">
              FALA MAIS ALTO.
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Arraste para comparar a transformação de textura, brilho e movimento obtida com a aplicação da Pink Liss.
          </p>
        </div>

        {/* Comparador Interativo de Antes e Depois (Slider em Grande Escala preenchendo a dobra) */}
        <div className="w-full max-w-5xl xl:max-w-6xl mx-auto mb-14 md:mb-20">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-pink-500/50 bg-black aspect-[16/10.5] sm:aspect-[16/10] md:aspect-[16/10] shadow-[0_0_50px_rgba(236,72,153,0.35)] select-none group">
            
            {/* Imagem do Split de Alta Resolução */}
            <img
              src={BEFORE_AFTER_OFFICIAL_IMG}
              alt="Transforma-o-Capilar-Antes-e-Depois"
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* Linha divisória e cursor interativo do slider */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-white to-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.9)] pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-pink-600 flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.8)] border-2 border-pink-500">
                <SlidersHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
              </div>
            </div>

            {/* Input range invisível cobrindo todo o container para arrastar com o dedo ou mouse */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
              aria-label="Arrastar divisor de antes e depois"
            />

            {/* Instrução flutuante no rodapé do slider */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-pink-500/40 text-[11px] sm:text-xs font-semibold text-zinc-300 pointer-events-none flex items-center gap-1.5 shadow-xl">
              <span>↔ Arraste para os lados para comparar</span>
            </div>
          </div>
        </div>

        {/* 2 Blocos de Resultados Reais Com Fotos de Alta Conversão */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {realCases.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#13101b] to-[#0a090e] border border-pink-500/40 hover:border-pink-500/70 transition-all duration-300 flex flex-col justify-between shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-pink-400">
                    {item.badge}
                  </span>
                  <span className="text-[10px] text-zinc-400 font-semibold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                    {item.tipo}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black uppercase text-white mb-4">
                  {item.title}
                </h3>

                {/* Foto Real de Resultado no Salão */}
                <div className="relative rounded-xl overflow-hidden border border-pink-500/40 mb-4 aspect-[4/3] bg-black shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-md border border-pink-500/40 text-[10px] font-black uppercase text-pink-300">
                    RESULTADO REAL
                  </div>
                </div>

                {/* Pequenas Descrições Técnicas de Salão */}
                <div className="space-y-2 text-xs text-zinc-300 border-t border-zinc-800/80 pt-3">
                  <p>
                    <strong className="text-rose-400 font-bold uppercase text-[11px]">Antes: </strong>
                    {item.antesDesc}
                  </p>
                  <p>
                    <strong className="text-emerald-400 font-bold uppercase text-[11px]">Depois: </strong>
                    {item.depoisDesc}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <Check className="w-3.5 h-3.5" /> 100% Passo Único
                </span>
                <span>Uso em Salão</span>
              </div>
            </div>
          ))}
        </div>

        {/* Depoimentos reais de profissionais de salão */}
        <div className="mt-14 pt-10 border-t border-zinc-900">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-pink-400 block mb-1">
              Avaliação de Quem Vive a Rotina de Salão
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white">
              O que as cabeleireiras destacam sobre a Pink Liss
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800">
              <div className="flex text-amber-400 gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 italic mb-3">
                "O que mais me impressionou foi a ausência de fumaça sufocante e a facilidade do passo único. Não preciso perder tempo lavando antes, e o brilho final no espelho da cliente é inacreditável."
              </p>
              <div className="text-xs font-bold text-white uppercase">
                Profissional de Salão • Especialista em Alisamentos
              </div>
              <div className="text-[11px] text-pink-400">Recife - PE</div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800">
              <div className="flex text-amber-400 gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 italic mb-3">
                "O custo-benefício de 1 litro por esse valor de oferta é surreal para quem tem salão. O frete fixo de R$ 19,90 chegou super rápido aqui no Nordeste e o rendimento por frasco é excelente."
              </p>
              <div className="text-xs font-bold text-white uppercase">
                Cabeleireira & Proprietária de Studio
              </div>
              <div className="text-[11px] text-pink-400">Fortaleza - CE</div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800">
              <div className="flex text-amber-400 gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 italic mb-3">
                "As clientes adoram porque não fica aquele liso 'esticado artificial'. Fica com toque aveludado e muito balanço natural. Já recomprei o kit de 3 unidades para garantir o estoque."
              </p>
              <div className="text-xs font-bold text-white uppercase">
                Hair Stylist & Terapeuta Capilar
              </div>
              <div className="text-[11px] text-pink-400">Salvador - BA</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
