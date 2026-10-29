import type { Metadata } from "next";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Impact } from "@/components/impact";
import { Plans } from "@/components/plans";
import { Problem } from "@/components/problem";
import { SiteHeader } from "@/components/site-header";
import { Solution } from "@/components/solution";
import { Technology } from "@/components/technology";
import { ArchitectureContent } from "@/components/topic-content/architecture";
import { InvestmentContent } from "@/components/topic-content/investment";
import { PersonasContent } from "@/components/topic-content/personas";
import { ProductContent } from "@/components/topic-content/product";
import { RequirementsContent } from "@/components/topic-content/requirements";

export const metadata: Metadata = {
  title: "HarmonIA — Plataforma inteligente de gestão de guarda-roupa e estilo",
  description:
    "Conheça a visão ESG, as personas, o modelo de negócio, os 6 módulos do MVP, o Motor IHE (CIE L*a*b* e pgvector), a arquitetura SOA, os requisitos e a chancela acadêmica FECAP da HarmonIA.",
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1}>
        {/* ATO 01 — Hero & Proposta de Valor Instantânea (#inicio) */}
        <Hero />

        {/* ATO 02 — O Problema (As-Is), a Solução (To-Be) e o Impacto ESG (#tema-visao) */}
        <section className="project-theme" id="tema-visao">
          <div className="project-theme__inner">
            <header className="project-theme__heading">
              <span className="eyebrow">02 / O Problema, a Solução e o Impacto ESG · Seção 1</span>
              <h2>
                Do armário subutilizado ao <em>consumo com contexto.</em>
              </h2>
              <p>
                O diagnóstico do varejo têxtil brasileiro (ABVTEX, 2025), a transição do cenário
                analógico (As-Is) para o patrimônio digital (To-Be) e o duplo impacto ESG e
                mercadológico.
              </p>
            </header>
            <div id="parte-problema">
              <Problem />
              <Solution />
            </div>
            <div id="parte-impacto">
              <Impact />
            </div>
          </div>
        </section>

        {/* ATO 03 — Para Quem Construímos: As 3 Personas (#tema-pessoas) */}
        <section className="project-theme" id="tema-pessoas">
          <div className="project-theme__inner">
            <header className="project-theme__heading">
              <span className="eyebrow">03 / Para Quem Construímos · Seção 2</span>
              <h2>
                As três personas <em>da HarmonIA.</em>
              </h2>
              <p>
                Perfis reais de uso diário, compra pragmática e criação de conteúdo que justificam
                cada módulo e regra de negócio do produto.
              </p>
            </header>
            <div className="document-content document-content--embedded" id="personas">
              <PersonasContent />
            </div>
          </div>
        </section>

        {/* ATO 04 — Modelo de Negócio, Viabilidade Financeira e Cronograma (#tema-negocio) */}
        <section className="project-theme" id="tema-negocio">
          <div className="project-theme__inner">
            <header className="project-theme__heading">
              <span className="eyebrow">04 / Modelo de Negócio, Viabilidade e Cronograma · Seção 6</span>
              <h2>
                Sustentabilidade financeira e <em>execução em 24 semanas.</em>
              </h2>
              <p>
                Monetização Freemium e afiliação B2B2C (C&amp;A e Lojas Renner), comparativo entre
                custo de mercado (Cenário A) e realidade do TCC (Cenário B), cronograma e memória
                de cálculo do break-even.
              </p>
            </header>
            <Plans />
            <div className="document-content document-content--embedded">
              <InvestmentContent />
            </div>
          </div>
        </section>

        {/* ATO 05 — A Experiência do Produto: Os 6 Módulos do MVP (#tema-experiencia) */}
        <section className="project-theme" id="tema-experiencia">
          <div className="project-theme__inner">
            <header className="project-theme__heading">
              <span className="eyebrow">05 / A Experiência do Produto · Seção 3</span>
              <h2>
                Os seis módulos <em>unificados do MVP.</em>
              </h2>
              <p>
                Da análise morfocromática e digitalização em nuvem ao inventário analítico, motor
                de combinações, provador em Realidade Aumentada, feed comunitário e afiliação.
              </p>
            </header>
            <div id="parte-app">
              <HowItWorks />
              <div className="document-content document-content--embedded">
                <ProductContent />
              </div>
            </div>
          </div>
        </section>

        {/* ATO 06 — O Diferencial Científico e Tecnológico: Motor IHE & Arquitetura SOA (#tema-tecnologia) */}
        <section className="project-theme" id="tema-tecnologia">
          <div className="project-theme__inner">
            <header className="project-theme__heading">
              <span className="eyebrow">06 / Diferencial Científico e Tecnológico · Seção 5</span>
              <h2>
                Motor matemático IHE e <em>arquitetura SOA.</em>
              </h2>
              <p>
                As equações multivariadas no espaço CIE L*a*b* e pgvector aliadas à infraestrutura
                desacoplada em nuvem AWS com Flutter, FastAPI e Lambda.
              </p>
            </header>
            <Technology />
            <div className="document-content document-content--embedded">
              <ArchitectureContent />
            </div>
          </div>
        </section>

        {/* ATO 07 — Engenharia de Software: Requisitos (RF, RNF) e Regras de Negócio (RN) (#tema-requisitos) */}
        <section className="project-theme" id="tema-requisitos">
          <div className="project-theme__inner">
            <header className="project-theme__heading">
              <span className="eyebrow">07 / Engenharia de Software · Seção 4</span>
              <h2>
                Requisitos, qualidade e <em>regras de negócio.</em>
              </h2>
              <p>
                Os quatro pilares de confiança integrados aos 17 Requisitos Funcionais, 6
                Requisitos Não Funcionais e 5 Regras de Negócio do MVP.
              </p>
            </header>
            <div className="document-content document-content--embedded">
              <RequirementsContent />
            </div>
          </div>
        </section>

        {/* ATO 08 — Referências, Equipe e Chancela Acadêmica FECAP (#tema-institucional) */}
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
