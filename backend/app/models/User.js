import { model, Schema } from 'mongoose'


const userSchema = new Schema({
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