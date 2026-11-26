---
title:    Autonomous AI Agents
ring:     assess
quadrant: concepts-and-methods
tags:     [AI]
---

Bei autonomen Agents zeichnen sich zwei Richtungen ab. Innerhalb von Coding-Agents ist begrenzte Autonomie inzwischen Alltag. [Claude Code][claude-code] entscheidet im Auto-Modus selbst, welche Aktionen ohne Rückfrage erlaubt sind, und kann mehrere Agents als Team koordinieren. [Codex][codex] arbeitet Tasks parallel in der Cloud ab. Wir nutzen solche Agents bereits für automatisierte Reviews in CI/CD-Pipelines, mit eng begrenzten Rechten und in isolierten Umgebungen.

Bei offenen, persönlichen Agents mit breitem Systemzugriff hat sich unsere Zurückhaltung bestätigt. [OpenClaw][openclaw] verzeichnete 2026 eine lange Reihe von Sicherheitslücken, darunter Token-Diebstahl über präparierte Links. Auf dem zugehörigen Skill-Marktplatz tauchten Hunderte bösartiger Skills auf, und Zehntausende Instanzen waren ungeschützt aus dem Internet erreichbar. Seit Oktober gibt es mit OpenClaw Enterprise eine Variante mit zentraler Steuerung und Sandboxing, die Erfahrungen damit sind aber noch jung.

Unser Fazit bleibt: Autonomie lohnt sich dort, wo der Handlungsspielraum klar begrenzt ist und jedes Ergebnis dieselben Guardrails durchläuft wie beim [Agentic-Engineering][agentic-engineering]. Agents mit Vollzugriff auf Mail, Messenger oder Unternehmenssysteme sehen wir in Kundenprojekten noch nicht.

[claude-code]: /tools/claude-code
[codex]: /tools/codex
[openclaw]: https://openclaw.ai/
[agentic-engineering]: /concepts-and-methods/agentic-engineering
