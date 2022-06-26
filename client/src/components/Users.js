import { useState } from "react"
import { URL_GET_CONNECTIONS, URL_POST_CONNECTIONS } from "../Settings";
import ConnectTo from "./ConnectTo";
import SelectUser from "./SelectUser";
import ConnectedWith from "./ConnectedWith";

const Users = ({ users }) => {

  const [rest, setRest] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(0);
  const [connectedUsersIds, setConnectedUsersIds] = useState([]);

  const handleUser = (e) => {
    const userId = e.target.value;
    const usersCopy = [...users];
    setRest(usersCopy.filter((user) => user.id != userId));
    setSelectedUserId(userId);
  }

  const getConnected = async (userToConnectId) => {
    await fetch(`${URL_GET_CONNECTIONS} ${selectedUserId}`)
      .then(res => res.json())
      .then(data => {
        setConnectedUsersIds(data.map(user => user.id))
      });
    if (connectedUsersIds.includes(userToConnectId)) {
      alert("Both users are already connected")
    } else {
      await fetch(URL_POST_CONNECTIONS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: selectedUserId,
          connectedId: userToConnectId
        })
      })
        .then(response => response.json())
        .then(data => console.log(data))/* REFACTORIZAR ESTO */
    }
  }

  return (
    <div>
      <h2>User Connections</h2>
      <div className="new-connect-container">
        <SelectUser users={users} handleUser={handleUser} />
        <ConnectTo rest={rest} getConnected={getConnected} />
        <ConnectedWith users={users} />
      </div>
    </div>
  )
}

export default Users