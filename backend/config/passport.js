import bcrypt from 'bcryptjs'
import LocalStrategy from 'passport-local'
import mongoose from 'mongoose'
import passport from 'passport'
const User = mongoose.model('User')

passport.use(new LocalStrategy({
	session: false,
	emailField: 'email',
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