---
title:    Spec-driven Development
ring:     adopt
quadrant: concepts-and-methods
tags:     [AI]
---

Spec-driven Development ist inzwischen der Ausgangspunkt unseres [Agentic-Engineering][agentic-engineering]. Bevor ein Coding-Agent mit der Implementierung beginnt, halten wir fest, was sich ändern soll und warum. Daraus entstehen Spezifikation, Design-Entscheide und Tasks, die der Agent abarbeitet. Abgeschlossene Änderungen archivieren wir im Repository, sodass die Absicht hinter dem Code nachvollziehbar bleibt.

Als Werkzeug setzen wir [OpenSpec][openspec] ein. Es ist leichtgewichtig, funktioniert mit verschiedenen Coding-Agents und lässt sich in bestehende Repositories einführen. Alternativen wie [GitHub Spec Kit][spec-kit] oder [Kiro][kiro] geben strengere Abläufe vor oder binden an eine eigene IDE.

Wichtig ist, den Aufwand an die Grösse der Änderung anzupassen. Für einen kleinen Bugfix ist ein vollständiger Durchlauf mit Proposal und Design zu schwer, bei neuen Features und Architekturänderungen zahlt er sich aus. Mit jeder neuen Generation von Coding-Agents prüfen wir, wie viel Struktur es tatsächlich noch braucht.

[agentic-engineering]: /concepts-and-methods/agentic-engineering
[openspec]: /tools/open-spec
[spec-kit]: https://github.com/github/spec-kit
[kiro]: https://kiro.dev/
