"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { Sparkles } from "lucide-react";

export function HarmonyIndex() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const completedProgress = useMotionValue(0.88);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.002,
  });

  const progress = reduceMotion ? completedProgress : springProgress;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(query.matches);
    updatePreference();
    query.addEventListener("change", updatePreference);
    return () => query.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    completedProgress.set(reduceMotion ? 0.92 : 0.88);
  }, [completedProgress, reduceMotion]);

  const score = useTransform(progress, [0.05, 0.95], [68, 92], { clamp: true });
  const scoreLabel = useTransform(score, (value) => `${Math.round(value)}`);
  const ringProgress = useTransform(progress, [0.05, 0.95], [0.42, 0.92], { clamp: true });

  return (
    <div ref={containerRef} className="technology-section__result" aria-label="Medidor dinâmico do Índice de Harmonia Estética">
      <div className="technology-result__orbit">
        <div className="technology-result__ring">
          <svg viewBox="0 0 120 120" role="img" aria-label="Pontuação do IHE atingindo 92%, acima do limiar de 75%">
            <circle cx="60" cy="60" r="52" />
            <motion.circle
              cx="60"
              cy="60"
              r="52"
              style={{
                stroke: "var(--gilt)",
                strokeLinecap: "round",
                pathLength: ringProgress,
              }}
            />
          </svg>
          <div className="technology-result__score">
            <span>
              HARMON<span>IA</span>
            </span>
            <strong>
              <motion.span>{scoreLabel}</motion.span>
              <small>%</small>
            </strong>
            <i>
              <Sparkles size={10} aria-hidden="true" style={{ display: "inline", marginRight: 4 }} />
              IHE ≥ 75%
            </i>
          </div>
        </div>
      </div>

      <div className="technology-result__copy">
        <span>CLASSIFICAÇÃO · SEÇÃO 5.3</span>
        <h3>Look Fortemente Recomendado</h3>
        <p>
          O motor compila o IHE em tempo real de <strong>0% a 100%</strong>. Combinações com{" "}
          <strong>IHE ≥ 75%</strong> recebem o selo de <em>“Looks Fortemente Recomendados”</em>.
        </p>
      </div>
    </div>
  );
}
