import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

export const About: React.FC = () => {
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  return (
    <section id="sobre" className="relative py-20 lg:py-28 bg-[#FAF7F2] text-[#17130F] overflow-hidden">
      {/* Background Watermark of the Logo on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none opacity-[0.07] select-none flex items-center justify-end overflow-hidden">
        <img
          src="/src/assets/images/logo_nicolau_transparent.png"
          alt=""
          className="w-[36rem] h-auto object-contain translate-x-1/4 filter brightness-0 sepia hue-rotate-15"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Office Building Facade Image */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-[#B89554]/30 bg-[#282019]">
              <img
                src="/src/assets/images/facade_template.png"
                alt="Sede da Advocacia Nicolau com iluminação arquitetônica e fachada institucional"
                className="w-full h-auto object-cover filter contrast-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Institutional Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Kicker with Line */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#8C6F36] font-semibold"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                SOBRE O ESCRITÓRIO
              </span>
              <span className="w-16 sm:w-20 h-[1px] bg-[#B89554]/70" />
            </div>

            {/* Title */}
            <h2
              className="text-3xl sm:text-4xl lg:text-[2.75rem] text-[#17130F] font-normal leading-[1.18] mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                textWrap: 'balance',
              }}
            >
              Uma trajetória de<br />mais de quatro décadas
            </h2>

            {/* Paragraphs from exact template */}
            <div className="space-y-4 text-sm sm:text-base text-[#282019]/85 font-light leading-relaxed mb-8">
              <p>
                O Escritório de Advocacia Nicolau foi fundado em 1978, na cidade de Guarapuava,
                Paraná, e possui uma trajetória consolidada na prestação de serviços jurídicos,
                pautada pela seriedade, ética, comprometimento e dedicação à defesa dos interesses de
                seus clientes.
              </p>
              <p>
                Nossa proposta é aliar a tradição de um escritório com décadas de história a uma
                atuação jurídica atualizada, técnica e estratégica.
              </p>
            </div>

            {/* Pill CTA Button */}
            <div>
              <button
                onClick={() => setIsHistoryModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#B89554] text-[#17130F] text-xs font-medium tracking-wider hover:bg-[#B89554] hover:text-[#FAF8F4] transition-all duration-300 cursor-pointer group shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89554]"
              >
                <span>Saiba mais sobre nossa história</span>
                <ArrowRight className="w-4 h-4 text-[#8C6F36] group-hover:text-[#FAF8F4] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* History Details Modal */}
      {isHistoryModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-[#FAF7F2] text-[#17130F] border border-[#B89554] p-6 sm:p-10 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsHistoryModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#17130F]/70 hover:text-[#17130F] focus:outline-none"
              aria-label="Fechar história"
            >
              <X className="w-5 h-5" />
            </button>

            <span
              className="text-xs uppercase tracking-[0.25em] text-[#8C6F36] font-semibold"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              DESDE 1978 · GUARAPUAVA/PR
            </span>

            <h3
              className="text-2xl sm:text-3xl font-serif text-[#17130F] mt-2 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Mais de 4 Décadas de Tradição e Excelência
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[#282019]/85 font-light leading-relaxed border-t border-[#B89554]/30 pt-6">
              <p>
                Fundado pelo Dr. Miguel Nicolau Junior em 1978, o escritório iniciou suas atividades
                em uma época de grandes transformações sociojurídicas no Paraná. Desde o início, a
                banca se pautou pela atuação combativa na advocacia criminal e na proteção dos direitos
                civis e das famílias da região centro-sul paranaense.
              </p>
              <p>
                Ao longo de sua história, o escritório construiu sua identidade profissional com base
                na atuação jurídica responsável, no atendimento personalizado e no acompanhamento
                cuidadoso de cada demanda.
              </p>
              <p>
                Hoje, com uma equipe renovada e multidisciplinar, combinamos o legado de quase meio
                século de tradição e ética forense com as mais modernas estratégias processuais e
                tecnologia jurídica, assegurando defesa técnica rigorosa e personalizada.
              </p>
            </div>

            <div className="pt-6 border-t border-[#B89554]/25 flex justify-end mt-6">
              <button
                onClick={() => setIsHistoryModalOpen(false)}
                className="px-6 py-2.5 bg-[#17130F] text-[#FAF8F4] text-xs uppercase tracking-widest rounded-full font-medium hover:bg-[#B89554] hover:text-[#17130F] transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
