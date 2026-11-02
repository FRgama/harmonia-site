"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, CornerDownLeft } from "lucide-react";

export interface SidekickDockProps {
  placeholder?: string;
  quickPrompts?: string[];
  onSubmit?: (prompt: string) => void;
  className?: string;
}

export function SidekickDock({
  placeholder = "Pergunte à inteligência do HarmonIA...",
  quickPrompts = [
    "Avaliar caimento de peça",
    "Compatibilidade com meu armário",
    "Impacto ESG da compra",
  ],
  onSubmit,
  className = "",
}: SidekickDockProps) {
  const [value, setValue] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    if (onSubmit) onSubmit(value);
    setValue("");
  };

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      <form
        onSubmit={handleSend}
        className="relative flex items-center rounded-full border border-[var(--line)]/35 bg-[var(--ink)]/90 p-1.5 text-[var(--paper)] shadow-2xl backdrop-blur-2xl transition-all focus-within:ring-2 focus-within:ring-[var(--coral)]"
      >
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--coral)] to-[var(--acid)] text-[var(--paper)] shadow-md">
          <Sparkles size={18} aria-hidden="true" />
        </div>

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-label="Pergunte à inteligência de estilo HarmonIA"
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent px-4 py-2 font-sans text-sm text-[var(--paper)] placeholder-[var(--paper)]/55 focus:outline-none"
        />

        <button
          type="submit"
          disabled={!value.trim()}
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[var(--paper)] transition-all hover:bg-white/20 disabled:pointer-events-none disabled:opacity-30"
          aria-label="Enviar prompt"
        >
          <CornerDownLeft size={16} aria-hidden="true" />
        </button>
      </form>

      {quickPrompts && quickPrompts.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
          {quickPrompts.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => {
                setValue(p);
                if (onSubmit) onSubmit(p);
              }}
              className="flex items-center gap-1.5 rounded-full border border-[var(--line)]/25 bg-[var(--ink)]/5 px-3 py-1 font-mono text-xs text-[var(--ink)]/75 backdrop-blur-md transition-all hover:bg-[var(--coral)]/10 hover:text-[var(--coral)]"
            >
              <span>{p}</span>
              <ArrowRight size={10} className="opacity-60" aria-hidden="true" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
