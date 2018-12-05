import React from "react";
import { Map, Marker, GoogleApiWrapper} from "google-maps-react";

class GoogleMapContainer extends React.Component {



  render() {
    console.log(this.props)
    return(
      <Map
        item
        xs={20}
        google={this.props.google}
        zoom={14}
        initialCenter={{ lat: 39.64820, lng: -75.7111 }}
      >
      {this.props.docData.map(doctor => (
           <Marker
             key={doctor.id}
             title={'The marker`s title will appear as a tooltip.'}
             name={'Doc'}
             position={{lat: parseInt(doctor.lat), lng: parseInt(doctor.lon)}} />
          ))}
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyAUWcQqzKVdF5zFNzSyMxzxJuO4luGC0pk"
})(GoogleMapContainer)
