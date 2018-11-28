import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class GoogleMap extends React.Component {

  render() {

    const docPosition = {lat: 47.60631, lng: -122.32177}
    return (
      <div className="map-container">
        <Map style={{width: '100%', height: '100%', position: 'relative'}} google={this.props.google} zoom={15}>
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={this.props.office_name}
            postion={docPosition} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAUWcQqzKVdF5zFNzSyMxzxJuO4luGC0pk"
})(GoogleMap)
