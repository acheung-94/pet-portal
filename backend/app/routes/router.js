import csrfRouter from './csrf.js'
import petRouter from './pets.js'
import reminderRouter from './reminder.js'
import userRouter from './users.js'
/**
 * sets up routing for the application
 * @param {Express} app 
 */
export default function setupRouter(app) {
	app.use('/api/users', userRouter)
	app.use('/api/csrf', csrfRouter)
	app.use('/api/pets', petRouter)
	app.use('/api/reminders', reminderRouter)
}