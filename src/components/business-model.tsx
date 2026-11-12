import {
  ArrowDownRight,
  BarChart3,
  Crown,
  Layers,
  Store,
  TrendingUp,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SubtleStarfield } from "@/components/subtle-starfield";

const revenueStreams = [
  {
    code: "FRENTE 01 · B2C",
    tag: "Freemium & Assinatura Premium",
    icon: Crown,
    highlightMetric: "R$ 19,90",
    unit: "/ mês",
    title: "Recorrência de alta margem no bolso do consumidor.",
    description:
      "Entrada gratuita (até 30 peças e 5 looks/dia) para rápida aquisição viral. O upgrade Premium desbloqueia acervo infinito, provador em Realidade Aumentada ilimitado, paridade ilimitada em lojas e análises cromáticas avançadas.",
    bullets: [
      "Freemium: até 30 peças + 5 combinações/dia",
      "Premium: AR e paridade em lojas ilimitados",
      "Dashboards completos de Custo por Uso (CPU)",
      "Conversão projetada conservadora de 5% da base",
    ],
    dark: false,
  },
  {
    code: "FRENTE 02 · B2B2C",
    tag: "Afiliação com Grandes Varejistas",
    icon: Store,
    highlightMetric: "5%+",
    unit: "comissão transacional",
    title: "Gap Analysis sugerindo estoque parceiro (C&A, Renner).",
    description:
      "O motor de IA audita lacunas reais do guarda-roupa (ex: uma peça-chave que destrava 15 novos looks) e recomenda itens em estoque de redes parceiras como C&A e Lojas Renner, gerando comissão por venda sem risco de estoque próprio.",
    bullets: [
      "Recomendação contextual orientada por Gap Analysis",
      "Sincronização dinâmica de estoque parceiro",
      "Checkout externo oficial via links UTM rastreáveis",
      "Zero risco de estoque ou logística própria",
    ],
    dark: true,
  },
  {
    code: "FRENTE 03 · B2B",
    tag: "Market Intelligence",
    icon: BarChart3,
    highlightMetric: "DaaS",
    unit: "inteligência agregada",
    title: "Dados reais de uso pós-compra para a indústria têxtil.",
    description:
      "Pela primeira vez, marcas, birôs de estilo e indústrias acessam métricas anonimizadas e agregadas (100% LGPD) sobre comportamento de uso pós-compra, retenção de cartelas de cores, rejeição em provador e modelagens regionais.",
    bullets: [
      "Taxa real de rotação vs. ociosidade por categoria",
      "Aderência regional a cartelas cromáticas e biótipos",
      "Prevenção de encalhe e otimização de grade fabril",
      "Conformidade estrita com LGPD (dados anonimizados)",
    ],
    dark: false,
  },
];

const unitEconomicsRows = [
  {
    scale: "1.000 MAU (Validação Inicial)",
    cloudCost: "≈ R$ 2.500 / mês",
    costPerUser: "R$ 2,50 / usuário",
    efficiency: "Base inicial de calibração",
  },
  {
    scale: "10.000 MAU (Break-Even Operacional)",
    cloudCost: "≈ R$ 9.000 / mês",
    costPerUser: "R$ 0,90 / usuário",
    efficiency: "Cobertura 100% da nuvem (Receita ≈ R$ 9.700/mês)",
    highlight: true,
  },
  {
    scale: "50.000 MAU (Escala SP & Salvador)",
    cloudCost: "≈ R$ 35.000 / mês",
    costPerUser: "R$ 0,70 / usuário",
    efficiency: "-72% no custo marginal unitário",
  },
];

export function BusinessModel() {
  return (
    <section
      id="modelo-negocio"
      className="plans-section py-16 sm:py-24 scroll-mt-20"
    >
      <div className="plans-section__inner">
        <ScrollReveal>
          <div className="plans-section__heading">
            <div>
              <span className="eyebrow">
                06 / Modelo de Negócio e Unit Economics · Como o Negócio Monetiza e Escala
              </span>
              <p className="mb-3 mt-4 border-l-2 border-[var(--coral)] pl-3.5 font-(family-name:--serif) text-[18px] sm:text-[22px] italic text-[var(--coral)]">
                “Uma base altamente engajada viabiliza uma estratégia de monetização diversificada e
                de alta margem.”
              </p>
              <h2 className="display-title">
                Três frentes de receita. <em>Custo marginal decrescente.</em>
              </h2>
            </div>
            <p>
              Combinamos recorrência SaaS no B2C, comissão transacional sem risco de estoque no
              B2B2C e inteligência de dados proprietários no B2B — alcançando o ponto de equilíbrio
              operacional com apenas 10.000 usuários ativos.
            </p>
          </div>
        </ScrollReveal>

        {/* Three Scalable Revenue Streams */}
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {revenueStreams.map(
            (
              { code, tag, icon: Icon, highlightMetric, unit, title, description, bullets, dark },
              idx
            ) => (
              <ScrollReveal key={code} delay={idx * 0.08}>
                <article
                  className={`plan-card h-full flex flex-col justify-between ${
                    dark ? "plan-card--premium subtle-starfield" : ""
                  }`}
                >
                  {dark && <SubtleStarfield count={20} />}
                  <div>
                    <div className="plan-card__top">
                      <span>
                        {code} · {tag}
                      </span>
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <p className="plan-card__big">
                      {highlightMetric}
                      <small>{unit}</small>
                    </p>
                    <h3>{title}</h3>
                    <p className="plan-card__desc">{description}</p>
                  </div>
                  <ul>
                    {bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            )
          )}
        </div>

        {/* Unit Economics & Break-Even Specimen Table (inspired by @site ScienceSection) */}
        <ScrollReveal delay={0.14}>
          <div
            id="unit-economics"
            className="mt-8 border border-[rgba(194,160,90,0.6)] bg-[var(--night)] p-6 sm:p-8 text-[var(--paper)] subtle-starfield"
          >
            <SubtleStarfield count={20} />
            <div className="relative z-10">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/15 pb-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--gilt)]">
                    6.2 / VIABILIDADE E PONTO DE EQUILÍBRIO (BREAK-EVEN OPERACIONAL)
                  </span>
                  <h3 className="mt-2 font-(family-name:--serif) text-[clamp(28px,3.8vw,44px)] font-medium leading-tight text-white">
                    Alavancagem operacional e{" "}
                    <em className="text-[var(--gilt)]">Break-Even em 10.000 MAU.</em>
                  </h3>
                  <p className="mt-2 max-w-2xl text-xs sm:text-[13px] leading-relaxed text-[#c5c2b6]">
                    Como o processamento pesado de visão computacional (segmentação semântica e
                    extração CIE L*a*b*) ocorre uma única vez no cadastro da peça, o custo marginal
                    de infraestrutura em nuvem cai de <strong>R$ 2,50/usuário</strong> (1k MAU)
                    para <strong>R$ 0,70/usuário</strong> (50k MAU).
                  </p>
                </div>
                <div className="flex items-center gap-2 border border-[var(--gilt)]/50 bg-[var(--gilt)]/10 px-3.5 py-2 font-mono text-xs text-[var(--gilt)]">
                  <TrendingUp size={16} aria-hidden="true" />
                  <span>Economia de Escala: -72% Custo/MAU</span>
                </div>
              </div>

              {/* Specimen Rows */}
              <div className="mt-6 divide-y divide-white/12 border border-white/15 bg-black/35">
                <div className="hidden sm:grid sm:grid-cols-12 px-5 py-3 font-mono text-[10px] uppercase tracking-wider text-[var(--gilt)] bg-white/[0.03]">
                  <span className="col-span-4">Escala de Usuários Ativos (MAU)</span>
                  <span className="col-span-3">Infraestrutura Nuvem / Mês</span>
                  <span className="col-span-2">Custo Unitário</span>
                  <span className="col-span-3 text-right">Impacto Operacional</span>
                </div>
                {unitEconomicsRows.map((row) => (
                  <div
                    key={row.scale}
                    className={`grid grid-cols-1 sm:grid-cols-12 items-center gap-2 sm:gap-4 px-5 py-4 transition-colors ${
                      row.highlight
                        ? "bg-[rgba(194,160,90,0.14)] border-l-2 border-l-[var(--gilt)]"
                        : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <div className="sm:col-span-4">
                      <strong className="text-sm font-semibold text-white">{row.scale}</strong>
                    </div>
                    <div className="sm:col-span-3 font-mono text-xs text-[#d2d3cb]">
                      {row.cloudCost}
                    </div>
                    <div className="sm:col-span-2">
                      <span className="inline-block border border-[var(--gilt)]/45 bg-black/40 px-2.5 py-1 font-mono text-xs font-bold text-[var(--gilt)]">
                        {row.costPerUser}
                      </span>
                    </div>
                    <div className="sm:col-span-3 sm:text-right font-mono text-[11px] text-[#c5c2b6]">
                      {row.efficiency}
                    </div>
                  </div>
                ))}
              </div>

              {/* Break-Even Equation Cards */}
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                <article className="border border-white/15 bg-white/[0.04] p-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--gilt)]">
                    1. Assinaturas B2C (em 10k MAU)
                  </span>
                  <strong className="mt-2 block font-(family-name:--serif) text-[28px] font-medium text-white">
                    ≈ R$ 7.500 <small className="text-xs font-sans text-[#b7b9ae]">/ mês líq.</small>
                  </strong>
                  <p className="mt-2 mb-0 text-xs leading-relaxed text-[#c5c2b6]">
                    Conversão de <strong>5% no plano Premium</strong> (500 assinantes × R$ 19,90),
                    já líquidos das taxas das lojas móveis.
                  </p>
                </article>

                <article className="border border-white/15 bg-white/[0.04] p-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--gilt)]">
                    2. Afiliação B2B2C (em 10k MAU)
                  </span>
                  <strong className="mt-2 block font-(family-name:--serif) text-[28px] font-medium text-white">
                    ≈ R$ 2.250 <small className="text-xs font-sans text-[#b7b9ae]">/ mês líq.</small>
                  </strong>
                  <p className="mt-2 mb-0 text-xs leading-relaxed text-[#c5c2b6]">
                    Conversão transacional de <strong>3% da base</strong> (300 compras/mês × ticket
                    médio R$ 150 × comissão de 5% em varejistas parceiros).
                  </p>
                </article>

                <article className="border border-[var(--gilt)]/70 bg-[rgba(194,160,90,0.12)] p-5">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--gilt)]">
                    3. Break-Even Operacional Atingido
                  </span>
                  <strong className="mt-2 block font-(family-name:--serif) text-[28px] font-medium text-[var(--gilt)]">
                    R$ 9.750 vs. R$ 9.000
                  </strong>
                  <p className="mt-2 mb-0 text-xs leading-relaxed text-[#e9dfc8]">
                    Com apenas <strong>10.000 usuários ativos</strong>, a receita recorrente cobre
                    100% da infraestrutura em nuvem — antes mesmo de contabilizar contratos B2B de
                    Market Intelligence.
                  </p>
                </article>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/12 pt-5 text-xs text-[#c5c2b6]">
                <span className="inline-flex items-center gap-2">
                  <Layers size={14} className="text-[var(--gilt)]" aria-hidden="true" />
                  Arquitetura elástica serverless (AWS Lambda + RDS pgvector + CloudFront)
                </span>
                <a
                  href="#chancela-fecap"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--gilt)] hover:underline"
                >
                  Ver Chancela Institucional FECAP{" "}
                  <ArrowDownRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
