const express = require('express')
const controller = require('./src/controller')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api',controller);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

