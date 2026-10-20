# Template Next.js - Buddha Spa

Ponto de partida para novos projetos Next.js da Buddha Spa.

## O que vem incluído

- Next.js 16 (App Router), React 19 e TypeScript
- ESLint 9 com `eslint-config-next`
- Vitest e Testing Library para testes
- Cabeçalhos de segurança HTTP configurados em `next.config.mjs`
- Workflow de CI (`.github/workflows/ci.yml`) que roda lint, testes e build em cada PR
- Dependabot para `npm` e `github-actions`
- Template de Pull Request

## Como usar

1. Clique em "Use this template" no GitHub para criar o repositório do seu projeto.
2. Altere o `name` em `package.json` e o conteúdo de `app/page.tsx` e `app/layout.tsx`.
3. Instale e valide: `npm ci && npm run lint && npm test && npm run build`.
4. Copie `.env.example` para `.env.local` se o projeto precisar de variáveis de ambiente.
5. Rode localmente com `npm run dev`.

## Convenções

- Use a versão de Node indicada em `.nvmrc`.
- Registre decisões de arquitetura em `docs/adr/`.
- Qualquer domínio externo (scripts, fontes, APIs) exige atualizar a Content-Security-Policy em `next.config.mjs`.
- Não versione segredos. Use variáveis de ambiente.

## Deploy

O deploy na Vercel é feito pelo GitHub Actions:

- `deploy-preview.yml`: gera um preview em cada PR para `main`.
- `deploy-production.yml`: publica em produção a cada push em `main`.

Configure estes Secrets no repositório: `VERCEL_TOKEN`, `VERCEL_ORG_ID` e `VERCEL_PROJECT_ID`.
A integração Git nativa da Vercel fica desativada em `vercel.json` para evitar deploys duplicados.

## Versionamento

Cada push em `main` executa `auto-release.yml`, que usa `release-please` com Conventional Commits para abrir ou atualizar um PR de release com a próxima versão e o changelog.
O tag e o GitHub Release são criados ao mergear esse PR.
Configure os Secrets `RELEASE_PLEASE_APP_ID` e `RELEASE_PLEASE_APP_PRIVATE_KEY` com as credenciais de um GitHub App com permissão de `contents` e `pull-requests`.

As proteções de branch e as demais regras de governança são definidas pela área de TI.
