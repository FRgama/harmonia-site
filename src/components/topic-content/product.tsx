import { ArrowUpRight, Camera, ChartNoAxesCombined, CloudSun, Layers3, ScanSearch, ShoppingBag, Sparkles, UsersRound } from "lucide-react";
import Link from "next/link";
import { DocumentPage } from "@/components/document-page";

const modules = [
  {
    id: "onboarding",
    number: "3.1",
    title: "Conheça seu estilo. Digitalize seu acervo.",
    summary:
      "O onboarding mapeia o perfil estético e transforma fotografias de roupas em itens organizados para o guarda-roupa virtual.",
    icon: Camera,
    steps: [
      ["3.1.1 · Perfil morfológico e colorimetria", "Questionário de biótipo — ampulheta, retângulo, triângulo, triângulo invertido ou oval — seguido de um teste assistido de colorimetria para identificar subtom, contraste e uma das 12 cartelas sazonais expandidas."],
      ["3.1.2 · Captura e remoção de fundo", "A peça pode ser fotografada ou escolhida na galeria. A segmentação identifica a vestimenta e remove o cenário para preparar uma imagem de catálogo."],
      ["3.1.3 · Atributos e catálogo", "Visão computacional estima cores no espaço CIE L*a*b*, categoria, estampa e formalidade. O usuário pode confirmar ou corrigir os dados."],
    ],
    requirements: "RF02–RF05",
  },
  {
    id: "inventario",
    number: "3.2",
    title: "Um inventário que ajuda a usar, não só a guardar.",
    summary:
      "A área do acervo reúne as roupas e mostra como elas circulam pelo guarda-roupa.",
    icon: Layers3,
    steps: [
      ["3.2.1 · Organização e filtros", "Grade visual com filtros combináveis por categoria, cores, estação e formalidade."],
      ["3.2.2 · Rotação do acervo", "Dashboard analítico com peças ativas e itens sem uso há mais de 30, 60 ou 90 dias, além da distribuição das cores predominantes."],
      ["3.2.3 · Edição e cápsulas", "Ajuste manual de atributos, registro de peças doadas ou descartadas e organização em cápsulas temáticas, como viagem ou academia."],
    ],
    requirements: "RF06",
  },
  {
    id: "combinacoes",
    number: "3.3",
    title: "Combinações que consideram o seu dia.",
    summary:
      "A recomendação cruza o acervo e o perfil com as condições do momento; o retorno de quem usa ajuda a refinar as próximas sugestões.",
    icon: Sparkles,
    steps: [
      ["3.3.1 · Contexto", "A previsão de temperatura e chuva pode vir de uma API de clima; a localização depende da permissão da pessoa. A ocasião — trabalho, encontro ou evento — completa o contexto."],
      ["3.3.2 · Índice de Harmonia Estética", "O cálculo considera harmonia cromática, compatibilidade morfológica, ocasião e similaridade vetorial de estilo. A equação e os pesos estão detalhados na página de arquitetura."],
      ["3.3.3 · Recomendações e feedback", "Cards apresentam a composição do look com ações para aprovar, salvar ou descartar. Esse feedback é descrito como sinal para melhorar futuras sugestões."],
    ],
    requirements: "RF07, RF13 e RF16",
  },
  {
    id: "provador",
    number: "3.4",
    title: "Leve o seu armário para o provador.",
    summary:
      "A câmera e o acervo dão contexto à peça encontrada em uma loja, antes da decisão de compra.",
    icon: ScanSearch,
    steps: [
      ["3.4.1 · Captura no ponto de venda", "Fotografe uma peça na arara ou no provador para estimar seus atributos e comparar com o que já está em casa."],
      ["3.4.2 · Paridade e combinações", "Uma lista ranqueada mostra itens do acervo com maior compatibilidade e looks que a nova peça pode completar."],
      ["3.4.3 · Provador em realidade aumentada", "O documento propõe uma visualização em formato espelho, sobrepondo itens do armário à imagem da câmera. A viabilidade e o momento de entrega aparecem entre os riscos de escopo."],
    ],
    requirements: "RF08–RF10",
  },
  {
    id: "comunidade",
    number: "3.5",
    title: "Inspiração também é troca.",
    summary:
      "O feed aproxima pessoas, looks e referências sem tirar do usuário o controle sobre a privacidade.",
    icon: UsersRound,
    steps: [
      ["3.5.1 · Publicação", "Compartilhe looks com descrições e tags de ocasião, estilo e paleta."],
      ["3.5.2 · Curadoria", "Reaja às publicações e salve referências em painéis privados de inspiração."],
      ["3.5.3 · Busca e privacidade", "Explore looks por tipo de corpo ou cartela e escolha se o perfil e as publicações serão públicos ou privados."],
    ],
    requirements: "RF14–RF15 e RN05",
  },
  {
    id: "afiliacao",
    number: "3.6",
    title: "Preencher lacunas com intenção.",
    summary:
      "Quando uma peça complementar pode destravar novas combinações, a recomendação conecta o inventário aos parceiros de varejo.",
    icon: ShoppingBag,
    steps: [
      ["3.6.1 · Análise de lacunas", "A IA identifica peças estratégicas ausentes — por exemplo, um tom neutro que combina com várias partes de baixo."],
      ["3.6.2 · Oferta contextual", "Sugestões de produtos da C&A e da Renner são associadas ao look, com preço e disponibilidade vindos do catálogo do parceiro."],
      ["3.6.3 · Redirecionamento", "Links de afiliação levam ao e-commerce oficial, com parâmetros de rastreamento. A compra e o checkout ocorrem fora do aplicativo."],
    ],
    requirements: "RF11–RF12 e RN03",
  },
];

type ProductContentProps = {
  moduleIds?: string[];
  showIntroduction?: boolean;
  showCallouts?: boolean;
};

export function ProductContent({
  moduleIds = modules.map(({ id }) => id),
  showIntroduction = true,
  showCallouts = true,
}: ProductContentProps = {}) {
  const visibleModules = modules.filter(({ id }) => moduleIds.includes(id));

  return (
    <DocumentPage
      embedded
      eyebrow="03 / Escopo do MVP"
      index="03"
      title={<>Da primeira peça ao <em>próximo look.</em></>}
      description="O documento organiza o produto em seis módulos: perfil e digitalização, inventário, recomendações, paridade em loja, comunidade e afiliação."
    >
      {showIntroduction && <div className="product-intro-grid">
        <article className="document-card product-intro-card">
          <span className="document-card__index">A / PONTO DE PARTIDA</span>
          <h2>O armário real, em novas perspectivas.</h2>
          <p>
            O problema não é apenas escolher uma roupa. É lembrar o que já
            existe, saber como combinar e decidir com mais segurança quando
            surge uma peça nova.
          </p>
        </article>
        <article className="document-card product-intro-card product-intro-card--dark">
          <span className="document-card__index">B / OBJETIVO DO PRODUTO</span>
          <h2>Mais uso. Menos compra no escuro.</h2>
          <p>
            Digitalização, contexto e recomendações ajudam a reativar peças
            esquecidas, reduzir compras impulsivas e aproveitar melhor o
            vestuário que a pessoa já possui.
          </p>
        </article>
      </div>}

      <div className="document-section-heading mt-16">
        <span className="eyebrow">
          {visibleModules.length} {visibleModules.length === 1 ? "módulo" : "módulos"} · ciclo do produto
        </span>
        <h2 className="display-title">Módulos previstos <em>no MVP.</em></h2>
      </div>

      <div className="product-modules">
        {visibleModules.map(({ id, number, title, summary, icon: Icon, steps, requirements }) => (
          <section className="product-module" id={id === "comunidade" ? "modulo-comunidade" : id} key={id}>
            <div className="product-module__heading">
              <div className="product-module__icon"><Icon size={20} strokeWidth={1.5} aria-hidden="true" /></div>
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
          </section>
        ))}
      </div>

      {showCallouts && <aside className="document-callout mt-14">
        <ChartNoAxesCombined size={19} aria-hidden="true" />
        <div>
          <h2>O produto é uma proposta, não um app em produção.</h2>
          <p>
            Esta página descreve o escopo do documento acadêmico. A presença de
            uma funcionalidade no site institucional não significa que ela já
            tenha backend, dados, integrações ou operação no aplicativo.
          </p>
          <Link className="document-text-link" href="/documentacao">
            Consultar cobertura das seções <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </aside>}

      {showCallouts && <div className="product-context-strip mt-10">
        <CloudSun size={18} aria-hidden="true" />
        <p>
          <strong>Contexto e responsabilidade:</strong> localização e dados de
          perfil exigem transparência e controle; veja os requisitos de
          privacidade e as regras de negócio.
        </p>
        <Link href="/#requisitos-funcionais">Ler requisitos <ArrowUpRight size={13} aria-hidden="true" /></Link>
      </div>}
    </DocumentPage>
  );
}
