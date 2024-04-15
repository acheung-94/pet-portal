import ApplicationController from './ApplicationController.js'

export default class CSRFController extends ApplicationController {
	constructor() {
		super()
	}

	static restore(req, res) {
		const csrfToken = req.csrfToken()
		res.status(200).json({
			'CSRF-Token': csrfToken
		})
	}
}