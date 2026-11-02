"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export interface FeatureCardProps {
  eyebrow?: string;
  title: string;
  description: string;
  media?: React.ReactNode;
  href?: string;
  ctaText?: string;
  className?: string;
  variant?: "glass" | "paper" | "editorial";
}

export function FeatureCard({
  eyebrow,
  title,
  description,
  media,
  href,
  ctaText = "Ver detalhes",
  className = "",
  variant = "glass",
}: FeatureCardProps) {
  const reduceMotion = useReducedMotion();

  const variantStyles = {
    glass: "bg-[var(--ink)]/85 backdrop-blur-xl border border-[var(--line)]/30 text-[var(--paper)]",
    paper: "bg-[var(--paper)]/90 backdrop-blur-xl border border-[var(--line)]/50 text-[var(--ink)]",
    editorial: "bg-[var(--ink)] border border-[var(--line)]/30 text-[var(--paper)]",
  };

  const cardContent = (
    <div className="flex flex-col h-full justify-between p-6 sm:p-8">
      <div>
        {eyebrow && (
          <div className="mb-3 flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest opacity-70">
            <span className="size-1.5 bg-[var(--acid)]" />
            {eyebrow}
          </div>
        )}
        <h3 className="mb-3 font-(family-name:--serif) text-xl font-medium tracking-tight sm:text-2xl">
          {title}
        </h3>
        <p className="text-sm sm:text-base opacity-75 leading-relaxed font-sans">
          {description}
        </p>
      </div>

      {media && (
        <div className="my-6 overflow-hidden rounded-xl bg-black/10 border border-white/10 aspect-video flex items-center justify-center">
          {media}
        </div>
      )}

      {href && (
        <div className="flex items-center gap-2 pt-4 text-xs font-mono uppercase tracking-wider transition-colors group-hover:text-[var(--coral)]">
          <span>{ctaText}</span>
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      )}
    </div>
  );

  const wrapperClasses = `group relative h-full overflow-hidden rounded-sm transition-shadow hover:shadow-xl ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <motion.div
        whileHover={reduceMotion ? undefined : { y: -4 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={wrapperClasses}
      >
        <Link href={href} className="block h-full">
          {cardContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.3 }}
      className={wrapperClasses}
    >
      {cardContent}
    </motion.div>
  );
}
