---
title:    NATS
ring:     assess
quadrant: platforms
tags:     [Backend, Data]
---

[NATS][nats] ist ein leichtgewichtiges, hochperformantes Messaging-System, das Publish/Subscribe, Request/Reply und Streaming (via [JetStream][jetstream]) in einer einzigen Plattform vereint. Im Vergleich zu [Kafka][kafka] zeichnet sich NATS durch minimale Betriebskomplexität und einfache Konfiguration aus.

Wir evaluieren NATS als Alternative für Szenarien, in denen Kafka überdimensioniert ist, wie etwa für die interne Kommunikation zwischen Microservices oder für leichtgewichtige Event-Systeme. Bevor wir NATS in Kundenprojekten empfehlen, wollen wir belastbare Erfahrungen mit dem Betrieb in [Kubernetes][kubernetes]-Umgebungen sammeln. Die 2025 beigelegte Kontroverse um die Lizenzierung des NATS-Servers zeigt zudem, dass die Governance des Projekts Beachtung verdient.

[nats]: https://nats.io/
[jetstream]: https://docs.nats.io/nats-concepts/jetstream
[kafka]: /platforms/kafka
[kubernetes]: /platforms/kubernetes
