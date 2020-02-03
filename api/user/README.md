此接口用来读取用户资料。同时支持用户 ID 和用户登录凭证读取。
1. 部分请求参数说明
- 可选参数：
    - registerInClient: 用户池 ID。
    - id: 用户 ID。
    - token: 该用户（**非开发者**）的登录凭证，如果指定，将会忽略 ID 字段。
    - auth: 布尔值
    - userLoginHistoryPage: 用户登录记录分页数。
    - userLoginHistoryCount: 用户登录记录每页数目。

2. 返回结果部分字段说明
- group: 所在群组
- clientType: 用户池类型
- userLocation: 用户地址
- userLoginHistory: 用户历史登录记录。