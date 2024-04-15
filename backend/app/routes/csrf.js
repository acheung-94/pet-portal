import { Router } from 'express'
import CSRFController from '../controllers/CSRFController.js'

const csrfRouter = Router()

csrfRouter.get('/restore', CSRFController.restore)

export default csrfRouter