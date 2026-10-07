import React from 'react';

export const SellSection: React.FC = () => {
  return (
    <section id="vender" className="py-16 sm:py-24 bg-black text-center relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,61,39,0.18)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-3 leading-tight">
          TEM UMA MÁQUINA OU NEGÓCIO PARA VENDER?
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl leading-relaxed">
          Fale conosco. Podemos ajudar a conectar sua oportunidade ao comprador certo.
        </p>
      </div>
    </section>
  );
};
