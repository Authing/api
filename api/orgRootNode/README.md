> [点此了解如何接入组织机构管理](https://docs.authing.cn/authing/authorization/intergrate-organization-structure)。

此接口用于查询某组织结构的的根节点。

#### 1.说明

参数：
- _id: 组织结构 ID
> 了解如何创建、管理 Group，请见 「权限控制」。


<br/>

#### 2.返回数据示例

一个组织结构节点是一个 Group。

- _id: Group ID
- name: Group 名称

```javascript
{
  _id: '5e38291b1655601485c7f9d6',
  name: '非凡科技有限公司',
  description: '非凡科技有限公司',
  createdAt: '2020-02-03T22:07:23+08:00',
  updatedAt: '2020-02-03T22:07:23+08:00'
}
```