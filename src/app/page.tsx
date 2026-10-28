import type { Metadata } from "next";
import { Community } from "@/components/community";
import { FinalCta } from "@/components/final-cta";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { HarmonyIndex } from "@/components/harmony-index";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Impact } from "@/components/impact";
import { PinnedStory } from "@/components/pinned-story";
import { Plans } from "@/components/plans";
import { Problem } from "@/components/problem";
import { Requirements } from "@/components/requirements";
import { SiteHeader } from "@/components/site-header";
import { Solution } from "@/components/solution";
import { Technology } from "@/components/technology";
import { ArchitectureContent } from "@/components/topic-content/architecture";
import { InvestmentContent } from "@/components/topic-content/investment";
import { PersonasContent } from "@/components/topic-content/personas";
import { ProductContent } from "@/components/topic-content/product";
import { RequirementsContent } from "@/components/topic-content/requirements";

export const metadata: Metadata = {
  title: "HarmonIA — Projeto, produto e documentação",
  description:
    "Conheça a visão, as funcionalidades, o público, os requisitos, a tecnologia e a viabilidade da HarmonIA em uma única página.",
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1}>
        <Hero />

        <section className="project-theme" id="tema-visao">
          <div className="project-theme__inner">
            <header className="project-theme__heading">
              <span className="eyebrow">01 / Direção do projeto</span>
              <h2>Visão e <em>propósito.</em></h2>
              <p>O problema que dá origem à HarmonIA, a proposta do produto e o impacto que pretende gerar.</p>
            </header>
            <div id="parte-problema"><Problem /><Solution /></div>
            <div id="parte-impacto"><Impact /></div>
          </div>
        </section>

        <section className="project-theme" id="tema-experiencia">
          <div className="project-theme__inner">
            <header className="project-theme__heading">
              <span className="eyebrow">02 / Jornada do produto</span>
              <h2>Experiência e <em>funcionalidades.</em></h2>
              <p>Da configuração do perfil às recomendações, conheça a experiência prevista e os módulos do MVP.</p>
            </header>
            <div id="parte-app">
              <HowItWorks />
              <Features />
              <PinnedStory
                mode="outfit"
                eyebrow="IA / Look em composição"
                title="Peças diferentes. Uma leitura só sua."
                chapters={[
                  { number: "01", title: "Escolha o ponto de partida", text: "A IA seleciona uma peça do seu acervo para começar o look." },
                  { number: "02", title: "Encontre uma camada", text: "Cor, proporção e ocasião ajudam a construir uma combinação coerente." },
                  { number: "03", title: "Ajuste ao seu estilo", text: "Cada peça acrescenta uma possibilidade, sem perder o que faz o look ser seu." },
                  { number: "04", title: "Look pronto para você", text: "Uma combinação completa, pensada para o seu corpo e para o seu dia." },
                ]}
              />
              <HarmonyIndex />
              <div className="document-content document-content--embedded">
                <ProductContent
                  moduleIds={["onboarding", "inventario", "combinacoes"]}
                  showCallouts={false}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="project-theme" id="tema-negocio">
          <div className="project-theme__inner">
            <header className="project-theme__heading">
              <span className="eyebrow">03 / Compra e sustentabilidade financeira</span>
              <h2>Compras e modelo de <em>negócio.</em></h2>
              <p>Decisões de compra com contexto, parcerias de varejo e as fontes de receita previstas para a plataforma.</p>
            </header>
            <div className="document-content document-content--embedded">
              <ProductContent
                moduleIds={["provador", "afiliacao"]}
                showIntroduction={false}
                showCallouts={false}
              />
            </div>
            <PinnedStory
              mode="compare"
              eyebrow="COMPRA / Paridade de estilo"
              title="Uma nova peça. Mil conexões com o que você já tem."
              chapters={[
                { number: "01", title: "Você encontra algo", text: "Uma peça chama atenção na loja. Antes da decisão, entra em cena o seu acervo." },
                { number: "02", title: "A HarmonIA compara", text: "Cor, estilo e combinações possíveis são cruzados com suas peças." },
                { number: "03", title: "A escolha ganha contexto", text: "Entenda como a novidade conversa com seu armário antes de levar." },
              ]}
            />
            <PinnedStory
              mode="ar"
              eyebrow="AR / Provador em realidade aumentada"
              title="Experimente a possibilidade, antes do provador."
              chapters={[
                { number: "01", title: "A câmera reconhece", text: "A realidade aumentada enquadra a peça e entende o espaço à sua volta." },
                { number: "02", title: "Você se vê na combinação", text: "Visualize proporção e presença no seu corpo, com contexto do seu estilo." },
              ]}
            />
            <Plans />
          </div>
        </section>

        <section className="project-theme" id="tema-pessoas">
          <div className="project-theme__inner">
            <header className="project-theme__heading">
              <span className="eyebrow">04 / Público e rede</span>
              <h2>Pessoas e <em>comunidade.</em></h2>
              <p>Os perfis que orientam as decisões de produto e a dimensão social da experiência.</p>
            </header>
            <div className="document-content document-content--embedded" id="personas">
              <PersonasContent />
            </div>
            <ProductContent
              moduleIds={["comunidade"]}
              showIntroduction={false}
              showCallouts={false}
            />
            <div id="parte-comunidade"><Community /></div>
          </div>
        </section>

        <section className="project-theme" id="tema-requisitos">
          <div className="project-theme__inner">
            <header className="project-theme__heading">
              <span className="eyebrow">05 / Critérios e confiança</span>
              <h2>Requisitos e <em>confiança.</em></h2>
              <p>O que o sistema deve oferecer, quais critérios de qualidade deve cumprir e como protege as pessoas.</p>
            </header>
            <div className="document-content document-content--embedded">
              <RequirementsContent />
            </div>
            <div id="privacidade"><Requirements /></div>
          </div>
        </section>

        <section className="project-theme" id="tema-tecnologia">
          <div className="project-theme__inner">
            <header className="project-theme__heading">
              <span className="eyebrow">06 / Fundamentos de implementação</span>
              <h2>Tecnologia, viabilidade e <em>documentação.</em></h2>
              <p>Arquitetura, inteligência do produto, estimativas e planejamento reunidos em uma seção.</p>
            </header>
            <div className="document-content document-content--embedded">
              <ArchitectureContent />
              <Technology />
              <InvestmentContent />
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}