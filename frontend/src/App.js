import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './Components/Home';
import NavBar from "./Components/NavBar";
import './App.css';

// const Home = () => <div>Home!</div>

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
