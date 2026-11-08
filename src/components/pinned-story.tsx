"use client";

import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowDownRight, Check, Pause, Play, ScanLine, Sparkles } from "lucide-react";
import { EditorialImage } from "@/components/editorial-image";
import { ScrollReveal } from "@/components/scroll-reveal";

type StoryMode = "closet" | "outfit" | "compare" | "ar";

type StoryChapter = {
  number: string;
  title: string;
  text: string;
};

type PinnedStoryProps = {
  id?: string;
  mode: StoryMode;
  eyebrow: string;
  transitionQuote?: string;
  title: string;
  chapters: StoryChapter[];
  autoPlay?: boolean;
  secondaryImage?: string;
  secondaryImageAlt?: string;
};

const sceneImages = {
  closet: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
  outfit: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1100&q=85",
  store: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
  ar: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85",
};

const itemImages = [
  "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=280&q=75",
  "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=280&q=75",
  "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=280&q=75",
];

export function PinnedStory({
  id,
  mode,
  eyebrow,
  transitionQuote,
  title,
  chapters,
  autoPlay = false,
  secondaryImage,
  secondaryImageAlt,
}: PinnedStoryProps) {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const reduceMotion = useReducedMotion();
  const active = chapters[activeChapter];

  useEffect(() => {
    if (!autoPlay || !isPlaying || reduceMotion || chapters.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveChapter((current) => (current + 1) % chapters.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [autoPlay, chapters.length, isPlaying, reduceMotion]);

  return (
    <section
      id={id}
      className={`pinned-story pinned-story--${mode}${secondaryImage ? " pinned-story--has-secondary" : ""}`}
    >
      <div className="pinned-story__intro">
        <ScrollReveal>
          <span className="eyebrow">{eyebrow}</span>
          {transitionQuote && (
            <p className="mb-3 mt-4 border-l-2 border-[#d8b36a] pl-3.5 font-(family-name:--serif) text-[18px] sm:text-[22px] italic text-[#d8b36a]">
              {transitionQuote}
            </p>
          )}
          <h2 className="display-title">{title}</h2>
        </ScrollReveal>
      </div>
      <div className="pinned-story__grid">
        <div className="pinned-story__visual-wrap">
          <div className="pinned-story__visual">
            <MotionConfig reducedMotion="user">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${mode}-${activeChapter}`}
                  className="pinned-story__scene"
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 1.01 }}
                  transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Scene mode={mode} activeChapter={activeChapter} activeTitle={active.title} />
                </motion.div>
              </AnimatePresence>
            </MotionConfig>
            <div className="pinned-story__caption" aria-live={autoPlay ? "off" : "polite"}>
              <span>{active.number}</span>
              <div>
                <strong>{active.title}</strong>
                <p>{active.text}</p>
              </div>
              <ArrowDownRight size={18} aria-hidden="true" />
            </div>
          </div>
          {secondaryImage && (
            <div className="pinned-story__secondary">
              <EditorialImage
                src={secondaryImage}
                alt={secondaryImageAlt ?? ""}
                className="pinned-story__secondary-image"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span>VISÃO COMPLEMENTAR</span>
            </div>
          )}
        </div>
        {autoPlay ? (
          <div className="pinned-story__chapters pinned-story__chapters--carousel">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={active.number}
                className="pinned-story__chapter pinned-story__chapter--current"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: reduceMotion ? 0 : 0.3 }}
                aria-live="polite"
              >
                <span className="pinned-story__number">{active.number}</span>
                <div>
                  <h3>{active.title}</h3>
                  <p>{active.text}</p>
                </div>
              </motion.article>
            </AnimatePresence>
            <div className="pinned-story__carousel-controls" role="group" aria-label="Controles da justificativa">
              <div className="pinned-story__carousel-dots">
                {chapters.map((chapter, index) => (
                  <button
                    key={chapter.number}
                    type="button"
                    aria-label={`Mostrar etapa ${chapter.number}: ${chapter.title}`}
                    aria-pressed={index === activeChapter}
                    onClick={() => {
                      setActiveChapter(index);
                      setIsPlaying(false);
                    }}
                  />
                ))}
              </div>
              <button
                className="pinned-story__carousel-toggle"
                type="button"
                aria-label={isPlaying && !reduceMotion ? "Pausar carrossel" : "Retomar carrossel"}
                aria-pressed={!(isPlaying && !reduceMotion)}
                disabled={Boolean(reduceMotion)}
                onClick={() => setIsPlaying((playing) => !playing)}
              >
                {isPlaying && !reduceMotion ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}
              </button>
            </div>
          </div>
        ) : (
          <div className="pinned-story__chapters">
            {chapters.map((chapter, index) => (
              <motion.article
                key={chapter.number}
                className={`pinned-story__chapter ${index === activeChapter ? "is-active" : ""}`}
                onViewportEnter={() => setActiveChapter(index)}
                viewport={{ amount: 0.55, margin: "-15% 0px -15% 0px" }}
                initial={{ opacity: 1, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.45 }}
              >
                <span className="pinned-story__number">{chapter.number}</span>
                <div>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Scene({ mode, activeChapter, activeTitle }: { mode: StoryMode; activeChapter: number; activeTitle: string }) {
  if (mode === "closet") {
    return (
      <div className="closet-scene">
        <EditorialImage src={sceneImages.closet} alt="Arara de roupas em um guarda-roupa físico" className="closet-scene__photo" sizes="(max-width: 768px) 100vw, 50vw" />
        <div className="closet-scene__veil" />
        <div className="closet-scene__label"><span>ANTES</span><strong>Seu armário, sem filtros.</strong></div>
        <motion.div className="closet-scene__catalog" animate={{ opacity: activeChapter === 0 ? 0.58 : 1, x: activeChapter === 0 ? 36 : 0, y: activeChapter === 0 ? 18 : 0, rotate: activeChapter === 0 ? 3 : 0 }} transition={{ duration: 0.55 }}>
          <div className="closet-scene__catalog-head"><span>HARMON<span className="brand-wordmark__ia">IA</span></span><span>ACERVO / 024</span></div>
          <div className="closet-scene__tiles">{itemImages.map((src, index) => <div key={src} className="closet-scene__tile" style={{ backgroundImage: `url('${src}')`, opacity: activeChapter === 0 && index > 0 ? 0.3 : 1 }} />)}</div>
          <div className="closet-scene__catalog-foot"><span>{activeChapter === 0 ? "Peças à espera de um novo olhar" : "Seu inventário começa a ganhar forma"}</span><ScanLine size={14} aria-hidden="true" /></div>
        </motion.div>
      </div>
    );
  }

  if (mode === "outfit") {
    return (
      <div className="outfit-scene">
        <EditorialImage src={sceneImages.outfit} alt="Look contemporâneo sugerido a partir das peças do acervo" className="outfit-scene__photo" sizes="(max-width: 768px) 100vw, 50vw" />
        <div className="outfit-scene__shade" />
        <div className="outfit-scene__top"><span><Sparkles size={13} aria-hidden="true" /> LOOK EM CONSTRUÇÃO</span><span>H / 04</span></div>
        <div className="outfit-scene__pieces">
          {itemImages.map((src, index) => (
            <motion.div key={src} className="outfit-scene__piece" initial={false} animate={{ opacity: activeChapter >= index ? 1 : 0.18, y: activeChapter >= index ? 0 : 16, rotate: activeChapter >= index ? [0, index % 2 ? 2 : -2, 0] : 0 }} transition={{ duration: 0.45, delay: index * 0.06 }}>
              <div style={{ backgroundImage: `url('${src}')` }} />
              <span>{["CAMADA", "BASE", "DETALHE"][index]}</span>
            </motion.div>
          ))}
        </div>
        <div className="outfit-scene__result"><span>COMBINAÇÃO {String(activeChapter + 1).padStart(2, "0")}</span><strong>{activeChapter < 2 ? "Seu estilo está tomando forma" : "Uma nova leitura de você"}</strong><div className="outfit-scene__progress"><motion.i animate={{ scaleX: (activeChapter + 1) / 4 }} transition={{ duration: 0.4 }} /></div></div>
      </div>
    );
  }

  if (mode === "compare") {
    return (
      <div className="compare-scene">
        <div className="compare-scene__store"><EditorialImage src={sceneImages.store} alt="Pessoa observando roupas em uma loja física" className="compare-scene__photo" sizes="(max-width: 768px) 50vw, 25vw" /><span>NA LOJA</span></div>
        <div className="compare-scene__app">
          <div className="compare-scene__app-head"><span>HARMON<span className="brand-wordmark__ia">IA</span></span><span>ANÁLISE</span></div>
          <div className="compare-scene__new-item" style={{ backgroundImage: `url('${itemImages[0]}')` }}><span>NOVA PEÇA</span></div>
          <div className="compare-scene__match"><span>NO SEU ACERVO</span><div>{itemImages.slice(1).map((src) => <i key={src} style={{ backgroundImage: `url('${src}')` }} />)}</div></div>
          <motion.div className="compare-scene__score" animate={{ scale: activeChapter === 0 ? 0.94 : 1, opacity: activeChapter === 0 ? 0.72 : 1 }}><span>PARIDADE</span><strong>{activeChapter === 0 ? "?" : "8.7"}<small>/10</small></strong><b><Check size={11} /> Faz sentido com você</b></motion.div>
        </div>
        <motion.div className="compare-scene__scan" animate={{ opacity: activeChapter === 0 ? 0.2 : 1, scale: activeChapter === 0 ? 0.92 : 1 }}><ScanLine size={17} aria-hidden="true" /></motion.div>
        <div className="compare-scene__caption">{activeTitle}</div>
      </div>
    );
  }

  return (
    <div className="ar-scene">
      <EditorialImage src={sceneImages.ar} alt="Pessoa usando uma composição de moda em ambiente urbano" className="ar-scene__photo" sizes="(max-width: 768px) 100vw, 50vw" />
      <div className="ar-scene__gradient" />
      <div className="ar-scene__top"><span>HARMON<span className="brand-wordmark__ia">IA</span> / PROVADOR</span><span><i /> AR ATIVO</span></div>
      <motion.div className="ar-scene__frame" animate={{ scale: activeChapter === 0 ? 0.92 : 1, rotate: activeChapter === 0 ? -1 : 0 }} transition={{ duration: 0.7 }}><i /><i /><i /><i /><span>{activeChapter === 0 ? "ENQUADRE A PEÇA" : "SUA SILHUETA, EM FOCO"}</span></motion.div>
      <motion.div className="ar-scene__card" animate={{ y: activeChapter === 0 ? 16 : 0, opacity: activeChapter === 0 ? 0 : 1 }} transition={{ duration: 0.4 }}><span>NO SEU CORPO</span><strong>Alfaiataria leve</strong><p>Caimento e cor avaliados com seu perfil.</p><div><b /> COR <b /> CAIMENTO <b /> ESTILO</div></motion.div>
      <div className="ar-scene__reticle"><span /><span /></div>
    </div>
  );
}
