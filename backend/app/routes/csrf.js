import CSRFController from '../controllers/CSRFController.js'
import { Router } from 'express'

const csrfRouter = Router()

csrfRouter.get('/restore', CSRFController.restore)

export default csrfRouter