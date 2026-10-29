import { ArrowUpRight, Compass, ExternalLink, Sparkles, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DocumentPage } from "@/components/document-page";

const personas = [
  {
    id: "persona-beatriz",
    number: "2.1",
    archetype: "Hard User · Entusiasta de Moda",
    name: "Beatriz Andrade Ferreira",
    profile:
      "23 anos · Analista de Marketing Júnior em agência de publicidade · Mora com uma amiga na Vila Madalena, São Paulo, SP",
    quote:
      "Eu tenho um armário lotado, mas sempre uso as mesmas cinco combinações. Eu só queria que alguém me mostrasse o que eu já tenho e não enxergo.",
    image: "/personas/beatriz.webp",
    boardUrl: "/Docs/Persona%20Beatriz.png",
    icon: Sparkles,
    habits:
      "Curiosa e detalhista, trata o momento de se vestir como ritual de autocuidado. Consome vídeos de “get ready with me”, perfis de styling, brechós e trocas de roupas com amigas no Instagram e TikTok. Já testou e abandonou outros apps de guarda-roupa por exigirem trabalho manual demais.",
    pains: [
      "Armário cheio acompanhado da sensação crônica de “nada para vestir”.",
      "Esquecimento de combinações anteriores que já funcionaram.",
      "Insegurança ao comprar peças diferentes das que já possui.",
    ],
    modules:
      "Onboarding completo (teste de colorimetria e biótipo), Motor de IA de combinação, Dashboard de peças ativas e esquecidas e Feed social para inspiração.",
    frequency: "Uso diário",
    tags: ["Moderna", "Autêntica", "Criativa", "Determinada"],
    tone: "person-card--warm",
  },
  {
    id: "persona-thiago",
    number: "2.2",
    archetype: "Casual User · Usuário Pragmático",
    name: "Thiago Mendes Costa",
    profile:
      "28 anos · Analista de Dados em empresa de tecnologia · Mora sozinho no Itaim Bibi, São Paulo, SP",
    quote:
      "Eu não sou ligado em moda, mas gosto de me vestir bem. O problema é que, às vezes, compro uma peça e depois percebo que não combina com nada que eu já tenho.",
    image: "/personas/thiago.webp",
    boardUrl: "/Docs/Persona%20Thiago.png",
    icon: Compass,
    habits:
      "Calmo, observador, objetivo e prático. Prefere peças básicas, versáteis, marcas confiáveis e bom custo-benefício. Não acompanha tendências de moda nem utiliza o feed social, e não se adaptou a aplicativos com cadastro manual extenso.",
    pains: [
      "Comprar peças em loja que não combinam com o acervo residencial.",
      "Medo de compras por impulso e desperdício financeiro.",
      "Falta de tempo para planejar combinações no cotidiano.",
    ],
    modules:
      "Comparação e paridade de peças na hora da compra em loja/shopping, Guarda-roupa virtual (inventário) e Dashboard simples de consulta.",
    frequency: "Uso ocasional (focado em dias de compra ou consulta rápida)",
    tags: ["Prático", "Objetivo", "Moderno", "Confiável", "Funcional"],
    tone: "person-card--green",
  },
  {
    id: "persona-rafaela",
    number: "2.3",
    archetype: "Influenciadora de Moda · Criadora e Consultora",
    name: "Rafaela Souza Lima",
    profile:
      "26 anos · Criadora de conteúdo digital e consultora de estilo autônoma · Mora sozinha no Rio Vermelho, Salvador, BA",
    quote:
      "Não é só uma questão de estética. Eu consigo mostrar por que aquela combinação funciona e transformar isso em conteúdo.",
    image: "/personas/rafaela.webp",
    boardUrl: "/Docs/Persona%20Rafaela.png",
    icon: UsersRound,
    habits:
      "Extrovertida e estratégica quanto à imagem online, orientada a métricas de alcance, engajamento e salvamentos no Instagram, TikTok e Reels. Planeja pauta semanal e monetiza com parcerias comerciais e consultoria de estilo.",
    pains: [
      "Falta de tempo para planejar looks variados em ritmo de publicação.",
      "Dificuldade em comprovar autoridade técnica sobre estilo além do gosto subjetivo.",
      "Alta concorrência com outras criadoras de conteúdo no nicho de moda.",
    ],
    modules:
      "Feed social comunitário (portfólio e canal de aquisição/crescimento), Motor de combinação estilística (cita o IHE e a cartela de colorimetria para fundamentar recomendações) e Guarda-roupa virtual integrado.",
    frequency: "Uso diário (produção e publicação de conteúdo)",
    tags: ["Liberal", "Criativa", "Autêntica", "Ambiciosa", "Sociável"],
    tone: "person-card--wine",
  },
];

export function PersonasContent() {
  return (
    <DocumentPage
      embedded
      eyebrow="03 / Pesquisa de usuário"
      index="03"
      title={<>Três rotinas reais. <em>Um ecossistema com propósito.</em></>}
      description="As personas mapeadas na Seção 2 do documento fundamentam cada decisão de escopo, monetização e experiência da HarmonIA."
    >
      <section id="personas-cards" aria-label="Personas da HarmonIA" className="personas-grid">
        {personas.map(
          ({
            id,
            number,
            archetype,
            name,
            profile,
            quote,
            image,
            boardUrl,
            icon: Icon,
            habits,
            pains,
            modules,
            frequency,
            tags,
            tone,
          }) => (
            <article id={id} className={`person-card ${tone}`} key={number}>
              <div className="person-card__top">
                <span>{number} / {archetype}</span>
                <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
              </div>

              <div className="person-card__portrait">
                <Image
                  src={image}
                  alt={`Retrato ilustrativo da persona ${name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </div>

              <h2>{name}</h2>
              <p className="person-card__profile">{profile}</p>

              <blockquote className="person-card__quote">
                “{quote}”
              </blockquote>

              <div className="person-card__block">
                <h3>Personalidade e hábitos</h3>
                <p>{habits}</p>
              </div>

              <div className="person-card__block">
                <h3>Principais dores</h3>
                <ol>
                  {pains.map((pain) => (
                    <li key={pain}>{pain}</li>
                  ))}
                </ol>
              </div>

              <div className="person-card__meta">
                <div>
                  <span>Módulos principais</span>
                  <p>{modules}</p>
                </div>
                <div>
                  <span>Frequência estimada</span>
                  <strong>{frequency}</strong>
                </div>
              </div>

              <div className="person-card__tags" aria-label={`Estilo de ${name} em palavras`}>
                <span>Seu estilo em palavras</span>
                <ul>
                  {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>

              <div className="person-card__actions">
                <a
                  href={boardUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="person-card__board-link"
                >
                  Visualizar prancha original (PNG)
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </div>
            </article>
          ),
        )}
      </section>

      <aside className="document-callout mt-10">
        <UsersRound size={20} aria-hidden="true" />
        <div>
          <span className="eyebrow">Das dores reais à sustentabilidade do negócio</span>
          <p>
            Enquanto Beatriz impulsiona retenção diária e conversão Premium, Thiago valida a
            utilidade imediata em momentos de compra e Rafaela atua como vetor orgânico de
            aquisição de usuários e geração de conteúdo qualificado.
          </p>
          <Link className="document-text-link" href="/#tema-negocio">
            Avançar para modelo de negócio e viabilidade <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </aside>
    </DocumentPage>
  );
}
