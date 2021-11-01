const { Router } = require('express')
const router = Router()
const checkIfAuthenticated = require('../../controllers/isAuthenticated')
const findOrCreateUser = require('../../controllers/findOrCreateUser')

router.post('/auth/login', checkIfAuthenticated, findOrCreateUser, (req, res) => {
	try {
		console.log(req.user)
		res.status(200).json('success')
	} catch (error) {
		console.log(error)
	}
})

module.exports = router
