---
title:    Testcontainers  
ring:     trial  
quadrant: libraries-frameworks-and-languages
---

[Testcontainers][testcontainers] (for Java [1]) ist eine Bibliothek, welche die Verwendung von Docker Containern innerhalb von JUnit Tests
vereinfacht. Wir verwenden Testcontainer unter anderem für die Realisierung von Integrationstests bei unseren
Uniport-Projekten - z.B. um den Datenbankzugriffs-Layer zu testen. Weiter bietet [Quarkus][quarkus]
eine sehr gute Integration von Testcontainers und der Einsatz bietet sich insbesondere bei allen unseren Quarkus
basierten Projekten an.

[1] die Bibliothek gibt es auch für weitere Sprachen wie z.B. Go, Phython oder .NET

[testcontainers]: https://www.testcontainers.org/
[quarkus]: https://quarkus.io/
