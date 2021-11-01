const { Router } = require('express')
const Project = require('../../schemas/ProjectSchema')
const router = Router()

router.post('/projects/newProject', async (req, res) => {
	try {
		const { project } = req.body
		if (!project) {
			res.status(400).json({
				message: 'לא ניתן ליצור פרויקט ריק',
			})
		} else {
			await Project.create(project)
			res.status(200).send('פרוייקט נשמר בהצלחה')
		}
	} catch (error) {
		console.log(error)
	}
})


router.get('/projects', (req, res) => {
	Project.find({}, (err, projects) => {
		if (err) {
			console.log(err)
		} else {
			res.json({projects})
		}
	})
})

module.exports = router
