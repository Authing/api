此接口用于批量删除权限。

> Authing 支持基于角色的访问控制（RBAC），请先务必了解[分组和角色的区别](https://docs.authing.cn/authing/authorization/authorization/rbac#fen-zu-vs-quan-xian)，[点此了解如何接入](https://docs.authing.cn/authing/authorization/intergrate-rbac)。

#### 1. 说明

权限应该尽量保持细粒度，将一组相关的权限用一个角色进行管理。

<br/>

推荐使用 **resource:action** 形式命名，如：
- **email:login**
- **email:list**
- **email:detail**
- **email:delete**

#### 2. 参数

* idList: 权限 ID 列表

#### 3. 返回数据

* code: 200 表示成功。

```javascript
{
  code: 200,
  message: '操作成功'
}
```