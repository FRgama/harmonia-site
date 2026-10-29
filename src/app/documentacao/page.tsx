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
    "Índice auditável em Markdown que rastreia 100% das seções do documento oficial da HarmonIA nos 8 atos do site.",
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
  const currentCovered = allSections.filter((s) => s.status === "Coberta").length;
  const initialCounts = allSections.reduce(
    (counts, section) => {
      counts[getInitialSectionStatus(section.number)] += 1;
      return counts;
    },
    { Coberta: 0, Parcial: 0, Pendente: 0 } as Record<SectionStatus, number>,
  );

  return (
    <DocumentPage
      eyebrow="Auditoria / Rastreabilidade 100% com o PDF oficial"
      index="08"
      title={<>O que o documento especifica. <em>Onde o site apresenta.</em></>}
      description="Este mapa conecta todas as seções do documento oficial (FECAP, 2026) e as 3 pranchas de personas diretamente aos 8 atos da página principal."
    >
      <section className="documentation-intro">
        <BookOpenCheck size={24} strokeWidth={1.4} aria-hidden="true" />
        <div>
          <h2>100% das seções documentais cobertas e unificadas em 8 atos.</h2>
          <p>
            Todas as {currentCovered} subseções mapeadas — da capa institucional FECAP às
            equações do Motor IHE, tabelas financeiras, memória de cálculo do break-even e
            referências — encontram-se integradas sem duplicações na narrativa principal.
          </p>
        </div>
      </section>

      <section className="documentation-summary" aria-label="Evolução da cobertura documental">
        <div>
          <strong>{currentCovered}/{allSections.length}</strong>
          <span>Seções cobertas atualmente (100%)</span>
        </div>
        <div>
          <strong>{initialCounts.Parcial}</strong>
          <span>Seções que eram parciais na v1</span>
        </div>
        <div>
          <strong>{initialCounts.Pendente}</strong>
          <span>Seções que estavam pendentes na v1</span>
        </div>
      </section>

      <div className="markdown-heading">
        <div>
          <span className="eyebrow">Mapa de rastreabilidade</span>
          <h2>
            Índice das seções <em>nos 8 atos.</em>
          </h2>
        </div>
        <a href="/Docs/HarmonIA%20-%20Documenta%C3%A7%C3%A3o%20(1).pdf" target="_blank" rel="noreferrer">
          Abrir PDF oficial <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>

      <div className="documentation-groups">
        {documentSectionGroups.map((group) => (
          <section className="documentation-group" key={group.number}>
            <h3>
              <Link href={group.page}>
                {group.number}. {group.title}
              </Link>
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
                      <span className="documentation-entry__initial">v1: {original.toLowerCase()}</span>
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
        <span className="document-note__mark">i</span>
        <p>
          <strong>Nota de contexto acadêmico:</strong> este portal apresenta a especificação de
          produto, engenharia de software, arquitetura em nuvem e viabilidade financeira do MVP
          HarmonIA elaborado como Trabalho de Conclusão de Curso em Ciência da Computação na
          FECAP (São Paulo, 2026).
        </p>
      </aside>

      <details className="markdown-source">
        <summary>Ver fonte em Markdown deste mapa</summary>
        <pre>{markdown}</pre>
      </details>

      <section id="referencias" className="references-section">
        <span className="eyebrow">Seção 7 · Referências oficiais</span>
        <h2>
          Fontes que fundamentam <em>o projeto.</em>
        </h2>
        <ul>
          <li>
            <strong>Associação Brasileira do Varejo Têxtil (ABVTEX, 2025).</strong> Dados
            mercadológicos do setor de vestuário no Brasil, contexto de desperdício têxtil e
            subutilização de roupas pelos consumidores.
          </li>
          <li>
            <strong>Lei nº 13.709/2018 (LGPD).</strong> Base legal do RNF01, exigindo
            consentimento explícito, criptografia AES-256 e exclusão definitiva de imagens.
          </li>
          <li>
            <strong>Comissão Internacional de Iluminação (CIE).</strong> Espaço de cor
            perceptualmente uniforme CIE L*a*b*, base algorítmica da distância cromática ΔE*ab no
            Motor IHE.
          </li>
        </ul>
      </section>
    </DocumentPage>
  );
}
