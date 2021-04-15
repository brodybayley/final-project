import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// imports
import Nav from "./Nav";
import Map from "./Map";
import Home from "./Home";
import Profile from "./Profile";
import Buildings from "./Buildings";
import Building from "./Building";
import BuildingAmenities from "./BuildingAmenities";
import Favourites from "./Favourites/Favourites";
import FavouriteButton from "./Favourites/FavouriteButton";
import DeleteFavourite from "./Favourites/DeleteFavourite";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile/:userId" component={Profile} />
          <Route path="/map" component={Map} />
          <Route path="/buildings/:buildingId" component={Building} />
          <Route path="/buildings" component={Buildings} />
          <Route path="/:id/building_amenities" component={BuildingAmenities} />
          <Route path="/:id/favourites" component={Favourites} />
          <Route path="/favouriteButton" component={FavouriteButton} />
          <Route path="/deleteFavourite" component={DeleteFavourite} />
        </Switch>
      </div>
    </Router>
  );
}
