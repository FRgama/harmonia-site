# Missão do Agente: Análise e Implementação dos Componentes do Design System no HarmonIA

Você é o Engenheiro Frontend e Designer de Interfaces sênior responsável pelo projeto **HarmonIA** (`D:\harmonia-site`).

---

## 🎯 Objetivo da Tarefa
Analisar os componentes presentes em `public/componentes/` (extraídos da linguagem visual editorial e glassmorphism do Shopify Editions Winter '26), selecionar os que melhor elevam a proposta de valor do HarmonIA, e implementá-los de forma elegante nas páginas e seções do projeto (`src/app/` e `src/components/`).

---

## 📚 Contexto do HarmonIA
- **Proposta:** Plataforma inteligente de gestão de guarda-roupa, estilo sustentável e consumo consciente com chancela acadêmica FECAP.
- **Identidade Visual:** Estética renascentista editorial (papel nobre, proporções douradas da Vinci, tipografia serifada *Cormorant Garamond/Cinzel*, tinta escura `--ink` e acentos `--coral` e `--acid`).
- **Stack Tecnológica:** Next.js 16 (App Router em `src/app/`), React 19, TypeScript 5, Tailwind CSS 4 (`@import "tailwindcss";`), Motion (`motion/react` v14), Lucide React e ESLint 9.

---

## 🔍 Passo 1: Análise dos Componentes em `public/componentes/`
Avalie os seguintes componentes e priorize a implementação de acordo com o impacto no site:

1. **`backgrounds/davinci-lines.tsx` (Prioridade Máxima):**
   - **Por que combina:** A geometria renascentista de Leonardo da Vinci dialoga diretamente com o conceito de proporções corporais, coloração pessoal e o nome "HarmonIA".
   - **Onde aplicar:** Ao fundo do Hero (`src/components/hero.tsx`), na seção de Tecnologia/Motor IHE (`src/components/technology.tsx`), ou como moldura sutil em `src/app/page.tsx`.

2. **`overlays/sidekick-dock.tsx` (Prioridade Máxima):**
   - **Por que combina:** HarmonIA é uma inteligência de estilo. Uma barra de interação rápida flutuante ou integrada aos módulos de produto permite simular prompts do usuário (ex: *"Avaliar caimento de peça"*, *"Compatibilidade com meu armário"*, *"Impacto ESG"*).
   - **Onde aplicar:** Na seção de Solução (`src/components/solution.tsx`), no Final CTA (`src/components/final-cta.tsx`) ou como assistente interativo na página inicial.

3. **`navigation/chapter-nav.tsx` (Alta Prioridade):**
   - **Por que combina:** A página inicial do HarmonIA já é dividida em Atos com numeração romana (`I Visão & ESG`, `II Personas & Negócio`, `III Módulos do MVP`, `IV Motor IHE & Arquitetura`).
   - **Onde aplicar:** Como controle flutuante discreto de navegação rápida entre os Atos da página inicial.

4. **`cards/feature-card.tsx` e `cards/bento-grid.tsx` (Alta Prioridade):**
   - **Por que combina:** Melhora a exibição dos 6 Módulos do MVP e das características da arquitetura em cards nobres com micro-interações de hover.
   - **Onde aplicar:** Em `src/components/features.tsx` ou em `src/components/topic-content/product.tsx`.

5. **`actions/pill-button.tsx` e `actions/square-button.tsx` (Média Prioridade):**
   - **Por que combina:** Padroniza botões de ação e controles de mídia com suporte nativo a `motion/react` e acessibilidade via `useReducedMotion()`.

6. **`cards/editorial-quote-card.tsx` (Média Prioridade):**
   - **Por que combina:** Ideal para citações institucionais da ABVTEX, validações da banca FECAP e depoimentos de personas.
   - **Onde aplicar:** Em `src/components/problem.tsx` ou `src/components/community.tsx`.

7. **`overlays/accordion.tsx` (Média Prioridade):**
   - **Por que combina:** Permite expansão fluida e acessível de requisitos técnicos em `src/components/requirements.tsx`.

---

## 🛠️ Passo 2: Diretrizes de Implementação Técnica
1. **Copiar/Mover para `src/components/ui/`:**
   Para manter a organização canônica do Next.js, os componentes selecionados podem ser importados diretamente de `@/../public/componentes/...` ou movidos para `src/components/ui/`.
2. **Harmonização de Cores e Estilos:**
   Certifique-se de que as classes utilizem as variáveis já existentes no HarmonIA:
   - Fundo claro: `bg-[var(--paper)]` ou `bg-[var(--paper-deep)]`
   - Texto principal: `text-[var(--ink)]`
   - Acentos: `bg-[var(--coral)]`, `text-[var(--coral)]`, `border-[var(--line)]`
   - Destaque nobre: `var(--acid)`
3. **Respeito a Animações Reduzidas:**
   Mantenha sempre `useReducedMotion()` para usuários com preferência de movimento reduzido.
4. **Validação:**
   Após qualquer alteração, execute:
   ```bash
   npm run lint
   npx tsc --noEmit
   npm run build
   ```
   Nenhum erro de TypeScript ou ESLint deve permanecer.

