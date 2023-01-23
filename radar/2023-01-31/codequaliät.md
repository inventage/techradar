---
title:    Codequaliät  
ring:     adopt  
quadrant: concepts-and-methods
---

Erfolgreiche Software zeichnet sich nicht nur durch ihre Funktionalität oder die die Anzahl Features aus, sondern sollte
auch eine hohe Codequaliät vorweisen. Code mit hoher Qualität ist **weniger fehleranfällig** und erfordert dadurch
weniger Fehlerbehebung, was Zeit und Geld spart. Die Software läuft **zuverlässiger** und wird weniger Ausfälle
verursachen, wodurch die Benutzer und Kunden profitieren. Gut strukturierter Code is **wartbar** und lässt sich
leiter **erweitern** und **skalieren**, was bei wachsenden Anforderungen zu Gute kommt. Gut lesbarer Code lässt sich
einfacher verstehen und erleichtert dadurch die Zusammenarbeit im **Team**. Nicht zuletzt steigert eine hohe Codequaliät
auch die **Sicherheit** der Software.

Um eine hohe Codequaliät zu gewährleisten verwenden wir verschiedene statische
Code-Analyse-Tools ([Checkstyle][checkstyle], [SpotBugs][spotbugs], [PMD][pmd], [Hadolint][hadolint], [ESLint][eslint]),
welche uns dabei unterstützen den Code nach möglichen Fehlern und Problemen zu untersuchen und uns auf Best Practices
aufmerkam machen. Über Unit-Tests stellen wir sicher, dass der Programmcode korrekt funktioniert und dass Änderungen
nicht unbeabsichtigt negative Auswirkungen haben. Sowohl statische Code-Analyse-Tools sowie Unit-Tests unterstützen uns
bei der Entwicklung direkt aus der IDE heraus und werden zusätzlich bei jedem Build ausgeführt, um frühzeitig auf
allfällige Fehler und Probleme hinzuweisen.

Die Nachvollziebarkeit von Code Änderungen wird über das Versionierungs Tool [Git][git] sichergestellt. Änderungen,
welche für die Produktion bestimmt sind, werden über [Pull Requests][pr]
und [Code-Reviews][code-reviews] diskutiert, bevor sie appliziert werden.

Um eine hohe Codequaliät zu erreichen braucht es meist einen zusätzlichen Aufwand, wir sind aber davon überzeugt, dass
sich dieser Aufwand lohnt und die Investition sich langfristig auszahlt.

[checkstyle]: https://checkstyle.github.io
[spotbugs]: https://spotbugs.github.io/
[pmd]: https://pmd.github.io/
[hadolint]: https://hadolint.github.io/hadolint/
[eslint]: https://eslint.org/
[git]: https://git-scm.com/
[pr]: https://www.atlassian.com/git/tutorials/making-a-pull-request
[code-reviews]: https://www.atlassian.com/agile/software-development/code-reviews