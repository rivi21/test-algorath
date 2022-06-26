import { useState } from "react"
import ConnectTo from "./ConnectTo";
import SelectUser from "./SelectUser";
import ConnectedWith from "./ConnectedWith";
import { URL_GET_CONNECTIONS } from "../Settings";

const Users = ({ users }) => {

  const [rest, setRest] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(0);
  const [connectedUsers, setConnectedUsers] = useState([]);
  const [connectedUsersIds, setConnectedUsersIds] = useState([]);
  
  const usersCopy = [...users];

  const handleUser = async(e) => {
    const userId = e.target.value;  
    setRest(usersCopy.filter((user) => user.id != userId));
    setSelectedUserId(userId);
    await fetch(`${URL_GET_CONNECTIONS} ${userId}`)
            .then(res => res.json())
            .then(data => {
                setConnectedUsersIds(data.map(user => user.id))
                setConnectedUsers(data)
            });
  }

  return (
    <div>
      <h2>User Connections</h2>
      <div className="new-connect-container">
        <SelectUser users={users} handleUser={handleUser} />
        <ConnectTo rest={rest} selectedUserId={selectedUserId} connectedUsersIds={connectedUsersIds} />
        <ConnectedWith connectedUsers={connectedUsers} />
      </div>
    </div>
  )
}

export default Users