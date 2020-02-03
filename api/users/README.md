此接口用来获取用户列表，支持分页。用户信息支持基础信息和附带扩展字段两种模式。
部分请求参数说明
- registerInClient：用户池 ID
- page: 第几页。
- count：一页包含用户数目，默认为10，最大为200。
- populate：布尔值。默认为 false, 如果为 true,将会返回用户的扩展字段：group、clientType、userLocation 、userLoginHistory、systemApplicationType（详情见”读取用户资料”接口）。