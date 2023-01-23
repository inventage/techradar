---
title:    Podman  
ring:     trial  
quadrant: tools
---

[Podman][podman] ist eine Tool um OCI-kompatible Container laufen zu lassen, ähnlich wie das ältere Docker. Anders als Docker
benutzt Podman keinen Daemon um Container zu erstellen und kontrollieren. Dadurch kann es einfacher auf Plattformen
eingesetzt werden wo Docker nicht vorhanden ist. Auch können Container mit weniger Berechtigungen erstellt werden
können, wodurch ein grosses Sicherheitslock gestopft wird. Podman ist von RedHat entwickelt und gehört zusammen mit
Buildah und Skopeo zu einer Tool-Suite für OCI Container. In unseren Projekten benutzen wir bisher viel Docker, ein
Austausch mit Podman muss evaluiert werden, erste Versuche und Anwendungsfälle mit Podman sehen aber vielversprechend
aus.

[podman]: https://podman.io/getting-started/
