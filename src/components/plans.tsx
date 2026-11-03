import { Crown, Shirt, Store } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SubtleStarfield } from "@/components/subtle-starfield";

const PLANS = [
  {
    variant: "free",
    tag: "Plano Gratuito · Freemium (RN02)",
    icon: Shirt,
    big: "30",
    unit: "peças + 5 looks/dia",
    title: "Porta de entrada para digitalizar seu acervo.",
    description:
      "Permite cadastrar até 30 peças e solicitar até 5 combinações diárias por IA. Ao atingir esse teto, o sistema emite alerta transparente de upgrade para o plano Premium.",
    items: [
      "Até 30 peças cadastradas",
      "Até 5 combinações diárias por IA",
      "Onboarding morfocromático",
      "Alerta automático ao atingir a cota (RN02)",
    ],
  },
  {
    variant: "premium",
    tag: "Plano Premium · Referência R$ 19,90/mês",
    icon: Crown,
    big: "∞",
    unit: "acervo & IA ilimitados",
    title: "O guarda-roupa inteiro, sem limites diários.",
    description:
      "Desbloqueia peças cadastradas e gerações de looks por IA ilimitadas, além de acesso contínuo à paridade em loja e à experiência de Realidade Aumentada. R$ 19,90/mês é o valor de referência nas projeções operacionais (Seção 3.7.3).",
    items: [
      "Peças cadastradas ilimitadas",
      "Combinações diárias por IA ilimitadas",
      "Referência operacional: R$ 19,90/mês",
      "Dashboards completos de Custo por Uso e cápsulas",
      "Paridade por câmera e provador em Realidade Aumentada",
    ],
  },
];

const REVENUE = [
  [
    "01",
    "Assinatura Freemium → Premium (B2C)",
    "Até 30 peças e 5 looks por dia no plano gratuito; assinatura recorrente para ampliar o acervo e liberar recursos avançados.",
  ],
  [
    "02",
    "Comissão por afiliação (B2B2C)",
    "Recomendações contextuais da C&A e Lojas Renner para suprir lacunas do armário, com comissão por compras feitas via links parametrizados.",
  ],
  [
    "03",
    "Inteligência de moda agregada (B2B)",
    "Relatórios de tendências, uso e preferências para varejistas e marcas, exclusivamente com dados agregados e anonimizados em conformidade com a LGPD.",
  ],
  [
    "04",
    "Brechó circular entre usuários (C2C)",
    "Evolução prevista para anúncios e compra de peças seminovas compatíveis com o perfil, com comissão de intermediação e reaproveitamento dos dados do acervo.",
  ],
];

export function Plans() {
  return (
    <section id="planos" className="plans-section">
      <div className="plans-section__inner">
        <div className="plans-section__heading">
          <div>
            <span className="eyebrow">3.5 / Quatro fontes de receita complementares</span>
            <ScrollReveal>
              <h2 className="display-title">
                Comece grátis. Escale com <em>recorrência e varejo.</em>
              </h2>
            </ScrollReveal>
          </div>
          <p>
            Assinaturas e afiliação sustentam a proposta inicial; inteligência de dados e
            marketplace circular são frentes de expansão previstas no modelo.
          </p>
        </div>

        <div className="plans-grid">
          {PLANS.map(({ variant, tag, icon: Icon, big, unit, title, description, items }, i) => (
            <ScrollReveal key={tag} delay={i * 0.1}>
              <article className={`plan-card plan-card--${variant}${variant === "premium" ? " subtle-starfield" : ""}`}>
                {variant === "premium" && <SubtleStarfield count={25} />}
                <div className="plan-card__top">
                  <span>{tag}</span>
                  <Icon size={18} aria-hidden="true" />
                </div>
                <p className="plan-card__big">
                  {big}
                  <small>{unit}</small>
                </p>
                <h3>{title}</h3>
                <p className="plan-card__desc">{description}</p>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.14}>
          <div className="plans-b2b-banner">
            <div className="plans-b2b-banner__icon">
              <Store size={20} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div>
              <span>Canal B2B2C · C&amp;A e Lojas Renner (RF11, RF12, RN03)</span>
              <h3>Comissão por afiliação contextual sem fricção de gateway in-app</h3>
              <p>
                Quando o mapeamento analítico identifica uma lacuna estratégica no acervo, a
                HarmonIA sugere peças reais e em estoque da <strong>C&amp;A</strong> e das{" "}
                <strong>Lojas Renner</strong> via links parametrizados (UTM), monetizando sobre
                conversões qualificadas diretamente no ambiente oficial do parceiro.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div id="fontes-receita" className="plans-section__revenue">
          {REVENUE.map(([n, title, text]) => (
            <div key={n}>
              <span>{n} / {title}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
