import { useState, useEffect } from "react";
import { DUMMY_URL } from "./Settings";
import NewConnection from './components/NewConnection';
import NewUser from './components/NewUser';
import Stats from './components/Stats';
import UserConnections from './components/UserConnections';
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    fetch(DUMMY_URL)
      .then(response => response.json())
      .then((data) => { setUsers(data.data) })
  }, [setUsers])

  return (
    <div className="App">
      <NewUser users={users} setUsers={setUsers}/>
      <NewConnection users={users} />
      <UserConnections />
      <Stats />
    </div>
  );
}

export default App;
