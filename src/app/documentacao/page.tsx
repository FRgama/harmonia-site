import type { Metadata } from "next";
import { ArrowUpRight, BookOpenCheck, CircleCheck, CircleDashed, CircleHelp } from "lucide-react";
import Link from "next/link";
import { DocumentPage } from "@/components/document-page";
import {
  createDocumentationMarkdown,
  documentSectionGroups,
  getInitialSectionStatus,
  type SectionStatus,
} from "@/data/documentation-sections";

export const metadata: Metadata = {
  title: "Mapa de cobertura documental — HarmonIA",
  description:
    "Índice em Markdown que compara as seções do documento HarmonIA com o conteúdo publicado no site.",
};

const statusClass: Record<SectionStatus, string> = {
  Coberta: "documentation-status--covered",
  Parcial: "documentation-status--partial",
  Pendente: "documentation-status--pending",
};

const StatusIcon = ({ status }: { status: SectionStatus }) => {
  if (status === "Coberta") return <CircleCheck size={14} aria-hidden="true" />;
  if (status === "Parcial") return <CircleDashed size={14} aria-hidden="true" />;
  return <CircleHelp size={14} aria-hidden="true" />;
};

export default function DocumentationPage() {
  const markdown = createDocumentationMarkdown();
  const allSections = documentSectionGroups.flatMap((group) => group.sections);
  const initialCounts = allSections.reduce(
    (counts, section) => {
      counts[getInitialSectionStatus(section.number)] += 1;
      return counts;
    },
    { Coberta: 0, Parcial: 0, Pendente: 0 } as Record<SectionStatus, number>,
  );

  return (
    <DocumentPage
      eyebrow="Índice / Leitura comparativa"
      index="07"
      title={<>O que o documento pede. <em>O que o site apresenta.</em></>}
      description="Este índice acompanha as seções do PDF e aponta a página em que cada tema é apresentado. A avaliação inicial também registra quais eram as lacunas antes das páginas complementares."
    >
      <section className="documentation-intro">
        <BookOpenCheck size={24} strokeWidth={1.4} aria-hidden="true" />
        <div>
          <h2>As lacunas iniciais foram mapeadas e endereçadas.</h2>
          <p>
            Na primeira versão do site, {initialCounts.Coberta} seção estava
            coberta, {initialCounts.Parcial} estavam parcialmente cobertas e
            {` ${initialCounts.Pendente} `}estavam pendentes. As novas páginas
            abaixo completam o conteúdo documental; a avaliação inicial
            permanece visível em cada item.
          </p>
        </div>
      </section>

      <section className="documentation-summary" aria-label="Cobertura antes das páginas complementares">
        <div><strong>{initialCounts.Coberta}</strong><span>Coberta inicialmente</span></div>
        <div><strong>{initialCounts.Parcial}</strong><span>Parcial inicialmente</span></div>
        <div><strong>{initialCounts.Pendente}</strong><span>Pendente inicialmente</span></div>
      </section>

      <div className="markdown-heading">
        <div><span className="eyebrow">Mapa de seções</span><h2>Índice do documento <em>em Markdown.</em></h2></div>
        <a href="/Docs/HarmonIA%20-%20Documenta%C3%A7%C3%A3o%20(1).pdf" target="_blank" rel="noreferrer">
          Abrir PDF original <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>

      <div className="documentation-groups">
        {documentSectionGroups.map((group) => (
          <section className="documentation-group" key={group.number}>
            <h3>
              <Link href={group.page}>{group.number}. {group.title}</Link>
              <ArrowUpRight size={14} aria-hidden="true" />
            </h3>
            <ul>
              {group.sections.map((section) => {
                const original = getInitialSectionStatus(section.number);
                return (
                  <li key={section.number}>
                    <Link href={section.page}>
                      <span className={`documentation-status ${statusClass[section.status]}`}>
                        <StatusIcon status={section.status} />
                        {section.status}
                      </span>
                      <span className="documentation-entry">
                        <strong>{section.number}</strong> {section.title}
                      </span>
                      <span className="documentation-entry__initial">Inicial: {original.toLowerCase()}</span>
                      <ArrowUpRight className="documentation-entry__arrow" size={13} aria-hidden="true" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <aside className="document-note document-note--wide">
        <span className="document-note__mark">!</span>
        <p>
          <strong>Como interpretar “coberta”:</strong> o conteúdo está descrito
          neste site institucional. Isso não afirma que login, IA, câmera,
          integrações com lojas, AR, pagamentos ou demais funcionalidades do
          aplicativo já estejam implementados. A arquitetura também apresenta
          uma divergência de stack no próprio PDF; consulte a página
          correspondente antes de fechar o planejamento.
        </p>
      </aside>

      <details className="markdown-source">
        <summary>Ver o Markdown deste índice</summary>
        <pre>{markdown}</pre>
      </details>

      <section id="referencias" className="references-section">
        <span className="eyebrow">Referências citadas no documento</span>
        <h2>Fontes que fundamentam <em>o projeto.</em></h2>
        <ul>
          <li><strong>ABVTEX (2025).</strong> Contexto de mercado, desperdício e subutilização de roupas no setor têxtil.</li>
          <li><strong>Lei nº 13.709/2018.</strong> Lei Geral de Proteção de Dados Pessoais (LGPD).</li>
          <li><strong>Comissão Internacional de Iluminação (CIE).</strong> Espaço de cor CIE L*a*b* utilizado na abordagem cromática.</li>
        </ul>
      </section>
    </DocumentPage>
  );
}
