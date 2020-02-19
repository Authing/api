> [点击了解如何在 Pipeline 函数中使用环境变量](https://docs.authing.cn/authing/extensibility/pipeline/env)

此接口用于查询用户池 Pipeline 环境变量。

#### 1. 说明

Pipeline 函数中的环境变量和操作系统里环境变量的概念一致，开发者可以通过全局变量 env 获取。环境变量对应用池内所有 Pipelien 函数全部可见。

#### 2. 参数

> 参数名后面的 `!` 表示必填，无 `!` 即为选填。

* userPoolId!: 用户池 ID

#### 3. 返回数据

```javascript
{
    totalCount: 1,
    list: [
        {
            key: "KEY1",
            value: "VALUE1"
        }
    ]
}
```