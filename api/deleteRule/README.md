> [点此了解如何使用 Authing Pipeline 自定义认证流程](https://docs.authing.cn/authing/extensibility/pipeline)。

<br/>

此接口用于删除自定义 Pipeline 函数。

Authing Pipeline 是一组运行在云端的用户自定义 JavaScript 代码，属于 Authing 扩展能力的重要部分，可以让开发者扩展、自定义 Authing 的能力。Pipeline 作为一组函数，和普通 Hooks 的区别在于，Pipeline 整个流程中的函数数据可以相互传递，实现工业流水线一样的效果。这种设计模式，可以使得开发者的自定义函数更加模块化，便于管理。同时我们还提供了[丰富的函数模版](https://github.com/authing/pipeline)，帮助开发者快速上手开发。

<br/>

借助 Authing Pipeline，开发者可以实现以下功能：
‌
- 白名单机制：如注册邮箱域名白名单、注册 IP 白名单等。
- 事件通知：如用户注册之后发送群通知、用户登录 IP 异常通知等。
- 权限控制：如用户登录之后根据邮箱将其加入某用户组等。
- 扩展用户字段：如往修改默认头像、添加自定义 metadata 等。
- 自定义  token：如往 token 中加入自定义字段等。
- ... 还有更多，想象空间是无穷的。


#### 2.参数

> 参数名后面的 `!` 表示必填，无 `!` 即为选填。

* _id!: Rule ID.

#### 2.返回数据

<br/>

* code: 业务状态码，200 表示成功。
* message: 提示信息。

<br/>

```javascript
{
  code: 200,
  message: '操作成功！'
}
```

<br/>