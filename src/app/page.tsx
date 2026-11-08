import type { Metadata } from "next";
import { BusinessModel } from "@/components/business-model";
import { DaVinciScrollAura } from "@/components/davinci-scroll-aura";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MarketAnalysis } from "@/components/market-analysis";
import { Problem } from "@/components/problem";
import { SiteHeader } from "@/components/site-header";
import { Solution } from "@/components/solution";
import { Technology } from "@/components/technology";
import { ChapterNav } from "@/../public/componentes/navigation/chapter-nav";

const HOME_CHAPTERS = [
  { roman: "I", title: "A Tese", targetId: "inicio" },
  { roman: "II", title: "O Problema", targetId: "problema" },
  { roman: "III", title: "A Solução", targetId: "solucao" },
  { roman: "IV", title: "Moat & Motor IHE", targetId: "moat-tecnologico" },
  { roman: "V", title: "Mercado (TAM/SAM/SOM)", targetId: "mercado" },
  { roman: "VI", title: "Unit Economics", targetId: "modelo-negocio" },
  { roman: "VII", title: "Chancela FECAP", targetId: "equipe-institucional" },
];

export const metadata: Metadata = {
  title: "HarmonIA — A ponte de IA entre o armário doméstico e o varejo de moda",
  description:
    "A HarmonIA transforma roupas ociosas em patrimônio digital ativo, gerando recomendações personalizadas no dia a dia e compras assertivas no provador — eliminando devoluções e impulsionando o consumo consciente.",
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <DaVinciScrollAura />
      <SiteHeader />
      <ChapterNav chapters={HOME_CHAPTERS} />
      <main id="conteudo" tabIndex={-1} className="relative z-10">
        {/* BLOCO 1 — HERO & INTRODUÇÃO (A Tese em 5 Segundos) */}
        <Hero />

        {/* BLOCO 2 — O PROBLEMA (A Ineficiência do Setor Têxtil) */}
        <div id="problema" className="scroll-mt-20">
          <Problem />
        </div>

        {/* BLOCO 3 — A SOLUÇÃO & PRODUTO (HarmonIA: Do Físico ao Ativo Digital) */}
        <Solution />

        {/* BLOCO 4 — DIFERENCIAL TECNOLÓGICO DEFENSÁVEL (O "Moat" do Negócio) */}
        <Technology />

        {/* BLOCO 5 — OPORTUNIDADE DE MERCADO (TAM, SAM, SOM) */}
        <MarketAnalysis />

        {/* BLOCO 6 — MODELO DE NEGÓCIO E UNIT ECONOMICS (Como o Negócio Monetiza e Escala) */}
        <BusinessModel />

        {/* BLOCO 7 — CHANCELA INSTITUCIONAL FECAP */}
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
