const { Schema, model } = require('mongoose')

const userSchema = new Schema({
	name: String,
	email: String,
	email_verified: Boolean,
	picture: String,
	user_id: String,
	provider: String,
	auth_time: Number,
	iat: Number,
	exp: Number,
	iss: String,
	sub: String,
	aud: String,
	uid: String,
	firebase: Object,
})

const User = new model('User', userSchema)

async function findOrCreateUser(req, res, next) {
	try {
		const { uid, email, name, email_verified } = req.user
		if (email_verified) {
			await User.findOne({ email }).exec(async (err, user) => {
				if (err) {
					return res.json('משהו כאן הסתבך...')
				} else {
					if (user) {
						console.log(`בוצעה כניסה למערכת על ידי ${name}. משתמש קיים.`)
						next()
					} else {
						console.log('משתמש לא נמצא במערכת. \nיוצר פרופיל חדש')
						const newUser = new User(req.user)
						await newUser.save()
						console.log(`${name} נוצר בהצלחה`)
						next()
					}
				}
			})
		}
	} catch (error) {
		console.log(error)
		res.send({
			error: 'אירעה שגיאה במערכת',
		})
	}
}

module.exports = findOrCreateUser
