---
title:    Elastic Stack  
ring:     adopt  
quadrant: tools
tags:     [Monitoring]
---

Der [Elastic Stack][elastic-stack] besteht im Herz aus dem clusterfähigen und robusten Suchindex
[Elasticsearch][elastic-search] und dazu passenden Werkzeugen zum Sammeln, Verarbeiten und Visualisieren von Daten,
sowie zum Betreiben des Clusters.

Mögliche Quellen von Daten sind z.B. Applikationslogs, Servermetriken oder Umgebungssensoren. Es lassen sich aber auch
ganze Dokumente oder Webseiten indizieren, um anschliessend effizient nach den Dokumenten zu suchen oder sie weiter zu
analysieren. Basierend auf dem Index und Shard-Konzept von Apache Lucene skaliert Elasticsearch hervorragend und kann
bei Bedarf vergrössert bzw. verkleinert werden.

Für Inventage kann fast jede Applikation einen Suchindex gebrauchen. Entweder im effizienten Betrieb und Überwachung von
Applikationen, speziell im Microservice Multi-Container-Umfeld. Aber auch eine Dokumentsuche über ein gesamtes Portal
mit allen Dokumenten steigert die Produktivität der Benutzer. 

Elastic Stack hat sich in mehreren Projekten ausgezeichnet bewährt. Wir setzen ihn produktiv für die Dokumentensuche und
die Systemüberwachung (Observability) ein.

[elastic-stack]: https://www.elastic.co/de/
[elastic-search]: https://www.elastic.co/de/elasticsearch/
