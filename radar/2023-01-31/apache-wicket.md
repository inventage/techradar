---
title:    Apache Wicket  
ring:     hold  
quadrant: libraries-frameworks-and-languages
---

[Wicket][apache-wicket] ist ein serverseitiges, komponentenbasiertes Java-Web-Framework, welches von der Apache Software
Foundation entwickelt wird. Auch bei Inventage haben wir das Framework in mehreren Projekten im Einsatz. In den letzten
Jahren hat Wicket aber einige Konkurrenz durch andere Frameworks bekommen.

Als serverseitiges Web-Framework nutzt Wicket Ajax Aufrufe ans Backend, um wiederverwendbare Komponenten zu entwickeln.
Dadurch leidet aber oft die Benutzerfreundlichkeit der Web-Applikationen, da sich der ständige Datenaustausch mit dem
Server schwerfällig anfühlt und die Möglichkeiten im UI stark eingeschränkt sind. Ausserdem wird in Frameworks mit einer
besseren Trennung von Frontend zum Backend die CPU- und Arbeitsspeicherlast mehr auf das Frontend verschoben, was den
Rechenaufwand im Backend reduziert und die Ressourcenanforderungen auf dem Server reduziert. Darum ist das Framework
gerade in Cloud-Anwendungen nicht unbedingt die erste Wahl. Auch lassen sich [Web Components][web-components],
wiederverwendbare Frontendkomponenten, mit Wicket gar nicht oder nur sehr mühsam entwickeln oder in die Applikation
einbinden.

Obwohl wir mit Wicket durchaus stabile Web-Applikationen entwickelt haben, wollen wir uns in Zukunft lieber auf andere
modernere Web-Frameworks fokussieren. So setzen wir in unseren Projekten heute vermehrt [Quarkus][quarkus]
oder [Spring Boot][spring-boot] im Backend und [Lit][lit] oder [Angular][angular] im Frontend ein.

[apache-wicket]: https://wicket.apache.org/
[web-components]: ../concepts-and-methods/web-components.html
[quarkus]: quarkus.html
[spring-boot]: spring-boot.html
[lit]: lit.html
[angular]: angular.html
