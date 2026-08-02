# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Session-Start: Offene TODOs proaktiv erinnern

Bei jedem Session-Start in diesem Projekt: Prüfe `~/.claude/projects/-Users-ulf-dev-www-capygator-com/memory/` auf Dateien mit Namensmuster `project_*_todos.md`. Falls vorhanden, lies die Datei(en) und weise den User in der ersten Antwort proaktiv (unaufgefordert) auf die offenen Punkte hin — kurz, als Bullet-Liste mit Datum. Frage danach, ob er heute an einem dieser Punkte arbeiten will.

Format der ersten Antwort:
> Noch offen aus [Datum]: [1-Zeilen-Zusammenfassung pro Punkt]. Heute daran arbeiten?

Erledigte TODOs aus `project_*_todos.md` löschen (Datei-Update). Wenn Liste leer → Datei komplett löschen + Verweis aus `MEMORY.md` entfernen.

## Befehle

```bash
npm run dev        # Dev-Server starten → localhost:4321
npm run build      # Production Build → dist/
npm run preview    # Build lokal testen
```

Deployment erfolgt automatisch via GitHub Actions bei Push auf `main` (GitHub Pages).

## Architektur

Astro 5.x Static Site mit React 19 Islands für Interaktivität. TailwindCSS 4.x via Vite-Plugin (nicht Astro-Integration).

### Projektstruktur

- `src/pages/` — Routing (Astro file-based routing, deutsche URLs)
- `src/layouts/` — BaseLayout (HTML-Shell, SEO, Fonts) + PageLayout
- `src/components/layout/` — Header, Footer
- `src/components/sections/` — Seitenabschnitte (CTABanner)
- `src/components/ui/` — Wiederverwendbare UI-Komponenten (Button, Card, PricingCard, ServiceCard, Spotlight-Cards)
- `src/styles/global.css` — Design-System mit TailwindCSS @theme (Custom Properties für Farben, Typografie, Spacing)
- `src/lib/utils.ts` — `cn()` (clsx + twMerge) und `formatEuro()`
- `public/` — Statische Assets (Logo, CNAME, favicon, robots.txt)

### Path-Aliases (tsconfig.json)

- `@/*` → `src/*`, `@components/*`, `@layouts/*`, `@styles/*`, `@lib/*`

### Schlüssel-Abhängigkeiten

- `framer-motion` — Animationen in React-Komponenten
- `@splinetool/react-spline` — 3D-Spline-Szenen im Hero
- `clsx` + `tailwind-merge` — Bedingte CSS-Klassen via `cn()`

### Konventionen

- Astro-Komponenten (.astro) bevorzugen, React (.tsx) NUR für Client-Interaktivität
- PascalCase für Komponenten-Dateien
- Props mit TypeScript-Interface definieren
- Keine inline-Styles — Tailwind oder global.css
- Sprache der Website: Deutsch

---

## Projektkontext

Capygator ist ein Solopreneur-Business — Company of One.
Positionierung: DER Power BI & Microsoft Fabric Experte in DACH.
Tagline: **"calm on complexity"**
Einzigartige Kombination: Fabric End-to-End + Power BI Semantic Models + Agentic AI Engineering mit Anthropic.

Das Logo zeigt ein Capybara das meditierend auf einem Alligator sitzt — die perfekte Metapher: Ruhe und Souveränität inmitten komplexer Datenlandschaften. Diese Haltung zieht sich durch die gesamte Seite.

## Tonalität

- "Ich" statt "Wir" — authentisch, keine Fake-Agentur
- Selbstbewusst und klar, nicht arrogant
- "Calm on complexity" = souverän, ruhig, kompetent
- Technisch tief aber immer mit Business-Kontext
- Der Name "Capygator" hat Charakter — die Seite darf das auch zeigen
- KEIN Berater-Bullshit: keine Buzzwords, keine Phrasen wie "innovativ", "ganzheitlich", "leidenschaftlich"

## Zielgruppe

Mittelstand DACH (50-500 MA): Entscheider (GF, CFO, Bereichsleiter) und IT-Leitung als Gatekeeper.

- Sprache für Entscheider = Business-Outcomes ("Von 3 Tagen Reporting auf 3 Stunden")
- Sprache für IT = Tech-Kompetenz und Tiefe (Semantic Models, Lakehouse, DAX)
- Region: Deutschland, Österreich, Schweiz. Seite auf Deutsch.

## Seiten & Routing

```
/ (Home)                     → index.astro
/fabric                      → fabric.astro
/power-bi                    → power-bi.astro
/agentic-engineering         → agentic-engineering.astro
/preise                      → preise.astro
/kontakt                     → kontakt.astro
/impressum                   → impressum.astro
/datenschutz                 → datenschutz.astro
```

## Seiten-Inhalt & Struktur

### Home (index.astro)

Ziel: In 3 Sekunden kommunizieren — "Diese Person versteht Design UND Daten und arbeitet mit modernsten Tools."

Aufbau:

1. **Hero:** Logo + Headline + Subline (Power BI · Fabric · AI) + CTA "Projekt besprechen"
2. **3 Service-Karten:** Fabric / Power BI / Agentic Engineering — je Icon + 1-Satz-Pitch + Link
3. **Trust-Signale:** Microsoft Partner, Zertifizierungen, Kunden-Branchen
4. **Social Proof:** 1-2 Kundenzitate (Platzhalter mit [ZITAT: Beschreibung])
5. **CTA-Banner:** "Lassen Sie uns über Ihr Projekt sprechen" → /kontakt

### /fabric

Headline-Framing: Ergebnis, nicht Tätigkeit. z.B. "Von der Datenstrategie bis zum kompetenten Team."

Aufbau:

- Problem: Fabric ist mächtig aber komplex
- Positionierung: End-to-End — Strategie → Architektur → Implementierung → Coaching
- 4 Phasen visuell darstellen (Prozess-Grafik oder Stepper)
- Für wen: Mittelstand der Fabric einführen oder migrieren will
- CTA → /kontakt und /preise

### /power-bi

Headline-Framing: z.B. "Semantische Modelle und BI Apps — von jemandem, der Power BI wirklich versteht."

Aufbau:

- Problem: Die meisten Power BI Projekte scheitern am Datenmodell
- Differenzierung: Semantische Modellierung als Fundament
- Leistungen: Semantic Models, BI Apps, Performance-Optimierung, Governance
- CTA → /kontakt und /preise

### /agentic-engineering

Headline-Framing: z.B. "KI die Datenarbeit erledigt, nicht nur darüber redet."

Aufbau:

- Problem: Routinearbeit (Datenaufbereitung, Doku, Testing) frisst Projektbudget
- Lösung: Agentic AI (Claude/Anthropic) im Fabric/Power BI Workflow
- 2-3 konkrete Use Cases (Datenvalidierung, Pipeline-Generierung, Modell-Review)
- Warum Anthropic: Zuverlässigkeit, Sicherheit, DSGVO
- CTA → /kontakt und /preise

### /preise

Transparenz = Vertrauenssignal. Keine "auf Anfrage"-Spielchen.

3 Pakete als Cards:

- **Sprint** (5 Tage): 200 €/h → 8.000 € pauschal — Quick Wins, Assessments, Workshops
- **Projekt** (20 Tage): 150 €/h → 24.000 € pauschal — Implementierung, Migration, BI App Bau
- **Partnerschaft** (200 Tage): 125 €/h → 200.000 € pauschal — Langfristiger Fabric/BI Partner

Alle Preise netto, zzgl. MwSt. FAQ-Section darunter.

### /kontakt

- Formspree-Formular (Name, Firma, Paket-Interesse als Dropdown, Nachricht)
- Calendly-Embed für Erstgespräch (Platzhalter-URL)
- Response-Erwartung: "Ich melde mich innerhalb von 24h"
- Kein Telefon (Solopreneur-Schutz)

### /impressum

- TMG-konformes Impressum (Platzhalter für Adresse, Name, etc.)

### /datenschutz

- DSGVO-konforme Datenschutzerklärung
- Erwähnung: Formspree, Calendly, GitHub Pages, ggf. Analytics

## Design-System

### Farben

```css
--bg-primary: #0a0b0d; /* Near-black Hintergrund */
--bg-secondary: #111318; /* Leicht heller für Sections */
--bg-card: #16181e; /* Card-Hintergrund */
--bg-card-hover: #1c1f27; /* Card Hover */
--accent: #00e5a0; /* Primär-Akzent (aus Logo) */
--accent-dim: #00e5a020; /* Accent transparent */
--accent-mid: #00e5a050; /* Accent halbtransparent */
--text-primary: #edf0f7; /* Haupttext */
--text-secondary: #8b91a3; /* Sekundärtext */
--text-muted: #555b6e; /* Gedämpfter Text */
--border: #1e2130; /* Borders */
--border-hover: #2a2e42; /* Borders bei Hover */
```

### Typografie

- **Display:** Syne (Google Fonts) — 700/800, für Headlines und Navigation
- **Body:** DM Sans (Google Fonts) — 400/500/700, für Fließtext
- Fallback: system-ui, sans-serif
- Headlines: letter-spacing -0.03em, line-height 1.08
- Body: line-height 1.65

### Layout

- Max-Width Container: 1280px
- Padding Container: 2.5rem (Desktop), 1.25rem (Mobile)
- Mobile-first, Breakpoints: sm(640px) / md(768px) / lg(1024px) / xl(1280px)
- Grid-Background mit Radial-Mask als atmosphärisches Element
- Grain-Overlay (SVG noise) für Textur

### Komponenten-Stil

- Cards: bg-card, 1px border, border-radius 12px, hover lift + top accent line
- Buttons primär: accent bg, dark text, 8px radius, hover glow
- Buttons sekundär: text only, accent color, hover underline
- Badges: accent-dim bg, accent border, rounded-full
- Icons: Outline-Style, accent color, in 48px Containern

### Motion / Animation

- Page load: Staggered fadeUp (opacity 0→1, translateY 20px→0)
- Cards: hover translateY(-4px) + box-shadow
- Links: underline width 0→100% auf hover
- Maskottchen-Area: Breathing glow, floating data nodes
- KEIN Overengineering — Performance > Animation

## Logo

- Datei: `public/images/capygator-logo.png`
- Verwendung: Navigation (klein, ~32px Höhe) und Hero (groß)
- Das Logo funktioniert auf dunklem Hintergrund (ist für schwarzen BG designed)
- Grüne Akzentfarbe im Logo = #00e5a0 Referenz für das gesamte Farbsystem

## CTA-Strategie

- **Primärer CTA:** "Projekt besprechen" → /kontakt (grüner Button)
- **Sekundärer CTA:** "Preise ansehen" → /preise (Text-Link)
- Jede Seite hat mindestens EINEN CTA above-the-fold
- Jede Seite endet mit einem CTA-Banner
- Sticky CTA-Button auf Mobile (fixed bottom)

## Wichtige Regeln

- ❌ KEIN Lorem Ipsum — immer realistische Platzhaltertexte auf Deutsch
- ❌ KEINE Stockfotos — Platzhalter mit `[BILD: Beschreibung]`
- ❌ KEIN "Wir" — immer "Ich" oder "Capygator"
- ❌ KEIN Microsoft-Blau als Hauptfarbe
- ❌ KEIN Inter, Roboto, Arial als Font
- ✅ Lighthouse Score > 90 in allen Kategorien
- ✅ WCAG 2.1 AA Minimum (Kontraste, Focus-States, Alt-Texte)
- ✅ Ladezeit < 2s auf 3G
- ✅ Responsive: Mobile-first, getestet auf 375px / 768px / 1280px

## Build-Reihenfolge (empfohlen)

1. Design-System: global.css + UI-Komponenten (Button, Card, Badge, PricingCard, SectionWrapper)
2. Layout: BaseLayout (SEO, Schema.org, Fonts, Header, Footer) + PageLayout
3. Home: Hero mit Logo + Service-Karten + Trust + CTA
4. Service-Seiten: /fabric, /power-bi, /agentic-engineering
5. Preise: 3 Pricing Cards + FAQ
6. Kontakt: Formspree-Formular + Calendly-Platzhalter
7. Pflichtseiten: Impressum + Datenschutz
8. Polish: Responsive, Lighthouse, Meta-Tags, Sitemap, og:image
