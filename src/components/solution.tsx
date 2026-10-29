import { Coins, Database, SwatchBook } from "lucide-react";
import { PinnedStory } from "@/components/pinned-story";
import { ScrollReveal } from "@/components/scroll-reveal";

const justificationPillars = [
  {
    number: "01",
    icon: Database,
    label: "Patrimônio Têxtil Estruturado",
    title: "Base de dados relacional e vetorial fidedigna.",
    text: "A HarmonIA estrutura uma base relacional e vetorial fidedigna do patrimônio têxtil do usuário, conectando posse física e eficiência de uso por meio de imagens limpas, metadados taxonômicos e embeddings multidimensionais.",
  },
  {
    number: "02",
    icon: Coins,
    label: "Otimização Financeira",
    title: "Custo por Uso (CPU) e frequência de utilização.",
    text: "Rotinas analíticas calculam métricas de Custo por Uso (CPU) e frequência de utilização, combatendo a perda financeira invisível decorrente de compras impulsivas e propondo novas coordenações que reativam peças esquecidas.",
  },
  {
    number: "03",
    icon: SwatchBook,
    label: "Rigor Científico",
    title: "Ciência colorimétrica CIE L*a*b* e compensação morfológica.",
    text: "Para erradicar a subjetividade, a consultoria apoia-se no espaço perceptualmente uniforme CIE L*a*b* (eixos L*, a* e b*) aliado a matrizes morfológicas e similaridade vetorial no provador.",
  },
];

export function Solution() {
  return (
    <>
      <PinnedStory
        id="solucao"
        mode="closet"
        eyebrow="1.2 / Justificativa da Solução (To-Be)"
        title="Do armário físico a um patrimônio têxtil inteligente."
        chapters={[
          {
            number: "01",
            title: "Digitalização livre de ruído visual",
            text: "Suas peças são fotografadas e segmentadas automaticamente em nuvem, removendo fundos para compor um catálogo limpo e categorizado.",
          },
          {
            number: "02",
            title: "Base relacional e vetorial do acervo",
            text: "Cores em CIE L*a*b*, modelagens, tecidos e vetores de estilo estruturam uma representação fidedigna do seu patrimônio têxtil.",
          },
          {
            number: "03",
            title: "Custo por Uso (CPU) e reativação",
            text: "Métricas de frequência de utilização e Custo por Uso revelam itens subutilizados e destravam combinações que maximizam o capital já investido.",
          },
        ]}
      />

      <div className="solution-justification">
        <div className="solution-justification__inner">
          {justificationPillars.map(({ number, icon: Icon, label, title, text }, index) => (
            <ScrollReveal key={number} delay={index * 0.08}>
              <article className="solution-pillar-card">
                <div className="solution-pillar-card__top">
                  <span>{number} / {label}</span>
                  <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </>
  );
}
