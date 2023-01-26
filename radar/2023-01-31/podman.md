---
title:    Podman  
ring:     trial  
quadrant: tools
---

[Podman][podman] ist ein Tool, um OCI-kompatible Container laufen zu lassen, ähnlich wie das ältere Docker. Anders als Docker benutzt Podman keinen Daemon, um Container zu erstellen und zu kontrollieren. Dadurch kann es einfacher auf Plattformen eingesetzt werden, wo Docker nicht vorhanden ist. Auch können Container mit weniger Berechtigungen erstellt werden, wodurch ein grosses Sicherheitsloch gestopft wird. Podman wird von RedHat entwickelt und gehört zusammen mit Buildah und Skopeo zu einer Tool-Suite für OCI-Container.

In unseren Projekten benutzen wir bisher hauptsächlich Docker. Ein Austausch durch Podman soll aber evaluiert werden, da erste Versuche und Anwendungsfälle mit Podman vielversprechend aussehen.

[podman]: https://podman.io/
