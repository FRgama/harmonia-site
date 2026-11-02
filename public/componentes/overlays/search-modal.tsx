"use client";

import React, { useState, useEffect } from "react";
import { Search, X, Command } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

export interface SearchResult {
  id: string;
  title: string;
  category: string;
  href: string;
}

export interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  items: SearchResult[];
}

export function SearchModal({
  isOpen,
  onClose,
  onOpen,
  items,
}: SearchModalProps) {
  const [query, setQuery] = useState("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onOpen();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, onOpen]);

  const filtered = query
    ? items.filter((i) =>
        i.title.toLowerCase().includes(query.toLowerCase()) ||
        i.category.toLowerCase().includes(query.toLowerCase())
      )
    : items.slice(0, 5);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            id="site-search-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Buscar tópicos da HarmonIA"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 0.95, y: -20 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.2 }}
            onKeyDown={(event) => {
              if (event.key !== "Tab") return;

              const focusable = event.currentTarget.querySelectorAll<HTMLElement>(
                'a[href], button:not(:disabled), input:not(:disabled)',
              );
              const first = focusable[0];
              const last = focusable[focusable.length - 1];

              if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last?.focus();
              } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first?.focus();
              }
            }}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-sm border border-[var(--line)]/40 bg-[var(--ink)] text-[var(--paper)] shadow-2xl"
          >
            <div className="flex items-center border-b border-white/10 px-4">
              <Search size={18} className="mr-3 opacity-50" aria-hidden="true" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Buscar módulos, tópicos ou documentação"
                placeholder="Buscar módulos, tópicos ou documentação..."
                className="w-full bg-transparent py-4 text-sm placeholder-white/40 focus:outline-none"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar busca"
                className="rounded-md p-1 text-white/60 hover:bg-white/10 hover:text-white"
              >
                <X size={16} aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-xs opacity-50">
                  Nenhum resultado encontrado para &quot;{query}&quot;
                </div>
              ) : (
                filtered.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-colors group"
                  >
                    <div>
                      <span className="block text-sm font-medium">{item.title}</span>
                      <span className="text-[10px] font-mono opacity-50 uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                    <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      Ir &rarr;
                    </span>
                  </a>
                ))
              )}
            </div>

            <div className="flex items-center justify-between border-t border-white/10 bg-black/30 px-4 py-2.5 text-[11px] font-mono opacity-60">
              <span>Esc para fechar</span>
              <span className="flex items-center gap-1">
                Ctrl / <Command size={10} aria-hidden="true" /> + K para alternar
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
