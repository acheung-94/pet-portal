import ApplicationController from './ApplicationController'
import {bcrypt} from 'bcryptjs'
import User from '../models/User.js'
class UserController extends ApplicationController{
	constructor() {
		super()
	}

	async register(req, res, next) {
		const user = await User.findOne({
			username: req.body.username
		})
		if (user) {
			const err = new Error('Validation Error')
			err.statusCode = 400

			const errors = {}
			if (user.username === req.body.username) {
				errors.username = 'A user has already been registered with this username'
			}

			err.errors = errors
			return next(err)
		}

		const newUser = new User({
			username: req.body.username,
		})
		bcrypt.genSalt(10, (err, salt) => {
			if (err) throw err
			bcrypt.hash(req.body.password, salt, async (err, hashedPassword) => {
				if (err) throw err
				try {
					newUser.hashedPassword = hashedPassword
					const user = await newUser.save()
					return res.json({ user })
				} catch (err) {
					next(err)
				}
			})
		})
	}
}

export default UserController