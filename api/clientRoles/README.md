此接口用来获取应用下所有角色。

> 此接口已经废弃，请使用新版的权限管理模块：[https://docs.authing.cn/authing/sdk/sdk-for-node/rbac](https://docs.authing.cn/authing/sdk/sdk-for-node/rbac)

> 点击查看[此接口 Node SDK 文档地址](https://learn.authing.cn/authing/sdk/sdk-for-node/update-user-permissions#huo-qu-ying-yong-xia-suo-you-jiao-se)

1. 用户角色有什么用？
用户角色是 Authing 管理用户的一种手段，你可以为角色设定任意的权限字符串，可以是 JSON 或数组；之后通过 Authing 的 API 获取设置的权限既而实现自己的业务逻辑。如下图所示：在 Authing 后台为用户池配置了一个名为“管理员”的角色，
你可以使用 Authing 提供的接口和 [SDK](https://learn.authing.cn/authing/sdk/sdk-for-node/update-user-permissions) 获取到对应的权限：\`["删除用户"]\`
之后便能够很好地和你的实际业务结合起来。

![](http://lcjim-img.oss-cn-beijing.aliyuncs.com/2019-11-12-120145.png)

2. 角色和用户的关系

- 一个角色具备特定的权限，可以包含一个或多个用户。

- 一个用户可以同时拥有多个角色。

3. 如何查看用户池的用户角色列表？

访问 **用户池** -> **用户中心** -> **用户角色**