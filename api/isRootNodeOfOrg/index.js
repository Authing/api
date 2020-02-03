
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'isRootNodeOfOrg',
  type: 'query',
  module: '组织机构管理',
  description: '判断某一节点是否为根节点',
  query,
  doc
}
