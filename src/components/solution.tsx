import { Camera, ScanSearch, Sparkles } from "lucide-react";
import { PinnedStory } from "@/components/pinned-story";
import { ProductFeatureShowcase } from "@/components/product-feature-showcase";
import { ScrollReveal } from "@/components/scroll-reveal";

const productPillars = [
  {
    number: "01",
    icon: Camera,
    label: "Digitalização Inteligente",
    title: "Segmentação semântica e remoção de fundo com 1 clique.",
    text: "O usuário fotografa suas roupas e nosso pipeline em nuvem remove cenários domésticos (cabides, camas, paredes) automaticamente, extraindo cor predominante no espaço CIE L*a*b*, categoria, tecido e formalidade para estruturar um patrimônio digital ativo.",
  },
  {
    number: "02",
    icon: Sparkles,
    label: "Consultoria Diária por IA",
    title: "Recomendações orientadas a contexto, clima e ocasiões.",
    text: "Todas as manhãs, a HarmonIA cruza o acervo disponível com a telemetria meteorológica local, a ocasião do dia, o biótipo corporal e a cartela de colorimetria pessoal — eliminando a sobrecarga cognitiva e reativando peças ociosas (reduzindo o Custo por Uso).",
  },
  {
    number: "03",
    icon: ScanSearch,
    label: "Paridade no PDV & Provador AR",
    title: "Validação instantânea na arara antes de passar no caixa.",
    text: "Na loja física, o usuário aponta a câmera para uma peça na arara ou no provador e descobre em tempo real a harmonia matemática com as roupas que já possui em casa, visualizando o caimento no “Espelho Inteligente” em Realidade Aumentada.",
  },
];

export function Solution() {
  return (
    <section id="solucao" className="scroll-mt-20">
      <PinnedStory
        mode="closet"
        eyebrow="03 / A Solução & Produto · HarmonIA: Do Físico ao Ativo Digital"
        transitionQuote="“Para eliminar essa fricção no exato momento da decisão, criamos a HarmonIA.”"
        title="Três pilares que conectam a rotina em casa à compra assertiva na loja."
        autoPlay
        chapters={[
          {
            number: "01",
            title: "Digitalização Inteligente com 1 clique",
            text: "Segmentação semântica e remoção automática de fundo transformam fotos rápidas em um inventário digital padronizado, indexado por cores CIE L*a*b*, modelagem e Custo por Uso.",
          },
          {
            number: "02",
            title: "Consultoria Diária por IA (Contexto & Clima)",
            text: "Sugestões de looks diários que cruzam clima em tempo real, agenda do usuário e compensação morfológica para colocar todo o guarda-roupa em rotação.",
          },
          {
            number: "03",
            title: "Paridade no Ponto de Venda & Provador AR",
            text: "Aponte o celular para uma peça na loja física e descubra imediatamente quantas combinações ela destrava com as roupas que você já tem em casa antes de passar no caixa.",
          },
        ]}
      />

      <div className="solution-justification">
        <div className="solution-justification__inner">
          {productPillars.map(({ number, icon: Icon, label, title, text }, index) => (
            <ScrollReveal key={number} delay={index * 0.08}>
              <article className="solution-pillar-card">
                <div className="solution-pillar-card__top">
                  <span>
                    {number} / {label}
                  </span>
                  <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Interactive Product Showcases (Styling, In-store Parity, AR Mirror) */}
        <div className="mx-auto mt-8 w-[min(calc(100%-32px),1360px)] sm:w-[min(calc(100%-80px),1360px)]">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <ProductFeatureShowcase variant="styling" />
            <ProductFeatureShowcase variant="parity" />
            <ProductFeatureShowcase variant="mirror" />
          </div>
        </div>
      </div>
    </section>
  );
}
