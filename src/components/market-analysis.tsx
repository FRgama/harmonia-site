import { Compass, Globe2, MapPin, TrendingUp, Users } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SubtleStarfield } from "@/components/subtle-starfield";

const marketScopes = [
  {
    code: "TAM · Mercado Total Endereçável",
    title: "Varejo Nacional de Vestuário e Calçados",
    metric: "R$ 314,9 Bilhões",
    unit: "faturamento anual combinado no Brasil (vestuário + calçados)",
    description:
      "Mais de R$ 285,3 bilhões em vestuário (6,44 bilhões de peças/ano) somados a R$ 29,6 bilhões em calçados — um dos maiores ecossistemas têxteis do mundo em transição para omnichannel.",
    detail: "Fontes: IEMI Inteligência de Mercado · ABVTEX · ABIT",
    icon: Globe2,
  },
  {
    code: "SAM · Mercado Disponível Atendível",
    title: "Gerações Z & Millennials Urbanos Digitalizados",
    metric: "18M+ Consumidores",
    unit: "jovens urbanos de classes média e média-alta (~R$ 6k renda ref.)",
    description:
      "Recorte demográfico de consumidores hiperconectados (18 a 39 anos) nos grandes centros urbanos brasileiros, com hábito recorrente de compra omnichannel e alta receptividade a consultoria por IA.",
    detail: "Foco comportamental: smartphones premium/intermediários e varejo de shopping/e-commerce",
    icon: Users,
  },
  {
    code: "SOM · Mercado Inicial Capturável",
    title: "Meta de Tração nos Polos São Paulo & Salvador",
    metric: "10k a 50k MAU",
    unit: "usuários ativos mensais nos primeiros 12 a 24 meses",
    description:
      "Estratégia de entrada hiperlocalizada nas capitais São Paulo e Salvador, alavancando densidade de shopping centers, criadores de moda e parcerias B2B2C para atingir o break-even já nos primeiros 10k MAU.",
    detail: "Break-even operacional já no piso da meta (10.000 MAU)",
    icon: MapPin,
    highlight: true,
  },
];

const behavioralDrivers = [
  {
    tag: "TRANSIÇÃO GERACIONAL",
    title: "Do fast-fashion impulsivo ao guarda-roupa inteligente",
    text: "Consumidores da Geração Z e Millennials buscam maximizar o retorno sobre cada peça adquirida (Custo por Uso), exigindo ferramentas visuais que conectem inspiração digital e acervo real.",
  },
  {
    tag: "URGÊNCIA DO VAREJO",
    title: "Pressão por margem e redução de logística reversa",
    text: "Grandes varejistas nacionais enfrentam CAC crescente e devoluções de 20% a 40% no digital. A validação pré-compra da HarmonIA ataca diretamente o maior ralo financeiro do setor.",
  },
  {
    tag: "DENSIDADE REGIONAL",
    title: "São Paulo + Salvador como plataforma de lançamento",
    text: "Combinando o maior PIB de consumo do país (SP) com um polo criativo e solar de altíssimo engajamento digital (SSA), validamos o algoritmo em climas e perfis demográficos complementares.",
  },
];

export function MarketAnalysis() {
  return (
    <section className="market-section" id="mercado">
      <div className="market-section__inner">
        <ScrollReveal>
          <header className="market-section__header">
            <span className="eyebrow">05 / Oportunidade de Mercado · TAM, SAM &amp; SOM</span>
            <p className="mb-3 mt-4 border-l-2 border-[var(--coral)] pl-3.5 font-(family-name:--serif) text-[18px] sm:text-[22px] italic text-[var(--coral)]">
              “Essa inteligência estética atende a um mercado massivo em plena transição
              comportamental.”
            </p>
            <h2 className="display-title">
              Um oceano de <em>R$ 314,9 bilhões</em> pronto para inteligência de acervo.
            </h2>
            <p>
              Dimensionamos nossa oportunidade combinando dados setoriais oficiais (IEMI, ABVTEX e
              ABIT) com um recorte demográfico cirúrgico nas classes média e média-alta urbanas —
              onde a dor da ociosidade de armário encontra alto poder de conversão B2C e B2B2C.
            </p>
          </header>
        </ScrollReveal>

        {/* TAM / SAM / SOM Cards */}
        <div className="market-scope-grid">
          {marketScopes.map(
            ({ code, title, metric, unit, description, detail, icon: Icon, highlight }, index) => (
              <ScrollReveal key={code} delay={index * 0.08}>
                <article
                  className={`market-scope-card ${
                    highlight ? "market-scope-card--som subtle-starfield" : ""
                  }`}
                >
                  {highlight && <SubtleStarfield count={15} />}
                  <div>
                    <span>{code}</span>
                    <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h4>{title}</h4>
                  <strong>{metric}</strong>
                  <span className="market-scope-card__unit">{unit}</span>
                  <p>{description}</p>
                  <footer className="mt-3 border-t border-current/15 pt-3 font-mono text-[10px] uppercase tracking-wider opacity-80">
                    {detail}
                  </footer>
                </article>
              </ScrollReveal>
            ),
          )}
        </div>

        {/* Behavioral Transition Drivers */}
        <ScrollReveal delay={0.14}>
          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {behavioralDrivers.map((driver) => (
              <article
                key={driver.tag}
                className="border border-[rgba(110,80,30,0.42)] bg-[#efe6d2] p-6 outline outline-1 -outline-offset-6 outline-[rgba(194,160,90,0.18)]"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--coral)]">
                    {driver.tag}
                  </span>
                  <TrendingUp size={15} className="text-[var(--coral)]" aria-hidden="true" />
                </div>
                <h3 className="mt-3 font-(family-name:--serif) text-[25px] font-medium leading-tight text-[var(--ink)]">
                  {driver.title}
                </h3>
                <p className="mt-2.5 mb-0 text-[13.5px] leading-relaxed text-[#5d5848]">
                  {driver.text}
                </p>
              </article>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
          <div className="market-synthesis subtle-starfield mt-8">
            <SubtleStarfield count={15} />
            <div>
              <span> TESE DE CAPTURA DE VALOR · GO-TO-MARKET</span>
              <h4>
                De 10.000 MAU iniciais em SP e Salvador para o padrão de inteligência de compra do
                varejo nacional.
              </h4>
            </div>
            <p>
              Ao capturar menos de 0,3% do nosso SAM qualificado (18M+ jovens digitalizados), a
              HarmonIA atinge 50.000 usuários ativos mensais, destravando efeito de rede para
              grandes varejistas parceiros com economia de escala em nuvem.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
