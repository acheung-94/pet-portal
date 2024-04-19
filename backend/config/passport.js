import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import LocalStrategy from 'passport-local'
import passport from 'passport'
import passportJwt from 'passport-jwt'
import {secretOrKey} from './keys.js'
import {default as User} from '../app/models/User.js'

const { Strategy: JwtStrategy, ExtractJwt } = passportJwt
const JWT_EXPIRATION = 3600

passport.use(new LocalStrategy({
	session: false,
	usernameField: 'email',
	passwordField: 'password'
}, async function (email, password, done) {
	const user = await User.findOne({email})
	if (user) {
		bcrypt.compare(password, user.hashedPassword, (err, isMatch) => {
			if (err || !isMatch) done(null, false)
			else done(null, user)
		})
	} else done(null, false)
}))

export const loginUser = async (user) => {
	const userInfo = {
		_id: user._id,
		username: user.username,
		email: user.email
	}
	/** @type {String} */
	const token = jwt.sign(
		userInfo, // Payload
		secretOrKey, // Sign with secret key
		{ expiresIn: JWT_EXPIRATION } // Tell the key to expire in one hour
	)
	return {
		user: userInfo,
		issued: new Date(),
		expiresSeconds: JWT_EXPIRATION,
		token
	}
}
const options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
options.secretOrKey = secretOrKey

passport.use(new JwtStrategy(options, async (jwtPayload, done) => {
	try {
		const user = await User.findById(jwtPayload._id)
		if (user) {
		// return the user to the frontend
			return done(null, user)
		}
		// return false since there is no user
		return done(null, false)
	}
	catch(err) {
		done(err)
	}
}))

export const requireUser = passport.authenticate('jwt', { session: false })

export const restoreUser = (req, res, next) => {
	return passport.authenticate('jwt', { session: false }, (err, user) => {
		if (user) req.user = user
		next()
	})(req, res, next)
}
