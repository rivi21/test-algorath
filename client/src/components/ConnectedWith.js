import { useState } from "react"

const ConnectedWith = ({ connectedUsers }) => {
  /* console.log(connectedUsers); */
  return (
    <div >
      <h3>Connected with:</h3>
      <div className="parent">
        {connectedUsers.map(user => {
          return <div className="connections-item" key={user.first_name}>{user.first_name} {user.last_name}</div>
        })}
      </div>
    </div>
  )
}

export default ConnectedWith