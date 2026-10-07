import React from 'react';

const WORDS = [
  'INTERMEDIAÇÃO DE MÁQUINAS',
  'COMPRA E VENDA',
  'NEGÓCIOS DO AGRO',
  'NEGOCIAÇÃO SEGURA',
  'COMPRADORES QUALIFICADOS',
  'ALCANCE NACIONAL',
  'OPORTUNIDADES NO AGRO',
  'CONEXÃO ENTRE COMPRADORES E VENDEDORES',
];

export const WordMarquee: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="w-full py-2 sm:py-2.5 md:py-3 bg-black border-y border-zinc-800/80 overflow-hidden select-none relative z-20 flex items-center"
    >
      <div className="animate-marquee-strip flex items-center">
        {/* Bloco 1 com a imagem horizontal transparente como separador de marca */}
        {WORDS.map((phrase, idx) => (
          <span key={`w1-${idx}`} className="inline-flex items-center shrink-0">
            <span className="text-[10px] sm:text-[11px] md:text-xs font-bold tracking-[0.22em] text-zinc-300 uppercase whitespace-nowrap">
              {phrase}
            </span>
            <picture className="inline-flex items-center shrink-0 mx-4 sm:mx-6 md:mx-8">
              <source srcSet="/marquee-separator.webp" type="image/webp" />
              <img
                src="/marquee-separator.png"
                alt="Apex Agro"
                loading="eager"
                decoding="sync"
                className="h-3.5 sm:h-4.5 md:h-5 w-auto max-w-[120px] sm:max-w-[150px] md:max-w-[180px] object-contain select-none shrink-0"
              />
            </picture>
          </span>
        ))}

        {/* Bloco 2 idêntico para looping contínuo suave e imperceptível a -50% */}
        {WORDS.map((phrase, idx) => (
          <span key={`w2-${idx}`} className="inline-flex items-center shrink-0">
            <span className="text-[10px] sm:text-[11px] md:text-xs font-bold tracking-[0.22em] text-zinc-300 uppercase whitespace-nowrap">
              {phrase}
            </span>
            <picture className="inline-flex items-center shrink-0 mx-4 sm:mx-6 md:mx-8">
              <source srcSet="/marquee-separator.webp" type="image/webp" />
              <img
                src="/marquee-separator.png"
                alt="Apex Agro"
                loading="eager"
                decoding="sync"
                className="h-3.5 sm:h-4.5 md:h-5 w-auto max-w-[120px] sm:max-w-[150px] md:max-w-[180px] object-contain select-none shrink-0"
              />
            </picture>
          </span>
        ))}
      </div>
    </div>
  );
};
