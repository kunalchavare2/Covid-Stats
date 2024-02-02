import React, { useState, useEffect } from "react";
import { Map, TileLayer } from 'react-leaflet';
import Marker from "../Marker/Marker";
import { FetchAPIService } from "../../../services/FetchAPIService";
import Popover from "../Popover/Popover";
import "leaflet/dist/leaflet.css";
import "./mapContainer.scss";
import Loading from "../../Loading/Loading";

const MapContainer = () => {
  const [data, setData] = useState([]);

  const mapOptions = {
    center: [17.434178, 78.375369],
    zoom: 3,
    minZoom: 1,
    scrollWheelZoom: false,
    attributionControl: false,
    zoomControl: true,
  };

  useEffect(() => {
    FetchAPIService("https://corona.lmao.ninja/v2/countries?yesterday&sort")
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (data.length === 0) {
    return <Loading/>;
  }

  return (
    <Map {...mapOptions}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data.map((countryData) => (
        <Marker key={countryData.id} position={[countryData.latitude, countryData.longitude]}>
          <Popover flagSrc={countryData.flag} country={countryData.country} deathsCases={countryData.deaths} activeCases={countryData.active} totalCases={countryData.cases} />
        </Marker>
      ))}
    </Map>
  );
};

export default MapContainer;
