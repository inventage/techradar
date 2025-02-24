---
title:    minikube  
ring:     adopt  
quadrant: tools
---

[minikube][minikube] stellt ähnlich wie [kind][kind] [Kubernetes][kubernetes]-Cluster bereit, die als Container oder
alternativ auch mit einem Hypervisor gestartet werden können. Von der Usability her ähnlich einfach wie kind wird
minikube sowohl als Ad-hoc-Testcluster als auch zur Entwicklung bei Inventage eingesetzt. Da minikube erfahrungsgemäss
etwas langsamer ist als kind, haben wir bisher von einem Einsatz in [CI/CD][cicd]-Pipelines abgesehen — das
[Rennen][benchmark] um schnelle lokale Kubernetes Test- und Enwicklungsumgebungen bleibt jedoch weiterhin spannend.

[minikube]: https://minikube.sigs.k8s.io/docs/start/
[kind]: /tools/kind
[kubernetes]: /platforms/kubernetes
[cicd]: /concepts-and-methods/ci-cd
[benchmark]: https://minikube.sigs.k8s.io/docs/benchmarks/timetok8s/
