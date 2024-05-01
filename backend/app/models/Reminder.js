import mongoose, { Schema } from 'mongoose'

const reminderSchema = Schema({
	title: {
		type: String,
		required: true,
		maxLength: 32
	},
	dueDate: {
		type: Date,
		required: true,
		min: Date.now
	},
	performDate: {
		type: Date,
		required: false,
		max: Date.now
	},
	description: {
		type: String,
		required: false,
		maxLength: 512
	},
	location: {
		type: String,
		required: false,
		maxLength: 256
	},
	type: {
		type: String,
		lowercase: true,
		enum: ['appointment', 'vaccination', 'medication', 'surgery']
	},
	pet: {
		type: Schema.Types.ObjectId,
		ref: 'Pet'
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
})

export default mongoose.model('Reminder', reminderSchema)