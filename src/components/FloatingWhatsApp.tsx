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
      className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-black shadow-2xl transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer group"
    >
      <WhatsAppIcon className="w-7 h-7 text-black" />
    </button>
  );
};
