"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export interface Chapter {
  roman: string;
  title: string;
  targetId: string;
}

export interface ChapterNavProps {
  chapters: Chapter[];
  activeChapterIndex?: number;
  className?: string;
}

export function ChapterNav({
  chapters,
  activeChapterIndex,
  className = "",
}: ChapterNavProps) {
  const [expanded, setExpanded] = useState(false);
  const [visibleChapterIndex, setVisibleChapterIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const navRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const manualScrollLockRef = useRef<number | null>(null);

  const currentChapterIndex = activeChapterIndex ?? visibleChapterIndex;
  const active = chapters[currentChapterIndex] || chapters[0];

  const updateActiveChapterFromScroll = useCallback(() => {
    if (manualScrollLockRef.current !== null) return;

    const triggerLine = window.innerHeight * 0.36;
    let nextIndex = 0;

    for (let i = 0; i < chapters.length; i++) {
      const id = chapters[i].targetId.replace(/^#/, "");
      const el = document.getElementById(id);
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      if (rect.top <= triggerLine) {
        nextIndex = i;
      }
    }

    // If scrolled to the very bottom of the page, highlight the final chapter
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 48
    ) {
      nextIndex = chapters.length - 1;
    }

    setVisibleChapterIndex(nextIndex);
  }, [chapters]);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScrollOrResize = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        updateActiveChapterFromScroll();
        rafId = null;
      });
    };

    updateActiveChapterFromScroll();
    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [updateActiveChapterFromScroll]);

  useEffect(() => {
    if (!expanded) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expanded]);

  const scrollToChapter = (index: number) => {
    const chapter = chapters[index];
    if (!chapter) return;

    const cleanId = chapter.targetId.replace(/^#/, "");
    const el = document.getElementById(cleanId);

    setVisibleChapterIndex(index);
    setExpanded(false);

    if (el) {
      if (manualScrollLockRef.current !== null) {
        window.clearTimeout(manualScrollLockRef.current);
      }
      manualScrollLockRef.current = window.setTimeout(() => {
        manualScrollLockRef.current = null;
      }, 750);

      const headerOffset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }
  };

  if (!active) return null;

  const progressPct =
    chapters.length > 1
      ? Math.round((currentChapterIndex / (chapters.length - 1)) * 100)
      : 100;

  return (
    <nav
      ref={navRef}
      aria-label="Navegação pelos capítulos do Pitch Deck"
      className={`site-chapter-navigation pointer-events-auto fixed bottom-4 sm:bottom-5 left-1/2 z-[70] -translate-x-1/2 max-w-[calc(100vw-16px)] ${className}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && expanded) {
          setExpanded(false);
          triggerRef.current?.focus();
        }
      }}
    >
      {/* Floating Hover Tooltip for Roman Numerals */}
      <AnimatePresence>
        {hoveredIndex !== null && !expanded && chapters[hoveredIndex] && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.14 }}
            className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#c2a05a]/55 bg-[#121a2b]/95 px-3.5 py-1 text-[10.5px] font-mono uppercase tracking-widest text-[#f1e8d3] shadow-xl backdrop-blur-md"
          >
            <span className="font-bold text-[#d8b36a]">
              ATO {chapters[hoveredIndex].roman}
            </span>{" "}
            · {chapters[hoveredIndex].title}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        layout={reduceMotion ? false : true}
        className="relative flex items-center gap-1.5 sm:gap-2.5 overflow-hidden rounded-full border border-[#c2a05a]/45 bg-[#121a2b]/95 px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-[var(--paper)] shadow-[0_18px_50px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
      >
        {/* Subtle progress bar along the bottom edge */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[var(--coral)] via-[#d8b36a] to-[#e3c783] transition-all duration-300"
          style={{ width: `${progressPct}%` }}
        />

        {/* Current Chapter Trigger Button (opens full index menu) */}
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-label={`Capítulo atual: ${active.roman} ${active.title}. Clique para abrir o índice de capítulos`}
          className="cursor-pointer flex items-center gap-2 rounded-full px-1.5 py-0.5 text-xs font-mono uppercase tracking-wider transition-colors hover:bg-white/10"
        >
          <span className="flex size-5.5 items-center justify-center rounded-full bg-[var(--coral)] text-[10px] font-bold text-white shadow-sm shrink-0">
            {active.roman}
          </span>
          <span className="max-w-[96px] sm:max-w-[140px] truncate font-sans text-[11px] sm:text-xs font-semibold text-[#f7f0df]">
            {active.title}
          </span>
          <ChevronDown
            size={14}
            className={`shrink-0 text-[#d8b36a] transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>

        <div className="h-4 w-px bg-white/20 shrink-0" />

        {/* Interactive Roman Numeral Buttons (I - VII) */}
        <div
          className="flex items-center gap-0.5 sm:gap-1"
          role="group"
          aria-label="Atos em algarismos romanos"
        >
          {chapters.map((ch, idx) => {
            const isCurrent = idx === currentChapterIndex;
            return (
              <button
                key={ch.roman}
                type="button"
                onClick={() => scrollToChapter(idx)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(idx)}
                onBlur={() => setHoveredIndex(null)}
                aria-label={`Ir para Ato ${ch.roman}: ${ch.title}`}
                aria-current={isCurrent ? "location" : undefined}
                className={`cursor-pointer relative flex size-6.5 sm:size-7 items-center justify-center rounded-full text-[10px] font-mono transition-all duration-200 ${
                  isCurrent
                    ? "bg-[#d8b36a] font-bold text-[#121a2b] shadow-[0_0_12px_rgba(216,179,106,0.55)] scale-105"
                    : "text-white/70 hover:bg-white/15 hover:text-white active:scale-95"
                }`}
              >
                {ch.roman}
              </button>
            );
          })}
        </div>

        {/* Prev / Next step buttons on desktop */}
        <div className="hidden md:flex items-center gap-0.5 border-l border-white/15 pl-1.5">
          <button
            type="button"
            onClick={() =>
              scrollToChapter(Math.max(0, currentChapterIndex - 1))
            }
            disabled={currentChapterIndex === 0}
            aria-label="Capítulo anterior"
            className="cursor-pointer flex size-6 items-center justify-center rounded-full text-white/75 transition hover:bg-white/15 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft size={13} />
          </button>
          <button
            type="button"
            onClick={() =>
              scrollToChapter(
                Math.min(chapters.length - 1, currentChapterIndex + 1),
              )
            }
            disabled={currentChapterIndex === chapters.length - 1}
            aria-label="Próximo capítulo"
            className="cursor-pointer flex size-6 items-center justify-center rounded-full text-white/75 transition hover:bg-white/15 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight size={13} />
          </button>
        </div>
      </motion.div>

      {/* Expanded Chapter Drawer Menu */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full left-1/2 mb-3 flex w-[min(320px,calc(100vw-24px))] max-h-[65vh] overflow-y-auto -translate-x-1/2 flex-col gap-1 rounded-2xl border border-[#c2a05a]/45 bg-[#121a2b]/98 p-3 text-[var(--paper)] shadow-2xl backdrop-blur-2xl"
          >
            <div className="mb-1 flex items-center justify-between border-b border-white/10 px-2 pb-2 font-mono text-[9.5px] uppercase tracking-widest text-[#d8b36a]">
              <span>Índice da Narrativa Executiva</span>
              <span>
                {currentChapterIndex + 1} / {chapters.length}
              </span>
            </div>
            {chapters.map((ch, idx) => {
              const isCurrent = idx === currentChapterIndex;
              return (
                <button
                  key={ch.roman}
                  type="button"
                  onClick={() => scrollToChapter(idx)}
                  aria-current={isCurrent ? "location" : undefined}
                  className={`cursor-pointer flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-xs transition-colors ${
                    isCurrent
                      ? "border border-[#d8b36a]/45 bg-[#d8b36a]/15 font-semibold text-white"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`flex size-5.5 shrink-0 items-center justify-center rounded-md text-[10px] font-mono font-bold ${
                        isCurrent
                          ? "bg-[#d8b36a] text-[#121a2b]"
                          : "bg-white/10 text-white"
                      }`}
                    >
                      {ch.roman}
                    </span>
                    <span className="truncate">{ch.title}</span>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#d8b36a]">
                    {isCurrent ? "Ativo" : "Ir →"}
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
