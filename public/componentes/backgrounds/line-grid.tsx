import React from "react";

export interface LineGridProps {
  className?: string;
  size?: number;
  opacity?: number;
}

export function LineGrid({
  className = "",
  size = 48,
  opacity = 0.05,
}: LineGridProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 select-none ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
        opacity,
      }}
      aria-hidden="true"
    />
  );
}
