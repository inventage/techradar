---
title:    Testcontainers  
ring:     adopt  
quadrant: libraries-frameworks-and-languages
---

[Testcontainers][testcontainers] (for Java<sup>1</sup>) ist eine Bibliothek, welche die Verwendung von Docker-Containern
innerhalb von Tests ermöglicht. Wir verwenden Testcontainers unter anderem für die Realisierung von Integrationstests bei
unseren [Uniport][uniport]-Projekten — z.B. um den Datenbankzugriffs-Layer zu testen. Dabei steht die Datenbank in einem
Docker-Container zur Verfügung, welcher vom Integrationstest gestartet, verwendet und nach dem Test wieder abgeräumt wird.

Wir haben im vergangenen Jahr mit Testcontainers so gute Erfahrungen gemacht, dass wir diese Bibliothek neu im "Adopt"-Ring
aufführen und in unseren Projekten vermehrt einsetzen möchten.
___

<small><sup>1</sup> [Quarkus][quarkus] bietet zudem eine sehr gute Integration von Testcontainers; die Bibliothek gibt es 
aber auch für weitere Sprachen wie z.B. Go, Python oder .NET</small>

[testcontainers]: https://www.testcontainers.org/
[quarkus]: ../libraries-frameworks-and-languages/quarkus.html
[uniport]: https://uniport.ch/
