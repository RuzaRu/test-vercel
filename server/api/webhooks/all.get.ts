import { webhooks } from '../../db/models'
import initMongo from '../../db/mongo'

export default defineEventHandler(async (event) => {
	await initMongo()
	const data = await webhooks.find({})

	return {
		data,
	}
})
