import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react'

// ...
const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '100%'
}

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        containerStyle={containerStyle}
        google={this.props.google}
        zoom={14}
      >
        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>hola</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

console.log(process.env.GOOGLE_API_KEY)

export default GoogleApiWrapper({
})(MapContainer)