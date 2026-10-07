import React from 'react';
import {
  WHATSAPP_DISPLAY,
  PHONE_CONTACT,
  EMAIL_CONTACT,
  ADDRESS_CONTACT,
  getWhatsAppUrl,
} from '../data/config';
import { Phone, Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ContactSection: React.FC = () => {
  const openWhatsApp = () => {
    window.open(getWhatsAppUrl('geral'), '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-[#090a0b] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
            FALE CONOSCO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase mt-1">
            CONTATO
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* WhatsApp */}
          <div
            onClick={openWhatsApp}
            className="p-6 rounded-2xl bg-[#111215] border border-zinc-800/80 hover:border-[#25d366]/60 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <WhatsAppIcon color="#ffffff" className="w-5 h-5 text-white" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
              WHATSAPP
            </span>
            <div className="text-lg font-black text-white">{WHATSAPP_DISPLAY}</div>
            <span className="text-xs text-[#25d366] font-semibold mt-2 inline-block">
              Atendimento Online →
            </span>
          </div>

          {/* Telefone */}
          <div className="p-6 rounded-2xl bg-[#111215] border border-zinc-800/80">
            <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
              TELEFONE
            </span>
            <div className="text-lg font-black text-white">{PHONE_CONTACT}</div>
            <span className="text-xs text-zinc-400 mt-2 inline-block">
              Seg à Sex: 08h às 18h
            </span>
          </div>

          {/* E-mail */}
          <div className="p-6 rounded-2xl bg-[#111215] border border-zinc-800/80">
            <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
              E-MAIL
            </span>
            <div className="text-base font-bold text-white truncate">{EMAIL_CONTACT}</div>
            <span className="text-xs text-zinc-400 mt-2 inline-block">
              Comercial & Propostas
            </span>
          </div>

          {/* Localização */}
          <div className="p-6 rounded-2xl bg-[#111215] border border-zinc-800/80">
            <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
              LOCALIZAÇÃO
            </span>
            <div className="text-sm font-bold text-white leading-snug">{ADDRESS_CONTACT}</div>
            <span className="text-xs text-zinc-400 mt-2 inline-block">
              Santa Catarina, Brasil
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
