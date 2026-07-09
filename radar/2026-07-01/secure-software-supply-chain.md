---
title:    Secure Software Supply-Chain
ring:     adopt
quadrant: concepts-and-methods
tags:     [Security]
---

OWASPs [Dependency-Track][dependency-track] hat sich seit der letzten Evaluation bewährt und ist mittlerweile Teil unserer Toolchain. Wir generieren in unseren Projekten automatisiert SBOMs und überwachen damit Schwachstellen in Abhängigkeiten kontinuierlich.

Neu beschäftigt uns [Agentic-Engineering][agentic-engineering]: Coding-Agents schlagen regelmässig Dependencies vor, deren Herkunft und Sicherheitsstatus nicht immer transparent sind. Automatisierte Scans in der CI/CD-Pipeline fangen problematische Dependencies ab, bevor sie in Produktion gelangen. Für Third-Party-Container-Images im Cluster-Betrieb setzen wir dabei verstärkt auf [Trivy][trivy] als Vulnerability-Scanner und SBOM-Generator.

[dependency-track]: https://dependencytrack.org/
[agentic-engineering]: /concepts-and-methods/agentic-engineering
[trivy]: /tools/trivy
