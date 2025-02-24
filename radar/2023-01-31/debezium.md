---
title:    Debezium  
ring:     adopt  
quadrant: tools
---

[Debezium][debezium] ist ein Open-Source-Projekt, das [Change Data Capture][cdc] (CDC) für verschiedene Datenbanken
(z.B. MySQL, [PostgreSQL][postgres], MongoDB, Oracle) bereitstellt. Mit CDC werden Daten-Änderungen in einer Datenbank
in Echtzeit erfasst und an andere Systeme weitergeleitet. Dadurch können Integrationsprozesse zwischen Anwendungen und
Datenbanken vereinfacht und automatisiert werden.

Bei Inventage setzen wir Debezium vor allem zusammen mit [Kafka][kafka] ein, um eine Form des [Outbox
Patterns][outbox-pattern] zu realisieren. Die Anwendungen publizieren Nachrichten nicht direkt auf Kafka, sondern
speichern diese mit den restlichen Datenbankänderungen in eine speziell konfigurierte Outbox-Tabelle. Debezium erstellt
uns Kafka-Connectors, welche Änderungen auf dieser Outbox-Tabelle überwachen und in Echtzeit an die Kafka-Topics senden.
Auf diese Weise wird die Integrität der Nachrichten sichergestellt, da sowohl unsere Datenänderungen als auch
Kafka-Nachrichten in der gleichen Transaktion geschrieben (oder im Fehlerfall zurückgesetzt) werden.

[Quarkus][quarkus] bietet für die Konfiguration von Debezium ein eigenes [Maven Modul][maven-debezium] an. So lässt
sich das Outbox Pattern in Quarkus relativ einfach konfigurieren.

[debezium]: https://debezium.io/
[cdc]: https://en.wikipedia.org/wiki/Change_data_capture
[postgres]: /tools/postgresql
[kafka]: /platforms/kafka
[outbox-pattern]: https://medium.com/design-microservices-architecture-with-patterns/outbox-pattern-for-microservices-architectures-1b8648dfaa27
[quarkus]: /libraries-frameworks-and-languages/quarkus
[maven-debezium]: https://debezium.io/documentation/reference/stable/integrations/outbox.html
