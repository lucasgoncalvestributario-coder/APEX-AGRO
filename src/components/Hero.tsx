import React from 'react';
import { getWhatsAppUrl } from '../data/config';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const openWhatsApp = (type: 'vender' | 'comprar' | 'geral') => {
    window.open(getWhatsAppUrl(type), '_blank');
  };

  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black select-none">
      {/* Background Image solicitada pelo usuário em altíssima qualidade (4K Ultra-HD / Retinal) */}
      <div className="absolute inset-0 w-full h-full">
        <picture>
          <source
            srcSet="/hero-pulverizador-4k.webp 3840w, /hero-pulverizador-2k.webp 2560w, /hero-pulverizador.webp 1672w"
            type="image/webp"
            sizes="100vw"
          />
          <source
            srcSet="/hero-pulverizador.png"
            type="image/png"
          />
          <img
            src="/hero-pulverizador.png"
            alt="Pulverizador Agrícola ao Pôr do Sol - APEX AGRO"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05]"
          />
        </picture>

        {/* Levemente apagada/escurecida mas aparecendo bem para destacar o título */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0b]/90 via-black/40 to-black/50" />
      </div>

      {/* Content strictly centered with generous top clearance for logo */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center pt-32 sm:pt-40 md:pt-48 pb-16">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-zinc-400 mb-4 block">
          INTERMEDIAÇÃO DE MÁQUINAS E NEGÓCIOS DO AGRO
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase leading-[1.05] mb-6 drop-shadow-2xl">
          MÁQUINAS CERTAS.<br />
          NEGÓCIOS CERTOS.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Conectamos quem quer vender a quem quer comprar máquinas e oportunidades agrícolas com segurança, agilidade e acompanhamento profissional.
        </p>

        {/* CTA Buttons: QUERO VENDER / QUERO COMPRAR / WHATSAPP */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => openWhatsApp('vender')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-white hover:bg-zinc-200 text-black font-black text-sm tracking-widest uppercase transition-all transform hover:scale-105 active:scale-95 shadow-2xl cursor-pointer"
          >
            <span>QUERO VENDER</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => openWhatsApp('comprar')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700 font-black text-sm tracking-widest uppercase transition-all transform hover:scale-105 active:scale-95 backdrop-blur-md cursor-pointer"
          >
            <span>QUERO COMPRAR</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400" />
          </button>

          <button
            onClick={() => openWhatsApp('geral')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-black font-extrabold text-sm tracking-wider uppercase transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-[#25d366]/20 cursor-pointer"
          >
            <WhatsAppIcon className="w-5 h-5 text-black" />
            <span>FALAR NO WHATSAPP</span>
          </button>
        </div>
      </div>
    </section>
  );
};
