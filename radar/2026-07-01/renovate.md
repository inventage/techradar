---
title:    Renovate
ring:     assess
quadrant: tools
tags:     [DevOps]
---

[Renovate][renovate] ist ein automatisiertes Dependency-Management-Tool, das Pull Requests für veraltete Abhängigkeiten erstellt. Es unterstützt zahlreiche Package-Manager und Plattformen und lässt sich über eine JSON-Konfiguration feingranular steuern, etwa welche Dependencies automatisch gemergt werden, welche ein manuelles Review erfordern und in welchem Rhythmus Updates vorgeschlagen werden.

Gegenüber Dependabot, das wir bisher in einigen Projekten nutzen, bietet Renovate mehr Konfigurationsoptionen, eine flexiblere Gruppierung von Updates und eine bessere Unterstützung für Monorepos. Wir evaluieren Renovate als Standard-Tool für das automatisierte Dependency-Management, insbesondere in Kombination mit unserer [Secure Software Supply-Chain][ssc]-Strategie. Automatisierte Updates zusammen mit [Trivy][trivy]-Scans und SBOM-Generierung können die Zeit zwischen dem Bekanntwerden einer Schwachstelle und deren Behebung deutlich verkürzen.

[renovate]: https://docs.renovatebot.com/
[ssc]: /concepts-and-methods/secure-software-supply-chain
[trivy]: /tools/trivy
