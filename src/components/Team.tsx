import React, { useState } from 'react';
import { Lawyer, lawyers } from '../data/officeData';
import { X, Calendar } from 'lucide-react';

interface TeamProps {
  onScheduleWithLawyer: (lawyerName: string) => void;
}

export const Team: React.FC<TeamProps> = ({ onScheduleWithLawyer }) => {
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null);

  // Template cards data
  const teamCards = [
    {
      id: 'miguel',
      name: 'Miguel Nicolau Junior',
      oab: 'OAB/PR 7.708',
      practice: 'Direito Criminal',
      description: 'Atuação em Direito Criminal, com foco na defesa dos direitos e garantias fundamentais.',
      photo: '/src/assets/images/lawyer_miguel_portrait.png',
      fullLawyer: lawyers[0],
    },
    {
      id: 'elizanne',
      name: 'Elizanne Marcondes Soares',
      oab: 'OAB/PR 108.487',
      practice: 'Direito de Família',
      description: 'Atuação em Direito de Família, buscando soluções equilibradas e humanizadas.',
      photo: '/src/assets/images/lawyer_elizanne_portrait.png',
      fullLawyer: lawyers[1],
    },
    {
      id: 'felipe',
      name: 'Felipe Colman Bahls',
      oab: 'OAB/PR 108.488',
      practice: 'Direito Civil',
      description: 'Atuação em Direito Civil, com foco na proteção de seus interesses.',
      photo: '/src/assets/images/lawyer_felipe_portrait.png',
      fullLawyer: lawyers[2],
    },
  ];

  return (
    <section id="equipe" className="py-20 lg:py-28 bg-[#17130F] text-[#FAF8F4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Header copy */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            {/* Kicker with Line */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#D6B779] font-medium"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                NOSSA EQUIPE
              </span>
              <span className="w-14 sm:w-16 h-[1px] bg-[#B89554]/70" />
            </div>

            {/* Title */}
            <h2
              className="text-3xl sm:text-4xl lg:text-[2.65rem] font-normal leading-[1.15] mb-5 text-[#FAF8F4]"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                textWrap: 'balance',
              }}
            >
              Profissionais<br />comprometidos<br />
              <span className="text-[#D6B779] italic font-normal">com a sua causa.</span>
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#FAF8F4]/75 font-light leading-relaxed max-w-sm">
              Contamos com uma equipe de advogados qualificados, prontos para oferecer um atendimento
              personalizado e soluções jurídicas eficazes.
            </p>
          </div>

          {/* Right Column: 3 Lawyer Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
              {teamCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => setSelectedLawyer(card.fullLawyer)}
                  className="bg-[#1C1714] border border-[#B89554]/40 hover:border-[#D6B779] rounded-xl overflow-hidden transition-all duration-300 flex flex-col text-center cursor-pointer group shadow-lg hover:shadow-[#B89554]/15"
                >
                  {/* Photo with subtle top-rounded corners */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#14100E] border-b border-[#B89554]/20">
                    <img
                      src={card.photo}
                      alt={card.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1714] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <h3
                        className="text-base sm:text-lg font-medium text-[#FAF8F4] group-hover:text-[#D6B779] transition-colors leading-tight mb-1"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {card.name}
                      </h3>

                      <p
                        className="text-[11px] uppercase tracking-wider text-[#D6B779] font-medium"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {card.oab}
                      </p>

                      {/* Small horizontal gold line divider */}
                      <div className="w-10 h-[1.5px] bg-[#B89554]/80 mx-auto my-3" />

                      <p className="text-[11px] sm:text-xs text-[#FAF8F4]/75 font-light leading-relaxed line-clamp-3">
                        {card.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-white/5">
                      <span className="text-[10px] uppercase tracking-wider text-[#D6B779]/80 group-hover:text-[#D6B779] font-medium">
                        Ver biografia completa →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Biography Modal */}
      {selectedLawyer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-[#1C1714] border border-[#B89554] p-6 sm:p-10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto text-[#FAF8F4]">
            <button
              onClick={() => setSelectedLawyer(null)}
              className="absolute top-4 right-4 p-2 text-[#FAF8F4]/70 hover:text-[#D6B779] transition-colors focus:outline-none"
              aria-label="Fechar biografia"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
              <div className="w-28 sm:w-32 aspect-square rounded-full border-2 border-[#B89554] overflow-hidden bg-[#17130F] shrink-0">
                <img
                  src={selectedLawyer.image}
                  alt={selectedLawyer.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-center sm:text-left">
                <span
                  className="text-xs uppercase tracking-[0.25em] text-[#D6B779] font-medium"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {selectedLawyer.oab}
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-serif text-[#FAF8F4] mt-1 mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {selectedLawyer.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#FAF8F4]/70 font-light">
                  {selectedLawyer.role} · Advocacia Nicolau
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#FAF8F4]/80 font-light leading-relaxed border-t border-[#B89554]/30 pt-6 mb-8">
              <p>{selectedLawyer.fullBio}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#B89554]/30">
              <span className="text-xs text-[#D6B779]">
                Atendimento presencial em Guarapuava ou por videoconferência.
              </span>

              <button
                onClick={() => {
                  const name = selectedLawyer.name;
                  setSelectedLawyer(null);
                  onScheduleWithLawyer(name);
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#B89554] text-[#17130F] font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-[#D6B779] transition-colors cursor-pointer"
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
