---
title:    minikube  
ring:     adopt  
quadrant: tools
---

[minikube][minikube] stellt ähnlich wie kind Kubernetes Cluster bereit welche als
Container oder alternativ auch mit einem Hypervisor gestartet werden können. Von der Usability her ähnlich einfach
wie `kind` wird `minikube` sowohl als ad-hoc Testcluster als auch zur Entwicklung bei Inventage eingesetzt. Da
Erfahrungsgemäss generell etwas langsamer als `kind` haben wir bisher vom Einsatz in CICD Pipelines abgesehen - [das
Rennen um schnelle lokale Kubernetes Test- und Enwicklungsumgebungen bleibt jedoch weiterhin spannend][benchmark].

[minikube]: https://minikube.sigs.k8s.io/docs/start/
[benchmark]: https://minikube.sigs.k8s.io/docs/benchmarks/timetok8s/