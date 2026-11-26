---
title:    MCP
ring:     adopt
quadrant: concepts-and-methods
tags:     [AI]
blog:
  title: "MCP im ERP: Auswertungen, die sich im Gespräch entwickeln"
  url:   https://blog.inventage.com/blogs/erp-mcp/
---

Mit der [Spezifikation vom 28. Juli 2026][spec] hat MCP die bisher grösste Überarbeitung erfahren. Das Protokoll ist neu zustandslos. Der Initialize-Handshake und der `Mcp-Session-Id`-Header entfallen, jeder Request bringt Protokollversion und Client-Informationen selbst mit. MCP-Server lassen sich damit hinter einem gewöhnlichen Load-Balancer skalieren, und Gateways können Requests anhand von HTTP-Headern routen und autorisieren. Ein formales Extensions-Framework hält den Kern schlank, Erweiterungen wie MCP Apps oder Tasks entwickeln sich unabhängig davon weiter. Die Governance liegt seit Dezember 2025 bei der [Agentic AI Foundation][aaif] der Linux Foundation.

Für uns besonders relevant ist die überarbeitete Autorisierung. Die Spezifikation schliesst mehrere Lücken im OAuth-Flow und richtet sich enger an den OAuth-Standards aus. Mit Enterprise Managed Authorization gibt es ausserdem eine Extension, über die Unternehmen den Zugriff von Agents zentral über ihren Identity-Provider steuern. Wie sich MCP-Server sauber in bestehende IAM-Landschaften mit [OIDC][oidc] und [Keycloak][keycloak] einbinden lassen, beschäftigt uns seit dem Uniport MCP.

Auch bei der Abgrenzung zu CLI-Tools hat sich etwas verschoben. Clients wie [Claude Code][claude-code] laden Tool-Definitionen inzwischen erst bei Bedarf in den Kontext, statt sie dauerhaft mitzuführen. Der Token-Vorteil klassischer CLI-Tools ist damit kleiner geworden. Für einfache, klar definierte Aufgaben bleiben sie trotzdem die schlankere Wahl.

[spec]: https://blog.modelcontextprotocol.io/posts/2026-07-28/
[aaif]: https://aaif.io/
[oidc]: /concepts-and-methods/oidc
[keycloak]: /platforms/keycloak
[claude-code]: /tools/claude-code
