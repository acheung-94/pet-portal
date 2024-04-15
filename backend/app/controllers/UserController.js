import ApplicationController from './ApplicationController'
import {bcrypt} from 'bcryptjs'
import passport from 'passport'
import User from '../models/User.js'
export default class UserController extends ApplicationController{
	constructor() {
		super()
	}

	static async register(req, res, next) {
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
	static async login(req, res, next) {
		passport.authenticate('local', async function(err, user) {
			if (err) return next(err)
			if (!user) {
				const err = new Error('invalid credentials')
				err.statusCode = 400
				err.errors = {username: 'invalid username' }
				return next(err)
			}
			return res.json({user})
		})(req, res, next)
	}
}