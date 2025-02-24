---
title:    Tempo  
ring:     adopt  
quadrant: tools
---

In der Welt der Microservices durchquert ein Request mehrere Komponenten, bevor eine finale Antwort zurückgeschickt wird. Das Analysieren von Fehlern und Performance-Engpässen über das ganze System hinweg wird dadurch erschwert. Mithilfe von Distributed-Tracing kann dem entgegengewirkt werden. Einzelne Microservices kollaborieren, um den kompletten Weg eines Requests durch das System zu protokollieren. Dazu wird jedem Request beim Eintritt in das System eine Trace-ID zugeordnet, die zusammen mit dem Request weitergegeben wird. Die Microservices melden dann jeweils ihre Sicht des Requests einer zentralen Datenbank, wodurch sich eine globale Sicht auf Request bzw. Response über das gesamte System ergibt.

[Grafana Tempo][tempo] ist ein quelloffenes und skalierbares Backend für das Speichern von Traces. Es kann mit Logging-Backends integriert werden, um auch Log-Statements einem Trace zuordnen zu können. Bei Inventage setzen wir Tempo sowohl während der Entwicklung als auch in produktiven Betrieb erfolgreich ein.

[tempo]: https://grafana.com/oss/tempo