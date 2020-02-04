const fs = require("fs")
const path = require("path")
const express = require("express")
const cors = require('cors')
const API = require("./api")
const app = express()
const port = 5678

function loadMetadata() {
  const file = path.join(__dirname, "api/meta.json")
  const text = fs.readFileSync(file, 'utf-8')
  return JSON.parse(text)
}
const metadata = loadMetadata()

app.use(cors())

app.get('/api/list', function (req, res) {
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
  res.send({
    list: apis,
    metadata
  })
})

app.get('/api/:name', function (req, res) {
  const name = req.params['name']
  const api = API[name]
  if (!api) {
    res.send({
      code: 404,
      message: `API <${name}> not found.`
    })
    return
  }

  res.send(api)
})

app.listen(port, () => console.log(`Example app listening on http://localhost:${port} 🚀!`))
