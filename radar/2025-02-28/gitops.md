---
title:    GitOps  
ring:     trial  
quadrant: concepts-and-methods
tags:     [DevOps]
---

[GitOps][gitops] ist eine alternative Umsetzung von Continuous-Deployment. Dabei wird der Build-Server von den Aufgaben des Deployments entbunden. Stattdessen wird innerhalb der Zielumgebung (z.B. einem Kubernetes-Cluster) ein Continuous-Deployment-Prozess genutzt, der periodisch die deklarative Deployment-Beschreibung aus einem Git-Repository bezieht und mit dem aktuellen Zustand des Zielsystems vergleicht. Bei einer Differenz erfolgt eine Aktualisierung gemäss der vorliegenden Beschreibung. Als CD-Prozess nutzen wir meist den Kubernetes-Operator von [Argo CD][argocd].

Wir schätzen besonders die deklarative und versionierte Beschreibung der Deployments. Zudem erhöht sich die Sicherheit, da der Build-Server keinen schreibenden Zugriff mehr auf das Zielsystem benötigt.

[gitops]: https://www.redhat.com/en/topics/devops/what-is-gitops
[argocd]: /tools/argo-cd
