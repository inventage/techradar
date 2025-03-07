---
title:    Codequaliät  
ring:     adopt  
quadrant: concepts-and-methods
tags:     []
---

Erfolgreiche Software zeichnet sich nicht nur durch ihre Funktionalität oder die Anzahl Features aus, sondern soll auch
eine hohe Codequalität vorweisen. Code mit hoher Qualität ist **weniger fehleranfällig** und erfordert dadurch weniger
Fehlerbehebung, was Zeit und Geld spart. Die Software läuft **zuverlässiger** mit weniger Ausfällen, wovon sowohl die
Benutzer als auch die Kunden profitieren. Gut strukturierter Code ist **wartbarer** und lässt sich leichter
**erweitern** und **skalieren**, was für wachsende Anforderungen unverzichtbar ist. Gut lesbarer Code lässt sich
einfacher verstehen und erleichtert dadurch die Zusammenarbeit im **Team**. Nicht zuletzt steigert eine hohe
Codequalität auch die **Sicherheit** der Software.

Zur Gewährleistung einer hohen Codequalität verwenden wir statische Code-Analyse-Tools (z.B. [Checkstyle][checkstyle],
[SpotBugs][spotbugs], [PMD][pmd], [Hadolint][hadolint], [ESLint][eslint]), die uns dabei unterstützen den Code nach
möglichen Fehlern und Problemen zu untersuchen und uns auf Best Practices aufmerksam machen. Mittels Unittests stellen
wir sicher, dass der Programmcode korrekt funktioniert und dass Änderungen nicht unbeabsichtigt negative Auswirkungen
haben. Sowohl statische Code-Analyse-Tools als auch Unittests unterstützen uns bei der Entwicklung direkt aus der IDE
heraus und werden zusätzlich bei jedem Build ausgeführt, um frühzeitig auf allfällige Fehler und Probleme hinzuweisen.

Die Nachvollziehbarkeit von Code-Änderungen wird über die Versionsverwaltung [Git][git] sichergestellt. Änderungen,
welche für die Produktion bestimmt sind, werden mittels [Pull Requests][pull-request] und [Code-Reviews][code-reviews]
diskutiert, bevor sie appliziert werden.

[checkstyle]: https://checkstyle.github.io
[spotbugs]: https://spotbugs.github.io/
[pmd]: https://pmd.github.io/
[hadolint]: https://hadolint.github.io/hadolint/
[eslint]: https://eslint.org/
[git]: https://git-scm.com/
[pull-request]: https://www.atlassian.com/git/tutorials/making-a-pull-request
[code-reviews]: https://www.atlassian.com/agile/software-development/code-reviews
