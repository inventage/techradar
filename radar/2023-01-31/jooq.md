---
title:    jOOQ  
ring:     trial  
quadrant: libraries-frameworks-and-languages
tags:     [Backend, Data]
---

JPA und Hibernate sind De-facto-Standards für Datenbank-Zugriffe in Java, auch bei Inventage. Mit steigender Komplexität
von Datenbankabfragen wächst aber auch die Schwierigkeit beim Formulieren derselben in der zur Verfügung stehenden
Criteria API. Greift man auf Native Queries zurück, verliert man die Typsicherheit.

[jOOQ][jooq] (Java Object Oriented Querying) bietet eine Java DSL, die sehr eng an SQL angelehnt ist und auch
herstellerspezifische SQL-Statements unterstützt. So können Datenbank-Abfragen typsicher und direkt in Java formuliert
werden.

Bisher wurde jOOQ bei Inventage noch in keinem Projekt eingesetzt. Erste Evaluationen waren jedoch vielversprechend,
sodass wir uns entschieden haben, diese Library dem Ring "Testen" zuzuordnen und auch einmal in einem Projekt
einzusetzen, um mehr Erfahrung damit zu sammeln. Ein mögliches Vorgehen könnte sein, jOOQ für komplexere Reporting- und
Batch-Processing-Tasks zu verwenden, während die typischen CRUD-Tasks weiterhin mit JPA als OR-Mapper umgesetzt werden.

[jooq]: https://www.jooq.org/
