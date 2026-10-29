import { AlertTriangle, ArrowUpRight, CalendarDays, CircleDollarSign, TrendingUp } from "lucide-react";
import Link from "next/link";
import { DocumentPage } from "@/components/document-page";

const staff = [
  ["Tech Lead / Backend (Python, FastAPI, AWS)", "100% · 6 meses", "R$ 15.000/mês", "R$ 90.000"],
  ["Dev Mobile", "100% · 6 meses", "R$ 13.000/mês", "R$ 78.000"],
  ["Engenheiro(a) de ML / Visão Computacional", "100% · 6 meses", "R$ 17.000/mês", "R$ 102.000"],
  ["UX/UI Designer", "100% · 3 meses", "R$ 9.000/mês", "R$ 27.000"],
  ["QA / DevOps", "50% · 6 meses", "R$ 12.000 integral", "R$ 36.000"],
  ["Product Owner / Gestão", "25% · 6 meses", "R$ 14.000 integral", "R$ 21.000"],
];

const moduleCosts = [
  ["Fundação (autenticação, infra, CI/CD, segurança)", "RF01, RNF01–05", "12%", "R$ 42.480"],
  ["Onboarding e digitalização", "RF02–RF05", "28%", "R$ 99.120"],
  ["Inventário e dashboards", "RF06", "10%", "R$ 35.400"],
  ["Motor IHE e combinações", "RF07, RF13", "18%", "R$ 63.720"],
  ["Provador, paridade e AR", "RF08–RF10", "20%", "R$ 70.800"],
  ["Feed social", "Módulo 3.5", "7%", "R$ 24.780"],
  ["Afiliação e recomendação de peças", "RF11, RF12", "5%", "R$ 17.700"],
];

const additionalCosts = [
  [
    "AWS (desenvolvimento e homologação)",
    "RDS t4g.medium, App Runner/EC2, Lambda, S3, CloudFront, Route 53 e CloudWatch; Cognito no nível gratuito (~US$ 180/mês).",
    "R$ 6.000",
  ],
  [
    "Ferramentas e lojas",
    "Figma, GitHub, Apple Developer (US$ 99/ano), Google Play (US$ 25 único) e domínio.",
    "R$ 2.500",
  ],
  [
    "Dados e anotação",
    "Cerca de 2.000 imagens de roupas rotuladas para validar categoria, estampa e formalidade.",
    "R$ 4.000",
  ],
  [
    "Jurídico e LGPD",
    "Termos de uso, política de privacidade e relatório de impacto à proteção de dados.",
    "R$ 6.000",
  ],
  [
    "Testes com usuários",
    "Recrutamento e incentivos para cerca de 20 pessoas na validação de usabilidade.",
    "R$ 3.000",
  ],
  [
    "Marca e registro no INPI",
    "Busca de anterioridade, pedido de registro e identidade visual básica.",
    "R$ 1.500",
  ],
];

const stages = [
  ["Fase 0", "Descoberta e design", "Semanas 1–4", "Protótipos no Figma, backlog do MVP e definição de arquitetura."],
  ["Fase 1", "Fundações", "Semanas 3–8", "Autenticação (AWS Cognito), esteira CI/CD, banco PostgreSQL com pgvector, S3 e CloudFront."],
  ["Fase 2", "Digitalização e visão computacional", "Semanas 5–14", "Biótipo, colorimetria, remoção de fundo, extração de atributos (CIE L*a*b*) e inventário."],
  ["Fase 3", "Motor IHE", "Semanas 11–18", "Cálculo multivariado do IHE, combinações por ocasião e clima e feedback do usuário."],
  ["Fase 4", "Provador, parceiros e comunidade", "Semanas 15–22", "Paridade em loja física, simulação AR, afiliação C&A/Renner e feed social."],
  ["Fase 5", "Qualidade e publicação", "Semanas 21–24", "Cobertura de testes (80% pytest), auditoria LGPD, ajustes de desempenho e publicação nas lojas."],
];

const operatingCosts = [
  ["1.000 MAU", "≈ R$ 2.500 / mês", "≈ R$ 2,50 / usuário"],
  ["10.000 MAU", "≈ R$ 9.000 / mês", "≈ R$ 0,90 / usuário"],
  ["50.000 MAU", "≈ R$ 35.000 / mês", "≈ R$ 0,70 / usuário"],
];

export function InvestmentContent() {
  return (
    <DocumentPage
      embedded
      eyebrow="04 / Seção 6 · Viabilidade econômico-financeira"
      index="04"
      title={<>Investimento estruturado. <em>Viabilidade demonstrada.</em></>}
      description="Planejamento financeiro de 24 semanas comparando o custo de mercado (Cenário A), a execução acadêmica do TCC (Cenário B), a operação pós-lançamento e o ponto de equilíbrio."
    >
      <section id="premissas" className="investment-assumptions">
        <div className="investment-assumptions__icon">
          <CircleDollarSign size={23} aria-hidden="true" />
        </div>
        <div>
          <span className="eyebrow">6.1 / Premissas de desenvolvimento</span>
          <h2>24 semanas (6 meses) · 12 sprints de 2 semanas · US$ 1 = R$ 5,50</h2>
          <p>
            Salários de referência do mercado de <strong>São Paulo</strong> (já com encargos ou
            equivalente PJ); câmbio hipotético de <strong>US$ 1 = R$ 5,50</strong>; uso de
            modelos open-source de segmentação e extração cromática (<strong>U²-Net / rembg</strong>),
            sem treinar modelos do zero. Escopo completo contempla onboarding morfocromático,
            digitalização em nuvem, inventário e dashboards, motor IHE, paridade em provador com
            AR, feed social e afiliação C&amp;A/Renner sem checkout in-app.
          </p>
        </div>
      </section>

      <section id="cenario-a" className="investment-section">
        <div className="document-section-heading">
          <span className="eyebrow">6.2 / Cenário A · Equipe contratada (custo de mercado)</span>
          <h2 className="display-title">Alocação de especialistas <em>por papel e módulo.</em></h2>
          <p>Seis perfis complementares ao longo de 6 meses, totalizando R$ 354.000 em capital humano.</p>
        </div>

        <div className="investment-table investment-table--staff">
          <div className="investment-table__head">
            <span>Papel</span>
            <span>Dedicação</span>
            <span>Custo mensal</span>
            <span>Total (R$)</span>
          </div>
          {staff.map(([role, dedication, monthly, total]) => (
            <div className="investment-table__row" key={role}>
              <strong>{role}</strong>
              <span>{dedication}</span>
              <span>{monthly}</span>
              <strong>{total}</strong>
            </div>
          ))}
          <div className="investment-table__total">
            <span>Total de pessoal (6 perfis)</span>
            <strong>R$ 354.000</strong>
          </div>
        </div>

        <h3 className="investment-subheading">Distribuição do custo por módulo (100% = R$ 354.000)</h3>
        <div className="investment-table investment-table--modules">
          <div className="investment-table__head">
            <span>Módulo</span>
            <span>Requisitos</span>
            <span>% do esforço</span>
            <span>Custo (R$)</span>
          </div>
          {moduleCosts.map(([module, reference, effort, cost]) => (
            <div className="investment-table__row" key={module}>
              <strong>{module}</strong>
              <span>{reference}</span>
              <span>{effort}</span>
              <strong>{cost}</strong>
            </div>
          ))}
          <div className="investment-table__total">
            <span>Total alocado nos módulos (100%)</span>
            <strong>R$ 354.000</strong>
          </div>
        </div>
      </section>

      <section id="outros-custos" className="investment-section investment-section--tint">
        <div className="document-section-heading">
          <span className="eyebrow">6.3 &amp; 6.4 / Infraestrutura, demais custos e consolidado</span>
          <h2 className="display-title">Consolidação do <em>Cenário A.</em></h2>
          <p>Seis meses de infraestrutura AWS, licenças, dados rotulados, adequação jurídica LGPD, testes e registro de marca.</p>
        </div>

        <div className="additional-costs">
          {additionalCosts.map(([item, description, cost]) => (
            <article key={item}>
              <div>
                <h3>{item}</h3>
                <p>{description}</p>
              </div>
              <strong>{cost}</strong>
            </article>
          ))}
        </div>

        <div className="investment-total">
          <div><span>Pessoal (equipe contratada)</span><strong>R$ 354.000</strong></div>
          <div><span>Infraestrutura e demais custos (6 meses)</span><strong>R$ 23.000</strong></div>
          <div><span>Subtotal</span><strong>R$ 377.000</strong></div>
          <div><span>Contingência (15%)</span><strong>R$ 56.550</strong></div>
          <div id="consolidado" className="investment-total__grand">
            <span>Total estimado · Cenário A</span>
            <strong>≈ R$ 433.550 (cerca de R$ 434 mil)</strong>
          </div>
        </div>

        <aside className="document-note">
          <span className="document-note__mark">i</span>
          <p>
            <strong>Escopo de licenças externas:</strong> API de previsão meteorológica (nível
            gratuito suficiente para o volume do MVP) e SDKs nativos de Realidade Aumentada
            (ARKit/ARCore sem licença inicial) não geram desembolso adicional nesta etapa.
          </p>
        </aside>
      </section>

      <section id="cenario-b" className="investment-section">
        <div className="document-section-heading">
          <span className="eyebrow">6.5 / Cenário B · Realidade do TCC (4 alunos sem remuneração)</span>
          <h2 className="display-title">Baixo desembolso direto. <em>Alto capital intelectual.</em></h2>
          <p>Viabilidade prática de execução acadêmica combinando créditos educacionais em nuvem e dedicação direta dos autores.</p>
        </div>

        <div className="scenario-b">
          <div><span>AWS com créditos educacionais e nível gratuito (4 a 6 meses)</span><strong>R$ 3.000</strong></div>
          <div><span>Contas de lojas de aplicativos e domínio</span><strong>R$ 750</strong></div>
          <div><span>Testes com usuários (incentivos simbólicos)</span><strong>R$ 500</strong></div>
          <div><span>Anotação própria de dados e termos a partir de modelos</span><strong>R$ 1.000</strong></div>
          <div><span>Subtotal de desembolso</span><strong>R$ 5.250</strong></div>
          <div><span>Contingência (15%)</span><strong>R$ 788</strong></div>
          <div className="scenario-b__total">
            <span>Total de desembolso direto · Cenário B</span>
            <strong>≈ R$ 6.038 (cerca de R$ 6 mil)</strong>
          </div>
        </div>

        <aside className="investment-hours">
          <span>Aporte econômico de horas da equipe (não desembolso)</span>
          <strong>
            1.920 horas <i>= R$ 172.800</i>
          </strong>
          <p>
            Memória de cálculo: <strong>4 alunos × 20 h/semana × 24 semanas = 1.920 horas</strong>{" "}
            valoradas à referência técnica de <strong>R$ 90/hora</strong>, evidenciando o
            investimento real de engenharia aportado pelos autores.
          </p>
        </aside>
      </section>

      <section id="cronograma" className="investment-section">
        <div className="document-section-heading">
          <span className="eyebrow">6.6 / Cronograma executivo de 24 semanas</span>
          <h2 className="display-title">Seis fases com entregas <em>paralelas e incrementais.</em></h2>
        </div>

        <div className="timeline">
          {stages.map(([phase, title, weeks, deliverable]) => (
            <article className="timeline-item" key={phase}>
              <span className="timeline-item__number">{phase.replace("Fase ", "")}</span>
              <div>
                <span>{phase} · {weeks}</span>
                <h3>{title}</h3>
                <p>{deliverable}</p>
              </div>
              <CalendarDays size={17} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section id="operacao" className="investment-section investment-section--dark">
        <div className="document-section-heading">
          <span className="eyebrow">6.7 / Operação pós-lançamento e ponto de equilíbrio</span>
          <h2 className="display-title">Ganho de escala e <em>break-even em 10.000 MAU.</em></h2>
          <p>
            Como o processamento pesado de visão computacional concentra-se no cadastro inicial
            das peças, o custo unitário mensal por usuário ativo cai expressivamente conforme a
            base cresce.
          </p>
        </div>

        <div className="operating-table">
          <div>
            <span>Usuários ativos / mês (MAU)</span>
            <span>Infraestrutura estimada / mês</span>
            <span>Custo médio por usuário</span>
          </div>
          {operatingCosts.map(([users, infrastructure, perUser]) => (
            <div key={users}>
              <strong>{users}</strong>
              <span>{infrastructure}</span>
              <strong>{perUser}</strong>
            </div>
          ))}
        </div>

        <div className="break-even">
          <div className="break-even__header">
            <div>
              <span className="eyebrow">Memória de cálculo do Break-Even operacional</span>
              <h3>Ponto de equilíbrio em 10.000 usuários ativos (MAU)</h3>
            </div>
            <TrendingUp size={24} aria-hidden="true" />
          </div>

          <div className="break-even__grid">
            <article className="break-even__card">
              <span>1. Receita de Assinaturas Premium</span>
              <strong>≈ R$ 7.500 / mês</strong>
              <p>
                Conversão de <strong>5%</strong> no plano Premium (R$ 19,90/mês) ={" "}
                <strong>500 assinantes</strong> → R$ 9.950 brutos →{" "}
                <strong>≈ R$ 7.500 líquidos</strong> após descontar ~25% de taxa das lojas de
                aplicativos.
              </p>
            </article>

            <article className="break-even__card">
              <span>2. Receita de Afiliação B2B2C</span>
              <strong>≈ R$ 2.250 / mês</strong>
              <p>
                Conversão de <strong>3%</strong> comprando no mês (<strong>300 usuários</strong>) ×
                ticket médio de <strong>R$ 150</strong> × comissão de afiliação de{" "}
                <strong>5%</strong> junto a C&amp;A e Lojas Renner.
              </p>
            </article>

            <article className="break-even__card break-even__card--result">
              <span>3. Resultado Operacional de Infraestrutura</span>
              <strong>≈ R$ 9.700 vs. R$ 9.000</strong>
              <p>
                A <strong>receita líquida total de ≈ R$ 9.700/mês</strong> cobre integralmente o{" "}
                <strong>custo de infraestrutura AWS de ≈ R$ 9.000/mês</strong> (RDS pgvector,
                Lambda e S3/CloudFront) já na marca de 10 mil MAU.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="riscos" className="investment-section">
        <div className="document-section-heading">
          <span className="eyebrow">6.8 &amp; 6.9 / Gestão de riscos, redução de escopo e próximos passos</span>
          <h2 className="display-title">Cenário enxuto e <em>trade-offs de engenharia.</em></h2>
        </div>

        <div className="risk-list">
          <article>
            <AlertTriangle size={18} aria-hidden="true" />
            <div>
              <h3>Cenário Enxuto (≈ R$ 364 mil no Cenário A) · Postergação de AR e Feed para a v2</h3>
              <p>
                A <strong>Realidade Aumentada (≈ R$ 35 mil)</strong> é o item de maior incerteza
                técnica, e o <strong>Feed Social (≈ R$ 25 mil)</strong> não bloqueia a dor central
                de uso e compra. Entregar a paridade de peças em loja (<strong>RF08 e RF09</strong>)
                no MVP e reservar AR e Feed para a v2 reduz o orçamento do Cenário A para{" "}
                <strong>cerca de R$ 364 mil</strong>, mitigando risco de prazo.
              </p>
            </div>
          </article>
          <article>
            <AlertTriangle size={18} aria-hidden="true" />
            <div>
              <h3>Trade-off técnico: API paga vs. U²-Net / rembg em AWS Lambda (meta RNF03 ≤ 3,5 s)</h3>
              <p>
                APIs terceirizadas de remoção de fundo escalam linearmente o custo por foto; já
                executar modelos open-source (<strong>U²-Net / rembg</strong>) em{" "}
                <strong>AWS Lambda</strong> reduz o custo unitário no volume do MVP, exigindo
                calibração de memória e concorrência provisionada na Lambda para cumprir o SLA de
                segmentação em até <strong>3,5 segundos (RNF03)</strong>.
              </p>
            </div>
          </article>
          <article>
            <AlertTriangle size={18} aria-hidden="true" />
            <div>
              <h3>Qualidade contínua (80% pytest — RNF05) e aprovação de afiliados C&amp;A e Renner</h3>
              <p>
                A cobertura mínima de 80% de testes automatizados precisa ser mantida desde a
                Sprint 1 para evitar gargalos na Fase 5, enquanto o credenciamento nos programas
                de afiliação da C&amp;A e das Lojas Renner deve iniciar ainda na fase de fundações.
              </p>
            </div>
          </article>
        </div>

        <div id="proximos-passos" className="next-steps">
          <span className="eyebrow">6.9 / Próximos passos executivos</span>
          <ul>
            <li>Validar faixas salariais e câmbio com cotações de mercado vigentes.</li>
            <li>Solicitar créditos AWS em programas educacionais e de fomento a startups.</li>
            <li>Prototipar o pipeline U²-Net/rembg em Lambda para aferir tempo (≤ 3,5 s) e custo real por imagem.</li>
            <li>Validar elasticidade do preço de referência do plano Premium (R$ 19,90/mês) junto aos usuários.</li>
          </ul>
        </div>
      </section>

      <Link className="document-next-link" href="/#tema-experiencia">
        Explorar os 6 módulos do MVP na sequência <ArrowUpRight size={15} aria-hidden="true" />
      </Link>
    </DocumentPage>
  );
}
