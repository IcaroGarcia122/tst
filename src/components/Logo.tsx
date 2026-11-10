import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'gold';
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'gold',
  className = '',
  size = 'md',
}) => {
  const heightClasses = {
    sm: 'h-10',
    md: 'h-14 sm:h-16',
    lg: 'h-20 sm:h-24',
  }[size];

  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* Official template logo image */}
      <img
        src="/src/assets/images/logo_nicolau_transparent.png"
        alt="Advocacia Nicolau - Desde 1978"
        className={`${heightClasses} w-auto object-contain filter drop-shadow-sm`}
        onError={(e) => {
          // Fallback if image fails
          const target = e.currentTarget;
          target.style.display = 'none';
          if (target.nextElementSibling) {
            (target.nextElementSibling as HTMLElement).style.display = 'flex';
          }
        }}
      />

      {/* Styled vector typography fallback */}
      <div className="hidden flex-col items-center justify-center text-center">
        <span
          className="text-2xl font-serif text-[#D6B779] tracking-[0.2em] font-bold"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          AN
        </span>
        <span
          className="text-xs uppercase tracking-[0.28em] text-[#FAF8F4] font-medium"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          ADVOCACIA NICOLAU
        </span>
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#D6B779]">
          DESDE 1978
        </span>
      </div>
    </div>
  );
};
