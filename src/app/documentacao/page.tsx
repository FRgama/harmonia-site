import type { Metadata } from "next";
import { ArrowUpRight, BookOpenCheck, CircleCheck, CircleDashed, CircleHelp, ExternalLink } from "lucide-react";
import Link from "next/link";
import { DocumentPage } from "@/components/document-page";
import {
  createDocumentationMarkdown,
  documentSectionGroups,
  type SectionStatus,
} from "@/data/documentation-sections";

export const metadata: Metadata = {
  title: "Mapa de cobertura documental — HarmonIA",
  description:
    "Índice auditável das seções do documento oficial HarmonIA, mapeadas na narrativa do site.",
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

  return (
    <DocumentPage
      eyebrow="Auditoria / Rastreabilidade documental"
      index="08"
      title={<>O que o documento especifica. <em>Onde o site apresenta.</em></>}
      description="Este mapa acompanha os capítulos originais do documento FECAP (2026) e aponta onde cada tópico aparece na narrativa do site."
    >
      <section className="documentation-intro">
        <BookOpenCheck size={24} strokeWidth={1.4} aria-hidden="true" />
        <div>
          <h2>Capítulos e tópicos mapeados na narrativa do site.</h2>
          <p>
            O mapa reúne {allSections.length} tópicos, da apresentação institucional à análise
            de mercado, modelo de negócio, MVP, arquitetura, custos e referências.
          </p>
        </div>
      </section>

      <section className="documentation-summary" aria-label="Resumo da cobertura documental">
        <div>
          <strong>{currentCovered}/{allSections.length}</strong>
          <span>Tópicos mapeados</span>
        </div>
        <div>
          <strong>{documentSectionGroups.length - 1}</strong>
          <span>Capítulos do documento, além dos elementos pré-textuais</span>
        </div>
        <div>
          <strong>8</strong>
          <span>Atos que organizam a experiência do site</span>
        </div>
      </section>

      <div className="markdown-heading">
        <div>
          <span className="eyebrow">Mapa de rastreabilidade</span>
          <h2>
            Índice das seções <em>nos 8 atos.</em>
          </h2>
        </div>
        <a href="/Docs/HarmonIA%20-%20Documenta%C3%A7%C3%A3o.docx" download>
          Baixar documento oficial (.docx) <ArrowUpRight size={13} aria-hidden="true" />
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
          produto, análise de mercado, engenharia de software, arquitetura em nuvem e
          viabilidade financeira do MVP HarmonIA elaborado como Trabalho de Conclusão de Curso
          em Ciência da Computação na FECAP (São Paulo, 2026).
        </p>
      </aside>

      <details className="markdown-source">
        <summary>Ver fonte em Markdown deste mapa</summary>
        <pre>{markdown}</pre>
      </details>

      <section id="referencias" className="references-section">
        <span className="eyebrow">Seção 9 · Referências e links</span>
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
            <strong>Associação Brasileira da Indústria Têxtil e de Confecção (ABIT, 2025).</strong>{" "}
            Contexto macroeconômico e produtivo do setor têxtil brasileiro.
          </li>
          <li>
            <strong>IEMI — Inteligência de Mercado (2025).</strong> Projeções do varejo de
            vestuário e calçados usadas no dimensionamento do mercado.
          </li>
          <li>
            <strong>McKinsey &amp; Company e Business of Fashion (2025).</strong>{" "}
            <em>The State of Fashion</em>, citado no contexto de devoluções e personalização no
            varejo.
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

      <section id="links-projeto" className="project-links">
        <span className="eyebrow">9.2 · Links do projeto</span>
        <a href="https://harmonia-site-olive.vercel.app/" target="_blank" rel="noreferrer">
          Site do projeto <ExternalLink size={14} aria-hidden="true" />
        </a>
        <a
          href="https://www.canva.com/design/DAHYsH4ZWy4/Bx8Nya7r4n3V0eC80bdb0A/edit"
          target="_blank"
          rel="noreferrer"
        >
          Apresentação do projeto no Canva <ExternalLink size={14} aria-hidden="true" />
        </a>
      </section>
    </DocumentPage>
  );
}
