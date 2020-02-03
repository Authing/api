此接口用来获取 webhook 日志列表。
1. 请求参数：
- webhook: Webhook ID

2. 返回数据示例

```
{ 
    "data":{ 
       "getWebhookLogs":[ 
          { 
             "_id":"5db1027291e5e68013xxxxxxx",
             "event":"login", // 触发的事件为 login
             "response":{ 
                "statusCode":null,
                "__typename":"WebhookResponseType"
             },
             "errorMessage":"Request failed with status code 404",
             "when":"2019-10-24 09:46:26",
             "__typename":"WebhookLog"
          }
       ]
    }
 }
```