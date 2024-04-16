import { Router } from "express";
import ReminderController from "../controllers/ReminderController.js";
import { requireUser } from "../../config/passport.js";

const reminderRouter = Router()

reminderRouter.get('/user/:id', ReminderController.indexByUser)
reminderRouter.get('/pet/:id', ReminderController.indexByPet)
reminderRouter.get('/:id', ReminderController.show)
reminderRouter.post('/', requireUser, ReminderController.create)
reminderRouter.put('/:id', ReminderController.update)
reminderRouter.delete('/:id', ReminderController.delete)

export default reminderRouter