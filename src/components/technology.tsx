import type { CSSProperties } from "react";
import { Cloud, ScanFace, Sparkles, SwatchBook, Waypoints } from "lucide-react";
import { HarmonyIndex } from "@/components/harmony-index";
import { ScrollReveal } from "@/components/scroll-reveal";

const harmonyFactors = [
  {
    number: "01 · w_c = 0.35",
    symbol: "S_cor (35%)",
    name: "Harmonia Cromática · CIE L*a*b*",
    note: "Proximidade euclidiana ΔE*ab entre os tons da peça e a cartela do usuário.",
    score: "94%",
    icon: SwatchBook,
  },
  {
    number: "02 · w_m = 0.25",
    symbol: "S_bio (25%)",
    name: "Compensação Morfológica",
    note: "Equilíbrio proporcional dos cortes frente aos 5 biótipos corporais.",
    score: "89%",
    icon: ScanFace,
  },
  {
    number: "03 · w_o = 0.20",
    symbol: "S_ocasion (20%)",
    name: "Contexto e Clima",
    note: "Adequação formal ao evento combinada à telemetria meteorológica.",
    score: "95%",
    icon: Cloud,
  },
  {
    number: "04 · w_v = 0.20",
    symbol: "S_cos (20%)",
    name: "Similaridade Vetorial · pgvector",
    note: "Cosseno entre o vetor latente do usuário (u) e o vetor do look (v_look).",
    score: "91%",
    icon: Waypoints,
  },
];

export function Technology() {
  return (
    <section id="ihe" className="technology-section">
      <div className="technology-section__inner">
        <ScrollReveal>
          <div className="technology-section__heading">
            <div>
              <span className="eyebrow">5.3 / Motor de Cálculo do Índice de Harmonia Estética (IHE)</span>
              <h2 className="display-title">
                Modelagem determinística <em>multivariada.</em>
              </h2>
            </div>
            <p>
              Para tornar a coordenação de roupas objetiva e reprodutível, o núcleo analítico da
              HarmonIA combina ciência colorimétrica, geometria morfológica, telemetria climática e
              álgebra vetorial em uma única métrica normalizada.
            </p>
          </div>
        </ScrollReveal>

        <div className="technology-section__ihe">
          <ScrollReveal className="technology-section__factors">
            <div className="technology-section__label">
              <Sparkles size={14} aria-hidden="true" />
              <span>QUATRO DIMENSÕES PONDERADAS · SOMA DOS PESOS = 1.00</span>
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

        <div className="ihe-math-panel">
          <div className="ihe-math-panel__eq-main">
            <span className="ihe-math-panel__tag">Equação 1 · Fórmula Geral Multivariada</span>
            <code className="ihe-formula-block">
              IHE = w_c · S_cor + w_m · S_bio + w_o · S_ocasion + w_v · S_cos
            </code>
            <p>
              Condição estrita de normalização:{" "}
              <code>w_c + w_m + w_o + w_v = 1.0</code> — calibrada em produção com{" "}
              <strong>w_c = 0.35</strong> (35%), <strong>w_m = 0.25</strong> (25%),{" "}
              <strong>w_o = 0.20</strong> (20%) e <strong>w_v = 0.20</strong> (20%).
            </p>
          </div>

          <div className="ihe-math-grid">
            <article className="ihe-math-card">
              <span className="ihe-math-card__index">Variável 1 · S_cor (35%) · Espaço CIE L*a*b*</span>
              <h3>Distância Euclidiana Perceptualmente Uniforme</h3>
              <p>
                Desenvolvido pela <strong>Comissão Internacional de Iluminação (CIE)</strong>, o
                espaço tridimensional <strong>CIE L*a*b*</strong> espelha fielmente a percepção
                visual humana nos três eixos — luminosidade (<strong>L*</strong>), gradiente
                verde-vermelho (<strong>a*</strong>) e gradiente azul-amarelo (<strong>b*</strong>) —
                superando as distorções de dispositivos dos padrões RGB e CMYK.
              </p>
              <div className="ihe-math-card__formulas">
                <div>
                  <small>Equação 2a · Distância cromática euclidiana</small>
                  <code>ΔE*ab = √[ (L*i - L*k)² + (a*i - a*k)² + (b*i - b*k)² ]</code>
                </div>
                <div>
                  <small>Equação 2b · Conversão exponencial normalizada (σ_c = 18.0)</small>
                  <code>S_cor = exp( -ΔE*ab / σ_c )   onde   σ_c = 18.0</code>
                </div>
              </div>
            </article>

            <article className="ihe-math-card">
              <span className="ihe-math-card__index">Variável 4 · S_cos (20%) · PostgreSQL + pgvector</span>
              <h3>Similaridade de Cosseno no Espaço Latente</h3>
              <p>
                Calculada diretamente no motor do banco de dados via extensão{" "}
                <strong>pgvector</strong>, compara o ângulo entre o vetor latente de preferências
                do perfil do usuário (<strong>u</strong>, retroalimentado pelos feedbacks{" "}
                <code>RF13</code>) e o vetor multidimensional resultante das peças que compõem o
                look (<strong>v_look</strong>).
              </p>
              <div className="ihe-math-card__formulas">
                <div>
                  <small>Equação 3 · Similaridade vetorial de cosseno</small>
                  <code>S_cos = (u · v_look) / ( ||u|| · ||v_look|| )</code>
                </div>
                <div>
                  <small>Limiar de recomendação em tempo real (0% a 100%)</small>
                  <code>IHE ≥ 75%  →  “Looks Fortemente Recomendados”</code>
                </div>
              </div>
            </article>

            <article className="ihe-math-card ihe-math-card--compact">
              <span className="ihe-math-card__index">Variável 2 · S_bio (25%)</span>
              <h3>Matriz de Compensação Morfológica</h3>
              <p>
                Avalia matematicamente se as modelagens, comprimentos e linhas estruturais das
                peças equilibram proporcionalmente a silhueta corporal mapeada no onboarding:{" "}
                <strong>Ampulheta, Retângulo, Oval, Triângulo ou Triângulo Invertido</strong>.
              </p>
            </article>

            <article className="ihe-math-card ihe-math-card--compact">
              <span className="ihe-math-card__index">Variável 3 · S_ocasion (20%)</span>
              <h3>Adequação Contextual e Restrição Meteorológica</h3>
              <p>
                Pondera o grau de formalidade intrínseco das peças frente ao evento informado
                (corporativo, casual, gala) cruzado com a telemetria climática em tempo real
                (temperatura e precipitação via API meteorológica — <code>RF16</code>).
              </p>
            </article>
          </div>
        </div>

        <div className="technology-section__foot">
          <span>CIE L*a*b* · ΔE*ab · σ_c = 18.0 · Similaridade de Cosseno (pgvector)</span>
          <span>Pontuação 0%–100% · IHE ≥ 75%: Looks Fortemente Recomendados</span>
        </div>
      </div>
    </section>
  );
}
