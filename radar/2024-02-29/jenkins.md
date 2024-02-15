---
title:    Jenkins  
ring:     hold  
quadrant: tools
---

[Jenkins][jenkins], der weit verbreitete open-source Build-Server, wurde und wird in Inventage in vielen Projekten als
Build-, Integrations- und Delivery-Plattform verwendet. Mittels Plugins kann Jenkins an vielfältige Bedürfnisse
angepasst werden. Doch diese Vielfältigkeit erweist sich je länger je mehr als Belastung, denn viele Plugins sind
veraltet oder leiden an Kompatibilitätsproblemen, was die Wartung des Servers erschwert. Weiter geschieht die Verwaltung
dieser Plugins zentral, d.h. die Projekt-Teams sind für Anpassungen auf die Hilfe der Jenkins-Administratoren
angewiesen.

Aus diesem Grund setzen wir bei neuen Projekten nur noch auf containerbasierte Build-Plattformen (z.B. [GitHub
Actions][gitHubActions]), die von den Projekt-Teams autonom verwaltet werden können.

[jenkins]: https://www.jenkins.io/
[gitHubActions]: ../tools/github-actions.html