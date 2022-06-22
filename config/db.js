import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.DB_URL)

		console.log(`MongoDB is connected! ${conn.connection.host}`.cyan.underline)
	} catch (err) {
		console.error(`Error: ${err.message}`.red.underline.bold)
		process.exit(1)
	}
}

export default connectDB
