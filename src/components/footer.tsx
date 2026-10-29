import Link from "next/link";
import { BrandIdentity } from "@/components/brand-identity";

const footerLinks = [
  { href: "/#inicio", label: "01 · Início" },
  { href: "/#tema-visao", label: "02 · Visão & ESG" },
  { href: "/#tema-pessoas", label: "03 · Personas" },
  { href: "/#tema-negocio", label: "04 · Negócio & Custos" },
  { href: "/#tema-experiencia", label: "05 · Módulos MVP" },
  { href: "/#tema-tecnologia", label: "06 · IHE & Arquitetura" },
  { href: "/#tema-requisitos", label: "07 · Requisitos" },
  { href: "/#tema-institucional", label: "08 · FECAP & Referências" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#20221e20]">
      <div className="mx-auto flex max-w-360 flex-col gap-8 px-5 py-9 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <BrandIdentity />
          <p className="mb-0 mt-2 text-[10px] text-[#777970]">
            Projeto Startup · Ciência da Computação · FECAP (São Paulo, 2026)
          </p>
        </div>

        <nav
          aria-label="Navegação pelos 8 atos do projeto"
          className="flex flex-wrap gap-x-5 gap-y-3 text-[10px] font-medium text-[#55574f]"
        >
          {footerLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="transition hover:text-[#7b3b3f]">
              {label}
            </Link>
          ))}
          <Link href="/explorar" className="transition hover:text-[#7b3b3f]">
            Índice temático
          </Link>
          <Link href="/documentacao" className="font-bold text-[#7b3b3f]">
            Mapa do documento
          </Link>
        </nav>

        <span className="text-[9px] text-[#85877f]">© 2026 HarmonIA · FECAP</span>
      </div>
    </footer>
  );
}
