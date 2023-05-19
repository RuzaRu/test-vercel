import { webhooks } from '../../db/models'
import initMongo from '../../db/mongo'

export default defineEventHandler(async (event) => {
	await initMongo()

	const { data } = await readBody(event)
	console.log(data)
	await webhooks.create(data)

	return {
		status: 'accepted',
	}
})
