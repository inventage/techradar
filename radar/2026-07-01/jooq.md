---
title:    jOOQ
ring:     adopt
quadrant: libraries-frameworks-and-languages
tags:     [Backend, Data]
blog:
  title: "Regelwerk: Zugriffsschutz als Architekturentscheid"
  url:   https://blog.inventage.com/blogs/regelwerk-zugriffsschutz/
---

[jOOQ][jooq] hat sich im produktiven Einsatz bewährt. Der entscheidende Treiber war die Umsetzung von [Regelwerk][regelwerk]: Mit jOOQ können wir rollenbasierte Filterkriterien dynamisch und typsicher in SQL-Queries einweben.

Die typsichere DSL und die zur Compile-Zeit generierten Metadaten aus dem Datenbankschema geben uns ein hohes Mass an Vertrauen bei Refactorings. jOOQ ergänzt bestehende JPA-Projekte dort, wo JPQL an seine Grenzen stösst.

[jooq]: https://www.jooq.org
[regelwerk]: https://regelwerk.com
