const { admin } = require('./firebase-service')

async function isAuthenticated(req, res, next) {
	try {
		const { jwt } = req.body
		if (!jwt) {
			return res.status(401).json({
				message: 'No token provided',
			})
		}
		const decodedToken = (admin.auth().DecodedIdToken = await admin.auth().verifyIdToken(jwt))
		const { uid, email, role, email_verified } = decodedToken
		if (!uid) {
			return res.status(401).json({
				message: 'Invalid token',
			})
		}
		req.user = decodedToken
		next()
	} catch (error) {
		return res.status(401).json({
			message: 'Invalid token',
		})
	}
}

module.exports = isAuthenticated
