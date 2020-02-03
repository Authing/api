此接口用来修改 MFA 信息。

和“查询  MFA 信息” 一样，修改也有两种方式：通过 MFA 主体 ID 或者用户 ID 加用户池 ID。
请求参数：
- enabled: 布尔值，是否开启。
- refreshKey: 布尔值，是否刷新 MFA 的 shareKey。