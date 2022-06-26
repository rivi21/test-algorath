import { useState, useEffect } from "react";
import { URL_GET } from "./Settings";
import Users from './components/Users';
import NewUser from './components/NewUser';
import Stats from './components/Stats';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(URL_GET)
      .then(response => response.json())
      .then((data) => setUsers(data))
  }, [setUsers])

  return (
    <div className="App">
      <NewUser users={users} setUsers={setUsers} />
      <Users users={users} />
      <Stats users={users} />
    </div>
  );
}

export default App;
