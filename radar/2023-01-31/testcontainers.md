---
title:    Testcontainers  
ring:     trial  
quadrant: libraries-frameworks-and-languages
tags: [Testing]
---

[Testcontainers][testcontainers] (for Java<sup>1</sup>) ist eine Bibliothek, welche die Verwendung von Docker-Containern
innerhalb von JUnit-Tests ermöglicht. Wir verwenden Testcontainers unter anderem für die Realisierung von
Integrationstests bei unseren [Uniport][uniport]-Projekten — z.B. um den Datenbankzugriffs-Layer zu testen.
[Quarkus][quarkus] bietet eine sehr gute Integration von Testcontainers, sodass dessen Einsatz insbesondere bei unseren
Quarkus-basierten Projekten nichts im Wege steht.
___

<small><sup>1</sup> die Bibliothek gibt es auch für weitere Sprachen wie z.B. Go, Python oder .NET</small>

[testcontainers]: https://www.testcontainers.org/
[quarkus]: /libraries-frameworks-and-languages/quarkus
[uniport]: https://uniport.ch/

