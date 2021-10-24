const { Router } = require('express')
const router = Router()
const checkIfAuthenticated = require('../../controllers/authcontroller')
const findOrCreateUser = require('../../controllers/findOrCreateUser')

router.post('/auth/login', checkIfAuthenticated, findOrCreateUser, (req, res) => {
	try {
		console.log(req.user)
		res.status(200).json({
			message: 'User logged in',
			user: req.user,
		})
	} catch (error) {
		console.log(error)
	}
})

module.exports = router
