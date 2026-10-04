import React, { useState } from 'react';
import { ShieldCheck, MessageCircle, Mail, Sparkles, Lock, X, MapPin, Truck } from 'lucide-react';
import { WHATSAPP_URL, WHATSAPP_PHONE_FORMATTED, CONTACT_EMAIL, COMPANY_ADDRESS, trackEvent } from '../config/constants';

export const FooterSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const handleWhatsApp = () => {
    trackEvent('click_whatsapp', { source: 'footer_whatsapp' });
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#050507] border-t border-zinc-900 py-12 md:py-16 text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-black text-base uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span>BELUTTI PROFESSIONAL • REALI PROFESSIONAL</span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Cosméticos profissionais de alta performance. Desenvolvido para salões de beleza e cabeleireiras que buscam liso com efeito natural, brilho e máxima rentabilidade por aplicação.
            </p>
            
            {/* Aviso de Envio 24h e Atendimento */}
            <div className="p-3 rounded-xl bg-pink-950/40 border border-pink-500/30 text-zinc-300 space-y-1">
              <div className="flex items-center gap-2 text-pink-300 font-bold text-xs uppercase">
                <Truck className="w-4 h-4 text-emerald-400" />
                <span>Envio em até 24h após a compra</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Assim que você concluir sua compra, nosso time entrará em contato diretamente para confirmar os dados e acompanhar todo o envio do seu pedido.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-medium pt-1">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Ambiente de pagamento seguro e criptografia SSL de 256 bits</span>
            </div>
          </div>

          {/* Informações Comerciais & Endereço */}
          <div className="space-y-2.5">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs">
              Sede & Distribuição
            </h4>
            <ul className="space-y-2 text-zinc-400 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_ADDRESS.street}, {COMPANY_ADDRESS.number}<br />
                  {COMPANY_ADDRESS.neighborhood}<br />
                  {COMPANY_ADDRESS.city} - {COMPANY_ADDRESS.state}
                </span>
              </li>
              <li>Atendimento Exclusivo para Salões</li>
              <li>Frete Fixo Nordeste: R$ 19,90</li>
            </ul>
          </div>

          {/* Atendimento & Contato */}
          <div className="space-y-2.5">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs">
              Contato & WhatsApp
            </h4>
            <div className="space-y-2.5">
              <button
                onClick={handleWhatsApp}
                className="w-full py-2.5 px-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/50 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Falar no WhatsApp: {WHATSAPP_PHONE_FORMATTED}</span>
              </button>
              
              <div className="flex items-center gap-2 text-zinc-300 text-xs">
                <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors truncate">
                  {CONTACT_EMAIL}
                </a>
              </div>
              
              <div className="text-[11px] text-zinc-500">
                Atendimento: Segunda a Sábado • Resposta Rápida
              </div>
            </div>
          </div>

        </div>

        {/* Linha Divisória */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          <div className="text-[11px] text-zinc-500">
            © {new Date().getFullYear()} Reali Professional • Belutti Professional. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6 text-[11px] font-semibold text-zinc-400">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-pink-400 transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-pink-400 transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <span>•</span>
            <button
              onClick={handleWhatsApp}
              className="hover:text-pink-400 transition-colors cursor-pointer"
            >
              Contato no WhatsApp
            </button>
          </div>

        </div>

        {/* Disclaimer Legal Obrigatório para Tráfego Pago / Meta Ads */}
        <div className="mt-8 pt-4 border-t border-zinc-950 text-[10px] text-zinc-600 leading-relaxed text-center max-w-4xl mx-auto">
          Este site não é afiliado ao Facebook, Instagram ou a qualquer entidade da Meta Platforms Inc. Após sair do Facebook ou Instagram, a responsabilidade é inteiramente deste site. Os produtos aqui apresentados destinam-se ao uso técnico e profissional. Os resultados dependem de anamnese, compatibilidade química prévia e aplicação correta segundo o manual técnico.
        </div>

      </div>

      {/* Modal de Políticas / Termos */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#121018] border border-zinc-800 rounded-2xl max-w-lg w-full p-6 text-zinc-300 relative shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-black uppercase text-white mb-4">
              {activeModal === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
            </h3>

            <div className="text-xs space-y-3 max-h-72 overflow-y-auto pr-2 leading-relaxed text-zinc-400">
              {activeModal === 'privacy' ? (
                <>
                  <p>
                    A Reali Professional / Belutti Professional respeita a privacidade de suas clientes e parceiras. Seus dados cadastrais são tratados com sigilo absoluto para faturamento, envio expresso em até 24 horas e suporte de rastreamento.
                  </p>
                  <p>
                    Endereço registrado: {COMPANY_ADDRESS.fullText}. Contato direto: {CONTACT_EMAIL} e WhatsApp {WHATSAPP_PHONE_FORMATTED}.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Ao adquirir a Pink Liss através desta página oficial, você concorda com as condições de venda, garantia e envio estabelecidas pela Reali Professional.
                  </p>
                  <p>
                    O envio é realizado em até 24 horas úteis após a confirmação da compra, e nossa equipe fará o contato pós-compra pelo WhatsApp para assegurar sua total tranquilidade.
                  </p>
                  <p>
                    O frete fixo de R$ 19,90 aplica-se para pedidos elegíveis destinados aos estados da região Nordeste do Brasil.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs uppercase cursor-pointer"
              >
                Entendi e Concordo
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
