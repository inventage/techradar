---
title:    Insomnia  
ring:     adopt  
quadrant: tools
---

[Insomnia][insomnia] ist ein REST-API-Client, der sich zum Testen von RESTful Service-Schnittstellen eignet. Requests
lassen sich auf einfache Weise organisieren, speichern und ausführen. Neben rein HTTP-basierten Requests werden auch
[SOAP][soap], [GraphQL][graphql] und [gRPC][grpc] unterstützt. Umgebungsspezifische Daten wie Base-URLs,
Authentisierungs-Tokens, Cookies etc. können in sogenannten Environments verwaltet und bei Bedarf aktiviert werden.
Code-Generatoren für das Ausführen der Requests, z.B. mittels [cURL][curl], sind ebenfalls nützlich. Die
Desktop-Applikation läuft auf Linux, Mac und Windows.

Bei Inventage wird das Tool in verschiedenen Projekten als hervorragende Alternative zu [Postman][postman] genutzt.
Dabei wird besonders die Möglichkeit zum Exportieren vollständiger Insomnia-Workspaces geschätzt. Dieses Feature
erleichtert das gemeinsame Nutzen einzelner Requests oder ganzer Test-Suiten innerhalb des Projektteams.

[insomnia]: https://insomnia.rest/
[soap]: http://www.w3.org/TR/SOAP
[graphql]: https://graphql.org/
[grpc]: https://grpc.io/
[curl]: https://curl.se/
[postman]: ../tools/postman.html
