import React, { useState, useEffect } from "react";
import axios from "axios";
import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Amenities = () => {
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    axios.get("/api/amenities").then((res) => {
      setAmenities(res.data)
    });
  }, [])

  // Selects icon image
  const getIcon = (amenity) => {
    const image = 
    amenity.type === "School" ? "/transit.png" : 
    amenity.type === "Groceries" ? "/groceries2.png" :
    // amenity.type === "Park" ? "/restaurant2.png" :
    amenity.type === "Restaurant" ? "/cafe.png" :
    "/restaurant2.png";

    return new Icon({
      iconUrl: image,
      iconSize: [21, 33]
    })
  }

  return (
    <div className="Amenities">
      {amenities.map((amenity) => (
      <Marker
        key={amenity.id}
        position={[amenity.latitude, amenity.longitude]}
        icon={getIcon(amenity)}
      >
        <Popup>
          <div>
            <h2>{amenity.name}</h2>
          </div>
        </Popup>
      </Marker>
    ))}
    </div>
  )
}

export default Amenities;