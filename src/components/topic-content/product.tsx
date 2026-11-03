import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Camera,
  Layers3,
  ScanSearch,
  ShoppingBag,
  Sparkles,
  Store,
  UsersRound,
} from "lucide-react";
import { Community } from "@/components/community";
import { DocumentPage } from "@/components/document-page";
import { ProductFeatureShowcase } from "@/components/product-feature-showcase";
import { SubtleStarfield } from "@/components/subtle-starfield";
import { BentoGrid, BentoItem } from "@/../public/componentes/cards/bento-grid";
import { FeatureCard } from "@/../public/componentes/cards/feature-card";

type ProductModule = {
  id: string;
  anchorId: string;
  number: string;
  title: string;
  summary: string;
  icon: typeof Camera;
  steps: [string, string][];
  requirements: string;
  visual?: ReactNode;
};

const modules: ProductModule[] = [
  {
    id: "onboarding",
    anchorId: "onboarding",
    number: "Módulo 5.1",
    title: "Onboarding, Perfil de Estilo e Digitalização do Acervo.",
    summary:
      "Etapa primordial concebida para eliminar a fricção de entrada, mapear o perfil morfocromático com precisão e converter fotos domésticas em ativos padronizados de catálogo.",
    icon: Camera,
    steps: [
      [
        "5.1.1 · Perfil Morfológico e Teste Assistido de Colorimetria",
        "Fluxo interativo para definição dos 5 biótipos corporais (Ampulheta, Retângulo, Triângulo, Triângulo Invertido ou Oval), seguido de teste assistido via câmera frontal que calcula temperatura de subtom de pele, contraste e saturação para enquadramento em uma das 12 cartelas sazonais expandidas.",
      ],
      [
        "5.1.2 · Digitalização Ágil por Segmentação e Remoção de Fundo",
        "Adição simplificada por câmera ou galeria em até 3 toques (RNF06). O pipeline serverless em nuvem detecta o contorno da vestimenta, remove cenários como lençóis, cabides e paredes e gera um PNG transparente padronizado.",
      ],
      [
        "5.1.3 · Extração de Atributos e Catalogação Taxonômica",
        "O motor de visão computacional extrai centróides cromáticos predominantes no espaço CIE L*a*b*, categoria da peça (camisa, calça, vestido, saia, calçado), padrão têxtil e formalidade intrínseca, com confirmação rápida pelo usuário.",
      ],
    ],
    requirements: "RF02–RF05 · RNF03 · RNF06",
  },
  {
    id: "inventario",
    anchorId: "inventario",
    number: "Módulo 5.2",
    title: "Dashboards e Inventário Virtual.",
    summary:
      "Banco de dados visual do patrimônio têxtil do usuário, centralizando a gestão do acervo e entregando inteligência analítica sobre rotação e custo por uso.",
    icon: Layers3,
    steps: [
      [
        "5.2.1 · Organização Dinâmica em Grade e Filtros Avançados",
        "Interface em grade (grid) otimizada para baixa latência via CDN, equipada com filtros multicritérios combináveis por tipo de peça, paletas de cores isoladas, estações do ano e grau de formalidade.",
      ],
      [
        "5.2.2 · Dashboard Analítico de Rotação de Acervo",
        "Painel de saúde do guarda-roupa que contrasta a taxa de peças ativas com peças ociosas sem uso há mais de 30, 60 ou 90 dias, além de mapear a proporção cromática dominante e a métrica de Custo por Uso (CPU).",
      ],
      [
        "5.2.3 · Gestão Manual de Metadados e Cápsulas Temáticas",
        "Controle total para reclassificar categorias, ajustar formalidade, registrar exclusão de peças doadas ou descartadas e agrupar itens em cápsulas temáticas — como mala de viagem ou roupas de ginástica.",
      ],
    ],
    requirements: "RF06 · RN01",
  },
  {
    id: "combinacoes",
    anchorId: "combinacoes",
    number: "Módulo 5.3",
    title: "Motor de Cálculo e IA de Combinação Estilística.",
    summary:
      "Núcleo de inteligência que automatiza a consultoria diária de estilo, eliminando a sobrecarga cognitiva matinal por meio de cruzamento multivariável e aprendizado contínuo.",
    icon: Sparkles,
    steps: [
      [
        "5.3.1 · Coleta de Variáveis de Contexto e Telemetria Climática",
        "Captura de telemetria climática em tempo real via API externa (temperatura e previsão de chuva por geolocalização mediante permissão explícita) combinada à seleção da ocasião de destino (corporativo, casual ou gala).",
      ],
      [
        "5.3.2 · Processamento do Índice de Harmonia Estética (IHE)",
        "Cruzamento matemático entre o inventário disponível, restrições meteorológicas, biótipo corporal e cartela de colorimetria pessoal para assegurar harmonia cromática e compensação de silhueta.",
      ],
      [
        "5.3.3 · Interface em Cards Visuais e Retroalimentação Contínua",
        "Recomendações entregues em cards visuais detalhando o look completo, com botões interativos de aprovar/salvar ou descartar que retroalimentam o vetor latente de preferências do usuário.",
      ],
    ],
    requirements: "RF07 · RF13 · RF16",
    visual: (
      <div className="product-module__visual">
        <div className="product-feature-showcase-grid product-feature-showcase-grid--single">
          <ProductFeatureShowcase variant="styling" />
        </div>
      </div>
    ),
  },
  {
    id: "provador",
    anchorId: "provador",
    number: "Módulo 5.4",
    title: "Paridade de Peças em Provador e Provador em Realidade Aumentada (AR).",
    summary:
      "Assistente de compras em tempo real concebido para substituir fotos indecisas no WhatsApp por validação analítica e visual dentro da loja física.",
    icon: ScanSearch,
    steps: [
      [
        "5.4.1 · Captura e Análise de Similaridade no Ponto de Venda",
        "Ao fotografar uma peça de interesse na arara ou no provador, o sistema extrai instantaneamente seus atributos cromáticos e taxonômicos e executa uma varredura comparativa em todo o banco de dados residencial.",
      ],
      [
        "5.4.2 · Ranqueamento de Combinações Viáveis",
        "Exibição imediata de uma lista ranqueada com as roupas que o usuário já possui em casa de maior paridade estética com a peça da loja, comprovando a utilidade prática antes da compra.",
      ],
      [
        "5.4.3 · Simulação de Caimento em Realidade Aumentada (“Espelho Inteligente”)",
        "Câmera em modo “espelho inteligente” sobrepõe graficamente peças selecionadas do armário virtual sobre o reflexo do usuário em tempo real, permitindo visualizar a coordenação física e digital simultaneamente.",
      ],
    ],
    requirements: "RF08–RF10",
    visual: (
      <div className="product-module__visual">
        <div className="product-feature-showcase-grid">
          <ProductFeatureShowcase variant="parity" />
          <ProductFeatureShowcase variant="mirror" />
        </div>
      </div>
    ),
  },
  {
    id: "comunidade",
    anchorId: "modulo-comunidade",
    number: "Módulo 5.5",
    title: "Feed Social Comunitário.",
    summary:
      "Rede de inspiração e prova social integrada ao guarda-roupa virtual, unindo descoberta qualificada por perfil físico/cromático e governança estrita de privacidade.",
    icon: UsersRound,
    steps: [
      [
        "5.5.1 · Criação de Conteúdo e Compartilhamento de Looks Reais",
        "Montagem e fotografia de combinações reais publicadas em um feed central, enriquecidas com tags estruturadas de ocasião, estilo e paleta de cores.",
      ],
      [
        "5.5.2 · Engajamento e Curadoria em Moodboards Privados",
        "Interação por curtidas e reações aliada ao salvamento de looks de terceiros em painéis semânticos privados (moodboards) para consulta posterior como repertório de estilo.",
      ],
      [
        "5.5.3 · Busca Direcionada por Biótipo/Cartela e Chave de Privacidade",
        "Filtro dedicado para encontrar pessoas com o mesmo biótipo ou a mesma cartela sazonal, acompanhado da chave Perfil Público vs. Privado (RN05).",
      ],
    ],
    requirements: "RF14–RF15 · RN05",
    visual: (
      <div className="product-module__visual">
        <Community />
      </div>
    ),
  },
  {
    id: "afiliacao",
    anchorId: "afiliacao",
    number: "Módulo 5.6",
    title: "Afiliação com E-commerces Parceiros — C&A e Lojas Renner.",
    summary:
      "Canal estratégico de recomendação e monetização B2B2C voltado para suprir lacunas reais do guarda-roupa com precisão contextual e estoque sincronizado.",
    icon: ShoppingBag,
    steps: [
      [
        "5.6.1 · Mapeamento Analítico de Lacunas (Gap Analysis)",
        "O motor de IA audita periodicamente o inventário e identifica ausências estratégicas — como uma peça neutra capaz de destravar dezenas de novas combinações com partes de baixo existentes.",
      ],
      [
        "5.6.2 · Sugestão Contextual Sincronizada via API de Estoque",
        "Integração com os catálogos da C&A e das Lojas Renner injeta produtos específicos com imagens reais e preços atualizados, ocultando automaticamente itens esgotados (RN03).",
      ],
      [
        "5.6.3 · Redirecionamento Externo e Rastreamento UTM",
        "Ao tocar no item sugerido, o usuário é direcionado ao e-commerce oficial da marca parceira via link parametrizado (UTM/Afiliação), realizando o checkout no ambiente seguro do varejista.",
      ],
    ],
    requirements: "RF11–RF12 · RN03",
    visual: (
      <div className="product-module__visual">
        <div className="affiliation-showcase subtle-starfield">
          <SubtleStarfield count={15} />
          <div className="affiliation-showcase__header">
            <div className="affiliation-showcase__badge">
              <Store size={18} strokeWidth={1.5} aria-hidden="true" />
              <span>Gap Analysis · Integração B2B2C</span>
            </div>
            <span className="affiliation-showcase__code">RF11 · RF12 · RN03</span>
          </div>
          <div className="affiliation-showcase__grid">
            <div>
              <h3>Uma peça-chave faltante. Dezenas de novos looks destravados.</h3>
              <p>
                Em vez de vitrines genéricas, a recomendação nasce de uma lacuna matemática do
                acervo pessoal: a plataforma verifica disponibilidade ativa nas APIs de catálogo
                da <strong>C&amp;A</strong> e das <strong>Lojas Renner</strong> e encaminha o
                usuário com parâmetros UTM de afiliação — sem intermediar pagamento físico dentro
                do aplicativo.
              </p>
            </div>
            <div className="affiliation-showcase__partners">
              <div className="affiliation-partner-pill">
                <span>Parceiro Varejista 01</span>
                <strong>C&amp;A Brasil <ArrowUpRight size={14} aria-hidden="true" /></strong>
                <small>Catálogo sincronizado · Link UTM · Checkout externo</small>
              </div>
              <div className="affiliation-partner-pill">
                <span>Parceiro Varejista 02</span>
                <strong>Lojas Renner <ArrowUpRight size={14} aria-hidden="true" /></strong>
                <small>Verificação dinâmica de estoque (RN03) · Sem item esgotado</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

type ProductContentProps = {
  moduleIds?: string[];
};

export function ProductContent({
  moduleIds = modules.map(({ id }) => id),
}: ProductContentProps = {}) {
  const visibleModules = modules.filter(({ id }) => moduleIds.includes(id));

  return (
    <DocumentPage
      embedded
      eyebrow="05 / Seção 5 · Escopo completo do MVP"
      index="05"
      title={<>Seis módulos unificados. <em>Uma jornada contínua.</em></>}
      description="Todos os módulos delimitados para o Produto Mínimo Viável (5.1 a 5.6) organizados em fluxo sequencial, articulando visão computacional, análise de acervo, motor IHE, provador AR, comunidade e varejo parceiro."
    >
      <BentoGrid
        columns={3}
        className="mb-12"
        ariaLabel="Visão geral dos seis módulos do MVP"
      >
        {visibleModules.map(({ id, anchorId, number, title, summary, icon: Icon, requirements }) => (
          <BentoItem key={id} span={id === "combinacoes" ? 2 : 1}>
            <FeatureCard
              eyebrow={`${number} / ${requirements}`}
              title={title}
              description={summary}
              href={`#${anchorId}`}
              ctaText="Explorar módulo"
              variant="paper"
              media={
                <div className="grid size-14 place-items-center border border-[var(--line)]/50 bg-[var(--paper)] text-[var(--coral)]">
                  <Icon size={24} strokeWidth={1.4} aria-hidden="true" />
                </div>
              }
            />
          </BentoItem>
        ))}
      </BentoGrid>
      <div className="product-modules">
        {visibleModules.map(({ id, anchorId, number, title, summary, icon: Icon, steps, requirements, visual }) => (
          <section
            className={`product-module${id === "onboarding" ? " product-module--onboarding" : ""}`}
            id={anchorId}
            key={id}
          >
            <div className="product-module__heading">
              <div className="product-module__icon">
                <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <span>{number} / {requirements}</span>
            </div>
            <h2>{title}</h2>
            <p className="product-module__summary">{summary}</p>
            <div className="product-module__steps">
              {steps.map(([stepTitle, detail]) => {
                const [stepNumber, ...titleParts] = stepTitle.split(" · ");
                const title = titleParts.join(" · ") || stepTitle;

                return (
                  <article className="product-module__step" key={stepTitle}>
                    <span className="product-module__step-number">{stepNumber}</span>
                    <h3>{title}</h3>
                    <p>{detail}</p>
                  </article>
                );
              })}
            </div>
            {visual}
          </section>
        ))}
      </div>
    </DocumentPage>
  );
}
