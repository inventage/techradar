---
title:    LangGraph
ring:     assess
quadrant: libraries-frameworks-and-languages
tags:     [AI]
---

Das Feld der Agent-Frameworks hat sich konsolidiert. [LangGraph][langgraph] ist seit Version 1.0 stabil, und das [Microsoft Agent Framework][agent-framework] hat im April 2026 mit Version 1.0 den GA-Status erreicht. Es löst AutoGen und Semantic Kernel ab und unterstützt neben Python auch .NET.

Für unsere Java- und Kotlin-Projekte ist inzwischen auch das JVM-Ökosystem eine ernsthafte Option. [Embabel][embabel], das Framework von Spring-Gründer Rod Johnson, ist im Juli 2026 in Version 1.0 erschienen und baut auf Spring AI auf. JetBrains integriert sein Kotlin-Framework [Koog][koog] ebenfalls mit Spring AI, und [LangChain4j][langchain4j] bringt ein eigenes Modul für Agent-Workflows mit. Agents lassen sich so direkt in bestehende [Spring-Boot][spring-boot]-Applikationen integrieren, ohne separaten Python-Service.

Welches Framework sich für eine [LLM-Integration][llm-agents] eignet, hängt damit stärker vom bestehenden Stack ab als von einzelnen Features. Wir beobachten die JVM-Frameworks parallel zu LangGraph und wollen sie in einem passenden Projekt vergleichen.

[langgraph]: https://github.com/langchain-ai/langgraph
[agent-framework]: https://learn.microsoft.com/en-us/agent-framework/
[embabel]: https://embabel.com/
[koog]: https://github.com/JetBrains/koog
[langchain4j]: https://docs.langchain4j.dev/
[spring-boot]: /libraries-frameworks-and-languages/spring-boot
[llm-agents]: /concepts-and-methods/llm-agents
