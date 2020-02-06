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