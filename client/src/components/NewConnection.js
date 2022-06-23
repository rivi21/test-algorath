

const NewConnection = ({users}) => {

  return (
    <div>
      <h2>NewConnection</h2>
      <div className="new-connect-container">
        <div className="new-connect-item">
          <label htmlFor="users"><h3>Choose User 1: </h3></label>
          <select name="users" id="users">
            {users.map((user) => {
              return <option key={user.id} value="volvo">{user.first_name} {user.last_name}</option>
            })}
          </select>
        </div>
        <div className="new-connect-item">
          <label htmlFor="users"><h3>Choose User 2: </h3></label>
          <select name="users" id="users">
            {users.map((user) => {
              return <option key={user.id} value="volvo">{user.first_name} {user.last_name}</option>
            })}
          </select>
        </div>
      </div>
      <button className="new-connect-button">Connect Both</button>
    </div>
  )
}

export default NewConnection