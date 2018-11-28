import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class GoogleMap extends React.Component {

  render() {

    console.log(this.props)
    return (
      <div className="map-container">
        <Map google={this.props.google} zoom={15} center={{lat: 47.60, lng: -122.32}}>
          {this.props.docData.map(doctor =>
            <Marker
              key={doctor.id}
              title={'The marker`s title will appear as a tooltip.'}
              name={'Doc'}
              position={{lat: parseInt(doctor.lat), lng: parseInt(doctor.lon)}} />
           )}

        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAUWcQqzKVdF5zFNzSyMxzxJuO4luGC0pk"
})(GoogleMap)
