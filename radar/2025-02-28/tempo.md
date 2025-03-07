---
title:    Tempo  
ring:     adopt  
quadrant: tools
tags:     [Monitoring]
---

In der Welt der Microservices durchläuft eine Anfrage mehrere Komponenten, bevor eine endgültige Antwort zurückgegeben wird. Dies erschwert die Analyse von Fehlern und Leistungsengpässen im gesamten System. Distributed Tracing kann hier Abhilfe schaffen. Einzelne Microservices arbeiten zusammen, um den kompletten Weg eines Requests durch das System zu protokollieren. Dazu wird jedem Request beim Eintritt in das System eine Trace-ID zugewiesen, die mit dem Request weitergereicht wird. Die Microservices melden dann jeweils ihre Sicht auf den Request an eine zentrale Datenbank, wodurch eine globale Sicht auf Request bzw. Response über das gesamte System entsteht.

[Grafana Tempo][tempo] ist ein quelloffenes und skalierbares Backend für das Speichern von Traces. Es kann mit Logging-Backends integriert werden, um auch Log-Statements einem Trace zuordnen zu können. Bei Inventage setzen wir Tempo sowohl während der Entwicklung als auch im produktiven Betrieb erfolgreich ein.

[tempo]: https://grafana.com/oss/tempo
