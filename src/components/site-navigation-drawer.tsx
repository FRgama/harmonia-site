"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { topicGroups } from "@/data/topic-index";
import { SearchModal } from "@/../public/componentes/overlays/search-modal";
import type { SearchResult } from "@/../public/componentes/overlays/search-modal";

export function SiteNavigationDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);

  const searchItems: SearchResult[] = topicGroups.flatMap(({ title, links }) =>
    links.map(({ href, label }) => ({
      id: `${href}-${label}`,
      title: label,
      category: title,
      href,
    })),
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  function closeDrawer() {
    setIsOpen(false);
    if (dialogRef.current?.open) dialogRef.current.close();
  }

  function openSearch() {
    if (dialogRef.current?.open) dialogRef.current.close();
    setIsOpen(false);
    setIsSearchOpen(true);
  }

  function closeSearch() {
    setIsSearchOpen(false);
    window.requestAnimationFrame(() => searchButtonRef.current?.focus());
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <button
          ref={searchButtonRef}
          type="button"
          className="site-navigation-trigger"
          aria-label="Buscar no site"
          aria-haspopup="dialog"
          aria-expanded={isSearchOpen}
          aria-controls="site-search-dialog"
          onClick={openSearch}
        >
          <Search size={16} aria-hidden="true" />
          <span className="hidden sm:inline">Buscar</span>
        </button>
        <button
          type="button"
          className="site-navigation-trigger"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-controls="site-navigation-dialog"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={17} aria-hidden="true" />
          <span>Pitch Deck</span>
        </button>
      </div>
      <dialog
        id="site-navigation-dialog"
        ref={dialogRef}
        className="site-navigation-dialog"
        aria-labelledby="site-navigation-title"
        onClose={() => setIsOpen(false)}
        onCancel={(event) => {
          event.preventDefault();
          closeDrawer();
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") closeDrawer();
        }}
        onClick={(event) => {
          const dialog = dialogRef.current;
          if (!dialog || event.target !== dialog) return;
          const bounds = dialog.getBoundingClientRect();
          const outside =
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom;
          if (outside) closeDrawer();
        }}
      >
        <div className="site-navigation-dialog__inner">
          <div className="site-navigation-dialog__header">
            <div>
              <span className="eyebrow">Narrativa Executiva · 7 Blocos</span>
              <h2 id="site-navigation-title">Tese &amp; Negócio HarmonIA.</h2>
            </div>
            <button
              type="button"
              className="site-navigation-dialog__close"
              onClick={closeDrawer}
              aria-label="Fechar navegação"
              autoFocus
            >
              <X size={19} aria-hidden="true" />
            </button>
          </div>
          <nav
            aria-label="Todos os 7 blocos da apresentação executiva"
            className="site-navigation-groups"
          >
            {topicGroups.map(({ number, title, links }) => (
              <section className="site-navigation-group" key={number}>
                <h3>
                  <span>BLOCO {number}</span>
                  {title}
                </h3>
                <ul>
                  {links.map(({ href, label }) => (
                    <li key={`${href}-${label}`}>
                      <Link href={href} onClick={closeDrawer}>
                        {label}
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
          <a
            className="site-navigation-index-link"
            href="https://www.canva.com/design/DAHYsH4ZWy4/Bx8Nya7r4n3V0eC80bdb0A/edit"
            target="_blank"
            rel="noreferrer"
            onClick={closeDrawer}
          >
            Abrir Pitch Deck Executivo Completo
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </dialog>
      <SearchModal
        isOpen={isSearchOpen}
        onOpen={openSearch}
        onClose={closeSearch}
        items={searchItems}
      />
    </>
  );
}
