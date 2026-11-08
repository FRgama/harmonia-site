"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

export function DaVinciScrollAura() {
  const [smoothScroll, setSmoothScroll] = useState(0);
  const targetScrollRef = useRef(0);
  const currentScrollRef = useRef(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    let rafId: number;

    const updateTarget = () => {
      const scrollTop = window.scrollY;
      const docHeight = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const progress = Math.min(1, Math.max(0, scrollTop / docHeight));
      targetScrollRef.current = progress;
    };

    const animate = () => {
      const diff = targetScrollRef.current - currentScrollRef.current;
      if (Math.abs(diff) > 0.0004) {
        currentScrollRef.current += diff * 0.1;
        setSmoothScroll(currentScrollRef.current);
      }
      rafId = requestAnimationFrame(animate);
    };

    updateTarget();
    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
      cancelAnimationFrame(rafId);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  const followerTopVh = 14 + smoothScroll * 72;
  const followerWaveX = Math.sin(smoothScroll * Math.PI * 2) * 32;
  const astrolabeRotate = smoothScroll * 220;
  const counterRotate = -smoothScroll * 160;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Left Golden-Ratio Plumb Line with Descending Comet Beam */}
      <div className="hidden xl:block absolute left-[42px] top-0 bottom-0 w-px bg-[#b8a77c]/25">
        <div
          className="w-[2px] -ml-[0.5px] h-32 rounded-full will-change-transform"
          style={{
            transform: `translate3d(0, calc(${followerTopVh}vh - 64px), 0)`,
            background: "linear-gradient(to bottom, transparent, #c2a05a, #6e2a2a)",
            boxShadow: "0 0 14px rgba(194, 160, 90, 0.55)",
          }}
        />
        <div
          className="w-2 h-2 -ml-[3.5px] rounded-full will-change-transform"
          style={{
            transform: `translate3d(0, calc(${followerTopVh}vh - 4px), 0)`,
            backgroundColor: "#6e2a2a",
            boxShadow: "0 0 12px 2px rgba(194, 160, 90, 0.7)",
          }}
        />
      </div>

      {/* Scroll-Following Descending Da Vinci Astrolabe & Golden Ratio Readout */}
      <div
        className="hidden lg:block absolute right-[3%] xl:right-[4%] w-[240px] h-[240px] xl:w-[290px] xl:h-[290px] will-change-transform"
        style={{
          top: 0,
          transform: `translate3d(${-followerWaveX * 0.35}px, ${followerTopVh}vh, 0) translateY(-50%)`,
        }}
      >
        {/* Outer Rotating Golden Ring */}
        <svg
          viewBox="0 0 240 240"
          className="w-full h-full overflow-visible opacity-30 text-[#8a6d32]"
          style={{
            transform: `rotate(${astrolabeRotate}deg)`,
          }}
        >
          <circle
            cx="120"
            cy="120"
            r="112"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.65"
            strokeDasharray="3 6"
          />
          <circle
            cx="120"
            cy="120"
            r="86"
            fill="none"
            stroke="#6e2a2a"
            strokeWidth="0.5"
            strokeOpacity="0.4"
          />
          <path
            d="M120 4 L120 26 M120 214 L120 236 M4 120 L26 120 M214 120 L236 120"
            stroke="currentColor"
            strokeWidth="0.75"
          />
          <circle cx="120" cy="8" r="2.5" fill="currentColor" />
          <circle cx="232" cy="120" r="2" fill="#6e2a2a" />
        </svg>

        {/* Inner Counter-Rotating Geometric Prism */}
        <svg
          viewBox="0 0 240 240"
          className="absolute inset-0 w-full h-full overflow-visible opacity-35 text-[#6e2a2a]"
          style={{
            transform: `rotate(${counterRotate}deg)`,
          }}
        >
          <rect
            x="68"
            y="68"
            width="104"
            height="104"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.55"
            strokeOpacity="0.55"
          />
          <circle
            cx="120"
            cy="120"
            r="52"
            fill="none"
            stroke="#8a6d32"
            strokeWidth="0.65"
            strokeDasharray="1 4"
          />
          <circle cx="120" cy="120" r="3" fill="#c2a05a" />
        </svg>

        {/* Live Scroll Altitude Readout */}
        <div className="flex items-center gap-2 absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9.5px] tracking-[0.2em] uppercase whitespace-nowrap text-[#5a5240] bg-[#ece2cc]/85 px-2.5 py-0.5 border border-[#b8a77c]/40 backdrop-blur-sm">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#6e2a2a]"
            style={{
              boxShadow: "0 0 8px rgba(194, 160, 90, 0.8)",
            }}
          />
          <span>φ {(1 + smoothScroll * 0.618).toFixed(3)}</span>
          <span className="opacity-40">·</span>
          <span>{Math.round(smoothScroll * 100).toString().padStart(2, "0")}%</span>
        </div>
      </div>
    </div>
  );
}
