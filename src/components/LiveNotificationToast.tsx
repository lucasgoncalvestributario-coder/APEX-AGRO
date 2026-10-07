import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface NotificationItem {
  id: number;
  badge: string;
  message: string;
  timeAgo: string;
}

const NOTIFICATIONS: NotificationItem[] = [
  {
    id: 1,
    badge: 'OPORTUNIDADE',
    message: 'Nova máquina acabou de entrar no estoque',
    timeAgo: 'Agora',
  },
  {
    id: 2,
    badge: 'OPORTUNIDADE',
    message: 'Comprador procurando máquina na sua região',
    timeAgo: 'Agora',
  },
];

export const LiveNotificationToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // First trigger after 3 seconds on page
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Loop interval: every 10 seconds total cycle
    // (Visible for 4.5s, hidden for 5.5s)
    const interval = setInterval(() => {
      // Hide current
      setIsVisible(false);

      // Wait 5.5 seconds, advance to next, then show
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        setIsVisible(true);
      }, 5500);
    }, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isDismissed]);

  const currentNotification = NOTIFICATIONS[currentIndex];

  if (isDismissed || !currentNotification) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 w-[calc(100vw-5rem)] max-w-[310px] sm:max-w-sm transition-all duration-500 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
      }`}
    >
      <div className="p-3.5 sm:p-4 rounded-xl bg-[#111215]/95 backdrop-blur-md border border-zinc-800 hover:border-[#c59b27]/60 shadow-2xl shadow-black/80 flex items-start gap-3 relative select-none">
        {/* Machinery Icon with Logo Colors */}
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#173e26] to-[#0e1713] border border-[#c59b27]/40 flex items-center justify-center shrink-0 shadow-inner">
          <svg
            className="w-5 h-5 text-[#dfb547]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 17h18" />
            <path d="M19 17v-4l-3-3H8l-3 3v4" />
            <circle cx="7.5" cy="17.5" r="3.5" />
            <circle cx="17.5" cy="17.5" r="2.5" />
            <path d="M8 10V6h4v4" />
          </svg>
        </div>

        {/* Content */}
        <div className="flex-1 pr-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#183123] text-[#dfb547] border border-[#c59b27]/30">
              {currentNotification.badge}
            </span>
            <span className="text-[10px] text-zinc-500 font-medium">
              {currentNotification.timeAgo}
            </span>
          </div>

          <p className="text-xs font-semibold text-zinc-200 leading-snug">
            {currentNotification.message}
          </p>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="text-zinc-500 hover:text-white p-1 -mr-1 -mt-1 transition-colors"
          title="Fechar"
          aria-label="Fechar notificação"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
