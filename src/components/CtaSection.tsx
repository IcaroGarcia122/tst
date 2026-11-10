import React from 'react';
import { MessageSquare, MapPin } from 'lucide-react';
import { ContactInfo } from '../data/officeData';

interface CtaSectionProps {
  contactInfo: ContactInfo;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ contactInfo }) => {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumberDigits}?text=${encodeURIComponent(
    'Olá! Gostaria de falar com a Advocacia Nicolau a respeito de uma consulta jurídica.'
  )}`;

  return (
    <section className="relative bg-[#1A1410] text-[#FAF8F4] overflow-hidden border-y border-[#B89554]/30">
      {/* Background container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Fountain pen photography crop */}
          <div className="lg:col-span-4 hidden sm:block">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-[#B89554]/30 h-28 sm:h-32">
              <img
                src="/src/assets/images/fountain_pen_crop.png"
                alt="Caneta tinteiro dourada e documentos jurídicos"
                className="w-full h-full object-cover filter contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1410]/70" />
            </div>
          </div>

          {/* Center Column: Title with vertical gold hairline */}
          <div className="lg:col-span-5 flex items-center gap-5 sm:pl-4 sm:border-l border-[#B89554]/40">
            <div className="flex flex-col justify-center">
              <h2
                className="text-xl sm:text-2xl lg:text-[1.65rem] text-[#FAF8F4] font-normal leading-[1.25] mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  textWrap: 'balance',
                }}
              >
                Conte com a experiência e a tradição<br />da Advocacia Nicolau.
              </h2>
              <p className="text-xs sm:text-sm text-[#FAF8F4]/75 font-light leading-snug">
                Estamos prontos para atendê-lo e encontrar a melhor solução para o seu caso.
              </p>
            </div>
          </div>

          {/* Right Column: Golden Button and Location */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#D6B779] hover:bg-[#B89554] text-[#17130F] font-semibold text-xs tracking-wider rounded-full transition-all duration-300 shadow-md group whitespace-nowrap cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#17130F]" />
              <span>Fale conosco pelo WhatsApp</span>
            </a>

            <div className="flex items-center gap-1.5 text-xs text-[#FAF8F4]/80">
              <MapPin className="w-3.5 h-3.5 text-[#D6B779]" />
              <span className="text-[11px] tracking-wider uppercase font-light">
                Guarapuava - PR
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
