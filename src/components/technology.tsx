import type { CSSProperties } from "react";
import { Cloud, ScanFace, ShieldCheck, Sparkles, SwatchBook, Waypoints } from "lucide-react";
import { HarmonyIndex } from "@/components/harmony-index";
import { IheExecutiveSimulator } from "@/components/ihe-executive-simulator";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SubtleStarfield } from "@/components/subtle-starfield";
import { DaVinciLines } from "@/../public/componentes/backgrounds/davinci-lines";

const harmonyFactors = [
  {
    number: "01 · w_c = 0.35",
    symbol: "S_cor (35%)",
    name: "Harmonia Cromática · CIE L*a*b*",
    note: "Distância perceptual euclidiana ΔE*ab entre os tons da peça e a cartela sazonal do usuário.",
    score: "94%",
    icon: SwatchBook,
  },
  {
    number: "02 · w_m = 0.25",
    symbol: "S_bio (25%)",
    name: "Compensação Morfológica",
    note: "Equilíbrio proporcional de modelagens e recortes frente aos 5 biótipos corporais.",
    score: "89%",
    icon: ScanFace,
  },
  {
    number: "03 · w_o = 0.20",
    symbol: "S_ocasion (20%)",
    name: "Contexto e Clima",
    note: "Adequação formal ao evento combinada à telemetria meteorológica local em tempo real.",
    score: "95%",
    icon: Cloud,
  },
  {
    number: "04 · w_v = 0.20",
    symbol: "S_cos (20%)",
    name: "Similaridade Vetorial · pgvector",
    note: "Cosseno entre o vetor latente de estilo do usuário e o embedding multidimensional do look.",
    score: "91%",
    icon: Waypoints,
  },
];

const benchmarkComparison = [
  [
    "Atuação ponta a ponta (Acervo Doméstico ↔ Provador Físico)",
    "Sim · Nativo",
    "Não (Catálogo passivo)",
    "Não (Catálogo passivo)",
    "Não (Inspiração isolada)",
  ],
  [
    "Harmonia Cromática Perceptual (Espaço CIE L*a*b*) e Biótipos",
    "Sim · Determinístico",
    "Não",
    "Não",
    "Não",
  ],
  [
    "Validação em tempo real na arara / Provador AR no Brasil",
    "Sim · Câmara & AR",
    "Não",
    "Não",
    "Não",
  ],
  [
    "Recomendações diárias orientadas a Clima, Ocasião e Vetores",
    "Sim · Motor IHE",
    "Parcial",
    "Básico",
    "Não",
  ],
  [
    "Integração B2B2C (Gap Analysis) e Market Intelligence B2B",
    "Sim · C&A / Renner",
    "Não localizado",
    "Foco Europa",
    "Apenas Ads genéricos",
  ],
];

const moatNotes = [
  {
    label: "Apps Globais (Acloset & Whering)",
    text: "Operam como meros catálogos passivos de guarda-roupa: carecem de ciência colorimétrica CIE L*a*b*, matrizes de compensação morfológica, validação por câmera no provador físico e integração transacional com varejistas brasileiros.",
  },
  {
    label: "Redes Sociais (Pinterest, Instagram, TikTok)",
    text: "Entregam referências aspiracionais desconectadas da realidade do armário doméstico — estimulando compras por impulso sem qualquer validação de paridade com o que o consumidor já possui em casa.",
  },
  {
    label: "O Moat HarmonIA (Ponta a Ponta)",
    text: "Única plataforma que fecha o ciclo entre o patrimônio doméstico e o ponto de venda brasileiro: quanto maior o acervo catalogado, mais defensável é o grafo vetorial de preferências e maior a conversão para o varejo parceiro.",
  },
];

export function Technology() {
  return (
    <section id="moat-tecnologico" className="technology-section subtle-starfield relative isolate">
      <SubtleStarfield count={25} />
      <DaVinciLines className="pointer-events-none absolute left-1/2 top-[38%] z-0 size-[min(100vw,960px)] -translate-x-1/2 -translate-y-1/2 text-[var(--acid)] opacity-55" />
      <div className="technology-section__inner relative z-10">
        <ScrollReveal>
          <div className="technology-section__heading">
            <div>
              <span className="eyebrow">
                04 / Diferencial Tecnológico Defensável · O &ldquo;Moat&rdquo; do Negócio
              </span>
              <p className="mb-3 mt-4 border-l-2 border-[var(--gilt)] pl-3.5 font-(family-name:--serif) text-[18px] sm:text-[22px] italic text-[var(--gilt)]">
                “Essa assertividade não depende de palpites subjetivos, mas de um motor algorítmico
                proprietário.”
              </p>
              <h2 className="display-title">
                O Motor IHE: <em>ciência cromática e álgebra vetorial.</em>
              </h2>
            </div>
            <p>
              O <strong>Índice de Harmonia Estética (IHE)</strong> substitui o “achismo” na hora de
              vestir e comprar por uma equação multivariada proprietária que cruza percepção visual
              humana no espaço <strong>CIE L*a*b*</strong>, compensação de silhuetas, clima e
              similaridade de cosseno em banco vetorial (<strong>pgvector</strong>).
            </p>
          </div>
        </ScrollReveal>

        <div className="technology-section__ihe">
          <ScrollReveal className="technology-section__factors">
            <div className="technology-section__label">
              <Sparkles size={14} aria-hidden="true" />
              <span>MOTOR ALGORÍTMICO PROPRIETÁRIO · 4 VARIÁVEIS PONDERADAS (SOMA = 1.00)</span>
            </div>
            <div className="technology-section__factor-grid">
              {harmonyFactors.map(({ number, name, note, score, icon: Icon }, index) => (
                <ScrollReveal key={number} delay={index * 0.07}>
                  <article className="technology-factor">
                    <div className="technology-factor__top">
                      <span>{number}</span>
                      <Icon size={17} aria-hidden="true" />
                    </div>
                    <h3>{name}</h3>
                    <p>{note}</p>
                    <div className="technology-factor__meter">
                      <i style={{ "--factor-score": score } as CSSProperties} />
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          <div className="technology-section__merge" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>

          <HarmonyIndex />
        </div>

        {/* Interactive Executive Simulator adapted from @site */}
        <ScrollReveal delay={0.1}>
          <IheExecutiveSimulator />
        </ScrollReveal>

        {/* Competitive Benchmarking Matrix inside Section 4 as requested */}
        <ScrollReveal delay={0.14}>
          <div id="benchmarking" className="mt-14 border border-white/15 bg-white/[0.03] p-6 sm:p-9">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="eyebrow !text-[var(--gilt)]">
                  4.2 / O Diferencial Competitivo · Benchmarking Global vs. HarmonIA
                </span>
                <h3 className="mt-3 font-(family-name:--serif) text-[clamp(28px,3.8vw,46px)] font-medium leading-tight text-white">
                  De catálogos passivos à{" "}
                  <em className="text-[var(--gilt)]">validação em tempo real no provador.</em>
                </h3>
              </div>
              <span className="inline-flex items-center gap-2 border border-[var(--gilt)]/40 bg-[var(--gilt)]/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--gilt)]">
                <ShieldCheck size={14} aria-hidden="true" /> Defensabilidade de Dados &amp; Rede
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-3">
              {moatNotes.map(({ label, text }) => (
                <article
                  key={label}
                  className="border border-white/12 bg-black/35 p-5"
                >
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--gilt)]">
                    {label}
                  </span>
                  <p className="mt-2.5 mb-0 text-xs leading-relaxed text-[#c5c2b6]">{text}</p>
                </article>
              ))}
            </div>

            <div
              className="overflow-x-auto border border-white/15 bg-[#0c111d]"
              role="region"
              aria-label="Matriz de Benchmarking Competitivo"
              tabIndex={0}
            >
              <table className="w-full min-w-[680px] border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-white/15 bg-black/50 font-mono text-[10px] uppercase tracking-wider text-[var(--gilt)]">
                    <th scope="col" className="p-3.5">
                      Capacidade Estratégica
                    </th>
                    <th scope="col" className="p-3.5 text-white">
                      HarmonIA
                    </th>
                    <th scope="col" className="p-3.5 text-white/60">
                      Acloset
                    </th>
                    <th scope="col" className="p-3.5 text-white/60">
                      Whering
                    </th>
                    <th scope="col" className="p-3.5 text-white/60">
                      Pinterest &amp; Redes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {benchmarkComparison.map(([criterion, harmonia, acloset, whering, social]) => (
                    <tr key={criterion} className="hover:bg-white/[0.02]">
                      <th scope="row" className="p-3.5 font-medium text-[#e9dfc8]">
                        {criterion}
                      </th>
                      <td className="p-3.5 font-bold text-[var(--gilt)]">{harmonia}</td>
                      <td className="p-3.5 text-[#aeb0a6]">{acloset}</td>
                      <td className="p-3.5 text-[#aeb0a6]">{whering}</td>
                      <td className="p-3.5 text-[#aeb0a6]">{social}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        <div className="technology-section__foot">
          <span>CIE L*a*b* (ΔE*ab) · Matriz de 5 Biótipos · Telemetria Climática · pgvector</span>
          <span>Barreira Competitiva: Grafo Proprietário de Patrimônio Têxtil &amp; Estilo</span>
        </div>
      </div>
    </section>
  );
}
