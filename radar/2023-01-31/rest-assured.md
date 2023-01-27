---
title:    REST Assured  
ring:     adopt  
quadrant: libraries-frameworks-and-languages
---

Unter Schnittstellen Test versteht man das Prüfen der Programmierschnittstellen. Die Schnittstelle wird zum einen auf
die Gültigkeit (syntaktisch, regelkonform) und Korrektheit (semantisch, gültige Werte) der Eingabedaten getestet.
Andernseits wird geprüft, ob die Ausgabedaten dem erwarteten Ergebnis für die übergebenen Eingabedaten entsprechen.
Dabei werden die Schnittsellen nicht simuliert, sondern real ausgeführt. Damit wird sichergestellt, dass Komponenten
oder Systeme korrekt miteinander interagieren. Alle Tests werden durch die Entwickler erstellt und ausgeführt.

Um die Schnittstellen zu testen, verwenden wir [REST Assured][rest-assured]. Rest Assured ermöglicht das Testen von REST-APIs mit
Java-Bibliotheken und lässt sich gut in Maven integrieren. Zudem verfügt REST Assured über sehr effiziente
Vergleichsmethoden, damit das Testen der Ergebnisse ziemlich einfach ist. Daten können dabei, unabhängig wie komplex die
JSON-Struktur ist, aus fast jedem Teil der Anfrage und Antwort ausgelesen werden.

[rest-assured]: https://rest-assured.io/
