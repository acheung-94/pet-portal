import indexRouter from './index.js'
import userRouter from './users.js'
import csrfRouter from './csrf.js'
/**
 * sets up routing for the application
 * @param {Express} app 
 */
export default function setupRouter(app) {
	app.use('/', indexRouter)
	app.use('/api/users', userRouter)
	app.use('/api/csrf', csrfRouter)
}