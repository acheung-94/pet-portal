import ReminderController from '../controllers/ReminderController.js'
import { requireUser } from '../../config/passport.js'
import { Router } from 'express'

const reminderRouter = Router()

reminderRouter.get('/user/:id', ReminderController.indexByUser)
reminderRouter.get('/pet/:id', ReminderController.indexByPet)
reminderRouter.get('/:id', ReminderController.show)
reminderRouter.post('/', requireUser, ReminderController.create)
reminderRouter.put('/:id', requireUser, ReminderController.update)
reminderRouter.delete('/:id', requireUser, ReminderController.delete)

export default reminderRouter