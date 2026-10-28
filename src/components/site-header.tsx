import { BrandIdentity } from "@/components/brand-identity";
import { SiteNavigationDrawer } from "@/components/site-navigation-drawer";

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-[#20191215] bg-[#f8f2e8]/80 backdrop-blur-sm">
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 md:px-10">
        <BrandIdentity />
        <SiteNavigationDrawer />
      </div>
    </header>
  );
}
