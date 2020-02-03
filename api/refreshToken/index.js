
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'refreshToken',
  type: 'mutation',
  module: '用户鉴权',
  description: '',
  query,
  doc
}
