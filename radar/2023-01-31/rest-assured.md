---
title:    REST Assured  
ring:     adopt  
quadrant: libraries-frameworks-and-languages
tags: [Backend, Testing]
---

Unter Schnittstellen-Tests versteht man das Prüfen von Programmierschnittstellen (APIs). Die Schnittstelle wird zum
einen auf ihre Gültigkeit (syntaktisch, regelkonform) als auch auf ihre Korrektheit (semantisch, gültige Werte) aufgrund
der Eingabedaten getestet. Dabei wird geprüft, ob die Ausgabedaten dem erwarteten Ergebnis für die übergebenen
Eingabedaten entsprechen. Dazu wird die Schnittstelle nicht simuliert, sondern real ausgeführt. Dies stellt sicher, dass
Komponenten oder Systeme korrekt miteinander interagieren. Die Tests werden durch die Entwickler erstellt und können
lokal während der Entwicklung oder während dem Build ausgeführt werden.

Um Schnittstellen zu testen verwenden wir [REST Assured][rest-assured], womit Tests von REST-APIs in Java-Code
implementiert werden können. Zudem bringt REST Assured effiziente Vergleichsmethoden mit, die das Auswerten der
Ergebnisse vereinfachen. Die Daten können dabei, unabhängig davon, wie komplex die JSON-Struktur ist, aus fast jedem
Teil der Anfrage und Antwort ausgelesen werden.

[rest-assured]: https://rest-assured.io/
