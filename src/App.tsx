import React, { useState, useEffect } from 'react';
import { initialContactInfo, ContactInfo } from './data/officeData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Team } from './components/Team';
import { PracticeAreas } from './components/PracticeAreas';
import { CtaSection } from './components/CtaSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PrivacyModal } from './components/PrivacyModal';

export default function App() {
  const [contactInfo, setContactInfo] = useState<ContactInfo>(() => {
    const saved = localStorage.getItem('nicolau_contact_info');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialContactInfo;
      }
    }
    return initialContactInfo;
  });

  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [preselectedArea, setPreselectedArea] = useState<string>('');
  const [preselectedLawyer, setPreselectedLawyer] = useState<string>('');
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'equipe', 'areas', 'conteudo', 'contato'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUpdateContactInfo = (updated: ContactInfo) => {
    setContactInfo(updated);
    localStorage.setItem('nicolau_contact_info', JSON.stringify(updated));
  };

  const handleScheduleWithLawyer = (lawyerName: string) => {
    setPreselectedLawyer(lawyerName);
    scrollToSection('contato');
  };

  const handleSelectAreaForContact = (areaTitle: string) => {
    setPreselectedArea(areaTitle);
    scrollToSection('contato');
  };

  return (
    <div className="min-h-screen bg-[#17130F] text-[#FAF8F4] flex flex-col font-sans selection:bg-[#B89554]/30 selection:text-[#FAF8F4]">
      {/* 1. Header / Navigation */}
      <Header
        contactInfo={contactInfo}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Sections matching the Template */}
      <main className="flex-1">
        {/* 2. Hero with background image 4a48d6bf-68bb-412f-a222-e15eb6adb959.png */}
        <Hero
          onExploreClick={() => scrollToSection('sobre')}
          onContactClick={() => scrollToSection('contato')}
        />

        {/* 3. Sobre o Escritório */}
        <About />

        {/* 4. Nossa Equipe */}
        <Team onScheduleWithLawyer={handleScheduleWithLawyer} />

        {/* 5. Áreas de Atuação */}
        <PracticeAreas onSelectAreaForContact={handleSelectAreaForContact} />

        {/* 6. Chamada para Contato (CTA Banner) */}
        <CtaSection contactInfo={contactInfo} />

        {/* 7. Conteúdos Jurídicos (Artigos) */}
        <ArticlesSection />

        {/* 8. Contato e Localização */}
        <ContactSection
          contactInfo={contactInfo}
          onUpdateContactInfo={handleUpdateContactInfo}
          preselectedArea={preselectedArea}
          preselectedLawyer={preselectedLawyer}
        />
      </main>

      {/* 9. Footer matching template */}
      <Footer
        contactInfo={contactInfo}
        onNavigate={scrollToSection}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenContact={() => scrollToSection('contato')}
      />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp contactInfo={contactInfo} />

      {/* Privacy and Institutional Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}
