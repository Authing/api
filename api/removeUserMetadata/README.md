此接口用于删除用户自定义 Metadata。

#### 1. 说明

用户自定义 Metadata 是除了 Authing 基础用户字段之外，开发者可以给用户添加的额外字段，属于 Authing 扩展能力的一部分。

#### 2. 参数

> 参数名后面的 `!` 表示必填，无 `!` 即为选填。

- input!: RemoveUserMetadataInput
  - _id!: 用户 ID。 
  - key!: key

#### 3. 返回数据

```javascript
{
  list: [
    {
      key: 'KEY',
      value: 'VALUE',
    },
  ],
  totalCount: 1,
}
```