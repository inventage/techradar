---
title:    Dagger  
ring:     adopt  
quadrant: tools
---

Die Analyse bei Fehlerfällen in klassischen CI/CD Pipelines à la Github und Gitlab gestaltet sich häufig mühsam da die Pipelines lokal auf Entwicklungsumgebungen nur bedigt ausführbar sind. Der Feedback-Loop für Pipeline Code ist somit deutlich länger und die Developer-Friendlyness leidet darunter. Dagger bietet sich hier als Alternative an, da es programmierbare, containerisierte Pipelines nutzt bei denen die einzelnen Steps in Containern laufen. Die ganze Pipeline ist lokal testbar womit der Feedback-Loop massiv schneller ist. Dagger ist bei uns noch nicht im Einsatz - wir planen Dagger zu testen um besser zu verstehen wie wir bestehende Github/Gitlab Pipelines vereinfachen und optimieren können.
