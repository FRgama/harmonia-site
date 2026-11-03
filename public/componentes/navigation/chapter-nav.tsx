"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";

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
  const reduceMotion = useReducedMotion();
  const triggerRef = useRef<HTMLButtonElement>(null);

  const currentChapterIndex = activeChapterIndex ?? visibleChapterIndex;
  const active = chapters[currentChapterIndex] || chapters[0];

  useEffect(() => {
    const targets = chapters
      .map((chapter, index) => ({
        element: document.getElementById(chapter.targetId.replace(/^#/, "")),
        index,
      }))
      .filter((target) => target.element !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visible) {
          const index = targets.find((target) => target.element === visible.target)?.index;
          if (index !== undefined) setVisibleChapterIndex(index);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    targets.forEach(({ element }) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [chapters]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.replace(/^#/, ""));
    if (el) el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    setExpanded(false);
  };

  if (!active) return null;

  return (
    <nav
      aria-label="Navegação pelos atos da página inicial"
      className={`site-chapter-navigation fixed bottom-4 sm:bottom-6 left-1/2 z-40 -translate-x-1/2 max-w-[calc(100vw-24px)] ${className}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && expanded) {
          setExpanded(false);
          triggerRef.current?.focus();
        }
      }}
    >
      <motion.div
        layout={reduceMotion ? false : true}
        className="flex items-center gap-2 sm:gap-3 rounded-full border border-[var(--line)]/35 bg-[var(--ink)]/90 px-3 py-1.5 sm:px-4 sm:py-2 text-[var(--paper)] shadow-2xl backdrop-blur-2xl"
      >
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider transition-opacity hover:opacity-80"
        >
          <span className="flex size-5 items-center justify-center rounded-full bg-[var(--coral)] text-[10px] font-bold text-white shrink-0">
            {active.roman}
          </span>
          <span className="max-w-[110px] sm:max-w-none truncate font-sans font-medium">{active.title}</span>
          <ChevronDown
            size={14}
            className={`shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        <div className="hidden h-4 w-px bg-white/20 lg:block" />

        <div className="hidden items-center gap-1 lg:flex">
          {chapters.map((ch, idx) => (
            <button
              key={ch.roman}
              type="button"
              onClick={() => scrollTo(ch.targetId)}
              aria-label={`${ch.roman}: ${ch.title}`}
              aria-current={idx === currentChapterIndex ? "location" : undefined}
              className={`flex size-7 items-center justify-center rounded-full text-[10px] font-mono transition-colors ${
                idx === currentChapterIndex
                  ? "bg-[var(--paper)] font-bold text-[var(--ink)]"
                  : "text-white/65 hover:bg-white/10 hover:text-white"
              }`}
              title={ch.title}
            >
              {ch.roman}
            </button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full left-1/2 mb-3 flex w-[min(300px,calc(100vw-32px))] max-h-[60vh] overflow-y-auto -translate-x-1/2 flex-col gap-1 rounded-2xl border border-[var(--line)]/35 bg-[var(--ink)]/95 p-3 text-[var(--paper)] shadow-2xl backdrop-blur-2xl"
          >
            {chapters.map((ch, idx) => (
              <button
                key={ch.roman}
                type="button"
                onClick={() => scrollTo(ch.targetId)}
                aria-current={idx === currentChapterIndex ? "location" : undefined}
                className={`flex items-center gap-3 rounded-xl px-3 py-2 text-left text-xs transition-colors ${
                  idx === currentChapterIndex
                    ? "bg-[var(--paper)]/15 font-medium text-white"
                    : "hover:bg-white/5 text-white/70 hover:text-white"
                }`}
              >
                <span className="flex size-5 shrink-0 items-center justify-center rounded-md bg-white/10 text-[10px] font-mono font-bold">
                  {ch.roman}
                </span>
                <span className="truncate">{ch.title}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
