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

for (let apiName of Object.keys(API)) {
  let api = API[apiName]
  for (let group of groups) {
    if (group.children.indexOf(apiName) !== -1) {
      const { name: groupName, name_en, children } = group
      let auth = ""
      if (adminRequired.indexOf(apiName) !== -1) {
        auth = "admin"
      } else if (loginRequired.indexOf(apiName) !== -1) {
        auth = "user"
      } else {
        auth = "guest"
      }
      api = Object.assign({}, api, { name_en, auth, group: groupName })
    }
  }
  apis.push(api)
}

const data = { list: apis, metadata }
const output = path.join(__dirname, "../output.json")
fs.writeFileSync(output, JSON.stringify(data, null, 2))
