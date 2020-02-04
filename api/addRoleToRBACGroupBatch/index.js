
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'addRoleToRBACGroupBatch',
  type: 'mutation',
  description: '分组批量添加角色',
  query,
  doc
}
