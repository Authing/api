此接口用来获取特定用户拥有的角色和权限。

> 此接口已经废弃，请使用新版的权限管理模块：[https://docs.authing.cn/authing/sdk/sdk-for-node/rbac](https://docs.authing.cn/authing/sdk/sdk-for-node/rbac)

> 点击查看[此接口 Node SDK 文档地址](https://learn.authing.cn/authing/sdk/sdk-for-node/update-user-permissions#huo-qu-yong-hu-quan-xian-he-jiao-se)

1. 参数说明：
- client: 用户池 ID
- user: 用户 ID

2. 返回数据示例：
```
{
    "totalCount": 1,
    "list": [
      {
        "group": {
          "name": "管理员",
          "permissions": "["删除用户"]"
        }
      },
    ]
}
```