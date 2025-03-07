---
title:    Microservice-Architektur  
ring:     adopt  
quadrant: concepts-and-methods
tags: [Backend, Architektur]
---

[Microservices][microservices] sind ein Architekturstil, bei dem eine Anwendung als Sammlung unabhängiger
Dienste entwickelt wird, die zusammenarbeiten, um eine übergreifende Funktionalität anzubieten. Die einzelnen
spezialisierten Dienste kommunizieren miteinander über ein Nachrichtensystem, wie zum Beispiel [Kafka][kafka].

Bei Inventage erweitern wir die Definition von Microservices auf das Frontend. Ein Microservice besteht sowohl aus
Micro-Backend, als auch aus [Micro-Frontend][martinfowler]. Mit den Micro-Frontends werden unabhängig voneinander
auslieferbare Frontend-Anwendungen zu einem grösseren Ganzen zusammengefügt. Um solche Micro-Frontends zu entwickeln,
eigenen sich aus unserer Sicht [Web Components][web-components].

Der Hauptvorteil von Microservices besteht darin, dass die Aufteilung der Applikation in einzelne Dienste es ermöglicht,
Anwendungen schneller und flexibler zu entwickeln. Jeder einzelne Microservice ist weniger abhängig von anderen Teilen
der Anwendung. Die Applikation lässt sich erweitern, indem neue Microservices entwickelt und in die bestehende
Architektur integriert werden.

Unsere Erfahrung zeigt aber auch, dass Microservices bei der Entwicklung und Wartung zu einer erhöhten Komplexität
führen. Einerseits aufgrund der Kommunikation der einzelnen Services über Nachrichten, die möglicherweise die
Verwaltung von Fehlern und die Überwachung von Leistungsproblemen erfordern. Andererseits aufgrund der expliziten
Trennung des eigentlichen Codes, was Refactorings der Schnittstellen erschwert.

Zudem braucht es viel Erfahrung, um die Funktionalität sinnvoll in einzelne Dienste zu unterteilen. Wenn es die
Anforderungen erlauben, haben wir bei Inventage gute Erfahrungen damit gemacht, die Applikation anhand der
unterschiedlichen Benutzergruppen aufzuteilen. Indem der Dienst einer Benutzergruppe mehrfach installiert wird, lässt
sich auf diese Weise auch eine Mandantenfähigkeit elegant lösen.

Über Microservices lassen sich moderne Applikationen in der Cloud entwickeln. Eine genaue Analyse der Anforderungen und
ein Abwägen der Vor- und Nachteile ist aber in jedem Fall erforderlich. Nicht immer sind Microservices die einzige
Lösung, wie eine Software umgesetzt werden kann. Eine Alternative zur Microservice-Architektur ist zum Beispiel der
[modulare Monolith][modularized-monolith], bei dem ein Monolith in austauschbare und wiederverwendbare Module
unterteilt wird.

[kafka]: /platforms/kafka
[microservices]: https://microservices.io/
[martinfowler]: https://martinfowler.com/articles/micro-frontends.html
[web-components]: /concepts-and-methods/web-components
[modularized-monolith]: /concepts-and-methods/modularized-monolith
