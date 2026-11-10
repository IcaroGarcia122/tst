import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center bg-[#17130F] pt-28 pb-16 lg:py-0 overflow-hidden"
    >
      {/* Background Image requested by user: src/assets/images/4a48d6bf-68bb-412f-a222-e15eb6adb959.png */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/4a48d6bf-68bb-412f-a222-e15eb6adb959.png"
          alt="Deusa Têmis e Biblioteca Jurídica - Advocacia Nicolau"
          className="w-full h-full object-cover object-right lg:object-center filter brightness-[0.95] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />

        {/* Gradient scrim for maximum legibility of left-hand text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17130F] via-[#17130F]/80 to-transparent lg:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17130F]/90 via-transparent to-[#17130F]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-16 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Kicker Tag with Line */}
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#D6B779] font-medium"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                ADVOCACIA NICOLAU
              </span>
              <span className="w-16 sm:w-24 h-[1px] bg-[#B89554]/70" />
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F4] font-normal leading-[1.12] mb-6 tracking-tight max-w-2xl"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                textWrap: 'balance',
              }}
            >
              Tradição, experiência e compromisso com{' '}
              <span className="text-[#D6B779] italic font-normal">a sua jornada.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#FAF8F4]/80 leading-relaxed font-light max-w-xl mb-10">
              Desde 1978, construindo uma história de credibilidade e dedicação na defesa dos seus
              direitos.
            </p>

            {/* Pill Button (exact rounded-full border border-gold) */}
            <div>
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-3 px-7 py-3 rounded-full border border-[#B89554] text-[#FAF8F4] text-xs font-medium tracking-wider hover:bg-[#B89554]/20 hover:border-[#D6B779] hover:text-[#D6B779] transition-all duration-300 cursor-pointer group shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B779]"
              >
                <span>Conheça nosso escritório</span>
                <ArrowRight className="w-4 h-4 text-[#D6B779] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Floating Badge (DESDE 1978 EM GUARAPUAVA/PR) */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end items-end pt-8 lg:pt-48">
            <div className="flex items-center gap-4 pl-4 border-l border-[#B89554]/70 bg-[#17130F]/40 backdrop-blur-sm py-2 pr-4">
              <div className="flex flex-col">
                <span
                  className="text-[10px] tracking-[0.25em] uppercase text-[#D6B779] font-medium"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  DESDE
                </span>
                <span
                  className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF8F4] leading-none my-1 tracking-wider"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  1978
                </span>
                <span
                  className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#FAF8F4]/85 font-medium"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  EM GUARAPUAVA/PR
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
