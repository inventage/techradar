---
title:    SOPS  
ring:     trial  
quadrant: tools
---

SOPS (Secrets OPerationS) ist ein Open-Source Tool um Secrets (Passwörter, Keys, etc.) sicher in Files abzulegen.
Wir setzen SOPS bereits in mehreren Projekten ein und schätzen die leichtgewichtige und einfache Handhabung auf File Basis.
Mit SOPS ist es direkt möglich die verschlüsselten Files in Git abzulegen, dadurch sind sie ohne Mehraufwand für die weitere Verwendung in GitOps Workflows und CI/CD direkt konsumierbar. Für kleinere bis mittelgrosse Proejekte sehen wir SOPS als leichtgewichtige Alternative zu komplexeren Secrets-Management Lösungen wie z.B. Hashicorp Vault.
