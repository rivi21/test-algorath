
const SelectUser = ({ users, handleUser }) => {
    return (
        <div className="content-select">
            <label htmlFor="users"><h3>Choose User: </h3></label>
            <select className="content-select select"name="users" id="users" onChange={(e) => handleUser(e)}>
                <option value="">--Please choose an option--</option>
                {users.map((user) => {
                    return (
                        <option key={user.id} value={user.id}>
                            {user.first_name} {user.last_name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default SelectUser