---
title:    Vite
ring:     adopt
quadrant: tools
tags:     [Frontend]
---

[Vite][vite] ist in vielen unserer Frontend-Projekte als Entwicklungsserver und Build-Tool im Einsatz. Vite 8 ersetzt die bisherige Kombination aus esbuild und Rollup durch [Rolldown][rolldown]. Rolldown ist in Rust geschrieben und vereinheitlicht die Build-Pipeline auf einen Bundler für Development und Production.

In ersten Projekten konnten wir mit `rolldown-vite` ohne nennenswerte Anpassungen migrieren, da Rolldown die Plugin-API von Rollup und Vite übernimmt und damit die meisten bestehenden Plugins direkt funktionieren. Zusätzlich profitieren wir davon, dass interne Vite-Plugins wie Alias und Resolve nach Rust portiert wurden, was die Builds messbar beschleunigt.

[vite]: https://vite.dev/
[rolldown]: https://rolldown.rs/
