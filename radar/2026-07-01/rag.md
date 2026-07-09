---
title:    RAG
ring:     assess
quadrant: concepts-and-methods
tags:     [AI]
---

[Retrieval-Augmented-Generation][rag] (RAG) kombiniert semantische Suche über Vektordatenbanken mit LLM-basierter Textgenerierung. Der Retrieval-Schritt findet Dokumente anhand ihrer Bedeutung statt anhand von Keywords. Der Generation-Schritt formuliert daraus eine kontextbezogene Antwort inklusive Quellenangaben.

Typische Anwendungsfälle sind interne Wissensdatenbanken, Dokumentationssuche oder Kundenservice-Assistenten. In internen Pilotprojekten haben wir Potenzial gesehen und beobachten das Feld weiter im Kontext von [LLM-Integration][llm-integration] und [Agentic-Engineering][agentic-engineering]. Die Qualität hängt stark von der Aufbereitung der Quelldaten, der Wahl der Embedding-Modelle und der Chunk-Strategie ab. Wir wollen RAG in einem konkreten Projekt produktiv evaluieren und gegen einfachere Ansätze (z.B. direktes Befüllen des Kontextfensters mit relevanten Dokumenten) abgleichen.

[rag]: https://en.wikipedia.org/wiki/Retrieval-augmented_generation
[llm-integration]: /concepts-and-methods/llm-agents
[agentic-engineering]: /concepts-and-methods/agentic-engineering
