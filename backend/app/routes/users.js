import { requireUser } from '../../config/passport.js'
import {Router} from 'express'
import UserController from '../controllers/UserController.js'

const userRouter = Router()
/* GET users listing. */
userRouter.get('/:id/pets', UserController.pets)
userRouter.post('/login', UserController.login)
userRouter.post('/register', UserController.register)
userRouter.get('/sessionRestore', requireUser, UserController.sessionRestore)

export default userRouter