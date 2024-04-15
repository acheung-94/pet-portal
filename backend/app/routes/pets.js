import {Router} from 'express'
import PetController from '../controllers/PetController.js'

const petRouter = Router()
/* GET users listing. */
petRouter.get('/', function(req, res, _) {
	res.send('respond with a resource')
})

export default petRouter