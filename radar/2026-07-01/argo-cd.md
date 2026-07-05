---
title:    Argo CD
ring:     adopt
quadrant: tools
tags:     [DevOps]
---

[Argo CD][argocd] ist mittlerweile fester Bestandteil unserer [GitOps][gitops]-basierten Deployment-Strategie für [Kubernetes][kubernetes]-Umgebungen. Wir setzen Argo CD in mehreren Kundenprojekten produktiv ein, um Deployments deklarativ und versionskontrolliert über Git-Repositories zu steuern. Die klare Trennung zwischen Build- und Deployment-Verantwortung hat sich bewährt: Build-Server benötigen keinen schreibenden Zugriff auf die Zielumgebungen, was die Sicherheit erhöht.

Besonders schätzen wir die automatische Drift-Erkennung und das Self-Healing, wodurch Abweichungen zwischen Soll- und Ist-Zustand frühzeitig sichtbar werden und bei Bedarf automatisch korrigiert werden können. Die integrierte Web-UI erleichtert dabei das Monitoring und Debugging von Deployments erheblich. In unseren Projekten hat sich dadurch die Deployment-Frequenz auf allen Umgebungen erhöht.

[argocd]: https://argo-cd.readthedocs.io/en/stable/
[gitops]: /concepts-and-methods/gitops
[kubernetes]: /platforms/kubernetes
