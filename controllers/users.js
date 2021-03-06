const mongoose = require('mongoose');

// function getAllUsers(req, res) {
//   mongoose.model('User').find({}, (err, users) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json({users});
//   });
// }
const { admin } = require('./firebase-service')

async function all(req, res) {
	try {
		mongoose.model('User').find({}, (err, users) => {
			if (err) {
				res.send(err);
			}
			res.json({users});
		});
	} catch (err) {
		return console.log(err)
	}
}

async function get(req, res) {
	try {
		const { id } = req.params
		const user = await admin.auth().getUser(id)
		return res.status(200).send({ user })
	} catch (err) {
		return console.log(err)
	}
}

async function patch(req, res) {
	try {
		const { id } = req.params
		const { displayName, password, email, role } = req.body

		if (!id || !displayName || !password || !email || !role) {
			return res.status(400).send({ message: 'Missing fields' })
		}

		const user = await admin.auth().updateUser(id, { displayName, password, email })
		await admin.auth().setCustomUserClaims(id, { role })
		return res.status(204).send({ user })
	} catch (err) {
		return console.log(err)
	}
}

async function remove(req, res) {
	try {
		const { id } = req.params
		await admin.auth().deleteUser(id)
		return res.status(204).send({})
	} catch (err) {
		return console.log(err)
	}
}

module.exports = {
	all,
	get,
	patch,
	remove,
}
