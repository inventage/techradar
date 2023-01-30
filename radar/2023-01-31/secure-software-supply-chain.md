---
title:    Secure Software Supply-Chain  
ring:     adopt  
quadrant: concepts-and-methods
---

Eine Secure Software Supply-Chain (SSSC) bezieht sich auf die Massnahmen, welche sicherstellen, dass nur
vertrauenswürdige Software in eine Organisation gelangt. Dies umfasst die Überwachung und Überprüfung von
Drittanbietersoftware, die Verwendung von Signaturverfahren zur Überprüfung der Integrität von Software und die
Implementierung von Prozessen zur schnellen Erkennung und Reaktion auf Sicherheitsbedrohungen. Die Umsetzung einer SSSC
ist wichtig, um die Sicherheit und Integrität von IT-Systemen zu gewährleisten und Angriffe durch manipulierte Software
zu verhindern.

Beliebte Softwarelösungen in diesem Bereich sind [Mend][mend] und [Nexus Lifecycle][nexus-lifecycle], welche als Teil
der CI-Pipeline Abhängigkeiten auf verschiedenste Faktoren prüfen und im laufenden Betrieb auf neue
Sicherheitsbedrohungen aufmerksam machen. Bei Inventage haben wir Nexus Lifecycle im Einsatz. Bei jedem Build der
Software wird der Quellcode auf mögliche Schwachstellen überprüft.

[mend]: https://www.mend.io
[nexus-lifecycle]: https://www.sonatype.com/products/open-source-security-dependency-management
