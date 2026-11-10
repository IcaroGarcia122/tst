import React from 'react';
import { Logo } from './Logo';
import { ContactInfo } from '../data/officeData';
import { MessageSquare, Instagram, MapPin } from 'lucide-react';

interface FooterProps {
  contactInfo: ContactInfo;
  onNavigate: (sectionId: string) => void;
  onOpenPrivacy: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  contactInfo,
  onNavigate,
  onOpenPrivacy,
  onOpenContact,
}) => {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumberDigits}?text=${encodeURIComponent(
    'Olá! Entrei em contato através do site da Advocacia Nicolau.'
  )}`;

  const navLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'O Escritório' },
    { id: 'equipe', label: 'Nossa Equipe' },
    { id: 'areas', label: 'Áreas de Atuação' },
    { id: 'conteudo', label: 'Conteúdo' },
    { id: 'contato', label: 'Contato' },
  ];

  return (
    <footer className="bg-[#100D0B] text-[#FAF8F4] border-t border-[#B89554]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Main Footer Row matching template */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 pb-6">
          {/* Zone 1: Logo */}
          <div className="shrink-0">
            <button
              onClick={() => onNavigate('inicio')}
              className="cursor-pointer focus:outline-none"
            >
              <Logo variant="gold" size="md" />
            </button>
          </div>

          {/* Zone 2: Navigation Links separated by vertical lines */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 text-xs tracking-wider font-light text-[#FAF8F4]/80 px-4 py-2 border-t md:border-t-0 md:border-l lg:border-r border-[#B89554]/30">
            {navLinks.map((link, idx) => (
              <React.Fragment key={link.id}>
                <button
                  onClick={() => onNavigate(link.id)}
                  className="hover:text-[#D6B779] transition-colors cursor-pointer py-1"
                >
                  {link.label}
                </button>
                {idx < navLinks.length - 1 && (
                  <span className="text-[#B89554]/40 select-none" aria-hidden="true">
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Zone 3: Social & Location Icons */}
          <div className="flex items-center gap-4 text-[#D6B779]">
            <button
              onClick={onOpenContact}
              title="Ver endereço e localização"
              className="p-2 hover:text-[#FAF8F4] hover:bg-[#B89554]/20 rounded-full transition-colors cursor-pointer"
              aria-label="Localização do escritório"
            >
              <MapPin className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Falar no WhatsApp"
              className="p-2 hover:text-[#FAF8F4] hover:bg-[#B89554]/20 rounded-full transition-colors cursor-pointer"
              aria-label="WhatsApp da Advocacia Nicolau"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram Oficial"
              className="p-2 hover:text-[#FAF8F4] hover:bg-[#B89554]/20 rounded-full transition-colors cursor-pointer"
              aria-label="Instagram da Advocacia Nicolau"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Sub-footer exact template line */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#D6B779] font-light text-center">
          <div className="flex items-center gap-2 mx-auto">
            <span className="font-medium text-[#D6B779]">Advocacia Nicolau</span>
            <span className="text-[#B89554]/50">•</span>
            <span className="text-[#FAF8F4]/75">Desde 1978, ao seu lado.</span>
          </div>

          <button
            onClick={onOpenPrivacy}
            className="text-[11px] text-[#FAF8F4]/50 hover:text-[#D6B779] underline underline-offset-2 transition-colors cursor-pointer"
          >
            Aviso Institucional & Privacidade
          </button>
        </div>
      </div>
    </footer>
  );
};
