
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'addPermissionToRBACRoleBatch',
  type: 'mutation',
  description: '角色批量添加权限',
  query,
  doc
}
