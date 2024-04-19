import {GetObjectCommand, S3Client} from '@aws-sdk/client-s3'
import {getSignedUrl} from '@aws-sdk/s3-request-presigner'
import multer from 'multer'
import path from 'path'
import {Upload} from '@aws-sdk/lib-storage'

const NAME_OF_BUCKET = 'mern-pet-portal'

export const singleFileUpload = async ({file, isPublic = false}) => {
	const {originalName, buffer} =  file
	
	const Key = new Date().getTime().toString() + path.extname(originalName)

	const params = {
		Bucket: NAME_OF_BUCKET,
		Key: isPublic ? `public/${Key}` : Key,
		Body: buffer
	}
	const client = new S3Client({})

	try {
		const parallelUploadS3 = new Upload({client, params})
		parallelUploadS3.on('httpUploadProgress', (progress) => {
			console.log(progress)
		})
		const result = await parallelUploadS3.done()
		return isPublic ? result.Location : result.Key
	} catch (err) {
		console.log(err)
	}
}

export const multipleFilesUpload = async ({files, isPublic = false}) => {
	return await Promise.all(
		files.map((file) => singleFileUpload({file, isPublic}))
	)
}

export const retrievePrivateFileUrl = async key => {
	let fileUrl
	const client = new S3Client({})
	if (key) {
		const command = new GetObjectCommand({
			Bucket: NAME_OF_BUCKET,
			Key: key
		})
		fileUrl = await getSignedUrl(client, command)
	}
	return fileUrl || key
}

export const storage = multer.memoryStorage({
	destination: function (req, file, callback) {
		callback(null, '')
	}
})

export const singleMulterUpload = nameOfKey => 
	multer({storage: storage}).single(nameOfKey)

export const multipleMulterUpload = nameOfKey => 
	multer({storage: storage}).array(nameOfKey)

