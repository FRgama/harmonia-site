import { AlertCircle, ArrowUpRight, ChartNoAxesCombined, ShoppingBag } from "lucide-react";

const marketMetrics = [
  { value: "R$ 294,8 bi", label: "Varejo de vestuário em 2024 · 6,17 bilhões de peças" },
  { value: "R$ 314,9 bi", label: "Projeção para 2025 · 6,4 bilhões de peças" },
  { value: "≈ R$ 396 bi", label: "Vestuário somado ao segmento de calçados" },
  { value: "20%–40%", label: "Faixa de devoluções citada para moda on-line" },
];

const marketTrends = [
  {
    number: "01",
    title: "Consumo consciente e economia circular",
    text: "A baixa rotação do acervo e o interesse por escolhas mais racionais abrem espaço para medir custo por uso, resgatar peças esquecidas e facilitar a circulação de itens ociosos.",
  },
  {
    number: "02",
    title: "Colorimetria mais acessível",
    text: "A popularidade da análise de cores nas redes sociais contrasta com o preço indicado no documento para uma consultoria presencial: de R$ 500 a R$ 1.800 por atendimento, sem suporte cotidiano.",
  },
  {
    number: "03",
    title: "Personalização e devoluções no varejo",
    text: "O documento estima devoluções gerais do e-commerce entre 12% e 20%, e de moda entre 20% e 40%. Validar cor, caimento e versatilidade antes da compra pode reduzir atrito e arrependimento.",
  },
];

const marketScopes = [
  {
    name: "Mercado Total Endereçável",
    label: "TAM",
    metric: "R$ 314,9 bi / ano",
    text: "Varejo nacional de vestuário projetado para 2025, além de mercados adjacentes de consultoria de imagem, apps de estilo e inteligência para a cadeia têxtil. O recorte demográfico amplo considera mais de 110 milhões de brasileiros conectados.",
  },
  {
    name: "Mercado Disponível Endereçável",
    label: "SAM",
    metric: "14–18 milhões",
    text: "Estimativa de consumidores de 16 a 35 anos em regiões metropolitanas, com acesso a smartphones e consumo recorrente de moda, somada a varejistas e marcas que podem usar inteligência pós-compra.",
  },
  {
    name: "Mercado Acessível Inicial",
    label: "SOM",
    metric: "10 mil → 50 mil MAU",
    text: "Meta projetada para os primeiros 12–24 meses, começando por São Paulo e Salvador. O documento estima cerca de R$ 116,5 mil anuais em receita B2C e afiliação a 10 mil MAU e mais de R$ 580 mil a 50 mil MAU, próximo de 0,35% do SAM.",
  },
];

const comparison = [
  ["Digitalização com remoção de fundo por IA", "Sim", "Sim", "Sim", "Não"],
  ["Colorimetria CIE L*a*b* e análise morfológica", "Sim", "Não", "Não", "Não"],
  ["Combinação estilística contextual e matemática", "Sim", "Parcial", "Básico", "Não"],
  ["Paridade no provador físico e Realidade Aumentada", "Sim", "Não", "Não", "Não"],
  [
    "Feed comunitário com filtros por biótipo e cartela",
    "Sim",
    "Básico",
    "Sim, sem filtro técnico",
    "Parcial, sem filtro técnico",
  ],
  ["Inteligência pós-compra localizada para o varejo", "Sim", "Não", "Não", "Não"],
];

const competitorNotes = [
  {
    label: "Concorrência direta · Acloset",
    text: "Aplicativo internacional de armário digital, com remoção de fundo e marcação inicial de atributos. O documento aponta limite gratuito de 100 peças e ausência de colorimetria científica, paridade em provadores físicos com AR e integração localizada com varejistas brasileiros.",
  },
  {
    label: "Concorrência direta · Whering",
    text: "Plataforma britânica gratuita, reconhecida por recursos visuais e comunitários. A análise do documento destaca combinações mais simples, sem ponderação cromática e morfológica, e parcerias concentradas no mercado europeu.",
  },
  {
    label: "Alternativas indiretas",
    text: "Pinterest, Instagram e TikTok inspiram sem conexão com o acervo real; consultorias presenciais não oferecem suporte diário; opiniões por mensagem são subjetivas; e provadores virtuais isolados tendem a focar tamanho dentro de uma única loja.",
  },
];

export function MarketAnalysis() {
  return (
    <section id="analise-mercado" className="market-analysis-section">
      <div className="document-section-heading">
        <span className="eyebrow">Seção 4 · Mercado e posicionamento competitivo</span>
        <h2 className="display-title">
          Um setor em transformação. <em>Uma jornada ainda desconectada.</em>
        </h2>
        <p>
          Panorama, dimensionamento de mercado e benchmarking conforme as estimativas reunidas
          na documentação do produto.
        </p>
      </div>

      <section id="panorama-mercado" aria-label="Panorama do setor de moda">
        <div className="market-metrics">
          {marketMetrics.map(({ value, label }) => (
            <article key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>

        <div className="market-trends">
          {marketTrends.map(({ number, title, text }) => (
            <article className="market-card" key={number}>
              <span>{number} / Tendência</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="dimensionamento-mercado" className="market-scope-section">
        <div className="document-section-heading">
          <span className="eyebrow">4.2 / Dimensionamento de mercado</span>
          <h3>Da oportunidade ampla <em>ao alcance inicial.</em></h3>
        </div>
        <div className="market-scopes">
          {marketScopes.map(({ name, label, metric, text }) => (
            <article className="market-scope-card" key={label}>
              <div>
                <span>{label}</span>
                <ChartNoAxesCombined size={18} aria-hidden="true" />
              </div>
              <h4>{name}</h4>
              <strong>{metric}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="concorrencia" className="market-competition">
        <div className="document-section-heading">
          <span className="eyebrow">4.3 &amp; 4.4 / Concorrência e benchmarking</span>
          <h3>O diferencial está <em>na jornada completa.</em></h3>
          <p>
            O comparativo abaixo resume a análise do documento: Acloset e Whering atuam como
            concorrentes diretos; redes visuais e serviços fragmentados atendem partes isoladas
            da experiência.
          </p>
        </div>

        <div className="market-table-scroll" role="region" aria-label="Matriz comparativa de concorrentes" tabIndex={0}>
          <table className="market-table">
            <thead>
              <tr>
                <th scope="col">Critério</th>
                <th scope="col">HarmonIA</th>
                <th scope="col">Acloset</th>
                <th scope="col">Whering</th>
                <th scope="col">Pinterest e redes</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(([criterion, ...values]) => (
                <tr key={criterion}>
                  <th scope="row">{criterion}</th>
                  {values.map((value, index) => (
                    <td
                      className={index === 0 ? "market-table__highlight" : undefined}
                      key={`${criterion}-${index}`}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="market-competitor-notes">
          {competitorNotes.map(({ label, text }) => (
            <article key={label}>
              <span>{label}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <aside className="market-positioning">
          <div>
            <ShoppingBag size={19} aria-hidden="true" />
            <h4>Posicionamento HarmonIA</h4>
          </div>
          <p>
            A proposta combina recomendações morfocromáticas, apoio no provador físico e
            integração com o varejo brasileiro — conectando inspiração, acervo e decisão de
            compra em uma única jornada.
          </p>
          <a href="#tema-experiencia">
            Conheça os módulos do MVP <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </aside>
      </section>

      <aside className="document-note document-note--wide market-note">
        <AlertCircle size={17} aria-hidden="true" />
        <p>
          <strong>Nota sobre as estimativas:</strong> valores de mercado, devoluções e metas de
          aquisição reproduzem as premissas da documentação (fontes citadas: ABIT, IEMI,
          ABVTEX e McKinsey/Business of Fashion, 2025). Devem ser validados com as fontes e
          cotações vigentes antes de decisões comerciais.
        </p>
      </aside>
    </section>
  );
}
