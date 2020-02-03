
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'bindOtherOAuth',
  type: 'mutation',
  module: '社会化登录',
  description: '绑定社会化登录',
  query,
  doc
}
