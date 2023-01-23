---
title:    GraphQL  
ring:     adopt  
quadrant: concepts-and-methods
---

[GraphQL][graphql] ist eine Schnittstelle für den lesenden und schreibenden Datenzugriff über das HTTP Protokoll. Es stellt eine
Alternative zu REST dar und bietet gegenüber dieser den Vorteil, dass die Datentiefe und -breite bei einem Aufruf
gesteuert werden kann. Wir haben beim Einsatz von GraphQL einen grossen Gewinn an Flexibilität bei der Entwicklung
feststellen können. Sei es durch eine weniger starke Kopplung zwischen Datenproduzent und -konsument oder bei der
Nutzung der gleichen Daten von unterschiedlichen Datenkonsument. Daneben führt die Verwendung zu einer effizienten
Datenverarbeitung und -transfer, weil nur die benötigten Daten bereitgestellt und übertragen werden müssen. Aufgrund
unserer Erfahrungen bei mehrfachen Projekteinsätzen können wir die breite Verwendung von GraphQL stärkstens empfehlen.
Zur Unterstützung setzen wir häufig Hasura ein. Es ist ein OpenSource Werkzeug für die Bereitstellung einer GraphQL
Fassade vor bestehende Datenspeicher.

[graphql]: https://graphql.org/
