import ApplicationController from '../controllers/ApplicationController.js'
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
			weight: req.body.weight,
			owner: req.user._id
		})

		const pet = await newPet.save()
		if (pet) {
			return res.json({ pet })
		} else {
			res.status(400)
		}
	}

	static async update(req, res, _) {
		const pet = await Pet.findOne({_id: req.params.id})

		if (req.user._id.toString() != pet.owner.toString()) {
			return res.status(403).json({"status": "forbidden"})
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


		// const pet = await Pet.findByIdAndUpdate(
		// 	{ _id: req.params.id, owner: req.user._id }, 
		// 	updated, 
		// 	{ returnDocument: 'after' }
		// )
		if (await pet.save()) {
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
		const pet = await Pet.findOne({_id: req.params.id})

		if (req.user._id.toString() != pet.owner.toString()) {
			return res.status(403).json({"status": "forbidden"})
		}
		const deleted = await Pet.deleteOne({ _id: req.params.id })
		if (deleted) {
			return res.json({ deleted })
		} else {
			return res.status(404).json({"status": "not found"})
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