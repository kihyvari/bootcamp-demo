import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react';
import Home from './Components/Home';
import NavBar from "./Components/NavBar";
import './App.css';

const Home = () => <div>Home!</div>

function App() {
  return (
    <Router>
      <NavBar />
      <switch>
        <Route exact path="/" component="Home" />
      </switch>
    </Router>
  );
}

export default App;
