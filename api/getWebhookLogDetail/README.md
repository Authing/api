此接口用来获取 Webhook 日志详情。
1. 请求参数
- id：日志 ID。
2. 返回数据示例

- 日志详情里面包含了具体的 \`response\` 和 \`request\`。

```
{ 
    "data":{ 
       "getWebhookLogDetail":{ 
          "_id":"5dad7b85ca72c4d67c146c9d",
          "request":{ 
             "headers":"{\"Accept\":\"application/json, text/plain, */*\",\"Content-Type\":\"application/json\",\"User-Agent\":\"Authing-hook\",\"X-Authing-Token\":\"\",\"X-Authing-Event\":\"register\",\"Content-Length\":1416}",
             "payload":"{\"success\":1,\"message\":\"注册成功\",\"executedAt\":1571650437755,\"params\":{\"phone\":\"\",\"emailVerified\":true,\"phoneVerfified\":false,\"username\":null,\"nickname\":\"Nikola Tesla\",\"company\":\"\",\"photo\":\"https://usercontents.authing.cn/authing-avatar.png\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36\",\"device\":\"\",\"password\":\"\",\"loginsCount\":0,\"registerMethod\":\"ldap:default::from-undefined\",\"blocked\":false,\"isDeleted\":false,\"oauth\":\"{\\\"dn\\\":\\\"uid=tesla,dc=example,dc=com\\\",\\\"controls\\\":[],\\\"objectClass\\\":[\\\"inetOrgPerson\\\",\\\"organizationalPerson\\\",\\\"person\\\",\\\"top\\\",\\\"posixAccount\\\"],\\\"cn\\\":\\\"Nikola Tesla\\\",\\\"sn\\\":\\\"Tesla\\\",\\\"uid\\\":\\\"tesla\\\",\\\"mail\\\":\\\"tesla@ldap.forumsys.com\\\",\\\"uidNumber\\\":\\\"88888\\\",\\\"gidNumber\\\":\\\"99999\\\",\\\"homeDirectory\\\":\\\"home\\\"}\",\"phoneCode\":\"\",\"name\":\"\",\"givenName\":\"\",\"familyName\":\"\",\"middleName\":\"\",\"profile\":\"\",\"preferredUsername\":\"\",\"website\":\"\",\"gender\":\"\",\"birthdate\":\"\",\"zoneinfo\":\"\",\"locale\":\"\",\"address\":\"\",\"formatted\":\"\",\"streetAddress\":\"\",\"locality\":\"\",\"region\":\"\",\"postalCode\":\"\",\"country\":\"\",\"updatedAt\":\"\",\"_id\":\"5dad7b85ca72c4411f146c94\",\"email\":\"tesla@ldap.forumsys.com\",\"unionid\":\"uid=tesla,dc=example,dc=com\",\"lastIP\":\"124.204.56.98\",\"registerInClient\":\"5d11dcc331f4173231ed6a8d\",\"salt\":\"973i1gi516oe\",\"lastLogin\":\"2019-10-21T09:33:57.215Z\",\"signedUp\":\"2019-10-21T09:33:57.215Z\",\"__v\":0}}",
             "__typename":"WebhookRequestType"
          },
          "response":{ 
             "headers":"{\"server\":\"Tengine\",\"content-type\":\"text/html; charset=utf-8\",\"content-length\":\"151\",\"connection\":\"close\",\"date\":\"Mon, 21 Oct 2019 09:33:57 GMT\",\"set-cookie\":[\"acw_tc=2a51cb1915716504377745773e1485a843311545077f946adc7ec8485a;path=/;HttpOnly;Max-Age=2678401\",\"connect.sid=s%3AcFJ7sVEU-BZS7HO-3FbcP88psRLo4TS7.RJNHX5OKSpO1lcHQrYJR3B872epYWQz8BwFJhxRqANU; Path=/; HttpOnly\"],\"access-control-allow-origin\":\"*\",\"x-frame-options\":\"SAMEORIGIN\",\"x-dns-prefetch-control\":\"off\",\"strict-transport-security\":\"max-age=15552000; includeSubDomains\",\"x-download-options\":\"noopen\",\"x-content-type-options\":\"nosniff\",\"x-xss-protection\":\"1; mode=block\",\"content-security-policy\":\"default-src 'none'\",\"ali-swift-global-savetime\":\"1571650437\",\"via\":\"cache2.l2cn1793[28,404-1280,M], cache2.l2cn1793[28,0], vcache5.cn2020[88,404-1280,M], vcache5.cn2020[90,0]\",\"x-swift-error\":\"orig response 4XX error, orig response 4XX error\",\"x-cache\":\"MISS TCP_MISS dirn:-2:-2\",\"x-swift-savetime\":\"Mon, 21 Oct 2019 09:33:57 GMT\",\"x-swift-cachetime\":\"0\",\"timing-allow-origin\":\"*\",\"eagleid\":\"2a51cb1915716504377745773e\"}",
             "body":"\"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n<meta charset=\\\"utf-8\\\">\\n<title>Error</title>\\n</head>\\n<body>\\n<pre>Cannot POST /auth/xcx-sm</pre>\\n</body>\\n</html>\\n\"",
             "statusCode":null,
             "__typename":"WebhookResponseType"
          },
          "errorMessage":"",
          "when":"2019-10-21 17:33:57",
          "__typename":"WebhookLog"
       }
    }
}
```