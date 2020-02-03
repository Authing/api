此接口用来绑定第三方社会化账号, Authing 目前支持微信和 GitHub 两种。
请求参数说明
- user: 用户 ID
- client: 用户池 ID
- type: 第三方社会化账号平台，选项为 "github" 和 "wechat"。
- unionid: 第三方社会化账号在此平台的 unionid
- userInfo: 第三方社会化账号的资料,可以是任意字符串。