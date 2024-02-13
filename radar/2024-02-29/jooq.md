---
title:    jOOQ  
ring:     trial  
quadrant: libraries-frameworks-and-languages
---

Bisher wurde [jOOQ][jooq] (Java Object Oriented Querying) bei Inventage noch in keinem Projekt eingesetzt, wir sehen
jedoch einige vielversprechende Anwendungsfälle:

- Als Backend für GraphQL-APIs, um dynamisch SQL-Queries zusammenzustellen aufgrund eines GraphQL-Queries.
- Für die Ablösung von Legacy-Technologien, die nicht einfach auf JPA oder ähnliche Technologien umgestellt werden
  können.
- Als Grundlage für ein neues Regelwerk, um Datenbank-Zugriffe mit rollenbasierten Filterkriterien automatisch zu
  schützen, ähnlich unserer bewährten SecurityEngine.
- Als Unterstützung in Projekten, die bereits JPA einsetzen, um Anforderungen umzusetzen, die mit JPQL schwierig zu
  meistern sind.

[jooq]: https://www.jooq.org/
