import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Stations from "./Components/Stations";
import StationTable from "./Components/StationTable";
import Home from './Components/Home';
import NavBar from "./Components/NavBar";
import Corona from "./Components/Corona";
import './App.css';


// tehdään Stations.js ja Station.js

function App() { 
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/stationList"><Stations /></Route>
        <Route path="/StationTable"><StationTable /></Route>
        <Route path="/Corona"><Corona /></Route>
        <Route render={() => "404 - Not Found!"} />
      </Switch>
    </Router>
  );
}

export default App;
