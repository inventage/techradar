---
title:    Spring Modulith
ring:     assess  
quadrant: libraries-frameworks-and-languages
---

Microservices haben sich als eine führende architektonische Technik in modernen Cloud-basierten Systemen etabliert. Wir
empfehlen jedoch, dass Teams die Entscheidung für diese Architektur sorgfältig abwägen sollten. Die zusätzliche
operative Komplexität muss durch eine entsprechende Reduktion der Entwicklungskomplexität kompensiert werden, was bei
kleineren oder neuen Projekten oft nicht der Fall ist.

Für Spring-basierte Systeme bietet [Spring Modulith][spring-modulith] einen möglichen Einstieg für neue Applikationen,
der eine spätere Migration zu Microservices erleichtert. Spring Modulith bietet eine modulare Architektur, die Domänen
und Pakete logisch und physisch voneinander trennt, was ein effektives Refactoring und isolierte Domänen-Tests
ermöglicht. Mit integrierten Überprüfungstools wie [ArchUnit][archunit] und [jmolecules][jmolecules] unterstützt es die
Einhaltung domänengetriebener Designregeln. Auch im Rahmen von [Domain Driven Design][ddd] (DDD) ist der Einsatz dieses
Frameworks denkbar.

[spring-modulith]: https://spring.io/projects/spring-modulith
[archunit]: https://www.archunit.org
[jmolecules]: https://github.com/xmolecules/jmolecules
[ddd]: ../concepts-and-methods/ddd.html
