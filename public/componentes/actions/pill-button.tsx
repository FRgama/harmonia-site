"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { LucideIcon } from "lucide-react";

export interface PillButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "outline" | "coral" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function PillButton({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  icon: Icon,
  iconPosition = "right",
  className = "",
  disabled = false,
  type = "button",
}: PillButtonProps) {
  const reduceMotion = useReducedMotion();

  const variantStyles = {
    primary: "bg-[var(--paper)] text-[var(--ink)] hover:bg-[var(--paper-deep)] border border-[var(--line)]/40 shadow-sm",
    secondary: "bg-[var(--ink)]/80 text-[var(--paper)] hover:bg-[var(--ink)]/95 backdrop-blur-md border border-[var(--line)]/30",
    dark: "bg-[var(--ink)] text-[var(--paper)] hover:brightness-110 border border-[var(--line)]/30 shadow-md",
    coral: "bg-[var(--coral,#7b3b3f)] text-white hover:brightness-110 shadow-sm",
    outline: "bg-transparent text-current border border-current/30 hover:bg-current/5",
    ghost: "bg-transparent text-current hover:bg-black/5 dark:hover:bg-white/5",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5 font-medium",
    md: "px-5 py-2.5 text-sm gap-2 font-medium tracking-tight",
    lg: "px-7 py-3.5 text-base gap-2.5 font-medium",
  };

  const baseClasses = `inline-flex items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral)] disabled:opacity-50 disabled:pointer-events-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const motionProps = reduceMotion
    ? {}
    : {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.97 },
        transition: { duration: 0.15 },
      };

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={size === "sm" ? 14 : size === "lg" ? 18 : 16} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={size === "sm" ? 14 : size === "lg" ? 18 : 16} aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={baseClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
