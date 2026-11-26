---
title:    Agent Skills
ring:     adopt
quadrant: concepts-and-methods
tags:     [AI]
---

Agent Skills sind inzwischen ein offener Standard. Anthropic hat die [Spezifikation][agentskills] an die [Agentic AI Foundation][aaif] der Linux Foundation übergeben, wo auch [MCP][mcps] angesiedelt ist. Neben [Claude Code][claude-code] lesen heute unter anderem [Codex][codex], GitHub Copilot, Gemini CLI und Cursor dasselbe Format. Ein Skill funktioniert damit agentenübergreifend.

Unsere bisherige Abgrenzung zu MCP-Servern müssen wir präzisieren. Clients wie Claude Code laden inzwischen auch MCP-Tools erst bei Bedarf in den Kontext. Der Unterschied liegt damit weniger im Token-Verbrauch als in der Rolle: MCP bindet Systeme an, Skills beschreiben, wie ein Agent mit diesen Systemen arbeiten soll.

Mit der Verbreitung wächst auch das Risiko. Auf dem Skill-Marktplatz von [OpenClaw][openclaw] tauchten Anfang 2026 Hunderte bösartiger Skills auf. Skills aus fremden Quellen behandeln wir deshalb wie Dependencies und prüfen sie vor dem Einsatz, so wie es unsere [Secure Software Supply-Chain][ssc] für jede andere Abhängigkeit vorsieht.

[agentskills]: https://agentskills.io/
[aaif]: https://aaif.io/
[mcps]: /concepts-and-methods/mcps-und-clis
[claude-code]: /tools/claude-code
[codex]: /tools/codex
[openclaw]: https://openclaw.ai/
[ssc]: /concepts-and-methods/secure-software-supply-chain
