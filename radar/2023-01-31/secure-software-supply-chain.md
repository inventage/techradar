---
title:    Secure Software Supply-Chain  
ring:     adopt  
quadrant: concepts-and-methods
---

Eine Secure Software Supply-Chain (SSSC) stellt sicher, dass nur vertrauenswürdige Software in eine Organisation
gelangt. Dies umfasst die Überwachung und Überprüfung von Drittanbietersoftware, die Verwendung von Signaturverfahren
zur Überprüfung der Integrität von Software und die Implementierung von Prozessen zur schnellen Erkennung und Reaktion
auf Sicherheitsbedrohungen. Die Umsetzung einer SSSC gewährleistet die Sicherheit und Integrität von IT-Systemen und
verhindert Angriffe durch manipulierte Software.

Beliebte Softwarelösungen in diesem Bereich sind [Mend][mend] und [Nexus Lifecycle][nexus-lifecycle], welche als Teil
der [CI/CD][cicd]-Pipeline Abhängigkeiten auf verschiedenste Faktoren prüfen und im laufenden Betrieb auf neue
Sicherheitsbedrohungen aufmerksam machen. Bei Inventage setzen wir auf Nexus Lifecycle. Der Quellcode wird bei jedem
Build der Software auf mögliche Schwachstellen überprüft.

[mend]: https://www.mend.io
[nexus-lifecycle]: https://www.sonatype.com/products/open-source-security-dependency-management
[cicd]: /concepts-and-methods/ci-cd
