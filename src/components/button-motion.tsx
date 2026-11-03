"use client";

import { useEffect } from "react";

const CONTROL_SELECTOR = [
  "button",
  '[role="button"]',
  'input[type="button"]',
  'input[type="submit"]',
  'a[class*="rounded-full"][class*="px-"]',
  "a.institutional-btn",
  "a.person-card__board-link",
  "a.site-navigation-index-link",
  "a.site-header__mobile-cta",
].join(", ");

const MOTIONS = ["lift", "slide", "scale", "tilt"] as const;
let nextMotion = 0;

export function ButtonMotion() {
  useEffect(() => {
    const addMotion = (element: Element) => {
      if (!element.hasAttribute("data-hover-motion")) {
        element.setAttribute("data-hover-motion", MOTIONS[nextMotion]);
        nextMotion = (nextMotion + 1) % MOTIONS.length;
      }
      element.classList.add("button-motion-control");
      element.classList.add("pointer-glow-control");
    };

    const addControlMotions = (root: ParentNode) => {
      if (root instanceof Element && root.matches(CONTROL_SELECTOR)) {
        addMotion(root);
      }

      root.querySelectorAll(CONTROL_SELECTOR).forEach(addMotion);
    };

    addControlMotions(document);

    const observer = new MutationObserver((records) => {
      records.forEach(({ addedNodes }) => {
        addedNodes.forEach((node) => {
          if (node instanceof Element) addControlMotions(node);
        });
      });
    });

    const onPointerMove = (event: PointerEvent) => {
      if (
        event.pointerType !== "mouse" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        !(event.target instanceof Element)
      ) {
        return;
      }

      const control = event.target.closest<HTMLElement>(CONTROL_SELECTOR);
      if (!control) return;

      const bounds = control.getBoundingClientRect();
      control.style.setProperty("--pointer-glow-x", `${event.clientX - bounds.left}px`);
      control.style.setProperty("--pointer-glow-y", `${event.clientY - bounds.top}px`);
    };

    const onPointerOut = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;
      const control = event.target.closest<HTMLElement>(CONTROL_SELECTOR);
      if (!control || (event.relatedTarget instanceof Node && control.contains(event.relatedTarget))) return;
      control.style.removeProperty("--pointer-glow-x");
      control.style.removeProperty("--pointer-glow-y");
    };

    observer.observe(document.body, { childList: true, subtree: true });
    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerout", onPointerOut);

    return () => {
      observer.disconnect();
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerout", onPointerOut);
      document.querySelectorAll(".button-motion-control").forEach((element) => {
        element.classList.remove("button-motion-control", "pointer-glow-control");
        element.removeAttribute("data-hover-motion");
        (element as HTMLElement).style.removeProperty("--pointer-glow-x");
        (element as HTMLElement).style.removeProperty("--pointer-glow-y");
      });
    };
  }, []);

  return null;
}
