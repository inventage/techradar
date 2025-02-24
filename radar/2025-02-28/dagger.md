---
title:    Dagger  
ring:     adopt  
quadrant: tools
---

Die Analyse von Fehlerfällen in klassischen CI/CD-Pipelines wie GitHub oder GitLab gestaltet sich häufig mühsam, da die Pipelines lokal in der Entwicklungsumgebung nur bedingt ausführbar sind. Der Feedback-Loop für Pipeline-Code ist lang, wodurch die Entwickler-Freundlichkeit leidet darunter. Als Alternative lassen sich mit [Dagger][dagger] programmierbare Pipelines nutzen, bei denen die einzelnen Steps in Containern laufen. Die Pipeline wird dadurch lokal testbar, womit sich der Feedback-Loop verbessert.

Dagger ist bei uns noch nicht im Einsatz. Wir planen Dagger zu testen, um besser zu verstehen, wie wir bestehende GitHub oder GitLab Pipelines vereinfachen und optimieren können.

[dagger]: https://dagger.io
