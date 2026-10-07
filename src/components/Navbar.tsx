import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { getWhatsAppUrl } from '../data/config';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = (type: 'vender' | 'comprar' | 'geral' = 'geral') => {
    window.open(getWhatsAppUrl(type), '_blank');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/60 backdrop-blur-lg border-b border-white/10 py-2 sm:py-3 shadow-lg'
            : 'bg-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo APEX AGRO Grande e Limpa à Esquerda (Sem Fundo Preto) */}
          <a
            href="#inicio"
            className="flex items-center -ml-1 sm:-ml-2 group transition-transform hover:scale-102 shrink-0"
            aria-label="APEX AGRO - Início"
          >
            <Logo size="md" />
          </a>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            <a
              href="#inicio"
              className="text-xs lg:text-sm font-bold tracking-wider text-zinc-300 hover:text-white uppercase transition-colors"
            >
              INÍCIO
            </a>
            <a
              href="#quem-somos"
              className="text-xs lg:text-sm font-bold tracking-wider text-zinc-300 hover:text-white uppercase transition-colors"
            >
              QUEM SOMOS
            </a>
            <a
              href="#vender"
              className="text-xs lg:text-sm font-bold tracking-wider text-zinc-300 hover:text-white uppercase transition-colors"
            >
              VENDER
            </a>
            <a
              href="#contato"
              className="text-xs lg:text-sm font-bold tracking-wider text-zinc-300 hover:text-white uppercase transition-colors"
            >
              CONTATO
            </a>
          </nav>

          {/* Botão WhatsApp */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => openWhatsApp('geral')}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-black font-extrabold text-xs lg:text-sm tracking-wider uppercase transition-all transform hover:scale-105 shadow-xl shadow-[#25d366]/20 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 text-black" />
              <span>FALAR COM A APEX AGRO</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-xl flex flex-col justify-between p-6 pt-24 animate-fade-in">
          <nav className="flex flex-col gap-6 text-center">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-bold tracking-wider text-white uppercase py-2 border-b border-zinc-800"
            >
              INÍCIO
            </a>
            <a
              href="#quem-somos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-bold tracking-wider text-white uppercase py-2 border-b border-zinc-800"
            >
              QUEM SOMOS
            </a>
            <a
              href="#vender"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-bold tracking-wider text-white uppercase py-2 border-b border-zinc-800"
            >
              VENDER
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-bold tracking-wider text-white uppercase py-2 border-b border-zinc-800"
            >
              CONTATO
            </a>
          </nav>

          <div className="pt-6 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp('vender');
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-white text-black font-extrabold text-sm tracking-wider uppercase shadow-xl"
            >
              <span>QUERO VENDER</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp('geral');
              }}
              className="w-full flex items-center justify-center gap-3 py-3.5 rounded-full bg-[#25d366] text-black font-extrabold text-sm tracking-wider uppercase shadow-xl"
            >
              <WhatsAppIcon className="w-5 h-5 text-black" />
              <span>FALAR COM A APEX AGRO</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
