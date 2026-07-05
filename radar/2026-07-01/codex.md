---
title:    Codex
ring:     assess
quadrant: tools
tags:     [AI]
---

[Codex][codex] ist OpenAIs Coding Agent, verfügbar als Cloud-Agent über ChatGPT und als Open-Source [CLI][codex-cli] für das Terminal. Der Cloud-Agent führt Aufgaben in isolierten Sandboxes aus, standardmässig ohne Netzwerkzugang, was ein starkes Sicherheitsmodell ergibt. Mehrere Tasks laufen parallel und unabhängig vom eigenen Rechner.

Die CLI-Variante arbeitet wie [Claude Code][claude-code] lokal und bietet konfigurierbare Approval-Modi. Wir beobachten Codex als Alternative, insbesondere für Szenarien mit erhöhten Sicherheitsanforderungen, in denen die Cloud-Isolation ein Vorteil sein kann.

[codex]: https://developers.openai.com/codex
[codex-cli]: https://github.com/openai/codex
[claude-code]: /tools/claude-code
