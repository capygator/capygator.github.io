# Capygator Website

Solopreneur-Website für **Capygator** — Power BI, Microsoft Fabric und Agentic Engineering für den DACH-Mittelstand.

Tagline: **calm on complexity**.

Live: [capygator.com](https://capygator.com)

## Stack

- **Astro 5.x** — Static Site Generation, file-based Routing
- **React 19** — nur Islands (Interaktivität)
- **TailwindCSS 4.x** — via Vite-Plugin, Design-System in `src/styles/global.css`
- **Framer Motion** — Animationen
- **@splinetool/react-spline** — 3D-Szenen
- **TypeScript** — durchgängig

## Befehle

```bash
npm install        # Deps installieren
npm run dev        # Dev-Server → http://localhost:4321
npm run build      # Production-Build → dist/
npm run preview    # Build lokal testen
npm run lint       # ESLint
npm run format     # Prettier
npm run test       # Vitest
```

## Struktur

```
src/
├── pages/           # Astro file-based routing (deutsche URLs)
├── layouts/         # BaseLayout, PageLayout
├── components/
│   ├── layout/      # Header, Footer
│   ├── sections/    # CTABanner
│   └── ui/          # Button, Card, HeroDiagram, SpotlightCards, ...
├── styles/global.css   # Design-Tokens (@theme)
└── lib/utils.ts     # cn(), formatEuro()

public/images/       # statische Assets
```

## Design-System

- **Farben**: Near-black BG (`#0a0b0d`), Grün-Akzent (`#00e5a0`) aus Logo
- **Fonts**: Syne (Display), DM Sans (Body) — Google Fonts
- **Breakpoints**: sm/md/lg/xl (Mobile-first)

Details in `CLAUDE.md`.

## Deployment

GitHub Pages via Actions bei Push auf `main`. Custom Domain via `public/CNAME`.

## Konventionen

- **`.astro`** bevorzugt, **`.tsx`** nur für Client-Interaktivität
- **Deutsch** überall (Content + Alt-Texte)
- **"Ich"** statt "Wir" — Solopreneur, keine Fake-Agentur
- Kein Berater-Bullshit, keine Buzzwords
- Lighthouse Score > 90, WCAG 2.1 AA, < 2s auf 3G

## Lizenz

Proprietär — © Capygator.
