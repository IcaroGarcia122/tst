export interface Lawyer {
  id: string;
  name: string;
  oab: string;
  role: string;
  image: string;
  summary: string;
  fullBio: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'ShieldAlert' | 'Scale' | 'HeartHandshake';
  services: string[];
}

export interface Article {
  id: string;
  category: 'Direito Criminal' | 'Direito Civil' | 'Direito de Família';
  title: string;
  description: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  content: string[];
}

export interface ContactInfo {
  address: string;
  city: string;
  state: string;
  cep: string;
  phone: string;
  whatsapp: string;
  whatsappNumberDigits: string;
  email: string;
  workingHours: string;
  googleMapsUrl: string;
}

export const initialContactInfo: ContactInfo = {
  address: 'Rua XV de Novembro, 7840 - Centro',
  city: 'Guarapuava',
  state: 'Paraná',
  cep: '85010-000',
  phone: '(42) 3623-1978',
  whatsapp: '(42) 99876-1978',
  whatsappNumberDigits: '5542998761978',
  email: 'contato@advocacianicolau.adv.br',
  workingHours: 'Segunda a Sexta-feira: 08h30 às 12h00 e 13h30 às 18h00',
  googleMapsUrl: 'https://maps.google.com/maps?q=Guarapuava,+PR,+Brasil&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

export const lawyers: Lawyer[] = [
  {
    id: 'miguel-nicolau',
    name: 'Miguel Nicolau Junior',
    oab: 'OAB/PR 7.708',
    role: 'Sócio Fundador',
    image: '/src/assets/images/lawyer_miguel_nicolau_1794270160018.jpg',
    summary: 'Atuação consolidada há mais de quatro décadas, liderando estratégias de alta complexidade jurídica com sólida reputação e ética profissional.',
    fullBio: 'Com inscrição histórica na Ordem dos Advogados do Brasil sob o número OAB/PR 7.708, Dr. Miguel Nicolau Junior é o fundador da banca. Desde 1978, atua ativamente na defesa dos interesses de cidadãos e empresas no Paraná e em tribunais superiores. Sua trajetória de integridade, dedicação aos direitos fundamentais e liderança forense construiu a base sólida sobre a qual a Advocacia Nicolau se firmou como referência no estado.',
  },
  {
    id: 'elizanne-soares',
    name: 'Elizanne Marcondes Soares',
    oab: 'OAB/PR 108.487',
    role: 'Advogada Sócia',
    image: '/src/assets/images/lawyer_elizanne_soares_1794270161852.jpg',
    summary: 'Atuação técnica e diligente com ênfase na defesa preventiva e contenciosa, prezando pelo acolhimento humanizado e soluções ágeis.',
    fullBio: 'Dra. Elizanne Marcondes Soares (OAB/PR 108.487) integra a equipe com perfil dinâmico, rigor analítico e sensibilidade no tratamento das demandas. Dedica-se a casos estratégicos de Direito Civil e Família, aliando precisão processual ao constante aperfeiçoamento acadêmico para assegurar a máxima segurança jurídica aos representados pela banca.',
  },
  {
    id: 'felipe-bahls',
    name: 'Felipe Colman Bahls',
    oab: 'OAB/PR 108.488',
    role: 'Advogado Sócio',
    image: '/src/assets/images/lawyer_felipe_bahls_1794270162719.jpg',
    summary: 'Advocacia combativa e estratégica, com foco na garantia dos preceitos constitucionais e na defesa vigorosa dos direitos do cliente.',
    fullBio: 'Dr. Felipe Colman Bahls (OAB/PR 108.488) atua com expressiva presença em audiências, defesas processuais e recursos perante cortes estaduais e federais. Seu trabalho se destaca pela oratória apurada, estudo minucioso de provas e abordagem estratégica personalizada para cada fase da persecução processual.',
  },
];

export const practiceAreas: PracticeArea[] = [
  {
    id: 'criminal',
    title: 'DIREITO CRIMINAL',
    subtitle: 'Defesa vigorosa da liberdade e garantias individuais',
    description: 'Atuação na defesa dos direitos e garantias individuais em todas as fases da persecução penal.',
    iconName: 'ShieldAlert',
    services: [
      'Inquéritos policiais e investigações criminais',
      'Prisão em flagrante e audiência de custódia',
      'Liberdade provisória e revogação de prisão preventiva',
      'Habeas corpus',
      'Tribunal do Júri e crimes contra a vida',
      'Crimes previstos na Lei de Drogas',
      'Crimes patrimoniais e de trânsito',
      'Violência doméstica e crimes contra a dignidade sexual',
      'Recursos criminais e revisão criminal',
      'Execução penal e progressão de regime',
    ],
  },
  {
    id: 'civil',
    title: 'DIREITO CIVIL',
    subtitle: 'Proteção patrimonial, contratual e reparações',
    description: 'Atuação na defesa de interesses patrimoniais, contratuais e pessoais.',
    iconName: 'Scale',
    services: [
      'Ações indenizatórias por danos morais e materiais',
      'Responsabilidade civil',
      'Direito de vizinhança',
      'Direito imobiliário e possessório',
      'Elaboração, análise e rescisão de contratos',
      'Ações de cobrança e execuções',
      'Obrigações civis',
      'Conflitos envolvendo propriedade e posse',
      'Inventários e sucessões',
    ],
  },
  {
    id: 'familia',
    title: 'DIREITO DE FAMÍLIA',
    subtitle: 'Acolhimento humanizado e segurança para o patrimônio familiar',
    description: 'Atuação em questões familiares, respeitando a particularidade de cada situação.',
    iconName: 'HeartHandshake',
    services: [
      'Divórcios judiciais e extrajudiciais',
      'Guarda de filhos',
      'Regulamentação de convivência e visitas',
      'Pensão alimentícia',
      'Revisão, exoneração e execução de alimentos',
      'Reconhecimento e dissolução de união estável',
      'Partilha de bens',
      'Investigação e reconhecimento de paternidade',
      'Alienação parental',
    ],
  },
];

export const articles: Article[] = [
  {
    id: 'garantias-criminais',
    category: 'Direito Criminal',
    title: 'Audiência de Custódia e a Preservação das Garantias Constitucionais',
    description: 'Compreenda o papel essencial da defesa técnica nas primeiras 24 horas após a prisão e a avaliação da legalidade do ato.',
    date: '15 de Outubro de 2026',
    author: 'Advocacia Nicolau',
    readTime: '4 min de leitura',
    image: '/src/assets/images/hero_justice_themis_1794270159745.jpg',
    content: [
      'A audiência de custódia representa um dos maiores avanços do ordenamento processual penal brasileiro, consagrada por pactos internacionais de direitos humanos ratificados pelo país e positivada pela Lei 13.964/2019.',
      'O ato impõe que toda pessoa presa em flagrante seja apresentada à autoridade judicial no prazo máximo de 24 horas, assegurando o controle de legalidade da prisão e a verificação de eventuais abusos ou integridade física do custodiado.',
      'A presença de um advogado criminalista nesse primeiro contato é determinante para pleitear o relaxamento de prisões ilegais, a concessão de liberdade provisória com ou sem fiança e a aplicação de medidas cautelares diversas do encarceramento.',
      'Em nossa atuação de mais de quatro décadas em Guarapuava e região, testemunhamos cotidianamente que a celeridade e o conhecimento técnico das nulidades processuais resguardam o bem mais precioso: a liberdade sob o devido processo legal.',
    ],
  },
  {
    id: 'contratos-imobiliarios',
    category: 'Direito Civil',
    title: 'Segurança Jurídica na Aquisição de Imóveis e Redação Contratual',
    description: 'Aspectos preventivos na due diligence imobiliária para mitigar riscos de evicção, fraudes e disputas possessórias.',
    date: '28 de Setembro de 2026',
    author: 'Advocacia Nicolau',
    readTime: '5 min de leitura',
    image: '/src/assets/images/legal_desk_calltoaction_1794270162390.jpg',
    content: [
      'A celebração de contratos que envolvem transmissão de propriedade ou posse de bens imóveis exige rigor técnico absoluto. Cláusulas genéricas ou minutas desprovidas de estudo prévio abrem espaço para litígios onerosos.',
      'A análise de certidões cíveis, criminais, trabalhistas e fiscais em nome dos transmitentes (due diligence imobiliária) é imprescindível para atestar a boa-fé do adquirente e repelir riscos de fraude contra credores ou execução.',
      'Além disso, a adequada caracterização das arras, cláusulas penais compensatórias, prazos resolutivos e previsão expressa de responsabilidade por vícios ocultos garantem o equilíbrio financeiro do negócio.',
      'A atuação consultiva e preventiva de um escritório com vivência forense resguarda o investimento e afasta litígios que poderiam perdurar por anos no Judiciário.',
    ],
  },
  {
    id: 'planejamento-sucessorio',
    category: 'Direito de Família',
    title: 'Planejamento Sucessório e Partilha: Preservação do Patrimônio e Harmonia Familiar',
    description: 'Como a estruturação jurídica antecipada evita desgastes emocionais e minimiza a carga tributária na sucessão de bens.',
    date: '10 de Setembro de 2026',
    author: 'Advocacia Nicolau',
    readTime: '6 min de leitura',
    image: '/src/assets/images/office_facade_nicolau_1794270160258.jpg',
    content: [
      'A sucessão hereditária é um dos momentos mais sensíveis na trajetória de qualquer núcleo familiar e empresarial. Quando não planejada, pode desencadear conflitos duradouros e a dilapidação do patrimônio acumulado ao longo de gerações.',
      'O planejamento sucessório viabiliza instrumentos eficazes como testamentos públicos, doações com reserva de usufruto, cláusulas de incomunicabilidade e inalienabilidade, bem como a constituição de holdings patrimoniais.',
      'Na esfera do Direito de Família e Sucessões, nosso compromisso primordial é conciliar a segurança patrimonial com a preservação dos laços afetivos, privilegiando acordos e soluções personalizadas que respeitem a vontade das partes.',
      'Um acompanhamento discreto, ético e empático é a chave para transformar um processo potencialmente traumático em uma transição pacífica e juridicamente blindada.',
    ],
  },
];
