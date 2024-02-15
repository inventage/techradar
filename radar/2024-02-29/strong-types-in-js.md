---
title: Strong Types in JS without Typescript
ring: assess
quadrant: concepts-and-methods
---

In der sich schnell weiterentwickelnden Landschaft von JavaScript ist es eine Herausforderung, Codekorrektheit und
-wartbarkeit sicherzustellen, insbesondere bei Projekten mit zunehmender Grösse und Komplexität.
Während [TypeScript][typescript] robuste statische Typenprüfung für JavaScript bietet, erhöht sich, je nach eingesetztem
Framework, der Entwicklungsaufwand und die Komplexität des Builds erheblich. Hier könnte [JSDoc][jsdoc] als eine Art
Mittelweg zwischen reinem JavaScript und TypeScript eine Alternative bieten.

Insbesondere bei der Arbeit mit JavaScript-nativen Frameworks wie [React][react], oder beim Entwickeln von kleinen
Applikationen, die [komplett ohne Frontend-Build][buildless-web-development] auskommen, könnte JSDoc eine gute Wahl
sein. Anders als beim gängigen Umgang mit TypeScript, kann JSDoc gezielt für die Typdefinitionen eingesetzt werden, die
nicht automatisch von der IDE abgeleitet werden können. Durch minimalen zusätzlichen Kontext und Typinformationen wird
somit der IDE ermöglicht, genauere Codevorschläge und Typüberprüfungen anzubieten und letztendlich die
Entwicklungsarbeit zu erleichtern.

[typescript]: https://www.typescriptlang.org/
[jsdoc]: https://jsdoc.app/
[react]: https://react.dev/
[buildless-web-development]: ../concepts-and-methods/buildless-web-development.html