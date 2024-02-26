---
title:    Vite  
ring:     trial  
quadrant: tools
---

Die schnellen Kaltstarts und Reloads<sup>1</sup> von [Vite][vite] haben uns überzeugt, diesen Dev-Server und Bundler
weiterzuverfolgen. Über das Plugin-System von Vite können wir uns das Tool leicht auf unsere Bedürfnisse anpassen
<sup>2</sup>.

Rund um dieses Plugin-System ist ein aktives Ökosystem entstanden, aus dem unter anderem das vielversprechende
Projekt [Zero Config PWA][zero-config-pwa] entstanden ist. Durch die aktive Community werden verschiedene
Template-Engines und Frameworks out-of-the-box unterstützt. Besonders gut gefallen uns die
Kickstarter-Templates ([Native][native] und [Community][community]). Damit lassen sich innerhalb kürzester Zeit
komplette Entwicklungsumgebungen für Webanwendungen erstellen.

Ausserdem passt Vites Philosophie "[Pushing the Modern Web][pushing-the-modern-web]" zu unseren Einschätzungen zu
[Modern Web APIs][use-the-web-platform] und [Buildless Web Development][buildless-web-development].

___

<small><sup>1</sup> Ermöglicht wird dies durch Technologien wie [ESM][esm], [HMR][hmr]
und [Dependency-Pre-Bundling][dependency-pre-building], welche die Arbeitslast für Dev-Server und Browser
reduzieren.</small><br>
<small><sup>2</sup> Basierend auf [Rollup][rollup].</small>

[vite]: https://vitejs.dev
[esm]: https://vitejs.dev/guide/why.html#slow-server-start
[hmr]: https://vitejs.dev/guide/features.html#hot-module-replacement
[dependency-pre-building]: https://vitejs.dev/guide/dep-pre-bundling.html#dependency-pre-bundling
[rollup]: https://rollupjs.org
[zero-config-pwa]: https://github.com/vite-pwa/vite-plugin-pwa
[native]: https://github.com/vitejs/vite/tree/main/packages/create-vite
[community]: https://github.com/vitejs/awesome-vite#templates
[pushing-the-modern-web]: https://vitejs.dev/guide/philosophy.html#pushing-the-modern-web
[use-the-web-platform]: ../concepts-and-methods/use-the-web-platform.html
[buildless-web-development]: ../concepts-and-methods/buildless-web-development.html
