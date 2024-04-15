import {Router} from 'express'
import UserController from '../controllers/UserController.js'

const userRouter = Router()
/* GET users listing. */
userRouter.get('/', function(req, res, _) {
	res.send('respond with a resource')
})
userRouter.post('/login', UserController.login)

export default userRouter