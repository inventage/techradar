---
title:    Jenkins  
ring:     hold  
quadrant: tools
tags: []
---

[Jenkins][jenkins], der weit verbreitete Open-Source Build-Server, wird bei Inventage in vielen Projekten als
Build-, Integrations- und Delivery-Plattform verwendet. Mittels Plugins kann Jenkins an vielfältige Bedürfnisse
angepasst werden. Allerdings erweist sich diese Vielfalt je länger je mehr als Belastung, da viele Plugins
veraltet sind oder Kompatibilitätsprobleme haben, was die Wartung des Servers erschwert. Ausserdem müssen die Projektteams für Anpassungen auf die Hilfe der Jenkins-Administratoren zurückgreifen, da die Verwaltung dieser Plugins zentral erfolgt.

Aus diesem Grund setzen wir bei neuen Projekten nur noch auf containerbasierte Build-Plattformen wie beispielsweise [GitHub
Actions][gitHubActions], die von den Projektteams autonom verwaltet werden können.

[jenkins]: https://www.jenkins.io/
[gitHubActions]: /tools/github-actions