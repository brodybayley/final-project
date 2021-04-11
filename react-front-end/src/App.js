import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "./App.css";
import { Icon } from "leaflet";
import useSwr from "swr";
import axios from "axios";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const icon = new Icon({
  iconUrl: "/building.png",
  iconSize: [25, 25],
});

// make new leaflet element
const Search = (props) => {
  const map = useMap(); // access to leaflet map
  const { provider } = props;

  useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider,
    });

    map.addControl(searchControl); // this is how you add a control in vanilla leaflet
    return () => map.removeControl(searchControl);
  }, [props]);

  return null; // don't want anything to show up from this comp
};

function App() {
  const url = "https://data.sfgov.org/resource/ramy-di5m.json";
  const { data, error } = useSwr(url, { fetcher });
  const buildings = data && !error ? data.slice(0, 100) : [];

  return (
    <MapContainer center={[37.70820204901914, -122.45808060394913]} zoom={12}>
      <Search provider={new OpenStreetMapProvider()} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {buildings.map((building) => (
        <Marker
          key={building.eas_fullid}
          position={[building.latitude, building.longitude]}
          icon={icon}
        >
          <Popup>
            <div>
              <h2>{building.address}</h2>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
// constructor(props) {
//   super(props);
//   this.state = {
//     message: "Click the button to load data!",
//   };
// }

// fetchData = () => {
//   axios
//     .get("/api/data") // You can simply make your requests to "/api/whatever you want"
//     .then((response) => {
//       // handle success
//       console.log(response.data); // The entire response from the Rails API

//       console.log(response.data.message); // Just the message
//       this.setState({
//         message: response.data.message,
//       });
//     });
// };

// render() {
//   return (
//     <div className="App">
//       <h1>{this.state.message}</h1>
//       <button onClick={this.fetchData}>Fetch Data</button>
//     </div>
//   );
// }

export default App;
