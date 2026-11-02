"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PillButton } from "../actions/pill-button";

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface GlassHeaderProps {
  brandName?: string;
  brandLogo?: React.ReactNode;
  links: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export function GlassHeader({
  brandName = "HarmonIA",
  brandLogo,
  links,
  ctaLabel = "Iniciar",
  ctaHref = "#inicio",
  className = "",
}: GlassHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-3 ${
        isScrolled
          ? "bg-[#151a1f]/80 backdrop-blur-xl border-b border-white/10 shadow-lg text-[#e9dfc8]"
          : "bg-transparent text-current"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          {brandLogo}
          <span className="font-serif text-xl tracking-tight font-semibold group-hover:opacity-80 transition-opacity">
            {brandName}
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider opacity-75 hover:opacity-100 hover:bg-white/10 transition-all flex items-center gap-1"
            >
              {link.label}
              {link.isExternal && <ArrowUpRight size={11} />}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {ctaLabel && ctaHref && (
            <div className="hidden sm:block">
              <PillButton href={ctaHref} size="sm" variant="coral">
                {ctaLabel}
              </PillButton>
            </div>
          )}

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 p-6 rounded-2xl bg-[#151a1f]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-4 text-[#e9dfc8]"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif py-2 border-b border-white/10 flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.isExternal && <ArrowUpRight size={14} />}
              </Link>
            ))}
            {ctaLabel && ctaHref && (
              <div className="pt-2">
                <PillButton
                  href={ctaHref}
                  size="md"
                  variant="coral"
                  className="w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {ctaLabel}
                </PillButton>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
