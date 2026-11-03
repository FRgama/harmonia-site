import type { Metadata, Viewport } from "next";
import { ButtonMotion } from "@/components/button-motion";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ece2cc" },
    { media: "(prefers-color-scheme: dark)", color: "#151a1f" },
  ],
};

export const metadata: Metadata = {
  title: "HarmonIA — Vista-se de possibilidades",
  description:
    "Seu guarda-roupa, traduzido em possibilidades. Conheça a plataforma inteligente que conecta tecnologia, estilo e escolhas mais conscientes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <ButtonMotion />
      </body>
    </html>
  );
}
