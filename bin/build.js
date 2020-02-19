const fs = require("fs")
const path = require("path")
const API = require("../api")

function loadMetadata() {
  const file = path.join(__dirname, "../api/meta.json")
  const text = fs.readFileSync(file, 'utf-8')
  return JSON.parse(text)
}

const metadata = loadMetadata()
let apis = []
const { groups, auth } = metadata
const { admin: adminRequired, user: loginRequired, guest } = auth
for (let group of groups) {
  const { name: groupName, name_en, children } = group
  for (let apiName of children) {
    let api = API[apiName]
    if (!api) {
      continue
    }
    let auth = ""
    if (adminRequired.indexOf(apiName) !== -1) {
      auth = "admin"
    } else if (loginRequired.indexOf(apiName) !== -1) {
      auth = "user"
    } else {
      auth = "guest"
    }
    apis.push(Object.assign({}, api, { name_en, auth, group: groupName }))
  }
}
const data = { list: apis, metadata }
const output = path.join(__dirname, "../api.json")
fs.writeFileSync(output, JSON.stringify(data, null, 2))
