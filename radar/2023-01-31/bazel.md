---
title:    Bazel  
ring:     assess  
quadrant: tools
---

[Bazel][bazel] ist ein von Google entwickeltes, quelloffenes Build-Werkzeug, das mit komplexen Projekten, in denen
verschiedene Sprachen und Plattformen eingesetzt werden, gut und effizient umgehen kann.

Unsere Projekte werden heute meistens mit Maven, Gradle oder einer Kombination aus verschiedenen Shell-Skripten gebaut.
Weil aber die Komplexität der Projekte ([Microservices][microservices], Cloud), die Vielfalt der eingesetzten
Technologien und Programmiersprachen (Trennung Front- & Backend) sowie die Anforderungen an die erstellten Artefakte
(Unterstützung mehrerer Architekturen) zugenommen hat, möchten wir Bazel als Alternative zu unseren gängigen Werkzeugen
ausprobieren.

[bazel]: https://bazel.build/
[microservices]: /concepts-and-methods/microservice-architektur
