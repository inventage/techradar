---
title:    Self-hosted LLMs  
ring:     assess  
quadrant: concepts-and-methods
---

Self-Hosted LLMs bieten eine vielversprechende Alternative für den Betrieb von LLMs, die normalerweise eine umfangreiche
GPU-Infrastruktur erfordern. Durch Techniken wie Quantisierung<sup>1</sup> und Projekte wie llama.cpp<sup>2</sup> können
LLMs auf handelsüblicher Hardware mit reduziertem Speicherbedarf ausgeführt werden. Über Plattformen
wie [Hugging Face][hugging-face] oder [Ollama][ollama] können LLMs bezogen und lokal ausgeführt werden.

Durch den Einsatz von Self-Hosted LLMs versprichen wir uns eine Verbesserung des Datenschutzes, da diese entweder auf
firmeneigenen Servern oder sogar lokal auf einem Laptop betrieben werden können, wodurch sie vollständig offline genutzt
werden können.

Einerseits möchten wir die organisatorischen Möglichkeiten und Kosten für den Betrieb solcher LLMs abschätzen.
Andererseits ist es uns wichtig zu untersuchen, wie gut die Qualität dieser Self-Hosted LLMs ist und ob sie in
bestimmten Anwendungsfällen mit Konkurrenten wie [ChatGPT][chatGPT] oder [Gemini][gemini] mithalten können.

___
<small><sup>1</sup> Quantisierung ist eine Technik, um die Rechen- und Speicherkosten der Inferenz zu reduzieren, indem
Gewichte und Aktivierungen mit Datentypen geringerer Genauigkeit dargestellt werden (z.B. 8-Bit Ganzzahlen statt der
üblichen 32-Bit Fliesskommazahlen).</small><br>
<small><sup>2</sup> Implementiert die LLaMa-Architektur von Meta in effizientem C/C++ und bietet damit eine leichtere
und portablere Alternative zu den schwergewichtigen Frameworks.</small>

[hugging-face]: https://huggingface.co/
[ollama]: https://ollama.ai/
[chatGPT]: https://chat.openai.com/
[gemini]: https://gemini.google.com
