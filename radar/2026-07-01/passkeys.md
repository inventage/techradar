---
title:    Passkeys
ring:     adopt
quadrant: concepts-and-methods
tags:     [Security]
---

Mit dem November-2025-Update (KB5068861) für Windows 11 24H2 und 25H2 unterstützt Windows endlich auch Drittanbieter-Passkey-Manager wie [1Password][1password] und [Bitwarden][bitwarden] nativ über ein System-Plugin. Damit entfällt eine der letzten praktischen Hürden für den unternehmensweiten Einsatz, da unsere Endnutzer Passkeys auf allen Plattformen einheitlich nutzen können.

In [Keycloak][keycloak] sind Passkeys seit Version 26.4 (September 2025) kein Preview-Feature mehr. Sie lassen sich ohne Anpassungen am Standard-Browser-Flow aktivieren, und der Conditional-Credential-Authenticator überspringt die 2FA, wenn bereits per Passkey eingeloggt wurde. Das reduziert den Integrationsaufwand in unseren Kundenprojekten spürbar.

[1password]: https://1password.com/
[bitwarden]: https://bitwarden.com/
[keycloak]: /platforms/keycloak
