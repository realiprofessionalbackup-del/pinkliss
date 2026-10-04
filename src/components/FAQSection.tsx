import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL, trackEvent } from '../config/constants';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  // Estado do accordion (primeiro aberto por padrão para guiar a leitura)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Qual é a base da fórmula da Pink Liss?",
      answer: "A Pink Liss é 100% formulada à base de ácido orgânico de alta performance. É totalmente livre de formol e derivados nocivos, proporcionando um alisamento seguro, sem fumaça asfixiante e com conforto total para você e sua cliente no salão.",
    },
    {
      question: "Alisa qualquer tipo de cabelo? É compatível com qualquer química?",
      answer: "Sim! A Pink Liss alisa qualquer tipo de cabelo — desde ondulados volumosos até crespos e fios resistentes — e é compatível com qualquer química prévia (luzes, descolorações, colorações e outros alisamentos). Contudo, como padrão profissional indispensável em qualquer salão, nunca deixe de fazer um teste de mechas antes da aplicação completa para verificar a integridade da fibra capilar.",
    },
    {
      question: "E se eu aplicar e o cabelo não alisar?",
      answer: "Temos Garantia Blindada de Satisfação: se não alisar, devolvemos 100% do seu dinheiro! Confiamos tanto na potência da nossa fórmula à base de ácido orgânico que assumimos todo o risco por você. Aplique seguindo o passo a passo no seu salão e, se não entregar o liso prometido, você tem seu investimento de volta.",
    },
    {
      question: "Qual o tamanho e rendimento da Pink Liss?",
      answer: "Cada frasco oficial contém 1 litro com fórmula concentrada em passo único, proporcionando alto rendimento para múltiplos atendimentos no seu salão.",
    },
    {
      question: "É passo único?",
      answer: "Sim. A Pink Liss possui tecnologia em passo único: não exige pré-lavagens com shampoos agressivos nem misturas complexas no lavatório, economizando tempo na bancada.",
    },
    {
      question: "Qual o preço?",
      answer: "A oferta de 1 unidade de 1L está por apenas R$ 119,90 (valor normal R$ 350,00).",
    },
    {
      question: "Tem opção para comprar mais de uma?",
      answer: "Sim! Você pode escolher 1, 2 ou 3 unidades, com condições progressivamente mais vantajosas (no kit de 3 unidades cada frasco sai por apenas R$ 86,33).",
    },
    {
      question: "Qual o frete para o Nordeste?",
      answer: "O frete é fixo em apenas R$ 19,90 para qualquer cidade e estado do Nordeste.",
    },
    {
      question: "Em quanto tempo é feito o envio e como acompanho?",
      answer: "O envio é despachado em até 24 horas úteis após a confirmação da compra. Nosso time técnico entra em contato direto com você pelo WhatsApp para enviar o código de rastreio e acompanhar a entrega até o seu salão.",
    },
    {
      question: "Como faço para comprar?",
      answer: "Basta clicar em qualquer botão de compra da página, escolher seu kit (1, 2 ou 3 unidades) e finalizar seu pedido com segurança no checkout oficial.",
    },
    {
      question: "Posso falar com alguém antes de comprar?",
      answer: "Sim! Basta clicar no botão de WhatsApp para falar diretamente com nosso atendimento profissional pelo número (73) 8826-6709.",
    },
  ];

  const toggleFAQ = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    if (isOpening) {
      trackEvent('faq_interaction', { question: faqs[index].question });
    }
  };

  const handleWhatsApp = () => {
    trackEvent('click_whatsapp', { source: 'faq_footer_button' });
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-14 md:py-24 bg-[#08080a] relative overflow-hidden">
      
      {/* Background soft glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-pink-700/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-pink-500/30 text-xs font-bold text-pink-300 uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-pink-400" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-[1.12]">
            DÚVIDAS FREQUENTES <br />
            <span className="text-pink-gradient">DAS PROFISSIONAIS</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            Respostas diretas e transparentes sobre a Pink Liss e o envio.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-gradient-to-b from-[#16121f] to-[#0d0a13] border-pink-500/60 shadow-[0_4px_20px_rgba(236,72,153,0.15)]'
                    : 'bg-zinc-950/70 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-pink-600 text-white rotate-180'
                        : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-pink-500/20 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Chamada para WhatsApp se ainda houver dúvida */}
        <div className="mt-10 p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-extrabold text-white uppercase">
              Ainda tem alguma pergunta específica do seu salão?
            </div>
            <div className="text-xs text-zinc-400">
              Nossa equipe técnica atende diretamente pelo WhatsApp comercial.
            </div>
          </div>
          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp: (73) 8826-6709</span>
          </button>
        </div>

      </div>
    </section>
  );
};
