

const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'removeUserMetadata',
  type: 'mutation',
  description: '删除用户自定义 Metadata',
  query,
  doc
}
