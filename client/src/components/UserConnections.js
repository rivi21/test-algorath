import { useState } from "react"
import { DUMMY_URL } from "../Settings"

const UserConnections = () => {
  const [connected, setConnected] = useState([])

  const searchConnections = () => {
    fetch(DUMMY_URL) // En real hace falta parámetro con el nombre del usuario
      .then(response => response.json())
      .then(data => setConnected(data.data))
  }

  return (
    <div>
      <h2>User connections</h2>
      <div className="user-connections-form">
        <label htmlFor="user"><p>Search connections by user:</p></label>
        <input className="user-connections-item"type="text" placeholder="user name" />
        <input className="user-connections-button"type="button" value="Search" onClick={searchConnections} />
      </div>
      <div>
        <ul classNAme="user-connections-list">
          {connected.map(user => {
            return <li className="connections-item" key={user.id}>{user.first_name} {user.last_name}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default UserConnections