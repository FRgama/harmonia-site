"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BrandWordmark } from "@/components/brand-wordmark";
import { EditorialImage } from "@/components/editorial-image";
import { ScrollReveal } from "@/components/scroll-reveal";

const INDEX = [
  ["I", "Visão & ESG"],
  ["II", "Personas & Negócio"],
  ["III", "Módulos do MVP"],
  ["IV", "Motor IHE & Arquitetura"],
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--mx", (e.clientX / window.innerWidth - 0.5).toFixed(3));
      el.style.setProperty("--my", (e.clientY / window.innerHeight - 0.5).toFixed(3));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section ref={ref} id="inicio" className="hero-full relative isolate flex min-h-[92svh] items-end overflow-hidden">
      <video className="hero-par--back absolute inset-0 -z-20 h-full w-full object-cover" src="/videos/hero.mp4" autoPlay muted loop playsInline aria-hidden="true" />
      <div className="hero-veil absolute inset-0 -z-10" />
      <div className="hero-frame" aria-hidden="true" />

      <ol aria-hidden="true" className="hero-index absolute left-10 top-1/2 hidden -translate-y-1/2 md:block">
        {INDEX.map(([n, label]) => (
          <li key={n}><span>{n}</span>{label}</li>
        ))}
      </ol>

      <div className="relative mx-auto grid w-full max-w-[1440px] gap-12 px-5 pb-28 pt-24 md:grid-cols-[1.1fr_.9fr] md:px-10 md:pb-32 md:pl-40">
        <div className="flex flex-col items-start justify-end">
          <span className="eyebrow mb-7">Moda / inteligência artificial / visão computacional</span>
          <ScrollReveal>
            <h1 className="m-0 max-w-[820px] font-normal leading-none">
              <BrandWordmark className="hero-brand" />
              <span className="hero-headline">Vista-se de <em>possibilidades.</em></span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12} className="mt-9 flex max-w-[490px] items-start gap-5">
            <span className="mt-1 h-12 w-px shrink-0 bg-[#c2a05a]" />
            <p className="m-0 text-[14px] leading-7 text-[#e3d9c0] md:text-[16px]">
              A HarmonIA conecta o guarda-roupa físico a um motor científico de colorimetria (CIE L*a*b*), morfologia e paridade em tempo real: mais combinações, mais consciência, mais você.
            </p>
          </ScrollReveal>
          <div className="mt-9 flex items-center gap-5">
            <Link href="#tema-visao" className="flex items-center gap-3 rounded-none border border-[#e3c783] bg-[#c2a05a] px-6 py-4 text-[12px] font-bold uppercase tracking-[.14em] text-[#151a1f] transition hover:bg-[#ae8d49]">
              Descubra a HarmonIA <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <span className="hidden text-[10px] font-semibold uppercase text-[#d9cdb0] sm:inline">Estilo com intenção</span>
          </div>
          <div className="mt-14 hidden items-center gap-3 text-[10px] font-semibold uppercase text-[#d9cdb0] md:flex">
            <ArrowDown size={14} aria-hidden="true" /> Role para explorar os 8 atos
          </div>
        </div>

        <div className="hero-par--front flex justify-start md:items-end md:justify-end">
          <div className="hero-float relative w-[min(260px,100%)] rounded-[2px] border border-white/30 bg-[#151a1f] p-[7px] text-white">
            <div className="overflow-hidden rounded-[1px] bg-[#efe6d2] text-[#151a1f]">
              <div className="flex items-center justify-between px-3 pb-2 pt-3">
                <span className="text-[9px] font-bold">HARMON<span className="text-[#8a4141]">IA</span></span>
                <span className="text-[9px] text-[#777970]">09:41&nbsp; ◉</span>
              </div>
              <div className="relative h-[142px] overflow-hidden bg-[#cfc4a8]">
                <EditorialImage src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=85" alt="Casaco catalogado na sugestão de look da HarmonIA" className="absolute inset-0" sizes="260px" />
                <span className="absolute bottom-2 left-2 bg-[#c2a05a] px-2 py-1 text-[9px] font-bold uppercase text-[#151a1f]">Peça segmentada</span>
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase text-[#777970]">Sugestão para hoje</span>
                  <span className="text-[9px] font-bold text-[#8a4141]">IHE / 94%</span>
                </div>
                <p className="mb-0 mt-2 font-(family-name:--serif) text-[26px] leading-none">Camadas leves</p>
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
