import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuemSomosSection } from './components/QuemSomosSection';
import { BenefitsSection } from './components/BenefitsSection';
import { SellSection } from './components/SellSection';
import { WordMarquee } from './components/WordMarquee';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LiveNotificationToast } from './components/LiveNotificationToast';
import { ApexIntro } from './components/ApexIntro';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-[#090a0b] text-[#f3f4f6] selection:bg-white selection:text-black">
      {/* Intro Curta e Premium: Do campo nasce a oportunidade */}
      {showIntro && <ApexIntro onComplete={() => setShowIntro(false)} />}

      {/* 1. Header Limpo com Logo Grande sem Fundo Preto */}
      <Navbar />

      {/* 2. Conteúdo Principal */}
      <main>
        {/* Hero com Vídeo e Headline */}
        <Hero />

        {/* Quem Somos (texto institucional exclusivo no formato vertical) */}
        <QuemSomosSection />

        {/* 4 Benefícios e Argumentos de Confiança */}
        <BenefitsSection />

        {/* Chamada de Venda e Negócios (Tem uma máquina ou negócio para vender?) */}
        <SellSection />

        {/* Carrossel / Marquee de Palavras Fino e Discreto na Faixa Divisória */}
        <WordMarquee />

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


