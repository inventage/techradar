---
title: Passkeys
ring: adopt
quadrant: concepts-and-methods
---

Als Ersatz für traditionelle Passwörter bieten [Passkeys][passkeys] eine sicherere Alternative zur
Benutzer-Authentisierung. Passkeys sind zufällig generierte Schlüsselpaare (Private & Public Key) und nur der Public-Key
wird auf Serverseite gespeichert wird. Die ausgehende Gefahr von Data-Breaches auf Serverseite wird somit massiv
verringert. Der Private-Key verbleit auf dem Device vom User, typischerweise auf
einem [Hardware-Security-Module][hardware-security-module] (HSM).

Immer mehr Dienste und Identity-Provider unterstützen Passkeys und wir bei Inventage und
dem [Keycloak Competence Center][keycloak-competence-center]
integrieren [Support für Passkeys][keycloak-competence-center-passkeys] auch bei unseren Kundenprojekten.

[passkeys]: https://passkeys.dev/
[hardware-security-module]: https://de.wikipedia.org/wiki/Hardware-Sicherheitsmodul
[keycloak-competence-center]: https://keycloak.ch
[keycloak-competence-center-passkeys]: https://passkey.keycloak.ch
