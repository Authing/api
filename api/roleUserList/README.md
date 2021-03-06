此接口用于查询角色中包含的用户.

> Authing 支持基于角色的访问控制（RBAC），请先务必了解[分组和角色的区别](https://docs.authing.cn/authing/authorization/authorization/rbac#fen-zu-vs-quan-xian)，[点此了解如何接入](https://docs.authing.cn/authing/authorization/intergrate-rbac)。

#### 1. 说明

分组用于管理用户，角色用于配置权限；分组可以同时拥有一个或多个角色，加入到该分组中的用户会继承此分组内所有角色的权限。

<br/>

此接口支持**分页、排序**。

#### 2. 参数

* _id: 必填，分组 ID。
* sortBy: 选填，排序方式。默认为 CREATEDAT_DESC ，表示按照创建时间降序，即最新创建的排在最前面。全部的可选值为：
  * CREATEDAT_DESC：按照创建时间降序。
  * CREATEDAT_ASC ：按照创建时间升序。
  * UPDATEDAT_DESC：按照修改时间降序。
  * UPDATEDAT_ASC：按照修改时间排序。
* page: 选填，页码数。默认为 0，**zero-based**。
* count: 选填，每页数目，默认为 10。

#### 3. 返回数据

- users:
  - totalCount: 总数目。
  - list: 当前页用户列表。

```javascript
{
  users: {
    totalCount: 1,
    list: [
      {
        _id: '5e3823671655601485c7f8a2',
        name: 'test@test.com',
        email: "test@test.com"
      }
    ]
  }
}
```
