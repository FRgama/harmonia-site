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

const covered = (number: string, title: string, page: string): DocumentSection => ({
  number,
  title,
  status: "Coberta",
  page,
});

export const documentSectionGroups: DocumentSectionGroup[] = [
  {
    number: "0",
    title: "Elementos pré-textuais",
    page: "/#autoria-fecap",
    sections: [
      covered("0.1", "FECAP e Curso de Ciência da Computação", "/#autoria-fecap"),
      covered("0.2", "Autores e orientador", "/#autoria-fecap"),
    ],
  },
  {
    number: "1",
    title: "Introdução",
    page: "/#tema-visao",
    sections: [
      covered("1.1", "Problema atacado e solução proposta", "/#parte-problema"),
      covered("1.2", "Justificativa da solução, Custo por Uso, ODS 12 e varejo", "/#solucao"),
    ],
  },
  {
    number: "2",
    title: "Personas do projeto",
    page: "/#tema-pessoas",
    sections: [
      covered("2.1", "Beatriz Andrade Ferreira · Hard User", "/#persona-beatriz"),
      covered("2.2", "Thiago Mendes Costa · Casual User", "/#persona-thiago"),
      covered("2.3", "Rafaela Souza Lima · Influenciadora de Moda", "/#persona-rafaela"),
    ],
  },
  {
    number: "3",
    title: "Modelo de negócio",
    page: "/#tema-negocio",
    sections: [
      covered("3.1", "Proposta de valor B2C e B2B", "/#proposta-valor"),
      covered("3.1.1", "Proposta de valor para o consumidor final", "/#proposta-valor"),
      covered("3.1.2", "Proposta de valor corporativa e dados anonimizados", "/#proposta-valor"),
      covered("3.2", "Segmentos de clientes", "/#segmentos-clientes"),
      covered("3.2.1", "Segmentação B2C", "/#segmentos-clientes"),
      covered("3.2.2", "Segmentação B2B", "/#segmentos-clientes"),
      covered("3.3", "Canais de distribuição, comunicação e parcerias", "/#canais"),
      covered("3.3.1", "Lojas de aplicativos móveis", "/#canais"),
      covered("3.3.2", "Redes sociais visuais e marketing de conteúdo", "/#canais"),
      covered("3.3.3", "Marketing de influência e criadores de moda", "/#canais"),
      covered("3.3.4", "Feed social comunitário in-app", "/#canais"),
      covered("3.3.5", "Links de afiliação e parcerias comerciais", "/#canais"),
      covered("3.3.6", "Canais comerciais diretos e eventos do setor", "/#canais"),
      covered("3.4", "Relacionamento com clientes", "/#relacionamento"),
      covered("3.4.1", "Autosserviço inteligente e personalização por IA", "/#relacionamento"),
      covered("3.4.2", "Engajamento comunitário e co-criação", "/#relacionamento"),
      covered("3.5", "Fontes de receita e estratégia de monetização", "/#fontes-receita"),
      covered("3.5.1", "Assinatura Freemium e plano Premium", "/#planos"),
      covered("3.5.2", "Comissão por afiliação com e-commerces", "/#planos"),
      covered("3.5.3", "Inteligência agregada de moda e tendências", "/#fontes-receita"),
      covered("3.5.4", "Brechó integrado e marketplace circular C2C", "/#fontes-receita"),
      covered("3.6", "Parcerias-chave", "/#parcerias"),
      covered("3.6.1", "Redes varejistas e e-commerces de moda", "/#parcerias"),
      covered("3.6.2", "Infraestrutura em nuvem e serviços tecnológicos", "/#parcerias"),
      covered("3.6.3", "Plataformas globais de distribuição móvel", "/#parcerias"),
      covered("3.6.4", "Criadores, consultores e entidades setoriais", "/#parcerias"),
      covered("3.7", "Estrutura de custos e equilíbrio operacional", "/#estrutura-custos"),
      covered("3.7.1", "Infraestrutura em nuvem e processamento elástico", "/#estrutura-custos"),
      covered("3.7.2", "Distribuição móvel, aquisição e sustentação", "/#estrutura-custos"),
      covered("3.7.3", "Escala e ponto de equilíbrio operacional", "/#operacao"),
    ],
  },
  {
    number: "4",
    title: "Análise de mercado e posicionamento competitivo",
    page: "/#analise-mercado",
    sections: [
      covered("4.1", "Panorama do setor, tendências e dores do varejo", "/#panorama-mercado"),
      covered("4.2", "Dimensionamento TAM, SAM e SOM", "/#dimensionamento-mercado"),
      covered("4.3", "Análise de concorrência", "/#concorrencia"),
      covered("4.3.1", "Concorrência direta: Acloset e Whering", "/#concorrencia"),
      covered("4.3.2", "Concorrência indireta e serviços fragmentados", "/#concorrencia"),
      covered("4.4", "Matriz de benchmarking e diferenciais competitivos", "/#concorrencia"),
    ],
  },
  {
    number: "5",
    title: "Funcionalidades do MVP",
    page: "/#tema-experiencia",
    sections: [
      covered("5.1", "Onboarding, perfil de estilo e digitalização", "/#onboarding"),
      covered("5.1.1", "Perfil morfológico e colorimetria assistida", "/#onboarding"),
      covered("5.1.2", "Segmentação de imagem e remoção de fundo", "/#onboarding"),
      covered("5.1.3", "Atributos e catalogação taxonômica", "/#onboarding"),
      covered("5.2", "Dashboards e inventário virtual", "/#inventario"),
      covered("5.2.1", "Organização dinâmica e filtros avançados", "/#inventario"),
      covered("5.2.2", "Rotação de acervo e Custo por Uso", "/#inventario"),
      covered("5.2.3", "Edição de metadados e cápsulas temáticas", "/#inventario"),
      covered("5.3", "Motor de cálculo e combinação estilística", "/#combinacoes"),
      covered("5.3.1", "Variáveis de contexto e telemetria climática", "/#combinacoes"),
      covered("5.3.2", "Índice de Harmonia Estética (IHE)", "/#combinacoes"),
      covered("5.3.3", "Recomendações e retroalimentação", "/#combinacoes"),
      covered("5.4", "Paridade de peças e provador em Realidade Aumentada", "/#provador"),
      covered("5.4.1", "Captura e similaridade no ponto de venda", "/#provador"),
      covered("5.4.2", "Ranqueamento de combinações viáveis", "/#provador"),
      covered("5.4.3", "Simulação de caimento em AR", "/#provador"),
      covered("5.5", "Feed social comunitário", "/#modulo-comunidade"),
      covered("5.5.1", "Compartilhamento de looks e tags", "/#modulo-comunidade"),
      covered("5.5.2", "Engajamento e moodboards privados", "/#modulo-comunidade"),
      covered("5.5.3", "Busca por afinidade e privacidade", "/#modulo-comunidade"),
      covered("5.6", "Afiliação com e-commerces parceiros", "/#afiliacao"),
      covered("5.6.1", "Mapeamento de lacunas (Gap Analysis)", "/#afiliacao"),
      covered("5.6.2", "Sugestões sincronizadas via catálogo", "/#afiliacao"),
      covered("5.6.3", "Redirecionamento e rastreamento de afiliação", "/#afiliacao"),
    ],
  },
  {
    number: "6",
    title: "Levantamento de requisitos do MVP",
    page: "/#tema-requisitos",
    sections: [
      covered("6.1", "17 Requisitos Funcionais (RF01–RF16 e RF18)", "/#funcionais"),
      covered("6.2", "6 Requisitos Não Funcionais (RNF01–RNF06)", "/#nao-funcionais"),
      covered("6.3", "5 Regras de Negócio (RN01–RN05)", "/#regras"),
    ],
  },
  {
    number: "7",
    title: "Características técnicas e arquitetura",
    page: "/#tema-tecnologia",
    sections: [
      covered("7.1", "Arquitetura Orientada a Serviços (SOA)", "/#arquitetura"),
      covered("7.1.1", "Camada de visualização", "/#arquitetura"),
      covered("7.1.2", "Lógica do sistema em módulos autônomos", "/#arquitetura"),
      covered("7.1.3", "Armazenamento relacional, vetorial e de mídia", "/#arquitetura"),
      covered("7.2", "Tecnologias utilizadas", "/#tecnologias"),
      covered("7.3", "Motor de cálculo do Índice de Harmonia Estética", "/#ihe"),
    ],
  },
  {
    number: "8",
    title: "Estimativa de custo de desenvolvimento",
    page: "/#tema-negocio",
    sections: [
      covered("8.1", "Premissas de prazo, escopo, equipe, câmbio e IA", "/#premissas"),
      covered("8.2", "Cenário A: equipe contratada e custos de mercado", "/#cenario-a"),
      covered("8.3", "Cenário B: realidade do TCC", "/#cenario-b"),
      covered("8.4", "Cronograma sugerido de 24 semanas", "/#cronograma"),
      covered("8.5", "Riscos e medidas de redução de custos", "/#riscos"),
      covered("8.6", "Próximos passos executivos", "/#proximos-passos"),
    ],
  },
  {
    number: "9",
    title: "Referências e links",
    page: "/#tema-institucional",
    sections: [
      covered("9.1", "Referências: ABVTEX, LGPD, CIE, ABIT, IEMI e McKinsey/BoF", "/#referencias-home"),
      covered("9.2", "Site do projeto e apresentação", "/documentacao#links-projeto"),
    ],
  },
];

export function createDocumentationMarkdown() {
  const sections = documentSectionGroups.map((group) => {
    const heading = `## ${group.number}. ${group.title}`;
    const entries = group.sections.map(
      (section) =>
        `- [x] **${section.number} ${section.title}** — cobertura atual: ${section.status.toLowerCase()}. [Abrir](${section.page})`,
    );
    return [heading, ...entries].join("\n");
  });

  return [
    "# HarmonIA — Mapa de Cobertura Documental",
    "",
    "> Rastreabilidade entre o documento do produto (FECAP, 2026) e os oito atos da página principal.",
    "",
    ...sections.flatMap((section) => [section, ""]),
    "## Notas de fidelidade documental",
    "",
    "- A numeração deste mapa segue os capítulos originais do documento; os atos do site agrupam esses capítulos em uma narrativa própria.",
    "- A arquitetura técnica (Seção 7) especifica Flutter/Dart, enquanto as premissas orçamentárias (Seção 8.1) usam React Native/TypeScript como referência de custo.",
    "- No Quadro 2, a numeração dos requisitos funcionais passa de RF16 para RF18; os 17 identificadores foram preservados.",
    "- Valores e projeções de mercado são premissas do documento e devem ser validados com as fontes e cotações vigentes.",
    "",
  ].join("\n");
}
