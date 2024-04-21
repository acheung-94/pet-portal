const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { faker } = require('@faker-js/faker')
const { mongoURI: db } = require('../config/keys.js')
const User = require('../models/User')
const Pet = require('../models/Pet')
const Reminder = require('../models/Reminder')

const NUM_SEED_USERS = 10
const NUM_SEED_PETS = 10
const NUM_SEED_REMINDERS = 30

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => {
		insertSeeds()
	})
	.catch(err => {
		console.error(err.stack)
		process.exit(1)
	})


const users = []
for (let i = 1; i < NUM_SEED_USERS; i++) {
	const firstName = faker.name.firstName()
	const lastName = faker.name.lastName()
	users.push(
		new User ({
			email: faker.internet.email(firstName, lastName),
			hashedPassword: bcrypt.hashSync(faker.internet.password(), 10)
		})
	)
}

const pets = []
for (let i = 0; i < NUM_SEED_PETS; i++) {
	const species = faker.helpers.randomize(['dog', 'cat', 'bird'])
	let breed = ''

	if (species === 'dog') {
		breed = faker.animal.dog()
	} else if (species === 'cat') {
		breed = faker.animal.cat()
	} else if (species === 'bird') {
		breed = faker.animal.bird()
	}


	const pet = new Pet({
		name: faker.name.firstName(),
		dob: faker.date.past(10),
		sex: faker.helpers.randomize(['male', 'female', 'unknown']),
		species: species,
		color: faker.commerce.color(),
		breed: breed,
		microchipNumber: faker.datatype.number(),
		insurancePolicyId: faker.finance.account(),
		weight: faker.datatype.float({ min: 5, max: 50 }),
		owner: users[i % NUM_SEED_USERS]._id,
		imageUrl: faker.image.animals()
	})
	pets.push(pet)
}

const reminders = []
for (let i = 0; i < NUM_SEED_REMINDERS; i++) {
	const type = faker.helpers.randomize(['appointment', 'vaccination', 'medication'])
	let titleOptions = []

	if (type === 'vaccination') {
		titleOptions = ['Rabies', 'FVRCP', 'FELV']
	} else if (type === 'appointment') {
		titleOptions = ['Wellness', 'Illness', 'Procedure']
	} else if (type === 'medication') {
		titleOptions = ['Flea/Tick Prevention', 'Heartworm Prevention']
	}

	const reminder = new Reminder({
		title: faker.helpers.randomize(titleOptions),
		dueDate: faker.date.future(1),
		performDate: faker.date.future(2),
		description: faker.lorem.sentence(),
		location: faker.address.cityName(),
		type: type,
		pet: pets[i % NUM_SEED_PETS]._id,
		user: users[i % NUM_SEED_USERS]._id
	})

	reminders.push(reminder)
}

const insertSeeds = () => {
	console.log('Resetting db and seeding users, pets, and reminders...')
  
	User.collection.drop()
		.then(() => Pet.collection.drop())
		.then(() => Reminder.collection.drop())
		.then(() => {
		
			console.log('Inserting users...')
			return User.insertMany(users)
		})
		.then(() => {
			console.log('Inserting pets...')
			return Pet.insertMany(pets)
		})
		.then(() => {
			console.log('Inserting reminders...')
			return Reminder.insertMany(reminders)
		})
		.then(() => {
			console.log('Done!')
			mongoose.disconnect()
		})
		.catch(err => {
			console.error('Error during seeding:', err.stack)
			process.exit(1)
		})
}