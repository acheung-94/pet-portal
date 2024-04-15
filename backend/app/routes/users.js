import {Router} from 'express'

const userRouter = Router()
/* GET users listing. */
userRouter.get('/', function(req, res, _) {
	res.send('respond with a resource')
})
userRouter.post('/')

export default userRouter