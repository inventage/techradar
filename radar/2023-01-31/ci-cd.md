---
title: CI/CD  
ring: adopt  
quadrant: concepts-and-methods
---

[CI/CD][redhat] – Continuous Integration und Continuous Delivery – sind Methodiken des Software-Engineering bei denen
Codeänderungen am Produkt mit möglichst kleiner zeitlicher Verzögerung und kleinem manuellem Aufwand gebaut, getestet
und zu einem Produkt zusammengefügt ("integrated") wie auch in einem geeigneten Format ausgeliefert ("delivery") werden.
Ein weiterer Schritt ist das automatisierte (ggf. auf Knopfdruck) Installieren der Software auf dem Zielsystem ("
Continuous Deployment").

Die Methodik trägt massgeblich zur Qualität von Software bei, da Probleme unmittelbar sichtbar werden und ermöglicht
sehr viel schnellere Entwicklungszyklen, da Änderungen am Code bereits kurze Zeit später auf Testumgebungen von den
Benutzern getestet werden können, sowie im Erfolgsfall umgehend auf einer produktiven Umgebung installiert.

Wir setzen stark auf CI/CD und streben zunehmend die vollständige Automatisierung des kompletten Release-Zyklus an.
Neuere Projekte setzen dies in der Regel bereits um. Wir erreichen dies durch Einsatz geeigneter Tools wie bislang dem
Jenkins Buildserver sowie zunehmend container-basierter Buildsysteme wie z.B. GitHub Actions, Gitlab CI.

[redhat]: https://www.redhat.com/de/topics/devops/what-is-ci-cd
[gitlab]: https://about.gitlab.com/topics/ci-cd/