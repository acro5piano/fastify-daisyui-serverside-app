import type { Person } from '../../../types'
import { Layout } from '../../Layout'

type Props = {
  person: Person
}

export const PeopleEdit: React.FC<Props> = ({ person }) => {
  return (
    <Layout>
      <div className="">
        <form method="POST" action={`/people/${person.id}`}>
          <div className="flex justify-end">
            <button className="da-btn da-btn-primary">Update</button>
          </div>
          <label className="da-form-control w-full max-w-xs">
            <div className="da-label">
              <span className="da-label-text">Nickname</span>
            </div>
            <input
              type="text"
              name="nickname"
              placeholder="Type here"
              className="da-input da-input-bordered w-full max-w-xs"
              value={person.nickname}
            />
          </label>
        </form>
      </div>
    </Layout>
  )
}
