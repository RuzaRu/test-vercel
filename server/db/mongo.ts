import mongoose from 'mongoose'

const config = useRuntimeConfig()

export default async () => {
	try {
		await mongoose.connect(config.mongoUrl)
		console.log('DB connection OK.')
	} catch (err) {
		console.error('DB connection failed.', err)
	}
}
