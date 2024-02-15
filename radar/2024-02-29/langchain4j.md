---
title: LangChain4j
ring: assess
quadrant: libraries-frameworks-and-languages
---

Bei der Integration eines Sprachmodells (LLMs) in eine Applikation, muss diese die KI mit natürlicher Sprache steuern.
Dabei ist es von Vorteil, wenn nicht nur Wissen innerhalb des Sprachmodells, sondern auch Informationen aus dem Kontext
der Applikation verwendet werden können. um diese Aufgaben zu vereinfachen, bietet [LangChain4j][langchain4j] zwei 
Mechanismen an: Tools und Document-Stores.

Der Einsatz von Tools ermöglicht dem Sprachmodell die Nutzung von zusätzlichen Systemen. Dies geschieht über die
Deklaration der zur Verfügung stehenden Funktionen (z.B. Statusabfrage einer Bestellung). Dazu gehört, wann eine
Funktion mit welchen Parametern aufgerufen und was mit dem Resultat gemacht werden soll.

Bei Document-Stores handelt es sich um einen zusätzlichen Speicher. Aus diesem kann die Applikation vorgängig
aufbereitete Daten beziehen und als Prompt-Zusatz verwenden. Das Sprachmodell kann so neben ihrem internen Wissen auch
externe Daten mitberücksichtigen.<sup>1</sup>

Eine einheitliche API, die verschiedene Anbieter von Sprachmodellen vereint, erleichtert den Einsteig und machen den
Einsatz unterschiedlicher Modelle effizienter. Zudem gibt es Integrationen für [Quarkus][quarkus-langchain4j] und
[Spring Boot][spring-boot-langchain4j].

In verschiedenen Prototyp-Einsätzen (z.B. Vorschläge für die Beantwortung und Verarbeitung von Kundenanfragen, Abfrage
von firmeninternem Wissen) haben bereits erstaunliche Resultate damit erzielen können.

___

<small><sup>1</sup>: [Retrieval-Augmented Generation][rag] (RAG)</small>

[langchain4j]: https://github.com/langchain4j/langchain4j
[rag]: https://aws.amazon.com/de/what-is/retrieval-augmented-generation
[quarkus-langchain4j]: https://quarkus.io/extensions/io.quarkiverse.langchain4j/quarkus-langchain4j-core
[spring-boot-langchain4j]: https://github.com/langchain4j/langchain4j-spring

