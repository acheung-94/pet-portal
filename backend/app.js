var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

const cors = require('cors')
const {isProduction} = require('./config/keys')
require('dotenv').config()

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

if (!isProduction) {
	app.use(cors())
}


require('./app/routes/router').default(app)

module.exports = app
