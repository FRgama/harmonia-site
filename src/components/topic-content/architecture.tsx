import { ArrowDown, Cloud, Database, Layers3, LockKeyhole, Smartphone } from "lucide-react";
import { DocumentPage } from "@/components/document-page";

const layers = [
  {
    number: "01",
    name: "Visualização",
    icon: Smartphone,
    technology: "Flutter · Dart · API REST",
    description:
      "Aplicativo mobile para Android e iOS. Route 53 e CloudFront encaminham e distribuem conteúdo; a interface consome a API de forma assíncrona.",
  },
  {
    number: "02",
    name: "Lógica do produto",
    icon: Layers3,
    technology: "Python · FastAPI · Docker · AWS EC2 / App Runner",
    description:
      "Serviços desacoplados atendem as regras de negócio; o FastAPI é a API central e tarefas de processamento pesado podem rodar em AWS Lambda.",
  },
  {
    number: "03",
    name: "Identidade e acesso",
    icon: LockKeyhole,
    technology: "AWS Cognito · JWT · RBAC",
    description:
      "Gestão de contas, sessões e tokens de acesso, com controle de permissões por perfil.",
  },
  {
    number: "04",
    name: "Dados e mídias",
    icon: Database,
    technology: "Amazon RDS · PostgreSQL / pgvector · Amazon S3",
    description:
      "Dados relacionais e vetores no PostgreSQL; imagens em bucket privado no S3, acessadas por URLs pré-assinadas temporárias.",
  },
  {
    number: "05",
    name: "Processamento e distribuição",
    icon: Cloud,
    technology: "AWS Lambda · CloudFront · Route 53",
    description:
      "Funções acionadas por eventos podem processar segmentação e atributos visuais sem bloquear a API. A CDN aproxima mídia da pessoa usuária.",
  },
];

const technologies = [
  ["App mobile", "Flutter e Dart", "Base unificada com compilação nativa para Android e iOS."],
  ["API e backend", "Python e FastAPI", "Respostas assíncronas, documentação de API e integração com modelos de IA."],
  ["Processamento", "AWS Lambda", "Execução sob demanda de tarefas de imagem."],
  ["Autenticação", "AWS Cognito", "Gestão de credenciais, sessões, tokens JWT e perfis RBAC."],
  ["Dados", "PostgreSQL e pgvector", "Persistência relacional e busca de similaridade vetorial."],
  ["Mídia e entrega", "AWS S3 e CloudFront", "Armazenamento de imagens e distribuição por CDN."],
];

export function ArchitectureContent() {
  return (
    <DocumentPage
      embedded
      eyebrow="05 / Fundamentos técnicos"
      index="05"
      title={<>Serviços em conjunto. <em>Decisões com contexto.</em></>}
      description="A arquitetura proposta no documento separa interface mobile, API, tarefas de visão computacional, identidade e armazenamento para permitir evolução independente."
    >
      <section id="arquitetura" className="architecture-section">
        <div className="document-section-heading">
          <span className="eyebrow">5.1 / Arquitetura orientada a serviços</span>
          <h2 className="display-title">Do acervo à <em>resposta.</em></h2>
          <p>Fluxo conceitual descrito para o MVP; não representa serviços já implantados.</p>
        </div>
        <div className="architecture-flow">
          {layers.map(({ number, name, icon: Icon, technology, description }, index) => (
            <div className="architecture-flow__item" key={number}>
              <article className="architecture-layer">
                <div className="architecture-layer__top">
                  <span>{number} / {name}</span>
                  <Icon size={19} aria-hidden="true" />
                </div>
                <h3>{technology}</h3>
                <p>{description}</p>
              </article>
              {index < layers.length - 1 && <ArrowDown className="architecture-flow__arrow" size={18} aria-hidden="true" />}
            </div>
          ))}
        </div>
      </section>

      <section id="tecnologias" className="architecture-section">
        <div className="document-section-heading">
          <span className="eyebrow">5.2 / Tecnologias utilizadas</span>
          <h2 className="display-title">A stack <em>descrita no PDF.</em></h2>
        </div>
        <div className="technology-table" role="table" aria-label="Tecnologias previstas">
          <div className="technology-table__head" role="row">
            <span role="columnheader">Camada</span><span role="columnheader">Tecnologia</span><span role="columnheader">Papel no sistema</span>
          </div>
          {technologies.map(([layer, technology, reason]) => (
            <div className="technology-table__row" role="row" key={layer}>
              <strong role="cell">{layer}</strong><span role="cell">{technology}</span><p role="cell">{reason}</p>
            </div>
          ))}
        </div>
        <aside className="document-note">
          <span className="document-note__mark">!</span>
          <p>
            <strong>Divergência no próprio documento:</strong> a arquitetura
            especifica Flutter/Dart, mas as premissas de custos citam React
            Native/TypeScript. É necessário decidir qual stack será usada antes
            de fechar o planejamento. Este site institucional é separado do
            aplicativo mobile proposto.
          </p>
        </aside>
      </section>

      <section id="ihe" className="ihe-section">
        <div className="ihe-section__heading">
          <span className="eyebrow">5.3 / Índice de Harmonia Estética</span>
          <h2 className="display-title">Quatro dimensões. <em>Uma referência.</em></h2>
          <p>
            O IHE combina cor, morfologia, contexto e similaridade de estilo.
            Trata-se de apoio à descoberta, não de uma regra sobre como alguém
            deve se vestir.
          </p>
        </div>
        <div className="ihe-equation" aria-label="IHE é igual a 0,35 vezes escore de cor, mais 0,25 vezes escore morfológico, mais 0,20 vezes escore de ocasião, mais 0,20 vezes similaridade vetorial">
          <span>IHE =</span>
          <strong>0,35 · S<sub>cor</sub></strong>
          <strong>+ 0,25 · S<sub>bio</sub></strong>
          <strong>+ 0,20 · S<sub>ocasião</sub></strong>
          <strong>+ 0,20 · S<sub>cos</sub></strong>
        </div>
        <p className="ihe-normalization">Os pesos somam 1,00. A pontuação final é apresentada entre 0% e 100%.</p>
        <div className="ihe-factors">
          <article><span>01 / S<sub>cor</sub></span><h3>Harmonia cromática · 35%</h3><p>Distância euclidiana ΔE*ab no espaço CIE L*a*b*, convertida em escore por exp(−ΔE*ab / 18).</p></article>
          <article><span>02 / S<sub>bio</sub></span><h3>Compatibilidade morfológica · 25%</h3><p>Matriz de compatibilidade entre modelagem e os perfis corporais registrados no onboarding.</p></article>
          <article><span>03 / S<sub>ocasião</sub></span><h3>Contexto e clima · 20%</h3><p>Adequação da formalidade ao evento e compatibilidade com as condições meteorológicas.</p></article>
          <article><span>04 / S<sub>cos</sub></span><h3>Similaridade vetorial · 20%</h3><p>Similaridade de cosseno entre o vetor do perfil e os vetores das peças, com pgvector.</p></article>
        </div>
        <div className="ihe-threshold"><strong>≥ 75%</strong><span>O documento classifica resultados acima deste limiar como “Looks Fortemente Recomendados”.</span></div>
      </section>

      <p className="architecture-footnote">
        Os serviços, fornecedores e limites de desempenho são decisões descritas
        para o MVP. A página não afirma que contas AWS, integrações ou modelos de
        processamento já estejam configurados.
      </p>
    </DocumentPage>
  );
}
