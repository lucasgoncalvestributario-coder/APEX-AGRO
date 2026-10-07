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
            loading="eager"
            decoding="sync"
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05]"
          />
        </picture>

        {/* Levemente apagada/escurecida mas aparecendo bem para destacar o título */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0b]/90 via-black/40 to-black/50" />
      </div>

      {/* Content strictly centered with generous top clearance for logo */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center pt-28 sm:pt-36 md:pt-44 pb-12 sm:pb-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[1.08] mb-4 sm:mb-5 drop-shadow-2xl">
          MÁQUINAS CERTAS.<br />
          NEGÓCIOS CERTOS.
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed font-normal px-2">
          Conectamos quem quer vender a quem quer comprar máquinas e oportunidades agrícolas com segurança, agilidade e acompanhamento profissional.
        </p>

        {/* CTAs Compactos e Elegantes: Mobile-first, sem ocupar espaço vertical excessivo */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full max-w-xl mx-auto">
          {/* QUERO VENDER */}
          <button
            onClick={() => openWhatsApp('vender')}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white hover:bg-zinc-200 text-black font-extrabold text-xs tracking-wider uppercase transition-all transform hover:scale-105 active:scale-95 shadow-md cursor-pointer whitespace-nowrap min-w-[125px]"
          >
            <span>QUERO VENDER</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* QUERO COMPRAR */}
          <button
            onClick={() => openWhatsApp('comprar')}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700 font-extrabold text-xs tracking-wider uppercase transition-all transform hover:scale-105 active:scale-95 backdrop-blur-md cursor-pointer whitespace-nowrap min-w-[125px]"
          >
            <span>QUERO COMPRAR</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </button>

          {/* FALAR NO WHATSAPP */}
          <button
            onClick={() => openWhatsApp('geral')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4.5 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-black font-extrabold text-xs tracking-wider uppercase transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-[#25d366]/20 cursor-pointer whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 text-black" />
            <span>FALAR NO WHATSAPP</span>
          </button>
        </div>
      </div>
    </section>
  );
};
