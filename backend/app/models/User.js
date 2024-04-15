import { Mongoose } from 'mongoose'
const mongoose = Mongoose()

const userSchema = new mongoose.Schema({
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