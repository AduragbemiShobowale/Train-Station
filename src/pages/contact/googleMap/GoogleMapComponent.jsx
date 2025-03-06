import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const GoogleMapComponent = () => {
  return (
    <MapContainer
      center={[6.502069, 3.374198]}
      zoom={17}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[6.502069, 3.374198]}>
        <Popup>Lagos, Nigeria</Popup>
      </Marker>
    </MapContainer>
  );
};

export default GoogleMapComponent;
