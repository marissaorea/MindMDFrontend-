import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class GoogleMap extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <h1>Message from GoogleMap Component</h1>
        </div>
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>test</h1>
            </div>
          </InfoWindow>
        </Map>
        ); } }
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAUWcQqzKVdF5zFNzSyMxzxJuO4luGC0pk"
})(GoogleMap)
