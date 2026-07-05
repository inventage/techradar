---
title:    minikube
ring:     adopt
quadrant: tools
tags:     [DevOps]
---

Wir nutzen [minikube][minikube] neu auch gezielt für [E2E-Tests][e2e] und um [GitOps][gitops]-basierte Deployments lokal zu validieren. Die eingebauten Addons (z.B. Ingress, Metrics Server) ermöglichen es, produktionsnahe [Kubernetes][kubernetes]-Umgebungen schnell aufzusetzen und automatisiert zu testen.

[minikube]: https://minikube.sigs.k8s.io/docs/start/
[kubernetes]: /platforms/kubernetes
[e2e]: /concepts-and-methods/automatisiertes-e2e-testing
[gitops]: /concepts-and-methods/gitops
