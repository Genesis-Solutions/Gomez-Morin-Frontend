import React, { Component } from "react";

const apiKey = import.meta.env.VITE_API_KEY_MAPS;
class MapContainer extends Component {
  render() {
    const mapStyles = {
      height: "400px",
    };

    return (
      <Map
        google={this.props.google}
        initialCenter={{ lat: 20.585619, lng: -100.38619 }}
        zoom={13}
        style={mapStyles}
      >
        <Marker position={{ lat: 20.585619, lng: -100.38619 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey,
})(MapContainer);
