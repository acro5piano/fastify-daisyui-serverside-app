import type { Person } from '../../../types'

type PeopleProps = {
  people: Person[]
}

export const PeopleList: React.FC<PeopleProps> = ({ people }) => {
  return (
    <div className="">
      <a href="/people/new">Create</a>
      <div className="">
        <table>
          {people.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.nickname}</td>
              <td>{person.gender}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  )
}
