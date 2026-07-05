---
title:    GraphQL
ring:     adopt
quadrant: concepts-and-methods
tags:     [Backend, Data]
---

[GraphQL][graphql] ist in vielen unserer Projekte die Standardschnittstelle zwischen Backend und Client. Der vom Client gesteuerte Datenzugriff hat sich über Jahre bewährt und bleibt für uns die erste Wahl, wenn unterschiedliche Konsumenten dieselben Daten in verschiedener Tiefe brauchen.

Neu nutzen wir GraphQL auch als Durchsetzungspunkt für [Regelwerk][regelwerk]. Rollenbasierte Zugriffsregeln werden direkt auf der Schnittstelle ausgewertet, sodass ein Client nur die Felder und Datensätze sieht, für die er berechtigt ist. Auf Datenbankebene ergänzt [jOOQ][jooq] diesen Ansatz, indem es dieselben Filterkriterien typsicher in SQL-Queries einwebt.

[graphql]: https://graphql.org/
[regelwerk]: https://regelwerk.com
[jooq]: /libraries-frameworks-and-languages/jooq
