---
title:    Modularized Monolith  
ring:     adopt  
quadrant: concepts-and-methods
tags: [Backend, Architektur]
---

Bei [modularen Monolithen][modular-monolith] handelt es sich um einen Architekturstil, welcher die Unterteilung einer
Applikation in austauschbare Module mit minimalen Beziehungen vorsieht. Im Gegensatz zu [Microservices][microservices]
werden diese jedoch innerhalb derselben Runtime ausgeführt und verwenden dieselbe Datenbank. Dies setzt voraus, dass die
Module auf demselben Technologie-Stack implementiert werden und dieselben Dependencies verwenden.

Das Konzept adressiert damit einige der architektonischen und operationellen Nachteile der Microservice-Architektur bei
gleichzeitiger Bewahrung möglichst vieler der unbestrittenen Vorteile. So können beispielsweise Transaktionen über
Modulgrenzen hinweg bestehen, was das häufig aufwändige Kompensieren von Aktionen im Fehlerfall überflüssig macht.
Andererseits ist es ohne weiteres möglich, für Querschnittsfunktionen denselben Code wiederzuverwenden. Schliesslich
gestaltet sich der Betrieb aufgrund der geringeren Anzahl von Komponenten und Schnittstellen einfacher.

Modulare Monolithen sind jedoch auch mit Nachteilen behaftet. So geht die Fähigkeit verloren, Services unterschiedlichen
Release-Zyklen zu unterwerfen. Im Vergleich zu Microservices leidet die Skalierbarkeit, da nur die ganze Applikation — 
und nicht einzelne Services — deployed werden kann. Ausserdem ist es notwendig, die Modulgrenzen zu schützen. Dies kann
mittels Überwachung der Beziehungen zwischen Modulen als Teil des Build-Prozesses durch [ArchUnit][archunit] realisiert
werden.

[modular-monolith]: https://www.infoxicator.com/modular-monoliths-have-we-come-full-circle
[microservices]: /concepts-and-methods/microservice-architektur
[archunit]: /libraries-frameworks-and-languages/archunit
