import type { Person } from '../../../types'

export const PeopleNew: React.FC<{}> = () => {
  return (
    <div className="">
      <form method="POST" action="/people">
        <input type="text" name="nickname" />
      </form>
    </div>
  )
}
