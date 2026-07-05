---
title:    Tempo
ring:     adopt
quadrant: platforms
tags:     [Monitoring]
---

[Grafana Tempo][tempo] ist ein skalierbares Open-Source-Backend für Distributed Tracing und in mehreren unserer Kundenprojekte produktiv im Einsatz. Die Instrumentierung der Services erfolgt über [OpenTelemetry][opentelemetry], wodurch wir herstellerunabhängig bleiben und Traces, Metriken sowie Logs mit gemeinsamem Kontext korrelieren können.

In Kombination mit Grafana und [Loki][loki] springen wir direkt vom Log-Eintrag in den zugehörigen Trace, und mit TraceQL filtern wir gezielt nach Spans mit bestimmten Attributen. Beides beschleunigt die Fehleranalyse in komplexen Microservice-Landschaften deutlich.

Da Tempo ausschliesslich Object Storage als Backend nutzt, bleibt der Betrieb schlank und integriert sich gut in bestehende Kubernetes-Infrastrukturen.

[tempo]: https://grafana.com/oss/tempo/
[opentelemetry]: /libraries-frameworks-and-languages/open-telemetry
[loki]: /platforms/loki
