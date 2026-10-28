import Image from "next/image";

export function BrandLogo() {
  return (
    <span
      aria-hidden="true"
      className="grid size-9 shrink-0 place-items-center rounded-sm bg-[#151a1f] p-1"
    >
      <Image
        src="/Docs/HarmonIA%20Logo.webp"
        alt=""
        width={32}
        height={34}
        className="h-full w-full -translate-y-px object-contain"
      />
    </span>
  );
}
