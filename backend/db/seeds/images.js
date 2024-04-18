import {mongoURI as db} from '../../config/keys.js'
import mongoose from 'mongoose'
import Pet from '../../app/models/Pet.js'

export const DEFAULT_IMAGE_URI = 'https://pet-portal-assets.s3.us-west-1.amazonaws.com/pet-first-aid-svgrepo-com.svg'

mongoose.connect(db)
	.then(() => {
		console.log('Connected to DB successfully')
		initializeImages()
	}).catch(err => {
		console.error(err.stack)
		process.exit(1)
	})

const initializeImages = async () => {
	console.log('initializing default animal pictures')
	const result = await Pet.updateMany({}, { imageUrl: DEFAULT_IMAGE_URI})
	console.log(result)
	console.log('done')
	mongoose.disconnect()
}