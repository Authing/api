> [点此了解如何接入组织机构管理](https://docs.authing.cn/authing/authorization/intergrate-organization-structure)。

此接口用于判断某个 Group 是否为某组织机构的根节点。

#### 1.说明

一个组织结构节点是一个 Group，参数：
- input:
  - groupId: 该节点的 Group ID。
  - orgId: 组织机构 ID
> 了解如何创建、管理 Group，请见 「权限控制」。

<br/>

#### 2.返回数据

一个布尔值。
