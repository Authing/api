此接口用于查询角色中包含的权限.

> Authing 支持基于角色的访问控制（RBAC），请先务必了解[分组和角色的区别](https://docs.authing.cn/authing/authorization/authorization/rbac#fen-zu-vs-quan-xian)，[点此了解如何接入](https://docs.authing.cn/authing/authorization/intergrate-rbac)。

#### 1. 说明

分组用于管理用户，角色用于配置权限；分组可以同时拥有一个或多个角色，加入到该分组中的用户会继承此分组内所有角色的权限。

<br/>

#### 2. 参数

* _id: 必填，角色 ID。

#### 3. 返回数据

- permissions:
  - totalCount: 总数目。
  - list: 当前页权限列表。

```javascript
{
  permissions: {
    totalCount: 1,
    list: [
      {
        _id: '5e3823671655601485c7f8a2',
        name: 'email:login',
        description: '登录邮箱权限',
        createdAt: '2020-02-03T21:43:03+08:00',
        updatedAt: '2020-02-03T21:43:03+08:00',
      }
    ]
  }
}
```
