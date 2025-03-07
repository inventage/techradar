---
title: Passkeys
ring: adopt
quadrant: concepts-and-methods
tags: [Security]
---

Als Alternative zu traditionellen Passwörtern bieten [Passkeys][passkeys] eine sicherere Möglichkeit zur Benutzerauthentisierung. Passkeys sind zufällig generierte Schlüsselpaare, die aus einem Private- und einem Public-Key bestehen.

Dabei wird nur der Public-Key auf Serverseite gespeichert. Der Private-Key verbleit immer auf einem Gerät des Benutzers
(z.B. einem Smartphone oder einem dedizierten [Hardware-Security-Module][hardware-security-module]). Die Gefahr von Data-Breaches auf Serverseite wird dadurch stark verringert, da mit dem Public-Key allein keine erfolgreiche Authentisierung möglich ist.

Immer mehr Dienste und Identity-Provider unterstützen Passkeys. Wir bei Inventage und dem [Keycloak Competence
Center][keycloak-competence-center] bieten auch bei unseren Kundenprojekten [Unterstützung für Passkeys][keycloak-competence-center-passkeys].

[passkeys]: https://passkeys.dev/
[hardware-security-module]: https://de.wikipedia.org/wiki/Hardware-Sicherheitsmodul
[keycloak-competence-center]: https://keycloak.ch
[keycloak-competence-center-passkeys]: https://passkey.keycloak.ch
