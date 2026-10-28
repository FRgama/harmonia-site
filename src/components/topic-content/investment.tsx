import { AlertTriangle, ArrowUpRight, CalendarDays, CircleDollarSign } from "lucide-react";
import Link from "next/link";
import { DocumentPage } from "@/components/document-page";

const staff = [
  ["Tech Lead / Backend (Python, FastAPI, AWS)", "100% · 6 meses", "R$ 15.000", "R$ 90.000"],
  ["Desenvolvedor(a) mobile", "100% · 6 meses", "R$ 13.000", "R$ 78.000"],
  ["Engenheiro(a) de ML / Visão Computacional", "100% · 6 meses", "R$ 17.000", "R$ 102.000"],
  ["UX/UI Designer", "100% · 3 meses", "R$ 9.000", "R$ 27.000"],
  ["QA / DevOps", "50% · 6 meses", "R$ 12.000 integral", "R$ 36.000"],
  ["Product Owner / Gestão", "25% · 6 meses", "R$ 14.000 integral", "R$ 21.000"],
];

const moduleCosts = [
  ["Fundação: autenticação, infraestrutura, CI/CD e segurança", "RF01, RNF01–05", "12%", "R$ 42.480"],
  ["Onboarding e digitalização", "RF02–RF05", "28%", "R$ 99.120"],
  ["Inventário e dashboards", "RF06", "10%", "R$ 35.400"],
  ["Motor IHE e combinações", "RF07, RF13", "18%", "R$ 63.720"],
  ["Provador, paridade e AR", "RF08–RF10", "20%", "R$ 70.800"],
  ["Feed social", "Módulo 3.5", "7%", "R$ 24.780"],
  ["Afiliação e recomendação", "RF11, RF12", "5%", "R$ 17.700"],
];

const additionalCosts = [
  ["AWS para desenvolvimento e homologação", "RDS, App Runner/EC2, Lambda, S3, CloudFront, Route 53 e CloudWatch; estimativa de US$ 180/mês.", "R$ 6.000"],
  ["Ferramentas, lojas e domínio", "Figma, GitHub, Apple Developer, Google Play e domínio.", "R$ 2.500"],
  ["Dados e anotação", "Cerca de 2.000 imagens de roupas rotuladas.", "R$ 4.000"],
  ["Jurídico e LGPD", "Termos de uso, política de privacidade e relatório de impacto.", "R$ 6.000"],
  ["Testes com usuários", "Recrutamento e incentivos para cerca de 20 pessoas.", "R$ 3.000"],
  ["Marca e registro no INPI", "Busca, registro e identidade básica.", "R$ 1.500"],
];

const stages = [
  ["0", "Descoberta e design", "Semanas 1–4", "Protótipos, backlog e arquitetura."],
  ["1", "Fundações", "Semanas 3–8", "Autenticação, CI/CD, banco, S3 e CloudFront."],
  ["2", "Digitalização e visão computacional", "Semanas 5–14", "Perfil, colorimetria, remoção de fundo, atributos e inventário."],
  ["3", "Motor IHE", "Semanas 11–18", "Cálculo, combinações por ocasião e clima e feedback."],
  ["4", "Provador, parceiros e comunidade", "Semanas 15–22", "Paridade em loja, AR, afiliação e feed social."],
  ["5", "Qualidade e publicação", "Semanas 21–24", "Testes, LGPD, desempenho e publicação nas lojas."],
];

const operatingCosts = [
  ["1.000", "R$ 2.500", "R$ 2,50"],
  ["10.000", "R$ 9.000", "R$ 0,90"],
  ["50.000", "R$ 35.000", "R$ 0,70"],
];

export function InvestmentContent() {
  return (
    <DocumentPage
      embedded
      eyebrow="06 / Planejamento financeiro"
      index="06"
      title={<>Investimento para criar. <em>Critério para priorizar.</em></>}
      description="Valores e cronograma são estimativas do documento do produto, não cotações atuais. A seção explicita premissas, cenários e incertezas para orientar uma revisão antes da execução."
    >
      <section id="premissas" className="investment-assumptions">
        <div className="investment-assumptions__icon"><CircleDollarSign size={23} aria-hidden="true" /></div>
        <div>
          <span className="eyebrow">Premissas do documento</span>
          <h2>24 semanas · 12 sprints · MVP mobile</h2>
          <p>
            Referência salarial de São Paulo; câmbio hipotético de US$ 1 = R$
            5,50; escopo inclui onboarding, IA, paridade, AR, feed e afiliação.
            A estimativa supõe modelos open source de segmentação, sem treinar
            modelos do zero.
          </p>
        </div>
      </section>

      <section id="cenario-a" className="investment-section">
        <div className="document-section-heading">
          <span className="eyebrow">6.1 / Cenário A · equipe contratada</span>
          <h2 className="display-title">O custo do <em>trabalho.</em></h2>
          <p>Valores de referência compilados no PDF para um ciclo estimado de seis meses.</p>
        </div>
        <div className="investment-table investment-table--staff">
          <div className="investment-table__head"><span>Papel</span><span>Dedicação</span><span>Base mensal</span><span>Total</span></div>
          {staff.map(([role, dedication, monthly, total]) => (
            <div className="investment-table__row" key={role}>
              <strong>{role}</strong><span>{dedication}</span><span>{monthly}</span><strong>{total}</strong>
            </div>
          ))}
          <div className="investment-table__total"><span>Total de pessoal</span><strong>R$ 354.000</strong></div>
        </div>

        <h3 className="investment-subheading">Esforço estimado por módulo</h3>
        <div className="investment-table investment-table--modules">
          <div className="investment-table__head"><span>Módulo</span><span>Referência</span><span>Esforço</span><span>Custo</span></div>
          {moduleCosts.map(([module, reference, effort, cost]) => (
            <div className="investment-table__row" key={module}>
              <strong>{module}</strong><span>{reference}</span><span>{effort}</span><strong>{cost}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="outros-custos" className="investment-section investment-section--tint">
        <div className="document-section-heading">
          <span className="eyebrow">6.2 / Infraestrutura e demais custos</span>
          <h2 className="display-title">Além da <em>equipe.</em></h2>
        </div>
        <div className="additional-costs">
          {additionalCosts.map(([item, description, cost]) => (
            <article key={item}>
              <div><h3>{item}</h3><p>{description}</p></div>
              <strong>{cost}</strong>
            </article>
          ))}
        </div>
        <div className="investment-total">
          <div><span>Pessoal</span><strong>R$ 354.000</strong></div>
          <div><span>Infraestrutura e demais custos</span><strong>R$ 23.000</strong></div>
          <div><span>Subtotal</span><strong>R$ 377.000</strong></div>
          <div><span>Contingência · 15%</span><strong>R$ 56.550</strong></div>
          <div id="consolidado" className="investment-total__grand"><span>Total estimado · Cenário A</span><strong>≈ R$ 433.550</strong></div>
        </div>
        <aside className="document-note">
          <span className="document-note__mark">!</span>
          <p>
            O documento não inclui o custo de uma API de previsão do tempo
            (assume que o nível gratuito possa bastar) nem do SDK de AR (como
            ARKit/ARCore). Os termos e custos vigentes desses serviços devem
            ser confirmados.
          </p>
        </aside>
      </section>

      <section id="cenario-b" className="investment-section">
        <div className="document-section-heading">
          <span className="eyebrow">6.3 / Cenário B · realidade do TCC</span>
          <h2 className="display-title">O desembolso não é <em>o esforço todo.</em></h2>
        </div>
        <div className="scenario-b">
          <div><span>AWS com créditos educacionais</span><strong>R$ 3.000</strong></div>
          <div><span>Contas das lojas e domínio</span><strong>R$ 750</strong></div>
          <div><span>Testes com usuários</span><strong>R$ 500</strong></div>
          <div><span>Anotação e termos</span><strong>R$ 1.000</strong></div>
          <div><span>Subtotal</span><strong>R$ 5.250</strong></div>
          <div><span>Contingência · 15%</span><strong>R$ 788</strong></div>
          <div className="scenario-b__total"><span>Total estimado</span><strong>≈ R$ 6.038</strong></div>
        </div>
        <aside className="investment-hours">
          <span>Valor econômico das horas aportadas</span>
          <strong>1.920 horas <i>≈ R$ 172.800</i></strong>
          <p>Quatro estudantes × 20 horas semanais × 24 semanas; referência de R$ 90/hora. Esse valor não é desembolso, mas evidencia o trabalho investido.</p>
        </aside>
      </section>

      <section id="cronograma" className="investment-section">
        <div className="document-section-heading">
          <span className="eyebrow">6.4 / Cronograma sugerido</span>
          <h2 className="display-title">Do desenho à <em>publicação.</em></h2>
        </div>
        <div className="timeline">
          {stages.map(([number, title, weeks, deliverable]) => (
            <article className="timeline-item" key={number}>
              <span className="timeline-item__number">{number}</span>
              <div><span>{weeks}</span><h3>{title}</h3><p>{deliverable}</p></div>
              <CalendarDays size={17} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section id="operacao" className="investment-section investment-section--dark">
        <div className="document-section-heading">
          <span className="eyebrow">6.5 / Operação após o lançamento</span>
          <h2 className="display-title">Crescer sem perder <em>visibilidade do custo.</em></h2>
          <p>Estimativas de infraestrutura mensal e custo médio por usuário ativo, conforme o documento.</p>
        </div>
        <div className="operating-table">
          <div><span>Usuários ativos / mês</span><span>Infraestrutura / mês</span><span>Custo por usuário</span></div>
          {operatingCosts.map(([users, infrastructure, perUser]) => (
            <div key={users}><strong>{users}</strong><span>{infrastructure}</span><strong>{perUser}</strong></div>
          ))}
        </div>
        <div className="break-even">
          <span className="eyebrow">Hipótese de equilíbrio operacional</span>
          <h3>≈ 10 mil usuários ativos</h3>
          <p>
            O cenário usa preço Premium de R$ 19,90/mês (ainda não definido no
            documento), conversão de 5%, taxa de loja de 25% e premissas de
            afiliação de 3%, ticket de R$ 150 e comissão de 5%. A receita
            estimada aproxima-se do custo de infraestrutura de R$ 9.000/mês,
            mas não cobre a equipe de manutenção.
          </p>
        </div>
      </section>

      <section id="riscos" className="investment-section">
        <div className="document-section-heading">
          <span className="eyebrow">6.6 / Riscos, economia e próximos passos</span>
          <h2 className="display-title">Priorizar antes de <em>escalar o escopo.</em></h2>
        </div>
        <div className="risk-list">
          <article><AlertTriangle size={18} aria-hidden="true" /><div><h3>Realidade aumentada</h3><p>É apontada como o item mais incerto; o PDF estima cerca de R$ 35 mil e sugere avaliar a paridade no MVP e a AR numa versão posterior.</p></div></article>
          <article><AlertTriangle size={18} aria-hidden="true" /><div><h3>Feed social</h3><p>O documento estima cerca de R$ 25 mil e considera possível priorizar o feed para uma versão futura.</p></div></article>
          <article><AlertTriangle size={18} aria-hidden="true" /><div><h3>Desempenho e processamento</h3><p>O alvo de segmentação em 3,5 s pode exigir mais memória ou concorrência provisionada em Lambda. Modelos open source podem reduzir custo por imagem, mas exigem engenharia.</p></div></article>
          <article><AlertTriangle size={18} aria-hidden="true" /><div><h3>Dependências de terceiros</h3><p>APIs de clima e programas de afiliação precisam ser validados; o contato com C&A e Renner deve começar cedo.</p></div></article>
          <article><AlertTriangle size={18} aria-hidden="true" /><div><h3>Testes e conformidade</h3><p>A meta de 80% de testes automatizados e a LGPD precisam entrar desde o início para não pressionar o prazo final.</p></div></article>
        </div>
        <div id="proximos-passos" className="next-steps">
          <span className="eyebrow">Próximos passos do documento</span>
          <ul>
            <li>Validar salários e câmbio com cotações atuais.</li>
            <li>Solicitar créditos AWS educacionais ou para startups.</li>
            <li>Prototipar segmentação para medir tempo e custo por imagem.</li>
            <li>Definir o preço Premium para revisar o modelo de receita.</li>
          </ul>
        </div>
        <aside className="document-note">
          <span className="document-note__mark">!</span>
          <p>
            <strong>Ressalva:</strong> o PDF descreve o cenário enxuto “sem AR
            e sem feed” em cerca de R$ 364 mil. Esse valor é apresentado como
            aproximação e não é reconciliado com a retirada dos custos dos
            módulos na tabela; deve ser recalculado antes de servir como
            orçamento fechado.
          </p>
        </aside>
      </section>

      <Link className="document-next-link" href="/documentacao">
        Ver o mapa completo do documento <ArrowUpRight size={15} aria-hidden="true" />
      </Link>
    </DocumentPage>
  );
}
