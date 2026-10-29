import type { Metadata } from "next";
import {
  ArrowUpRight,
  BookOpenCheck,
  CircleDollarSign,
  Compass,
  Cpu,
  GraduationCap,
  Layers3,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { DocumentPage } from "@/components/document-page";
import { topicGroups } from "@/data/topic-index";

export const metadata: Metadata = {
  title: "Índice temático em 8 atos — HarmonIA",
  description:
    "Navegue pelos 8 atos e seções documentais do site HarmonIA, organizados na sequência narrativa oficial.",
};

const themeIcons = [
  Sparkles,
  Compass,
  UsersRound,
  CircleDollarSign,
  Layers3,
  Cpu,
  ShieldCheck,
  GraduationCap,
];

export default function ExplorePage() {
  return (
    <DocumentPage
      eyebrow="Índice / Estrutura narrativa em 8 atos"
      index="08"
      title={<>Oito atos conectados. <em>Uma documentação integral.</em></>}
      description="Todas as seções do site seguem a arquitetura narrativa em 8 atos alinhada 100% ao documento oficial da HarmonIA."
    >
      <section className="topic-index__grid" aria-label="Os 8 atos do site HarmonIA">
        {topicGroups.map(({ number, title, description, links: items }, index) => {
          const Icon = themeIcons[index] ?? Compass;
          return (
            <article className="topic-index__card" key={number}>
              <div className="topic-index__heading">
                <span>ATO {number}</span>
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
          <span className="eyebrow">Rastreabilidade documental</span>
          <p>
            Para auditar item por item a correspondência entre o sumário do PDF oficial e os 8
            atos da página principal, consulte o mapa de cobertura documental.
          </p>
          <Link className="document-text-link" href="/documentacao">
            Abrir mapa de cobertura do PDF <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </aside>
    </DocumentPage>
  );
}
