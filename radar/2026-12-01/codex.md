---
title:    Codex
ring:     assess
quadrant: tools
tags:     [AI]
---

OpenAI hat [Codex][codex] deutlich ausgebaut. Neben Cloud-Agent und [CLI][codex-cli] gibt es eine Desktop-App, in der sich mehrere Agents parallel in getrennten Git-Worktrees steuern lassen. Seit September steht mit GPT-6 Astra ein neues Modell zur Verfügung, das OpenAI insbesondere für Computer-Use positioniert.

Codex und [Claude Code][claude-code] teilen sich inzwischen Standards wie [Agent Skills][agent-skills] und [MCP][mcps]. Skills und MCP-Server lassen sich deshalb weitgehend übertragen. Das macht es einfach, Codex als zweite Meinung neben Claude Code einzusetzen, etwa für Reviews durch ein Modell eines anderen Anbieters. Diesen Ansatz erproben wir derzeit.

[codex]: https://developers.openai.com/codex
[codex-cli]: https://github.com/openai/codex
[claude-code]: /tools/claude-code
[agent-skills]: /concepts-and-methods/agent-skills
[mcps]: /concepts-and-methods/mcps-und-clis
