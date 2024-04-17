import mongoose, { Schema } from 'mongoose'

const reminderSchema = Schema({
	title: {
		type: String,
		required: true
	},
	dueDate: {
		type: Date,
		required: true
	},
	performDate: {
		type: Date,
		required: false
	},
	description: {
		type: String,
		required: false
	},
	location: {
		type: String,
		required: false
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

export default reminderSchema