import React from 'react';
import { Logo } from './Logo';
import {
  WHATSAPP_DISPLAY,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  ADDRESS_CONTACT,
  getWhatsAppUrl,
} from '../data/config';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const openWhatsApp = () => {
    window.open(getWhatsAppUrl('geral'), '_blank');
  };

  return (
    <footer className="bg-black text-zinc-400 py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-900 text-center md:text-left">
          {/* Logo APEX AGRO Grande e Limpa */}
          <div className="flex flex-col items-center md:items-start">
            <Logo size="lg" />
          </div>

          {/* Direct contacts */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-300">
            <button
              onClick={openWhatsApp}
              className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>{WHATSAPP_DISPLAY}</span>
            </button>

            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <Instagram className="w-4 h-4 text-zinc-400 hover:text-white" />
              <span>{INSTAGRAM_HANDLE}</span>
            </a>

            <span className="text-zinc-500">•</span>
            <span>{ADDRESS_CONTACT}</span>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <div>
            © {new Date().getFullYear()} APEX AGRO. TODOS OS DIREITOS RESERVADOS.
          </div>
          <div>
            MÁQUINAS CERTAS. NEGÓCIOS CERTOS.
          </div>
        </div>
      </div>
    </footer>
  );
};
