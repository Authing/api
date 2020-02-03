此接口用来刷新指定用户的 JWT token。
1. 此 JWT token 有什么用？

每个用户都有唯一对应的 JWT token, 作为登录凭证。

2. 参数说明
- client: 用户池 ID
- user: 用户 ID

3. 返回数据示例
```
{
    "data": {
      "refreshToken": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlkIjoiNWRhN2VkYWI1MDM5NmMxYWQ5NjIzNzhjIn0sImlhdCI6MTU3MTgxMDY5MSwiZXhwIjoxNTczMTA2NjkxfQ.obN2YMjasbew8ORhd_IxALTVoFSs0PVm-JQH2ULhBP0",
        "iat": 1571810691,
        "exp": 1573106691
      }
    }
}
```

部分字段说明：
- token: 刷新过后的 token
- iat: 签名时间戳
- exp: 签名过期时间戳（默认为签名时间过后15天）
