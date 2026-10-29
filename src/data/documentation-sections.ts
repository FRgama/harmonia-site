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
    number: "0",
    title: "Elementos Pré-Textuais (Capa e Folha de Rosto — Ato 08)",
    page: "/#autoria-fecap",
    sections: [
      { number: "0.1", title: "Instituição FECAP e Curso de Ciência da Computação", status: "Coberta", page: "/#autoria-fecap" },
      { number: "0.2", title: "Autores e Orientador (Prof. Leonardo Fabris Lugoboni)", status: "Coberta", page: "/#autoria-fecap" },
    ],
  },
  {
    number: "1",
    title: "Introdução (Ato 02 — Visão & ESG)",
    page: "/#tema-visao",
    sections: [
      { number: "1.1", title: "Problema atacado (As-Is: ABVTEX 2025 e WhatsApp no provador) e solução proposta (To-Be)", status: "Coberta", page: "/#parte-problema" },
      { number: "1.2", title: "Justificativa (patrimônio têxtil relacional/vetorial, Custo por Uso, ODS 12 e varejo)", status: "Coberta", page: "/#solucao" },
    ],
  },
  {
    number: "2",
    title: "Personas do projeto (Ato 03 — Personas)",
    page: "/#tema-pessoas",
    sections: [
      { number: "2.1", title: "Beatriz Andrade Ferreira — Hard User (Entusiasta de Moda)", status: "Coberta", page: "/#persona-beatriz" },
      { number: "2.2", title: "Thiago Mendes Costa — Casual User (Usuário Pragmático)", status: "Coberta", page: "/#persona-thiago" },
      { number: "2.3", title: "Rafaela Souza Lima — Influenciadora de Moda (Criadora e Consultora)", status: "Coberta", page: "/#persona-rafaela" },
    ],
  },
  {
    number: "3",
    title: "Funcionalidades do MVP (Ato 05 — 6 Módulos Unificados)",
    page: "/#tema-experiencia",
    sections: [
      { number: "3.1", title: "Onboarding, perfil de estilo e digitalização do acervo", status: "Coberta", page: "/#onboarding" },
      { number: "3.1.1", title: "Perfil morfológico (5 biótipos) e teste assistido (12 cartelas sazonais)", status: "Coberta", page: "/#onboarding" },
      { number: "3.1.2", title: "Digitalização ágil por segmentação e remoção de fundo em nuvem", status: "Coberta", page: "/#onboarding" },
      { number: "3.1.3", title: "Extração de atributos (CIE L*a*b*) e catalogação taxonômica", status: "Coberta", page: "/#onboarding" },
      { number: "3.2", title: "Dashboards e inventário virtual", status: "Coberta", page: "/#inventario" },
      { number: "3.2.1", title: "Organização dinâmica em grade e filtros multicritérios", status: "Coberta", page: "/#inventario" },
      { number: "3.2.2", title: "Dashboard analítico de rotação (30/60/90 dias) e Custo por Uso", status: "Coberta", page: "/#inventario" },
      { number: "3.2.3", title: "Gestão manual de metadados e cápsulas temáticas", status: "Coberta", page: "/#inventario" },
      { number: "3.3", title: "Motor de cálculo e IA de combinação estilística", status: "Coberta", page: "/#combinacoes" },
      { number: "3.3.1", title: "Coleta de variáveis de contexto: telemetria climática e ocasião", status: "Coberta", page: "/#combinacoes" },
      { number: "3.3.2", title: "Processamento do Índice de Harmonia Estética (IHE)", status: "Coberta", page: "/#combinacoes" },
      { number: "3.3.3", title: "Interface de recomendação em cards e retroalimentação contínua", status: "Coberta", page: "/#combinacoes" },
      { number: "3.4", title: "Paridade de peças em provador e Realidade Aumentada (AR)", status: "Coberta", page: "/#provador" },
      { number: "3.4.1", title: "Captura e análise de similaridade no ponto de venda", status: "Coberta", page: "/#provador" },
      { number: "3.4.2", title: "Ranqueamento de combinações viáveis com o acervo residencial", status: "Coberta", page: "/#provador" },
      { number: "3.4.3", title: "Simulação de caimento em AR (“espelho inteligente”)", status: "Coberta", page: "/#provador" },
      { number: "3.5", title: "Feed social comunitário", status: "Coberta", page: "/#modulo-comunidade" },
      { number: "3.5.1", title: "Criação de conteúdo e compartilhamento de looks com tags", status: "Coberta", page: "/#modulo-comunidade" },
      { number: "3.5.2", title: "Engajamento e curadoria em moodboards privados", status: "Coberta", page: "/#modulo-comunidade" },
      { number: "3.5.3", title: "Busca por mesmo biótipo/cartela e chave Público vs. Privado", status: "Coberta", page: "/#modulo-comunidade" },
      { number: "3.6", title: "Afiliação com e-commerces parceiros (C&A e Lojas Renner)", status: "Coberta", page: "/#afiliacao" },
      { number: "3.6.1", title: "Mapeamento analítico de lacunas (Gap Analysis)", status: "Coberta", page: "/#afiliacao" },
      { number: "3.6.2", title: "Sugestão contextual sincronizada via API de estoque", status: "Coberta", page: "/#afiliacao" },
      { number: "3.6.3", title: "Redirecionamento e rastreamento via link parametrizado (UTM)", status: "Coberta", page: "/#afiliacao" },
    ],
  },
  {
    number: "4",
    title: "Levantamento de requisitos do MVP (Ato 07 — Engenharia de Software)",
    page: "/#tema-requisitos",
    sections: [
      { number: "4.1", title: "Quadro 1 — 17 Requisitos Funcionais (RF01 a RF16 e RF18)", status: "Coberta", page: "/#funcionais" },
      { number: "4.2", title: "Quadro 2 — 6 Requisitos Não Funcionais (RNF01 a RNF06)", status: "Coberta", page: "/#nao-funcionais" },
      { number: "4.3", title: "Quadro 3 — 5 Regras de Negócio (RN01 a RN05)", status: "Coberta", page: "/#regras" },
    ],
  },
  {
    number: "5",
    title: "Características técnicas e arquitetura (Ato 06 — Motor IHE & SOA)",
    page: "/#tema-tecnologia",
    sections: [
      { number: "5.1", title: "Arquitetura Orientada a Serviços (SOA) com Loose Coupling", status: "Coberta", page: "/#arquitetura" },
      { number: "5.1.1", title: "Camada de Visualização (Flutter/Dart, Route 53 e CloudFront)", status: "Coberta", page: "/#arquitetura" },
      { number: "5.1.2", title: "Lógica do Sistema em 3 módulos (FastAPI/Docker, Lambda e Cognito)", status: "Coberta", page: "/#arquitetura" },
      { number: "5.1.3", title: "Armazenamento (RDS PostgreSQL + pgvector e S3 privado)", status: "Coberta", page: "/#arquitetura" },
      { number: "5.2", title: "Quadro 4 — Tecnologias Utilizadas", status: "Coberta", page: "/#tecnologias" },
      { number: "5.3", title: "Motor de Cálculo do Índice de Harmonia Estética (3 equações completas)", status: "Coberta", page: "/#ihe" },
    ],
  },
  {
    number: "6",
    title: "Estimativa de custo de desenvolvimento (Ato 04 — Negócio & Viabilidade)",
    page: "/#tema-negocio",
    sections: [
      { number: "6.1", title: "Premissas (24 semanas, 12 sprints, US$ 1 = R$ 5,50, U²-Net/rembg)", status: "Coberta", page: "/#premissas" },
      { number: "6.2", title: "Cenário A: equipe contratada (R$ 354k) e distribuição por módulo", status: "Coberta", page: "/#cenario-a" },
      { number: "6.3", title: "Infraestrutura e demais custos (R$ 23k em 6 meses)", status: "Coberta", page: "/#outros-custos" },
      { number: "6.4", title: "Consolidado do Cenário A (≈ R$ 433.550 / R$ 434 mil)", status: "Coberta", page: "/#consolidado" },
      { number: "6.5", title: "Cenário B: realidade do TCC (≈ R$ 6.038 + 1.920h = R$ 172.800)", status: "Coberta", page: "/#cenario-b" },
      { number: "6.6", title: "Cronograma sugerido de 24 semanas (Fases 0 a 5)", status: "Coberta", page: "/#cronograma" },
      { number: "6.7", title: "Custo operacional (1k/10k/50k MAU) e memória do Break-Even (10k MAU)", status: "Coberta", page: "/#operacao" },
      { number: "6.8", title: "Riscos, Cenário Enxuto (≈ R$ 364 mil) e trade-off Lambda 3,5 s", status: "Coberta", page: "/#riscos" },
      { number: "6.9", title: "Próximos passos executivos", status: "Coberta", page: "/#proximos-passos" },
    ],
  },
  {
    number: "7",
    title: "Referências (Ato 08 — Referências & Chancela FECAP)",
    page: "/#tema-institucional",
    sections: [
      { number: "7.1", title: "Associação Brasileira do Varejo Têxtil (ABVTEX, 2025)", status: "Coberta", page: "/#referencias-home" },
      { number: "7.2", title: "Lei Geral de Proteção de Dados Pessoais — Lei nº 13.709/2018 (LGPD)", status: "Coberta", page: "/#referencias-home" },
      { number: "7.3", title: "Comissão Internacional de Iluminação — Espaço CIE L*a*b*", status: "Coberta", page: "/#referencias-home" },
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
    "# HarmonIA — Mapa de Cobertura Documental (Estrutura em 8 Atos)",
    "",
    "> Rastreabilidade integral entre o documento oficial do TCC em Ciência da Computação (FECAP, 2026), as 3 pranchas de personas e os 8 atos da página principal.",
    "",
    ...sections.flatMap((section) => [section, ""]),
    "## Notas de fidelidade documental",
    "",
    "- A página principal organiza o conteúdo em 8 atos estratégicos, posicionando Personas (Ato 03) e Modelo de Negócio/Viabilidade (Ato 04) imediatamente antes da Experiência unificada dos 6 Módulos do MVP (Ato 05).",
    "- A arquitetura técnica oficial (Seções 5.1 e 5.2) especifica Flutter/Dart, enquanto as premissas orçamentárias (Seção 6.1) citam React Native/TypeScript como referência salarial equivalente.",
    "- No Quadro 1 do PDF original, a numeração passa de RF16 para RF18 (17 requisitos funcionais no total), preservada fielmente no Ato 07.",
    "",
    "## Referências fundamentais",
    "",
    "- Associação Brasileira do Varejo Têxtil (ABVTEX, 2025) — dados mercadológicos e subutilização têxtil.",
    "- Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais (LGPD).",
    "- Comissão Internacional de Iluminação (CIE) — espaço de cor perceptualmente uniforme CIE L*a*b*.",
    "",
  ].join("\n");
}
