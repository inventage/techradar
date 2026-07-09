---
title:    Agent Skills
ring:     trial
quadrant: concepts-and-methods
tags:     [AI]
---

Agent Skills sind wiederverwendbare Fähigkeiten für AI-Agents, vergleichbar mit Plugins, aber speziell auf die Bedürfnisse von [Coding-Agents][coding-agents] zugeschnitten. Sie kapseln prozedurales Wissen in Form von Anleitungen, Workflows oder Aktionen, die ein Agent bei Bedarf abrufen und ausführen kann. Marktplätze wie [skills.sh][skills] bieten fertige Skills zur Installation an, und Coding-Agents wie [Claude Code][claude-skills] oder [opencode][opencode-skills] bringen eigene Skills-Systeme mit.

Wir experimentieren mit Skills, um projektspezifische Konventionen und wiederkehrende Aufgaben für unsere Agents zu standardisieren, zum Beispiel Code-Review-Checklisten, Deployment-Workflows oder Architektur-Validierungen. Das Ziel ist, die Konsistenz bei der Arbeit mit AI-Agents zu erhöhen und den Einstieg in neue Projekte zu erleichtern.

Im Vergleich zu [MCP-Servern][mcps] sind Skills deutlich leichtgewichtiger: Sie bestehen im Kern aus Markdown-Dateien mit Anweisungen, optional ergänzt um Skripte, benötigen keinen laufenden Serverprozess und belasten das Kontextfenster des Agents nur dann, wenn sie tatsächlich aktiviert werden. MCP-Server hingegen registrieren ihre Tool-Definitionen in der Regel dauerhaft im Kontext, auch wenn sie gerade nicht gebraucht werden. Für einfache Integrationen reichen oft auch klassische CLI-Tools, die ein Agent direkt aufrufen kann. Skills ergänzen beide Ansätze: Sie beschreiben die Abläufe und Konventionen, nach denen ein Agent seine Werkzeuge einsetzen soll.

[skills]: https://skills.sh/
[claude-skills]: https://code.claude.com/docs/en/skills
[opencode-skills]: https://opencode.ai/docs/skills/
[coding-agents]: /tools/coding-agents
[mcps]: /concepts-and-methods/mcps-und-clis
