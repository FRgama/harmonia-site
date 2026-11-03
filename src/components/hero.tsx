import { ArrowDown, ArrowUpRight } from "lucide-react";
import { BrandWordmark } from "@/components/brand-wordmark";
import { EditorialImage } from "@/components/editorial-image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { DaVinciLines } from "@/../public/componentes/backgrounds/davinci-lines";
import { PillButton } from "@/../public/componentes/actions/pill-button";

export function Hero() {
  return (
    <section id="inicio" className="hero-full relative z-[1] isolate flex min-h-[90svh] sm:min-h-[92svh] items-end overflow-hidden">
      <video className="absolute inset-0 -z-20 h-full w-full object-cover" src="/videos/hero.mp4" autoPlay muted loop playsInline aria-hidden="true" />
      <div className="hero-veil absolute inset-0 -z-10" />
      <DaVinciLines className="pointer-events-none absolute -right-36 top-0 z-0 size-[min(90vw,780px)] text-[var(--acid)] opacity-45 md:-right-20" />
      <div className="hero-frame" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full min-w-0 flex-none max-w-[1440px] gap-8 sm:gap-12 px-4 sm:px-6 pb-20 sm:pb-28 pt-20 sm:pt-24 md:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] md:px-10 md:pb-32 md:pl-32 lg:pl-40">
        <div className="flex flex-col items-start justify-end">
          <span className="eyebrow mb-5 sm:mb-7 text-[9px] sm:text-[10px]">Moda / inteligência artificial / visão computacional</span>
          <ScrollReveal>
            <h1 className="m-0 max-w-[820px] font-normal leading-none break-words">
              <BrandWordmark className="hero-brand" />
              <span className="hero-headline">Vista-se de <em>possibilidades.</em></span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12} className="mt-6 sm:mt-9 flex max-w-[490px] items-start gap-4 sm:gap-5">
            <span className="mt-1 h-10 sm:h-12 w-px shrink-0 bg-[#c2a05a]" />
            <p className="m-0 text-[13.5px] leading-relaxed text-[#e3d9c0] sm:text-[15px] md:text-[16px]">
              A HarmonIA ajuda você a aproveitar melhor as roupas que já tem: organiza seu guarda-roupa, sugere combinações para cada ocasião e mostra quando uma peça nova combina com o seu estilo.
            </p>
          </ScrollReveal>
          <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-4 sm:gap-5">
            <PillButton href="#tema-visao" variant="coral" size="lg">
              <span className="inline-flex items-center gap-2.5">
                Descubra a HarmonIA <ArrowUpRight size={15} aria-hidden="true" />
              </span>
            </PillButton>
            <span className="text-[10px] font-semibold uppercase text-[#d9cdb0] opacity-80 sm:opacity-100">Estilo com intenção</span>
          </div>
          <div className="mt-10 sm:mt-14 hidden items-center gap-3 text-[10px] font-semibold uppercase text-[#d9cdb0] md:flex">
            <ArrowDown size={14} aria-hidden="true" /> Role para explorar os 8 atos
          </div>
        </div>

        <div className="flex w-full justify-center sm:justify-start md:items-end md:justify-end">
          <div
            className="hero-float relative aspect-square w-full max-w-[400px] rounded-[2px] border border-white/30 bg-[#151a1f] p-[7px] text-white"
          >
            <div className="flex h-full flex-col overflow-hidden rounded-[1px] bg-[#efe6d2] text-[#151a1f]">
              <div className="flex items-center justify-between px-3 pb-2 pt-3">
                <span className="text-[9px] font-bold">HARMON<span className="text-[#8a4141]">IA</span></span>
                <span className="text-[9px] text-[#777970]">09:41&nbsp; ◉</span>
              </div>
              <div className="relative min-h-0 flex-1 overflow-hidden bg-[#cfc4a8]">
                <EditorialImage src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=85" alt="Casaco catalogado na sugestão de look da HarmonIA" className="absolute inset-0" sizes="260px" />
                <span className="absolute bottom-2 left-2 bg-[#c2a05a] px-2 py-1 text-[9px] font-bold uppercase text-[#151a1f]">Peça segmentada</span>
              </div>
              <div className="shrink-0 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase text-[#777970]">Sugestão para hoje</span>
                  <span className="text-[9px] font-bold text-[#8a4141]">IHE / 94%</span>
                </div>
                <p className="mb-0 mt-2 font-(family-name:--serif) text-[24px] sm:text-[26px] leading-none">Camadas leves</p>
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="size-5 rounded-none border border-[#e3c783] bg-[#c2a05a]" />
                  <span className="size-5 rounded-full bg-[#52636b]" />
                  <span className="size-5 rounded-full bg-[#d6b59c]" />
                  <span className="ml-1 text-[9px] text-[#777970]">3 peças do seu acervo</span>
                </div>
              </div>
            </div>
            <span className="absolute -right-2 top-8 bg-[#c2a05a] px-2 py-1 text-[9px] font-bold uppercase text-[#151a1f]">IHE ≥ 75%</span>
          </div>
        </div>
      </div>

      <div className="hero-torn" aria-hidden="true" />
    </section>
  );
}
