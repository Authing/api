此接口用来获取用户池详情。
1. 请求参数
- 必填参数
    - id: 用户池 ID
    - userId: 用户池创建者 ID

2. 部分返回数据说明
- user: 用户池创建者。
- usersCount: 用户总数
- emailVerifiedDefault: 布尔值， 注册时邮箱需不需要验证。true 无需验证，false 表示需要验证。
- registerDisabled: 布尔值，true 为应用池已关闭注册，false 为未关闭注册。
- showWXMPQRCode: 布尔值，是否显示微信小程序扫码登录。
- useMiniLogin: 是否使用微信小程序“小登录”。
- allowedOrigins: 安全域（Allowed Origins） 是允许从 JavaScript 向 Authing API 发出请求的 URL（通常与 CORS 一起使用）。 默认情况下，系统会允许你使用所有网址。 如果需要，此字段允许你输入其他来源。 你可以通过逐行分隔多个有效 URL，并在子域级别使用通配符（例如：https://*.sample.com）。 验证这些 URL 时不考虑查询字符串和哈希信息，如果带上了查询字符串和哈希信息系统会自动忽略整个域名。
- secret: 用户池密钥，通过 **用户池** -> **基础配置** 可以查看。
- jwtExpired: JWT Token 过期时间
- frequentRegisterCheck: 注册频率限制。