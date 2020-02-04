此接口用于撤回用户某角色。

> Authing 支持基于角色的访问控制（RBAC），请先务必了解[分组和角色的区别](https://docs.authing.cn/authing/authorization/authorization/rbac#fen-zu-vs-quan-xian)，[点此了解如何接入](https://docs.authing.cn/authing/authorization/intergrate-rbac)。

#### 1. 说明

分组用于管理用户，角色用于配置权限；分组可以同时拥有一个或多个角色，加入到该分组中的用户会继承此分组内所有角色的权限。

#### 2. 参数

* input: RevokeRBACRoleFromUserInput
  * userId: 必填，用户 ID。
  * roleId: 必填，角色 ID。

#### 3. 返回数据

* _id: 分组 ID

```javascript
{
  _id: '5e3823671655601485c7f8a2',
  name: 'Invoice Submitter',
  description: '具备开具发票相关权限',
  createdAt: '2020-02-03T21:43:03+08:00',
  updatedAt: '2020-02-03T21:43:03+08:00',
}
```
