import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";

type DocumentPageProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  index: string;
  children: ReactNode;
  embedded?: boolean;
};

export function DocumentPage({
  eyebrow,
  title,
  description,
  index,
  children,
  embedded = false,
}: DocumentPageProps) {
  if (embedded) return <>{children}</>;

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1}>
        <section className="document-hero">
          <div className="document-hero__inner">
            <span className="eyebrow">{eyebrow}</span>
            <span className="document-hero__index">{index} / HARMONIA</span>
            <h1 className="display-title">{title}</h1>
            <p>{description}</p>
          </div>
        </section>
        <div className="document-content">{children}</div>
      </main>
      <Footer />
    </>
  );
}
