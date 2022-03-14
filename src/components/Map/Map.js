import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "./Map.scss";

function Map() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiaWhzYW5zdW5tYW4iLCJhIjoiY2wwbW9xeDIzMDJlZDNjbXo1MHd1cGk4eCJ9.V4cWbUsIt2yX0qVC2yQWbQ";

  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [lng, setLng] = useState(28.9109);
  const [lat, setLat] = useState(41.1047);
  const [zoom, setZoom] = useState(8.74);

  const { selectedCounty } = useSelector((state) => state);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/ihsansunman/cl0mospeo004c14n2sq6nrt1b",
      center: [lng, lat],
      zoom: zoom,
    });

    map.on("load", () => {
      map.on("click", "symbols", (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const content = `<div class="detail-content">
        <span id="park-name">${e.features[0].properties["PARK_NAME"]}</span>
        <div><b>Kapasite:</b><span> ${e.features[0].properties["CAPACITY_OF_PARK"]}</span></div>
        <div><b>Park Tipi:</b><span> ${e.features[0].properties["PARK_TYPE_ID"]}</span></div>
        <div><b>Çalışma Saatleri:</b><span> ${e.features[0].properties["WORKING_TIME"]}</span></div>
        <div><b>İlçe:</b><span> ${e.features[0].properties["COUNTY_NAME"]}</span></div>
        <a href="https://www.google.com/maps/place/${e.features[0].geometry.coordinates[1]},${e.features[0].geometry.coordinates[0]}" target="_blank"><button class="maps-button">Google Maps'te Aç</button></a>
        </div>
        `;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup().setLngLat(coordinates).setHTML(content).addTo(map);
      });

      map.on("mouseenter", "symbols", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", "symbols", () => {
        map.getCanvas().style.cursor = "";
      });

      setMap(map);
    });

    return () => map.remove();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (selectedCounty !== undefined) {
      setLng(selectedCounty.lng);
      setLat(selectedCounty.lat);
      setZoom(selectedCounty.zoom);
    } else {
      setLng(28.9109);
      setLat(41.1047);
      setZoom(8.74);
    }
    // eslint-disable-next-line
  }, [selectedCounty]);

  useEffect(() => {
    if (map && lng !== undefined && lat !== undefined) {
      map.setCenter([lng, lat]);
      map.setZoom(zoom);
    }
    // eslint-disable-next-line
  }, [lng, lat, zoom]);

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default Map;
