const express = require("express")
const cors = require('cors')
const API = require("./api")
const app = express()
const port = 5678

app.use(cors())

app.get('/list', function (req, res) {
  res.send(API)
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
