---
title:    ArchUnit  
ring:     adopt  
quadrant: libraries-frameworks-and-languages
---

[ArchUnit][archunit] erlaubt es, die Architektur einer Software zu definieren und dann in Form von Unittests zu prüfen.
Hierbei werden insbesondere die Abhängigkeiten zwischen Modulen (Packages) gegen Verstösse gegen diese Definition
überprüft, sodass der Test scheitert, falls unerlaubte Referenzen eingefügt wurden.

Für den Architekturstil [modularer Monolith][modularized-monolith] bietet ArchUnit ein wertvolles Werkzeug, um
sicherzustellen, dass die Modul-Grenzen respektiert werden.

[archunit]: https://www.archunit.org/
[modularized-monolith]: /concepts-and-methods/modularized-monolith
