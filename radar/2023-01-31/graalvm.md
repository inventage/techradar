---
title:    GraalVM  
ring:     assess  
quadrant: platforms
---

Als Alternative zur Java Virtual Machine (JVM) lassen sich mit [GraalVM][graalvm] performante Applikationen mit
niedrigem Ressourcenbedarf erstellen. GraalVM ist Polyglot. Das heisst es lassen sich Applikationen schreiben, welche
Bibliotheken verwenden, die auch in anderen Sprachen (z.B. Javascript, R, Ruby, Python) geschrieben sind. Da auf GraalVM
optimierte Applikationen wenig Ressourcen benötigen, ist die GraalVM eine ideale Plattform für Cloud-Applikationen.

[Quarkus][quarkus]-Applikationen lassen sich auch für die GraalVM bauen. Bei Inventage möchten wir herausfinden, ob sich
die GraalVM in der Praxis bewährt, ob der Zusatzaufwand für einen GraalVM-Build gerechtfertigt ist, und ob wir die
Polyglossie der GraalVM zu unserem Vorteil nutzen können.

[graalvm]: https://www.graalvm.org/
[quarkus]: ../libraries-frameworks-and-languages/quarkus.html
