import type { Person } from '../../../types'

type Props = {
  person: Person
}

export const PeopleEdit: React.FC<Props> = ({ person }) => {
  return (
    <div className="">
      <form method="POST" action={`/people/${person.id}`}>
        <input type="text" name="nickname" value={person.nickname} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
