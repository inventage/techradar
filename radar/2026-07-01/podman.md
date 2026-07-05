---
title:    Podman
ring:     adopt
quadrant: tools
tags:     [DevOps]
---

[Podman][podman] hat sich in mehreren Teams als bevorzugte Container-Runtime für die lokale Entwicklung etabliert. Der grösste Vorteil gegenüber Docker ist der daemonlose, rootless Ansatz. Container laufen ohne erhöhte Privilegien und ohne dauerhaft laufenden System-Daemon, was sowohl die Sicherheit als auch die Isolation gegenüber dem Host verbessert. Besonders praktisch ist das für [Agentic Engineering][agentic-engineering], wo Coding Agents Container starten dürfen, ohne aus ihrer Sandbox ausbrechen zu können.

Die Kompatibilität zu unserer Zielinfrastruktur bleibt dabei gewahrt. Podman erzeugt OCI-konforme Images, die ohne Anpassung auf [Kubernetes][kubernetes]-Clustern laufen. CRI-O, die Runtime unter [OpenShift][openshift], teilt mit Podman dieselben Container-Bibliotheken (`containers/storage`, `containers/image`). Unterschiede zwischen lokaler Entwicklung und Produktion bleiben dadurch klein.

[podman]: https://podman.io/
[agentic-engineering]: /concepts-and-methods/agentic-engineering
[kubernetes]: /platforms/kubernetes
[openshift]: https://www.redhat.com/en/technologies/cloud-computing/openshift
