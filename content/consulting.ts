export type ConsultingService = {
  slug: string;
  title: string;
  icon: "scale" | "people" | "shield" | "building" | "document" | "handshake";
  summary: string;
  description: string;
  deliverables: string[];
};

export const consultingServices: ConsultingService[] = [
  {
    slug: "consultoria-preventiva",
    title: "Consultoria Jurídica Preventiva",
    icon: "people",
    summary:
      "Acompanhamento contínuo para que decisões de negócio já nasçam juridicamente seguras.",
    description:
      "Atuamos como extensão do time interno, com canal direto para dúvidas do dia a dia e revisão prévia de decisões que envolvam risco jurídico, evitando que problemas evitáveis cheguem ao contencioso.",
    deliverables: [
      "Canal direto com sócios para consultas recorrentes",
      "Revisão prévia de decisões estratégicas",
      "Relatórios periódicos de exposição jurídica",
      "Treinamento de times internos",
    ],
  },
  {
    slug: "gestao-de-riscos",
    title: "Gestão de Riscos",
    icon: "document",
    summary:
      "Mapeamento e priorização das exposições jurídicas mais relevantes para o negócio.",
    description:
      "Realizamos diagnóstico completo dos riscos jurídicos da operação, contratuais, regulatórios, trabalhistas e tributários, com plano de ação priorizado por impacto e probabilidade.",
    deliverables: [
      "Diagnóstico de riscos jurídicos e regulatórios",
      "Matriz de priorização por impacto e probabilidade",
      "Plano de mitigação com prazos e responsáveis",
      "Acompanhamento periódico de indicadores",
    ],
  },
  {
    slug: "governanca-e-compliance",
    title: "Governança e Compliance",
    icon: "building",
    summary:
      "Estruturas de controle proporcionais ao estágio e à complexidade da empresa.",
    description:
      "Desenvolvemos políticas, códigos de conduta e canais de denúncia adequados à realidade da empresa, com foco em estruturas que funcionam na prática, não apenas em documentos.",
    deliverables: [
      "Código de conduta e políticas internas",
      "Estruturação de canal de denúncias",
      "Programas de integridade e treinamento",
      "Assessoria a comitês de compliance",
    ],
  },
  {
    slug: "due-diligence",
    title: "Due Diligence",
    icon: "shield",
    summary:
      "Diagnóstico jurídico completo para embasar decisões de investimento e aquisição.",
    description:
      "Conduzimos due diligence legal, societária, contratual, trabalhista e tributária para operações de M&A, investimento e parcerias estratégicas, com relatório executivo claro para tomada de decisão.",
    deliverables: [
      "Due diligence societária, contratual e trabalhista",
      "Due diligence tributária e regulatória",
      "Relatório executivo com riscos e recomendações",
      "Suporte à negociação de garantias contratuais",
    ],
  },
];
