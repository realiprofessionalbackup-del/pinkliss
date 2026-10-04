import React from 'react';
import { 
  Sparkles, 
  Feather, 
  Minimize2, 
  SunMedium, 
  HeartHandshake, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';

export const DesireSection: React.FC = () => {
  const desireCards = [
    {
      title: "LISO COM EFEITO NATURAL",
      short: "Balanço fluido e leveza sem aquele aspecto estático.",
      icon: Sparkles,
      tag: "Acabamento Superior",
    },
    {
      title: "TEXTURA AVELUDADA",
      short: "Toque sedoso inconfundível que as clientes elogiam de imediato.",
      icon: Feather,
      tag: "Sensorial Nobre",
    },
    {
      title: "REDUÇÃO DE VOLUME",
      short: "Controle imediato da densidade e disciplina total do fio.",
      icon: Minimize2,
      tag: "Ação Imediata",
    },
    {
      title: "MAIS BRILHO",
      short: "Efeito espelhado radiante com reflexo de luz tridimensional.",
      icon: SunMedium,
      tag: "Brilho Espelhado",
    },
    {
      title: "MAIS MACIEZ",
      short: "Nutrição profunda que restaura a emoliência da fibra.",
      icon: HeartHandshake,
      tag: "Hidratação",
    },
    {
      title: "PASSO ÚNICO",
      short: "Sem pré-lavagens desgastantes. Muito mais rapidez na cadeira.",
      icon: Zap,
      tag: "Agilidade",
    },
    {
      title: "QUERATINA + ARGININA",
      short: "Complexo proteico reconstrutor para blindagem e filme protetor.",
      icon: ShieldCheck,
      tag: "Bio-ativos",
    },
  ];

  return (
    <section className="py-14 md:py-24 bg-[#070709] relative overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400 block mb-2">
            Padrão Ouro de Salão
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-[1.1]">
            O LISO QUE CHAMA ATENÇÃO <br />
            <span className="text-pink-gradient">PELO RESULTADO.</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid dos 7 Cards de Desejo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {desireCards.map((card, idx) => {
            const Icon = card.icon;
            const isFeatured = idx === 0 || idx === 6; // Destaque visual sutil
            return (
              <div
                key={idx}
                className={`relative rounded-2xl p-6 bg-gradient-to-b from-[#131118] to-[#0c0a10] border ${
                  isFeatured ? 'border-pink-500/50 shadow-[0_0_25px_rgba(236,72,153,0.18)]' : 'border-zinc-800/80 hover:border-pink-500/40'
                } transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-950/60 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide mb-1.5 leading-snug">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                  {card.short}
                </p>
              </div>
            );
          })}

          {/* Card Resumo / Chamada */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-pink-950 via-zinc-950 to-black border border-pink-500/60 flex flex-col justify-center text-center shadow-[0_0_20px_rgba(236,72,153,0.15)] sm:col-span-2 lg:col-span-1">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">
              Rendimento Profissional
            </span>
            <div className="text-2xl font-black text-white uppercase tracking-tight mb-2">
              1 Litro Completo
            </div>
            <p className="text-xs text-zinc-300 leading-snug">
              Até 15 a 20 aplicações completas por frasco, maximizando o lucro por procedimento no seu salão.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
