// Links de pagamento PagBank/PagSeguro oficiais por oferta
export const CHECKOUT_URL_1_UNIT = "https://pag.ae/82dxaTXHJ"; // 1 Unidade - R$ 119,90
export const CHECKOUT_URL_2_UNITS = "https://pag.ae/82dxcizX3"; // 2 Unidades - R$ 199,00
export const CHECKOUT_URL_3_UNITS = "https://pag.ae/82dxcF7-m"; // 3 Unidades - R$ 259,00
export const CHECKOUT_URL = CHECKOUT_URL_1_UNIT;

// WhatsApp oficial Reali Professional
export const WHATSAPP_URL = "https://wa.me/message/NSXTGUFYK3GDG1";
export const WHATSAPP_PHONE = "738826-6709";
export const WHATSAPP_PHONE_FORMATTED = "(73) 8826-6709";
export const CONTACT_EMAIL = "realiprofessionalbackup@gmail.com";

// Endereço oficial
export const COMPANY_ADDRESS = {
  street: "R. Gislene Viana Ferreira",
  number: "255",
  neighborhood: "Jardim Europa",
  city: "Santa Rita",
  state: "PB",
  fullText: "R. Gislene Viana Ferreira, 255 - Jardim Europa, Santa Rita - PB",
};

// Compromisso operacional
export const DISPATCH_PROMISE = "Envio feito em até 24 horas após a compra";
export const TEAM_SERVICE_PROMISE = "Após comprar, nosso time entrará em contato com você para acompanhar seu pedido";

export const PRODUCT_INFO = {
  brand: "BELUTTI PROFESSIONAL",
  productName: "PINK LISS",
  category: "PROGRESSIVA ORGÂNICA",
  size: "1 Litro",
  application: "Passo Único",
  fixedShippingNordeste: "R$ 19,90",
  shippingNote: "FRETE FIXO POR PEDIDO PARA O NORDESTE",
};

export interface OfferPlan {
  id: number;
  units: number;
  title: string;
  originalPrice: string;
  originalPriceNumber: number;
  promoPrice: string;
  promoPriceNumber: number;
  unitPrice: string;
  savings: string;
  savingsNumber: number;
  badge?: string;
  subBadge?: string;
  isPopular?: boolean;
  checkoutUrl: string;
  eventTrack: string;
  installments?: string;
}

export const OFFERS: OfferPlan[] = [
  {
    id: 1,
    units: 1,
    title: "1 PINK LISS",
    originalPrice: "R$ 350,00",
    originalPriceNumber: 350.00,
    promoPrice: "R$ 119,90",
    promoPriceNumber: 119.90,
    unitPrice: "R$ 119,90",
    savings: "R$ 230,10",
    savingsNumber: 230.10,
    checkoutUrl: CHECKOUT_URL_1_UNIT,
    eventTrack: "select_1_unit",
    installments: "ou até 12x no cartão",
  },
  {
    id: 2,
    units: 2,
    title: "2 PINK LISS",
    originalPrice: "R$ 700,00",
    originalPriceNumber: 700.00,
    promoPrice: "R$ 199,00",
    promoPriceNumber: 199.00,
    unitPrice: "R$ 99,50",
    savings: "R$ 501,00",
    savingsNumber: 501.00,
    checkoutUrl: CHECKOUT_URL_2_UNITS,
    eventTrack: "select_2_units",
    installments: "ou até 12x no cartão",
  },
  {
    id: 3,
    units: 3,
    title: "3 PINK LISS",
    originalPrice: "R$ 1.050,00",
    originalPriceNumber: 1050.00,
    promoPrice: "R$ 259,00",
    promoPriceNumber: 259.00,
    unitPrice: "R$ 86,33",
    savings: "R$ 791,00",
    savingsNumber: 791.00,
    badge: "⭐ MAIS VANTAJOSA",
    subBadge: "MAIOR ECONOMIA POR UNIDADE",
    isPopular: true,
    checkoutUrl: CHECKOUT_URL_3_UNITS,
    eventTrack: "select_3_units",
    installments: "ou até 12x no cartão",
  },
];

// Helper de Rastreamento / Analytics (Pixel + GTM / DataLayer)
declare global {
  interface Window {
    dataLayer?: any[];
    fbq?: (...args: any[]) => void;
    gtag?: (...args: any[]) => void;
  }
}

export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window !== "undefined") {
    // DataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...params,
      timestamp: new Date().toISOString(),
    });

    // Facebook Pixel wrapper se existir
    if (typeof window.fbq === "function") {
      if (eventName === "begin_checkout" || eventName === "click_buy") {
        window.fbq("track", "InitiateCheckout", params);
      } else if (eventName === "click_whatsapp") {
        window.fbq("trackCustom", "ClickWhatsApp", params);
      } else {
        window.fbq("trackCustom", eventName, params);
      }
    }

    // Google Analytics gtag se existir
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }

    console.log(`[Analytics Event Tracked]: ${eventName}`, params);
  }
};
