---
title:    Infrastructure-As-Code  
ring:     adopt  
quadrant: concepts-and-methods
---

[Infrastructure as code (IaC)][iac] ist ein Konzept mit dem Ziel die Bereitstellung und das Management von
Infrastrukturkomponenten (Server, Cluster, etc.) in Code abzubilden, und durch automatisierte Prozesse auszuführen.
Durch Versionierung vom Code in Git sind alle Änderungen an der Infrastruktur protokolliert und verhindern so auch das
Aufkommen von Configuration Drift und Snowflake Systemen. Durch Automatisierung und entsprechdes Tooling (z.B.
[Terraform][terraform]) können Best-Practises wie Testing oder CICD aus der Software-Entwicklung auch auf
Infastruktur-Komponenten angewendet werden. Unserer Erfahrung nach können mit IaC und Terraform neue Umgebungen viel
schneller und reproduzierbarer bereitgestellt werden.

[iac]: https://www.insign.ch/services/web-und-mobile/mobile-apps/hybride-mobile-apps/
[terraform]: https://www.terraform.io/