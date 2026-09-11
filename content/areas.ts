export type Area = {
  slug: string;
  title: string;
  icon: "scale" | "people" | "shield" | "building" | "document" | "handshake";
  summary: string;
  description: string;
  topics: string[];
};

export const pillars: { title: string; icon: Area["icon"]; summary: string }[] = [
  {
    title: "Direito Empresarial",
    icon: "scale",
    summary: "Estrutura jurídica sólida para operar, crescer e negociar.",
  },
  {
    title: "Consultoria Jurídica",
    icon: "people",
    summary: "Orientação contínua para decisões de negócio mais seguras.",
  },
  {
    title: "Gestão de Riscos",
    icon: "document",
    summary: "Identificação e mitigação de exposições antes que se tornem passivos.",
  },
  {
    title: "Governança e Compliance",
    icon: "building",
    summary: "Estruturas de controle alinhadas às melhores práticas do mercado.",
  },
];

export const areas: Area[] = [
  {
    slug: "empresarial-societario",
    title: "Direito Empresarial e Societário",
    icon: "scale",
    summary:
      "Estruturação societária, governança e operações que sustentam o crescimento do negócio.",
    description:
      "Acompanhamos o ciclo de vida da empresa, da constituição à sucessão, com foco em estruturas societárias que protegem sócios e negócio. Atuamos em alterações contratuais, acordos de sócios, reorganizações societárias e assessoria recorrente a conselhos e diretorias.",
    topics: [
      "Constituição e reestruturação societária",
      "Acordos de sócios e acordos de acionistas",
      "Assessoria a conselhos de administração",
      "Sucessão empresarial e planejamento patrimonial",
    ],
  },
  {
    slug: "contratos",
    title: "Contratos e Negociações",
    icon: "document",
    summary:
      "Contratos redigidos para prevenir litígios, não apenas para formalizar acordos.",
    description:
      "Elaboramos e revisamos contratos comerciais, de fornecimento, distribuição, parceria e prestação de serviços com linguagem clara e cláusulas que antecipam cenários de risco. Também conduzimos negociações complexas ao lado do cliente.",
    topics: [
      "Contratos comerciais e de fornecimento",
      "Contratos de distribuição e representação",
      "Acordos de confidencialidade e não concorrência",
      "Negociação e mediação de conflitos contratuais",
    ],
  },
  {
    slug: "tributario",
    title: "Direito Tributário",
    icon: "shield",
    summary:
      "Planejamento tributário estratégico e defesa técnica em autuações fiscais.",
    description:
      "Analisamos a estrutura fiscal da operação para reduzir contingências e identificar oportunidades legítimas de eficiência tributária. Representamos o cliente em processos administrativos e judiciais perante os órgãos fazendários.",
    topics: [
      "Planejamento tributário",
      "Defesa em autuações e processos administrativos",
      "Recuperação de créditos tributários",
      "Due diligence fiscal em operações societárias",
    ],
  },
  {
    slug: "trabalhista-preventivo",
    title: "Direito Trabalhista Preventivo",
    icon: "people",
    summary:
      "Políticas internas e rotinas que reduzem passivo trabalhista antes que ele exista.",
    description:
      "Revisamos políticas de RH, contratos de trabalho e procedimentos internos para reduzir a exposição a litígios. Quando necessário, atuamos também na defesa em processos trabalhistas, sempre com leitura estratégica do negócio.",
    topics: [
      "Auditoria e revisão de políticas de RH",
      "Estruturação de contratos e regulamentos internos",
      "Defesa em reclamações trabalhistas",
      "Negociações coletivas",
    ],
  },
  {
    slug: "fusoes-aquisicoes",
    title: "Fusões e Aquisições",
    icon: "handshake",
    summary:
      "Assessoria jurídica completa em operações de M&A, da due diligence ao fechamento.",
    description:
      "Conduzimos due diligence, estruturação e negociação de operações de compra, venda e fusão de participações societárias, com coordenação entre as áreas jurídica, tributária e financeira do negócio.",
    topics: [
      "Due diligence legal",
      "Estruturação e negociação de operações societárias",
      "Contratos de compra e venda de participações",
      "Acordos de investimento",
    ],
  },
  {
    slug: "propriedade-intelectual",
    title: "Propriedade Intelectual",
    icon: "shield",
    summary:
      "Proteção de marcas, patentes e ativos intangíveis que sustentam a diferenciação do negócio.",
    description:
      "Cuidamos do registro e da defesa de marcas e demais ativos de propriedade intelectual, além de assessorar contratos de licenciamento, transferência de tecnologia e uso de imagem.",
    topics: [
      "Registro e defesa de marcas",
      "Contratos de licenciamento",
      "Transferência de tecnologia",
      "Combate à concorrência desleal",
    ],
  },
  {
    slug: "contencioso-estrategico",
    title: "Contencioso Estratégico",
    icon: "scale",
    summary:
      "Litígios conduzidos com visão de negócio, não apenas de processo.",
    description:
      "Representamos empresas em disputas cíveis e empresariais complexas, com avaliação constante de risco, custo e alternativas de solução, incluindo mediação e arbitragem quando fizer sentido para o cliente.",
    topics: [
      "Litígios cíveis e empresariais",
      "Arbitragem e mediação",
      "Recuperação de crédito",
      "Gestão de contencioso em massa",
    ],
  },
  {
    slug: "imobiliario-corporativo",
    title: "Direito Imobiliário Corporativo",
    icon: "building",
    summary:
      "Segurança jurídica para aquisição, locação e desenvolvimento de ativos imobiliários.",
    description:
      "Assessoramos operações imobiliárias corporativas, da análise de matrícula à negociação de contratos de locação, incorporação e financiamento imobiliário.",
    topics: [
      "Aquisição e venda de imóveis corporativos",
      "Contratos de locação comercial",
      "Incorporação e desenvolvimento imobiliário",
      "Due diligence imobiliária",
    ],
  },
];
