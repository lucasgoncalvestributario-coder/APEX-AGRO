import React from 'react';
import { getWhatsAppUrl } from '../data/config';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    window.open(getWhatsAppUrl('geral'), '_blank');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 p-3.5 sm:p-4 rounded-full bg-[#25d366] hover:bg-[#20ba5a] shadow-2xl transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer group shadow-[#25d366]/40"
    >
      <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
    </button>
  );
};
