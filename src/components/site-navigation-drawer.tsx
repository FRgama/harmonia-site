"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { topicGroups } from "@/data/topic-index";

export function SiteNavigationDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

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

  return (
    <>
      <button
        type="button"
        className="site-navigation-trigger"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="site-navigation-dialog"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={17} aria-hidden="true" />
        <span>8 Atos</span>
      </button>
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
              <span className="eyebrow">Estrutura em 8 Atos</span>
              <h2 id="site-navigation-title">Navegue pela HarmonIA.</h2>
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
          <nav aria-label="Todos os 8 atos do projeto" className="site-navigation-groups">
            {topicGroups.map(({ number, title, links }) => (
              <section className="site-navigation-group" key={number}>
                <h3>
                  <span>ATO {number}</span>
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
          <Link className="site-navigation-index-link" href="/explorar" onClick={closeDrawer}>
            Ver índice completo dos 8 atos
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </dialog>
    </>
  );
}
