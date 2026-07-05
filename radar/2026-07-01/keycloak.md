---
title:    Keycloak
ring:     adopt
quadrant: platforms
tags:     [Security]
---

[Keycloak][keycloak] ist in vielen unserer Kundenprojekte als zentrale IAM-Plattform im Einsatz. Über das [Keycloak Competence Center Switzerland][keycloak-ch] bieten wir Beratung, Betrieb und Entwicklung an. Wer keinen eigenen Betrieb aufbauen will, kann auf [Managed Keycloak][managed] oder [Keycloak as a Service][kaas] zurückgreifen.

Das neue Versioning-Schema (vier rückwärtskompatible Minor-Releases pro Jahr, Breaking Changes nur noch in seltenen Major-Releases) vereinfacht die Upgrade-Planung für uns und unsere Kunden.

Auf Feature-Seite sind zwei Neuerungen hervorzuheben: [Passkeys][passkeys] werden neu nativ unterstützt, nachdem sie lange ein Preview-Feature waren. Wir haben frühzeitig eigene Passkey-Erweiterungen mit verbesserter UX entwickelt (siehe [keycloak.ch][keycloak-ch]) und können diese Flows mit der nativen Integration schlanker gestalten. Neu hinzugekommen ist auch die Organizations-Unterstützung, mit der sich mehrere Organisationen mit eigenen Mitgliedern und Identity Providern innerhalb eines Realms abbilden lassen. Das ist für unsere B2B-Kundenprojekte relevant. Mit Workflows kommt zudem ein (noch experimentelles) Feature zur Automatisierung administrativer Aufgaben wie dem Deaktivieren inaktiver Benutzer hinzu.

[keycloak]: https://www.keycloak.org/
[keycloak-ch]: https://keycloak.ch/
[managed]: https://keycloak.ch/offering/managed-keycloak/
[kaas]: https://servala.com/service/keycloak/?source=keycloak_ch
[passkeys]: /concepts-and-methods/passkeys
