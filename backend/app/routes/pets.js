import PetController from '../controllers/PetController.js'
import { requireUser } from '../../config/passport.js'
import {Router} from 'express'
import { singleMulterUpload } from '../../util/s3Utils.js'

const petRouter = Router()

petRouter.get('/', PetController.index)
petRouter.get('/:id', PetController.show)
petRouter.post('/', requireUser, singleMulterUpload('image'), PetController.create)
petRouter.put('/:id', requireUser, PetController.update)
petRouter.delete('/:id', requireUser, PetController.delete)

export default petRouter