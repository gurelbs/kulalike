const { Schema, model } = require('mongoose')

const Project = new Schema({
	author: String,
	title: String,
	description: String,
	createdAt: String,
	updatedAt: String,
	id: String,
	tasks: [
		{
			taskName: String,
			taskDescription: String,
			taskStatus: String,
			createdDate: String,
			taskAssociates: Array,
			taskCreator: String,
			taskCreatorDetails: {
				fullName: String,
				email: String,
				moreDetails: Object,
			},
		},
	],
})

module.exports = model('Project', Project)
