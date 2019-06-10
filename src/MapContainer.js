import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

class MapContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        markers: [{lat: 37.778519, lng: -122.405640}, {lat: 37.759703, lng: -122.428093}, {lat: 37.762391, lng: -122.439192}],
      };
  }

  displayMarkers = () => {
    return this.state.markers.map((marker, index) => {
      return <Marker key={index} id={index} position={{
       lat: marker.lat,
       lng: marker.lng
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }
  
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          {this.displayMarkers()}
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_NOT_SECRET_CODE
})(MapContainer)