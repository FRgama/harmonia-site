# HarmonIA

Landing page institucional da HarmonIA, uma plataforma inteligente de gerenciamento de guarda-roupa. A experiência apresenta o problema, a proposta de solução, as principais funcionalidades e os princípios tecnológicos do projeto.

## Stack

- Next.js com App Router e React
- TypeScript
- Tailwind CSS
- Lucide React

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` para visualizar a página.

## Verificações

```bash
npm run lint
npm run build
```

As seções da página inicial estão organizadas como componentes independentes em `src/components`. As fotografias editoriais são carregadas do Unsplash.

## Organização do conteúdo

A página inicial reúne o projeto em seis seções, nesta ordem: visão e propósito; experiência e funcionalidades; compras e modelo de negócio; pessoas e comunidade; requisitos e confiança; tecnologia, viabilidade e documentação. O botão **Páginas** no cabeçalho abre a navegação lateral por temas.

- `/explorar`: índice temático completo.
- `/documentacao`: mapa Markdown das seções do PDF, com a cobertura inicial e a cobertura atual do site.

Os endereços antigos de produto, personas, requisitos, arquitetura e investimento redirecionam à seção correspondente da página inicial. A logo transparente está em `public/Docs/HarmonIA Logo.webp` e é apresentada em um fundo escuro para manter seu contraste. O conteúdo explica o escopo proposto no documento; não afirma que os recursos do aplicativo mobile estejam implementados.
