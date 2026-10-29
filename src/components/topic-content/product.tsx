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
import { PinnedStory } from "@/components/pinned-story";

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
    number: "Módulo 3.1",
    title: "Onboarding, Perfil de Estilo e Digitalização do Acervo.",
    summary:
      "Etapa primordial concebida para eliminar a fricção de entrada, mapear o perfil morfocromático com precisão e converter fotos domésticas em ativos padronizados de catálogo.",
    icon: Camera,
    steps: [
      [
        "3.1.1 · Perfil Morfológico e Teste Assistido de Colorimetria",
        "Fluxo interativo para definição dos 5 biótipos corporais (Ampulheta, Retângulo, Triângulo, Triângulo Invertido ou Oval), seguido de teste assistido via câmera frontal que calcula temperatura de subtom de pele, contraste e saturação para enquadramento em uma das 12 cartelas sazonais expandidas.",
      ],
      [
        "3.1.2 · Digitalização Ágil por Segmentação e Remoção de Fundo",
        "Adição simplificada por câmera ou galeria em até 3 toques (RNF06). O pipeline serverless em nuvem detecta o contorno da vestimenta, remove cenários como lençóis, cabides e paredes e gera um PNG transparente padronizado.",
      ],
      [
        "3.1.3 · Extração de Atributos e Catalogação Taxonômica",
        "O motor de visão computacional extrai centróides cromáticos predominantes no espaço CIE L*a*b*, categoria da peça (camisa, calça, vestido, saia, calçado), padrão têxtil e formalidade intrínseca, com confirmação rápida pelo usuário.",
      ],
    ],
    requirements: "RF02–RF05 · RNF03 · RNF06",
  },
  {
    id: "inventario",
    anchorId: "inventario",
    number: "Módulo 3.2",
    title: "Dashboards e Inventário Virtual.",
    summary:
      "Banco de dados visual do patrimônio têxtil do usuário, centralizando a gestão do acervo e entregando inteligência analítica sobre rotação e custo por uso.",
    icon: Layers3,
    steps: [
      [
        "3.2.1 · Organização Dinâmica em Grade e Filtros Avançados",
        "Interface em grade (grid) otimizada para baixa latência via CDN, equipada com filtros multicritérios combináveis por tipo de peça, paletas de cores isoladas, estações do ano e grau de formalidade.",
      ],
      [
        "3.2.2 · Dashboard Analítico de Rotação de Acervo",
        "Painel de saúde do guarda-roupa que contrasta a taxa de peças ativas com peças ociosas sem uso há mais de 30, 60 ou 90 dias, além de mapear a proporção cromática dominante e a métrica de Custo por Uso (CPU).",
      ],
      [
        "3.2.3 · Gestão Manual de Metadados e Cápsulas Temáticas",
        "Controle total para reclassificar categorias, ajustar formalidade, registrar exclusão de peças doadas ou descartadas e agrupar itens em cápsulas temáticas — como mala de viagem ou roupas de ginástica.",
      ],
    ],
    requirements: "RF06 · RN01",
  },
  {
    id: "combinacoes",
    anchorId: "combinacoes",
    number: "Módulo 3.3",
    title: "Motor de Cálculo e IA de Combinação Estilística.",
    summary:
      "Núcleo de inteligência que automatiza a consultoria diária de estilo, eliminando a sobrecarga cognitiva matinal por meio de cruzamento multivariável e aprendizado contínuo.",
    icon: Sparkles,
    steps: [
      [
        "3.3.1 · Coleta de Variáveis de Contexto e Telemetria Climática",
        "Captura de telemetria climática em tempo real via API externa (temperatura e previsão de chuva por geolocalização mediante permissão explícita) combinada à seleção da ocasião de destino (corporativo, casual ou gala).",
      ],
      [
        "3.3.2 · Processamento do Índice de Harmonia Estética (IHE)",
        "Cruzamento matemático entre o inventário disponível, restrições meteorológicas, biótipo corporal e cartela de colorimetria pessoal para assegurar harmonia cromática e compensação de silhueta.",
      ],
      [
        "3.3.3 · Interface em Cards Visuais e Retroalimentação Contínua",
        "Recomendações entregues em cards visuais detalhando o look completo, com botões interativos de aprovar/salvar ou descartar que retroalimentam o vetor latente de preferências do usuário.",
      ],
    ],
    requirements: "RF07 · RF13 · RF16",
    visual: (
      <div className="product-module__visual">
        <PinnedStory
          mode="outfit"
          eyebrow="Módulo 3.3 / Composição Assistida por IA"
          title="Peças diferentes. Uma leitura só sua."
          chapters={[
            {
              number: "01",
              title: "Clima, ocasião e ponto de partida",
              text: "Telemetria meteorológica e evento do dia definem as restrições iniciais para selecionar a peça-base no acervo.",
            },
            {
              number: "02",
              title: "Equilíbrio cromático e morfológico",
              text: "Centróides em CIE L*a*b* e matrizes de biótipo orientam a escolha de camadas que valorizam sua silhueta.",
            },
            {
              number: "03",
              title: "Afinidade vetorial de estilo",
              text: "Consultas em pgvector aproximam a composição do histórico de aprovações e do repertório pessoal.",
            },
            {
              number: "04",
              title: "Card de look e retroalimentação",
              text: "Combinação pronta em menos de 1,5 s (RNF03), com botões de aprovar, salvar ou descartar para aprendizado contínuo.",
            },
          ]}
        />
      </div>
    ),
  },
  {
    id: "provador",
    anchorId: "provador",
    number: "Módulo 3.4",
    title: "Paridade de Peças em Provador e Provador em Realidade Aumentada (AR).",
    summary:
      "Assistente de compras em tempo real concebido para substituir fotos indecisas no WhatsApp por validação analítica e visual dentro da loja física.",
    icon: ScanSearch,
    steps: [
      [
        "3.4.1 · Captura e Análise de Similaridade no Ponto de Venda",
        "Ao fotografar uma peça de interesse na arara ou no provador, o sistema extrai instantaneamente seus atributos cromáticos e taxonômicos e executa uma varredura comparativa em todo o banco de dados residencial.",
      ],
      [
        "3.4.2 · Ranqueamento de Combinações Viáveis",
        "Exibição imediata de uma lista ranqueada com as roupas que o usuário já possui em casa de maior paridade estética com a peça da loja, comprovando a utilidade prática antes da compra.",
      ],
      [
        "3.4.3 · Simulação de Caimento em Realidade Aumentada (“Espelho Inteligente”)",
        "Câmera em modo “espelho inteligente” sobrepõe graficamente peças selecionadas do armário virtual sobre o reflexo do usuário em tempo real, permitindo visualizar a coordenação física e digital simultaneamente.",
      ],
    ],
    requirements: "RF08–RF10",
    visual: (
      <div className="product-module__visual product-module__visual--stack">
        <PinnedStory
          mode="compare"
          eyebrow="Módulo 3.4 / Paridade Instantânea no Ponto de Venda"
          title="Uma nova peça na loja. Conexão imediata com o seu armário."
          chapters={[
            {
              number: "01",
              title: "Captura na arara ou provador",
              text: "Antes de passar no caixa, fotografe a peça para extrair cor CIE L*a*b*, categoria e formalidade.",
            },
            {
              number: "02",
              title: "Varredura vetorial no acervo de casa",
              text: "A HarmonIA cruza o novo item com todas as peças já cadastradas no seu guarda-roupa virtual.",
            },
            {
              number: "03",
              title: "Ranking de looks já viáveis",
              text: "Veja a nota de paridade e quantas combinações completas a peça destrava antes da decisão comercial.",
            },
          ]}
        />
        <PinnedStory
          mode="ar"
          eyebrow="Módulo 3.4 / Espelho Inteligente em Realidade Aumentada"
          title="Experimente a combinação completa sobre o seu reflexo."
          chapters={[
            {
              number: "01",
              title: "Enquadramento em modo espelho inteligente",
              text: "A Realidade Aumentada reconhece a silhueta e posiciona graficamente itens do seu acervo digital.",
            },
            {
              number: "02",
              title: "Físico e virtual na mesma cena",
              text: "Valide caimento, contraste cromático e proporção combinando a peça da loja com o que já está em casa.",
            },
          ]}
        />
      </div>
    ),
  },
  {
    id: "comunidade",
    anchorId: "modulo-comunidade",
    number: "Módulo 3.5",
    title: "Feed Social Comunitário.",
    summary:
      "Rede de inspiração e prova social integrada ao guarda-roupa virtual, unindo descoberta qualificada por perfil físico/cromático e governança estrita de privacidade.",
    icon: UsersRound,
    steps: [
      [
        "3.5.1 · Criação de Conteúdo e Compartilhamento de Looks Reais",
        "Montagem e fotografia de combinações reais publicadas em um feed central, enriquecidas com tags estruturadas de ocasião, estilo e paleta de cores.",
      ],
      [
        "3.5.2 · Engajamento e Curadoria em Moodboards Privados",
        "Interação por curtidas e reações aliada ao salvamento de looks de terceiros em painéis semânticos privados (moodboards) para consulta posterior como repertório de estilo.",
      ],
      [
        "3.5.3 · Busca Direcionada por Biótipo/Cartela e Chave de Privacidade",
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
    number: "Módulo 3.6",
    title: "Afiliação com E-commerces Parceiros — C&A e Lojas Renner.",
    summary:
      "Canal estratégico de recomendação e monetização B2B2C voltado para suprir lacunas reais do guarda-roupa com precisão contextual e estoque sincronizado.",
    icon: ShoppingBag,
    steps: [
      [
        "3.6.1 · Mapeamento Analítico de Lacunas (Gap Analysis)",
        "O motor de IA audita periodicamente o inventário e identifica ausências estratégicas — como uma peça neutra capaz de destravar dezenas de novas combinações com partes de baixo existentes.",
      ],
      [
        "3.6.2 · Sugestão Contextual Sincronizada via API de Estoque",
        "Integração com os catálogos da C&A e das Lojas Renner injeta produtos específicos com imagens reais e preços atualizados, ocultando automaticamente itens esgotados (RN03).",
      ],
      [
        "3.6.3 · Redirecionamento Externo e Rastreamento UTM",
        "Ao tocar no item sugerido, o usuário é direcionado ao e-commerce oficial da marca parceira via link parametrizado (UTM/Afiliação), realizando o checkout no ambiente seguro do varejista.",
      ],
    ],
    requirements: "RF11–RF12 · RN03",
    visual: (
      <div className="product-module__visual">
        <div className="affiliation-showcase">
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
      eyebrow="05 / Seção 3 · Escopo completo do MVP"
      index="05"
      title={<>Seis módulos unificados. <em>Uma jornada contínua.</em></>}
      description="Todos os módulos delimitados para o Produto Mínimo Viável (3.1 a 3.6) organizados em fluxo sequencial, articulando visão computacional, análise de acervo, motor IHE, provador AR, comunidade e varejo parceiro."
    >
      <div className="product-modules">
        {visibleModules.map(({ id, anchorId, number, title, summary, icon: Icon, steps, requirements, visual }) => (
          <section className="product-module" id={anchorId} key={id}>
            <div className="product-module__heading">
              <div className="product-module__icon">
                <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <span>{number} / {requirements}</span>
            </div>
            <h2>{title}</h2>
            <p className="product-module__summary">{summary}</p>
            <div className="product-module__steps">
              {steps.map(([stepTitle, detail]) => (
                <article className="product-module__step" key={stepTitle}>
                  <h3>{stepTitle}</h3>
                  <p>{detail}</p>
                </article>
              ))}
            </div>
            {visual}
          </section>
        ))}
      </div>
    </DocumentPage>
  );
}
