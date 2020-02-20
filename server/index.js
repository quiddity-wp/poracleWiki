const {
	Nuxt,
	Builder
} = require('nuxt')
const fastify = require('fastify')({
	logger: true
})

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
	// Instantiate nuxt.js
	const nuxt = new Nuxt(config)

	const {
		host,
		port
	} = nuxt.options.server

	await nuxt.ready()
	// Build only in dev mode
	if (config.dev) {
		const builder = new Builder(nuxt)
		await builder.build()
	}

	fastify.use(nuxt.render)

	fastify.listen(port, host, (err, address) => {
		if (err) {
			fastify.log.error(err)
			process.exit(1)
		}
	})
}

start()
