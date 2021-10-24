const mongoose = require('mongoose');

async function mongooseConnect(URI) {
	try {
		await mongoose.connect(URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log('MongoDB connected')
	} catch (error) {
		console.log('MongoDB connection error', error)
	}
}

module.exports = mongooseConnect;

// import path, { dirname } from 'path'
// import { fileURLToPath } from 'url'
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)