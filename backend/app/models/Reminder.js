import mongoose, { Schema } from 'mongoose'

const reminderSchema = Schema({
	title: {
		type: String,
		required: [true, 'Must select a title.'],
		maxLength: 32
	},
	dueDate: {
		type: Date,
		required: [true, 'Must enter a date.'],
		min: [Date.now, 'Due date can\'t be in the past.']
	},
	performDate: {
		type: Date,
		required: false,
		max: [Date.now, 'Perform date can\'t be in the future.']
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