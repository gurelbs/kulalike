const admin = require('./firebase-service')

async function checkIfAuthenticated(req, res, next) {
		try {
			const { authToken } = req.body
			if (!authToken) {
				return res.status(401).json({
					message: 'No token provided',
				})
			}
			const user = await admin.auth().verifyIdToken(authToken)
			if (!user.uid) {
				return res.status(401).json({
					message: 'Invalid token',
				})
			}
			req.user = user
			next()
		} catch (error) {
			return res.status(401).json({
				message: 'Invalid token',
			})
		}
}

module.exports = checkIfAuthenticated
