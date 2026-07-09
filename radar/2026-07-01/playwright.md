---
title:    Playwright
ring:     adopt
quadrant: tools
tags:     [Testing]
---

[Playwright][playwright] hat sich in mehreren unserer Projekte als zuverlässiges Framework für browserbasiertes End-to-End-Testing bewährt und ist nun unser Standard-Werkzeug für UI-Tests. Der Umstieg vom bisherigen Taiko/Gauge-Stack ist abgeschlossen, alle neuen Projekte starten direkt mit Playwright.

Playwright ist für uns inzwischen vor allem ein Guardrail für [Agentic-Engineering][agentic-engineering]. AI-Agents dürfen Code aggressiv verändern, weil eine grüne [E2E-Suite][e2e] sicherstellt, dass die ausgelieferten Workflows weiterhin funktionieren. Der deterministische Ansatz mit Locators und Aria Snapshots (statt eines pixelbasierten Screenshot-Vergleichs) liefert dabei stabile Signale, auf die sich auch ein Coding-Agent in der CI verlassen kann.

Coding-Agents generieren neue Playwright-Tests aus natürlichsprachlichen Beschreibungen, und die «Copy prompt»-Funktion im Trace Viewer (seit Version 1.51) kopiert Fehlermeldung und Kontext als fertigen Prompt für einen LLM-Chat, was das Debugging fehlgeschlagener Tests spürbar beschleunigt.

[playwright]: https://playwright.dev
[agentic-engineering]: /concepts-and-methods/agentic-engineering
[e2e]: /concepts-and-methods/automatisiertes-e2e-testing
