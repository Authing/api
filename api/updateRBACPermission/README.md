此接口用于更新权限。

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

* input: UpdateRBACPermissionInput
  * _id: 必填，权限 ID。
  * name: 必填，名称。
  * description: 选填，描述。

#### 3. 返回数据

* _id: 角色 ID

```javascript
{
  _id: '5e3823671655601485c7f8a2',
  name: 'email:login',
  description: '登录邮箱权限',
  createdAt: '2020-02-03T21:43:03+08:00',
  updatedAt: '2020-02-03T21:43:03+08:00',
},
```
