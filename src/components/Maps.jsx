import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Tooltip } from '@material-ui/core';


const randomCords = () => {
  return {
    lat: Math.random() * (4.756600 - 4.545810) + 4.545810,
    lng: Math.random() * (-74.168654 - (-74.049169)) + (-74.049169)
  }
}

const markers = []

const fillMap = () => {
  for (let index = 0; index < 25; index++) {
    markers.push({
      text: `Marcador #${index + (1)}`,
      lat: randomCords().lat,
      lng: randomCords().lng
    })
  }
}


const Marker = ({ text }) =>
  <Tooltip title={<p className=" text-white text-xl">{text}</p>} placement='top' arrow>
    <svg className="w-10 text-primary  rounded-full cursor-pointer absolute z-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </Tooltip>;

const SimpleMap = () => {


  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%', display: 'absolute' }}>
      {localStorage.getItem('name') ? fillMap() : null}
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={{
          lat: 4.659502,
          lng: -74.08700
        }}
        defaultZoom={13}
        yesIWantToUseGoogleMapApiInternals
      >
        <Marker
          lat={4.66102}
          lng={-74.0710}
          text="Treinta Shop"
        />
        {markers.map(marker => (
          <Marker
            key={marker.text}
            lat={marker.lat}
            lng={marker.lng}
            text={marker.text}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;