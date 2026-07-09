---
title:    Agentic Engineering
ring:     adopt
quadrant: concepts-and-methods
tags:     [AI]
blog:
  title: "So entwickeln wir mit AI, ohne die Kontrolle über Sicherheit zu verlieren"
  url:   https://blog.inventage.com/blogs/regelwerk-ai/
---

[Agentic-Engineering][agentic-engineering] bezeichnet die Praxis, Software mit [Coding-Agents][coding-agents] zu entwickeln. Wir delegieren ganze Arbeitsschritte an den Agenten, von der Implementation über das Refactoring bis zur Testausführung. Unsere Arbeit verlagert sich damit weg von der einzelnen Codezeile, hin zu Spezifikation, Architektur und Review.

Ausgangspunkt ist eine Spezifikation, wie sie [Spec-driven Development][sdd] beschreibt. Die Agents laufen bei uns in Contained-Environments, damit der Host und sensible Daten geschützt bleiben. Jedes Ergebnis durchläuft automatisierte Guardrails: Lint, Code-Review, Vulnerability-Scans und die Testsuite. Architekturregeln prüfen wir mit [ArchUnit][archunit]. Die Qualität der Resultate hängt direkt von der Klarheit dieser Vorgaben ab.

Der Ansatz ist in mehreren unserer Projekte im Einsatz und prägt, wie wir Aufgaben schneiden und neue Projekte aufsetzen. Den einzelnen Tools widmen wir eigene Blips, etwa [Claude Code][claude-code] und [Codex][codex].

[agentic-engineering]: https://simonwillison.net/guides/agentic-engineering-patterns/
[coding-agents]: /tools/coding-agents
[sdd]: /concepts-and-methods/spec-driven-development
[archunit]: /libraries-frameworks-and-languages/archunit
[claude-code]: /tools/claude-code
[codex]: /tools/codex
