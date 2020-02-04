此接口用于查询用户拥有的分组列表。

> Authing 支持基于角色的访问控制（RBAC），请先务必了解[分组和角色的区别](https://docs.authing.cn/authing/authorization/authorization/rbac#fen-zu-vs-quan-xian)，[点此了解如何接入](https://docs.authing.cn/authing/authorization/intergrate-rbac)。

#### 1. 说明

分组用于管理用户，角色用于配置权限；分组可以同时拥有一个或多个角色，**加入到该分组中的用户会继承此分组内所有角色的权限**。

#### 2. 参数

* _id: 必填，用户 ID。

#### 3. 返回数据

* totalCount: 总数
* list: 分组列表
* rawList: 分组列表，只包含 name 字段

```javascript
{
  totalCount: 2,
  list: [
    {
      _id: '5e1fff324b6419665991f6b4',
      name: 'employee',
      description: '正式员工。'
    },
    {
      _id: '5e1edcb34b6419665991f5d9',
      name: 'intern',
      description: '实习生。'
    },
  ],
  rawList: ["employee", "intern"]
}
```
