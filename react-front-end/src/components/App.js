import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// imports
import Nav from "./Nav";
import Map from "./Map";
import Home from "./Home";
import About from "./About";
import Buildings from "./Buildings";
import Building from "./Building";
import Favourites from "./Favourites";
import Login from "./login/Login";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/map" component={Map} />
          <Route path="/buildings" component={Buildings} />
          <Route path="/building/:id" component={Building} />
          <Route path="/users/:id/favourites" component={Favourites} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}
