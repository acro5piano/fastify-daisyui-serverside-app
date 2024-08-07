import type { Person } from '../../../types'
import { Layout } from '../../Layout'

type PeopleProps = {
  people: Person[]
}

export const PeopleList: React.FC<PeopleProps> = ({ people }) => {
  return (
    <Layout>
      <div className="">
        <div className="flex justify-end">
          <a href="/people/new" className="da-btn da-btn-primary">
            Create
          </a>
        </div>
        <div className="">
          <table className="da-table da-table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nickname</th>
                <th>Gender</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {people.map((person) => (
                <tr key={person.id}>
                  <td>
                    <code>{person.id}</code>
                  </td>
                  <td>{person.nickname}</td>
                  <td>{person.gender}</td>
                  <td>
                    <a
                      className="da-btn da-btn-xs"
                      href={`/people/${person.id}`}
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}
