---
title:    jOOQ  
ring:     trial  
quadrant: libraries-frameworks-and-languages
---

JPA und Hibernate sind De-facto-Standards für Datenbank-Zugriffe in Java, auch bei Inventage. Mit steigender Komplexität
von Datenbankabfragen wächst aber auch das Unbehagen beim Formulieren derselben in der zur Verfügung stehenden Criteria
API. Greift man auf Native Queries zurück, verliert man die Typsicherheit.
Die Suche nach ORM-Alternativen, welche sich stärker an SQL und den Möglichkeiten der Datenbanken orientieren, führte
uns zu [jOOQ (Java Object Oriented Querying)][jooq], welches SQL als interne DSL in Java abbildet, so
dass Datenbank-Abfragen typsicher und direkt in Java formuliert werden können.
Bisher wurde jOOQ in der Inventage noch in keinem Projekt eingesetzt. Erste Evaluationen waren jedoch jeweils so
vielversprechend, dass wir uns entschieden haben, diese Library dem Ring "Testen" zuzuordnen und auch einmal in einem
Projekt einzusetzen, um mehr Erfahrung damit zu sammeln. Ein mögliches Vorgehen könnte sein, jOOQ für komplexere
Reporting- und Batch-Processing-Tasks zu verwenden, während die typischen CRUD-Tasks weiterhin mit einem OR-Mapper
umgesetzt werden.

[jooq]: https://www.jooq.org/
