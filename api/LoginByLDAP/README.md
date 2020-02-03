此接口使用 LDAP 登录，登录后返回的 Token 需要在客户端维护。
LDAP 是一个树型的用来存储用户和组织信息的数据库，常被用来做单点登录和组织架构管理。前往[Authing官方文档 - LDAP](https://learn.authing.cn/authing/advanced/ldap)了解更多。 

1. 请求参数：
- 必填项
    - username: 用户名
    - password: 密码
    - clientId: 用户池 ID
- 选填项
    - browser: 访问浏览器

2. 返回数据

登录成功之后会返回登录用户的详细数据，其中包含 \`token\`(登录凭证)，客户端需要妥善保存。