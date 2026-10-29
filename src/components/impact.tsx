import { Leaf, Store, Target } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const GOALS = [
  {
    n: "01",
    icon: Leaf,
    tag: "Impacto Socioambiental · ESG & Moda Circular",
    title: "Mais rotação do acervo. Menos desperdício têxtil.",
    text: "Ao elevar a taxa de utilização efetiva do armário de ~30% para mais de 70% e reativar peças ociosas via métricas de Custo por Uso (CPU), a plataforma maximiza o retorno sobre o vestuário existente e reduz o descarte têxtil, convergindo diretamente com a moda circular e o ODS 12 da ONU.",
    mark: "ESG · ODS 12",
  },
  {
    n: "02",
    icon: Store,
    tag: "Impacto Mercadológico · Varejo Parceiro (C&A e Lojas Renner)",
    title: "Menos trocas e logística reversa. Maior conversão.",
    text: "A checagem de paridade no provador e a recomendação contextual de peças faltantes junto aos catálogos da C&A e das Lojas Renner direcionam o consumidor para compras altamente assertivas — atuando preventivamente na redução de custos com trocas e logística reversa enquanto elevam conversão e fidelização.",
    mark: "C&A · RENNER",
  },
];

export function Impact() {
  return (
    <section id="impacto" className="impact-section">
      <div className="impact-section__inner">
        <div className="impact-section__heading">
          <div>
            <span className="eyebrow">1.2 / Duplo Impacto Convergente</span>
            <ScrollReveal>
              <h2 className="display-title">
                Eficiência para quem veste. <em>Inteligência para o varejo.</em>
              </h2>
            </ScrollReveal>
          </div>
          <p>
            Transformar compras impulsivas e o remorso pós-venda em decisões conscientes,
            sustentáveis e baseadas em dados reais do guarda-roupa.
          </p>
        </div>

        <ScrollReveal>
          <div className="impact-usage">
            <div className="impact-usage__head">
              <span>Taxa de utilização efetiva do guarda-roupa</span>
              <Target size={16} aria-hidden="true" />
            </div>
            <div className="impact-usage__row">
              <span>Cenário As-Is (hoje)</span>
              <div><i className="impact-usage__today" /></div>
              <b>~30%</b>
            </div>
            <div className="impact-usage__row">
              <span>Meta To-Be (HarmonIA)</span>
              <div><i className="impact-usage__goal" /></div>
              <b>+70%</b>
            </div>
          </div>
        </ScrollReveal>

        <div className="impact-goals">
          {GOALS.map(({ n, icon: Icon, tag, title, text, mark }, i) => (
            <ScrollReveal key={n} delay={i * 0.1}>
              <article className="impact-goal">
                <div className="impact-goal__top">
                  <span>{n} / {tag}</span>
                  <Icon size={18} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <strong className="impact-goal__mark">{mark}</strong>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="impact-section__foot">
          <span>ODS 12 / Consumo e produção responsáveis · Moda circular</span>
          <span>Sinergia B2B2C / Redução preventiva de logística reversa</span>
        </div>
      </div>
    </section>
  );
}
