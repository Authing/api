
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'deleteRBACGroupBatch',
  type: 'mutation',
  description: '批量删除分组',
  query,
  doc
}
