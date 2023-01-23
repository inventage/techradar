---
title:    Debezium  
ring:     adopt  
quadrant: tools
---

[Debezium][debezium] ist ein Open-Source-Projekt, welches [Change Data Capture (CDC)][cdc] für verschiedene
Datenbanken (MySQL, PostgreSQL, MongoDB, Oracle) bereitstellt. Mit CDC können Änderungen in einer Datenbank überwacht
und in Echtzeit an andere Systeme übermittelt werden. Debezium wurde entwickelt, um Integrationsprozesse zwischen
Anwendungen und Datenbanken zu vereinfachen und zu automatisieren, indem es Änderungen an Datenbanken in Echtzeit
erfasst und an andere Systeme weiterleitet.

Bei Inventage setzen wir Debezium vor allem zusammen mit [Kafka][kafka] ein, um eine Form
der [Outbox Pattern][outbox-pattern] zu realisieren. Die Anwendungen publizieren Nachrichten nicht direkt auf Kafka,
sondern speichern diese mit den restlichen Datenbankänderungen in eine speziell konfigurierte Outbox-Tabelle. Debezium
erstellt uns Kafka Connectors, welche Änderungen auf dieser Outbox-Tabelle überwachen und in Echtzeit an die
Kafka-Topics senden. Auf diese Weise wird die Integrität von Nachrichten sichergestellt, unsere Datenänderungen und
Kafka-Nachrichten werden über die gleiche Transaktion geschrieben (oder im Fehlerfall zurückgesetzt).

Quarkus (→ Quarkus) bietet für die Konfiguration von Debezium ein eigenes [Maven Modul][maven] an. So lässt sich die die
Outbox Pattern in Quarkus relativ einfach konfigurieren.

[debezium]: https://debezium.io/
[cdc]: https://en.wikipedia.org/wiki/Change_data_capture
[kafka]: https://kafka.apache.org/
[outbox-pattern]: https://medium.com/design-microservices-architecture-with-patterns/outbox-pattern-for-microservices-architectures-1b8648dfaa27
[maven]: https://debezium.io/documentation/reference/stable/integrations/outbox.html