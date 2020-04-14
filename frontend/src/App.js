import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import StationTable from "./Components/StationTable";
import StationTableTrue from "./Components/StationTableTrue";
import Home from './Components/Home';
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import GetStation from './Components/GetStation';
import GetTrains from './Components/GetTrains';
import './App.css';


// tehdään Stations.js ja Station.js

function App() { 
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/StationTable"><StationTable /></Route>
        <Route path="/StationTableTrue"><StationTableTrue /></Route>
        <Route path="/GetStation"><GetStation /></Route>
        <Route path="/GetTrains"><GetTrains /></Route>
        <Route render={() => "404 - Not Found!"} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
