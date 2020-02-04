此接口用于查询用户池权限列表。

> Authing 支持基于角色的访问控制（RBAC），请先务必了解[分组和角色的区别](https://docs.authing.cn/authing/authorization/authorization/rbac#fen-zu-vs-quan-xian)，[点此了解如何接入](https://docs.authing.cn/authing/authorization/intergrate-rbac)。

#### 1. 说明

权限应该尽量保持细粒度，将一组相关的权限用一个角色进行管理。

<br/>

推荐使用 **resource:action** 形式命名，如：
- **email:login**
- **email:list**
- **email:detail**
- **email:delete**

<br/>

该接口支持**分页、排序**。

#### 2. 参数

* userPoolId: 必填，用户池 ID。
* sortBy: 选填，排序方式。默认为 CREATEDAT_DESC ，表示按照创建时间降序，即最新创建的排在最前面。全部的可选值为：
  * CREATEDAT_DESC：按照创建时间降序。
  * CREATEDAT_ASC ：按照创建时间升序。
  * UPDATEDAT_DESC：按照修改时间降序。
  * UPDATEDAT_ASC：按照修改时间排序。
* page: 选填，页码数。默认为 0，**zero-based**。
* count: 选填，每页数目，默认为 10。


#### 3. 返回数据

- totalCount: 总数目。
- list: 当前页权限列表。

```javascript
{
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
```
