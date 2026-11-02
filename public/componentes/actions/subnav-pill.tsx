"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

export interface SubnavPillProps {
  label: string;
  count?: number | string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function SubnavPill({
  label,
  count,
  active = false,
  onClick,
  className = "",
}: SubnavPillProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={reduceMotion ? undefined : { y: -1 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      className={`relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[var(--coral,#739bff)] ${
        active
          ? "bg-[#151a1f] text-[#e9dfc8] shadow-sm border border-transparent dark:bg-white dark:text-black"
          : "bg-transparent text-current/75 hover:text-current hover:bg-black/5 dark:hover:bg-white/5 border border-current/20"
      } ${className}`}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span
          className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono leading-tight ${
            active
              ? "bg-white/20 text-current"
              : "bg-current/10 text-current"
          }`}
        >
          {count}
        </span>
      )}
    </motion.button>
  );
}
