import Link from "next/link";
import { BrandIdentity } from "@/components/brand-identity";

export function Footer() {
  return (
    <footer className="border-t border-[#20221e20]"><div className="mx-auto flex max-w-360 flex-col gap-8 px-5 py-8 md:flex-row md:items-end md:justify-between md:px-10">
      <div><BrandIdentity /><p className="mb-0 mt-2 text-[10px] text-[#777970]">Tecnologia para vestir com intenção.</p></div>
      <nav aria-label="Documentação do projeto" className="flex flex-wrap gap-x-5 gap-y-3 text-[10px] font-medium text-[#55574f]">
        <Link href="/#tema-visao">Visão e propósito</Link>
        <Link href="/#tema-experiencia">Experiência</Link>
        <Link href="/#tema-negocio">Negócio</Link>
        <Link href="/#tema-pessoas">Pessoas</Link>
        <Link href="/#tema-requisitos">Requisitos</Link>
        <Link href="/#tema-tecnologia">Tecnologia</Link>
        <Link href="/explorar">Índice temático</Link>
        <Link href="/documentacao" className="font-bold text-[#7b3b3f]">Mapa do documento</Link>
      </nav>
      <span className="text-[9px] text-[#85877f]">© 2026 HarmonIA</span>
    </div></footer>
  );
}
