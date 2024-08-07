import { Layout } from '../../Layout'

export const PeopleNew: React.FC<{}> = () => {
  return (
    <Layout>
      <div className="">
        <form method="POST" action="/people">
          <div className="flex justify-end">
            <button className="da-btn da-btn-primary">Create</button>
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
            />
          </label>
        </form>
      </div>
    </Layout>
  )
}
