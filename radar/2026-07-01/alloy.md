---
title:    Grafana Alloy
ring:     assess
quadrant: tools
tags:     [Monitoring]
---

[Grafana Alloy][alloy] ist ein OpenTelemetry-kompatibler Collector, der als universeller Telemetrie-Agent für Metriken, Logs und Traces dient. Als Nachfolger von Grafana Agent und Promtail vereint Alloy die Funktionalität mehrerer spezialisierter Agents in einem einzigen, konfigurierbaren Tool.

Wir haben in unserer [OpenTelemetry][opentelemetry]-basierten Monitoring-Infrastruktur bisher separate Tools für verschiedene Signaltypen eingesetzt. Da Grafana Promtail abgekündigt hat (End-of-Life im März 2026), steht der Wechsel im Log-Bereich ohnehin an. Wir evaluieren, wie sich Alloy in unsere [Kubernetes][kubernetes]-Umgebungen integriert und ob wir weitere Agents damit ablösen.

[alloy]: https://grafana.com/docs/alloy/latest/
[opentelemetry]: /libraries-frameworks-and-languages/open-telemetry
[kubernetes]: /platforms/kubernetes
