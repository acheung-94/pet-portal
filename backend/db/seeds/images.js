import {mongoURI as db} from '../../config/keys.js'
import { DEFAULT_IMAGE_URI } from '../../config/configConstants.js'
import mongoose from 'mongoose'
import Pet from '../../app/models/Pet.js'



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