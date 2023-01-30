---
title:    Jakarta EE  
ring:     hold  
quadrant: libraries-frameworks-and-languages
---

[Jakarta EE][jakarta-ee], ehemals [Java EE][java-ee], ist eine Sammlung von Java-Technologien und Spezifikationen,
welche für die Entwicklung von Unternehmensanwendungen verwendet werden. Unter anderem enthält Jakarta EE Technologien
wie [Servlets][servlet] und [Jakarta Server Pages][jsp] (JSP) für die Erstellung von Web-Anwendungen, [Jakarta
Enterprise Beans][ejb] (EJB) für die Verwaltung von Geschäftslogik und Transaktionen, [Jakarta Persistence API][jpa]
(JPA) für die Verwaltung von Datenbankzugriffen, [Contexts and Dependency Injection][cdi] (CDI) für die Organisation von
Anwendungskomponenten und ihren Abhängigkeiten, sowie [Jakarta RESTful Web Services][jax-rs] (JAX-RS) für HTTP-basierte
Schnittstellen.

Jakarta EE-Applikationen werden normalerweise in einem Applikationsserver ausgeführt, der den Applikationen die von der
Spezifikation definierten Dienste bereitstellt (z.B. [WildFly][wildfly] oder [GlassFish][glassfish]). Durch ihren
relativ hohen Ressourcenverbrauch sind solche Applikationsserver allerdings weniger gut geeignet, um als
Cloud-Applikationen installiert zu werden.

Bei Inventage setzen wir deshalb vermehrt auf [Quarkus][quarkus] und möchten uns von den traditionellen
Applikationsserverumgebungen lösen. Quarkus-Applikationen können dieselben bewährten Technologien und Spezifikationen
verwenden wie von Jakarta EE vorgegeben, verfügen aber über eine deutlich schnellere Startzeit, sind
ressourceneffizienter und enthalten Unterstützung für Cloud-native Funktionen.

[jakarta-ee]: https://jakarta.ee/specifications/
[java-ee]: https://javaee.github.io/
[servlet]: https://jakarta.ee/specifications/servlet/
[jsp]: https://jakarta.ee/specifications/pages/
[ejb]: https://jakarta.ee/specifications/enterprise-beans/
[jax-rs]: https://jakarta.ee/specifications/restful-ws/
[jpa]: https://jakarta.ee/specifications/persistence/
[cdi]: https://jakarta.ee/specifications/cdi/
[wildfly]: https://www.wildfly.org/
[glassfish]: https://glassfish.org/
[quarkus]: ../libraries-frameworks-and-languages/quarkus.html
