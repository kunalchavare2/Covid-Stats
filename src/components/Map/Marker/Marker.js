import React from 'react';
import { Marker } from 'react-leaflet';
import L from 'leaflet';
import "./marker.scss";


/**
 * It will convert the image into icon
 */
const markerIcon = new L.Icon({
    iconUrl: require("../../../assets/img/marker.png"),
    iconSize: [10, 10]
})

/**
 * 
 * @param {Object} props - Get the data from the parent marker component
 * @returns - marker Component with popup message
 */
function Plot(props) {
  return (
    <Marker position={props.position} icon={markerIcon}>
      {props.children}
    </Marker>
  )
}

export default Plot
