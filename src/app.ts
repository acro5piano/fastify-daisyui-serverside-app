import Fastify from 'fastify'

const app = Fastify({ logger: true })

app.listen({ port: 8000, host: '0.0.0.0' })
