---
title:    Hybride mobile Applikationen  
ring:     trial  
quadrant: concepts-and-methods
tags:     [Mobile]
---

Immer wieder sind wir bei unseren Kundenprojekten mit Anfragen für mobile Applikationen konfrontiert. Eine der
wichtigsten Anforderungen ist dabei oft eine Applikation im jeweiligen Store der wichtigsten Anbieter. Native Mobile
Apps gehören allerdings nicht zu unserem Service-Portfolio.

Im Web bieten sich Progressive Web Apps (PWAs) an, um "App-like" Benutzererlebnisse zu bauen. Obwohl solche
Applikationen heute grundsätzlich in den App-Stores publiziert werden können, ist die Unterstützung der Features nicht
bei allen Anbietern gleich gut und der Publikations- und Update-Prozess nicht ganz trivial.

Um den Kundenanforderungen gerecht zu werden und gleichzeitig den Technologiefokus im Web zu behalten, haben wir bereits
Erfahrungen mit [hybriden mobilen Applikationen][hybride-mobile-app] sammeln können. Es sind schlanke
Wrapper-Applikationen, die nativ in der jeweiligen Programmiersprache (Swift für iOS und Kotlin für Android) geschrieben
werden und als Inhalt die Web-Applikation über WebViews einbinden. Das hat den Vorteil, dass man Apps jeweils über die
plattformspezifischen, nativen Mechanismen publizieren kann, ihr Inhalt aber trotzdem als responsive Web-Applikation
umsetzen kann. Updates an den Apps in den Stores müssen nur selten eingegeben werden, weil jeweils die neueste Version
der Inhalte aus dem Web geladen wird. Zudem sind Erweiterungen und Integrationen der Web-Version mit der nativen Welt
grundsätzlich möglich.

[hybride-mobile-app]: https://www.brightsolutions.de/blog/native-vs-hybride-vs-web-app/
