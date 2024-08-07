import { db } from '../db'
import { renderToStaticMarkup } from 'react-dom/server'
import { PeopleList } from '../components/pages/people/PeopleList'
import { PeopleNew } from '../components/pages/people/PeopleNew'
import {
  Type,
  type FastifyPluginAsyncTypebox,
} from '@fastify/type-provider-typebox'
import { PeopleEdit } from '../components/pages/people/PeopleEdit'

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

  app.get(
    '/:personId',
    {
      schema: {
        params: Type.Object({ personId: Type.String() }),
      },
    },
    async (req, res) => {
      const person = await db
        .selectFrom('person')
        .selectAll()
        .where('id', '=', req.params.personId)
        .executeTakeFirstOrThrow()
      res
        .type('text/html')
        .send(renderToStaticMarkup(<PeopleEdit person={person} />))
    },
  )

  app.post(
    '/:personId',
    {
      schema: {
        params: Type.Object({ personId: Type.String() }),
        body: Type.Object({
          nickname: Type.String({ minLength: 1, maxLength: 5 }),
        }),
      },
      attachValidation: true,
    },
    async (req, res) => {
      if (req.validationError) {
        const errors = req.validationError.validation.reduce(
          (errors: any, validation: any) => ({
            ...errors,
            [validation.instancePath.replace('/', '')]: validation.message,
          }),
          {} as any,
        )
        const person = await db
          .selectFrom('person')
          .selectAll()
          .where('id', '=', req.params.personId)
          .executeTakeFirstOrThrow()
        res
          .type('text/html')
          .send(
            renderToStaticMarkup(
              <PeopleEdit
                person={{ ...person, ...req.body }}
                errors={errors}
              />,
            ),
          )
      } else {
        await db
          .updateTable('person')
          .set(req.body)
          .where('id', '=', req.params.personId)
          .executeTakeFirstOrThrow()
        res.redirect('/people')
      }
    },
  )
}
