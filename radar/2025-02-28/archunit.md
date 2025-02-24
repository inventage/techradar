---
title:    ArchUnit  
ring:     adopt  
quadrant: libraries-frameworks-and-languages
---

ArchUnit erlaubt es, in Form von Unittests die Einhaltung von vereinbarten Architekturregeln einer Software zu prüfen. Dabei werden insbesondere die Abhängigkeiten zwischen Modulen (Packages) auf Verstösse gegen diese Regeln hin überprüft. Der Test scheitert, falls unerlaubte Referenzen eingefügt wurden.

Für den Architekturstil modularer Monolith bietet ArchUnit ein wertvolles Werkzeug, um sicherzustellen, dass die Modul-Grenzen respektiert werden.

Spring Modulith bietet ein Testframework, welches automatisch die Modulabhängigkeiten validiert und prüft, ob Modulgrenzen eingehalten werden. Dabei nutzt es intern ArchUnit.
