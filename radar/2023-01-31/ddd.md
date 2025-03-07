---
title:    DDD  
ring:     trial  
quadrant: concepts-and-methods
tags:     [Architecture]
---

[Domain Driven Design][ddd] (DDD) hilft bei der Implementierung von Fachapplikationen. Zentral ist dabei die Verwendung
einer einheitlichen und präzisen Sprache für die Beschreibung von Abstraktionen (Modellen) zwischen Entwicklern und
Fachpersonen. Es wird zwischen einem taktischen und einem strategischen Teil unterschieden. Der taktische Teil behandelt
die verschiedenen Verantwortlichkeiten (Stereotypen / Building Blocks) der Klassen. In Kombination mit einer
Package-Struktur gemäss hexagonaler / Onion Architektur ergibt sich daraus eine klar nachvollziehbare und [leicht zu
testende Implementierung][manning]. Der strategische Teil bietet Konzepte für die Abgrenzung und Integration mehrerer
Bereiche untereinander und dient damit vor allem der Architekturstufe.

Bei Inventage haben wir DDD (taktisch und strategisch) erfolgreich in mehreren Projekten eingesetzt. Bei Projekten für
Fachbereiche sehen wir in DDD den grössten Nutzen. Aus diesem Grund empfehlen wir DDD in weiteren Projekten einzusetzen
und zu testen. Die Lernkurve für DDD ist leider aufgrund der aktuell verfügbaren Literatur noch etwas holprig.

[ddd]: https://martinfowler.com/tags/domain%20driven%20design.html
[manning]: https://livebook.manning.com/book/effective-software-testing/chapter-7/137
