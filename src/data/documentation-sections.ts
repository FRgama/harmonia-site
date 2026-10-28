export type SectionStatus = "Coberta" | "Parcial" | "Pendente";

export type DocumentSection = {
  number: string;
  title: string;
  status: SectionStatus;
  page: string;
};

export type DocumentSectionGroup = {
  number: string;
  title: string;
  page: string;
  sections: DocumentSection[];
};

export function getInitialSectionStatus(number: string): SectionStatus {
  if (number === "1.1") return "Coberta";
  if (number === "1.2") return "Parcial";
  if (number.startsWith("3.")) {
    return ["3.1.3", "3.2.2", "3.2.3"].includes(number) ? "Pendente" : "Parcial";
  }
  if (number.startsWith("4.")) return "Parcial";
  if (number === "5.2" || number === "5.3") return "Parcial";
  return "Pendente";
}

export const documentSectionGroups: DocumentSectionGroup[] = [
  {
    number: "1",
    title: "Introdução",
    page: "/#parte-problema",
    sections: [
      { number: "1.1", title: "Problema atacado e solução proposta", status: "Coberta", page: "/#parte-problema" },
      { number: "1.2", title: "Justificativa de como a solução pretende resolver", status: "Coberta", page: "/#parte-problema" },
    ],
  },
  {
    number: "2",
    title: "Personas do projeto",
    page: "/#personas",
    sections: [
      { number: "2.1", title: "Beatriz Andrade Ferreira — Hard User", status: "Coberta", page: "/#personas" },
      { number: "2.2", title: "Thiago Mendes Costa — Casual User", status: "Coberta", page: "/#personas" },
      { number: "2.3", title: "Rafaela Souza Lima — Influenciadora de Moda", status: "Coberta", page: "/#personas" },
    ],
  },
  {
    number: "3",
    title: "Funcionalidades (MVP)",
    page: "/#tema-experiencia",
    sections: [
      { number: "3.1", title: "Onboarding, perfil de estilo e digitalização do acervo", status: "Coberta", page: "/#onboarding" },
      { number: "3.1.1", title: "Perfil morfológico e teste assistido de colorimetria", status: "Coberta", page: "/#onboarding" },
      { number: "3.1.2", title: "Digitalização por segmentação e remoção de fundo", status: "Coberta", page: "/#onboarding" },
      { number: "3.1.3", title: "Extração de atributos e catalogação taxonômica", status: "Coberta", page: "/#onboarding" },
      { number: "3.2", title: "Dashboards e inventário virtual", status: "Coberta", page: "/#inventario" },
      { number: "3.2.1", title: "Organização dinâmica e filtros avançados", status: "Coberta", page: "/#inventario" },
      { number: "3.2.2", title: "Dashboard analítico de rotação do acervo", status: "Coberta", page: "/#inventario" },
      { number: "3.2.3", title: "Gestão e edição manual de metadados", status: "Coberta", page: "/#inventario" },
      { number: "3.3", title: "Motor de cálculo e IA de combinação estilística", status: "Coberta", page: "/#combinacoes" },
      { number: "3.3.1", title: "Variáveis de contexto: clima e ocasião", status: "Coberta", page: "/#combinacoes" },
      { number: "3.3.2", title: "Processamento do Índice de Harmonia Estética", status: "Coberta", page: "/#ihe" },
      { number: "3.3.3", title: "Recomendações e retroalimentação", status: "Coberta", page: "/#combinacoes" },
      { number: "3.4", title: "Paridade de peças e provador em realidade aumentada", status: "Coberta", page: "/#provador" },
      { number: "3.4.1", title: "Captura e análise de similaridade no ponto de venda", status: "Coberta", page: "/#provador" },
      { number: "3.4.2", title: "Ranqueamento de combinações viáveis", status: "Coberta", page: "/#provador" },
      { number: "3.4.3", title: "Simulação de caimento em realidade aumentada", status: "Coberta", page: "/#provador" },
      { number: "3.5", title: "Feed social comunitário", status: "Coberta", page: "/#modulo-comunidade" },
      { number: "3.5.1", title: "Criação e compartilhamento de looks", status: "Coberta", page: "/#modulo-comunidade" },
      { number: "3.5.2", title: "Engajamento e curadoria de inspirações", status: "Coberta", page: "/#modulo-comunidade" },
      { number: "3.5.3", title: "Busca direcionada e privacidade", status: "Coberta", page: "/#modulo-comunidade" },
      { number: "3.6", title: "Afiliação com e-commerces parceiros", status: "Coberta", page: "/#afiliacao" },
      { number: "3.6.1", title: "Mapeamento analítico de lacunas", status: "Coberta", page: "/#afiliacao" },
      { number: "3.6.2", title: "Sugestão contextual sincronizada", status: "Coberta", page: "/#afiliacao" },
      { number: "3.6.3", title: "Redirecionamento e rastreamento de afiliação", status: "Coberta", page: "/#afiliacao" },
    ],
  },
  {
    number: "4",
    title: "Levantamento de requisitos (MVP)",
    page: "/#tema-requisitos",
    sections: [
      { number: "4.1", title: "Requisitos funcionais", status: "Coberta", page: "/#funcionais" },
      { number: "4.2", title: "Requisitos não funcionais", status: "Coberta", page: "/#nao-funcionais" },
      { number: "4.3", title: "Regras de negócio", status: "Coberta", page: "/#regras" },
    ],
  },
  {
    number: "5",
    title: "Características técnicas e arquitetura da solução (MVP)",
    page: "/#tema-tecnologia",
    sections: [
      { number: "5.1", title: "Arquitetura do sistema", status: "Coberta", page: "/#arquitetura" },
      { number: "5.1.1", title: "Visualização", status: "Coberta", page: "/#arquitetura" },
      { number: "5.1.2", title: "Lógica do sistema", status: "Coberta", page: "/#arquitetura" },
      { number: "5.1.3", title: "Armazenamento", status: "Coberta", page: "/#arquitetura" },
      { number: "5.2", title: "Tecnologias utilizadas", status: "Coberta", page: "/#tecnologias" },
      { number: "5.3", title: "Motor de cálculo do Índice de Harmonia Estética", status: "Coberta", page: "/#ihe" },
    ],
  },
  {
    number: "6",
    title: "Estimativa de custo de desenvolvimento (MVP)",
    page: "/#tema-tecnologia",
    sections: [
      { number: "1", title: "Premissas", status: "Coberta", page: "/#premissas" },
      { number: "2", title: "Cenário A: equipe contratada e distribuição por módulo", status: "Coberta", page: "/#cenario-a" },
      { number: "3", title: "Infraestrutura e demais custos", status: "Coberta", page: "/#outros-custos" },
      { number: "4", title: "Consolidado do Cenário A", status: "Coberta", page: "/#consolidado" },
      { number: "5", title: "Cenário B: realidade do TCC", status: "Coberta", page: "/#cenario-b" },
      { number: "6", title: "Cronograma sugerido", status: "Coberta", page: "/#cronograma" },
      { number: "7", title: "Custo operacional e ponto de equilíbrio", status: "Coberta", page: "/#operacao" },
      { number: "8", title: "Riscos e como reduzir o custo", status: "Coberta", page: "/#riscos" },
      { number: "9", title: "Próximos passos", status: "Coberta", page: "/#proximos-passos" },
    ],
  },
  {
    number: "7",
    title: "Referências",
    page: "/documentacao#referencias",
    sections: [
      { number: "1", title: "Associação Brasileira do Varejo Têxtil (ABVTEX, 2025)", status: "Coberta", page: "/documentacao#referencias" },
      { number: "2", title: "Lei Geral de Proteção de Dados — Lei nº 13.709/2018", status: "Coberta", page: "/documentacao#referencias" },
      { number: "3", title: "Comissão Internacional de Iluminação — CIE L*a*b*", status: "Coberta", page: "/documentacao#referencias" },
    ],
  },
];

export function createDocumentationMarkdown() {
  const sections = documentSectionGroups.map((group) => {
    const heading = `## ${group.number}. ${group.title}`;
    const entries = group.sections.map((section) => {
      const checkbox = section.status === "Coberta" ? "x" : " ";
      const previousStatus = getInitialSectionStatus(section.number).toLowerCase();
      return `- [${checkbox}] **${section.number} ${section.title}** — cobertura atual: ${section.status.toLowerCase()}; avaliação inicial: ${previousStatus}. [Abrir](${section.page})`;
    });
    return [heading, ...entries].join("\n");
  });

  return [
    "# HarmonIA — mapa de cobertura documental",
    "",
    "> Este mapa compara as seções do documento do produto com o conteúdo deste site institucional. “Coberta” significa que a seção está descrita no site; não significa que a funcionalidade correspondente já esteja implementada no aplicativo.",
    "",
    ...sections.flatMap((section) => [section, ""]),
    "## Observações editoriais",
    "",
    "- O sumário do PDF apresenta a seção de referências com numeração inconsistente; este mapa usa a ordem do corpo do documento.",
    "- A arquitetura descreve Flutter/Dart, enquanto as premissas de custos mencionam React Native/TypeScript. Essa decisão precisa ser consolidada antes da implementação do aplicativo.",
    "- O PDF não apresenta RF17: a sequência passa de RF16 para RF18. A lacuna foi mantida sem inventar requisito.",
    "- O cenário enxuto e algumas estimativas do documento são aproximados; consulte a página de investimento para os valores e ressalvas.",
    "",
    "## Referências",
    "",
    "- Associação Brasileira do Varejo Têxtil (ABVTEX, 2025), contexto de mercado e subutilização de roupas.",
    "- Lei nº 13.709/2018, Lei Geral de Proteção de Dados Pessoais (LGPD).",
    "- Comissão Internacional de Iluminação (CIE), espaço de cor perceptualmente uniforme L*a*b*.",
    "",
  ].join("\n");
}
