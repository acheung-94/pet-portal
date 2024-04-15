const express = require('express')
const router = express.Router()

router.get('/restore', (req, res, _) => {
	const csrfToken = req.csrfToken()
	res.status(200).json({
		'CSRF-Token': csrfToken
	})
})

module.exports = router