---
title:    Microservice-Architektur
ring:     adopt
quadrant: concepts-and-methods
tags:     [Backend, Architecture]
---

In der Praxis hat sich bei uns bewährt, nicht möglichst kleine Services zu schneiden, sondern grössere, fachlich kohärente Einheiten zu bilden. Wir orientieren uns dabei zunehmend am Konzept der [Self-Contained Systems][scs]: Jeder Service verantwortet eine abgeschlossene fachliche Domäne inklusive UI, Logik und Datenhaltung. Das reduziert Abhängigkeiten zwischen den Diensten und vereinfacht Entwicklung und Betrieb.

[scs]: https://scs-architecture.org/
