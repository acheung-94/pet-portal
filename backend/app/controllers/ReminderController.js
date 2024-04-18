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

		const updated = await reminder.save()

		if (updated) {
			return res.json(updated)
		}
		return res.status(400).end()
	}
	static async delete(req, res, _) {
		const reminder = await Reminder.findById(req.params.id)
		console.log('REMINDER IS', reminder)
		if (req.user._id.toString() !== reminder.user.toString()) {
			return res.status(403).end()
		}
		const result = await Reminder.deleteOne()
		console.log('RESULT IS', result)

		if (result) {
			return res.json(result)
		}
		return res.status(404).end()
	}
	static async create(req, res, _) {
		const newReminder = new Reminder({
			type: req.body.type,
			title: req.body.title,
			dueDate: req.body.dueDate,
			performDate: req.body.performDate,
			description: req.body.description,
			location: req.body.description,
			pet: req.body.pet,
			user: req.user._id
		})
		const reminder = await newReminder.save()
		if (reminder) {
			return res.json( reminder )
		}
		return res.status(400).end()
	}
}