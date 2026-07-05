---
title:    SOPS
ring:     adopt
quadrant: tools
tags:     [DevOps]
---

[SOPS][sops] hat sich bei uns in mehreren Projekten als Standard für versionierte Secrets etabliert, sowohl in [GitOps][gitops]-Workflows als auch in [CI/CD][ci-cd]-Pipelines. Die Handhabung auf Dateibasis ist leichtgewichtig und lässt sich ohne grossen Aufwand in bestehende Prozesse integrieren.

Für kleinere bis mittelgrosse Projekte bleibt SOPS unsere bevorzugte Alternative zu schwergewichtigeren Lösungen wie HashiCorp Vault. Die Unterstützung verschiedener Verschlüsselungs-Backends (Age, AWS KMS, GCP KMS, Azure Key Vault) deckt die unterschiedlichen Kundenumgebungen ab, in denen wir arbeiten.

[sops]: https://github.com/getsops/sops
[gitops]: /concepts-and-methods/gitops
[ci-cd]: /concepts-and-methods/ci-cd
