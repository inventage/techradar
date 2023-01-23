---
title:    kind (Kubernetes in Docker)
ring:     trial  
quadrant: tools
---

[kind][kind] stellt Kubernetes-Cluster als Container-Images bereit, welche bequem auf einer Docker-Umgebung (z.B.
Entwicklungsrechner) gestartet werden können. Der Vorteil von kind ist ganz klar seine Leichtgewichtigkeit und kurze
Startup-Zeit. Wir setzen kind bereits in einigen Projekten als ad-hoc Testcluster auf Entwicklungsrechnern ein und
können so Szenarien mit verschiedenen Kubernetes Versionen schnell testen. Die Schnelligkeit von kind macht ihn auch zu
einem passenden Kandidaten, um ad-hoc Cluster in CI-Umgebungen zu starten. Dies wollen wir testen und weiter Erfahrung
sammeln.

[kind]: https://kind.sigs.k8s.io/