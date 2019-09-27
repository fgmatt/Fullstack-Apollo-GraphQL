const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('./db/connect')
const helloWorldRouter = require('./routers/helloWorld')

const app = express()

app.use(cors(bodyParser.json()))
app.use(helloWorldRouter)


module.exports = app