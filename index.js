import express from 'express';
import path from 'path';

const app = express();
const prod = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT || 4000;

if (prod) {
	app.use(express.static('build'))
	app.get('/*', (req, res) => {
		let file = path.join('build', 'index.html')
		res.sendFile(file, { root: __dirname })
	})
}
app.use((req,res) => {
	res.status(404).send('404');
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});