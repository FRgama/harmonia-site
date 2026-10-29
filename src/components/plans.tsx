import { Crown, Shirt, Store } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

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
      "Desbloqueia peças cadastradas e gerações de looks por IA ilimitadas. O valor de R$ 19,90/mês é adotado como referência nas premissas operacionais de equilíbrio (Seção 6.7).",
    items: [
      "Peças cadastradas ilimitadas",
      "Combinações diárias por IA ilimitadas",
      "Referência operacional: R$ 19,90/mês",
      "Dashboards completos de Custo por Uso e cápsulas",
    ],
  },
];

const REVENUE = [
  [
    "01",
    "Recorrência B2C (Freemium → Premium)",
    "Conversão estimada de 5% dos usuários ativos para assinatura mensal, sustentando a receita recorrente previsível.",
  ],
  [
    "02",
    "Afiliação B2B2C (C&A e Lojas Renner)",
    "Recomendação contextual para suprir lacunas estratégicas do armário (Gap Analysis), com comissão sobre vendas via links parametrizados (UTM).",
  ],
  [
    "03",
    "Arquitetura Leve sem Gateway In-App",
    "Checkout realizado no e-commerce oficial das varejistas parceiras (RF12) com verificação dinâmica de estoque (RN03), eliminando complexidade transacional no MVP.",
  ],
];

export function Plans() {
  return (
    <section id="planos" className="plans-section">
      <div className="plans-section__inner">
        <div className="plans-section__heading">
          <div>
            <span className="eyebrow">Monetização / Freemium (RN02) & Afiliação B2B2C</span>
            <ScrollReveal>
              <h2 className="display-title">
                Comece grátis. Escale com <em>recorrência e varejo.</em>
              </h2>
            </ScrollReveal>
          </div>
          <p>
            Duas frentes complementares de receita alinham a utilidade diária para o usuário
            com vendas de alta conversão para varejistas parceiras.
          </p>
        </div>

        <div className="plans-grid">
          {PLANS.map(({ variant, tag, icon: Icon, big, unit, title, description, items }, i) => (
            <ScrollReveal key={tag} delay={i * 0.1}>
              <article className={`plan-card plan-card--${variant}`}>
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

        <div className="plans-section__revenue">
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
