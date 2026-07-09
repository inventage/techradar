---
title:    PostgreSQL
ring:     adopt
quadrant: platforms
tags:     [Backend, Data]
---

[PostgreSQL][postgres] ist unsere Standard-Datenbank und kommt in den allermeisten Kundenprojekten zum Einsatz, sofern nicht explizit eine andere Lösung vorgegeben wird. PostgreSQL 18 (September 2025) bringt mehrere für uns relevante Verbesserungen. Das neue asynchrone I/O-Subsystem liefert spürbare Performance-Gewinne bei leseintensiven Workloads. Die native `uuidv7()`-Funktion ersetzt bisherige Workarounds für zeitbasierte, indexfreundliche UUIDs. Virtual-Generated-Columns erlauben es, berechnete Werte ohne physische Speicherung direkt im Schema abzubilden.

Im Betrieb fällt die Möglichkeit ins Gewicht, Planner-Statistiken über Major-Version-Upgrades hinweg beizubehalten. Damit entfällt die bisher nötige `ANALYZE`-Phase nach einem Upgrade, und die erwartete Query-Performance steht deutlich schneller zur Verfügung. Auf der Security-Seite kommt OAuth-2.0-Authentifizierung neu hinzu. Die MD5-Passwortauthentifizierung ist ab dieser Version als deprecated markiert.

[postgres]: https://www.postgresql.org/
