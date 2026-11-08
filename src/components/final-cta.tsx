import { GraduationCap } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SubtleStarfield } from "@/components/subtle-starfield";

export function FinalCta() {
  return (
    <section className="project-theme" id="equipe-institucional">
      <div className="project-theme__inner">
        <ScrollReveal>
          <header className="project-theme__heading">
            <span className="eyebrow">07 / Institucional · Chancela Acadêmica &amp; Científica</span>
            <p className="mb-3 mt-4 border-l-2 border-[var(--coral)] pl-3.5 font-(family-name:--serif) text-[18px] sm:text-[22px] italic text-[var(--coral)]">
              “Uma visão fundamentada em pesquisa acadêmica de ponta e execução técnica
              multidisciplinar.”
            </p>
            <h2>
              Chancela institucional <em>FECAP.</em>
            </h2>
          </header>
        </ScrollReveal>

        {/* FECAP Institutional Endorsement Dossier */}
        <ScrollReveal delay={0.1}>
          <section
            id="chancela-fecap"
            className="institutional-dossier subtle-starfield"
            aria-label="Chancela Institucional FECAP"
          >
            <SubtleStarfield count={25} />
            <div className="institutional-dossier__main">
              <div className="institutional-dossier__badge">
                <GraduationCap size={19} strokeWidth={1.5} aria-hidden="true" />
                <span>Chancela Institucional · Centro Universitário Álvares Penteado</span>
              </div>

              <h3>
                Projeto chancelado pela <em>FECAP.</em>
              </h3>
              <p className="institutional-dossier__subtitle">
                Desenvolvido no âmbito do Bacharelado em <strong>Ciência da Computação</strong> da{" "}
                <strong>Fundação Escola de Comércio Álvares Penteado (FECAP)</strong>, combinando
                rigor científico em visão computacional e álgebra vetorial com modelagem de
                viabilidade para o mercado brasileiro de moda e varejo.
              </p>

              <p className="institutional-dossier__note">
                <strong>Fundamentação Mercadológica &amp; Científica:</strong> tese validada com
                dados setoriais da <strong>ABVTEX</strong>, <strong>ABIT</strong>,{" "}
                <strong>IEMI</strong> e <strong>McKinsey / Business of Fashion</strong>, operando
                sob espaço colorimétrico <strong>CIE L*a*b*</strong> e conformidade nativa{" "}
                <strong>LGPD (Privacy by Design)</strong>.
              </p>
            </div>

            <div className="institutional-dossier__credits">
              <div className="institutional-credits-block">
                <span>Instituição Chanceladora</span>
                <strong className="mt-2 block font-(family-name:--serif) text-[26px] font-medium text-white">
                  Centro Universitário Álvares Penteado (FECAP)
                </strong>
                <small className="mt-1 block text-xs text-[#c5c2b6]">
                  São Paulo, SP · Ciência da Computação
                </small>
              </div>

              <div className="institutional-credits-block institutional-credits-block--advisor">
                <span>Orientação &amp; Banca Executiva</span>
                <strong>Prof. Leonardo Fabris Lugoboni</strong>
                <small>Pesquisa Aplicada &amp; Inovação · FECAP · 2026</small>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </section>
  );
}
