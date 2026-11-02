import React from "react";

export interface GlassSurfaceProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "paper" | "dock";
  className?: string;
  as?: React.ElementType;
}

export function GlassSurface({
  children,
  variant = "paper",
  className = "",
  as: Component = "div",
}: GlassSurfaceProps) {
  const variantStyles = {
    light: "bg-[var(--paper)]/60 backdrop-blur-xl border border-[var(--line)]/35 shadow-sm text-[var(--ink)]",
    dark: "bg-[var(--ink)]/75 backdrop-blur-2xl border border-[var(--line)]/25 shadow-2xl text-[var(--paper)]",
    paper: "bg-[var(--paper)]/75 backdrop-blur-xl border border-[var(--line)]/40 shadow-md text-[var(--ink)]",
    dock: "bg-[var(--ink)]/90 backdrop-blur-2xl border border-[var(--line)]/30 shadow-2xl text-[var(--paper)]",
  };

  return (
    <Component className={`rounded-2xl ${variantStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
}

export function SectionDivider({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={`relative my-12 flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-[var(--line,#b8a77c)]/30" />
      </div>
      {label && (
        <span className="relative z-10 rounded-full border border-[var(--line)]/30 bg-[var(--paper)] px-4 py-1 text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">
          {label}
        </span>
      )}
    </div>
  );
}
