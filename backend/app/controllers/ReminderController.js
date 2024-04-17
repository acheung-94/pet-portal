import ApplicationController from "./ApplicationController.js";
import Reminder from '../models/Reminder.js'

export default class ReminderController extends ApplicationController {
	static async show(req, res, _) {
		const reminder = await Reminder.findOne({_id: req.params.id})
		if (reminder) {
			return res.json({reminder})
		}
		return res.status(404)
	}
	static async indexByPet(req, res, _) {
		const reminders = await Reminder.find(
			{pet: req.params.id}
		)
		if (reminders) {
			return res.json({reminders})
		}
		return res.status(404)
	}
	static async indexByUser(req, res, _) {
		const reminders = await Reminder.find(
			{user: req.params.id}
		)
		if (reminders) {
			return res.json({reminders})
		}
		return res.status(404)
	}
	static async update(req, res, _) {
		const allowed = [
			'title',
			'dueDate',
			'performDate',
			'description',
			'location'
		]
		const updated = Object.fromEntries(
			Object.entries(req.body).filter(
				([k, _]) => allowed.includes(k)
			)
		)

		const reminder = await Reminder.findByIdAndUpdate(
			{_id: req.params.id},
			updated,
			{returnDocument: 'after'}
		)

		if (reminder) {
			return res.json({ reminder })
		}
		return res.status(400)
	}
	static async delete(req, res, _) {
		const result = await Reminder.findByIdAndDelete(req.params.id)
		if (result) {
			return res.json({result})
		}
		return res.status(404)
	}
	static async create(req, res, _) {
		const newReminder = Reminder.new({
			title: req.body.title,
			dueDate: req.body.dueDate,
			performDate: req.body.performDate,
			description: req.body.description,
			location: req.body.description,
			pet: req.body.pet,
			user: req.user._id
		})
		const pet = await newPet.save()
		if (pet) {
			return res.json( {pet} )
		}
		return res.status(400)
	}
}