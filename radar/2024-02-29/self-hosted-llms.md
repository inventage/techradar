---
title:    Self-hosted LLMs  
ring:     assess  
quadrant: platforms
---

Self-hosted LLMs bieten eine Alternative für den Betrieb von Large-Language-Models, die keine umfangreiche
GPU-Infrastruktur voraussetzen. Durch Techniken wie Quantisierung<sup>1</sup> und Projekte wie
[llama.cpp][llamaCpp]<sup>2</sup> können LLMs auf handelsüblicher Hardware mit reduziertem Speicherbedarf ausgeführt
werden. Über Plattformen wie [Hugging Face][huggingFace] oder [Ollama][ollama] können LLMs bezogen und lokal ausgeführt
werden.

Durch den Einsatz von Self-hosted LLMs streben wir eine Verbesserung des Datenschutzes an, denn diese können entweder auf firmeneigenen Servern oder lokal auf einem Laptop betrieben werden und somit vollständig offline genutzt werden.

Einerseits möchten wir die organisatorischen Möglichkeiten und Kosten für den Betrieb solcher LLMs abschätzen.
Andererseits ist es uns wichtig zu untersuchen, wie gut die Qualität dieser Self-hosted LLMs ist und ob sie in
bestimmten Anwendungsfällen mit kommerziellen Konkurrenten wie [ChatGPT][chatGPT] oder [Gemini][gemini] mithalten
können.

___
<small><sup>1</sup> Technik, um die Rechen- und Speicherkosten der Inferenz zu reduzieren, indem
Gewichte und Aktivierungen mit Datentypen geringerer Genauigkeit dargestellt werden (z.B. 8-Bit Ganzzahlen anstatt der
üblichen 32-Bit Fliesskommazahlen).</small><br>
<small><sup>2</sup> LLaMa-Architektur von Meta in effizientem C/C++, die eine leichtere und portable Alternative zu
den schwergewichtigen Frameworks bietet.</small>

[huggingFace]: https://huggingface.co
[ollama]: https://ollama.ai
[chatGPT]: https://chat.openai.com
[gemini]: https://gemini.google.com
[llamaCpp]: https://github.com/ggerganov/llama.cpp