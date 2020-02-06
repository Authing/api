> [点此了解如何使用 Rules 自定义认证流程](https://docs.authing.cn/authing/extensibility/rules)。

<br/>

此接口用于创建自定义 Rule。

#### 1.说明

Rules are code snippets written in JavaScript that are executed as part of the authentication pipeline in Authing, you can use them to customize and extend Authing's capabilities.

<br/>

Rules 是 Authing 认证流程中执行的自定义 JavaScript 代码。借助 Rules，开发者可以自定义或扩展 Authing 的能力。

<br/>

#### 2.参数

> 参数名后面的 `!` 表示必填，无 `!` 即为选填。

* input: CreateRuleInput!
  * userPoolId!: 用户池 ID。
  * name!: 名称。
  * description: 描述。
  * type!: Rule 类型，当前可选值为:
    * PRE_REGISTER: 注册前，可用于实现注册邮箱域名白名单、注册 IP 白名单等。
    * POST_REGISTER: 注册后，可用于用户成功注册后往数据库写入自定义字段等。
    * POST_AUTHENTICATION: 登录完成后，可用于访问控制、扩展用户字段等。
  * code!: 代码。详情请见：[如何编写自定义 Rule 函数](https://docs.authing.cn/authing/extensibility/rules/how-to-write-pipe-function)


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