"use client"

import React, { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  InfoWindow,
  Marker,
  useMapsLibrary,
  useMap,
} from "@vis.gl/react-google-maps";
import { darkModeMapStyle } from "@/app/lib/mapStyles";
import styles from "./test.module.css";

export default function Mapper() {
  const position = { lat: -17.809456, lng: 31.037992 };
  const [a, setA] = useState("-17.820587117773236, 31.02204701024367");
  const [b, setB] = useState("-17.820836287961782, 31.046514506847107");

  const handleSetA = (value) => {
    setA(value);
  };

  const handleSetB = (value) => {
    setB(value);
  };

   // Define marker positions
   const markerPositions = [
    { lat: -17.820587117773236, lng: 31.02204701024367 }, // A
    { lat: -17.820836287961782, lng: 31.046514506847107 }, // B
    { lat: -17.809456, lng: 31.037992 }, // C
    { lat: -17.8040097580655, lng: 31.015817537227402}
  ];


  return (
    <div>
      <div style={{ height: "90vh", width: "100%" }}>
        <APIProvider apiKey="AIzaSyDBSfE6Xg5BY5jSf3_gzr1V52irZGWGGos">
          <Map
            center={position}
            zoom={14}
            styles={darkModeMapStyle}
            fullscreenControl={false}
            zoomControl={true}
          >
            <Directions a={a} b={b}/>
            {markerPositions.map((position, index) => (
              <Marker 
              key={index} 
              position={position}
              label={`Bin ${index+1}`}
              />
            ))}
          </Map>
        </APIProvider>
      </div>
      <div className={styles.locateBtns}>
      <button onClick={() => handleSetA("-17.820587117773236, 31.02204701024367")}>
          A-B
        </button>
        <button onClick={() => 
          handleSetA("-17.8040097580655, 31.015817537227402")
          }>
          B-C
        </button>
        <button onClick={() => handleSetA("-17.809456, 31.037992")}>C-D</button>
      </div>
    </div>
  );
}

function Directions({a, b}) {
  const map = useMap();
  const routeslibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [routes, setRoutes] = useState([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  useEffect(() => {
    if (!routeslibrary || !map) return;
    setDirectionsService(new routeslibrary.DirectionsService());
    setDirectionsRenderer(new routeslibrary.DirectionsRenderer({ map }));
  }, [routeslibrary, map]);

  useEffect(() => {
    if (!directionsRenderer || !directionsService) return;

    directionsService.route(
      {
        origin: a,
        destination: b,
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      },
      (response: { routes: React.SetStateAction<any[]>; }) => {
        setRoutes(response.routes);
        directionsRenderer.setDirections(response);
      }
    );
  }, [a, b, directionsService, directionsRenderer]);

  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;

  return (
    <div className={styles.summary}>
      <h2>{selected.summary}</h2>
      <p>
        {leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}
      </p>
      <p>Distance: {leg.distance?.text}</p>
      <p>Duration: {leg.duration?.text}</p>
      <h2 className={styles.others}>
        Other routes
        <ul>
          {routes.map((route, index) => (
            <li key={route.summary}>
              <button
                className={styles.btn}
                onClick={() => setRouteIndex(index)}
              >
                {route.summary}
              </button>
            </li>
          ))}
        </ul>
      </h2>
    </div>
  );
}