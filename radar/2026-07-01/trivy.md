---
title:    Trivy
ring:     adopt
quadrant: tools
tags:     [Security, DevOps]
---

[Trivy][trivy] ist ein Vulnerability-Scanner und SBOM-Generator, den wir primär für die Sicherheitsanalyse von Third-Party-Container-Images einsetzen. Im Cluster-Betrieb bei mehreren Kunden scannt Trivy automatisiert alle eingesetzten Images auf bekannte Schwachstellen und generiert Software Bills of Materials (SBOMs), die wir in [Dependency-Track][dependency-track] weiterverarbeiten.

Über [GitHub Actions][github-actions] integrieren wir Trivy in unsere CI/CD-Pipelines und fangen verwundbare Images bereits vor dem Deployment ab. Neben Container-Images kann Trivy auch Dateisysteme, Git-Repositories und Kubernetes-Cluster scannen und ist damit fester Bestandteil unserer [Secure Software Supply-Chain][ssc].

[trivy]: https://trivy.dev/
[dependency-track]: https://dependencytrack.org/
[github-actions]: /tools/github-actions
[ssc]: /concepts-and-methods/secure-software-supply-chain
