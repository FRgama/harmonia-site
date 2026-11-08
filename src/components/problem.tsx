import { ArrowDownRight, Home, Sparkles, Store } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SubtleStarfield } from "@/components/subtle-starfield";

const scenarios = [
  {
    tag: "Para o Consumidor · Gargalo Doméstico",
    icon: Home,
    title: "Sobrecarga cognitiva matinal e >66% do armário sem uso.",
    text: "Sem domínio técnico sobre a própria harmonia morfo-cromática (subtom de pele, contraste e biótipo corporal), o consumidor enfrenta a sensação diária de “não ter o que vestir” e realiza compras impulsivas que terminam esquecidas e ociosas no fundo do armário.",
  },
  {
    tag: "Para o Varejo · Gargalo no Ponto de Venda & E-commerce",
    icon: Store,
    title: "Decisões às cegas no provador e devoluções de 20% a 40%.",
    text: "Na arara ou no provador físico, o cliente hesita e envia fotos no WhatsApp buscando opiniões subjetivas, sem saber se a peça combina com o que já tem em casa. No digital, essa incerteza gera devoluções massivas que corroem as margens de grandes redes varejistas.",
  },
  {
    tag: "A Oportunidade Convergente · B2C + B2B2C",
    icon: Sparkles,
    title: "Conectar o acervo residencial à decisão de compra em loja.",
    text: "Transformar o guarda-roupa doméstico em um ativo digital inteligente resolve simultaneamente a frustração matinal do consumidor e o custo bilionário de logística reversa e abandono de provador no varejo de moda.",
    highlight: true,
  },
];

export function Problem() {
  return (
    <section className="problem-section" id="parte-problema">
      <div className="problem-section__inner">
        <div className="problem-section__copy">
          <ScrollReveal>
            <span className="eyebrow">02 / O Problema · A Ineficiência do Setor Têxtil</span>
            <p className="mb-3 mt-4 border-l-2 border-[var(--coral)] pl-3.5 font-(family-name:--serif) text-[18px] sm:text-[21px] italic text-[var(--coral)]">
              “Por trás desse mercado bilionário, existe um gargalo duplo que onera tanto o cliente
              quanto o varejista.”
            </p>
            <h2 className="display-title">
              Armários cheios e ociosos. <em>Margens corroídas no varejo.</em>
            </h2>
            <p>
              Segundo a <strong>Associação Brasileira do Varejo Têxtil (ABVTEX)</strong>, o
              consumidor utiliza regularmente <strong>menos de 1/3 do próprio armário</strong>,
              acumulando mais de 66% de peças sem rotação. Do outro lado do balcão, grandes redes
              sofrem com hesitação na arara e taxas de devolução entre{" "}
              <strong>20% e 40% no e-commerce de moda</strong> por incompatibilidade de caimento,
              cor e estilo com o acervo pré-existente do cliente.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div
              className="problem-section__stats"
              aria-label="Proporção média de utilização do acervo pessoal e devoluções no varejo"
            >
              <div className="problem-section__stat-head">
                <span>INEFICIÊNCIA ESTRUTURAL · CONSUMIDOR &amp; VAREJO</span>
                <span>IMPACTO DIRETO EM MARGEM E CAPITAL</span>
              </div>
              <div className="problem-section__bar-row">
                <span>Acervo pessoal em uso regular (ABVTEX)</span>
                <div>
                  <i className="problem-section__bar-used" />
                </div>
                <b>&lt; 1/3</b>
              </div>
              <div className="problem-section__bar-row">
                <span>Peças ociosas no armário doméstico</span>
                <div>
                  <i className="problem-section__bar-idle" />
                </div>
                <b>&gt; 66%</b>
              </div>
              <div className="problem-section__hanger-line">
                <span>EM ROTAÇÃO</span>
                {Array.from({ length: 12 }, (_, index) => (
                  <i key={index} className={index < 4 ? "is-used" : ""} />
                ))}
                <span>CAPITAL IMOBILIZADO (&gt; 2/3 OCIOSO)</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="problem-section__side" delay={0.18}>
          <div className="problem-section__index">
            20–40% <span>devoluções</span>
          </div>
          <p>A fricção começa no armário e explode no provador.</p>
          <a href="#solucao" className="inline-flex items-center gap-2 text-[11px] font-bold">
            Como a HarmonIA elimina essa fricção{" "}
            <ArrowDownRight size={15} aria-hidden="true" />
          </a>
        </ScrollReveal>
      </div>

      <div className="problem-scenarios">
        {scenarios.map(({ tag, icon: Icon, title, text, highlight }, index) => (
          <ScrollReveal key={tag} delay={0.08 * index}>
            <article
              className={`problem-scenario-card ${
                highlight ? "problem-scenario-card--tobe subtle-starfield" : ""
              }`}
            >
              {highlight && <SubtleStarfield count={15} />}
              <div className="problem-scenario-card__top">
                <span>{tag}</span>
                <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
