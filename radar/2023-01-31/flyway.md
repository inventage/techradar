---
title:    Flyway  
ring:     adopt  
quadrant: tools
---

Als Datenbank-Migrationstool kümmert sich [Flyway][flyway] um das Einspielen von Migrationsskripten, sodass ein
gegebenes Datenbankschema automatisch auf den aktuellsten Stand gebracht wird. Die Migration kann applikatorisch
angestossen werden, was sichergestellt, dass eine Applikation immer das aktuellste Schema verwendet. 

Migrationen werden als SQL-Skripte implementiert. Dies erlaubt den Zugriff auf den gesamten Funktionsumfang der
eingesetzten Datenbank und macht eine zwischengeschaltete Übersetzungsschicht (z.B. in Form von datenbankunabhängigen
Änderungsdefinitionen in XML) überflüssig. Migrationsskripte in Java sind ebenfalls möglich, wurden bei Inventage aber
bisher nicht eingesetzt. Die Migrationsskripte werden zusammen mit dem Applikationscode gepflegt, wodurch man auch im
Bereich der Datenbank eine gute Kontrolle über Änderungen erhält, wie man es sich im Bereich des restlichen
Applikationscodes mit Versionskontrolle, reproduzierbaren Builds und [CI/CD][cicd] gewohnt ist. 

Bei Inventage setzen wir Flyway sowohl lokal während der Entwicklung, als auch in produktiven Systemen erfolgreich ein.

[flyway]: https://flywaydb.org/
[cicd]: /concepts-and-methods/ci-cd
