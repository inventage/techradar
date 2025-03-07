---
title:    Intellij HTTP-Client-Plugin
ring:     adopt
quadrant: tools
tags: [Testing]
---

Nachdem wir das [IntelliJ HTTP-Client-Plugin][intellij-http-client-plugin] sowie das [HTTP-Client-CLI][http-client-cli] in verschiedenen Projekten getestet haben, verschieben wir dieses in den Verbreiten-Ring (adopt).

Die Tatsache, dass die Definition der HTTP-Requests, sowie die Verarbeitung der HTTP-Responses als `.http`-Dateien direkt im Projekt-Repository geteilt werden können, überzeugt. Die Requests einer `.http`-Datei können einzeln oder in Serie direkt von [IntelliJ IDEA][intellij] ausgeführt werden. Dies steht im Gegensatz zu Insomnia oder Postman, wo jeweils nur ein Export aus den entsprechenden Tools im Projekt-Repository abgelegt werden kann und ein Import erforderlich ist, um die Requests erneut auszuführen. Insbesondere können die `.http`-Dateien auch als Dokumentation von benutzten oder entwickelten APIs verwendet werden.

[intellij-http-client-plugin]: https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html
[http-client-cli]: https://www.jetbrains.com/help/idea/http-client-cli.html
[intellij]: https://www.jetbrains.com/de-de/idea/
