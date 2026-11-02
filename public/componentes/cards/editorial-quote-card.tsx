import React from "react";

export interface EditorialQuoteCardProps {
  quote: string;
  author: string;
  role?: string;
  accentText?: string;
  className?: string;
}

export function EditorialQuoteCard({
  quote,
  author,
  role,
  accentText,
  className = "",
}: EditorialQuoteCardProps) {
  return (
    <div className={`relative p-8 sm:p-12 rounded-2xl border border-[var(--line,#b8a77c)]/30 bg-[#e9dfc8]/60 backdrop-blur-xl text-[#151a1f] ${className}`}>
      <span className="absolute top-4 left-6 text-6xl font-serif leading-none opacity-20 select-none text-[var(--coral,#7b3b3f)]" aria-hidden="true">
        &ldquo;
      </span>
      {accentText && (
        <span className="block text-2xl sm:text-3xl font-serif italic text-[var(--coral,#7b3b3f)] mb-4">
          {accentText}
        </span>
      )}
      <blockquote className="relative z-10 text-lg sm:text-2xl font-serif leading-relaxed mb-6">
        {quote}
      </blockquote>
      <div className="flex items-center gap-3 border-t border-[var(--line,#b8a77c)]/30 pt-4">
        <div className="w-8 h-8 rounded-full bg-[var(--coral,#7b3b3f)]/15 flex items-center justify-center font-serif font-bold text-xs text-[var(--coral,#7b3b3f)]">
          {author.charAt(0)}
        </div>
        <div>
          <cite className="not-italic font-medium text-sm block">{author}</cite>
          {role && <span className="text-xs opacity-60 block font-sans">{role}</span>}
        </div>
      </div>
    </div>
  );
}
