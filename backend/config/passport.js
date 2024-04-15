import bcrypt from 'bcryptjs'
import LocalStrategy from 'passport-local'
import { Mongoose } from 'mongoose'
import passport from 'passport'
const User = Mongoose().model('User')

passport.use(new LocalStrategy({
	session: false,
	usernameField: 'username',
	passwordField: 'password'
}, async function (username, password, done) {
	const user = await User.findOne({username})
	if (user) {
		bcrypt.compare(password, user.hashedPassword, (err, isMatch) => {
			if (err || !isMatch) done(null, false)
			else done(null, user)
		})
	} else done(null, false)
}))