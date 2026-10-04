import React, { useState } from 'react';
import { X, Check, Truck, ShieldCheck, ArrowRight, Lock, MessageCircle } from 'lucide-react';
import { OfferPlan, CHECKOUT_URL, WHATSAPP_URL, trackEvent } from '../config/constants';
import pinkLissBottleImg from '../assets/productImage';

interface CheckoutModalProps {
  plan: OfferPlan | null;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ plan, onClose }) => {
  if (!plan) return null;

  const [state, setState] = useState<'BA' | 'PE' | 'CE' | 'MA' | 'PB' | 'RN' | 'AL' | 'SE' | 'PI' | 'OUTRO'>('PE');
  const isNordeste = state !== 'OUTRO';
  const shippingCost = 19.90;
  const total = plan.promoPriceNumber + shippingCost;

  const handleProceedToGateway = () => {
    trackEvent('begin_checkout', {
      plan_id: plan.id,
      units: plan.units,
      total_with_shipping: total,
      state: state,
    });
    
    // Redireciona para o link de checkout oficial configurado
    window.location.href = plan.checkoutUrl || CHECKOUT_URL;
  };

  const handleHelpWhatsApp = () => {
    trackEvent('click_whatsapp', { source: 'checkout_modal_help', plan_id: plan.id });
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#110e17] border-2 border-pink-500/60 rounded-3xl max-w-lg w-full p-5 sm:p-7 relative shadow-[0_0_60px_rgba(236,72,153,0.3)] text-white overflow-hidden max-h-[92vh] flex flex-col justify-between">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-wider text-pink-400">
              Resumo do Seu Pedido
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Produto Selecionado */}
        <div className="py-4 flex items-center gap-4">
          <div className="w-20 h-20 rounded-2xl bg-black/80 border border-pink-500/40 p-2 shrink-0 flex items-center justify-center">
            <img src={pinkLissBottleImg} alt={plan.title} className="h-full object-contain rounded" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-bold text-pink-400 uppercase">BELUTTI PROFESSIONAL</div>
            <h4 className="text-lg font-black uppercase text-white">{plan.title}</h4>
            <div className="text-xs text-zinc-400">1 Litro cada • Passo Único</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-xs text-zinc-500 line-through">{plan.originalPrice}</span>
              <span className="text-base font-black text-white">{plan.promoPrice}</span>
              <span className="text-[11px] text-amber-300 font-bold">({plan.unitPrice}/un)</span>
            </div>
          </div>
        </div>

        {/* Seletor de Estado para Confirmação do Frete */}
        <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-pink-500/30 mb-4">
          <div className="flex items-center justify-between text-xs font-bold text-zinc-300 mb-2">
            <span className="flex items-center gap-1.5 text-white uppercase">
              <Truck className="w-4 h-4 text-pink-400" /> Destino de Entrega:
            </span>
            <span className="text-emerald-400 font-extrabold uppercase">
              Frete Fixo R$ 19,90
            </span>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="uf-select" className="text-xs text-zinc-400 font-medium">Estado:</label>
            <select
              id="uf-select"
              value={state}
              onChange={(e: any) => setState(e.target.value)}
              className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-pink-500"
            >
              <option value="PE">Pernambuco (PE)</option>
              <option value="BA">Bahia (BA)</option>
              <option value="CE">Ceará (CE)</option>
              <option value="MA">Maranhão (MA)</option>
              <option value="PB">Paraíba (PB)</option>
              <option value="RN">Rio Grande do Norte (RN)</option>
              <option value="AL">Alagoas (AL)</option>
              <option value="SE">Sergipe (SE)</option>
              <option value="PI">Piauí (PI)</option>
              <option value="OUTRO">Outra Região do Brasil</option>
            </select>
          </div>
        </div>

        {/* Cálculo de Valores */}
        <div className="space-y-2 text-xs py-3 border-t border-zinc-800">
          <div className="flex justify-between text-zinc-400">
            <span>Subtotal ({plan.units} {plan.units === 1 ? 'unidade' : 'unidades'}):</span>
            <span className="text-white font-bold">{plan.promoPrice}</span>
          </div>
          <div className="flex justify-between text-zinc-400">
            <span>Frete Fixo Nordeste:</span>
            <span className="text-amber-300 font-bold">R$ 19,90</span>
          </div>
          <div className="flex justify-between text-zinc-400">
            <span>Economia aplicada:</span>
            <span className="text-emerald-400 font-bold">-{plan.savings}</span>
          </div>
          <div className="flex justify-between text-base sm:text-lg font-black text-white pt-2 border-t border-zinc-800">
            <span>Total com Frete:</span>
            <span className="text-emerald-400">
              R$ {total.toFixed(2).replace('.', ',')}
            </span>
          </div>
          <div className="mt-2 p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-300 flex items-center gap-1.5 font-medium">
            <Truck className="w-3.5 h-3.5 shrink-0" />
            <span>Envio em até 24h • Nosso time entrará em contato para te atender!</span>
          </div>
        </div>

        {/* Botão de Finalizar */}
        <div className="pt-3 space-y-2.5">
          <button
            onClick={handleProceedToGateway}
            className="w-full py-4 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-black text-base uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.5)] active:scale-98 flex items-center justify-center gap-2 cursor-pointer shine-effect"
          >
            <Lock className="w-4 h-4 shrink-0" />
            <span>IR PARA O PAGAMENTO SEGURO</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </button>

          <button
            onClick={handleHelpWhatsApp}
            className="w-full py-2.5 text-xs font-bold text-zinc-400 hover:text-emerald-400 flex items-center justify-center gap-1.5 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Prefere tirar dúvidas ou fechar pelo WhatsApp? Clique aqui</span>
          </button>
        </div>

        {/* Selo de Segurança */}
        <div className="mt-3 pt-2 text-center text-[10px] text-zinc-500 flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Checkout Oficial Belutti Professional • Dados 100% Protegidos</span>
        </div>

      </div>
    </div>
  );
};
