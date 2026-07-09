---
title:    Automatisiertes E2E-Testing
ring:     adopt
quadrant: concepts-and-methods
tags:     [Testing]
---

Automatisiertes E2E-Testing hat für uns stark an Bedeutung gewonnen. Mit [Playwright][playwright] als bevorzugtem Werkzeug haben wir einen zuverlässigen Stack aufgebaut, der in mehreren Projekten produktiv im Einsatz ist. Die Tests laufen stabil und liefern schnelles Feedback in der CI/CD-Pipeline.

Im Kontext von [Agentic-Engineering][agentic-engineering] wird E2E-Testing noch wichtiger. Automatisierte Tests dienen als Quality-Gate, das sicherstellt, dass AI-generierter Code die bestehende Funktionalität nicht beeinträchtigt. Gleichzeitig nutzen wir AI-Agenten mit Tools wie [agent-browser][agent-browser], um Testcode zu generieren und explorativ zu testen. Die finale Qualitätskontrolle bleibt dabei beim Entwickler.

[playwright]: /tools/playwright
[agentic-engineering]: /concepts-and-methods/agentic-engineering
[agent-browser]: https://agent-browser.dev
