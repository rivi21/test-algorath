import { useState } from "react"
import { URL_POST_CONNECTIONS } from "../Settings";


const NewConnection = ({ users }) => {

  const [rest, setRest] = useState([]);
  // const [isActive, setActive] = useState("false");
  const [selectedUserId, setSelectedUserId] = useState(0)
  /*const handleToggle = () => {
    setActive(!isActive);
  }; */

  const handleUser = (e) => {
    const userId = e.target.value;
    const usersCopy = [...users];
    setRest(usersCopy.filter((user) => user.id != userId));
    setSelectedUserId(userId);
  }

  const getConnected = (userToConnectId) => {
    fetch(URL_POST_CONNECTIONS, {
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
      .then(data => console.log(data))
  }
  /* const toggleConnection = (e, index) => {
    if (e.target.tagName !== 'BUTTON') {
      //copia del estado original para poder manipularlo
      const newRest = [...rest];
      //toggle a la propiedad a true o a false
      newRest[index].completed = !newRest[index].completed;
      //Actualizo el valor del estado
      setTodos(newTodos);
    }
  }; */

  return (
    <div>
      <h2>NewConnection</h2>
      <div className="new-connect-container">
        <div className="new-connect-item one">
          <label htmlFor="users"><h3>Choose User: </h3></label>
          <select name="users" id="users" onChange={(e) => handleUser(e)}>
            {users.map((user) => {
              return (
                <option key={user.id} value={user.id}>
                  {user.first_name} {user.last_name}
                </option>
              )
            })}
          </select>
          <button className="new-connect-button">Connect Both</button>
        </div>
        <div className="new-connect-item">
          <h3>Connect to: </h3>
          {rest.map((user) => {
            return (
              <div
                className="connections-item" /* `${isActive ? "connected" : null} */
                key={user.id}
                onClick={e => {
                  /* handleToggle(); */
                  getConnected(user.id)
                }}
              >
                {user.first_name} {user.last_name}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default NewConnection