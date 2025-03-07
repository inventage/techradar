---
title:    Kafka  
ring:     adopt  
quadrant: platforms
tags: [Backend]
---

[Apache Kafka][kafka] ist eine quelloffene Event Streaming Plattform, die in den letzten Jahren viel Popularität erlangt
hat. Wir verwenden Kafka bei unseren [Uniport][uniport]-Projekten und realisieren damit Anwendungsfälle wie asynchrone
Kommunikation zwischen Microservices oder die Implementierung des [Transactional Outbox][transactional-outbox] Patterns
mittels [Debezium][debezium]. Die Architektur von Kafka unterscheidet sich von klassischen Message Brokern (z.B.
RabbitMQ). Kafka ist ein persistenter Message Bus, der Events (Messages) in einer geordneten Sequenz vorhält. Events
können dadurch mehrfach gelesen werden, womit sich Kafka auch für die Realisierung von weiteren
Microservicer-Architektur-Patterns wie z.B. Event-Sourcing eignet.

[kafka]: https://kafka.apache.org/
[transactional-outbox]: https://microservices.io/patterns/data/transactional-outbox.html
[debezium]: /tools/debezium
[uniport]: https://uniport.ch/
