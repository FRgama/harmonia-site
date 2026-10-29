import { Accessibility, Gauge, LockKeyhole, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const principles = [
  {
    icon: ShieldCheck,
    number: "01",
    label: "Segurança · RF01 & RNF02",
    title: "Governança estrita de identidade e acesso.",
    text: "Todas as chamadas de API são autenticadas via tokens JWT de expiração curta emitidos pelo AWS Cognito, com controle de acesso por papéis (RBAC) e gestão protegida de segredos.",
    signals: ["AWS Cognito", "JWT curta expiração", "RBAC", "Gestão de segredos"],
    tone: "security",
  },
  {
    icon: LockKeyhole,
    number: "02",
    label: "Privacidade · RNF01, RN01 & RN04",
    title: "Conformidade integral com a LGPD.",
    text: "Isolamento Multi-Tenant estrito por conta, consentimento explícito no 1º acesso, criptografia ponta a ponta e direito ao esquecimento com expurgo físico no bucket S3.",
    signals: ["Lei nº 13.709/2018 (LGPD)", "AES-256 em repouso", "TLS 1.3 em trânsito", "Expurgo S3 ≤ 24h", "Multi-Tenant"],
    tone: "privacy",
  },
  {
    icon: Gauge,
    number: "03",
    label: "Performance & Resiliência · RNF03 & RNF04",
    title: "Respostas em segundos e alta disponibilidade.",
    text: "Pipeline serverless calibrado para manter o processamento visual ágil sob rede móvel estável, sustentado por backups automatizados e esteira CI/CD resiliente.",
    signals: ["Segmentação ≤ 3,5 s", "Geração IA < 1,5 s", "SLA 99,5%", "Backup diário RDS", "Rollback instantâneo"],
    tone: "performance",
  },
  {
    icon: Accessibility,
    number: "04",
    label: "Usabilidade & Qualidade · RNF05 & RNF06",
    title: "Três toques na tela, 80% de testes na base.",
    text: "Fluxo de captura desenhado para eliminar o trabalho manual que faz usuários abandonarem apps de moda, sustentado por testes automatizados rigorosos a cada sprint.",
    signals: ["Cadastro em ≤ 3 toques", "Cobertura ≥ 80% pytest", "Pull Request aprovado", "Acessibilidade validada"],
    tone: "usability",
  },
];

export function Requirements() {
  return (
    <section id="privacidade" className="trust-section trust-section--embedded">
      <div className="trust-section__inner">
        <ScrollReveal>
          <div className="trust-section__heading">
            <div>
              <span className="eyebrow">Quatro Pilares de Confiança · Engenharia de Qualidade</span>
              <h2 className="display-title">
                Construída para <em>ser confiável.</em>
              </h2>
            </div>
            <p>
              Segurança, privacidade legal, desempenho mensurável e simplicidade de uso traduzidos
              em metas verificáveis de engenharia.
            </p>
          </div>
        </ScrollReveal>

        <div className="trust-grid">
          {principles.map(({ icon: Icon, number, label, title, text, signals, tone }, index) => (
            <ScrollReveal key={label} delay={index * 0.07}>
              <article className={`trust-pillar trust-pillar--${tone}`}>
                <div className="trust-pillar__top">
                  <span>{number} / {label}</span>
                  <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul aria-label={`Indicadores de ${label.toLowerCase()}`}>
                  {signals.map((signal) => (
                    <li key={signal}>{signal}</li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
