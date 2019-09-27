const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('./db/connect')

const app = express()

app.use(cors(bodyParser.json()))


module.exports = app