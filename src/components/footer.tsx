import Link from "next/link";
import { BrandIdentity } from "@/components/brand-identity";

const footerLinks = [
  { href: "/#inicio", label: "01 · Início" },
  { href: "/#tema-visao", label: "02 · Visão & ESG" },
  { href: "/#tema-pessoas", label: "03 · Personas" },
  { href: "/#tema-negocio", label: "04 · Mercado, Negócio & Custos" },
  { href: "/#tema-experiencia", label: "05 · Módulos MVP" },
  { href: "/#tema-tecnologia", label: "06 · IHE & Arquitetura" },
  { href: "/#tema-requisitos", label: "07 · Requisitos" },
  { href: "/#tema-institucional", label: "08 · FECAP & Referências" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#20221e20] pb-24 sm:pb-28 md:pb-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 sm:px-5 py-8 sm:py-9 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <BrandIdentity />
          <p className="mb-0 mt-2 text-[10px] text-[#777970]">
            Projeto Startup · Ciência da Computação · FECAP (São Paulo, 2026)
          </p>
        </div>

        <nav
          aria-label="Navegação pelos 8 atos do projeto"
          className="flex flex-wrap gap-x-4 sm:gap-x-5 gap-y-2.5 sm:gap-y-3 text-[10px] font-medium text-[#55574f]"
        >
          {footerLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="inline-flex min-h-[36px] items-center py-1 transition hover:text-[#7b3b3f]">
              {label}
            </Link>
          ))}
          <Link href="/explorar" className="inline-flex min-h-[36px] items-center py-1 transition hover:text-[#7b3b3f]">
            Índice temático
          </Link>
          <Link href="/documentacao" className="inline-flex min-h-[36px] items-center py-1 font-bold text-[#7b3b3f]">
            Mapa do documento
          </Link>
        </nav>

        <span className="text-[9px] text-[#85877f]">© 2026 HarmonIA · FECAP</span>
      </div>
    </footer>
  );
}
