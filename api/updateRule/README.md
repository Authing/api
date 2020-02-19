> [点此了解如何使用 Authing Pipeline 自定义认证流程](https://docs.authing.cn/authing/extensibility/pipeline)。

<br/>

此接口用于修改 Rule。

#### 1.说明

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

* input: UpdateRuleInput!
  * _id!: Rule ID.
  * name: 名称。
  * description: 描述。
  * type: Rule 类型，当前可选值为:
    * PRE_REGISTER: 注册前，可用于实现注册邮箱域名白名单、注册 IP 白名单等。
    * POST_REGISTER: 注册后，可用于用户成功注册后往数据库写入自定义字段等。
    * POST_AUTHENTICATION: 登录完成后，可用于访问控制、扩展用户字段等。
  * code: 代码。详情请见：[如何编写自定义 Rule 函数](https://docs.authing.cn/authing/extensibility/rules/how-to-write-pipe-function)
  * enabled: 是否开启。


#### 2.返回数据

<br/>

* _id: Rule ID
* code: 代码
* enabled: 是否开启
* faasUrl: 函数链接
* name: 名称
* type: Rule 类型。

<br/>

```javascript
{
  _id: '5e3b95aa57eb747394154432',
  code: `function pipe(request, callback) {␊
    const body = JSON.parse(request.body)␊
    const email = body.email␊
    const whitelist = ['example.com']; //authorized domains␊
    const userHasAccess = whitelist.some(␊
      function (domain) {␊
        const emailSplit = email.split('@');␊
        return emailSplit[emailSplit.length - 1].toLowerCase() === domain;␊
      });␊
  ␊
    if (!userHasAccess) {␊
      return callback(new UnauthorizedError('Access denied.'));␊
    }␊
  ␊
    return callback(null);␊
  }`,
  createdAt: '2020-02-06T12:27:22+08:00',
  description: null,
  enabled: true,
  faasUrl: 'https://1390279131788301.cn-beijing.fc.aliyuncs.com/2016-08-15/proxy/authing-rules-pipeline/nodejs8-a5171b70-dc73-485e-b480-302eb9faee94/',
  name: 'Rule - 6d4rz5rjt7j',
  type: 'PRE_REGISTER',
  updatedAt: '2020-02-06T12:27:22+08:00',
}
```

<br/>