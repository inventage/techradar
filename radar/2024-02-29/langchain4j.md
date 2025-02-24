---
title: LangChain4j
ring: assess
quadrant: libraries-frameworks-and-languages
---

Bei der Integration eines Sprachmodells (LLMs) in eine Applikation, muss diese die AI mit natürlicher Sprache steuern.
Dabei sollten nicht nur Informationen innerhalb des Sprachmodells, sondern auch aus dem Kontext der Applikation genutzt werden können. Um diese Aufgaben zu vereinfachen, bietet [LangChain4j][langchain4j] zwei 
Mechanismen an: Tools und Document-Stores.

Durch den Einsatz von Tools kann das Sprachmodell auf zusätzliche Systeme zugreifen. Hierfür werden die verfügbaren Funktionen
deklariert, z.B. die Statusabfrage einer Bestellung. Dabei wird festgelegt, wann eine Funktion
mit welchen Parametern aufgerufen wird und was mit dem Ergebnis geschehen soll.

Bei Document-Stores handelt es sich um einen zusätzlichen Speicher. Aus diesem kann die Applikation vorgängig
aufbereitete Daten beziehen und als Prompt-Zusatz verwenden. Das Sprachmodell kann so neben internem Wissen auch
externe Daten mitberücksichtigen.<sup>1</sup>

Eine einheitliche API, die verschiedene Anbieter von Sprachmodellen vereint, erleichtert den Einstieg und macht den
Einsatz unterschiedlicher Modelle effizienter. Zudem gibt es Integrationen für [Quarkus][quarkus-langchain4j] und
[Spring Boot][spring-boot-langchain4j].

In verschiedenen Prototyp-Einsätzen haben wir bereits erstaunliche Resultate erzielt, zum Beispiel bei der Beantwortung
und Verarbeitung von Kundenanfragen sowie bei der Abfrage von firmeninternem Wissen.

___

<small><sup>1</sup> [Retrieval-Augmented Generation][rag] (RAG)</small>

[langchain4j]: https://github.com/langchain4j/langchain4j
[rag]: https://aws.amazon.com/de/what-is/retrieval-augmented-generation
[quarkus-langchain4j]: https://quarkus.io/extensions/io.quarkiverse.langchain4j/quarkus-langchain4j-core
[spring-boot-langchain4j]: https://github.com/langchain4j/langchain4j-spring

