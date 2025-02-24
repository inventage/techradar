---
title:    SOPS  
ring:     trial  
quadrant: tools
---

[SOPS][sops] (Secrets OPerationS) ist ein Open-Source-Tool um Secrets (Passwörter, Keys, etc.) sicher in Dateien abzulegen. Wir setzen SOPS in mehreren Projekten ein und schätzen die leichtgewichtige und einfache Handhabung auf Datei-basis. Mit SOPS ist es möglich, die verschlüsselten Dateien direkt in Git abzulegen. Dadurch sind sie ohne Mehraufwand für die weitere Verwendung in GitOps Workflows und CI/CD-Pipelines direkt konsumierbar. Für kleinere bis mittelgrosse Projekte sehen wir SOPS als leichtgewichtige Alternative zu komplexeren Secrets-Management-Lösungen wie z.B. Hashicorp Vault.

[sops]: https://github.com/getsops/sops
