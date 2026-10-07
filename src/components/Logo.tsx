import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'lg' }) => {
  // Prominent sizing ensuring the logo is grand and readable without any black background
  const sizeClasses = {
    sm: 'h-12 sm:h-14 md:h-16',
    md: 'h-14 sm:h-18 md:h-20',
    lg: 'h-16 sm:h-22 md:h-28 lg:h-32',
    xl: 'h-24 sm:h-32 md:h-40',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Official Transparent APEX AGRO Logo */}
      <img
        src="/logo.png"
        alt="APEX AGRO"
        loading="eager"
        fetchPriority="high"
        decoding="sync"
        onError={(e) => {
          // Fallback if needed
          e.currentTarget.src = '/logo.jpg';
        }}
        className={`${sizeClasses[size]} w-auto max-w-[280px] sm:max-w-[360px] md:max-w-[440px] object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105`}
      />
    </div>
  );
};
