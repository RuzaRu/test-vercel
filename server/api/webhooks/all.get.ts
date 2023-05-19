import { webhooks } from '../../db/models'

export default defineEventHandler(async (event) => {
	const data = await webhooks.find({})

	return {
		data,
	}
})
