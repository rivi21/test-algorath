import './App.css';
import NewConnection from './components/NewConnection';
import NewUser from './components/NewUser';
import Stats from './components/Stats';
import UserConnections from './components/UserConnections';

function App() {
  return (
    <div className="App">
      <NewUser />
      <NewConnection />
      <UserConnections />
      <Stats />
    </div>
  );
}

export default App;
