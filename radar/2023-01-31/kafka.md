---
title:    Kafka  
ring:     adopt  
quadrant: platforms
---

[Apache Kafka][kafka] ist eine Open Source Event Streaming Plattform, welche in den letzen Jahren sehr viel Popularität
erlangt hat. Wir verwenden Kafka bei unseren Uniport Projekten und realisieren damit Use-Cases wie asynchrone
Kommunikation zwischen Micro Services oder die Implementierung des ["Transactional Outbox"
Patterns][transactional-outbox] mittels [Debezium][debezium]. Die Architektur von Kafka unterscheidet sich von
klassischen Message Brokern (z.B. RabbitMQ). Kafka ist ein persistenter Message Bus, welcher Events (Messages) in einer
geordneten Sequenz vorhält. Events können dadurch mehrfach gelesen werden, womit sich Kafka auch für die Realisierung
von weiteren Microservice Architektur-Patterns wie z.B. Event-Sourcing sehr gut eignet.

[kafka]: https://kafka.apache.org/
[transactional-outbox]: https://microservices.io/patterns/data/transactional-outbox.html
[debezium]: https://debezium.io/