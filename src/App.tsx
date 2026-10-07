import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuemSomosSection } from './components/QuemSomosSection';
import { SellSection } from './components/SellSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LiveNotificationToast } from './components/LiveNotificationToast';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090a0b] text-[#f3f4f6] selection:bg-white selection:text-black">
      {/* 1. Header Limpo com Logo Grande sem Fundo Preto */}
      <Navbar />

      {/* 2. Conteúdo Principal */}
      <main>
        {/* Hero com Vídeo e Headline */}
        <Hero />

        {/* Quem Somos (texto institucional exclusivo no formato vertical) */}
        <QuemSomosSection />

        {/* Chamada de Venda e Negócios (Tem uma máquina ou negócio para vender? -> QUERO VENDER) */}
        <SellSection />

        {/* Contato Direto */}
        <ContactSection />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />

      {/* Notificações Visuais no Canto Inferior Esquerdo */}
      <LiveNotificationToast />
    </div>
  );
}


