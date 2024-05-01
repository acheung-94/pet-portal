import ApplicationController from './ApplicationController.js'
import { convertObjectToStateShape } from '../../util/jsonUtils.js'
import Reminder from '../models/Reminder.js'

export default class ReminderController extends ApplicationController {
	static async show(req, res, _) {
		const reminder = await Reminder.findOne({_id: req.params.id})
		if (reminder) {
			return res.json({reminder})
		}
		return res.status(404).end()
	}
	static async indexByPet(req, res, _) {
		const reminders = await Reminder.find(
			{pet: req.params.id}
		)
		if (reminders) {
			return res.json(convertObjectToStateShape(reminders))
		}
		return res.status(404).end()
	}
	static async indexByUser(req, res, _) {
		const reminders = await Reminder.find(
			{user: req.params.id}
		)
		if (reminders) {
			return res.json(convertObjectToStateShape(reminders))
		}
		return res.status(404).end()
	}
	static async update(req, res, _) {
		const reminder = await Reminder.findById(req.params.id)
		if (req.user._id.toString() !== reminder.user.toString()) {
			return res.status(403).end()
		}
		const allowed = [
			'type',
			'title',
			'dueDate',
			'performDate',
			'description',
			'location'
		]
		Object.entries(req.body).filter(
			([k, _]) => allowed.includes(k)
		).forEach(([k, v]) => {
			reminder[k] = v
		})
		try{
			const updated = await reminder.save()
			if (updated) {
				return res.json(updated)
			}
			return res.status(400).end()
		} catch (err) {
			return res.status(422).json(err)
		}
	}
	static async delete(req, res, _) {
		const reminder = await Reminder.findById(req.params.id)
		if (req.user._id.toString() !== reminder.user.toString()) {
			return res.status(403).end()
		}
		const result = await Reminder.deleteOne({ _id: req.params.id })

		if (result) {
			return res.json(result)
		}
		return res.status(404).end()
	}
	static async create(req, res, _) {
		try {
			const newReminder = new Reminder({
				type: req.body.type,
				title: req.body.title,
				dueDate: req.body.dueDate,
				performDate: req.body.performDate,
				description: req.body.description,
				location: req.body.location,
				pet: req.body.pet,
				user: req.user._id
			})
			const reminder = await newReminder.save()
			return res.json( reminder )
		} catch (error) {
			if(error.name === 'ValidationError') {
				const validationErrors = {}
				for (let err in error.errors) {
					validationErrors[err] = error.errors[err].message
				}
				return res.status(422).json({ errors: validationErrors })
			} else {
				return res.status(500).json({ error: 'Internal server error' })
			}

		}
	}
}