import React from 'react';
import { ShieldCheck, CheckCircle2, Droplets, Wind, Sparkles } from 'lucide-react';

export const DiferenciaisSection: React.FC = () => {
  const differentials = [
    {
      title: "LIVRE DE FORMOL*",
      desc: "Desenvolvida com blend de ácidos orgânicos nobres para alisamento e disciplina sem ardência insuportável nos olhos.",
      icon: ShieldCheck,
      highlight: true,
    },
    {
      title: "SEM SULFATO*",
      desc: "Limpeza e ação alinhadora suave que respeita a barreira lipídica da haste capilar.",
      icon: Droplets,
      highlight: false,
    },
    {
      title: "SEM FUMAÇA EXCESSIVA*",
      desc: "Ambiente de salão mais agradável para a profissional e para a cliente durante a prancha.",
      icon: Wind,
      highlight: true,
    },
    {
      title: "EFEITO NATURAL",
      desc: "Movimento solto, balanço real e pontas maleáveis, sem aspecto esticado ou artificial.",
      icon: Sparkles,
      highlight: false,
    },
    {
      title: "TOQUE AVELUDADO",
      desc: "Sedosidade instantânea ao passar os dedos, com efeito 'touch' macio e agradável.",
      icon: CheckCircle2,
      highlight: false,
    },
    {
      title: "REDUÇÃO DE VOLUME",
      desc: "Eliminação precisa de frizz e alinhamento cuticular duradouro com filme protetor.",
      icon: ShieldCheck,
      highlight: false,
    },
  ];

  return (
    <section className="py-14 md:py-24 bg-gradient-to-b from-[#09080d] via-[#100b17] to-[#070709] relative overflow-hidden border-t border-zinc-900">
      
      {/* Decorative gradient blur */}
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-pink-500/30 text-xs font-bold text-pink-300 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Fórmula Orgânica Avançada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-[1.12]">
            MAIS QUE ALISAR. <br />
            <span className="text-pink-gradient">
              UMA EXPERIÊNCIA DE TRATAMENTO.
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            A tecnologia Pink Liss alia alinhamento térmico profundo com nutrição proteica em um único passo.
          </p>
        </div>

        {/* Grid de Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-2xl p-6 bg-gradient-to-br from-[#121018] to-[#0b0a0f] border ${
                  item.highlight
                    ? 'border-pink-500/60 shadow-[0_0_20px_rgba(236,72,153,0.15)]'
                    : 'border-zinc-800/80 hover:border-pink-500/40'
                } transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-950/70 border border-pink-500/40 flex items-center justify-center text-pink-400 group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-wide text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Observação legal e discreta solicitada */}
        <div className="mt-8 text-center">
          <p className="text-xs text-zinc-500 italic max-w-xl mx-auto">
            *Características conforme especificação do produto. O resultado pode variar de acordo com o tipo, histórico químico e estrutura do fio, bem como a correta técnica profissional de aplicação e pranchamento.
          </p>
        </div>

      </div>
    </section>
  );
};
