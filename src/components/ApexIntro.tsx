import React, { useEffect, useState } from 'react';

interface ApexIntroProps {
  onComplete: () => void;
}

export const ApexIntro: React.FC<ApexIntroProps> = ({ onComplete }) => {
  const [fadedIn, setFadedIn] = useState(false);
  const [shineActive, setShineActive] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 1. A logo aparece suavemente no centro
    const tFadeIn = setTimeout(() => {
      setFadedIn(true);
    }, 60);

    // 2. Um brilho suave e elegante percorre a logo (reflexo de luz)
    const tShine = setTimeout(() => {
      setShineActive(true);
    }, 550);

    // 3. A logo fica completamente visível por um instante, depois a intro desaparece suavemente
    const tExit = setTimeout(() => {
      setIsExiting(true);
    }, 1600);

    // 4. Conclusão total da transição (~2 segundos de duração)
    const tComplete = setTimeout(() => {
      onComplete();
    }, 2050);

    return () => {
      clearTimeout(tFadeIn);
      clearTimeout(tShine);
      clearTimeout(tExit);
      clearTimeout(tComplete);
    };
  }, [onComplete]);

  // Toque/clique fecha a intro imediatamente de forma suave
  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(onComplete, 250);
  };

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#070809] select-none transition-opacity duration-450 ease-out cursor-pointer ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Apex Agro"
    >
      {/* Centro: Apenas a Logo Oficial */}
      <div
        className={`relative flex items-center justify-center px-6 transition-all duration-700 ease-out ${
          fadedIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="relative inline-flex items-center justify-center overflow-hidden">
          {/* Logo Oficial Apex Agro */}
          <img
            src="/logo.png"
            alt="APEX AGRO"
            onError={(e) => {
              e.currentTarget.src = '/logo.jpg';
            }}
            className="h-16 sm:h-20 md:h-24 w-auto max-w-[280px] sm:max-w-[360px] md:max-w-[440px] object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
          />

          {/* Brilho suave e elegante percorrendo a logo (reflexo de luz sutil) */}
          {shineActive && (
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{
                WebkitMaskImage: 'url(/logo.png)',
                maskImage: 'url(/logo.png)',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
              }}
            >
              <div
                className="w-full h-full animate-logo-shine"
                style={{
                  background:
                    'linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.08) 38%, rgba(255,255,255,0.45) 50%, rgba(212,175,55,0.3) 54%, transparent 68%)',
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
