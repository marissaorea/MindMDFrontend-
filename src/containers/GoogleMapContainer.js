import React from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow} from "google-maps-react";


class GoogleMapContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }


  onMarkerClick = (props, marker, event) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


  render() {
    console.log(this.props)
    return(
      <Map
        item
        xs={20}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={14}
        icon={{url: '../marker.png'}}
        initialCenter={{ lat: 39.648209, lng: -75.711185 }}
      >

        <Marker
          onClick={this.onMarkerClick}
          title={"Changing Colors Garage"}
          position={{ lat: 39.648209, lng: -75.711185 }}
          name={"Changing Colors Garage"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
        </InfoWindow>
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyAUWcQqzKVdF5zFNzSyMxzxJuO4luGC0pk"
})(GoogleMapContainer)
