---
title:    API-first Development  
ring:     adopt  
quadrant: concepts-and-methods
---

Beim API-first-Ansatz erfolgt der Entwurf und die Entwicklung der Schnittstelle vor deren Implementierung. Durch dieses
Vorgehen wird die Aufmerksamkeit gleich zu Beginn auf das Datenmodell und die Geschäftslogik gelenkt, was in der Regel
zu robusteren Schnittstellen führt. Der Schnittstellenentwurf kann auch als Vertrag betrachtet werden, auf den
verschiedene Teams parallel hinarbeiten. Dieser Aspekt spielt bei der Grösse der Projektteams innerhalb der Inventage
jedoch noch keine entscheidende Rolle.

Durch den Einsatz von Codegeneratoren (z.B. [OpenAPI Generator][openapi-generator] für
[OpenAPI][openapi]-Schnittstellen) kann bei Bedarf ein Gerüst für verschiedene Client- und Server-Implementierungen
(auch in unterschiedlichen Programmiersprachen) generiert werden. Dies vermindert den Aufwand für das Schreiben von
reinem Infrastruktur-Code. Auch wenn von dieser Möglichkeit kein Gebrauch gemacht wird, können mit geeigneten Tools
(z.B. [Swagger-UI][swaggerui]) zu Testzwecken Clients generiert werden, mit deren Hilfe die Schnittstelle schon während
des Entwurfs getestet werden kann.

Auch wenn mit diesem Ansatz bei Inventage gute Erfahrungen gemacht wurden und er deshalb hier zur Verbreitung empfohlen
wird, soll seine Anwendung nicht als Zwang verstanden werden. Es steht jedem Team frei, bei rein internen APIs auch den
Code-first-Ansatz zu wählen.

[openapi-generator]: https://openapi-generator.tech
[openapi]: https://www.openapis.org
[swaggerui]: https://swagger.io/tools/swagger-ui
