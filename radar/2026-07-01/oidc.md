---
title:    SSO (OIDC)
ring:     adopt
quadrant: concepts-and-methods
tags:     [Security]
---

[OpenID Connect][oidc] (OIDC) bildet in praktisch allen unseren Projekten das Fundament für Single-Sign-On. Wir wickeln Authentifizierung und Autorisierung über einen zentralen, vertrauenswürdigen Identity-Provider ab, in den meisten Fällen über [Keycloak][keycloak]. Anwendungen delegieren die Anmeldung, statt Benutzerkonten und Passwörter selbst zu verwalten.

Gegenüber älteren Ansätzen wie SAML ist OIDC schlank und webnativ, was die Integration über unterschiedliche Frontends und Services hinweg vereinfacht. Weil das Protokoll breit unterstützt wird, lassen sich auch externe Identitäten und moderne Verfahren wie [Passkeys][passkeys] ohne Bruch anbinden.

[oidc]: https://openid.net/developers/how-connect-works/
[keycloak]: /platforms/keycloak
[passkeys]: /concepts-and-methods/passkeys
