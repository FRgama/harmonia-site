import { ArrowDownRight, Home, MessageCircleWarning, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const scenarios = [
  {
    tag: "Cenário Atual (As-Is) · Em Casa",
    icon: Home,
    title: "Sobrecarga cognitiva matinal e acervo invisível.",
    text: "Processos arcaicos e descentralizados geram a sensação crônica de “não ter o que vestir”. Sem domínio técnico sobre a própria colorimetria pessoal (harmonia cromática de pele, olhos e cabelos) e o biótipo corporal, o consumidor acumula peças compradas por impulso que são esquecidas após o primeiro uso.",
  },
  {
    tag: "Cenário Atual (As-Is) · Na Loja e Provador",
    icon: MessageCircleWarning,
    title: "Fotos no espelho do provador enviadas por WhatsApp.",
    text: "No instante crítico da compra em lojas físicas e shoppings, consumidores fotografam a si mesmos diante do espelho e enviam por WhatsApp a amigos e familiares, recebendo opiniões fragmentadas, demoradas e subjetivas sobre cor e caimento — sem conexão com o acervo que já possuem em casa.",
  },
  {
    tag: "Cenário Proposto (To-Be) · Plataforma HarmonIA",
    icon: Sparkles,
    title: "Acervo virtual estruturado, ciência cromática e paridade em tempo real.",
    text: "Captura fotográfica com segmentação automatizada e remoção de fundo cataloga cores, modelagens, tecidos e ocasiões. Um motor proprietário de IA cruza o inventário com a análise morfocromática do usuário e valida, via câmera e Realidade Aumentada (AR), a paridade exata de novas peças ainda no provador.",
    highlight: true,
  },
];

export function Problem() {
  return (
    <section className="problem-section">
      <div className="problem-section__inner">
        <div className="problem-section__copy">
          <ScrollReveal>
            <span className="eyebrow">1.1 / Diagnóstico de mercado e comportamento</span>
            <h2 className="display-title">
              Um setor bilionário. <em>Menos de um terço do armário em uso.</em>
            </h2>
            <p>
              Segundo dados da <strong>Associação Brasileira do Varejo Têxtil (ABVTEX, 2025)</strong>, o
              setor de vestuário no Brasil movimenta centenas de bilhões de reais anualmente, mas convive
              com gargalos estruturais de subutilização e desperdício expressivo: estudos comportamentais
              evidenciam que grande parte das pessoas utiliza regularmente <strong>menos de 1/3 do seu
              acervo de roupas</strong>, mantendo dezenas de peças ociosas no fundo do armário.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="problem-section__stats" aria-label="Proporção média de utilização do acervo pessoal segundo contexto ABVTEX 2025">
              <div className="problem-section__stat-head">
                <span>CONTEXTO ABVTEX (2025) · ACERVO DOMÉSTICO</span>
                <span>SUBUTILIZAÇÃO TÊXTIL</span>
              </div>
              <div className="problem-section__bar-row">
                <span>Peças utilizadas regularmente</span>
                <div><i className="problem-section__bar-used" /></div>
                <b>&lt; 1/3</b>
              </div>
              <div className="problem-section__bar-row">
                <span>Peças ociosas no fundo do armário</span>
                <div><i className="problem-section__bar-idle" /></div>
                <b>&gt; 2/3</b>
              </div>
              <div className="problem-section__hanger-line">
                <span>EM ROTAÇÃO</span>
                {Array.from({ length: 12 }, (_, index) => (
                  <i key={index} className={index < 4 ? "is-used" : ""} />
                ))}
                <span>SEM USO EFETIVO</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="problem-section__side" delay={0.18}>
          <div className="problem-section__index">
            1/3 <span>em uso</span>
          </div>
          <p>O primeiro passo não é comprar mais.</p>
          <a href="#solucao" className="inline-flex items-center gap-2 text-[11px] font-bold">
            Ver a transição As-Is → To-Be <ArrowDownRight size={15} aria-hidden="true" />
          </a>
        </ScrollReveal>
      </div>

      <div className="problem-scenarios">
        {scenarios.map(({ tag, icon: Icon, title, text, highlight }, index) => (
          <ScrollReveal key={tag} delay={0.08 * index}>
            <article className={`problem-scenario-card ${highlight ? "problem-scenario-card--tobe" : ""}`}>
              <div className="problem-scenario-card__top">
                <span>{tag}</span>
                <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
