此接口用来获取某角色下全部用户。

> 点击查看[此接口 Node SDK 文档地址](https://learn.authing.cn/authing/sdk/sdk-for-node/update-user-permissions#huo-qu-mou-jiao-se-xia-quan-bu-yong-hu)

1. 参数说明：
- group: 必填，角色 ID。
- page: 选填，默认为 1。
- count: 选填，默认为 10。

2. 返回数据示例：
```
{
    "totalCount": 2,
    "list": [
        {
            "_id": "5dc9695999128a6baf15e44b",
            "group": {
                "_id": "5da9c92a2a24432643a33969"
            },
            "client": {
                "_id": "5c95905578fce5000166f853"
            },
            "user": {
                "_id": "5dc8c6b7ebafee83c95b9c8b",
                "photo": "https://usercontents.authing.cn/authing-avatar.png",
                "username": "hrpw0awin7d@test.com",
                "email": "hrpw0awin7d@test.com"
            },
            "createdAt": "2019-11-11 21:59:53"
        }
    ]
}
```