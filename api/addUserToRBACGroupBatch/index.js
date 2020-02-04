
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'addUserToRBACGroupBatch',
  type: 'mutation',
  description: '分组批量添加用户',
  query,
  doc
}
