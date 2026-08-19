# System Fake Update

Coleção de telas fake de atualização de sistema em tela cheia — um prank
inofensivo, inspirado em sites como [fake-updates.com](https://fake-updates.com/)
e [updatefaker.com](https://updatefaker.com/).

Escolha um sistema na home, abra em tela cheia e pressione <kbd>Esc</kbd> para
sair a qualquer momento. Nada é coletado e nada é alterado no dispositivo.

## Telas

- Windows Update (10/11)
- Windows Blue Screen of Death (BSOD)
- Windows 7 (Configuring updates)
- Windows XP (Installing updates)
- macOS (Installing a software update)
- Ubuntu (Installing updates)

## Stack

- React 19 + TypeScript
- Vite
- React Router (HashRouter — compatível com GitHub Pages)
- oxlint

## Desenvolvimento

```bash
npm install
npm run dev      # servidor local
npm run build    # build de produção em dist/
npm run preview  # preview do build
npm run lint     # oxlint
```

## Deploy

Publicado no GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
a cada push na branch `main`.

Para ativar: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

O `base` do Vite em produção é `/system-fake-update/` (project pages). Se o
repositório for renomeado, ajuste `base` em `vite.config.ts`.
