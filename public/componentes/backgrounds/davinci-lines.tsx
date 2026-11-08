"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

export interface DaVinciLinesProps {
  className?: string;
  animate?: boolean;
  color?: string;
}

export function DaVinciLines({
  className = "",
  animate = true,
  color = "currentColor",
}: DaVinciLinesProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = animate && !reduceMotion;
  const hasCustomPosition = /\b(absolute|fixed|sticky)\b/.test(className);

  return (
    <div
      className={`pointer-events-none ${hasCustomPosition ? "" : "relative"} overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-20"
        animate={shouldAnimate ? { rotate: [0, 360] } : undefined}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
      >
        {/* Outer and Inner Golden Ratio Circles */}
        <circle cx="500" cy="500" r="480" stroke={color} strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="500" cy="500" r="380" stroke={color} strokeWidth="1" />
        <circle cx="500" cy="500" r="235" stroke={color} strokeWidth="1" strokeDasharray="6 3" />
        <circle cx="500" cy="500" r="145" stroke={color} strokeWidth="1" />
        <circle cx="500" cy="500" r="90" stroke={color} strokeWidth="0.75" />

        {/* Diagonal Tangent Axes */}
        <line x1="20" y1="20" x2="980" y2="980" stroke={color} strokeWidth="0.75" strokeDasharray="3 3" />
        <line x1="20" y1="980" x2="980" y2="20" stroke={color} strokeWidth="0.75" strokeDasharray="3 3" />

        {/* Orthogonal Axes */}
        <line x1="500" y1="10" x2="500" y2="990" stroke={color} strokeWidth="1" />
        <line x1="10" y1="500" x2="990" y2="500" stroke={color} strokeWidth="1" />

        {/* Inscribed Square and Octagon */}
        <rect x="231" y="231" width="538" height="538" stroke={color} strokeWidth="0.75" strokeDasharray="4 4" />
        <polygon
          points="500,120 769,231 880,500 769,769 500,880 231,769 120,500 231,231"
          stroke={color}
          strokeWidth="0.5"
        />

        {/* Technical crosshair ticks */}
        <circle cx="500" cy="500" r="4" fill={color} />
        <circle cx="500" cy="120" r="3" fill={color} />
        <circle cx="500" cy="880" r="3" fill={color} />
        <circle cx="120" cy="500" r="3" fill={color} />
        <circle cx="880" cy="500" r="3" fill={color} />
      </motion.svg>
    </div>
  );
}
