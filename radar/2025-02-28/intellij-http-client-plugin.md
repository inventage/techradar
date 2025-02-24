---
title: Intellij HTTP Client Plugin
ring: adopt
quadrant: tools
---

Nachdem wir das IntelliJ HTTP Client Plugin sowie das HTTP Client CLI in verschiedenen Projekten getestet haben, befördern wir es in den Verbreiten (Adopt) Ring.

Die Tatsache, dass die Definition der HTTP-Requests, sowie die Verarbeitung der HTTP-Responses als “.http”-Files direkt im Projekt-Repository abgelegt werden können, überzeugt. Die Requests in einem “.http”-File können einzeln oder in Serie direkt von IntelliJ IDEA ausgeführt werden. Dies steht im Kontrast zu Insomnia und Postman, wo jeweils nur ein Export aus den jeweiligen Tools im Projekt-Repository abgespeichert werden kann und einen Import voraussetzen, um davon Gebrauch zu machen. Insbesondere können die “.http”-Files auch als wertvolle Dokumentation von APIs verwendet werden.
