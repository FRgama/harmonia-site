import { ArrowUpRight, Compass, Sparkles, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DocumentPage } from "@/components/document-page";

const personas = [
  {
    number: "01",
    archetype: "Hard User",
    name: "Beatriz Andrade Ferreira",
    profile: "23 anos · Analista de Marketing Júnior · São Paulo, SP",
    image: "/personas/beatriz.webp",
    icon: Sparkles,
    introduction:
      "Apaixonada por moda, tendências e expressão pessoal. Gosta de experimentar novas combinações e busca referências para aprimorar o próprio estilo.",
    journey: [
      "Cadastra peças e explora colorimetria e análise de estilo.",
      "Gera looks para a rotina e para ocasiões específicas.",
      "Publica combinações, interage no feed e salva inspirações.",
    ],
    need: "Uma experiência completa que reúna organização, criatividade e comunidade no dia a dia.",
    tone: "person-card--warm",
  },
  {
    number: "02",
    archetype: "Casual User",
    name: "Thiago Mendes Costa",
    profile: "28 anos · Analista de Dados · São Paulo, SP",
    image: "/personas/thiago.webp",
    icon: Compass,
    introduction:
      "Pragmático: quer se vestir bem sem acompanhar tendências nem gastar muito tempo com moda. Prioriza um armário funcional e compras certeiras.",
    journey: [
      "Registra suas roupas para consultar o próprio acervo.",
      "Usa a câmera na loja para comparar uma peça nova.",
      "Consulta a HarmonIA pontualmente, sem depender do feed social.",
    ],
    need: "Segurança e rapidez para decidir se uma peça combina com o que já tem.",
    tone: "person-card--green",
  },
  {
    number: "03",
    archetype: "Influenciadora de Moda",
    name: "Rafaela Souza Lima",
    profile: "26 anos · Criadora de conteúdo e consultora de estilo · Salvador, BA",
    image: "/personas/rafaela.webp",
    icon: UsersRound,
    introduction:
      "Profissional de moda que já cria conteúdo para redes sociais e busca fortalecer sua presença, autoridade e conexão com públicos interessados em estilo.",
    journey: [
      "Compartilha looks e amplia a conversa com a comunidade HarmonIA.",
      "Apresenta consultorias, marcas e parcerias a um público segmentado.",
      "Atrai novos usuários a partir da audiência que já construiu.",
    ],
    need: "Um canal complementar de visibilidade, descoberta e oportunidades de negócio.",
    tone: "person-card--wine",
  },
];

export function PersonasContent() {
  return (
    <DocumentPage
      embedded
      eyebrow="02 / Pesquisa de produto"
      index="02"
      title={<>Três rotinas. <em>Um armário com mais sentido.</em></>}
      description="As personas do projeto tornam explícitos os diferentes motivos para usar a HarmonIA: explorar o estilo, resolver uma compra ou compartilhar conhecimento."
    >
      <section id="personas-cards" aria-label="Personas da HarmonIA" className="personas-grid">
        {personas.map(({ number, archetype, name, profile, image, icon: Icon, introduction, journey, need, tone }) => (
          <article className={`person-card ${tone}`} key={number}>
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
            <p className="person-card__introduction">{introduction}</p>
            <h3>Como usa o produto</h3>
            <ol>
              {journey.map((step) => <li key={step}>{step}</li>)}
            </ol>
            <div className="person-card__need">
              <span>O que procura</span>
              <p>{need}</p>
            </div>
          </article>
        ))}
      </section>

      <aside className="document-callout mt-10">
        <span className="eyebrow">Da pesquisa à experiência</span>
        <p>
          O mesmo produto precisa atender quem explora cada recurso, quem entra
          somente na hora da compra e quem cria conteúdo para outras pessoas.
          Essa diversidade orienta os módulos e requisitos descritos no projeto.
        </p>
        <Link className="document-text-link" href="/#tema-experiencia">
          Explorar os módulos do MVP <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </aside>
    </DocumentPage>
  );
}
