import {
  ArrowUpRight,
  BookOpenCheck,
  FileDown,
  GraduationCap,
  Scale,
  SwatchBook,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { EditorialImage } from "@/components/editorial-image";
import { ScrollReveal } from "@/components/scroll-reveal";

const references = [
  {
    code: "01 / Mercado & Sustentabilidade",
    icon: TrendingUp,
    title: "Associação Brasileira do Varejo Têxtil (ABVTEX, 2025)",
    detail:
      "Fornece os dados mercadológicos sobre o setor de vestuário no Brasil — que movimenta centenas de bilhões de reais anualmente — e fundamenta o diagnóstico de desperdício têxtil expressivo e subutilização estrutural das roupas pelos consumidores.",
  },
  {
    code: "02 / Marco Legal & RNF01",
    icon: Scale,
    title: "Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais — LGPD)",
    detail:
      "Base legal estabelecida como o primeiro requisito não funcional (RNF01) do projeto, regendo o consentimento explícito no primeiro acesso, a criptografia AES-256 em repouso e os mecanismos de exclusão física definitiva de imagens.",
  },
  {
    code: "03 / Ciência Colorimétrica",
    icon: SwatchBook,
    title: "Comissão Internacional de Iluminação (CIE — Espaço CIE L*a*b*)",
    detail:
      "Órgão responsável pelo desenvolvimento do espaço de cor tridimensional perceptualmente uniforme CIE L*a*b*, base algorítmica do cálculo de distância cromática euclidiana (ΔE*ab) no Índice de Harmonia Estética (IHE).",
  },
];

const authors = [
  "Maria Kassandra Alves Gomes",
  "Rodrigo Correa da Gama",
  "Sabrinna Cristina Gomes Vicente",
  "Sátiro Gabriel de Souza Santos",
];

export function FinalCta() {
  return (
    <section className="project-theme" id="tema-institucional">
      <div className="project-theme__inner">
        <header className="project-theme__heading">
          <span className="eyebrow">08 / Fundamentação, Autoria e Chancela Acadêmica</span>
          <h2>
            Referências e chancela <em>FECAP.</em>
          </h2>
          <p>
            As bases científicas, regulatórias e mercadológicas da HarmonIA e a ficha técnica
            oficial do Trabalho de Conclusão de Curso em Ciência da Computação.
          </p>
        </header>

        <section id="referencias-home" aria-label="Referências fundamentais do projeto" className="institutional-references">
          {references.map(({ code, icon: Icon, title, detail }, index) => (
            <ScrollReveal key={code} delay={index * 0.08}>
              <article className="institutional-ref-card">
                <div className="institutional-ref-card__top">
                  <span>{code}</span>
                  <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            </ScrollReveal>
          ))}
        </section>

        <ScrollReveal delay={0.12}>
          <section id="autoria-fecap" className="institutional-dossier" aria-label="Ficha técnica institucional FECAP">
            <div className="institutional-dossier__main">
              <div className="institutional-dossier__badge">
                <GraduationCap size={19} strokeWidth={1.5} aria-hidden="true" />
                <span>Ficha Técnica Institucional · São Paulo, 2026</span>
              </div>

              <h3>
                Fundação Escola de Comércio Álvares Penteado — <em>FECAP</em>
              </h3>
              <p className="institutional-dossier__subtitle">
                Centro Universitário Álvares Penteado · Bacharelado em{" "}
                <strong>Ciência da Computação</strong> — Trabalho de Conclusão de Curso (
                <em>Projeto Startup: HarmonIA — Documentação do Produto</em>).
              </p>

              <p className="institutional-dossier__note">
                <strong>Nota de contexto acadêmico:</strong> este portal institucional consolida a
                arquitetura de produto, a modelagem matemática do Motor IHE, a engenharia de
                requisitos e o plano de viabilidade econômico-financeira concebidos para o MVP da
                startup HarmonIA no âmbito acadêmico da FECAP (2026).
              </p>

              <div className="institutional-dossier__actions">
                <a
                  href="/Docs/HarmonIA%20-%20Documenta%C3%A7%C3%A3o%20(1).pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="institutional-btn institutional-btn--primary"
                >
                  <FileDown size={15} aria-hidden="true" />
                  Abrir / Baixar PDF Oficial
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>

                <Link href="/documentacao" className="institutional-btn institutional-btn--secondary">
                  <BookOpenCheck size={15} aria-hidden="true" />
                  Mapa de Cobertura Documental
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="institutional-dossier__credits">
              <div className="institutional-credits-block">
                <span>Autores do Projeto</span>
                <ul>
                  {authors.map((author) => (
                    <li key={author}>{author}</li>
                  ))}
                </ul>
              </div>

              <div className="institutional-credits-block institutional-credits-block--advisor">
                <span>Orientação Acadêmica</span>
                <strong>Prof. Leonardo Fabris Lugoboni</strong>
                <small>Ciência da Computação · FECAP · 2026</small>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <div id="conheca" className="mt-14">
          <div className="relative grid min-h-[420px] overflow-hidden rounded-[2px] border border-[#2019121a] bg-[linear-gradient(135deg,#b5653f_0%,#9a4d3a_45%,#d5b98d_100%)] md:grid-cols-[1.15fr_.85fr]">
            <ScrollReveal className="relative z-10 flex flex-col items-start justify-between p-7 md:p-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#fff5ea]">
                HarmonIA / Ciência, Estilo e Consciência
              </span>
              <div className="py-10 md:py-6">
                <h2 className="m-0 max-w-[630px] font-(family-name:--serif) text-[clamp(52px,7vw,96px)] font-normal leading-[.88] text-[#f8f2e8]">
                  Vista o que você já é.
                </h2>
                <p className="mb-0 mt-5 max-w-[410px] text-[13px] leading-6 text-[#f7e9dc]">
                  Do patrimônio têxtil que já habita o seu armário às próximas escolhas com
                  contexto, ciência cromática e propósito.
                </p>
              </div>
              <Link
                href="/#inicio"
                className="button-inverse-label flex items-center gap-3 rounded-none border border-[#e3c783]/40 bg-[#151a1f] px-6 py-4 text-[11px] font-bold uppercase tracking-[.12em] transition hover:bg-[#2b2119]"
              >
                Voltar ao topo <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </ScrollReveal>
            <EditorialImage
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=88"
              alt="Look de moda com cores e silhueta marcantes"
              className="cta-image relative min-h-[300px] md:min-h-[420px]"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
