const { Router } = require('express')
const isAuthenticated = require('../../controllers/isAuthenticated')
const isAuthorized = require('../../controllers/isAuthorized')
const { all, get, patch, remove } = require('../../controllers/users')
const router = Router()

router
.get(
  '/users', 
  all
)
.get(
	'/users/:id',
	isAuthenticated,
	isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),
	get
)
.patch(
	'/users/:id',
	isAuthenticated,
	isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),
	patch
)
.delete(
	'/users/:id',
	isAuthenticated,
	isAuthorized({ hasRole: ['admin', 'manager'] }),
	remove
)

module.exports = router
