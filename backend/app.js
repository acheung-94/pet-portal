import * as path from 'path'
import {isProduction, mongoURI} from './config/keys.js'

if (!isProduction){
	(async () => {
		const dotenv = await import('dotenv')
		dotenv.config()
	})()
}

// eslint-disable-next-line sort-imports
import cookieParser from 'cookie-parser'
import cors from 'cors'
import csurf from 'csurf'
import express from 'express'
import { fileURLToPath } from 'url'
import mongoose from 'mongoose'
import morgan from 'morgan'
import setupRouter from './app/routes/router.js'
import './config/passport.js'
// eslint-disable-next-line sort-imports
import passport from 'passport'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

await mongoose.connect(mongoURI)
var app = express()

app.use(morgan('dev'))
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

if (isProduction) {
	const path = await import('path')

	app.get('/', (req, res) => {
		res.cookie('CSRF-TOKEN', req.csrfToken())
		res.sendFile(
			path.resolve(__dirname, '../frontend', 'dist', 'index.html')
		)
	})

	app.use(express.static(path.resolve('../frontend/dist')))

	app.get(/^(?!\/?api).*/, (req, res) => {
		res.cookie('CSRF-TOKEN', req.csrfToken())
		res.sendFile(
			path.resolve(__dirname, '../frontend', 'dist', 'index.html')
		)
	})
}

export default app