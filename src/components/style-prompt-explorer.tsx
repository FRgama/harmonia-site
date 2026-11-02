"use client";

import { useState } from "react";
import { useReducedMotion } from "motion/react";
import { SidekickDock } from "@/../public/componentes/overlays/sidekick-dock";
import { GlassSurface } from "@/../public/componentes/surfaces/glass-surface";

const promptDestinations = [
  {
    terms: ["caimento", "morfologia", "colorimetria"],
    targetId: "tema-tecnologia",
    destination: "Motor IHE e arquitetura",
  },
  {
    terms: ["armário", "acervo", "inventário"],
    targetId: "inventario",
    destination: "Inventário Virtual",
  },
  {
    terms: ["esg", "impacto", "compra"],
    targetId: "impacto",
    destination: "Impacto ESG",
  },
  {
    terms: ["módulo", "produto", "mvp", "experiência"],
    targetId: "tema-experiencia",
    destination: "Módulos do MVP",
  },
  {
    terms: ["requisito", "privacidade", "lgpd"],
    targetId: "tema-requisitos",
    destination: "Requisitos e privacidade",
  },
];

export function StylePromptExplorer() {
  const [feedback, setFeedback] = useState("");
  const reduceMotion = useReducedMotion();

  function handlePrompt(prompt: string) {
    const normalizedPrompt = prompt.toLocaleLowerCase("pt-BR");
    const match = promptDestinations.find(({ terms }) =>
      terms.some((term) => normalizedPrompt.includes(term)),
    );

    if (!match) {
      setFeedback(
        "Esta prévia não está conectada a um modelo de IA. Use uma sugestão ou pergunte sobre um dos temas do projeto.",
      );
      return;
    }

    const target = document.getElementById(match.targetId);
    if (!target) {
      setFeedback(`Não foi possível localizar a seção ${match.destination}.`);
      return;
    }

    setFeedback(`Abrindo a seção: ${match.destination}.`);
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <section
      aria-labelledby="style-prompt-title"
      className="mx-auto mt-14 w-[min(100%_-_40px,1100px)] border-t border-[var(--line)]/50 py-10"
    >
      <GlassSurface variant="paper" className="p-6 sm:p-9">
        <div className="mx-auto mb-6 max-w-2xl text-center">
          <span className="eyebrow">Explore a inteligência de estilo</span>
          <h3
            id="style-prompt-title"
            className="mt-3 font-(family-name:--serif) text-3xl font-medium text-[var(--ink)] sm:text-4xl"
          >
            Uma pergunta abre um novo capítulo.
          </h3>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            Prévia de navegação pelo conteúdo do projeto; nenhum prompt é enviado a um serviço
            externo.
          </p>
        </div>
        <SidekickDock
          placeholder="Explore um tema da HarmonIA..."
          quickPrompts={[
            "Avaliar caimento de peça",
            "Compatibilidade com meu armário",
            "Impacto ESG da compra",
          ]}
          onSubmit={handlePrompt}
        />
        <p
          className="mx-auto mt-4 min-h-6 max-w-2xl text-center text-xs leading-5 text-[var(--muted)]"
          role="status"
          aria-live="polite"
        >
          {feedback}
        </p>
      </GlassSurface>
    </section>
  );
}
