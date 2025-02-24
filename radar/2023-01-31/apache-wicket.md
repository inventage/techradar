---
title:    Apache Wicket  
ring:     hold  
quadrant: libraries-frameworks-and-languages
---

[Wicket][apache-wicket] ist ein serverseitiges, komponentenbasiertes Java-Web-Framework, das von der Apache Software
Foundation entwickelt wird. Als serverseitiges Web-Framework nutzt Wicket Ajax-Aufrufe zum Backend, um die
UI-Komponenten dynamisch zu aktualisieren. Dadurch leidet oft die Benutzerfreundlichkeit der Web-Applikationen, da sich
der ständige Datenaustausch mit dem Server schwerfällig anfühlt und die Möglichkeiten im UI eingeschränkter sind als bei
modernen, clientseitigen Frontend-Frameworks. Aufgrund der sessionbasierten Funktionsweise ist der serverseitige
Ressourcenverbrauch typischerweise höher als bei clientseitigen Frameworks, wo sich der Server auf das Bereitstellen
schlanker REST-Services beschränkt. Dies macht Wicket gerade für Cloud-Anwendungen nicht unbedingt zur ersten Wahl.
Zudem lassen sich [Web Components][web-components] mit Wicket nicht oder nur sehr mühsam entwickeln bzw. in die
Applikation einbinden.

Bei Inventage haben wir Wicket in verschiedenen Projekten erfolgreich eingesetzt. Dennoch sind wir der Meinung,
dass Wicket in den letzten Jahren mit der Entwicklung clientseitiger Web-Frameworks nicht mehr standhalten konnte.
Deshalb setzen wir für neue Projekte auf [Angular][angular] oder [Lit][lit].

[apache-wicket]: https://wicket.apache.org/
[web-components]: /concepts-and-methods/web-components
[lit]: /libraries-frameworks-and-languages/lit
[angular]: /libraries-frameworks-and-languages/angular
