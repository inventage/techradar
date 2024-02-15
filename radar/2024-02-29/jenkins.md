---
title:    Jenkins  
ring:     hold  
quadrant: tools
---

[Jenkins][jenkins], der weit verbreitete open-source Build-Server, wurde und wird in Inventage in vielen Projekten als Build-,
Integrations- und Deliveryplattform verwendet. Mit Plugins kann Jenkins einfach an vielfältige Bedürfnisse angepasst
werden, aber diese Vielfältigkeit erweist sich je länger je mehr als Belastung, denn viele Plugins sind veraltet oder
leiden an Kompatibilitätsproblemen, was die Wartung des Servers erschwert. Weiter geschieht die Verwaltung dieser
Plugins jeweils zentral, d.h. die Projekt-Teams sind bei veränderten Bedürfnissen auf fremde Hilfe angewiesen.

Aus diesem Grund setzen wir bei neuen Projekten nur noch auf containerbasierte Build-Plattformen (wie z.B. GitHub
Actions). Diese können von den Projekt-Teams vollständig selbstverwaltet werden.

[jenkins]: https://www.jenkins.io/
