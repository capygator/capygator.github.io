---
created: 2026-03-29
type: analyse
status: draft
tags:
  - business
  - copywriting
  - capygator
  - conversion
related:
  - "[[contentstrategie-und-setup]]"
  - "[[MOC Capygator Website]]"
---

# Capygator Website — Text-Review & Verbesserungsvorschläge

> [!abstract] Kernaussage
> Die Texte sind fachlich solide, aber zu gleichförmig. Jede Subpage klingt wie ein Template mit ausgetauschten Stichwörtern. Das größte Problem: **die eigene Contentstrategie wird nicht konsequent umgesetzt** — es steht "keine Berater-Sprache", aber die Seite klingt trotzdem wie ein Beraterdeck.

---

## Übergreifende Probleme

### 1. Template-Monotonie [●●●] [Logik]

Alle 11 Subpages folgen exakt dem gleichen Schema:
Hero → Stats (3 Zahlen) → Problem-Text → Quote → 4 Deliverables → 3 Prozess-Schritte → 3 Persona-Karten → CTA

Das ist **strukturell sauber**, aber **emotional tot**. Ein Besucher der zwei Subpages liest, merkt: "Ach, das ist ja immer das gleiche." Differenzierung fehlt.

**Vorschlag:** Nicht jede Subpage braucht alle Sektionen. Manche brauchen ein konkretes Vorher/Nachher. Andere eine visuelle Demo. Manche könnten kürzer sein.

### 2. Fake-Zitate [●●○] [Logik]

> "Wir haben Fabric lizenziert, aber niemand weiß wo wir anfangen sollen." — IT-Leitung, Mittelstand

Das klingt erfunden — weil es erfunden ist. Es steht kein Name, kein Unternehmen dahinter. Der Leser spürt das. Entweder echte Testimonials oder gar keine.

**Vorschlag:** Zitate komplett entfernen und durch eine **Einzeiler-Problemzuspitzung** ersetzen, die nicht so tut als wäre sie von einem echten Kunden. Statt:

> "Warum stimmt die Umsatzzahl nicht?" — Ihr CFO, montags um 9:02

Besser als eigene Stimme:

> Montag, 9:02. Der CFO fragt warum die Umsatzzahl nicht stimmt. Ihr BI-Team prüft manuell. Um 11:30 ist der Fehler gefunden — eine gebrochene Referenz in Tabelle 47 von 200.

Das erzählt eine Szene statt ein Zitat zu simulieren.

### 3. "Lassen Sie uns besprechen" — 15× die gleiche CTA [●●●] [Logik]

Fast jede CTA-Überschrift ist eine Variation von "Lassen Sie uns besprechen wie...". Das ist passiv, unspezifisch und repetitiv.

**Vorschlag — CTA-Headlines nach Ergebnis formulieren:**

| Seite | IST | BESSER |
|-------|-----|--------|
| Fabric Overview | "Fabric richtig angehen?" | "In 5 Tagen wissen, wo Sie stehen." |
| Strategie Assessment | "Bereit für Klarheit?" | "Eine Roadmap statt 80 Seiten Doku." |
| Architektur | "Architektur die hält?" | "Einmal richtig. Nicht dreimal billig." |
| Implementierung | "Bereit für die Umsetzung?" | "Vom Assessment zur laufenden Plattform." |
| Enablement | "Team fit machen?" | "Unabhängig in 4 Wochen." |
| Power BI Overview | "Power BI richtig aufsetzen?" | "Reports die in 3 Sekunden laden." |
| Semantische Modelle | "Modell richtig aufsetzen?" | "Das Fundament, das alle Reports trägt." |
| BI Apps | "Reports die wirken?" | "Dashboards, die montags geöffnet werden." |
| Performance | "Reports beschleunigen?" | "Von 30 Sekunden auf 3." |
| Governance | "BI-Umgebung aufräumen?" | "200 Reports. Null Wildwuchs." |
| Agentic Overview | "AI in Ihrem BI-Workflow?" | "Weniger Routine. Mehr Entscheidungen." |
| Datenvalidierung | "Datenqualität automatisieren?" | "Fehler finden, bevor der CFO es tut." |
| Pipeline-Generierung | "Pipelines schneller bauen?" | "Von Anforderung zu Notebook in Minuten." |
| Modell-Review | "Modell reviewen lassen?" | "200 Measures in einer Stunde geprüft." |
| Preise | "Welches Paket passt?" | "30 Minuten. Null Verpflichtung." |

### 4. "Für wen"-Sektion auf jeder Subpage [●●○] [Logik]

Die 3 Persona-Karten (C-Level / IT / BI) erscheinen auf **jeder einzelnen Subpage**. Das ist redundant — nach der dritten Seite scrollt niemand mehr hin. Auf den Übersichtsseiten (Fabric, Power BI, Agentic) sind sie sinnvoll. Auf den Subpages sind sie Ballast.

**Vorschlag:** Persona-Karten nur auf den 3 Übersichtsseiten behalten. Auf Subpages stattdessen: **ein konkretes Ergebnis oder ein Vorher/Nachher**.

---

## Seitenspezifische Vorschläge

### Homepage

**IST — Hero Subheadline:**
> "Ich verwandle komplexe Datenlandschaften in klare Entscheidungsgrundlagen. Power BI, Microsoft Fabric und Agentic Engineering — von jemandem, der alle drei Welten versteht."

**Problem:** Feature-Aufzählung im ersten Satz, den der Besucher liest. "Verwandle komplexe Datenlandschaften in klare Entscheidungsgrundlagen" ist Berater-Deutsch.

**VORSCHLAG:**
> "Ihre Daten sind da. Ihre Entscheidungen warten. Ich sorge dafür, dass beides zusammenkommt — mit Power BI, Microsoft Fabric und AI."

Kürzer, direkter, Problem-zuerst.

---

**IST — Service Card Descriptions:**

> "Von der Datenstrategie bis zum kompetenten Team. End-to-End Fabric — Architektur, Implementierung, Enablement."

**Problem:** Das ist eine Feature-Liste mit Bindestrichen. Was hat der Kunde davon?

**VORSCHLAG:**

| Service | IST | BESSER |
|---------|-----|--------|
| Fabric | "Von der Datenstrategie bis zum kompetenten Team. End-to-End Fabric — Architektur, Implementierung, Enablement." | "Die meisten Fabric-Projekte scheitern nicht an der Technologie. Sondern daran, dass niemand das Gesamtbild hat." |
| Power BI | "Semantische Modelle, die Ihre Berichte 10× schneller machen. BI Apps und Reports vom Profi." | "Ihre Reports laden 30 Sekunden? Das liegt nicht an der Hardware. Es liegt am Datenmodell." |
| Agentic | "KI die Datenarbeit erledigt, nicht nur darüber redet. Claude + Fabric für automatisierte Pipelines." | "80% jeder Pipeline ist Boilerplate. AI schreibt den Code, der Mensch reviewt das Ergebnis." |

Die Vorschläge benennen das Problem, nicht das Feature. Der Leser denkt "ja, genau das!" statt "ok, noch ein Berater".

---

### Fabric Overview

**IST — Hero:**
> "Fabric ist mächtig — aber Macht ohne Plan ist Chaos. Ich bringe beides zusammen: die technische Tiefe und den strategischen Überblick, den Ihr Mittelstand braucht."

**Problem:** "Macht ohne Plan ist Chaos" ist ein netter Spruch, aber er sagt nichts Konkretes. "Den Ihr Mittelstand braucht" — kein Mittelständler identifiziert sich gern als "Mittelstand".

**VORSCHLAG:**
> "Fabric hat 6 Workloads, 3 Architektur-Optionen und unendlich viele Wege, es falsch aufzusetzen. Ich habe die meisten davon gesehen — und weiß welcher für Sie funktioniert."

Konkreter, glaubwürdiger, selbstbewusster ohne arrogant zu sein.

---

**IST — Stats:**
> "6+" → "Fabric Workloads zur Auswahl"
> "0" → "davon strategisch geplant"
> "∞" → "Wege, es falsch aufzusetzen"

Das "∞" ist clever, die "0" auch. Aber "6+" ist eine Microsoft-Marketing-Zahl, kein Schmerzpunkt.

**VORSCHLAG:**
> "6+" → "Workloads, eine Lizenz — null Orientierung"
> "0" → "Unternehmen, die beim ersten Versuch richtig liegen"
> "∞" → "Wege es falsch aufzusetzen. Einen richtigen."

---

### Power BI Overview

**IST — Stats:**
> "30s" → "Ladezeit die keiner akzeptiert"
> "90%" → "der Probleme im Datenmodell"
> "0" → "Zweite Chancen beim Management"

Die sind **gut**. Besonders "0 Zweite Chancen beim Management" — das trifft. Lassen.

**IST — Problem Text:**
> "Power BI kann jeder installieren. Aber ein Report der in 30 Sekunden lädt statt in 3 Minuten? Ein Datenmodell das auch in zwei Jahren noch wartbar ist? Das braucht Erfahrung."

**Problem:** Solide, aber "Das braucht Erfahrung" ist ein Selbstlob das der Leser besser selbst denken sollte.

**VORSCHLAG:**
> "Power BI kann jeder installieren. In drei Monaten hat jede Abteilung ihre eigenen Reports, drei verschiedene Farbschemata und einen Controller der heimlich in Excel weiterarbeitet."

Das erzählt die Geschichte weiter statt sie mit einem Selbstlob abzuschließen.

---

### Preise-Seite

Die Preise-Seite ist **die stärkste Seite**. Transparent, klar, die FAQ sind exzellent ("Wenn nach dem ersten Sprint-Tag die Richtung nicht stimmt, stelle ich keine weiteren Tage in Rechnung"). Das ist ein Trust-Signal das kaum ein Berater gibt.

**Ein Vorschlag:**

Die Paket-Descriptions sind noch zu generisch:

| Paket | IST | BESSER |
|-------|-----|--------|
| Sprint | "Quick Wins, Assessments, Workshops. Ideal um schnell Klarheit zu schaffen oder ein konkretes Problem zu lösen." | "In 5 Tagen wissen Sie wo Sie stehen. Assessment, Workshop oder konkretes Problem lösen." |
| Projekt | "Implementierung, Migration, BI App Bau. Für klar definierte Projekte mit messbarem Ergebnis." | "Von Assessment bis Go-Live. Eine Fabric-Migration, ein Semantic Model, eine BI App — fertig und übergeben." |
| Partnerschaft | "Langfristiger Fabric/BI Partner. Für Unternehmen die einen verlässlichen Experten an ihrer Seite wollen." | "Ihr externer BI-Lead. Planung, Umsetzung und Coaching — solange wie nötig, nicht länger." |

---

### Kontakt-Seite

**IST — Hero:**
> "Schreiben Sie mir — ich melde mich innerhalb von 24 Stunden."

**Problem:** "Innerhalb von 24 Stunden" ist eine Ansage die man auch einhalten muss. Am Freitag geschrieben, Sonntag Antwort?

**VORSCHLAG:**
> "Schreiben Sie mir — ich melde mich am nächsten Werktag."

Realistischer, gleiches Signal.

---

**IST — Form Note:**
> "Kein Callcenter, keine Warteschleife — Sie schreiben direkt mir."

Das ist **gut**. Solopreneur-Authentizität. Behalten.

---

### Agentic Engineering Overview

**IST — "Warum Anthropic Claude":**
> "Ich arbeite mit Claude von Anthropic — dem zuverlässigsten AI-Modell für technische Aufgaben. Warum? Präzisere Code-Generierung, transparenteres Reasoning, und eine klare Haltung zu Datensicherheit. Ihre Unternehmensdaten verdienen ein Modell dem man vertrauen kann."

**Problem:** "Dem zuverlässigsten AI-Modell" ist eine Behauptung, die in 6 Monaten veraltet sein kann. Außerdem klingt es nach Werbung für Anthropic, nicht nach Mehrwert für den Kunden.

**VORSCHLAG:**
> "Ich arbeite mit Claude von Anthropic. Warum? Weil es bei technischen Aufgaben die präzisesten Ergebnisse liefert, sein Reasoning transparent macht und Ihre Daten nicht zum Training verwendet. In der Praxis heißt das: weniger Nacharbeit, mehr Nachvollziehbarkeit."

Gleiche Message, aber begründet statt behauptet. Und "verwendet Ihre Daten nicht zum Training" ist ein konkreter DSGVO-Pluspunkt, den ein IT-Leiter sofort versteht.

---

## Globale Sprachregeln — Was überall geändert werden sollte

### "Lassen Sie uns..." eliminieren
Kommt 15× vor. Immer passiv, immer vage. Ersetzen durch konkrete Ergebnis-Aussagen.

### "Ich bringe / Ich sorge / Ich helfe" reduzieren
Die Seite sagt zu oft was *du* tust, statt was der *Kunde* bekommt. Perspektive drehen:

| ICH-FOKUS | KUNDEN-FOKUS |
|-----------|--------------|
| "Ich analysiere Ihre Situation" | "Sie wissen in 5 Tagen wo Sie stehen" |
| "Ich baue Ihre Fabric-Umgebung" | "Ihre Plattform läuft nach 4 Wochen" |
| "Ich schule Ihr Team" | "Ihr Team arbeitet nach 2 Wochen eigenständig" |

### "— das ist die eigentliche Kunst" / "— das ist das Ziel" streichen
Kommt mehrfach vor und ist Selbstlob. Der Kunde soll das selbst denken.

### Zahlen konsequent als Ergebnis-Beweis nutzen
Die besten Stellen der Seite sind da wo konkrete Zahlen stehen (30s → 3s, 5 Tage, 200+ Reports). Davon mehr, besonders in den Hero-Subheadlines.

---

## Prioritäts-Ranking der Änderungen

| Prio | Änderung | Impact | Aufwand |
|------|----------|--------|---------|
| 1 | CTA-Headlines auf Ergebnisse umschreiben | Hoch — direkt conversion-relevant | Niedrig — 15 Einzeiler |
| 2 | Fake-Zitate entfernen oder durch Szenen ersetzen | Hoch — Glaubwürdigkeit | Niedrig — Text-Edits |
| 3 | Homepage Hero + Service Cards umschreiben | Hoch — First Impression | Mittel |
| 4 | "Für wen"-Sektionen auf Subpages entfernen | Mittel — weniger Redundanz | Niedrig — Löschen |
| 5 | Paket-Descriptions auf Preise-Seite schärfen | Mittel — Trust-Seite | Niedrig |
| 6 | Agentic Claude-Section umschreiben | Mittel — Zukunftssicherheit | Niedrig |
| 7 | Perspektive drehen (Ich → Sie) | Hoch — durchgängig | Hoch — alle Seiten |

---

> [!tip] Nächster Schritt
> Die CTA-Headlines (Prio 1) und die Fake-Zitate (Prio 2) sind Quick Wins — wenig Aufwand, hoher Impact. Soll ich die direkt in den Code einbauen?
