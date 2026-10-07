import React from 'react';
import { Handshake, ShieldCheck, TrendingUp, Globe } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Handshake,
      title: 'Compradores qualificados',
      description: 'Apresentamos sua máquina diretamente a quem realmente tem capacidade de compra.',
    },
    {
      icon: ShieldCheck,
      title: 'Negociação segura',
      description: 'Acompanhamento transparente do primeiro contato até o fechamento.',
    },
    {
      icon: TrendingUp,
      title: 'Sem burocracia',
      description: 'Agilidade e assertividade para valorizar o seu tempo e o seu patrimônio.',
    },
    {
      icon: Globe,
      title: 'Alcance nacional',
      description: 'Atuação em diversos estados e regiões do Brasil',
    },
  ];

  return (
    <section aria-label="Benefícios e Diferenciais" className="py-10 sm:py-14 md:py-16 bg-[#090a0b] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-xs transition-colors hover:border-zinc-700/80"
              >
                <Icon className="w-5 h-5 text-[#c59b27] shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
