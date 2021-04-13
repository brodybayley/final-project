import React, { Component } from "react";

//component to render all Favourites for a user
class Favourites extends Component {
  state = { favourites: [] };

  componentDidMount() {
    fetch("/api/users/:id/favourites")
      .then((res) => res.json())
      .then((favourites) => this.setState({ favourites }));
  }

  render() {
    console.log("favourites:", this.state.favourites);
    return (
      <div className="Favourites">
        <h1>Favourites</h1>
        <ul>
          {this.state.favourites.map((favourite) => (
            <li key={favourite.id}>
              <h2>{favourite.building_id}</h2>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Favourites;
