---
title:    Automatisiertes E2E-Testing  
ring:     trial  
quadrant: concepts-and-methods
---

Unter End-to-End-Tests versteht man das Prüfen der gesamten Applikation — vom Frontend bis zum Backend. Die Anwendung
wird aus Endnutzerperspektive anhand produktionsähnlichen Bedingungen und Daten auf Funktionalität und Leistung
getestet. Ziel ist es, zu simulieren, wie ein reales Benutzerszenario von Anfang bis Ende aussieht. Damit wird
sichergestellt, dass sich der Anwendungsfluss wie erwartet verhält. Im Vergleich zum manuellen Testing erfordern
E2E-Test keine geschulten Tester. Alle Tests werden automatisiert und wiederholt ausgeführt, inklusive angebundener
Backend-Dienste und externer Schnittstellen (wobei diese unter Umständen gemockt werden).

Um die Applikation automatisiert zu testen, verwenden wir [Gauge][gauge] und [Taiko][taiko]. Beides sind
Open-Source-Frameworks mit einer einfachen API zur Automatisierung von Test in Chromium-basierten Browsern (Chrome,
Microsoft Edge, Opera) und Firefox. Gauge-Tests werden in Markdown geschrieben, was das Schreiben und Warten von Tests
erleichtert.

[gauge]: https://gauge.org/
[taiko]: https://taiko.dev/
