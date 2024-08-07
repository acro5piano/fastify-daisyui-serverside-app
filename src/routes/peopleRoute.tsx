import { db } from '../db'
import { renderToStaticMarkup } from 'react-dom/server'
import { PeopleList } from '../components/pages/people/PeopleList'
import { PeopleNew } from '../components/pages/people/PeopleNew'
import {
  Type,
  type FastifyPluginAsyncTypebox,
} from '@fastify/type-provider-typebox'

export const peopleRoute: FastifyPluginAsyncTypebox = async (app) => {
  app.get('/', async (req, res) => {
    const people = await db.selectFrom('person').selectAll().execute()
    res
      .type('text/html')
      .send(renderToStaticMarkup(<PeopleList people={people} />))
  })
  app.get('/new', async (req, res) => {
    res.type('text/html').send(renderToStaticMarkup(<PeopleNew />))
  })
  app.post(
    '/',
    { schema: { body: Type.Object({ nickname: Type.String() }) } },
    async (req, res) => {
      await db.insertInto('person').values(req.body).executeTakeFirstOrThrow()
      res.redirect('/people')
    },
  )
}
