import React from 'react';
import { getWhatsAppUrl } from '../data/config';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ArrowUpRight, Handshake, ShieldCheck, TrendingUp } from 'lucide-react';

export const SellSection: React.FC = () => {
  const openWhatsApp = (type: 'vender' | 'comprar' | 'negocio' | 'geral' = 'vender') => {
    window.open(getWhatsAppUrl(type), '_blank');
  };

  return (
    <section id="vender" className="py-24 bg-black border-b border-zinc-800/80 text-center relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,61,39,0.18)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c59b27] mb-3">
          INTERMEDIAÇÃO ESPECIALIZADA
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase mb-4 leading-tight">
          TEM UMA MÁQUINA OU NEGÓCIO PARA VENDER?
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl leading-relaxed">
          Fale conosco. Podemos ajudar a conectar sua oportunidade ao comprador certo.
        </p>

        {/* Highlight CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          {/* Main highlighted button */}
          <button
            onClick={() => openWhatsApp('vender')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white hover:bg-zinc-200 text-black font-black text-sm sm:text-base tracking-widest uppercase transition-all transform hover:scale-105 active:scale-95 shadow-2xl cursor-pointer"
          >
            <span>QUERO VENDER</span>
            <ArrowUpRight className="w-5 h-5 text-black" />
          </button>

          {/* Secondary buttons */}
          <button
            onClick={() => openWhatsApp('comprar')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700 font-extrabold text-sm tracking-wider uppercase transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>QUERO COMPRAR</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400" />
          </button>

          <button
            onClick={() => openWhatsApp('negocio')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-5 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-black font-black text-sm tracking-wider uppercase transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-[#25d366]/20 cursor-pointer"
          >
            <WhatsAppIcon className="w-5 h-5 text-black" />
            <span>FALAR COM A APEX AGRO</span>
          </button>
        </div>

        {/* 3 micro pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-8 border-t border-zinc-800/80 text-left">
          <div className="flex items-start gap-3">
            <Handshake className="w-5 h-5 text-[#c59b27] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white uppercase">Compradores Qualificados</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Apresentamos sua máquina diretamente a quem realmente tem capacidade de compra.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#c59b27] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white uppercase">Negociação Segura</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Acompanhamento transparente do primeiro contato até o fechamento.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-[#c59b27] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white uppercase">Sem Burocracia</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Agilidade e assertividade para valorizar o seu tempo e o seu patrimônio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

