const { messaging } = require('./firebase-service')

function sendNotificationToClient(tokens, data) {
	// Send a message to the devices corresponding to the provided
	// registration tokens.
	messaging
		.sendMulticast({ tokens, data })
		.then(response => {
			// Response is an object of the form { responses: [] }
			const successes = response.responses.filter(r => r.success === true).length
			const failures = response.responses.filter(r => r.success === false).length
			console.log('Notifications sent:', `${successes} successful, ${failures} failed`)
		})
		.catch(error => {
			console.log('Error sending message:', error)
		})
}

async function addMessage(req, res){
	const { name, message } = req.body
	const columns = 'name, message'
	const values = `'${name}', '${message}'`
	try {
		const data = await messagesModel.insertWithReturn(columns, values)
		const tokens = []
		const notificationData = {
			title: 'הודעה חדשה נשלחה',
			body: message,
		}
		sendNotificationToClient(tokens, notificationData)
		res.status(200).json({ messages: data.rows })
	} catch (err) {
		res.status(200).json({ messages: err.stack })
	}
}

module.exports = addMessage
