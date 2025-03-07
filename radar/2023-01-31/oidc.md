---
title:    OIDC  
ring:     adopt  
quadrant: libraries-frameworks-and-languages
tags: [Security]
---

[OpenID Connect][oidc] (OIDC) ist ein offener Standard zur Federation von Benutzeridentitäten, basierend
auf [OpenID][openid] und [OAuth 2.0][oauth]. Die beiden Standards werden dabei unter anderem um die Möglichkeiten
erweitert, nicht nur die Identität des Benutzers zu überprüfen, sondern auch zusätzliche Informationen abzufragen (z.B.
Rollen und Berechtigungen). OIDC adressiert damit ein lange bestehendes Bedürfnis nach einem einfachen, webbasierten
Protokoll zum Austausch vertrauenswürdiger Authentifizierungs- und Autorisierungsinformationen. Frühere Standards wie
SAML oder generisches OAuth 2.0 haben sich als zu breit und komplex erwiesen, um eine universale Kompatibilität
sicherzustellen.

OIDC geniesst inzwischen sehr breiten Support, nicht zuletzt von der Open-Source IAM Platform [Keycloak][keycloak].

[oidc]: https://openid.net/connect/
[openid]: https://openid.net/specs/openid-authentication-2_0.html
[oauth]: https://oauth.net/2/
[keycloak]: /tools/keycloak
