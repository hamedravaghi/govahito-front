"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

//* icon
const newIcon = new L.icon({
  iconUrl: "/images/newMarker.png",
  iconSize: [30, 30],
});

const MapBox = ({ latitude, longitude }) => {
  if (!latitude || !longitude) return null;
  return (
    <div className="w-full h-full " id="mapid">
      <MapContainer
        center={{
          lat: latitude,
          lng: longitude,
        }}
        zoom={20}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%", zIndex: 10 }}
        attributionControl={false}
        key={`${latitude}${longitude}`}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={{
            lat: latitude,
            lng: longitude,
          }}
          icon={newIcon}
        >
          <Popup>academy name</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapBox;
