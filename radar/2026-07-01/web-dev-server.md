---
title:    Web Dev Server
ring:     hold
quadrant: tools
tags:     [Frontend]
---

Der [Web Dev Server][web-dev-server] hat in vergangenen Projekten gut funktioniert, insbesondere in Kombination mit dem [Web Test Runner][web-test-runner] für plattformnahes, buildless Testing. Das Paket `@web/dev-server` wurde allerdings seit Mitte 2024 nicht mehr publiziert, und das gesamte Modern-Web-Projekt zeigt kaum noch Aktivität.

In bestehenden Projekten läuft der Web Dev Server weiterhin stabil, doch fehlende Updates bei Abhängigkeiten und ausbleibende Bugfixes erhöhen das Risiko mit der Zeit. Für neue Setups setzen wir stattdessen auf [Vite][vite].

[web-dev-server]: https://modern-web.dev/docs/dev-server/overview
[web-test-runner]: https://modern-web.dev/docs/test-runner/overview
[vite]: /tools/vite
