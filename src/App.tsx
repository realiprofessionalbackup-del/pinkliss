import React, { useEffect, useState } from 'react';
import { trackEvent, OfferPlan } from './config/constants';
import { HeroSection } from './components/HeroSection';
import { MobileStickyBar } from './components/MobileStickyBar';
import { VideoSection } from './components/VideoSection';
import { ProblemSection } from './components/ProblemSection';
import { DesireSection } from './components/DesireSection';
import { DiferenciaisSection } from './components/DiferenciaisSection';
import { ProofVisualSection } from './components/ProofVisualSection';
import { OfferTriangulationSection } from './components/OfferTriangulationSection';
import { EconomyComparatorSection } from './components/EconomyComparatorSection';
import { PriceAnchorSection } from './components/PriceAnchorSection';
import { IntermediateCTASection } from './components/IntermediateCTASection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FooterSection } from './components/FooterSection';
import { CheckoutModal } from './components/CheckoutModal';
import { TrackingHelperModal } from './components/TrackingHelperModal';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<OfferPlan | null>(null);

  useEffect(() => {
    // Dispara evento inicial view_page conforme solicitado
    trackEvent('view_page', {
      product: 'Pink Liss Belutti Professional',
      url: window.location.href,
      referrer: document.referrer,
    });
  }, []);

  const scrollToOffers = () => {
    const el = document.getElementById('ofertas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-white flex flex-col selection:bg-pink-600 selection:text-white">
      {/* 1. HERO — PRIMEIRA DOBRA */}
      <HeroSection onScrollToOffers={scrollToOffers} />

      {/* 2. BARRA FIXA MOBILE (Acompanha no celular) */}
      <MobileStickyBar onScrollToOffers={scrollToOffers} />

      {/* 3. VÍDEO (ANTES → APLICAÇÃO → DEPOIS) */}
      <VideoSection onScrollToOffers={scrollToOffers} />

      {/* 4. PROBLEMA (SUAS CLIENTES QUEREM LISO...) */}
      <ProblemSection />

      {/* 5. DESEJO (O LISO QUE CHAMA ATENÇÃO PELO RESULTADO) */}
      <DesireSection />

      {/* 6. DIFERENCIAIS (MAIS QUE ALISAR. UMA EXPERIÊNCIA DE TRATAMENTO) */}
      <DiferenciaisSection />

      {/* 7. PROVA VISUAL (ANTES E DEPOIS FALA MAIS ALTO) */}
      <ProofVisualSection />

      {/* 8. OFERTA / TRIANGULAÇÃO (LEVE MAIS E PAGUE MENOS POR UNIDADE) */}
      <OfferTriangulationSection onSelectPlan={(plan) => setSelectedPlan(plan)} />

      {/* 9. COMPARADOR DE ECONOMIA (OLHA QUANTO VOCÊ ECONOMIZA) */}
      <EconomyComparatorSection onScrollToOffers={scrollToOffers} />

      {/* 10. ANCORAGEM DE PREÇO (DE R$ 350 POR R$ 119,90) */}
      <PriceAnchorSection onScrollToOffers={scrollToOffers} />

      {/* 11. CTA INTERMEDIÁRIO (PRONTA PARA GARANTIR A SUA?) */}
      <IntermediateCTASection onScrollToOffers={scrollToOffers} />

      {/* 12. OBJEÇÕES / FAQ (ACCORDION) */}
      <FAQSection />

      {/* 13. CTA FINAL (SE É PARA ENTREGAR UM LISO DE IMPACTO...) */}
      <FinalCTASection onScrollToOffers={scrollToOffers} />

      {/* 14. RODAPÉ (INFORMAÇÕES COMERCIAIS & TERMOS) */}
      <FooterSection />

      {/* Checkout Modal Rápido com Resumo Seguro */}
      <CheckoutModal
        plan={selectedPlan}
        onClose={() => setSelectedPlan(null)}
      />

      {/* Painel Discreto de Rastreamento / Configuração de Tráfego Pago */}
      <TrackingHelperModal />
    </div>
  );
}
