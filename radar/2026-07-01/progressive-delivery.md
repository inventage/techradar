---
title:    Progressive Delivery
ring:     adopt
quadrant: concepts-and-methods
tags:     [DevOps]
---

[Progressive Delivery][progressive-delivery] entkoppelt den Release einer neuen Funktion vom eigentlichen Deployment. Code wird ausgerollt, sobald er fertig ist, die Aktivierung für Endnutzer erfolgt separat über Feature-Flags oder Canary-Releases und lässt sich nach Prozentsatz, Region, Mandant oder Kundengruppe steuern. Treten Probleme auf, kann ein Feature sofort wieder ausgeschaltet werden, ohne dass ein neues Deployment nötig ist.

Für unsere Enterprise-Projekte mit grossen, mandantenfähigen Kundenumgebungen ist dieser Ansatz besonders wertvoll, weil sich Features pro Mandant oder Umgebung individuell steuern lassen. In Kombination mit [GitOps][gitops] und automatisiertem Monitoring können Rollouts bei Anomalien automatisch gestoppt oder zurückgerollt werden, was das Release-Risiko deutlich senkt und schnelleres Produktfeedback ermöglicht.

[progressive-delivery]: https://www.harness.io/harness-devops-academy/progressive-delivery
[gitops]: /concepts-and-methods/gitops
