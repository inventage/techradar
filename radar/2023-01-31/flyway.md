---
title:    Flyway  
ring:     adopt  
quadrant: tools
---

Als Datenbank-Migrationstool erlaubt es [Flyway][flyway], auf eine festgelegte Weise, von einem Datenbankzustand zum nächsten zu
migrieren, zu jeder Zeit über den aktuellen Stand der Datenbank informiert zu sein und so auch im Bereich der Datenbank
eine vergleichbar gute Kontrolle über Änderungen zu erhalten, wie man sich dies im Bereich des restlichen
Applikationscodes mit Versionskontrolle, reproduzierbaren Builds und [CI/CD](/concepts-and-methods/ci-cd.html) gewohnt ist. Migrationen werden als
SQL-Skripte implementiert. Dies erlaubt den Zugriff auf den gesamten Funktionsumfang der Datenbank und macht eine
zwischengeschaltete Übersetzungsschicht (z.B. in Form von datenbankunabhängigen Änderungsdefinitionen in XML)
überflüssig. Migrationsskripte in Java sind ebenfalls möglich, wurden bei Inventage aber bisher noch nicht eingesetzt.
Flyway kümmert sich darum, dass auf einem gegebenen Datenbankschema alle verfügbaren, noch nicht eingespielten
Migrationsskripte in der richtigen Reihenfolge angewendet werden. Die Migration kann applikatorisch angestossen werden,
wodurch sichergestellt wird, dass die Applikation immer das aktuellste Schema verwendet. Dies setzen wir bei Inventage
sowohl lokal bei der Entwicklung, als auch in produktiven Systemen erfolgreich ein. Flyway haben wir dem Ring "Verbreiten" 
zugeordnet, um auszudrücken, dass wir das Tool als gleichwertige Alternative zum ebenfalls bei Inventage
eingesetzten Konkurrenten [Liquibase][liquibase] erachten.

[flyway]: https://flywaydb.org/
[liquibase]: https://www.liquibase.com/