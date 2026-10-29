import { ArrowRight, Camera, ScanFace, Shirt, Sparkles } from "lucide-react";
import { EditorialImage } from "@/components/editorial-image";
import { ScrollReveal } from "@/components/scroll-reveal";

const steps = [
  {
    number: "01",
    icon: ScanFace,
    title: "Mapeie biótipo e colorimetria",
    text: "Cinco silhuetas corporais e teste assistido via câmera frontal nas 12 cartelas sazonais expandidas.",
  },
  {
    number: "02",
    icon: Camera,
    title: "Digitalize em até 3 toques",
    text: "Segmentação em nuvem remove fundos (lençóis, cabides, paredes) e extrai cores em CIE L*a*b*.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Cruze contexto, clima e IHE",
    text: "Telemetria meteorológica, ocasião e vetores de estilo geram looks ranqueados pelo Índice de Harmonia Estética.",
  },
  {
    number: "04",
    icon: Shirt,
    title: "Decida em casa, na loja e na rede",
    text: "Inventário analítico, paridade e AR no provador, moodboards comunitários e curadoria C&A e Lojas Renner.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="how-section">
      <div className="how-section__inner">
        <div className="how-section__copy">
          <ScrollReveal>
            <span className="eyebrow">Fluxo integrado · Da câmera ao cotidiano</span>
            <h2 className="display-title">
              Inteligência que começa <em>em você.</em>
            </h2>
          </ScrollReveal>
          <div className="how-section__steps">
            {steps.map(({ number, icon: Icon, title, text }, index) => (
              <ScrollReveal key={number} delay={index * 0.07}>
                <article className="how-section__step">
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <Icon size={19} strokeWidth={1.5} aria-hidden="true" />
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="how-section__image">
          <EditorialImage
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1300&q=88"
            alt="Duas pessoas explorando peças de roupa em uma loja"
            className="step-photo absolute inset-0 rounded-[3px]"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          <div className="absolute bottom-5 left-5 flex max-w-[260px] items-center gap-3 rounded-none border border-[#c2a05a]/60 bg-[#efe6d2] p-4 md:bottom-8 md:left-8">
            <div className="grid size-9 shrink-0 place-items-center bg-[#151a1f] text-[#c2a05a]">
              <ArrowRight size={15} aria-hidden="true" />
            </div>
            <p className="m-0 text-[10px] font-semibold leading-4 text-[#151a1f]">
              Seis módulos conectados: do armário de casa ao espelho do provador.
            </p>
          </div>
          <span className="absolute right-5 top-5 border border-[#c2a05a]/50 bg-[#efe6d2] px-3 py-2 text-[9px] font-bold uppercase text-[#151a1f] md:right-8 md:top-8">
            Jornada do MVP · 3.1 a 3.6
          </span>
        </div>
      </div>
    </section>
  );
}
