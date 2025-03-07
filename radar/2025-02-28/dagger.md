---
title:    Dagger  
ring:     adopt  
quadrant: tools
tags:     []
---

Die Analyse von Fehlerfällen in klassischen CI/CD-Pipelines wie GitHub oder GitLab gestaltet sich häufig mühsam, da die Pipelines lokal in der Entwicklungsumgebung nur bedingt ausführbar sind. Der Feedback-Loop für Pipeline-Code ist lang, was nicht entwicklerfreundlich ist. Eine Alternative sind programmierbare Pipelines mit [Dagger][dagger], bei denen die einzelnen Schritte in Containern ausgeführt werden. Dadurch wird die Pipeline lokal testbar, wodurch sich der Feedback-Loop verbessert.

Dagger ist bei uns noch nicht im Einsatz. Wir planen Dagger zu testen, um besser zu verstehen, wie wir bestehende GitHub oder GitLab Pipelines vereinfachen und optimieren können.

[dagger]: https://dagger.io
