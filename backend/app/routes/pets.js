import {Router} from 'express'
import PetController from '../controllers/PetController.js'
import { requireUser } from '../../config/passport.js'

const petRouter = Router()

petRouter.get('/', PetController.index)
petRouter.get('/:id', PetController.show)
petRouter.post('/', requireUser, PetController.create)
petRouter.put('/:id', requireUser, PetController.update)
petRouter.delete('/:id', requireUser, PetController.delete)

export default petRouter