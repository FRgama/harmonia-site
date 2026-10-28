import type { Metadata } from "next";
import {
  ArrowUpRight,
  BookOpenCheck,
  Compass,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { DocumentPage } from "@/components/document-page";
import { topicGroups } from "@/data/topic-index";

export const metadata: Metadata = {
  title: "Índice temático — HarmonIA",
  description:
    "Navegue pelas páginas e seções do site HarmonIA, organizadas por tema.",
};

const themeIcons = [
  Compass,
  Sparkles,
  BookOpenCheck,
  UsersRound,
  ShieldCheck,
  BookOpenCheck,
];

export default function ExplorePage() {
  return (
    <DocumentPage
      eyebrow="Índice / Navegação por temas"
      index="08"
      title={<>Um projeto, vários caminhos. <em>Encontre o seu.</em></>}
      description="As páginas do site estão organizadas por assunto. Escolha um tema para ir direto à página ou à seção correspondente."
    >
      <section className="topic-index__grid" aria-label="Temas do site">
        {topicGroups.map(({ number, title, description, links: items }, index) => {
          const Icon = themeIcons[index];
          return (
          <article className="topic-index__card" key={number}>
            <div className="topic-index__heading">
              <span>{number}</span>
              <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
            <ul>
              {items.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>
                    {label}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </article>
          );
        })}
      </section>

      <aside className="document-callout mt-10">
        <BookOpenCheck size={20} aria-hidden="true" />
        <div>
          <span className="eyebrow">Leitura do documento</span>
          <p>
            Para comparar cada seção do PDF com o conteúdo publicado, acesse o
            mapa de cobertura documental.
          </p>
          <Link className="document-text-link" href="/documentacao">
            Abrir mapa do documento{" "}
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </aside>
    </DocumentPage>
  );
}
