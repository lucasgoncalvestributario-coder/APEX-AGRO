import React from 'react';
import { getWhatsAppUrl } from '../data/config';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ArrowUpRight } from 'lucide-react';

export const QuemSomosSection: React.FC = () => {
  const openWhatsApp = (type: 'vender' | 'comprar' | 'geral' = 'geral') => {
    window.open(getWhatsAppUrl(type), '_blank');
  };

  return (
    <section id="quem-somos" className="py-24 sm:py-32 bg-[#090a0b] border-b border-zinc-800/80 relative overflow-hidden">
      {/* Subtle brand glow behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(27,61,39,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Canto superior esquerdo: QUEM SOMOS */}
        <div className="text-left mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c59b27] block mb-2">
            INSTITUCIONAL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            QUEM SOMOS
          </h2>
          <div className="w-16 h-1 bg-[#c59b27] mt-4 rounded-full" />
        </div>

        {/* Texto centralizado no formato vertical */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-200 font-medium leading-relaxed sm:leading-loose text-center">
            Atuamos na intermediação de compra e venda de máquinas e negócios do agro, conectando oportunidades e pessoas com segurança, transparência e excelência. Nosso compromisso é conduzir cada negociação com seriedade, proximidade e responsabilidade, buscando sempre o melhor negócio para todas as partes. Construímos a Apex Agro para ser uma empresa de confiança, referência e relacionamento, onde cada negócio é conduzido com o cuidado que ele merece.
          </p>

          {/* Botão de contato direto */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openWhatsApp('geral')}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-black font-extrabold text-sm tracking-wider uppercase transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-[#25d366]/20 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 text-black" />
              <span>FALAR COM A APEX AGRO</span>
            </button>
            <button
              onClick={() => openWhatsApp('vender')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-zinc-200 text-black font-extrabold text-sm tracking-wider uppercase transition-all transform hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
            >
              <span>QUERO VENDER</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
