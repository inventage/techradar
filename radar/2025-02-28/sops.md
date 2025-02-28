---
title:    SOPS  
ring:     trial  
quadrant: tools
---

[SOPS][sops] (Secrets OPerationS) ist ein Open-Source-Tool um Secrets (Passwörter, Keys, etc.) sicher in Dateien abzulegen. Wir setzen SOPS in mehreren Projekten ein und schätzen die leichtgewichtige und einfache Handhabung auf Dateibasis. Mit SOPS ist es möglich, die verschlüsselten Dateien direkt in Git abzulegen. Dadurch sind sie ohne Mehraufwand für die weitere Verwendung in [GitOps][gitops] Workflows und [CI/CD][ci-cd]-Pipelines direkt konsumierbar. Für kleinere bis mittelgrosse Projekte sehen wir SOPS als leichtgewichtige Alternative zu komplexeren Secrets-Management-Lösungen wie z.B. Hashicorp Vault.

[sops]: https://github.com/getsops/sops
[gitops]: /concepts-and-methods/gitops
[ci-cd]: /concepts-and-methods/ci-cd
