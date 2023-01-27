---
title:    Jakarta EE  
ring:     hold  
quadrant: libraries-frameworks-and-languages
---

[Jakarta EE][jakarta-ee], ehemals [Java EE][java-ee], ist eine Sammlung von Java-Technologien und Spezifikationen,
welche für die Entwicklung von Unternehmensanwendungen verwendet werden. Unter anderem enthält Jakarta EE Technologien
wie [Servlets][servlet] und [Jakarta Server Pages (JSP)][jsp] für die Erstellung von
Web-Anwendungen, [Jakarta Enterprise Beans (EJB)][ejb] für die Verwaltung von Geschäftslogik und
Transaktionen, [Jakarta Persistence API (JPA)][jpa] für die Verwaltung von
Datenbankzugriffen, [Contexts and Dependency Injection (CDI)][cdi] für die Organisation von Anwendungskomponenten und
ihren Abhängigkeiten, sowie [Jakarta API for RESTful Web Services (JAX-RS)][jax-rs] um Anwendungen über HTTP-basierte
Schnittstellen zugänglich zu machen.

Jakarta EE-Anwendungen werden normalerweise in einer kompatiblen Anwendungsserverumgebung ausgeführt, welche die
notwendigen Ressourcen und Services bereitstellt, um die Anwendungen auszuführen. Beispiele für solche Serverumgebungen
sind [WildFly][wildfly] oder [GlassFish][glassfish]. Solche Anwendungsserverumgebungen haben hohe Anforderungen an die
Ressourcen, welche für die Ausführung einer Jakarta EE-Anwendung erforderlich sind. Dadurch benötigen Jakarta
EE-Anwendungen in der Cloud viel Ressourcen und sind teuer im Betrieb.

Bei Inventage setzen wir darum vermehrt auf [Quarkus][quarkus] und wollen uns von den traditionellen
Anwendungsserverumgebungen lösen. Quarkus Applikationen basieren auf den gleichen Java-Technologien und Spezifikationen
wie Jakarta EE, verfügen aber über eine deutlich schnellere Startzeit, sind ressourceneffizienter wodurch weniger CPU
und Arbeitsspeicher benötigen wird und enthalten native Unterstützung für Cloud-native Funktionen.

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
[quarkus]: quarkus.html
