---
title:    JavaScript Signals  
ring:     assess  
quadrant: libraries-frameworks-and-languages
---

Die [Signals Proposal für JavaScript][] führt ein standardisiertes Modell für reaktives State-Management ein. Signals sind Objekte, die Werte speichern und bei Änderungen automatisch Abonnenten benachrichtigen. Ziel ist es, reaktive Anwendungen zu ermöglichen, bei denen sich Zustandsänderungen effizient auf abhängige Teile auswirken.

In vielen Frameworks wie [SolidJS][solidjs], [Qwik][qwik], [Angular][angular] oder [Preact][preact] sind Signals heute schon ein zentrale Element des Reaktivitätsmodells. Bei anderen Frameworks sind sie entweder in Planung oder experimentell. Lit bietet experimentelle Unterstützung für [Signals][lit-signals] über Pakete aus den [Lit Labs][lit-labs].

[signals-proposal]: https://github.com/tc39/proposal-signals
[solidjs]: https://www.solidjs.com/tutorial/introduction_signals
[qwik]: https://qwik.dev/docs/components/state/
[angular]: https://angular.dev/guide/signals
[preact]: https://preactjs.com/guide/v10/signals/
[lit-signals]: https://lit.dev/docs/data/signals/
[lit-labs]: https://lit.dev/docs/libraries/labs/
