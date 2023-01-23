---
title:    Modularized Monolith  
ring:     adopt  
quadrant: concepts-and-methods
---

Bei [Modularen Monolithen][modular-monolith] handelt es sich um einen Architekturstil, welcher die Unterteilung einer
Applikation in austauschbare Module mit minimalen Beziehungen vorsieht. Im Gegensatz
zu [Microservices](microservice-architektur.html)
werden diese jedoch innerhalb derselben Runtime ausgeführt und verwenden dieselbe Datenbank. Dies setzt voraus, dass die
Module auf demselben Technologie-Stack implementiert werden und dieselben Dependencies verwenden.

Das Konzept versucht damit einige der architektonischen und operationellen Nachteile der Microservice-Architektur zu
adressieren und dabei möglichst viele der unbestrittenen Vorteile zu bewahren. So können beispielsweise Transaktionen
über Modulgrenzen hinweg bestehen, was das häufig aufwändige Kompensieren von Aktionen im Fehlerfall überflüssig macht.
Andererseits ist es ohne weiteres möglich, für Querschnittsfunktionen denselben Code wiederzuverwenden. Schliesslich
gestaltet sich der Betrieb aufgrund der geringeren Anzahl von Komponenten und Schnittstellen einfacher.

Modulare Monolithen sind jedoch auch mit Nachteilen behaftet. So geht die Fähigkeit verloren, Services unterschiedlichen
Release-Zyklen zu unterwerfen. Im Vergleich zu Microservices leidet die Skalierbarkeit, da nur die ganze Applikation –
und nicht einzelne Services – parallel depoloyed werden kann. Zu guter Letzt ist es notwendig, die Modulgrenzen zu
schützen. Dies kann mittels Überwachung der Beziehungen zwischen Modulen als Teil des Build-Prozesses durch ArchUnit (->
ArchUnit) realisiert werden.

[modular-monolith]: https://www.infoxicator.com/modular-monoliths-have-we-come-full-circle
