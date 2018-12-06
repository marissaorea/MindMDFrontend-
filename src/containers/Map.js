import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class Map extends React.Component {


    render() {
      console.log(this.props)

      const position = [this.props.docData.lat, this.props.docData.lon]

      return(
        <LeafletMap
          center={[40.90866,-73.96559]}
          zoom={13}
          maxZoom={10}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          {this.props.docData.map(location =>
          <Marker position={[location.lat,location.lon]}>
            <Popup>
              {location.first_name}, {location.last_name},
              {location.street}, {location.city}, {location.state}, {location.zipcode}
              {location.phone}
            </Popup>
          </Marker>
        )}
        </LeafletMap>
      );
    }
}

// [Number(resort.latitude), Number(resort.longitude)]

export default Map;
