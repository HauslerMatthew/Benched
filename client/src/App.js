import React, {useState} from 'react';
import { Router, Link } from '@reach/router';
import AllPlayers from './components/AllPlayers';
import ManagePlayers from './components/ManagePlayers';
import CreatePlayer from './components/CreatePlayer';


function App() {
  const [player, setPlayer] = useState([]);

  return (
    <div className="App container h-100 col-xs-1">
      <div className="jumbotron">
        <h1 className="display-4">BENCHED</h1>
      </div>
      <br/><Link to="/players/list" className="btn btn-primary">Manage Players</Link> <Link to="/players/manage/1" className="btn btn-primary">Manage Player Status</Link> <Link to="/players/addplayer" className="btn btn-secondary">Add Player</Link>
      <div>
        <Router>
          <AllPlayers path="/players/list"/>
          <ManagePlayers path="/players/manage/:gameId" player={player} setPlayer={setPlayer}/>
          <CreatePlayer path="/players/addplayer"/>
        </Router>
      </div>
    </div>
  );
}

export default App;



