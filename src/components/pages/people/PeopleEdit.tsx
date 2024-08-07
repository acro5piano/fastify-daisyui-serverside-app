import clsx from 'clsx'
import type { Person } from '../../../types'
import { Layout } from '../../Layout'

type Props = {
  person: Person
  errors?: { [k in keyof Person]?: string }
}

export const PeopleEdit: React.FC<Props> = ({ person, errors = {} }) => {
  return (
    <Layout>
      <div className="">
        <form method="POST" action={`/people/${person.id}`}>
          <div className="flex justify-end">
            <button className="da-btn da-btn-primary">Update</button>
          </div>
          <label className="da-form-control w-full max-w-xs">
            <span className="da-label-text">Nickname</span>
            <input
              type="text"
              name="nickname"
              placeholder="Type here"
              className={clsx(
                'da-input da-input-bordered w-full max-w-xs',
                errors.nickname && 'da-input-error',
              )}
              defaultValue={person.nickname}
            />
            <span className="da-label-text-alt text-red-600">
              {errors.nickname}
            </span>
          </label>
        </form>
      </div>
    </Layout>
  )
}
