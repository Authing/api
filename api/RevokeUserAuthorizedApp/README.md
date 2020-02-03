此接口用来撤回一个用户池内，某个用户对该用户池下的某个 SSO 应用的授权。撤回授权后，用户在 SSO 登录页面登录时，会再次显示确权页面。
请求参数：
- userId: 用户 ID
- userPoolId: 用户池I D
- appId: SSO 应用 ID