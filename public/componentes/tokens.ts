/**
 * HarmonIA Design System Tokens
 * Extraído e adaptado da linguagem visual do Shopify Editions Winter '26
 * compatibilizado com os tokens editoriais do HarmonIA (Next.js 16 + Tailwind CSS 4).
 */

export const colors = {
  // Paleta HarmonIA (Renaissance Warm)
  harmonia: {
    paper: "var(--paper, #e9dfc8)",
    paperDeep: "var(--paper-deep, #d9ccaa)",
    paperShadow: "var(--paper-shadow, #b9a883)",
    ink: "var(--ink, #151a1f)",
    muted: "var(--muted, #5d5848)",
    line: "var(--line, #b8a77c)",
    acid: "var(--acid, #c2a05a)",
    coral: "var(--coral, #7b3b3f)",
    terracotta: "var(--terracotta, #a65f46)",
    forest: "var(--forest, #3d4a3a)",
  },
  // Paleta Shopify Winter '26 (Editorial Dark & Light)
  shopify: {
    bgLight: "#f7f7ee",
    borderLight: "#dcdcd0",
    textGreyMid: "#909083",
    textGreyDark: "#5c5c4e",
    bgDark: "#292919",
    black: "#000000",
    white: "#ffffff",
    g1: "#ffffff",
    g2: "#f4f4f4",
    g3: "#ececec",
    g4: "#c9c9c9",
    g5: "#8c8c8c",
    g6: "#2a2a2a",
    g7: "#000000",
    accentBlue: "#739bff",
    accentPurple: "#8a5cf6",
  },
} as const;

export const glassmorphism = {
  light: "bg-white/60 backdrop-blur-xl border border-white/40 shadow-sm",
  dark: "bg-[#292919]/60 backdrop-blur-xl border border-white/10 shadow-lg",
  paper: "bg-[#e9dfc8]/70 backdrop-blur-xl border border-[#b8a77c]/30 shadow-md",
  dock: "bg-[#151a1f]/80 backdrop-blur-2xl border border-white/10 shadow-2xl",
} as const;

export const transitions = {
  spring: {
    type: "spring",
    stiffness: 380,
    damping: 30,
  },
  smooth: {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1],
  },
} as const;
