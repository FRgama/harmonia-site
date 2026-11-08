import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { BrandWordmark } from "@/components/brand-wordmark";
import { EditorialImage } from "@/components/editorial-image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { DaVinciLines } from "@/../public/componentes/backgrounds/davinci-lines";
import { PillButton } from "@/../public/componentes/actions/pill-button";

const heroMetrics = [
  {
    code: "ABVTEX · ACERVO",
    value: "< 1/3",
    label: "do armário em uso regular (ABVTEX)",
    delta: "> 66% de peças ociosas",
  },
  {
    code: "LOGÍSTICA REVERSA",
    value: "20% a 40%",
    label: "de taxa de devolução no e-commerce de moda",
    delta: "Erosão direta de margem",
  },
  {
    code: "TAM · VAREJO NACIONAL",
    value: "R$ 314+ Bi",
    label: "Mercado de vestuário no Brasil",
    delta: "6,4+ bilhões de peças/ano",
  },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="hero-full relative z-[1] isolate flex min-h-[86svh] flex-col justify-center overflow-hidden"
    >
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="hero-veil absolute inset-0 -z-10" />
      <DaVinciLines className="pointer-events-none absolute -right-36 top-0 z-0 size-[min(90vw,780px)] text-[var(--acid)] opacity-45 md:-right-20" />
      <div className="hero-frame" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 md:pl-20 lg:pl-28">
        <div className="grid w-full min-w-0 gap-8 sm:gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)] md:items-center">
          <div className="flex flex-col items-start justify-center">
            <div className="mb-4 sm:mb-5 flex flex-wrap items-center gap-3">
              <span className="eyebrow text-[9px] sm:text-[10px]">
                01 / A Tese em 5 Segundos · FashionTech &amp; DeepTech
              </span>
              <span className="border border-[#c2a05a]/45 bg-[#151a1f]/75 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-widest text-[#d8b36a] backdrop-blur-sm">
                Pitch Deck Executivo · B2C · B2B2C · B2B
              </span>
            </div>

            <ScrollReveal>
              <h1 className="m-0 max-w-[880px] font-normal leading-none break-words">
                <BrandWordmark className="hero-brand" />
                <span className="hero-headline">
                  A ponte de IA entre o armário doméstico e o <em>varejo de moda.</em>
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal
              delay={0.12}
              className="mt-5 sm:mt-6 flex max-w-[640px] items-start gap-4 sm:gap-5"
            >
              <span className="mt-1.5 h-14 sm:h-16 w-px shrink-0 bg-[#c2a05a]" />
              <p className="m-0 text-[14px] leading-relaxed text-[#e9dfc8] sm:text-[16px] md:text-[17px]">
                A HarmonIA transforma roupas ociosas em patrimônio digital ativo, gerando
                recomendações personalizadas no dia a dia e compras assertivas no provador —{" "}
                <strong className="font-semibold text-[#f7f0df]">
                  eliminando devoluções e impulsionando o consumo consciente.
                </strong>
              </p>
            </ScrollReveal>

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
              <PillButton href="#parte-problema" variant="coral" size="lg">
                <span className="inline-flex items-center gap-2.5">
                  Explorar Tese de Investimento <ArrowUpRight size={15} aria-hidden="true" />
                </span>
              </PillButton>
              <a
                href="#modelo-negocio"
                className="inline-flex min-h-[44px] items-center gap-2 border border-[#c2a05a]/45 bg-[#151a1f]/65 px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#f1e8d3] backdrop-blur-md transition hover:border-[#c2a05a] hover:bg-[#151a1f]/90"
              >
                <Sparkles size={13} className="text-[#d8b36a]" aria-hidden="true" />
                Unit Economics &amp; Escala
              </a>
            </div>
          </div>

          <div className="flex w-full justify-center sm:justify-start md:items-center md:justify-end">
            <div className="hero-float relative aspect-square w-full max-w-[370px] rounded-[2px] border border-white/30 bg-[#151a1f] p-[7px] text-white">
              <div className="flex h-full flex-col overflow-hidden rounded-[1px] bg-[#efe6d2] text-[#151a1f]">
                <div className="flex items-center justify-between px-3 pb-2 pt-3">
                  <span className="text-[9px] font-bold">
                    HARMON<span className="text-[#8a4141]">IA</span> · MOTOR IHE
                  </span>
                  <span className="font-mono text-[9px] text-[#777970]">PARIDADE ATIVA ◉</span>
                </div>
                <div className="relative min-h-0 flex-1 overflow-hidden bg-[#cfc4a8]">
                  <EditorialImage
                    src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=85"
                    alt="Casaco catalogado e validado pelo motor IHE da HarmonIA"
                    className="absolute inset-0"
                    sizes="280px"
                  />
                  <span className="absolute bottom-2 left-2 bg-[#c2a05a] px-2 py-1 text-[9px] font-bold uppercase text-[#151a1f]">
                    CIE L*a*b* + pgvector
                  </span>
                </div>
                <div className="shrink-0 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase text-[#777970]">
                      Validação Casa ↔ Provador
                    </span>
                    <span className="text-[9px] font-bold text-[#8a4141]">IHE / 94%</span>
                  </div>
                  <p className="mb-0 mt-1.5 font-(family-name:--serif) text-[22px] sm:text-[24px] leading-none">
                    Patrimônio Têxtil Ativo
                  </p>
                  <div className="mt-2.5 flex items-center gap-1.5">
                    <span className="size-4 rounded-none border border-[#e3c783] bg-[#c2a05a]" />
                    <span className="size-4 rounded-full bg-[#52636b]" />
                    <span className="size-4 rounded-full bg-[#d6b59c]" />
                    <span className="ml-1 text-[9px] font-medium text-[#5d5848]">
                      +12 combinações imediatas no acervo
                    </span>
                  </div>
                </div>
              </div>
              <span className="absolute -right-2 top-8 bg-[#c2a05a] px-2.5 py-1 text-[9px] font-bold uppercase text-[#151a1f] shadow-lg">
                IHE ≥ 75% · Match
              </span>
            </div>
          </div>
        </div>

        {/* Minimalist Metrics Strip inspired by @site HeroSection */}
        <ScrollReveal delay={0.18}>
          <div
            aria-label="Métricas de impacto do setor têxtil"
            className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 border-t border-[#c2a05a]/35 pt-6 sm:grid-cols-3 sm:gap-6"
          >
            {heroMetrics.map((metric) => (
              <div
                key={metric.code}
                className="flex flex-col justify-between border border-[#c2a05a]/35 bg-[#121a2b]/80 p-4 sm:p-5 backdrop-blur-md transition-colors hover:border-[#c2a05a]/75"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[9.5px] uppercase tracking-widest text-[#c2a05a]">
                    {metric.code}
                  </span>
                  <span className="size-1.5 rounded-full bg-[#d8b36a]" />
                </div>
                <strong className="mt-2 font-(family-name:--serif) text-[clamp(30px,3.8vw,46px)] font-medium leading-none text-[#f1e8d3]">
                  {metric.value}
                </strong>
                <span className="mt-1.5 text-[12px] font-medium leading-snug text-[#e3d9c0]">
                  {metric.label}
                </span>
                <span className="mt-2 border-t border-white/10 pt-2 font-mono text-[10px] text-[#c2a05a]">
                  {metric.delta}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-5 hidden items-center justify-between text-[10px] font-semibold uppercase tracking-widest text-[#d9cdb0] md:flex">
          <span className="inline-flex items-center gap-2">
            <ArrowDown size={13} aria-hidden="true" /> Linha narrativa encadeada: Problema → Solução
            → Moat → Mercado → Unit Economics → Equipe
          </span>
          <span className="font-mono text-[#c2a05a]">FECAP · SÃO PAULO · 2026</span>
        </div>
      </div>

      <div className="hero-torn" aria-hidden="true" />
    </section>
  );
}
