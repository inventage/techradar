---
title:    Tempo  
ring:     adopt  
quadrant: tools
---

In der Welt der Mikroservices durchquert ein Request mehrere Komponenten bevor eine finale Response zurückgeschickt wird. Das Analysieren von Fehlern und Performance Engpässen über das ganze System wird dadruch erschwert. Mit Hilfe von Distributed Tracing kann dem entgegengewirkt werden. Einzelne Mikroservices kollaborieren, um den kompletten Weg eines Requests durch das System zu protokollieren. Dazu wird jedem Request beim Eintritt in das System eine Trace ID zugeordnet, welche zusammen mit dem Request weitergegeben wird. Die Mikroservices melden dann jeweils ihre Sicht des Request einer zentralen Datenbank, welche dann eine globale Sicht auf Request bzw. Response im System hat.

Grafana Tempo ist ein quell-offenes und skalierbares Backend für das Speichern von Traces. Es kann mit Logging-Backends integriert werden, um auch Log-Statements einem Trace zuordnen zu können. Bei Inventage setzen wir Tempo sowohl während der Entwicklung, als auch in produktiven Systemen erfolgreich ein.
