---
title:    Web Assembly  
ring:     assess  
quadrant: platforms
---

[WebAssembly][webassembly] definiert einen Bytecode, der performant innerhalb des Webbrowsers ausgeführt wird. Verschiedene
Programmiersprachen bieten WebAssembly als Compile-Target an, was die Möglichkeit bietet, bisher auf dem Server
laufenden Code im Browser auszuführen oder Code, der sowohl im Browser als auch auf dem Server ausgeführt werden muss,
nur einmal zu schreiben.

Mit [WASI][wasi] gibt es auch Bestrebungen, WebAssembly als Technologie für Server-Workloads zu etablieren. Die Integration von
WebAssembly-Runtimes in Container-Technologien wie Docker und OpenShift versprechen leichtgewichtige, portable
Ausführung, "serverless"<sup>1,2</sup>. Wie relevant diese Technologien für die Inventage sind, bleibt noch abzuschätzen.

____

<small><sup>1</sup>: [Why Containers and WebAssembly Work Well Together][docker-blog]</small><br>
<small><sup>2</sup>: [Red Hat and WebAssembly][redhat-blog]</small>

[webassembly]: https://webassembly.org/
[wasi]: https://github.com/WebAssembly/WASI
[docker-blog]: https://www.docker.com/blog/why-containers-and-webassembly-work-well-together/
[redhat-blog]: https://www.redhat.com/en/blog/red-hat-and-webassembly
