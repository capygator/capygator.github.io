---
created: 2026-03-21
type: framework
status: draft
tags:
  - business
  - powerbi
  - fabric
  - framework
  - actionable
related:
  - "[[MOC Business-Modelle]]"
  - "[[contentstrategie]]"
  - "[[leadgenerierung]]"
  - "[[company-of-one]]"
---

# Contentstrategie & Claude Code Setup — Capygator × Solopreneur × DACH

> [!abstract] Kernaussage
> Die Seite verkauft nicht "eine Agentur" sondern **eine Person mit ungewöhnlicher Kombination**: Design-Gespür + Deep Fabric/Power BI Expertise + Agentic AI Engineering. Der erste Eindruck muss genau das transportieren — in 3 Sekunden.

> [!warning] Positionierungsfalle
> Solopreneur-Seiten kippen leicht in zwei Richtungen: (1) zu bescheiden ("Freelancer der alles kann") oder (2) zu aufgeblasen (Fake-Agentur mit "Wir"). Capygator braucht den dritten Weg: **selbstbewusst, klar, eigenständig** — "Ich" statt "Wir", Premium statt Discount.

---

## 1 — Tech-Stack

### Astro + React Islands + TailwindCSS → GitHub Pages

| Kriterium           | Warum Astro                                                                   |
| ------------------- | ----------------------------------------------------------------------------- |
| **Performance**     | Static-first → Lighthouse 95+, lädt schneller als jede WordPress-Agenturseite |
| **SEO**             | Statisches HTML = sofortige Indexierung                                       |
| **Content**         | MDX Content Collections für Blog/Glossar (Post-Launch)                        |
| **Interaktivität**  | React Islands nur wo nötig (Kontaktformular)                                  |
| **Wartung**         | Null Backend, Git-basiert, perfekt für One-Person-Betrieb                     |
| **Design-Freiheit** | Volle Kontrolle — die Seite selbst wird zum Portfolio-Stück                   |

**Deployment:** GitHub Pages via GitHub Actions
**Formulare:** Formspree / Getform (kein Backend auf GH Pages)

---

## 2 — Seitenarchitektur

### Informationsarchitektur

```
capygator.de
├── / (Home)                    ← Hero: "Wow-Moment" — Design + Kompetenz
├── /fabric                     ← End-to-End: Strategie → Implementierung → Coaching
├── /power-bi                   ← Semantische Modelle + BI Apps vom Profi
├── /agentic-engineering        ← Moderne BI-Entwicklung mit Anthropic & Fabric
├── /preise                     ← Transparente Tagespaket-Struktur
├── /kontakt                    ← Formular + Calendly
├── /impressum                  ← Pflichtseite
├── /datenschutz                ← Pflichtseite
└── (Post-Launch)
    ├── /blog                   ← Fabric/Power BI/AI Content auf Deutsch
    └── /glossar                ← Long-Tail SEO
```

### Seiten-Briefs

#### 1 — Home (Hero Page)

**Job:** In 3 Sekunden kommunizieren: _"Diese Person versteht Design UND Daten — und baut mit modernsten Tools."_

**Struktur:**

```
┌─────────────────────────────────────────────────┐
│  HERO                                           │
│  Headline: [Positionierung in 6-8 Worten]       │
│  Subline: Power BI · Microsoft Fabric · AI      │
│  Visual: Kein Stockfoto — eigenes Design-       │
│  Element das Kompetenz ZEIGT, nicht behauptet    │
│  CTA: "Projekt besprechen"                      │
├─────────────────────────────────────────────────┤
│  3 SERVICE-KARTEN (Fabric / Power BI / Agentic) │
│  Je: Icon + 1-Satz-Pitch + →Link                │
├─────────────────────────────────────────────────┤
│  TRUST-SIGNALE                                  │
│  Microsoft Partner · Zertifizierungen ·          │
│  Kunden-Logos oder Branchen                      │
├─────────────────────────────────────────────────┤
│  SOCIAL PROOF                                   │
│  1-2 Zitate von Kunden (echt, mit Name/Rolle)   │
├─────────────────────────────────────────────────┤
│  CTA-BANNER                                     │
│  "Lassen Sie uns über Ihr Projekt sprechen"      │
└─────────────────────────────────────────────────┘
```

> [!question] Design-Entscheidung
> Der Hero entscheidet alles. Optionen:
> A) Animiertes Daten-Visual (zeigt: "der kann Daten UND Design")
> B) Bold Typografie + subtile Fabric/Power BI Referenz
> C) Interaktives Element (z.B. Mini-Dashboard das reagiert)
> → Was passt zu deiner Marke?

#### 2 — /fabric

**Headline-Framing:** Nicht "Fabric Beratung" sondern z.B. _"Von der Datenstrategie bis zum kompetenten Team — alles aus einer Hand."_

**Struktur:**

- **Problem:** Fabric ist mächtig aber komplex. Mittelständler brauchen jemanden der das Gesamtbild versteht, nicht nur ein Feature.
- **Positionierung:** End-to-End Partner — Strategie → Architektur → Implementierung → Coaching der Anwender
- **Die 4 Phasen** (visuell, z.B. als Prozess-Grafik):
  1. Strategie & Assessment
  2. Architektur & Datenmodell
  3. Implementierung & Migration
  4. Enablement & Coaching
- **Für wen:** Mittelstand der Fabric einführen oder von Legacy migrieren will
- **CTA:** → Erstgespräch / Preise

#### 3 — /power-bi

**Headline-Framing:** z.B. _"Semantische Modelle und BI Apps — von jemandem, der Power BI wirklich versteht."_

**Struktur:**

- **Problem:** Die meisten Power BI Projekte scheitern nicht an der Technik, sondern am Datenmodell.
- **Was ich anders mache:** Semantische Modellierung als Fundament, nicht als Nachgedanke
- **Leistungen:**
  - Semantische Modelle (Star Schema, Composite Models)
  - BI Apps & Report-Design
  - Performance-Optimierung
  - Power BI Governance & Deployment
- **CTA:** → Erstgespräch / Preise

#### 4 — /agentic-engineering

**Headline-Framing:** z.B. _"KI die nicht nur redet, sondern Datenarbeit erledigt."_

> [!warning] Kritische Annahme
> "Agentic Engineering" ist ein Differenzierungsmerkmal, aber die Zielgruppe (Mittelstand-Entscheider) kennt den Begriff vermutlich nicht. Die Seite muss den NUTZEN erklären, nicht die Technologie.

**Struktur:**

- **Problem:** Datenaufbereitung, Dokumentation, Testing — Routinearbeit frisst Projektbudget
- **Lösung:** Agentic AI (Claude/Anthropic) integriert in den Fabric/Power BI Workflow
- **Konkrete Use Cases:** (2-3 Beispiele, greifbar)
  - Automatisierte Datenvalidierung
  - Code-generierte Pipelines
  - AI-gestütztes Datenmodell-Review
- **Warum Anthropic:** Kurze Begründung (Zuverlässigkeit, Sicherheit, DSGVO-Kontext)
- **CTA:** → Erstgespräch / Preise

#### 5 — /preise

**Philosophie:** Transparenz ist das stärkste Vertrauenssignal für Solopreneure. Keine "auf Anfrage"-Spielchen.

**Struktur:**

```
┌──────────────────┬──────────────────┬──────────────────┐
│    SPRINT         │    PROJEKT        │    PARTNERSCHAFT  │
│    5 Tage         │    20 Tage        │    200 Tage       │
│                   │                   │                   │
│    200 €/h        │    150 €/h        │    125 €/h        │
│    (8.000 €)      │    (24.000 €)     │    (200.000 €)    │
│                   │                   │                   │
│  Quick Wins,      │  Implementierung, │  Langfristiger    │
│  Assessments,     │  Migration,       │  Fabric/BI        │
│  Workshops        │  BI App Bau       │  Partner          │
│                   │                   │                   │
│  [Anfragen →]     │  [Anfragen →]     │  [Anfragen →]     │
└──────────────────┴──────────────────┴──────────────────┘

+ FAQ darunter:
  - "Was ist ein Arbeitstag?" → 8h, remote oder vor Ort
  - "Reisekosten?" → [deine Policy]
  - "Kann ich Tage nachbuchen?" → [Policy]
  - "Wie schnell bist du verfügbar?" → [aktuelle Auslastung]
```

> [!tip] Pricing-Psychologie
> Die 3-Stufen-Struktur nudged Richtung 20-Tage-Paket (Anker-Effekt: 200€ macht 150€ attraktiv, 125€ erfordert hohes Commitment). Die Pauschalen in Klammern geben dem Entscheider die Budgetzahl die er intern braucht.

#### 6 — /kontakt

- Formular (Name, Firma, Paket-Interesse, Nachricht)
- Calendly-Embed für Erstgespräch
- Kein Telefon nötig (Solopreneur-Schutz)
- Response-Erwartung ("Ich melde mich innerhalb von 24h")

#### 7+8 — /impressum + /datenschutz

- DACH-Pflichtseiten
- TMG-konformes Impressum
- DSGVO-konforme Datenschutzerklärung (Formspree, Calendly, ggf. Analytics)

---

## 3 — Design-Richtung

### Das "Wow" — was die Seite ausstrahlen muss

> [!abstract] Design-These
> Die Seite IST das Portfolio. Wer sieht dass Capygator eine schöne, performante, durchdachte Seite baut, glaubt auch dass Capygator schöne Dashboards und saubere Datenmodelle baut.

**Tonalität:** Modern, selbstbewusst, technisch versiert aber nicht kalt. Kein Corporate-Blau. Kein Microsoft-Look.

**Differenzierung durch:**

- Ungewöhnliche Typografie (kein Inter, kein Roboto)
- Eigene Illustrationen oder generative Visuals statt Stockfotos
- Micro-Interactions die Datenkompetenz zeigen
- Dark Mode als Default? (signalisiert: Tech-Kompetenz)

**Capygator-Marke:**

- **Tagline:** "calm on complexity" — DAS ist die Positionierung in 3 Worten
- **Logo:** Capybara meditiert auf einem Alligator — Ruhe inmitten von Komplexität
- Das Logo ist mutig, character-driven, sofort wiedererkennbar
- Farbpalette aus dem Logo ableiten: Dunkler BG, Grüntöne als Akzent
- Die Haltung "calm on complexity" zieht sich durch alles: Ton, Design, Content

---

## 4 — CLAUDE.md

```markdown
# CLAUDE.md — Capygator Website

## Projektkontext

Capygator ist ein Solopreneur-Business — Company of One.
Positionierung: DER Power BI & Microsoft Fabric Experte in DACH.
Einzigartige Kombination: Fabric End-to-End + Power BI Semantic Models

- Agentic AI Engineering mit Anthropic.

## Tonalität

- "Ich" statt "Wir" — authentisch, keine Fake-Agentur
- Selbstbewusst und klar, nicht arrogant
- Technisch tief aber immer mit Business-Kontext
- Der Name "Capygator" hat Charakter — die Seite darf das auch zeigen

## Zielgruppe

Mittelstand DACH (50-500 MA): Entscheider (GF, CFO, Bereichsleiter)
und IT-Leitung als Gatekeeper.
Sprache für Entscheider = Business-Outcomes.
Sprache für IT = Tech-Kompetenz und Tiefe.

## Tech-Stack

- Astro 5.x (Static Site Generator)
- React 19 (nur für interaktive Islands: Kontaktformular)
- TailwindCSS 4.x
- TypeScript (strict)
- Deployment: GitHub Pages via GitHub Actions
- Formulare: Formspree (kein Backend auf GH Pages)

## Deployment

- Adapter: @astrojs/static (default)
- GitHub Actions: .github/workflows/deploy.yml
- Custom Domain: CNAME in /public
- Build: npm run build → dist/

## Seiten

- / (Home — Hero, Service-Karten, Trust, Social Proof, CTA)
- /fabric (End-to-End: Strategie → Coaching)
- /power-bi (Semantische Modelle + BI Apps)
- /agentic-engineering (AI + Fabric/Power BI)
- /preise (3 transparente Tagespakete)
- /kontakt (Formular + Calendly)
- /impressum
- /datenschutz

## Design-System

- Fonts: [nach Design-Entscheidung]
- Primärfarbe: [nach Design-Entscheidung]
- CSS Custom Properties in global.css
- Tailwind-Klassen bevorzugen
- Mobile-first, Breakpoints sm/md/lg/xl
- KEIN Microsoft-Look, KEIN Corporate-Blau
- Die Seite selbst ist das Portfolio — Design-Qualität = Kernkompetenz-Beweis

## Preise (für Preisseite)

- Sprint (5 Tage): 200 €/h → 8.000 € pauschal
- Projekt (20 Tage): 150 €/h → 24.000 € pauschal
- Partnerschaft (200 Tage): 125 €/h → 200.000 € pauschal
- Alle Preise netto, zzgl. MwSt.

## Code-Konventionen

- Komponenten: PascalCase (.astro oder .tsx)
- Astro bevorzugen, React nur für Interaktivität
- Props mit TypeScript-Interface
- Keine inline-Styles
- Bilder: Astro <Image /> für Optimierung
- SEO: title, description, og:image pro Seite
- Schema.org: LocalBusiness + ProfessionalService
- URLs auf Deutsch (/fabric, /power-bi, /preise — nicht /services)

## Wichtige Regeln

- KEIN Lorem Ipsum — realistische Platzhaltertexte
- KEINE Stockfotos — [BILD: Beschreibung] Platzhalter
- KEIN "Wir" — immer "Ich" oder Capygator
- Lighthouse > 90 in allen Kategorien
- WCAG 2.1 AA Minimum
```

---

## 5 — Projektstruktur

```
capygator-website/
├── CLAUDE.md
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── fonts/
│   ├── images/
│   ├── favicon.svg
│   └── CNAME
├── src/
│   ├── components/
│   │   ├── ui/                  # Button, Card, Badge, PricingCard
│   │   ├── layout/              # Header, Footer, Nav, MobileMenu
│   │   ├── sections/            # Hero, ServiceCards, TrustBar, CTA
│   │   └── interactive/         # ContactForm.tsx (React Island)
│   ├── content/
│   │   ├── blog/                # (Post-Launch) MDX Artikel
│   │   └── glossar/             # (Post-Launch) MDX Begriffe
│   ├── layouts/
│   │   ├── BaseLayout.astro     # HTML Shell, SEO, Schema.org
│   │   └── PageLayout.astro     # Standard Content Pages
│   ├── pages/
│   │   ├── index.astro          # Home / Hero
│   │   ├── fabric.astro
│   │   ├── power-bi.astro
│   │   ├── agentic-engineering.astro
│   │   ├── preise.astro
│   │   ├── kontakt.astro
│   │   ├── impressum.astro
│   │   └── datenschutz.astro
│   ├── styles/
│   │   └── global.css
│   └── lib/
│       └── utils.ts
└── .cursorrules
```

---

## 6 — Claude Code Workflow

```
1. Init
   → "Erstelle Astro-Projekt nach CLAUDE.md Struktur
      mit GitHub Actions Workflow und TailwindCSS"

2. Design-System
   → "Erstelle global.css mit Farbpalette, Typografie, Spacing.
      Modern, dunkel, technisch — kein Corporate."
   → "Erstelle UI-Komponenten: Button, Card, Badge, PricingCard, SectionWrapper"

3. Layout
   → "BaseLayout mit SEO, Schema.org ProfessionalService,
      Header mit Nav (Fabric | Power BI | Agentic | Preise | Kontakt),
      Footer mit Impressum/Datenschutz Links"

4. Hero / Home
   → "Startseite: Hero mit starker Headline + Visual,
      3 Service-Karten, Trust-Leiste, Testimonial, CTA-Banner"

5. Service-Seiten
   → "Fabric-Seite: End-to-End Prozess (4 Phasen),
      Problem/Lösung Struktur, CTA"
   → "Power BI Seite: Semantic Models Fokus, Leistungen, CTA"
   → "Agentic Engineering: Use Cases, Anthropic-Begründung, CTA"

6. Preise
   → "Preisseite mit 3 Paketen als Cards.
      Sprint 5T/200€, Projekt 20T/150€, Partner 200T/125€.
      FAQ Section darunter."

7. Kontakt + Pflichtseiten
   → "Kontaktseite mit Formspree-Formular + Calendly Embed"
   → "Impressum und Datenschutz (DACH-konform, Platzhalter für Adresse)"

8. Polish
   → "Responsive Check, Lighthouse Audit, SEO Meta Tags,
      og:image Platzhalter, Sitemap"

9. Deploy
   → "GitHub Pages Test-Deploy, CNAME Setup verifizieren"
```

---

## 7 — GitHub Actions Workflow

```yaml
name: Deploy Capygator to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist/
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## 8 — Content-Prinzipien

### Stimme & Ton

| Aspekt          | Capygator                                                   |
| --------------- | ----------------------------------------------------------- |
| **Perspektive** | "Ich" — nie "Wir", nie passiv                               |
| **Ton**         | Klar, direkt, fachlich souverän                             |
| **Humor**       | Erlaubt — der Name gibt Spielraum                           |
| **Jargon**      | Power BI / Fabric Fachbegriffe: ja. Berater-Bullshit: nein. |
| **Claim**       | Nie "der Beste" sagen — durch Tiefe beweisen                |

### Headlines — Nicht so / Sondern so

| ❌ Nicht             | ✅ Sondern                                                    |
| -------------------- | ------------------------------------------------------------- |
| "Fabric Beratung"    | "Von der Datenstrategie bis zum kompetenten Team"             |
| "Power BI Experte"   | "Semantische Modelle, die Ihre Berichte 10x schneller machen" |
| "KI-Integration"     | "KI die Datenarbeit erledigt, nicht nur darüber redet"        |
| "Flexible Preise"    | "Drei Pakete. Null Überraschungen."                           |
| "Wir sind innovativ" | [einfach weglassen]                                           |

---

> [!tip] Nächster Schritt
> **Drei Entscheidungen, dann bauen wir:**
>
> 1. **Design-Richtung** — Dark/Tech oder Light/Clean? Capybara-Element ja/nein?
> 2. **Hero-Headline** — Was soll der erste Satz sein? Ich kann Varianten vorschlagen.
> 3. **Trust-Signale** — Microsoft Partner Status? Zertifizierungen? Kunden die man nennen darf?
