---
title:    jOOQ  
ring:     trial  
quadrant: libraries-frameworks-and-languages
tags:     [Backend, Data]
---

Bisher wurde [jOOQ][jooq] bei Inventage noch in keinem Projekt eingesetzt. Wir sehen jedoch einige vielversprechende
Anwendungsfälle:

- Als Backend für GraphQL-APIs, um ausgehend von GraphQQL-Queries dynamische SQL-Queries zusammenzustellen.
- Für die Ablösung von Legacy-Technologien, die nur schwer auf JPA oder ähnliche Technologien umgestellt werden können.
- Als Grundlage für ein neues Regelwerk, um Datenbank-Zugriffe mit rollenbasierten Filterkriterien automatisch zu
  schützen, ähnlich unserer bewährten SecurityEngine.
- Als Unterstützung in Projekten, die bereits JPA einsetzen, um Anforderungen umzusetzen, die mit JPQL schwierig zu
  meistern sind.

[jooq]: https://www.jooq.org
