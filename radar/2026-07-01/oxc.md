---
title:    Oxc
ring:     assess
quadrant: tools
tags:     [Frontend]
---

[Oxc][oxc] (The JavaScript Oxidation Compiler) ist eine Sammlung hochperformanter JavaScript-Tools in Rust: Parser, Linter, Resolver, Transformer und Minifier. [Rolldown][rolldown], der neue Rust-basierte Bundler hinter [Vite][vite], baut auf Oxc auf.

Da wir [Vite][vite] in mehreren Projekten einsetzen, profitieren wir indirekt bereits von Oxc. Ob wir einzelne Oxc-Komponenten (z.B. den Linter als Ersatz für ESLint) direkt einsetzen, evaluieren wir separat.

[oxc]: https://oxc.rs/
[rolldown]: https://rolldown.rs/
[vite]: /tools/vite
