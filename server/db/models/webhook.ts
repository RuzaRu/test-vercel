import mongoose from 'mongoose'

const schema = new mongoose.Schema(
	{
		data: {},
	},
	{ timestamps: true, strict: true, strictQuery: true }
)

export default mongoose.model('Webhook', schema, 'webhook')
