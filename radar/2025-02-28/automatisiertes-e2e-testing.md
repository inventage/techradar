---
title:    Automatisiertes E2E-Testing  
ring:     trial  
quadrant: concepts-and-methods
---

Unter End-to-End-Tests versteht man das Prüfen der gesamten Applikation — vom Frontend bis zum Backend.

Die Anwendung wird aus Endnutzerperspektive anhand Produktions-ähnlicher Bedingungen und Daten auf Funktionalität und Leistung getestet. Ziel ist es, zu simulieren, wie ein reales Benutzerszenario von Anfang bis Ende aussieht. Damit wird sichergestellt, dass sich der Anwendungsfluss wie erwartet verhält. Im Vergleich zum manuellen Testing erfordert E2E-Test keine geschulten Tester. Alle Tests werden automatisiert und wiederholt ausgeführt, inklusive angebundener Backend-Dienste und externer Schnittstellen (wobei diese unter Umständen emuliert werden).

Um Applikationen automatisiert zu testen, verwenden wir Playwright. Playwright ist ein von Microsoft entwickeltes Open-Source-Framework für das automatisierte Testen von Webanwendungen. Damit können verschiedene Browser gesteuert sowie Benutzerinteraktionen simuliert werden.
