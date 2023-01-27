---
title:    Microservice-Architektur  
ring:     adopt  
quadrant: concepts-and-methods
---

[Microservices][microservices] sind ein Architekturstil, bei dem eine Anwendung als Sammlung kleiner, unabhängiger Dienste entwickelt wird, die zusammenarbeiten, um eine übergreifende Funktionalität anzubieten. Die einzelnen spezialisierten Dienste kommunizieren miteinander über Netzwerkaufrufe.

Bei Inventage erweitern wir die Definition von Microservices auf das Frontend. Ein Mircoservice besteht sowohl aus Micro-Backend, als auch aus [Micro-Frontend][martinfowler]. Mit dem Micro-Frontend Ansatz werden unabhängig voneinander auslieferbare Frontend-Anwendungen zu einem grösseren Ganzen zusammengefügt. Um solche Micro-Frontends zu entwicklen, eigenen sich aus unserer Sicht [Webkomponenten][web-components].

Der Hauptvorteil von Microservices besteht darin, dass die Aufteilung der Applikation in einzelne Dienste es ermöglicht, Anwendungen schneller und flexibler zu entwickeln. Jeder einzelne Microservice ist weniger abhängig von anderen Teilen der Anwendung. Die Applikation lässt sich einfach erweitern, indem neue Microservices entwickelt und in die bestehende Architektur integriert werden.

Unsere Erfahrung zeigt aber auch, dass Microservices zu einer erhöhten Komplexität bei der Entwicklung und Wartung führen. Einerseits aufgrund der Kommunikation der einzelnen Services über Netzwerkaufrufe, die möglicherweise die Verwaltung von Fehlern und die Überwachung von Leistungsproblemen erfordern. Andererseits aufgrund der expliziten Trennung des eigentlichen Codes, was Refactorings der Schnittstellen erschwert.

Zudem braucht es viel Erfahrung, die Funktionalität sinnvoll in einzelne Dienste zu unterteilen. Wenn es die Anforderungen an die Applikation erlauben, haben wir bei Inventage gute Erfahrungen gemacht, die Applikation anhand der unterschiedlichen Benutzergruppen aufzuteilen. Indem der Dienst einer Benutzergruppe mehrfach installiert wird, lässt sich auf diese Weise auch eine Mandantenfähigkeit elegant lösen.

Über Microservices lassen sich moderne Applikationen in der Cloud entwicklen. Eine genaue Analyse der Anforderungen und ein Abwähgen der Vor- und Nachteile ist aber in jedem Fall erfolderlich. Nicht immer sind Microservices die einzige Lösung, wie eine Software umgesetzt werden kann. Eine Alternative zur Microservice-Architekur ist zum Beispiel der [Modulare Monolith][monolith], bei welchem ein Monolith in austauschbare und wiederverwendbare Module unterteilt wird.

[microservices]: https://microservices.io/
[martinfowler]: https://martinfowler.com/articles/micro-frontends.html
[web-components]: ../concepts-and-methods/web-components.html
[monolith]: ../concepts-and-methods/modularized-monolith.html