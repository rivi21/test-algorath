import { useState, useEffect } from "react";
import { URL_GET } from "./Settings";
import NewConnection from './components/NewConnection';
import NewUser from './components/NewUser';
import Stats from './components/Stats';
import UserConnections from './components/UserConnections';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch(URL_GET)
      .then(response => response.json())
      .then((data) => { setUsers(data) })
  }, [setUsers])

  return (
    <div className="App">
      <NewUser users={users} setUsers={setUsers}/>
      <NewConnection users={users} />
      <UserConnections />
      <Stats users={users} />
    </div>
  );
}

export default App;
