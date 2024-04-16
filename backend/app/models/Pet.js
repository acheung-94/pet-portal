import mongoose, { Schema } from 'mongoose'

const petSchema = Schema({
	name: {
		type: String,
		required: true
	},
	dob: {
		type: Date,
		required: true
	},
	sex: {
		type: String,
		lowercase: true,
		trim: true,
		match: /(male|female|unknown)/
	},
	species: {
		type: String,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	breed: {
		type: String,
		required: false
	},
	microchipNumber: {
		type: Number,
		required: false
	},
	insurancePolicyId: {
		type: String,
		required: false
	},
	weight: {
		type: Number,
		required: false
	},
	ownerId: {
		type: mongoose.ObjectId
	}
})

export default mongoose.model('Pet', petSchema)