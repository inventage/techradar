---
title:    Platform Engineering
ring:     adopt
quadrant: concepts-and-methods
tags:     [DevOps]
---

[Platform Engineering][platform-engineering] beschreibt den Aufbau interner Entwicklerplattformen, die eine einheitliche Self-Service-Schicht über die zugrunde liegende Infrastruktur legen. Statt dass jedes Team eigene CI/CD-Pipelines, Deployment-Workflows und Monitoring-Setups baut, stellt ein Platform Team diese Bausteine als wiederverwendbare, standardisierte Services bereit.

In unserem [Uniport][uniport]-Ökosystem setzen wir diesen Ansatz konsequent um. [Wiederverwendbare GitHub-Actions-Workflows und Composite-Actions][uniport-workflows] halten die CI-Pipelines aller Microservices DRY. Maven-Archetypen und Service-Templates erzeugen das Grundgerüst neuer Komponenten, eine zentrale Helm-Library und gemeinsame Docker-Base-Images vereinheitlichen das Runtime-Setup. Deployments laufen über [GitOps][gitops] mit [Argo CD][argo-cd] auf [Kubernetes][kubernetes], und ein dedizierter Operator verwaltet Uniport-spezifische Features deklarativ.

Das Platform Team abstrahiert Themen wie Secret-Management, Observability und Compliance, ohne den Produkt-Teams die Kontrolle zu nehmen. Das Aufsetzen neuer Microservices und das Onboarding neuer Entwickler beschleunigen sich dadurch deutlich, und Updates an der Plattform schlagen automatisch auf alle abhängigen Projekte durch.

[platform-engineering]: https://platformengineering.org/
[uniport]: https://uniport.ch/
[uniport-workflows]: https://github.com/uniport/workflows
[gitops]: /concepts-and-methods/gitops
[argo-cd]: /tools/argo-cd
[kubernetes]: /platforms/kubernetes
