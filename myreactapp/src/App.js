import React from 'react';
import './App.css';
import Home from "./page/Home";
import About from "./page/About";
import User from "./page/User";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user">Add User</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
