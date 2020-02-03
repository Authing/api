此接口用来修改用户角色。

> 点击查看[此接口 Node SDK 文档地址](https://learn.authing.cn/authing/sdk/sdk-for-node/update-user-permissions#xiu-gai-jiao-se-quan-xian)


1. 参数说明：
- 角色 ID（`_id`）是必传的。

2. 返回数据示例：
```
{
    "_id": "5ca5c5dd8a61c7ffbfb129a9",
    "name": "测试角色",
    "client": "5c9c659cb9440b05cb2570e6",
    "descriptions": "测试角色的描述",
    "permissions": "["权限点1"]"
}
```