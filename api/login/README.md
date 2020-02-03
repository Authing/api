此接口用来执行用户登录操作。
1. 登录场景：
- 用户名登录
- 邮箱登录
- 手机号作为用户名登录
- 手机号验证码

2. 请求参数：
- 必填参数
    - registerInClient: 用户池 ID
- 可选参数
    - 用户名登录
        - username
        - password
    - 邮箱登录
        - email
        - password
    - 手机号作为用户名登录
        - phone
        - password
    - 手机号验证码登录
        - phone
        - phoneCode
