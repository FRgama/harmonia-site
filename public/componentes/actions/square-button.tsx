"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import type { LucideIcon } from "lucide-react";

export interface SquareButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  ariaLabel: string;
  size?: "sm" | "md" | "lg";
  variant?: "glass" | "solid" | "paper";
  className?: string;
  active?: boolean;
}

export function SquareButton({
  icon: Icon,
  onClick,
  ariaLabel,
  size = "md",
  variant = "glass",
  className = "",
  active = false,
}: SquareButtonProps) {
  const reduceMotion = useReducedMotion();

  const sizeClasses = {
    sm: "w-8 h-8 rounded-md",
    md: "w-10 h-10 rounded-lg",
    lg: "w-12 h-12 rounded-xl",
  };

  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 22,
  };

  const variantClasses = {
    glass: "bg-[#292919]/50 text-[#f7f7ee] hover:bg-[#292919]/80 backdrop-blur-md border border-white/15",
    solid: "bg-[#151a1f] text-[#e9dfc8] hover:bg-[#20272f] border border-white/10",
    paper: "bg-[#e9dfc8] text-[#151a1f] hover:bg-[#d9ccaa] border border-[#b8a77c]/40",
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={active}
      whileHover={reduceMotion ? undefined : { scale: 1.05 }}
      whileTap={reduceMotion ? undefined : { scale: 0.95 }}
      transition={{ duration: 0.15 }}
      className={`inline-flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral,#739bff)] ${sizeClasses[size]} ${variantClasses[variant]} ${active ? "ring-2 ring-[var(--coral,#739bff)]" : ""} ${className}`}
    >
      <Icon size={iconSizes[size]} aria-hidden="true" />
    </motion.button>
  );
}
