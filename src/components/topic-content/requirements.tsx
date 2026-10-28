import { AlertCircle, Gauge, LockKeyhole, ShieldCheck } from "lucide-react";
import { DocumentPage } from "@/components/document-page";

const functionalRequirements = [
  ["RF01", "Autenticação e gestão de acesso", "Criação e autenticação segura de contas por e-mail e senha, tokens JWT e gestão de acesso prevista com AWS Cognito."],
  ["RF02", "Perfil morfológico e colorimetria", "Questionário assistido para registrar o biótipo e executar o teste de colorimetria pessoal."],
  ["RF03", "Captura e upload de imagens", "Captura pela câmera ou envio de imagens de peças do guarda-roupa."],
  ["RF04", "Remoção automática de fundo", "Segmentação da fotografia para isolar a roupa em uma imagem com fundo transparente."],
  ["RF05", "Extração de atributos e metadados", "Estimativa de cores em CIE L*a*b* e catalogação de categoria, estampa e formalidade."],
  ["RF06", "Guarda-roupa virtual e filtros", "Acervo organizado com filtros por categoria, cor, formalidade e frequência de uso."],
  ["RF07", "Geração de looks por IHE", "Combinações que consideram acervo, biótipo, cartela cromática e ocasião."],
  ["RF08", "Captura de peças em lojas", "Fotografia de uma roupa na arara ou no provador para compará-la com o acervo."],
  ["RF09", "Ranqueamento e análise de paridade", "Lista de itens do acervo com maior compatibilidade com a peça capturada."],
  ["RF10", "Provador em realidade aumentada", "Sobreposição de itens do armário à imagem do usuário em tempo real."],
  ["RF11", "Sugestão de peças complementares", "Recomendação de itens que preencham lacunas identificadas nos looks e no acervo."],
  ["RF12", "Redirecionamento de afiliação", "Links parametrizados para as lojas parceiras; sem checkout de produtos físicos dentro do MVP."],
  ["RF13", "Feedback de recomendações", "Ações para aprovar, salvar ou descartar combinações sugeridas."],
  ["RF14", "Feed social e compartilhamento", "Publicação de looks, descrições, reações e salvamento de inspirações."],
  ["RF15", "Busca e filtros comunitários", "Busca de looks e inspirações publicados pela comunidade."],
  ["RF16", "Previsão meteorológica", "Consulta de clima e temperatura por API, com geolocalização somente mediante permissão."],
  ["RF18", "Configurações de conta e perfil", "Edição de dados, biótipo, colorimetria, notificações e recuperação ou alteração de senha."],
];

const nonFunctionalRequirements = [
  ["RNF01", "Privacidade e LGPD", "Consentimento explícito, criptografia AES-256 em repouso, TLS 1.3 em trânsito e exclusão definitiva, incluindo imagens em até 24 horas."],
  ["RNF02", "Segurança da informação", "Tokens JWT com expiração curta, controle de acesso RBAC e gestão segura de segredos."],
  ["RNF03", "Desempenho e resposta", "Segmentação e extração cromática em até 3,5 s; geração de looks em menos de 1,5 s sob rede móvel estável."],
  ["RNF04", "Disponibilidade e resiliência", "SLA de 99,5%, backup diário do PostgreSQL e capacidade de rollback na esteira CI/CD."],
  ["RNF05", "Qualidade e cobertura de testes", "Mínimo de 80% de cobertura automatizada unitária e de integração (pytest) por sprint; mudanças na branch principal passam por Pull Request aprovado."],
  ["RNF06", "Usabilidade e aderência ao design", "Cadastro e captura de roupa em no máximo três toques, com interface acessível e experiência mobile."],
];

const businessRules = [
  ["RN01", "Isolamento estrito de dados", "Cada pessoa só acessa suas próprias peças, fotos e looks; o documento prevê isolamento multi-tenant."],
  ["RN02", "Cota do plano gratuito", "Até 30 peças e cinco combinações diárias por IA; ao chegar ao limite, o app informa a opção Premium."],
  ["RN03", "Estoque de produtos parceiros", "Sugestões e links deixam de aparecer quando o item estiver indisponível no inventário do parceiro."],
  ["RN04", "Direito ao esquecimento", "Excluir a conta revoga credenciais, remove registros e solicita exclusão definitiva das imagens no S3."],
  ["RN05", "Visibilidade e privacidade", "A pessoa escolhe entre perfil e publicações públicos ou privados."],
];

export function RequirementsContent() {
  return (
    <DocumentPage
      embedded
      eyebrow="04 / Escopo verificável"
      index="04"
      title={<>O que o sistema faz. <em>E o que precisa garantir.</em></>}
      description="A documentação separa os serviços esperados (RF), os critérios de qualidade (RNF) e as políticas que determinam como a HarmonIA deve se comportar (RN)."
    >
      <section className="requirements-summary" aria-label="Resumo dos requisitos">
        <div><strong>17</strong><span>requisitos funcionais listados no PDF</span></div>
        <div><strong>06</strong><span>requisitos não funcionais</span></div>
        <div><strong>05</strong><span>regras de negócio</span></div>
      </section>

      <section id="funcionais" className="requirement-section">
        <div className="document-section-heading">
          <span className="eyebrow">4.1 / Requisitos funcionais</span>
          <h2 className="display-title">Serviços que <em>entregam valor.</em></h2>
          <p>A lista abaixo preserva os identificadores e o escopo descritos no documento do MVP.</p>
        </div>
        <div className="requirements-list">
          {functionalRequirements.map(([id, title, detail]) => (
            <article className="requirement-row" key={id}>
              <span>{id}</span>
              <div><h3>{title}</h3><p>{detail}</p></div>
            </article>
          ))}
        </div>
        <aside className="document-note">
          <AlertCircle size={17} aria-hidden="true" />
          <p>
            <strong>Observação de origem:</strong> no PDF, a numeração pula de
            RF16 para RF18. Não foi fornecido um RF17; esta página mantém a
            lacuna e não cria um requisito por suposição.
          </p>
        </aside>
      </section>

      <section id="nao-funcionais" className="requirement-section requirement-section--dark">
        <div className="document-section-heading">
          <span className="eyebrow">4.2 / Requisitos não funcionais</span>
          <h2 className="display-title">Qualidade também <em>é requisito.</em></h2>
          <p>Metas mensuráveis ou princípios de operação indicados para o produto.</p>
        </div>
        <div className="quality-grid">
          {nonFunctionalRequirements.map(([id, title, detail], index) => {
            const Icon = [LockKeyhole, ShieldCheck, Gauge][index % 3];
            return (
              <article className="quality-card" key={id}>
                <div><span>{id}</span><Icon size={18} aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="regras" className="requirement-section">
        <div className="document-section-heading">
          <span className="eyebrow">4.3 / Regras de negócio</span>
          <h2 className="display-title">Limites claros. <em>Controle da pessoa.</em></h2>
        </div>
        <div className="business-rules">
          {businessRules.map(([id, title, detail]) => (
            <article className="business-rule" key={id}>
              <span>{id}</span>
              <div><h3>{title}</h3><p>{detail}</p></div>
            </article>
          ))}
        </div>
        <p className="requirements-footnote">
          Os valores e controles desta página são requisitos propostos no
          documento; sua presença aqui não certifica que já estejam ativos em
          uma aplicação.
        </p>
      </section>
    </DocumentPage>
  );
}
