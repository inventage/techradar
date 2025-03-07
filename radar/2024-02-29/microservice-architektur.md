---
title:    Microservice-Architektur  
ring:     adopt  
quadrant: concepts-and-methods
tags:     [Backend, Architecture]
---

Unsere Erfahrungen des letzten Jahres bestärken uns im Einsatz von [Microservices][microservices]. Sie ermöglichen eine
effiziente Entwicklung und gute Testbarkeit komplexer Systeme durch deren Aufteilung in unabhängige und überprüfbare
Dienste.

Die Koordination und Kommunikation zwischen den Diensten stellt jedoch eine Herausforderung dar. Jeder zusätzliche
Microservice bedeutet ein Mehr an Komplexität, sowohl im Betrieb als auch in der Entwicklung. Der Frage,
welche Teile einer Applikation als eigenständige Dienste ausgeführt werden sollen, kommt deshalb eine grosse Bedeutung
zu.

Um die Anzahl der Dienste überschaubar zu halten, ist es nicht zwingend notwendig, diese so klein wie möglich zu
gestalten, wie es der Begriff "Microservice" suggeriert. Es kann sich auch als Vorteil erweisen, ein System zunächst als
Monolith zu bauen, um es später in Microservices aufzuteilen. Da die einzelnen Dienste erst voneinander getrennt werden,
wenn das System und dessen Anforderungen etwas besser bekannt sind, können voreilig gezogene Grenzen vermieden werden,
welche den Betrieb und die Weiterentwicklung des Systems erschweren würden. Eine solch organischer Entwicklungsansatz
minimiert die Herausforderungen und nutzt dennoch die Vorteile von Microservices.

[microservices]: https://microservices.io/
