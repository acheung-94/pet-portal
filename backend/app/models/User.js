import mongoose, { Schema } from 'mongoose'

const userSchema = Schema({
	username: {
		type: String,
		required: true
	},
	hashedPassword: {
		type: String,
		required: true
	}
} , {
	timestamps: true
})
export default mongoose.model('User', userSchema)