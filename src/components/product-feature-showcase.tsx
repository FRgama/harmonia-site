"use client";

import type { PointerEvent } from "react";
import {
  ArrowUpRight,
  Check,
  CloudSun,
  Heart,
  Palette,
  ScanFace,
  Shirt,
  Sparkles,
} from "lucide-react";

type ShowcaseVariant = "styling" | "parity" | "mirror";

const showcaseContent: Record<
  ShowcaseVariant,
  { eyebrow: string; title: string; description: string; accent: string }
> = {
  styling: {
    eyebrow: "MÓDULO 5.3 · IHE EM TEMPO REAL",
    title: "Uma composição com a sua assinatura.",
    description:
      "Clima, ocasião, colorimetria e acervo se encontram em uma sugestão pronta para vestir.",
    accent: "coral",
  },
  parity: {
    eyebrow: "MÓDULO 5.4 · ANÁLISE NA LOJA",
    title: "Compre sabendo o que já combina.",
    description:
      "Uma nova peça é comparada ao seu acervo antes de chegar ao caixa.",
    accent: "gold",
  },
  mirror: {
    eyebrow: "MÓDULO 5.4 · PROVADOR AR",
    title: "Veja a composição ganhar forma.",
    description:
      "Seu perfil e as peças do armário orientam uma visualização integrada ao provador.",
    accent: "blue",
  },
};

type ProductFeatureShowcaseProps = {
  variant: ShowcaseVariant;
};

export function ProductFeatureShowcase({ variant }: ProductFeatureShowcaseProps) {
  const content = showcaseContent[variant];

  function tiltCard(event: PointerEvent<HTMLElement>) {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--tilt-x", `${-y * 3}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${x * 3}deg`);
  }

  function resetTilt(event: PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <article
      className={`product-feature-card product-feature-card--${content.accent}`}
      onPointerMove={tiltCard}
      onPointerLeave={resetTilt}
    >
      <div className="product-feature-card__glow" aria-hidden="true" />
      <div className="product-feature-card__preview" aria-hidden="true">
        <FeaturePreview variant={variant} />
      </div>
      <div className="product-feature-card__copy">
        <span>{content.eyebrow}</span>
        <h3>{content.title}</h3>
        <p>{content.description}</p>
      </div>
    </article>
  );
}

function FeaturePreview({ variant }: ProductFeatureShowcaseProps) {
  if (variant === "styling") {
    return (
      <div className="feature-preview feature-preview--styling">
        <div className="feature-preview__top">
          <span><Sparkles size={14} /> LOOK PARA HOJE</span>
          <span>09:41</span>
        </div>
        <div className="feature-preview__context">
          <span><CloudSun size={14} /> 23° · SÁBADO</span>
          <span>ALMOÇO AO AR LIVRE</span>
        </div>
        <div className="feature-preview__outfit">
          {[
            ["Jaqueta", "item-one"],
            ["Base leve", "item-two"],
            ["Acessório", "item-three"],
          ].map(([label, image]) => (
            <div className="feature-preview__outfit-piece" key={label}>
              <div className={`feature-preview__garment ${image}`} />
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="feature-preview__score">
          <div>
            <span>ÍNDICE DE HARMONIA</span>
            <strong>94<small>%</small></strong>
          </div>
          <span className="feature-preview__approved"><Check size={12} /> RECOMENDADO</span>
        </div>
        <div className="feature-preview__palette">
          <Palette size={13} />
          <span />
          <span />
          <span />
          <small>Paleta em equilíbrio</small>
        </div>
      </div>
    );
  }

  if (variant === "parity") {
    return (
      <div className="feature-preview feature-preview--parity">
        <div className="feature-preview__top">
          <span><ScanFace size={14} /> PROVADOR · ANÁLISE</span>
          <span className="feature-preview__live"><i /> AO VIVO</span>
        </div>
        <div className="feature-preview__new-piece">
          <div className="feature-preview__garment item-one" />
          <div>
            <span>PEÇA NA LOJA</span>
            <strong>Jaqueta utilitária</strong>
            <small>Oliva · Sarja · Casual</small>
          </div>
          <span className="feature-preview__scan-mark"><Check size={15} /></span>
        </div>
        <div className="feature-preview__matches-heading">
          <span>COMBINA COM O SEU ACERVO</span>
          <span>3 LOOKS</span>
        </div>
        <div className="feature-preview__match">
          <div className="feature-preview__garment item-two" />
          <div>
            <strong>Calça reta</strong>
            <small>Já está no seu armário</small>
          </div>
          <b>96%</b>
        </div>
        <div className="feature-preview__match">
          <div className="feature-preview__garment item-three" />
          <div>
            <strong>Camisa de linho</strong>
            <small>Uma nova combinação</small>
          </div>
          <b>89%</b>
        </div>
        <div className="feature-preview__parity-score">
          <span>PARIDADE COM O SEU ESTILO</span>
          <strong>8.7<small> / 10</small></strong>
          <span><Check size={12} /> 3 combinações possíveis</span>
        </div>
      </div>
    );
  }

  return (
    <div className="feature-preview feature-preview--mirror">
      <div className="feature-preview__mirror-image" />
      <div className="feature-preview__mirror-shade" />
      <div className="feature-preview__top">
        <span><Shirt size={14} /> ESPELHO INTELIGENTE</span>
        <span className="feature-preview__live"><i /> AR ATIVO</span>
      </div>
      <div className="feature-preview__mirror-frame">
        <i /><i /><i /><i />
        <div className="feature-preview__silhouette">
          <span />
          <div />
          <i />
        </div>
        <span className="feature-preview__frame-label">SILHUETA RECONHECIDA</span>
      </div>
      <div className="feature-preview__mirror-card">
        <div>
          <span>COMPOSIÇÃO DO SEU ACERVO</span>
          <strong>Camadas em harmonia</strong>
        </div>
        <div className="feature-preview__mirror-rating">
          <Sparkles size={14} />
          94%
        </div>
        <div className="feature-preview__mirror-tags">
          <span><Check size={10} /> COR</span>
          <span><Check size={10} /> CAIMENTO</span>
          <span><Heart size={10} /> ESTILO</span>
        </div>
      </div>
      <div className="feature-preview__mirror-controls">
        <span>AR / CÂMERA FRONTAL</span>
        <ArrowUpRight size={14} />
      </div>
    </div>
  );
}
