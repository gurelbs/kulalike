require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongooseConnect = require('./utils/mongooseConnect.js')
const api = require('./api')
const app = express()
const prod = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT || 4000
const { MONGO_URI } = process.env

mongooseConnect(MONGO_URI)

if (prod) {
	app.use(express.static('build'))
	app.get('/*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
	})
}
app.use(express.json())
app.use(cors({ origin: '*' }))
app.use(express.urlencoded({ extended: true }))
app.use(api)
app.use((req, res) => res.status(404).send('404'))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
