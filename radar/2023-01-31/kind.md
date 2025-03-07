---
title:    kind  
ring:     trial  
quadrant: tools
tags: [DevOps]
---

[kind][kind] (Kubernetes in Docker) stellt [Kubernetes][kubernetes]-Cluster als Container-Images bereit, die bequem in
einer Docker-Umgebung (z.B. Entwicklungsrechner) gestartet werden können. Der Vorteil von kind ist seine
Leichtgewichtigkeit und kurze Startzeit. Wir setzen kind bereits in einigen Projekten als Ad-hoc-Testcluster auf
Entwicklungsrechnern ein und können so schnell Szenarien mit verschiedenen Kubernetes-Versionen testen. Die
Schnelligkeit von kind macht ihn auch zu einem passenden Kandidaten, um Ad-hoc-Cluster in [CI-Umgebungen][cicd] zu
starten.

[kind]: https://kind.sigs.k8s.io/
[cicd]: /concepts-and-methods/ci-cd
[kubernetes]: /platforms/kubernetes

