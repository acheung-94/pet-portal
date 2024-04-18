import ApplicationController from './ApplicationController.js'
import { isProduction } from '../../config/keys.js'
export default class CSRFController extends ApplicationController {
	constructor() {
		super()
	}

	static restore(req, res) {
		if (!isProduction) {
			const csrfToken = req.csrfToken()
			res.cookie('CSRF-TOKEN', csrfToken)
			res.status(200).json({
				'CSRF-Token': csrfToken
			})
		} else {
			res.status(404).end()
		}
	}
}