> [点此了解如何接入组织机构管理](https://docs.authing.cn/authing/authorization/intergrate-organization-structure)。

<br/>

此接口用于创建组织机构。

#### 1.说明
一个组织结构是一棵树状的 Group 集合，此接口需要指定根节点的 Group ID。
> 了解如何创建、管理 Group，请见 「权限控制」。

<br/>

#### 2.返回数据示例

<br/>

- _id: 组织机构 ID
- nodes: 节点列表
  - _id: 节点对应 Group ID
  - name: Group 名称
  - description: Group 描述
  - children: 子节点对应的 Group ID
  - root: 是否为根节点

<br/>

```javascript
{
  _id: '5e3823671655601485c7f8a8',
  nodes: [
    {
      _id: '5e3823671655601485c7f8a2',
      name: '公司A',
      description: '',
      createdAt: '2020-02-03T21:43:03+08:00',
      updatedAt: '2020-02-03T21:43:03+08:00',
      children: [ '5e3823671655601485c7f8a3', '5e3823671655601485c7f8a4' ],
      root: true
    },
    {
      _id: '5e3823671655601485c7f8a3',
      name: '技术部门',
      description: '',
      createdAt: '2020-02-03T21:43:03+08:00',
      updatedAt: '2020-02-03T21:43:03+08:00',
      children: [ '5e3823671655601485c7f8a5' ],
      root: false
    },
    {
      _id: '5e3823671655601485c7f8a4',
      name: '销售部',
      description: '',
      createdAt: '2020-02-03T21:43:03+08:00',
      updatedAt: '2020-02-03T21:43:03+08:00',
      children: [ '5e3823671655601485c7f8a6' ],
      root: false
    },
    {
      _id: '5e3823671655601485c7f8a5',
      name: 'CTO',
      description: '',
      createdAt: '2020-02-03T21:43:03+08:00',
      updatedAt: '2020-02-03T21:43:03+08:00',
      children: [],
      root: false
    },
    {
      _id: '5e3823671655601485c7f8a6',
      name: '销售经理',
      description: '',
      createdAt: '2020-02-03T21:43:03+08:00',
      updatedAt: '2020-02-03T21:43:03+08:00',
      children: [],
      root: false
    }
  ]
}
```

<br/>

对应的组织机构图：
```
   组织架构
    公司A 
  /      \
技术部门  销售部
  /          \
CTO         销售经理
```
