import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppUrl } from '../data/config';

interface EstoqueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EstoqueModal: React.FC<EstoqueModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOpenWhatsApp = () => {
    window.open(getWhatsAppUrl('estoque'), '_blank');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="estoque-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop com desfoque elegante */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Caixa do Modal */}
      <div className="relative w-full max-w-md bg-[#101214] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 z-10 text-center transform transition-all animate-in fade-in zoom-in-95 duration-200">
        {/* Botão Fechar X */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Fechar modal"
          className="absolute top-4 right-4 p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4 flex items-center justify-center">
          <WhatsAppIcon className="w-8 h-8" />
        </div>

        {/* Título */}
        <h3
          id="estoque-modal-title"
          className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3"
        >
          Consultar estoque
        </h3>

        {/* Mensagem explicativa */}
        <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed mb-6">
          Você deseja consultar as máquinas disponíveis diretamente pelo WhatsApp da Apex Agro?
        </p>

        {/* Botões de Ação */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={handleOpenWhatsApp}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all transform hover:scale-[1.02] shadow-lg shadow-[#25d366]/20 cursor-pointer"
          >
            <WhatsAppIcon className="w-5 h-5 text-black shrink-0" />
            <span>CONFERIR ESTOQUE NO WHATSAPP</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 text-xs sm:text-sm font-semibold tracking-wider text-zinc-400 hover:text-white uppercase transition-colors cursor-pointer"
          >
            CONTINUAR NAVEGANDO NO SITE
          </button>
        </div>
      </div>
    </div>
  );
};
