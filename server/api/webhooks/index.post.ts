import { webhooks } from '../../db/models'

export default defineEventHandler(async (event) => {
	const { data } = await readBody(event)
	console.log(data)
	await webhooks.create(data)

	return {
		status: 'accepted',
	}
})
