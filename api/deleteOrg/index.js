
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'deleteOrg',
  type: 'mutation',
  module: '组织机构管理',
  description: '删除组织机构',
  query,
  doc
}
