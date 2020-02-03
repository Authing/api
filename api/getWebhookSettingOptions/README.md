此接口用来获取 Webhook 配置项。此接口无需参数。

返回数据：
```javascript
{
    "data": {
      "getWebhookSettingOptions": {
        "contentTypes": [
          {
            "name": "application/json",
            "label": "application/json"
          },
          {
            "name": "application/x-www-form-urlencoded",
            "label": "application/x-www-form-urlencoded"
          }
        ],
        "webhookEvents": [
          {
            "name": "register",
            "label": "注册",
            "description": "注册事件"
          },
          {
            "name": "login",
            "label": "登录",
            "description": "登录事件"
          },
          {
            "name": "change-password",
            "label": "修改密码",
            "description": "修改密码事件"
          },
          {
            "name": "change-user-info",
            "label": "修改用户信息",
            "description": "修改用户信息事件"
          },
          {
            "name": "email-verified",
            "label": "用户邮箱被验证",
            "description": "用户邮箱被验证事件"
          }
        ]
      }
    }
  }
```