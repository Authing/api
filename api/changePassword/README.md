此接口用来修改密码。只支持通过邮箱注册的账号的密码，不需要登录，但是需要使用验证码。
1. 请求参数说明
- password: 新密码，需要加密，加密方式见[Authing官方文档](https://docs.authing.cn/authing/v/master/sdk/open-graphql#zhu-yi-shi-xiang-2)。
- client: 用户池 ID
- email: 邮箱
- verifyCode: 验证码
2. 如何获取验证码？
见“发送重置密码邮件”。