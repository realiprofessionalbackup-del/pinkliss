import React from 'react';
import { TrendingDown, Sparkles, Check, ArrowRight } from 'lucide-react';
import { trackEvent } from '../config/constants';

interface EconomyComparatorSectionProps {
  onScrollToOffers: () => void;
}

export const EconomyComparatorSection: React.FC<EconomyComparatorSectionProps> = ({ onScrollToOffers }) => {
  const comparisonData = [
    {
      units: "1 unidade",
      pricePerUnit: "R$ 119,90",
      total: "R$ 119,90",
      isBest: false,
    },
    {
      units: "2 unidades",
      pricePerUnit: "R$ 99,50",
      total: "R$ 199,00",
      isBest: false,
    },
    {
      units: "3 unidades",
      pricePerUnit: "R$ 86,33",
      total: "R$ 259,00",
      isBest: true,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-[#09080d] relative overflow-hidden border-t border-b border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Headline */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-pink-500/30 text-xs font-bold text-pink-300 uppercase tracking-widest mb-3">
          <TrendingDown className="w-4 h-4 text-emerald-400" />
          <span>Inteligência de Compra para o Salão</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase text-white tracking-tight mb-8">
          OLHA QUANTO VOCÊ <span className="text-pink-gradient">ECONOMIZA</span>
        </h2>

        {/* Comparador Visual em Barras/Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {comparisonData.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 transition-all duration-300 relative flex flex-col justify-between ${
                item.isBest
                  ? 'bg-gradient-to-b from-[#250d2c] to-[#120716] border-2 border-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.3)] scale-[1.02]'
                  : 'bg-zinc-950/80 border border-zinc-800'
              }`}
            >
              {item.isBest && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-amber-400 text-black text-[10px] font-black uppercase tracking-wider">
                  Menor Preço Por Litro
                </div>
              )}

              <div>
                <div className="text-xs sm:text-sm font-bold uppercase text-zinc-400 mb-1">
                  {item.units}:
                </div>
                <div className={`text-2xl sm:text-3xl font-black tracking-tight ${item.isBest ? 'text-amber-300' : 'text-white'}`}>
                  {item.pricePerUnit}<span className="text-xs sm:text-sm font-normal text-zinc-400">/un.</span>
                </div>
                <div className="text-xs text-zinc-500 mt-1">
                  Total do pedido: {item.total}
                </div>
              </div>

              {item.isBest && (
                <div className="mt-4 pt-3 border-t border-pink-500/30 text-xs font-bold text-emerald-400 flex items-center justify-center gap-1">
                  <Check className="w-4 h-4" /> -28% a menos por litro
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Destaque Obrigatório Solicitado */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-pink-950/70 via-black to-pink-950/70 border border-pink-500/50 max-w-2xl mx-auto shadow-xl">
          <p className="text-base sm:text-xl font-black uppercase text-white tracking-wide">
            Na opção de 3 unidades, cada Pink Liss sai por apenas{' '}
            <span className="text-amber-300 underline decoration-pink-500 underline-offset-4 font-black">
              R$ 86,33.
            </span>
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2">
            Isso garante a maior margem de lucro por cliente atendida na sua cadeira de cabeleireira.
          </p>

          <button
            onClick={() => {
              trackEvent('click_buy', { source: 'economy_comparator_cta' });
              onScrollToOffers();
            }}
            className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-pink-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Ver opções de pacotes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
