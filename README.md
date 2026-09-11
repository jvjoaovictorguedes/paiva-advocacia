# Paiva Advocacia e Consultoria — Site Institucional

Site institucional para escritório de advocacia, construído a partir da arquitetura do
projeto [`sadina-santos`](https://github.com/jvjoaovictorguedes/sadina-santos)
(Next.js + TypeScript + Tailwind CSS), adaptado para a identidade visual da **Paiva**.

## Stack

- **Next.js 15** (App Router) com **TypeScript**
- **Tailwind CSS** com tema customizado (cores, tipografia e espaçamentos da marca)
- Exportação estática (`output: "export"`) — o build gera HTML/CSS/JS puros na pasta
  `out/`, prontos para hospedar em qualquer serviço (Vercel, Netlify, cPanel, S3 etc.),
  sem necessidade de servidor Node em produção.

## Identidade visual aplicada

- **Cores:** deep moss `#26342B`, ink charcoal `#202321`, mineral gray `#858A84`,
  soft limestone `#C9C7BE`, architectural ivory `#F5F2EB`.
- **Tipografia:** Bodoni Moda (títulos) e Manrope (textos), carregadas via `next/font/google`.
- **Padrão gráfico:** losango com ícone de balança, recriado em `public/pattern.svg` e
  usado como textura decorativa no header do rodapé e nas seções de CTA.

### Sobre o logotipo

O arquivo `components/ui/Logo.tsx` contém uma **recriação estilizada** (placeholder) do
monograma "P" com coroa e leão, feita a partir da referência visual enviada — não é o
arquivo vetorial original do designer. Assim que você tiver os arquivos finais
(SVG/AI/EPS do logotipo, isotipo e assinatura horizontal), basta:

1. Colocar os arquivos em `public/logo/`.
2. Substituir o conteúdo de `components/ui/Logo.tsx` para referenciar as imagens finais
   (ou embutir o SVG oficial diretamente no componente).

## Estrutura do site

- `/` — Home: hero, quatro pilares de atuação, sobre, diferenciais, depoimentos,
  artigos em destaque e CTA de contato.
- `/sobre` — História, forma de trabalho, valores e equipe.
- `/atuacao` — Áreas de atuação (Direito Empresarial, Contratos, Tributário,
  Trabalhista, M&A, Propriedade Intelectual, Contencioso, Imobiliário Corporativo).
- `/consultoria` — Consultoria preventiva, gestão de riscos, governança e compliance,
  due diligence.
- `/artigos` e `/artigos/[slug]` — Central de conteúdo/insights jurídicos.
- `/contato` — Formulário de contato (front-end pronto, sem backend conectado) e
  informações de atendimento.

Todo o conteúdo textual (textos, áreas, artigos, depoimentos) está centralizado em
`content/*.ts` — para editar textos, não é necessário mexer nos componentes.

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Como gerar a versão estática (produção)

```bash
npm run build
```

O resultado fica em `out/`. Basta enviar essa pasta para qualquer hospedagem estática.

## Próximos passos sugeridos

- Substituir o logotipo placeholder pelos arquivos finais do designer.
- Adicionar fotografias reais do escritório e da equipe (hoje há placeholders indicando
  os espaços reservados).
- Conectar o formulário de `/contato` a um serviço de e-mail (ex.: Resend, Formspree)
  ou a um backend próprio.
- Revisar dados institucionais (OAB, endereço, telefone, e-mail e WhatsApp) em
  `content/site.ts`.
