import { ArrowDown, CloudCog, Cpu, Database, LockKeyhole, Server, Smartphone } from "lucide-react";
import { DocumentPage } from "@/components/document-page";

const soaPillars = [
  {
    code: "5.1.1",
    name: "Pilar 1 · Camada de Visualização",
    icon: Smartphone,
    headline: "Flutter / Dart · AWS Route 53 · CDN AWS CloudFront",
    summary:
      "Construída no ecossistema multiplataforma em Flutter/Dart, garantindo execução fluida e compilação nativa para Android e iOS a partir de uma base unificada de código.",
    details: [
      "Roteamento DNS e borda: conexão direcionada pelo AWS Route 53 e acelerada pela CDN AWS CloudFront, distribuindo cópias das imagens tratadas em servidores de borda sob protocolo HTTPS estrito.",
      "Isolamento front/back: as interfaces de guarda-roupa, cards de looks e feed comunitário consomem exclusivamente a API RESTful de forma assíncrona, mantendo desacoplamento total das regras de negócio.",
    ],
  },
  {
    code: "5.1.2",
    name: "Pilar 2 · Lógica do Sistema (3 Módulos Autônomos)",
    icon: Cpu,
    headline: "FastAPI em Docker (EC2 / App Runner) · AWS Lambda · AWS Cognito",
    summary:
      "Para escalar sob demanda sem gargalos de processamento visual, a lógica de aplicação divide-se em três módulos independentes:",
    modules: [
      {
        tag: "Módulo 1 · API Central",
        icon: Server,
        title: "Python FastAPI em Docker (AWS EC2 / App Runner)",
        text: "Servidor de aplicação conteinerizado com alta velocidade de resposta assíncrona, documentação automática de endpoints e interoperabilidade nativa com bibliotecas de aprendizado de máquina.",
      },
      {
        tag: "Módulo 2 · Serverless Paralelo",
        icon: CloudCog,
        title: "AWS Lambda orientada a eventos assíncronos",
        text: "Terceiriza tarefas computacionalmente intensivas de segmentação semântica (remoção de fundo) e extração cromática para funções Lambda individuais, preservando a disponibilidade da API central.",
      },
      {
        tag: "Módulo 3 · Identidade e Sessão",
        icon: LockKeyhole,
        title: "AWS Cognito · Tokens JWT & RBAC",
        text: "Serviço gerenciado responsável pela autenticação segura, controle de sessões e emissão de tokens JWT de curta expiração com governança de perfis baseada em papéis (RBAC).",
      },
    ],
  },
  {
    code: "5.1.3",
    name: "Pilar 3 · Camada de Armazenamento Híbrido",
    icon: Database,
    headline: "Amazon RDS PostgreSQL + pgvector · Amazon S3 Privado",
    summary:
      "Persistência otimizada que separa metadados transacionais e vetoriais do repositório seguro de arquivos binários de mídia:",
    details: [
      "Relacional + Vetorial (Amazon RDS PostgreSQL + pgvector): armazena com confiabilidade transacional usuários, biótipos, cartelas, peças e histórico de looks, enquanto a extensão pgvector indexa embeddings multidimensionais das redes neurais para cálculos SQL instantâneos de similaridade de cosseno.",
      "Repositório de Mídias (Amazon S3 em Bucket Privado): persiste fotos brutas e recortes PNG com canal alfa transparente em bucket estritamente privado, com leitura condicionada a URLs pré-assinadas temporárias.",
    ],
  },
];

const technologies = [
  [
    "Visualização",
    "Flutter; Dart",
    "Desenvolvimento mobile unificado com compilação nativa para Android e iOS, reaproveitamento de componentes e tipagem estática contra erros em runtime.",
  ],
  [
    "Lógica do Sistema",
    "Python; FastAPI",
    "Alta velocidade de resposta assíncrona, documentação automática de endpoints e integração imediata com bibliotecas de visão computacional e IA.",
  ],
  [
    "Processamento Paralelo",
    "AWS Lambda",
    "Terceiriza o processamento pesado de segmentação de imagens para contêineres serverless sob demanda, evitando gargalos no servidor principal.",
  ],
  [
    "Autenticação",
    "AWS Cognito",
    "Serviço robusto de autenticação e governança de acessos com suporte a tokens JWT, credenciais seguras e controle de perfis (RBAC).",
  ],
  [
    "Armazenamento Relacional e Vetorial",
    "PostgreSQL + pgvector",
    "Banco relacional open-source de alta confiabilidade associado à extensão vetorial para consultas SQL de similaridade de cosseno entre roupas.",
  ],
  [
    "Armazenamento de Mídias e CDN",
    "AWS S3; AWS CloudFront",
    "Persistência estática escalável e econômica para imagens com canal alfa transparente e distribuição global de baixa latência via CDN.",
  ],
];

export function ArchitectureContent() {
  return (
    <DocumentPage
      embedded
      eyebrow="06 / Seções 5.1 & 5.2 · Engenharia de sistemas em nuvem"
      index="06"
      title={<>Arquitetura Orientada a Serviços <em>(SOA).</em></>}
      description="Pautada pelo desacoplamento (Loose Coupling) entre visualização, processamento assíncrono de IA e persistência híbrida relacional-vetorial na nuvem AWS."
    >
      <section id="arquitetura" className="architecture-section">
        <div className="document-section-heading">
          <span className="eyebrow">5.1 / Três pilares com desacoplamento (Loose Coupling)</span>
          <h2 className="display-title">
            Serviços autônomos. <em>Escala sem gargalos.</em>
          </h2>
          <p>
            Cada camada opera de forma independente, isolando inferências pesadas de visão
            computacional da navegação fluida do usuário no aplicativo móvel.
          </p>
        </div>

        <div className="architecture-flow architecture-flow--wide">
          {soaPillars.map(({ code, name, icon: Icon, headline, summary, details, modules }, index) => (
            <div className="architecture-flow__item" key={code}>
              <article className="architecture-layer architecture-layer--pillar">
                <div className="architecture-layer__top">
                  <span>{code} / {name}</span>
                  <Icon size={19} aria-hidden="true" />
                </div>
                <h3>{headline}</h3>
                <p>{summary}</p>

                {details && (
                  <ul className="architecture-layer__bullets">
                    {details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {modules && (
                  <div className="architecture-submodules">
                    {modules.map(({ tag, icon: SubIcon, title, text }) => (
                      <div className="architecture-submodule" key={tag}>
                        <div className="architecture-submodule__top">
                          <span>{tag}</span>
                          <SubIcon size={15} aria-hidden="true" />
                        </div>
                        <h4>{title}</h4>
                        <p>{text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </article>
              {index < soaPillars.length - 1 && (
                <ArrowDown className="architecture-flow__arrow" size={18} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="tecnologias" className="architecture-section">
        <div className="document-section-heading">
          <span className="eyebrow">5.2 / Quadro 4 — Tecnologias Utilizadas</span>
          <h2 className="display-title">
            Mapeamento tecnológico <em>e justificativas de engenharia.</em>
          </h2>
        </div>

        <div className="technology-table" role="table" aria-label="Quadro 4 — Tecnologias Utilizadas no MVP">
          <div className="technology-table__head" role="row">
            <span role="columnheader">Camada</span>
            <span role="columnheader">Tecnologia</span>
            <span role="columnheader">Justificativa de engenharia</span>
          </div>
          {technologies.map(([layer, technology, reason]) => (
            <div className="technology-table__row" role="row" key={layer}>
              <strong role="cell">{layer}</strong>
              <span role="cell">{technology}</span>
              <p role="cell">{reason}</p>
            </div>
          ))}
        </div>

        <aside className="document-note">
          <span className="document-note__mark">i</span>
          <p>
            <strong>Nota editorial de stack mobile:</strong> a arquitetura técnica oficial
            (Seções 5.1.1 e 5.2) especifica <strong>Flutter / Dart</strong> para a camada de
            visualização multiplataforma, enquanto as premissas orçamentárias da Seção 6.1 fazem
            menção pontual a <em>React Native + TypeScript</em> como referência equivalente de
            mercado para desenvolvimento mobile.
          </p>
        </aside>
      </section>
    </DocumentPage>
  );
}
