
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'setInvitationState',
  type: 'mutation',
  description: '开启/关闭注册白名单限制',
  query,
  doc
}
