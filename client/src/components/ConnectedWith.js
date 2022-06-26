import { useState } from "react"

const ConnectedWith = ({ users }) => {
  const [connected, setConnected] = useState([])

  return (
    <div >
      <h3>Connected with:</h3>
      <div className="parent">
        {connected.map(user => {
          return <div className="connections-item" key={user.id}>{user.first_name} {user.last_name}</div>
        })}
      </div>
    </div>
  )
}

export default ConnectedWith