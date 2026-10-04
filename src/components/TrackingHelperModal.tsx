import React, { useState, useEffect } from 'react';
import { Settings, X, Activity, Link2, Copy, Check } from 'lucide-react';
import { 
  CHECKOUT_URL_1_UNIT, 
  CHECKOUT_URL_2_UNITS, 
  CHECKOUT_URL_3_UNITS, 
  WHATSAPP_URL, 
  WHATSAPP_PHONE_FORMATTED 
} from '../config/constants';

interface TrackingEventItem {
  event: string;
  time: string;
  params: any;
}

export const TrackingHelperModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState<TrackingEventItem[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    // Escuta novos eventos empurrados no dataLayer para debug em tempo real do anunciante
    const interval = setInterval(() => {
      if (typeof window !== 'undefined' && window.dataLayer) {
        const recorded = window.dataLayer.map((item: any) => ({
          event: item.event || 'custom_event',
          time: item.timestamp ? new Date(item.timestamp).toLocaleTimeString() : new Date().toLocaleTimeString(),
          params: item,
        }));
        setEvents(recorded.slice(-10).reverse());
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      {/* Botão sutil no canto inferior esquerdo */}
      <button
        onClick={() => setIsOpen(true)}
        title="Painel do Anunciante / Rastreamento de Tráfego Pago"
        className="fixed bottom-20 left-4 z-40 p-2.5 rounded-full bg-zinc-900/90 border border-pink-500/40 text-pink-400 hover:text-white hover:bg-pink-950 transition-all shadow-lg text-xs flex items-center gap-1.5 opacity-75 hover:opacity-100 cursor-pointer"
      >
        <Settings className="w-4 h-4 animate-spin-slow" />
        <span className="hidden sm:inline font-bold text-[11px] uppercase tracking-wider">
          Config Anúncios
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#121018] border border-pink-500/60 rounded-2xl max-w-lg w-full p-6 text-white relative shadow-2xl max-h-[90vh] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-base font-black uppercase text-white">
                    Configuração de Tráfego Pago & Links
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links de Checkout e WhatsApp */}
              <div className="mt-4 space-y-2.5 max-h-56 overflow-y-auto pr-1">
                <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[11px] font-bold text-pink-400 uppercase">1 UNIDADE • R$ 119,90</span>
                    <button
                      onClick={() => handleCopy(CHECKOUT_URL_1_UNIT, 'link1')}
                      className="text-[10px] text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copied === 'link1' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      Copiar
                    </button>
                  </div>
                  <div className="text-xs text-zinc-300 font-mono truncate">{CHECKOUT_URL_1_UNIT}</div>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[11px] font-bold text-pink-400 uppercase">2 UNIDADES • R$ 199,00</span>
                    <button
                      onClick={() => handleCopy(CHECKOUT_URL_2_UNITS, 'link2')}
                      className="text-[10px] text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copied === 'link2' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      Copiar
                    </button>
                  </div>
                  <div className="text-xs text-zinc-300 font-mono truncate">{CHECKOUT_URL_2_UNITS}</div>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[11px] font-bold text-amber-300 uppercase">3 UNIDADES • R$ 259,00 (MAIS VANTAJOSA)</span>
                    <button
                      onClick={() => handleCopy(CHECKOUT_URL_3_UNITS, 'link3')}
                      className="text-[10px] text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copied === 'link3' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      Copiar
                    </button>
                  </div>
                  <div className="text-xs text-zinc-300 font-mono truncate">{CHECKOUT_URL_3_UNITS}</div>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase">WHATSAPP REALI • {WHATSAPP_PHONE_FORMATTED}</span>
                    <button
                      onClick={() => handleCopy(WHATSAPP_URL, 'whatsapp')}
                      className="text-[10px] text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copied === 'whatsapp' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      Copiar
                    </button>
                  </div>
                  <div className="text-xs text-zinc-300 font-mono truncate">{WHATSAPP_URL}</div>
                </div>
              </div>

              {/* Eventos Disparados em Tempo Real */}
              <div className="mt-4">
                <span className="text-xs font-black uppercase tracking-wider text-zinc-300 block mb-2">
                  Eventos Disparados (Meta Pixel & DataLayer):
                </span>
                <div className="space-y-1.5 max-h-32 overflow-y-auto pr-1">
                  {events.length === 0 ? (
                    <div className="text-xs text-zinc-500 italic p-2 bg-zinc-950 rounded">
                      Nenhum evento adicional disparado nesta sessão.
                    </div>
                  ) : (
                    events.map((ev, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded bg-zinc-950/80 border border-zinc-800/80 text-[11px]">
                        <span className="font-mono text-emerald-400 font-bold">{ev.event}</span>
                        <span className="text-zinc-500 text-[10px]">{ev.time}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-zinc-800 text-center">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs uppercase cursor-pointer"
              >
                Fechar Painel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
