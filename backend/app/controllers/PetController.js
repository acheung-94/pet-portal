import ApplicationController from '../controllers/ApplicationController'
import Pet from '../models/Pet.js'

export default class PetController extends ApplicationController{
	constructor() {
		super()
	}

	static async create(req, res, _) {
		const newPet = new Pet({
			name: req.body.name,
			dob: req.body.dob,
			sex: req.body.sex,
			species: req.body.species,
			color: req.body.color,
			breed: req.body.breed,
			microchipNumber: req.body.microchipNumber,
			insurancePolicyId: req.body.insurancePolicyId,
			weight: req.body.weight
		})

		const pet = await newPet.save()
		if (pet) {
			return res.json({ pet })
		} else {
			res.status(400)
		}
	}

	static async update(req, res, _) {
		const updatedPet = new Pet({
			name: req.body.name,
			dob: req.body.dob,
			sex: req.body.sex,
			species: pet.body.species,
			color: req.body.color,
			breed: req.body.breed,
			microchipNumber: req.body.microchipNumber,
			insurancePolicyId: req.body.insurancePolicyId,
			weight: req.body.weight
		})

		const pet = await Pet.findOneAndUpdate({ _id: req.params.id }, updatedPet)
		if (pet) {
			return res.json({ pet })
		} else {
			res.status(400)
		}
	}

	static async show(req, res, _) {
		const pet = await Pet.findOne({ _id: req.params.id })
		if (pet) {
			return res.json({ pet })
		} else {
			res.status(404)
		}
	}

	static async delete(req, res, _) {
		const pet = await Pet.deleteOne({ _id: req.params.id })
		if (pet) {
			return res.json({ pet })
		} else {
			res.status(404)
		}
	}

	static async index(req, res, _) {
		const pets = await Pet.find({})
		if (pets) {
			return res.json({ pets })
		} else {
			res.status(404)
		}
	}
}