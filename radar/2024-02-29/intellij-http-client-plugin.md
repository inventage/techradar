---
title: Intellij HTTP Client Plugin
ring: assess
quadrant: tools
---

Da wir mit [Insomnia][insomnia] und [Postman][postman] als Tools für das Testen von APIs unzufrieden sind, suchen wir
nach einer besseren Lösung. Eine vielversprechende Alternative ist das [IntelliJ HTTP Client
Plugin][intellij-http-client-plugin]. Es bietet die Möglichkeit, HTTP-Requests zu definieren, auszuführen, und mittels
JavaScript die Korrektheit der Response zu überprüfen. Durch die nahtlose Integration in IntelliJ IDEA können die APIs
direkt aus der IDE angesprochen werden.

Als Ergänzung zum Plugin bietet IntelliJ IDEA das [HTTP Client CLI][http-client-cli] an. Dieses erlaubt das Ausführen
der konfigurierten HTTP-Requests von der Kommandozeile, was insbesondere zur Automatisierung der Tests in
Build-Pipelines von [CI/CD-Umgebungen][ci-cd] wichtig ist.

[insomnia]: /tools/insomnia
[postman]: https://www.postman.com
[intellij-http-client-plugin]: https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html
[http-client-cli]: https://www.jetbrains.com/help/idea/http-client-cli.html
[ci-cd]: /concepts-and-methods/ci-cd
