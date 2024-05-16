import React, { useState, useEffect } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from "../../../data/countries.json";
import "leaflet/dist/leaflet.css";
import "./customMap.scss";

const CustomMap = () => {
  const [fillColors, setFillColors] = useState([]);
  const delay = 100;

  /**
   * @type Object - All Attributes of the Map Component
   */
  const mapOptions = {
    center: [17.434178, 78.375369],
    zoom: 1,
    minZoom: 1,
    scrollWheelZoom: false,
    attributionControl: false,
    zoomControl: false,
  };

  useEffect(() => {
    colorCountriesWithDelay();
  }, []);

  /**
   * Color each country with delay of 100 milliseconds
   */
  const colorCountriesWithDelay = () => {
    const countries = mapData.features;

    countries.forEach((_, index) => {
      setTimeout(() => {
        setFillColors((prevColors) => [
          ...prevColors.slice(0, index),
          "darkblue",
          ...prevColors.slice(index + 1),
        ]);
      }, index * delay);
    });
  };

  /**
   *
   * @param {<Object>} country - Country object with all the parameters
   * @param {<function>} layer - Layer object with built in functions to send message on click
   */
  const onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    layer.bindPopup(countryName);

    layer.on({
      click: () => {
        showStates(countryName);
      },
    });
  };

  const showStates = (countryName) => {
    console.log(`States of ${countryName}`);
  };

  return (
    <MapContainer {...mapOptions}>
      <GeoJSON
        style={(feature) => ({
          fillColor:
            fillColors[mapData.features.indexOf(feature)] || "lightblue",
          fillOpacity: 1,
          weight: 0.1,
          color: "#ECF8F9",
        })}
        data={mapData.features}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
};

export default CustomMap;
