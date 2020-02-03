
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'orgChildrenNodes',
  type: 'query',
  module: '组织机构管理',
  description: '查询某节点子节点',
  query,
  doc
}
