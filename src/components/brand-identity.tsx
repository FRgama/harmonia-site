import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { BrandWordmark } from "@/components/brand-wordmark";

type BrandIdentityProps = {
  className?: string;
};

export function BrandIdentity({ className = "" }: BrandIdentityProps) {
  return (
    <Link
      href="/"
      aria-label="HarmonIA, página inicial"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <BrandLogo />
      <BrandWordmark className="text-[13px]" />
    </Link>
  );
}
