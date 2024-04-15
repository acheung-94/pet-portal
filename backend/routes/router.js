const indexRouter = require('./index.js')
const usersRouter = require('./users.js')
/**
 * sets up routing for the application
 * @param {Express} app 
 */
export default function setupRouter(app) {
	app.use('/', indexRouter)
	app.use('/api/users', usersRouter)
}