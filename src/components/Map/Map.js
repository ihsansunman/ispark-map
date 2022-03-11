import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "./Map.scss"

function Map() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiaWhzYW5zdW5tYW4iLCJhIjoiY2wwbW9xeDIzMDJlZDNjbXo1MHd1cGk4eCJ9.V4cWbUsIt2yX0qVC2yQWbQ";

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(28.9);
  const [lat, setLat] = useState(41.1);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/ihsansunman/cl0mospeo004c14n2sq6nrt1b",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div
        ref={mapContainer}
        className="map-container"
      />
    </div>
  );
}

export default Map;
