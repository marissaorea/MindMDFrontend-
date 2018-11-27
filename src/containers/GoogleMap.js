import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class GoogleMap extends React.Component {
  
  render() {
    console.log(this.props);
    // console.log(this.props.onMarkerClick)
    return (
      <div>
        <Map style={{width: '100%', height: '100%', position: 'relative'}} google={this.props.google} zoom={16}>
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={this.props.office_name}
            position={{lat: 37.778519, lng: -122.405640}} />

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
