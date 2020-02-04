
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'rbacPermission',
  type: 'query',
  description: '查询权限详情',
  module: '权限控制',
  query,
  doc
}
