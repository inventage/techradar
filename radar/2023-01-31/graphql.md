---
title:    GraphQL  
ring:     adopt  
quadrant: concepts-and-methods
tags:     [Backend]
---

[GraphQL][graphql] ist eine Schnittstelle für den lesenden und schreibenden Datenzugriff über das HTTP-Protokoll. Es
stellt eine Alternative zu REST dar und bietet gegenüber diesem den Vorteil, dass die Datentiefe und -breite bei einem
Aufruf gesteuert werden kann.

Wir haben beim Einsatz von GraphQL einen grossen Gewinn an Flexibilität bei der Entwicklung feststellen können. Sei es
durch eine weniger starke Kopplung zwischen Datenproduzent und -konsument oder bei der Nutzung der gleichen Daten von
unterschiedlichen Datenkonsumenten. Daneben führt die Verwendung von GraphQL zu einer effizienten Datenverarbeitung und
-transfer, da nur die benötigten Daten bereitgestellt und übertragen werden müssen.

Aufgrund unserer Erfahrungen bei mehrfachen Projekteinsätzen können wir die breite Verwendung von GraphQL stärkstens
empfehlen. Zur Unterstützung setzen wir häufig [Hasura][hasura] ein. Es ist ein quelloffenes Werkzeug für die
Bereitstellung einer GraphQL-Fassade vor bestehende Datenspeicher.

[graphql]: https://graphql.org/
[hasura]: https://hasura.io/
