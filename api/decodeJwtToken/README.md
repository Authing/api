此接口用来解析 JWT Token。

1. 点击 [Authing官方文档](https://learn.authing.cn/authing/advanced/authentication/jwt-token) 了解更多 JWT Token 相关内容。
2. 解析成功示例
```
{
    "data": {
        "decodeJwtToken": {
            "data": {
                "email": "1066983132@qq.com",
                "id": "5da7ed9950396c1ad9623787",
                "clientId": "59f86b4832eb28071bdd9214",
                "unionid": null
            },
            "status": {
                "message": "token 解析正常",
                "code": 200,
                "status": null
            },
            "iat": "1571801657",
            "exp": 1573097657
        }
    }
}

```
部分字段说明：
- email: 用户邮箱
- id: 用户ID
- clientId: 用户池ID
- unionid
- iat: 签名时间戳
- exp: 签名过期时间戳

3. 解析失败示例
```
{
    "data": {
        "decodeJwtToken": {
        "data": null,
        "status": {
            "message": "token 错误",
            "code": 2207,
            "status": null
        },
        "iat": null,
        "exp": null
        }
    }
}
```
