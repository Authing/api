此接口用于查询用户拥有的权限列表。

> Authing 支持基于角色的访问控制（RBAC），请先务必了解[分组和角色的区别](https://docs.authing.cn/authing/authorization/authorization/rbac#fen-zu-vs-quan-xian)，[点此了解如何接入](https://docs.authing.cn/authing/authorization/intergrate-rbac)。

#### 1. 说明

分组用于管理用户，角色用于配置权限；分组可以同时拥有一个或多个角色，**加入到该分组中的用户会继承此分组内所有角色的权限**。

#### 2. 参数

* _id: 必填，用户 ID。

#### 3. 返回数据

* totalCount: 总数
* list: 角色列表
* rawList: 角色列表，只包含 name 字段

```javascript
{
  totalCount: 2,
  list: [
    {
      _id: '5e20082f4b6419665991fa57',
      name: 'Invoice Submitter',
      description: '能使用发票工具创建并读取发票工具记录。'
    },
    {
      _id: '5e20082f4b6419665991fa58',
      name: 'Vacation Requester',
      description: '能使用假期申请工具申请假期。'
    },
  ],
  rawList: [
    "Invoice Submitter",
    "Vacation Requester"
  ]
}
```
