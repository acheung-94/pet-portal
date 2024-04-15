import ApplicationController from './ApplicationController.js'
import bcrypt from 'bcryptjs'
import passport from 'passport'
import User from '../models/User.js'
import { loginUser } from '../../config/passport.js'

export default class UserController extends ApplicationController{
	constructor() {
		super()
	}

	static async register(req, res, next) {
		const user = await User.findOne({
			email: req.body.email
		})
		if (user) {
			const err = new Error('Validation Error')
			err.statusCode = 400

			const errors = {}
			if (user.email === req.body.email) {
				errors.email = 'A user has already been registered with this email'
			}

			err.errors = errors
			return next(err)
		}

		const newUser = new User({
			email: req.body.email,
		})
		bcrypt.genSalt(10, (err, salt) => {
			if (err) throw err
			bcrypt.hash(req.body.password, salt, async (err, hashedPassword) => {
				if (err) throw err
				try {
					newUser.hashedPassword = hashedPassword
					const user = await newUser.save()
					return res.json(await loginUser(user))
				} catch (err) {
					next(err)
				}
			})
		})
	}
	static async login(req, res, next) {
		passport.authenticate('local', async function(err, user) {
			if (err) return next(err)
			if (!user) {
				const err = new Error('invalid credentials')
				err.statusCode = 400
				err.errors = {email: 'invalid email' }
				return next(err)
			}
			return res.json(await loginUser(user))
		})(req, res, next)
	}
}