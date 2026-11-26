---
title:    Trivy
ring:     adopt
quadrant: tools
tags:     [Security, DevOps]
---

Im März 2026 wurde Trivy selbst Ziel eines [Supply-Chain-Angriffs][advisory]. Angreifer nutzten Credentials, die sie zuvor über eine Fehlkonfiguration in der CI des Projekts erbeutet hatten. Sie überschrieben Versions-Tags der offiziellen trivy-action sowie alle Tags von setup-trivy mit Schadcode und veröffentlichten eine manipulierte Version samt Container-Images. Der Schadcode lief in den CI-Pipelines der Betroffenen vor dem eigentlichen Scan und griff Secrets wie Cloud-Credentials, SSH-Keys und Kubernetes-Tokens ab.

Wir setzen Trivy weiterhin ein. Der Vorfall zeigt aber, dass Security-Tools selbst Teil der Supply-Chain sind und in unserer [Secure Software Supply-Chain][ssc] denselben Regeln unterliegen müssen wie jede andere Dependency. Nicht betroffen war, wer die Action über einen Commit-SHA referenziert oder eine durch GitHubs Immutable Releases geschützte Version verwendet hatte. Third-Party-Actions pinnen wir deshalb auf den vollständigen Commit-SHA, und Container-Images beziehen wir mit fester Version statt über `latest`.

[advisory]: https://github.com/aquasecurity/trivy/security/advisories/GHSA-69fq-xp46-6x23
[ssc]: /concepts-and-methods/secure-software-supply-chain
