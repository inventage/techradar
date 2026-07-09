---
title:    Bruno
ring:     trial
quadrant: tools
tags:     [Testing]
---

[Bruno][bruno] ist ein Open-Source-API-Client, der API-Collections als Dateien im Repository speichert, statt in einer proprietären Cloud. Damit adressiert Bruno ein zentrales Problem, das uns bei [Postman][podman] und [Insomnia][insomnia] immer wieder begegnet ist: die mangelnde Versionierbarkeit und Portabilität der Collections.

Bruno unterstützt REST und GraphQL, bietet eine übersichtliche Oberfläche und verwendet ein eigenes, Git-freundliches Dateiformat (Bru). Requests, Environments und Variablen liegen als Textdateien im Projekt-Repository und sind damit für das gesamte Team versioniert und nachvollziehbar. Wir testen Bruno als Ergänzung zu unseren `.http`-Dateien und evaluieren, ob es sich als Team-Werkzeug für die API-Dokumentation und -Exploration eignet.

[bruno]: https://www.usebruno.com/
[insomnia]: /tools/insomnia
[podman]: /tools/podman
