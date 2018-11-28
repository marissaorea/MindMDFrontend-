import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class GoogleMap extends React.Component {

  render() {


    return (
      <div className="map-container">
        <Map google={this.props.google} zoom={15} center={{lat: 47.60, lng: -122.32}}>
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'Doc'}
            position={{lat: 47.60631, lng: -122.32177}} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAUWcQqzKVdF5zFNzSyMxzxJuO4luGC0pk"
})(GoogleMap)
