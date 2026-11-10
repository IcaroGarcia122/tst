import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { MessageSquare, Menu, X, Phone } from 'lucide-react';
import { ContactInfo } from '../data/officeData';

interface HeaderProps {
  contactInfo: ContactInfo;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  contactInfo,
  activeSection,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'O Escritório' },
    { id: 'equipe', label: 'Nossa Equipe' },
    { id: 'areas', label: 'Áreas de Atuação' },
    { id: 'conteudo', label: 'Conteúdo' },
    { id: 'contato', label: 'Contato' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumberDigits}?text=${encodeURIComponent(
    'Olá! Gostaria de agendar uma consulta com a equipe da Advocacia Nicolau.'
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#17130F]/95 backdrop-blur-md border-b border-[#B89554]/25 py-2.5 shadow-xl'
          : 'bg-gradient-to-b from-[#17130F]/95 via-[#17130F]/60 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Logo */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B89554] cursor-pointer"
            aria-label="Advocacia Nicolau - Voltar ao início"
          >
            <Logo variant="gold" size="md" />
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-[0.14em] font-light">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#FAF8F4] font-medium'
                      : 'text-[#FAF8F4]/80 hover:text-[#D6B779]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#FAF8F4]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Pill CTA Button (Desktop) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-medium tracking-wider border border-[#B89554] text-[#D6B779] hover:bg-[#B89554] hover:text-[#17130F] transition-all duration-300 rounded-full shadow-sm group focus-visible:ring-2 focus-visible:ring-[#D6B779]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#D6B779] group-hover:text-[#17130F] transition-colors" />
              <span>Fale Conosco</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp"
              className="sm:hidden p-2 text-[#D6B779] border border-[#B89554]/50 rounded-full hover:bg-[#B89554]/20 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#FAF8F4] border border-[#B89554]/40 rounded-lg hover:text-[#D6B779] hover:border-[#D6B779] transition-colors focus-visible:outline-none"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#17130F]/98 backdrop-blur-xl border-b border-[#B89554]/30 px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-sm tracking-wider text-[#FAF8F4]/90 hover:text-[#D6B779] py-2 border-b border-white/5 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold tracking-wider uppercase border border-[#B89554] text-[#D6B779] hover:bg-[#B89554] hover:text-[#17130F] rounded-full transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Fale Conosco pelo WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
