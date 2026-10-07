import React from 'react';

export const QuemSomosSection: React.FC = () => {
  return (
    <section id="quem-somos" className="py-16 sm:py-24 md:py-28 bg-[#090a0b] border-b border-zinc-800/80 relative overflow-hidden">
      {/* Subtle brand glow behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(27,61,39,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Canto superior esquerdo: QUEM SOMOS */}
        <div className="text-left mb-8 sm:mb-12 md:mb-16">
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
        </div>
      </div>
    </section>
  );
};
