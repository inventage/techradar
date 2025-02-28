---
title:    Analog  
ring:     assess  
quadrant: libraries-frameworks-and-languages
---

Das Meta-Framework [Analog][analog] baut auf dem Frontend-Framework Angular auf und erweitert es um zusätzliche Funktionalitäten.

Die Ladezeit einer App wird verbessert, indem Rechenzeit vom Client auf den Server verlagert wird. Mittels Server-Side-Rendering und Static-Site-Generator werden statische Fragmente der Applikation vorbereitet und zwischengespeichert. Diese können vor der ersten Übertragung mit dynamischen Daten ergänzt oder zu einem späteren Zeitpunkt aktualisiert werden. Dies bringt auch Vorteile für SEO und WCAG (Web-Content-Accessibility-Guidelines), da die Seiten sofort vollständig interpretierbar sind.

Analog basiert auf [Vite][vite] und [Nitro][nitro] und ist mit [Astro][astro] kompatibel. Dadurch ist JavaScript die primäre Programmiersprache, sowohl für die Entwicklungsumgebung als auch für die Business-Logik.

[analog]: https://analogjs.org/docs
[astro]: https://astro.build/
[nitro]: https://nitro.build/
[vite]: /tools/vite
