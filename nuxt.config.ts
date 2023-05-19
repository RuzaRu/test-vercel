// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/prismic'],

	prismic: {
		endpoint: 'webhook-tester',
	},
	runtimeConfig: {
		mongoUrl: process.env.MONGO_URL,
	},
	nitro: {
		plugins: ['~/server/db/mongo.ts'],
	},
})
