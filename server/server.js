import express from 'express'
import authRoute from './routes/auth.js'
import postRoute from './routes/post.js'
import uploadRoute from './routes/upload.js'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import cors from 'cors'

dotenv.config()
connectDB()

const app = express()

app.use(express.json())
app.use('/uploads', express.static('uploads'))
app.use(cors())

app.get('/', async (req, res) => {
	res.send('API is running!')
})

app.use('/auth', authRoute)
app.use('/posts', postRoute)
app.use('/upload', uploadRoute)

const PORT = process.env.PORT || 4444

app.listen(PORT, (err) => {
	if (err) {
		console.log(`${err}`.red.bold)
		return
	}
	console.log(`Server is running on ${PORT} port.`.yellow.bold)
})
