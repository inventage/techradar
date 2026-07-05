---
title:    Solid
ring:     trial
quadrant: concepts-and-methods
tags:     [Architecture]
blog:
  title: "Solid: Was wäre, wenn deine Daten dir gehören?"
  url:   https://blog.inventage.com/blogs/solid-daten-gehoeren-dir/
---

Mit [ImmuSuisse][immusuisse] haben wir [Solid][solid] erstmals in einem ausgelieferten Produkt eingesetzt. Die iOS-App ist ein digitales Impfbüchlein, das die Daten standardmässig lokal auf dem Gerät hält und auf Wunsch mit einem persönlichen Solid Pod synchronisiert. Die Datenhoheit bleibt damit bei den Nutzenden, ohne dass wir eine eigene Backend-Infrastruktur betreiben müssen.

Die Umsetzung zeigt, dass das Ökosystem für mobile Clients tragfähig ist. Die Auswahl an stabilen Pod-Providern für Endkunden bleibt aber überschaubar, weshalb wir Solid in der App nur als optionale Synchronisation anbieten. Für Anwendungen, in denen Nutzende ihre Daten selbst kontrollieren sollen und ein klassisches Backend mehr Last als Nutzen bringt, ist Solid für uns eine praktikable Option geworden.

[solid]: https://solidproject.org/
[immusuisse]: https://immusuisse.ch/
