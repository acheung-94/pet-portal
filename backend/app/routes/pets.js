import PetController from '../controllers/PetController.js'
import {Router} from 'express'

const petRouter = Router()

petRouter.get('/', PetController.index)
petRouter.get('/:id', PetController.show)
petRouter.post('/', PetController.create)
petRouter.put('/:id', PetController.update)
petRouter.delete('/:id', PetController.delete)

export default petRouter