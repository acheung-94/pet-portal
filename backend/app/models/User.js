import { mongoose } from 'mongoose'
const {model, Schema} = mongoose

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
export default model('User', userSchema)