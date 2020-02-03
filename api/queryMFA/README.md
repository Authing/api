此接口用来查询 MFA 配置。
多因素身份验证（MFA）是一种安全系统，是为了验证一项操作合法性而实行多种身份验证。例如银行的 U 盾，异地登录要求手机短信验证。开发者可以基于 Authing 的 MFA 功能进行定制化开发。
前往 [Authing官网文档 - MFA](https://learn.authing.cn/authing/mfa/configure-mfa) 查看更多相关内容。 
查询 MFA 信息有两种方式：通过 MFA 主体 id 或者用户 ID 加用户池 ID。
请求参数：
- 通过 MFA 主体 ID 查询
    - _id: MFA 主体 ID
- 通过用户 ID 加用户池 ID 查询
    - userId: 用户ID
    - userPoolId: 用户池ID
- enabled: 是否开启