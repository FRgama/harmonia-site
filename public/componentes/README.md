# HarmonIA Component Library & Design System Guide
> Biblioteca de componentes extraída da linguagem visual do **Shopify Editions Winter '26** e adaptada para a stack oficial do **HarmonIA**:
> **Next.js 16 (App Router) + React 19 + TypeScript 5 + Tailwind CSS 4 + Motion (`motion/react`) + Lucide React + ESLint 9**.

---

## 🎯 Instruções para Agentes de IA

Ao atuar no projeto **HarmonIA** (`D:\harmonia-site`), utilize estes componentes para manter coerência com a identidade editorial renascentista do site:

1. **Localização dos Componentes:**
   - Esta pasta (`public/componentes/`) serve como repositório canônico e catálogo de consulta para o agente.
   - Para utilizar nos módulos de `src/app/` ou `src/components/`, você pode referenciá-los diretamente ou copiar/mover para `src/components/ui/`.

2. **Convenções de Stack:**
   - **Motion:** Utilize sempre `import { motion, AnimatePresence, useReducedMotion } from "motion/react";` (já instalado como `motion: ^14.0.0`).
   - **Diretiva de Cliente:** Componentes que utilizam hooks de estado (`useState`, `useRef`) ou animações devem conter `"use client";` no topo.
   - **Ícones:** Utilize `lucide-react` (`ArrowUpRight`, `ChevronDown`, `Sparkles`, `Search`, etc.).
   - **Tailwind 4:** Não depende de `tailwind.config.js`; os tokens e estilos são configurados diretamente via CSS e classes utilitárias no `src/app/globals.css`.

---

## 📦 Catálogo de Componentes

### 1. Ações & Controles (`actions/`)
- **`PillButton`** (`pill-button.tsx`):
  - Botão pílula com micro-interações via Motion (`whileHover`, `whileTap`).
  - Variantes: `primary` (branco sólido), `secondary` (vidro escuro), `coral` (tom HarmonIA), `dark` (tinta renascentista), `outline`, `ghost`.
  - Suporta links (`href` para Next.js `Link`) e botões (`onClick`), além de ícones da `lucide-react`.
- **`SquareButton`** (`square-button.tsx`):
  - Botão quadrado translúcido com borda suave para controles de mídia (play/pause, fullscreen, som) ou navegação.
- **`SubnavPill`** (`subnav-pill.tsx`):
  - Pílula com tag de contagem numérica para filtros de capítulos, categorias ou personas.

### 2. Cards & Contêineres (`cards/`)
- **`FeatureCard`** (`feature-card.tsx`):
  - Card editorial com tag superior (eyebrow com dot colorido), título em tipografia serif, descrição, área para mídia/vídeo e link com seta em diagonal (`ArrowUpRight`).
- **`EditorialQuoteCard`** (`editorial-quote-card.tsx`):
  - Citação editorial com aspas estilizadas em serifa renascentista, destaque em itálico e assinatura do autor.
- **`BentoGrid` / `BentoItem`** (`bento-grid.tsx`):
  - Layout bento responsivo com suporte a `span={1 | 2 | 3}` para organizar blocos de conteúdo e pilares do HarmonIA.

### 3. Navegação (`navigation/`)
- **`GlassHeader`** (`glass-header.tsx`):
  - Barra de navegação fixa com blur dinâmico ao rolar a página (`backdrop-blur-xl`), links em pílula central e botão de ação à direita. Possui gaveta para dispositivos móveis integrada.
- **`ChapterNav`** (`chapter-nav.tsx`):
  - Navegador flutuante de capítulos em algarismos romanos (`I`, `II`, `III`, `IV`) com scroll suave para as seções correspondentes e menu expansível.

### 4. Superfícies & Divisores (`surfaces/`)
- **`GlassSurface`** (`glass-surface.tsx`):
  - Contêiner genérico com efeito vidro fosco em 4 variantes: `paper` (papel quente com blur), `light`, `dark` e `dock`.
- **`SectionDivider`** (`section-divider.tsx`):
  - Divisor de grade técnica com etiqueta centralizada para transição sutil entre capítulos.

### 5. Overlays & Inteligência (`overlays/`)
- **`SidekickDock`** (`sidekick-dock.tsx`):
  - Barra de interação rápida com a inteligência do HarmonIA (baseada no Sidekick AI da Shopify), com pílulas de sugestão e campo de prompt com gradiente.
- **`Accordion`** (`accordion.tsx`):
  - Acordeão animado com `AnimatePresence` para perguntas frequentes, especificações técnicas ou detalhes da arquitetura.
- **`SearchModal`** (`search-modal.tsx`):
  - Modal de busca (`Cmd+K`) com filtro dinâmico de tópicos do site e blur de fundo.

### 6. Backgrounds & Texturas (`backgrounds/`)
- **`DaVinciLines`** (`davinci-lines.tsx`):
  - Linhas de construção geométrica de Leonardo da Vinci em SVG com rotação lenta (`motion/react`), simbolizando o encontro entre arte, ciência e moda sustentável.
- **`LineGrid`** (`line-grid.tsx`):
  - Grade milimetrada sutil para fundos técnicos.
- **`NoiseOverlay`** (`noise-overlay.tsx`):
  - Textura granulada analógica para conferir o toque editorial de papel nobre.

---

## Integração atual na página inicial

- `DaVinciLines` acrescenta geometria discreta ao Hero e ao Motor IHE.
- `ChapterNav` oferece acesso flutuante aos oito atos, com o ato ativo acompanhado durante a rolagem.
- `SearchModal` pesquisa os links do índice editorial existente e abre pelo botão Buscar ou por `Ctrl/⌘ + K`.
- `BentoGrid` e `FeatureCard` resumem os seis módulos do MVP e levam às respectivas seções.
- `PillButton` padroniza os CTAs principais; `GlassSurface` organiza o explorador de temas baseado em `SidekickDock`.
- O explorador de temas é uma demonstração de navegação local. Não envia prompts nem afirma conectar-se a um modelo de IA.

`GlassHeader` não substitui o cabeçalho já existente; `NoiseOverlay` evita duplicar a textura global; `LineGrid` foi deixado de fora para não competir com os diagramas técnicos. Os controles e cards que duplicariam componentes nativos já presentes permanecem disponíveis na biblioteca para outros contextos.

## 💡 Exemplo Rápido de Uso em Página Next.js

```tsx
"use client";

import { PillButton } from "@/../public/componentes/actions/pill-button";
import { FeatureCard } from "@/../public/componentes/cards/feature-card";
import { BentoGrid, BentoItem } from "@/../public/componentes/cards/bento-grid";
import { DaVinciLines } from "@/../public/componentes/backgrounds/davinci-lines";
import { Sparkles, ArrowRight } from "lucide-react";

export default function ExemplosPage() {
  return (
    <section className="relative py-24 px-6 bg-[var(--paper,#e9dfc8)] overflow-hidden">
      {/* Geometria Da Vinci ao fundo */}
      <DaVinciLines className="absolute -top-40 -right-40 w-[600px] h-[600px] text-[var(--coral,#7b3b3f)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-serif font-medium mb-8">
          Tecnologia & Visão HarmonIA
        </h2>

        <BentoGrid columns={3}>
          <BentoItem span={2}>
            <FeatureCard
              eyebrow="Motor IHE"
              title="Índice de Harmonia do Estilo"
              description="Algoritmo que cruza biometria, coloração pessoal e sustentabilidade para recomendar peças com máximo aproveitamento."
              ctaText="Conhecer o algoritmo"
              href="/documentacao"
            />
          </BentoItem>
          <BentoItem span={1}>
            <FeatureCard
              eyebrow="Circularidade"
              title="ESG & Ciclo Fechado"
              description="Rastreabilidade e impacto positivo em cada combinação."
              ctaText="Ver métricas"
              href="/explorar"
            />
          </BentoItem>
        </BentoGrid>

        <div className="mt-8 flex gap-4">
          <PillButton variant="coral" icon={Sparkles}>
            Experimentar HarmonIA
          </PillButton>
          <PillButton variant="outline" icon={ArrowRight}>
            Documentação Técnica
          </PillButton>
        </div>
      </div>
    </section>
  );
}
```
