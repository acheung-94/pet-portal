import ApplicationController from '../controllers/ApplicationController.js'
import { convertObjectToStateShape } from '../../util/jsonUtils.js'
import { DEFAULT_IMAGE_URI } from '../../config/configConstants.js'
import Pet from '../models/Pet.js'
import { singleFileUpload } from '../../util/s3Utils.js'
import Reminder from '../models/Reminder.js'

export default class PetController extends ApplicationController{
	constructor() {
		super()
	}

	static async create(req, res, _) {

		const imageUrl = req.file ? 
			await singleFileUpload({file: req.file, isPublic: true}) :
			DEFAULT_IMAGE_URI
		const newPet = new Pet({
			name: req.body.name,
			dob: req.body.dob,
			sex: req.body.sex,
			species: req.body.species,
			color: req.body.color,
			breed: req.body.breed,
			microchipNumber: req.body.microchipNumber,
			insurancePolicyId: req.body.insurancePolicyId,
			weight: req.body.weight,
			owner: req.user._id,
			imageUrl: imageUrl
		})

		const pet = await newPet.save()
		if (pet) {
			return res.json(pet)
		} else {
			res.status(400).end()
		}
	}

	static async update(req, res, _) {
		const pet = await Pet.findOne({_id: req.params.id})

		if (req.user._id.toString() != pet.owner.toString()) {
			return res.status(403).end()
		}

		let imageUrl
		if (req.body.imageUpdated) {
			imageUrl = req.file ? 
				await singleFileUpload({file: req.file, isPublic: true}) :
				DEFAULT_IMAGE_URI
		}

		const allowed = [
			'name',
			'dob',
			'sex',
			'species',
			'color',
			'breed',
			'microchipNumber',
			'insurancePolicyId',
			'weight'
		]
		Object.entries(req.body).filter(
			([k, _]) => allowed.includes(k)
		).forEach(([k, v]) => {
			pet[k] = v
		})


		// this updates the pet's image url only if it was changed
		pet.imageUrl = imageUrl ?? pet.imageUrl

		if (await pet.save()) {
			return res.json(pet)
		} else {
			res.status(400).end()
		}
	}

	static async show(req, res, _) {
		const pet = await Pet.findOne({ _id: req.params.id })
		if (pet) {
			return res.json(pet)
		} else {
			res.status(404).end()
		}
	}

	static async delete(req, res, _) {
		const pet = await Pet.findOne({_id: req.params.id})

		if (req.user._id.toString() != pet.owner.toString()) {
			return res.status(403).end()
		}
		await Reminder.deleteMany({ pet: pet._id });
		const deleted = await Pet.deleteOne({ _id: req.params.id })
		if (deleted) {
			return res.json(deleted)
		} else {
			return res.status(404).end()
		}
	}

	static async index(_, res) {
		const pets = await Pet.find({})
		if (pets) {
			return res.json(convertObjectToStateShape(pets))
		} else {
			res.status(404).end()
		}
	}
}