---
title:    MCP
ring:     trial
quadrant: concepts-and-methods
tags:     [AI]
blog:
  title: "Uniport MCP: Wie wir unser IAM für AI-Agenten geöffnet haben"
  url:   https://blog.inventage.com/blogs/uniport-mcp-iam-ai-agenten/
---

Das [Model Context Protocol][mcp] (MCP) definiert eine standardisierte Schnittstelle, über die AI-Agents auf externe Datenquellen und Werkzeuge zugreifen können. MCP-Server ermöglichen es, bestehende Systeme für [Coding Agents][coding-agents] zugänglich zu machen, etwa Datenbanken, Dokumentation oder Ticket-Systeme.

Nicht jede Integration braucht einen MCP-Server. Für einfache, klar definierte Aufgaben sind klassische CLI-Tools oft effizienter, da sie weniger Tokens verbrauchen. Wir setzen auf eine Kombination beider Ansätze und beschreiben die Abgrenzung auch im Kontext von [Agent Skills][agent-skills].

[mcp]: https://modelcontextprotocol.io/
[coding-agents]: /tools/coding-agents
[agent-skills]: /concepts-and-methods/agent-skills
