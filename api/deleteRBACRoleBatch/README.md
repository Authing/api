此接口用于批量删除角色。

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

* idList: 必填，角色 ID 列表。


#### 3. 返回数据

* code: 200 表示成功。

```javascript
{
  code: 200,
  message: '操作成功！'
}
```
