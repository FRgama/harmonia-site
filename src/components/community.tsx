import { Bookmark, LockKeyhole, Search, Share2 } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const POSTS = [
  { user: "@beatriz.af", palette: "Outono Quente · Ampulheta", tone: "linear-gradient(160deg,#a65f46,#6e2a2a)" },
  { user: "@rafa.lima", palette: "Inverno Profundo · IHE 95%", tone: "linear-gradient(160deg,#3d4a5e,#121a2b)" },
  { user: "@marina.s", palette: "Primavera Clara · Retângulo", tone: "linear-gradient(160deg,#d8b36a,#a98842)" },
  { user: "@luiza.v", palette: "Verão Suave · Triângulo", tone: "linear-gradient(160deg,#8a9466,#3d4a3a)" },
  { user: "@carol.m", palette: "Outono Profundo · Oval", tone: "linear-gradient(160deg,#7b3b3f,#2b2119)" },
  { user: "@helena.c", palette: "Inverno Frio · Cápsula", tone: "linear-gradient(160deg,#b9a883,#5a5240)" },
];

const ITEMS = [
  {
    icon: Share2,
    title: "Looks reais com tags semânticas",
    text: "Publicações enriquecidas com tags de ocasião, estilo e cartela cromática para facilitar a descoberta orgânica.",
  },
  {
    icon: Bookmark,
    title: "Painéis semânticos privados (moodboards)",
    text: "Curadoria pessoal de inspirações de terceiros salvas em murais privados para consulta rápida antes de se vestir.",
  },
  {
    icon: Search,
    title: "Busca por mesmo biótipo e mesma cartela",
    text: "Filtre referências criadas por pessoas que compartilham sua silhueta corporal ou uma das 12 cartelas sazonais.",
  },
];

export function Community() {
  return (
    <div id="comunidade" className="community-section community-section--embedded torn-sheet">
      <div className="community-section__inner">
        <div className="community-section__heading">
          <div>
            <span className="eyebrow">Experiência Social · Módulo 3.5 em ação</span>
            <ScrollReveal>
              <h2 className="display-title">
                Inspiração de quem veste <em>como você.</em>
              </h2>
            </ScrollReveal>
          </div>
          <p>
            Uma comunidade orientada por afinidade morfocromática, onde referências reais
            encontram curadoria privada e controle total de visibilidade.
          </p>
        </div>

        <div className="community-grid">
          <ScrollReveal>
            <div className="community-feed">
              <div className="community-feed__head">
                <span>FEED COMUNITÁRIO · HARMONIA</span>
                <span>RF14 · RF15</span>
              </div>
              <div className="community-feed__filters">
                <span className="is-active">Mesmo biótipo</span>
                <span>Mesma cartela</span>
                <span>Ocasião</span>
                <span>Moodboards</span>
              </div>
              <div className="community-feed__posts">
                {POSTS.map((p) => (
                  <div key={p.user} className="community-post" style={{ background: p.tone }}>
                    <Bookmark size={12} aria-hidden="true" />
                    <span>
                      <b>{p.user}</b>
                      {p.palette}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div>
            <div className="community-list">
              {ITEMS.map(({ icon: Icon, title, text }) => (
                <div key={title} className="community-item">
                  <Icon size={18} aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <ScrollReveal delay={0.1}>
              <div className="community-gap">
                <span>Chave de Privacidade · RN05</span>
                <strong>Controle absoluto: Perfil Público ou Privado.</strong>
                <p>
                  Usuários pragmáticos como Thiago mantêm o acervo 100% restrito em modo{" "}
                  <strong>Privado</strong>, enquanto entusiastas e criadoras como Beatriz e
                  Rafaela ativam o modo <strong>Público</strong> para transformar looks em
                  portfólio e comunidade.
                </p>
                <div>
                  <span>
                    <LockKeyhole size={11} aria-hidden="true" /> Modo Privado (uso individual)
                  </span>
                  <span>Modo Público (visível no feed)</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
