---
title:    Kafka  
ring:     adopt  
quadrant: platforms
---

[Kafka][kafka] ist in vielen unserer Kundenprojekte als zuverlässige Messaging-Plattform im Einsatz.

Zwar stellt Kafka standardmässig eine Reihe von Shell-Skripten zu dessen Verwaltung bereit, doch für eine benutzerfreundlichere Administration setzen wir zunehmend auf die Redpanda Console<sup>1</sup>. Sie bietet eine intuitive Oberfläche um Topics zu verwalten, um Nachrichten zu konsumieren und zu produzieren, sowie zur Analyse von Broker- und Topic-Konfigurationen.

Unsere Erfahrung zeigt, dass die [Redpanda Console][redpanda-console] den operativen Umgang mit Kafka deutlich effizienter macht. Debugging und Monitoring werden erleichtert, und zentrale Metriken sind jederzeit übersichtlich verfügbar.


---

<small><sup>1</sup> Neben der Console bietet [Redpanda][redpanda] eine Kafka-kompatible Alternative mit vereinfachter Installation und hoher Performance.</small>

[kafka]: https://kafka.apache.org/
[redpanda-console]: https://www.redpanda.com/redpanda-console-kafka-ui
[redpanda]: https://www.redpanda.com/
