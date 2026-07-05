---
title:    Spec-driven Development
ring:     assess
quadrant: concepts-and-methods
tags:     [AI]
---

[Spec-driven Development][sdd] (SDD) macht die Spezifikation zum zentralen Artefakt der Entwicklung. Anforderungen, Architektur und Randbedingungen werden in einem versionierten Dokument festgehalten, das gemeinsam mit dem Code weiterentwickelt wird und sowohl Entwicklerinnen als auch [Coding Agents][coding-agents] als Referenz dient. Diskussionen über Verhalten und Design finden vor der Implementierung statt, und der generierte Code orientiert sich an präzisen Vorgaben statt an Vermutungen.

Die Spezifikationen halten auch fest, welche Absichten hinter vergangenen Änderungen standen, eine Information, die sich aus Commit-Messages oder Code allein nur schwer rekonstruieren lässt.

Tools wie [OpenSpec][openspec] strukturieren den Workflow in Proposals, Spezifikationen, Design-Entscheide und Tasks. Wir evaluieren SDD als Ergänzung zu [Agentic Engineering][agentic-engineering] und sehen die Kombination mit [ArchUnit][archunit]-Regeln als Möglichkeit, generierte Architekturentscheide automatisiert zu validieren.

[sdd]: https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html
[openspec]: /tools/open-spec
[coding-agents]: /tools/coding-agents
[agentic-engineering]: /concepts-and-methods/agentic-engineering
[archunit]: /libraries-frameworks-and-languages/archunit
