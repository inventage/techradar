---
title:    Infrastructure as Code  
ring:     adopt  
quadrant: concepts-and-methods
tags:     [DevOps]
---

[Infrastructure as Code][iac] (IaC) ist ein Konzept mit dem Ziel, die Bereitstellung und das Management von
Infrastrukturkomponenten (Server, Cluster, etc.) in Code abzubilden und durch automatisierte Prozesse auszuführen. Durch
die Versionierung vom Code in Git sind alle Änderungen an der Infrastruktur protokolliert und verhindern so das
Aufkommen von Configuration Drift und [Snowflake-Systemen][snowflake]. Durch Automatisierung und entsprechendes Tooling
(z.B. [Terraform][terraform]) können Best Practices wie Testing oder [CI/CD][cicd] aus der Software-Entwicklung auch auf
Infrastrukturkomponenten angewendet werden. Unserer Erfahrung nach können mit IaC und Terraform neue Umgebungen
schneller und reproduzierbarer bereitgestellt werden.

[iac]: https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac
[snowflake]: https://martinfowler.com/bliki/SnowflakeServer.html
[terraform]: https://www.terraform.io/
[cicd]: /concepts-and-methods/ci-cd

