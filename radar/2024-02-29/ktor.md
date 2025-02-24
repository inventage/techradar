---
title:    Ktor  
ring:     adopt
quadrant: libraries-frameworks-and-languages
---

[Ktor][ktor] ist ein leichtgewichtiges Framework für [Kotlin][kotlin], mit dem sowohl HTTP-Server als auch HTTP-Clients
realisiert werden können. Es wird von JetBrains entwickelt, dem Unternehmen hinter der Kotlin-Programmiersprache.

Wir verwenden Ktor einerseits zur Implementierung von Mock-Servern, um REST-APIs unserer Kunden-Umsysteme zu simulieren.
Die Kombination von Kotlin und Ktor erlaubt es, schlanke Mock-Server zu schreiben, die — im Gegensatz zu statischen oder
randomisierten Mocks — eine dynamische und in sich konsistente Funktionalität bereitstellen.

Andererseits verwenden wir den HTTP-Client von Ktor, um Integrationstests für unsere eigenen REST-APIs zu schreiben.
JUnit dient als Test-Runner, wodurch die Tests sowohl innerhalb der IDE als auch während dem Build innerhalb einer
dockerisierten Applikationsumgebung ausgeführt werden können. Das Programmieren der Integrationstests in Kotlin hat
sich bestens bewährt, da der Entwickler mit seinen bekannten Werkzeugen arbeitet und die Konzepte für qualitativ
hochwertigen Code nahtlos weiterverwenden kann. Zudem erlaubt der programmatische Ansatz den einfachen Zugriff auf
Umsysteme (wie z.B. die Datenbank), was sich insbesondere während der Setup- und Teardown-Phasen eines Tests als
praktisch erweist.

[kotlin]: /libraries-frameworks-and-languages/kotlin
[ktor]: https://ktor.io
