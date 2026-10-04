import React from 'react';
import { AlertCircle, Flame, Wind, EyeOff, ShieldAlert, Sparkles } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: "FRIZZ INDOMÁVEL",
      desc: "Fios arrepiados que se rebelam com a umidade e estragam o acabamento do salão.",
      icon: Wind,
    },
    {
      title: "VOLUME EXCESSIVO",
      desc: "Cabelos armados que demandam escovação diária exaustiva por parte da cliente.",
      icon: Flame,
    },
    {
      title: "FALTA DE BRILHO",
      desc: "Fios opacos, sem vida e com aspecto ressecado e poroso pós-química comum.",
      icon: EyeOff,
    },
    {
      title: "ASPECTO PESADO",
      desc: "Aquele visual endurecido, 'liso espichado' ou emplastrado que ninguém suporta.",
      icon: ShieldAlert,
    },
    {
      title: "CABELO SEM MOVIMENTO",
      desc: "Falta de balanço natural e pontas esticadas sem leveza nem caimento.",
      icon: AlertCircle,
    },
  ];

  return (
    <section className="py-14 md:py-24 bg-gradient-to-b from-[#08080a] via-[#0e0712] to-[#09080d] relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-pink-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-fuchsia-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-pink-400 bg-pink-950/50 px-3.5 py-1 rounded-full border border-pink-500/20 mb-3">
            O Desafio Diário nos Salões
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-[1.15]">
            SUAS CLIENTES QUEREM LISO. <br />
            <span className="text-zinc-400 font-bold">
              MAS NÃO QUEREM UM CABELO COM ASPECTO ARTIFICIAL.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 max-w-xl mx-auto">
            A cliente de hoje busca naturalidade, saúde do fio e toque suave — não quer mais químicas agressivas que deixam o cabelo plastificado.
          </p>
        </div>

        {/* 5 Dores Visuais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-12">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="bg-black/60 border border-zinc-800 hover:border-pink-500/50 rounded-xl p-5 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(236,72,153,0.15)]"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-pink-950/40 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold uppercase text-white tracking-wide mb-1.5">
                    {prob.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-zinc-800/60 flex items-center gap-1.5 text-[11px] font-semibold text-rose-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>Eliminado com Pink Liss</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transição de Impacto */}
        <div className="relative rounded-2xl p-6 sm:p-10 bg-gradient-to-r from-pink-950/80 via-black to-pink-950/80 border-2 border-pink-500/60 shadow-[0_0_40px_rgba(236,72,153,0.25)] text-center">
          <div className="inline-flex items-center gap-2 mb-2 text-pink-400">
            <Sparkles className="w-5 h-5 animate-spin" />
            <span className="text-xs font-extrabold uppercase tracking-widest">A Solução Definitiva</span>
          </div>
          
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            É PARA ISSO QUE EXISTE A <br className="sm:hidden" />
            <span className="text-pink-gradient drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
              PINK LISS.
            </span>
          </h3>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3 font-medium">
            Alinhamento térmico orgânico que preserva a integridade da fibra capilar, entregando caimento líquido, brilho reflexivo e sedosidade desde a primeira aplicação.
          </p>
        </div>

      </div>
    </section>
  );
};
