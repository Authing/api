> [点此了解如何接入组织机构管理](https://docs.authing.cn/authing/authorization/intergrate-organization-structure)。

此接口用于查询查询某节点的子节点列表。

#### 1.说明

一个组织结构节点是一个 Group，此接口需要指定该节点的 Group ID。
> 了解如何创建、管理 Group，请见 「权限控制」。


<br/>

#### 2.返回数据示例

Group 列表：
- group: 对应 Group 数据
  - _id: Group ID
  - name: Group 名称
- depth: 距离查询节点的深度，为 1 表示为直接子节点。

```javascript
[
  {
    group: {
      _id: '5e38291b1655601485c7f9d6',
      name: '分组q4nns79nea',
      description: '',
      createdAt: '2020-02-03T22:07:23+08:00',
      updatedAt: '2020-02-03T22:07:23+08:00'
    },
    depth: 1
  },
  {
    group: {
      _id: '5e38291b1655601485c7f9d9',
      name: '分组64cb9g24yuv',
      description: '',
      createdAt: '2020-02-03T22:07:23+08:00',
      updatedAt: '2020-02-03T22:07:23+08:00'
    },
    depth: 1
  }
]
```