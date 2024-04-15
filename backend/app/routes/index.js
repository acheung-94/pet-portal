import { Router } from 'express'

const indexRouter = Router()
/* GET home page. */
indexRouter.get('/', function(req, res, _) {
	res.render('index', { title: 'Express' })
})

export default indexRouter
