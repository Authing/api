1. 注册分为多种方式
- 使用用户名注册（username）
- 使用邮箱注册（email）
- 使用手机号注册（phone）
- 社会化账号（微信、GitHub）注册(unionid)

2. 部分请求参数说明
    - userInfo
        - 必填项
            - `registerInClient`: 用户注册所在的用户池
        - 可选项
            - `registerMethod`:注册方式。开发者最好提供此字段，如未提供，Authing 将从其他是否提供 `unionid`，`email`, `phone`， `username` 四个字段推测注册方式（优先级递减，比如同时提供 `unionid` 和 `email`，会被视为 `unionid` 方式注册）。
            - `unionid`
            - `email`
            - `phone`: 注：若管理员开启了注册白名单机制，此手机号需要在白名单之内。
            - `password`: 加密过后的密码，加密方式见[Authing官方文档](https://docs.authing.cn/authing/v/master/sdk/open-graphql#zhu-yi-shi-xiang-2)。
            - `forceLogin`: 默认为 false, 如果设置为 true, 用户不存在时会先自动创建。
            - `photo`: 用户头像，如果域名不是 Authing 的 CDN，将会先被上传至 Authing CDN。
            - `lastIP`: 用户注册时的 IP, 如果未提供，Authing 将会从请求中自动推断。
    - invitationCode: 邀请码。可选。
    - keepPassword: 是否直接将密码写入，内部不使用 Authing 的加密方式存储。

3. 注册频率限制

应用池管理员可以在后台开启频繁注册限制选项（**用户池** -> **基础配置**）。

![](http://lcjim-img.oss-cn-beijing.aliyuncs.com/2019-10-23-40FB8474-08F1-4586-83CB-CFC96B5A56A1.png)

如上图中，**同一 IP** 在 300 秒内，只能发起 3 次注册请求。

4. 注册白名单机制

> 目前只支持手机号白名单，

开发者可以配置白名单（**用户中心** -> **注册白名单**），只运行白名单内的手机号注册。

5. 一键关闭注册选项

Authing 提供给开发者“一键关闭注册”选项，可在后台 **基础配置** 中设置。

![](http://lcjim-img.oss-cn-beijing.aliyuncs.com/2019-10-23-103351.png)
