import * as express from 'express'
import * as logger from 'morgan'
import * as path from 'path'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import csurf from 'csurf'
import dotenv from 'dotenv'
import {isProduction} from './config/keys.js'
import setupRouter from './app/routes/router'
import './config/passport.js'
// eslint-disable-next-line sort-imports
import passport from 'passport'


dotenv.config()
var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(passport.initialize())
if (!isProduction) {
	app.use(cors())
}


app.use(csurf({
	cookie: {
		secure: isProduction,
		sameSite: isProduction && 'Lax',
		httpOnly: true
	}
}))


setupRouter(app)

module.exports = app
