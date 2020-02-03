1. 为什么需要用户池鉴权？
> 出于安全性考虑，进行删除用户、创建角色等操作前需要先获取 accessToken。  

2. 如何获取 accessToken？
需要两个参数
- `clientId`
- `secret`

3. 如何获取 `clientId` 和 `secret` ?

- 前往 [authing.cn](https://authing.cn/) 注册账号
- [新建用户池](https://docs.authing.cn/authing/quickstart/hello-world)
- 通过 **用户池** -> **基础配置** 找到 `clientId` 和 `secret`

4. 返回数据字段

- `accessToken`
- `clientInfo`: 用户池的详细信息

5. 如何使用 `accessToken` ?

> 添加到 HTTP 请求的 [Authorization Header](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Authorization) 中
