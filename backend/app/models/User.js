const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
export default mongoose.model('User', userSchema)