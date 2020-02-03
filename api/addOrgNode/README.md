> [点此了解如何接入组织机构管理](https://docs.authing.cn/authing/authorization/intergrate-organization-structure)。

此接口用于添加组织机构节点。

在 Authing 中，组织结构的一个节点对应一个 Group，所以此接口需要：
- 指定此节点对应的 Group ID
- 为了确定此节点在组织机构树中的位置，需要指定其父节点的 Group ID

> 了解如何创建、管理 Group，请见 「权限控制」。