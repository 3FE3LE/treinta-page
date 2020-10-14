import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat:4.659502,
      lng: -74.087810
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' , display: 'absolute'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDXRfrhmcNHEDSC6FWoBgcesKyAWZ6Ot1E' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={4.659502}
            lng={-74.087810}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;