---
title:    GitOps  
ring:     trial  
quadrant: concepts-and-methods
---

GitOps ist eine alternative Art der Umsetzung von Continuous Deployment. Dabei wird der Build Server von den Aufgaben des Deployments entbunden. Stattdessen wird innerhalb der Zielumgebung (z.B. der Kubernetes Cluster) ein Prozess genutzt, welcher periodisch die deklarative Deployment Beschreibung aus einem Git Repository bezieht und mit dem aktuellen Zustand im Zielsystem vergleicht. Bei einer Differenz erfolgt sofort eine Aktualisierung gemäss der vorliegenden Beschreibung. Als Prozess nutzen wir meist den Kubernetes Operator von ArgoCD, es gibt jedoch mehrere andere Alternativen dafür.

Wir schätzen an diesem Ansatz besonders die deklarative und versionierte Beschreibung der Deployments und die erhöhte Sicherheit, weil der Build Server keinen schreibenden Zugriff auf das Zielsystem mehr benötigt.
