const { Router } = require('express')
const router = Router()
const getAllUsers = require('../../controllers/getAllUsers')

router.get('/allUsers', getAllUsers)

module.exports = router
