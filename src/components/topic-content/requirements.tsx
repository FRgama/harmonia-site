import {
  Accessibility,
  AlertCircle,
  CheckCircle2,
  Gauge,
  LockKeyhole,
  ServerCrash,
  ShieldCheck,
} from "lucide-react";
import { DocumentPage } from "@/components/document-page";
import { Requirements } from "@/components/requirements";

const functionalRequirements = [
  [
    "RF01",
    "Autenticação e Gestão de Acesso",
    "Permitir criação e autenticação segura de contas via e-mail e senha, com suporte a tokens JWT e controle de acesso gerenciado pelo AWS Cognito.",
  ],
  [
    "RF02",
    "Perfil Morfológico e Colorimetria",
    "Disponibilizar questionário assistido para registro do perfil morfológico (biótipo corporal) e execução do teste assistido de colorimetria pessoal.",
  ],
  [
    "RF03",
    "Captura e Upload de Imagens",
    "Permitir upload da galeria e captura direta por câmera de imagens das peças físicas do guarda-roupa do usuário.",
  ],
  [
    "RF04",
    "Remoção Automática de Fundo",
    "Executar a remoção automática do fundo ambiente das fotos de roupas via modelos de segmentação de imagem, isolando a peça em camada transparente.",
  ],
  [
    "RF05",
    "Extração de Atributos e Metadados",
    "Extrair automaticamente os centróides cromáticos dominantes no espaço CIE L*a*b* e catalogar metadados taxonômicos (categoria, estampa e formalidade).",
  ],
  [
    "RF06",
    "Guarda-roupa Virtual e Filtros",
    "Disponibilizar visualização estruturada do guarda-roupa virtual com filtros dinâmicos por categoria, cor, formalidade e frequência de uso.",
  ],
  [
    "RF07",
    "Geração de Looks por IHE",
    "Calcular o Índice de Harmonia Estética (IHE) e gerar automaticamente combinações completas cruzando acervo pessoal, biótipo, cartela cromática e ocasião informada.",
  ],
  [
    "RF08",
    "Captura de Peças em Lojas",
    "Permitir capturar a fotografia de uma peça física em provador ou arara de loja física para comparação imediata com as roupas já cadastradas em casa.",
  ],
  [
    "RF09",
    "Ranqueamento e Análise de Paridade",
    "Ranquear e listar as peças do guarda-roupa virtual que possuem maior paridade estética com a nova peça fotografada em loja.",
  ],
  [
    "RF10",
    "Provador em Realidade Aumentada (AR)",
    "Disponibilizar simulação de Provador em Realidade Aumentada (AR), sobrepondo graficamente a peça do armário sobre o reflexo do usuário em tempo real.",
  ],
  [
    "RF11",
    "Sugestão de Peças Complementares",
    "Sugerir novas peças de vestuário complementares aos looks cadastrados com base em lacunas estratégicas identificadas no acervo do usuário.",
  ],
  [
    "RF12",
    "Redirecionamento de Afiliação",
    "Permitir redirecionamento externo para as páginas de compra dos parceiros (C&A e Lojas Renner) via links parametrizados de afiliação, sem checkout in-app no MVP.",
  ],
  [
    "RF13",
    "Feedback de Recomendações",
    "Disponibilizar botões de feedback rápido (aprovar/salvar ou descartar) nas combinações sugeridas para retroalimentação contínua do algoritmo de IA.",
  ],
  [
    "RF14",
    "Feed Social e Compartilhamento",
    "Disponibilizar feed social onde o usuário publique fotos de seus looks, adicione descrições e interaja com outros membros por reações e salvamento de inspirações.",
  ],
  [
    "RF15",
    "Busca e Filtros Comunitários",
    "Possuir mecanismo de busca e filtros no feed comunitário para encontrar inspirações de looks compartilhados por outros membros (incluindo biótipo e cartela).",
  ],
  [
    "RF16",
    "Integração de Previsão Meteorológica",
    "Integrar-se a API externa de meteorologia para capturar previsão do tempo e temperatura do dia, utilizando a geolocalização mediante permissão explícita do usuário.",
  ],
  [
    "RF18",
    "Configurações de Conta e Perfil",
    "Disponibilizar área de configurações para editar dados pessoais, atualizar biótipo corporal, recalibrar o teste de colorimetria, gerenciar notificações e recuperar ou alterar senha.",
  ],
];

const nonFunctionalRequirements = [
  {
    id: "RNF01",
    title: "Privacidade e LGPD (Lei nº 13.709/2018)",
    detail:
      "Cumprir integralmente a LGPD, assegurando consentimento explícito no 1º acesso, criptografia AES-256 em repouso, TLS 1.3 em trânsito e módulo de exclusão definitiva com expurgo físico de imagens em até 24 horas.",
    icon: LockKeyhole,
  },
  {
    id: "RNF02",
    title: "Segurança da Informação",
    detail:
      "Todas as chamadas de API devem ser autenticadas via tokens JWT com tempo de expiração curto, implementando controle de acesso RBAC e gestão segura de segredos no repositório.",
    icon: ShieldCheck,
  },
  {
    id: "RNF03",
    title: "Desempenho e Tempo de Resposta",
    detail:
      "O processamento de segmentação de imagem e extração cromática não deve ultrapassar 3,5 segundos (≤ 3,5 s), e a geração de looks por IA deve ocorrer em menos de 1,5 segundo (< 1,5 s) sob rede móvel estável.",
    icon: Gauge,
  },
  {
    id: "RNF04",
    title: "Disponibilidade e Resiliência",
    detail:
      "A infraestrutura em nuvem deve manter SLA de 99,5%, contando com rotinas automatizadas de backup diário do banco PostgreSQL e capacidade de rollback instantâneo na esteira CI/CD.",
    icon: ServerCrash,
  },
  {
    id: "RNF05",
    title: "Qualidade e Cobertura de Testes",
    detail:
      "Manter cobertura de testes automatizados (unitários e de integração com pytest) de no mínimo 80% por sprint, bloqueando merges diretos na branch main sem Pull Request aprovado.",
    icon: CheckCircle2,
  },
  {
    id: "RNF06",
    title: "Usabilidade e Aderência de Design",
    detail:
      "O fluxo de cadastro e foto de peças deve requerer no máximo 3 toques na tela, aderindo aos padrões visuais e de acessibilidade validados nos protótipos.",
    icon: Accessibility,
  },
];

const businessRules = [
  [
    "RN01",
    "Isolamento Estrito de Dados",
    "Um usuário só tem visibilidade sobre as peças, fotos e looks vinculados à própria conta, respeitando a arquitetura Multi-Tenant isolada.",
  ],
  [
    "RN02",
    "Limite da Cota Freemium",
    "Usuários no plano gratuito podem cadastrar até 30 peças e solicitar até 5 combinações diárias por IA; ao atingir o teto, o sistema emite alerta de upgrade ao plano Premium.",
  ],
  [
    "RN03",
    "Verificação Dinâmica de Estoque Parceiro",
    "Links de recomendação externa (C&A e Lojas Renner) são ocultados automaticamente caso o produto atinja status de esgotado no inventário do parceiro.",
  ],
  [
    "RN04",
    "Direito ao Esquecimento e Eliminação Física",
    "A solicitação formal de exclusão de conta revoga todas as credenciais ativas, apaga os registros no banco relacional e deleta definitivamente as imagens no bucket Amazon S3.",
  ],
  [
    "RN05",
    "Controle de Privacidade e Visibilidade de Perfil",
    "O usuário define a visibilidade do perfil e das publicações, alternando livremente entre modo “Público” (visível no feed comunitário) e “Privado” (visível apenas para si).",
  ],
];

export function RequirementsContent() {
  return (
    <DocumentPage
      embedded
      eyebrow="07 / Seção 4 · Especificação de engenharia de software"
      index="07"
      title={<>Escopo verificável. <em>Garantias mensuráveis.</em></>}
      description="Consolidação dos 4 pilares de confiança com os Quadros 1, 2 e 3 da documentação oficial: Requisitos Funcionais (RF), Requisitos Não Funcionais (RNF) e Regras de Negócio (RN)."
    >
      <section className="requirements-summary" aria-label="Resumo quantitativo da especificação">
        <div>
          <strong>17</strong>
          <span>Requisitos Funcionais (Quadro 1 · RF01–RF18)</span>
        </div>
        <div>
          <strong>06</strong>
          <span>Requisitos Não Funcionais (Quadro 2 · RNF01–RNF06)</span>
        </div>
        <div>
          <strong>05</strong>
          <span>Regras de Negócio (Quadro 3 · RN01–RN05)</span>
        </div>
      </section>

      <Requirements />

      <section id="funcionais" className="requirement-section">
        <div className="document-section-heading">
          <span className="eyebrow">4.1 / Quadro 1 — Requisitos Funcionais</span>
          <h2 className="display-title">
            Dezessete capacidades <em>essenciais do MVP.</em>
          </h2>
          <p>
            Ações, fluxos de entrada/saída e serviços que o sistema HarmonIA executa da
            autenticação via AWS Cognito à recalibração morfocromática.
          </p>
        </div>

        <div className="requirements-list">
          {functionalRequirements.map(([id, title, detail]) => (
            <article className="requirement-row" key={id}>
              <span>{id}</span>
              <div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="document-note">
          <AlertCircle size={17} aria-hidden="true" />
          <p>
            <strong>Fidelidade documental (numeração original):</strong> no Quadro 1 do documento
            oficial, a sequência passa diretamente de <strong>RF16</strong> para{" "}
            <strong>RF18</strong> (sem registro de <code>RF17</code>), totalizando 17 requisitos
            funcionais preservados com seus identificadores originais.
          </p>
        </aside>
      </section>

      <section id="nao-funcionais" className="requirement-section requirement-section--dark">
        <div className="document-section-heading">
          <span className="eyebrow">4.2 / Quadro 2 — Requisitos Não Funcionais</span>
          <h2 className="display-title">
            SLAs, criptografia e <em>qualidade automatizada.</em>
          </h2>
          <p>
            Parâmetros técnicos verificáveis de conformidade legal, latência, disponibilidade,
            testes e ergonomia mobile.
          </p>
        </div>

        <div className="quality-grid">
          {nonFunctionalRequirements.map(({ id, title, detail, icon: Icon }) => (
            <article className="quality-card" key={id}>
              <div>
                <span>{id}</span>
                <Icon size={18} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="regras" className="requirement-section">
        <div className="document-section-heading">
          <span className="eyebrow">4.3 / Quadro 3 — Regras de Negócio</span>
          <h2 className="display-title">
            Diretrizes operacionais e <em>soberania do usuário.</em>
          </h2>
        </div>

        <div className="business-rules">
          {businessRules.map(([id, title, detail]) => (
            <article className="business-rule" key={id}>
              <span>{id}</span>
              <div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </DocumentPage>
  );
}
