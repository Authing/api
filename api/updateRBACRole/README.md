此接口用于创建角色。

> Authing 支持基于角色的访问控制（RBAC），请先务必了解[分组和角色的区别](https://docs.authing.cn/authing/authorization/authorization/rbac#fen-zu-vs-quan-xian)，[点此了解如何接入](https://docs.authing.cn/authing/authorization/intergrate-rbac)。

#### 1. 说明

分组用于管理用户，角色用于配置权限；分组可以同时拥有一个或多个角色，加入到该分组中的用户会继承此分组内所有角色的权限。

<br/>

一个角色是一组权限的集合，如：角色 **Invoice Submitter** 具备以下权限：
- invoice:login
- invoice:create
- invoice:query
- invoice:list
- invoice:delete

#### 2. 参数

* input: UpdateRBACRoleInput
  * _id: 必填，角色 ID。
  * name: 必填，名称。
  * description: 选填，描述。

#### 3. 返回数据

* _id: 角色 ID

```javascript
{
  _id: '5e3823671655601485c7f8a2',
  name: 'Invoice Submitter',
  description: '具备开具发票相关权限',
  createdAt: '2020-02-03T21:43:03+08:00',
  updatedAt: '2020-02-03T21:43:03+08:00',
},
```
