const express = require('express')
const bodyParser = require('body-parser')
require('./db/connect')
const helloWorldRouter = require('./routers/helloWorld')

const app = express()

app.use(bodyParser.json())
app.use('/api',helloWorldRouter)


module.exports = app