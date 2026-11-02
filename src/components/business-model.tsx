import {
  ArrowUpRight,
  CloudCog,
  Handshake,
  HeartHandshake,
  Smartphone,
  Store,
  UsersRound,
} from "lucide-react";

const channels = [
  ["Lojas de aplicativos", "App Store e Google Play para distribuição, atualizações e assinaturas."],
  ["Redes sociais visuais", "Instagram e TikTok para demonstrações, conteúdo e aquisição orgânica ou paga."],
  ["Criadores de moda", "Influenciadores e consultores de imagem para validação social e aquisição qualificada."],
  ["Comunidade in-app", "Feed próprio para compartilhar looks, descobrir combinações e ampliar retenção."],
  ["Afiliação B2B2C", "Links parametrizados para recomendações de produtos de varejistas parceiros."],
  ["Relacionamento B2B", "Contato comercial direto e eventos do setor têxtil para marcas e varejistas."],
];

const partners = [
  {
    icon: Store,
    title: "Varejistas e e-commerces",
    text: "C&A e Lojas Renner são parceiros prioritários de referência para recomendações afiliadas e integração de catálogos.",
  },
  {
    icon: CloudCog,
    title: "Nuvem e serviços tecnológicos",
    text: "AWS, serviços de clima e bibliotecas abertas dão suporte à infraestrutura, ao processamento visual e à operação inicial.",
  },
  {
    icon: Smartphone,
    title: "Distribuição móvel",
    text: "Apple App Store e Google Play viabilizam a publicação para iOS e Android e a gestão de assinaturas.",
  },
  {
    icon: UsersRound,
    title: "Criadores e entidades setoriais",
    text: "Consultores de imagem, criadores de conteúdo e entidades como a ABVTEX apoiam validação, comunidade e pautas de consumo consciente.",
  },
];

export function BusinessModel() {
  return (
    <section id="modelo-negocio-detalhado" className="business-model-section">
      <div className="document-section-heading">
        <span className="eyebrow">Seção 3 · Modelo de negócio</span>
        <h2 className="display-title">
          Valor para quem veste. <em>Inteligência para o setor.</em>
        </h2>
        <p>
          A proposta de negócio conecta consumidores, marcas e varejistas por meio de canais
          digitais, personalização e dados de uso tratados de forma agregada.
        </p>
      </div>

      <section id="proposta-valor" className="business-value-grid">
        <article className="business-value-card">
          <span>3.1.1 / Consumidor · B2C</span>
          <h3>Mais contexto para usar e comprar melhor.</h3>
          <p>
            Guarda-roupa digital com indicadores de rotação e custo por uso, personal styling
            orientado pelo IHE, perfil morfológico e colorimetria assistida, além de apoio de
            Realidade Aumentada no ponto de venda.
          </p>
        </article>
        <article className="business-value-card business-value-card--dark">
          <span>3.1.2 / Empresas · B2B</span>
          <h3>Dados de uso pós-compra para decisões melhores.</h3>
          <p>
            Indicadores agregados e anonimizados sobre combinações, ociosidade, preferências
            cromáticas, lacunas de acervo e aprovação no provador podem apoiar coleções,
            estoques e redução de trocas — sem comercializar dados pessoais identificáveis ou
            mídias privadas.
          </p>
        </article>
      </section>

      <section id="segmentos-clientes" className="business-audience">
        <div className="business-subheading">
          <span className="eyebrow">3.2 / Segmentos de clientes</span>
          <h3>Um produto híbrido <em>B2C e B2B.</em></h3>
        </div>
        <div className="business-audience-grid">
          <article>
            <UsersRound size={19} aria-hidden="true" />
            <h4>B2C · Consumidor final</h4>
            <p>
              Mulheres e homens de 16 a 35 anos, com fluência digital e interesse por moda,
              estilo e consumo consciente. O recorte prioriza metrópoles como São Paulo e
              Salvador e renda mensal de referência em torno de R$ 6 mil; inclui profissionais,
              criadores, comunidade LGBTQIAPN+ e pessoas que buscam praticidade.
            </p>
          </article>
          <article>
            <Store size={19} aria-hidden="true" />
            <h4>B2B · Varejo e indústria</h4>
            <p>
              Redes varejistas, e-commerces, marcas de confecção, birôs de estilo e indústrias
              têxteis interessadas em reduzir devoluções e usar dados agregados de uso,
              preferências e lacunas de guarda-roupa no planejamento de produtos e estoques.
            </p>
          </article>
        </div>
      </section>

      <section id="canais" className="business-channels">
        <div className="business-subheading">
          <span className="eyebrow">3.3 / Distribuição, comunicação e parcerias</span>
          <h3>Da descoberta <em>ao uso contínuo.</em></h3>
        </div>
        <div className="business-channel-grid">
          {channels.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="relacionamento" className="business-relationship">
        <div className="business-subheading">
          <span className="eyebrow">3.4 / Relacionamento com clientes</span>
          <h3>Assistência personalizada <em>e co-criação.</em></h3>
        </div>
        <div className="business-relationship-grid">
          <article>
            <HeartHandshake size={19} aria-hidden="true" />
            <h4>Autosserviço inteligente</h4>
            <p>
              O usuário cadastra seu acervo e consulta recomendações a qualquer momento. Os
              feedbacks de aprovação ou descarte refinam a personalização, enquanto notificações
              podem lembrar peças ociosas e sugerir looks conforme o clima.
            </p>
          </article>
          <article>
            <Handshake size={19} aria-hidden="true" />
            <h4>Engajamento e co-criação</h4>
            <p>
              O feed aproxima usuários e criadores por meio de looks, reações e moodboards
              privados, com busca por afinidade de biótipo e cartela cromática e controle de
              visibilidade do perfil.
            </p>
          </article>
        </div>
      </section>

      <section id="parcerias" className="business-partners">
        <div className="business-subheading">
          <span className="eyebrow">3.6 / Parcerias-chave</span>
          <h3>Uma rede para <em>crescer com foco.</em></h3>
        </div>
        <div className="business-partner-grid">
          {partners.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon size={19} aria-hidden="true" />
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="estrutura-custos" className="business-costs">
        <div>
          <span className="eyebrow">3.7.1 &amp; 3.7.2 / Estrutura de custos</span>
          <h3>Infraestrutura escalável, aquisição e sustentação.</h3>
          <p>
            Os custos recorrentes incluem RDS PostgreSQL/pgvector, processamento em Lambda,
            armazenamento S3 e distribuição CloudFront. Somam-se taxas das lojas de aplicativos,
            marketing e aquisição de clientes, domínio, conformidade LGPD e manutenção evolutiva.
          </p>
        </div>
        <a href="#operacao">
          Ver projeções por faixa de usuários e ponto de equilíbrio <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </section>
    </section>
  );
}
