import Fastify from 'fastify'
import { peopleRoute } from './routes/peopleRoute'
import { migrateUp } from './db'
import fastifyFormbody from '@fastify/formbody'
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import fastifyStatic from '@fastify/static'

const app = Fastify({ logger: true }).withTypeProvider<TypeBoxTypeProvider>()

app.register(fastifyFormbody)
app.register(fastifyStatic, { root: __dirname + '/../static' })
app.register(peopleRoute, { prefix: '/people' })

app.listen({ port: 8000, host: '0.0.0.0' }).then(async () => {
  await migrateUp()
})
