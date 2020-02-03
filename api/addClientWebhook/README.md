此接口用来添加 Webhook。相关文档请查看 [Authing官方文档](https://learn.authing.cn/authing/advanced/use-webhook)
1. Webhook 有什么用

Webhooks 允许你对用户注册、登录等**事件**进行监听，从而对其做一些自定义处理。这能让 Authing 和你的业务更好地联动起来。
Authing 内置了丰富的事件，目前包含注册、登录、修改密码、修改用户信息、用户邮箱被验证五种。
开发者可以在后台 **基础配置** -> **Webhook** 里面管理自己的 Webhook。

![](http://lcjim-img.oss-cn-beijing.aliyuncs.com/2019-10-24-102435.png)

2. 支持事件列表

> 支持的事件列表可以通过 “获取 Webhook 配置项” 接口获取。

- register: 注册
- change-user-info: 修改用户信息
- login: 登录
- change-password: 修改密码
- email-verified: 用户邮箱被验证


3. 有哪些应用场景？

假设你的应用有 “用户验证邮箱可获积分” 这个业务需求，你可以添加一个监控 \`email-verified\` 事件的 Webhook, 每次有用户成功验证邮箱之后，
Authing 将会向你定义的 Webhook 地址发送携带该名用户ID的请求，然后你可以通过此用户的 ID 完成相关操作。

4. Authing 的回调请求包含哪些数据？

详情见“发送 Webhook 测试”部分的文档。

5. 请求参数说明
- 必填项
    - client: 用户池 ID
    - events: 监听的事件列表，具体的事件名称见上文。
    - url: Webhook 回调地址
    - contentType: 指定发起 Webhook 请求时 Request body 的数据格式，可选值有 \`application/json\` 和 \`application/x-www-form-urlencoded\`
    - enable: 是否启用。
- 可选参数
    - secret: 请求秘钥。如果设置, Authing将会在向 Webhook 回调地址发起请求时，带上\`X-Authing-Token\` 的请求头。开发者可以对此秘钥进行验证，用来防止第三方的恶意请求。
