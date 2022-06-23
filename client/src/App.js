import './App.css';
import NewConnection from './components/NewConnection';
import NewUser from './components/NewUser';
import Stats from './components/Stats';
import UserConnections from './components/UserConnections';
import { useState, useEffect } from "react"
import { DUMMY_URL } from "./Settings"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(DUMMY_URL)
      .then(response => response.json())
      .then((data) => { setUsers(data.data) })
  }, [setUsers])

  return (
    <div className="App">
      <NewUser />
      <NewConnection users={users} setUsers={setUsers}/>
      <UserConnections />
      <Stats />
    </div>
  );
}

export default App;
