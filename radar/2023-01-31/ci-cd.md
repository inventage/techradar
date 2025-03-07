---
title: CI/CD  
ring: adopt  
quadrant: concepts-and-methods
tags:     [DevOps]
---

[CI/CD][redhat] — Continuous Integration und Continuous Delivery bzw. Continuous-Deployment — sind Methodiken des Software-Engineering bei denen
Codeänderungen am Produkt mit möglichst kleiner Verzögerung und kleinem manuellem Aufwand gebaut, getestet und zu einem
Produkt zusammengefügt (*integrated*) als auch in einem geeigneten Format ausgeliefert (*delivery*) werden. Ein weiterer
Schritt ist das automatisierte (ggf. auf Knopfdruck) Installieren der Software auf dem Zielsystem (*Continuous
Deployment*).

Die Methodik trägt massgeblich zur Qualität von Software bei, da Probleme unmittelbar sichtbar werden. Sie ermöglicht
schnellere Entwicklungszyklen, da Änderungen am Code bereits kurze Zeit später auf Testumgebungen von den Benutzern
getestet, sowie im Erfolgsfall umgehend auf einer produktiven Umgebung installiert werden können.

Inventage setzt stark auf CI/CD und strebt zunehmend die vollständige Automatisierung des kompletten Release-Zyklus an.
Neuere Projekte setzen dies in der Regel bereits um. Wir erreichen dies durch Einsatz geeigneter Tools, wie bislang dem
Jenkins Buildserver, sowie zunehmend Container-basierter Buildsysteme, wie z.B. [GitHub Actions][github] oder [Gitlab
CI/CD][gitlab].

[redhat]: https://www.redhat.com/de/topics/devops/what-is-ci-cd
[github]: https://github.com/features/actions
[gitlab]: https://about.gitlab.com/topics/ci-cd/
