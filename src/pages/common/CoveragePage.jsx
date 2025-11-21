import { useRef, useState } from "react";
import { useLoaderData } from "react-router";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const defaultPosition = [23.685, 90.3563];

const CoveragePage = () => {
  const warehouses = useLoaderData();
  const [position, setPosition] = useState(defaultPosition);
  const searchInputRef = useRef();
  const mapRef = useRef();

  const handleSearch = () => {
    const searchTerm = searchInputRef.current.value;
    const warehouse = warehouses.find((warehouse) =>
      warehouse.district.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setPosition(
      warehouse ? [warehouse.latitude, warehouse.longitude] : defaultPosition
    );
    mapRef.current.flyTo(position, 12);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-center text-base-content">
        We are Everywhere
      </h2>

      <p className="text-center">
        We have warehouse in every single city of Bangladesh.
      </p>

      <div className="mx-auto w-full max-w-md flex justify-center">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search warehouse by district names"
          onChange={handleSearch}
          className="input input-bordered w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 placeholder-gray-400 shadow-md transition-all duration-200 bg-base-100"
        />
      </div>

      <MapContainer
        ref={mapRef}
        center={position}
        zoom={8}
        scrollWheelZoom={false}
        className="w-full h-[800px] rounded-xl border-2 border-base-100"
      >
        <TileLayer
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {warehouses.map((warehouse, index) => (
          <Marker
            key={index}
            position={[warehouse.latitude, warehouse.longitude]}
          >
            <Popup>
              <strong>{warehouse.district}</strong>
              <br />
              Service Areas: {warehouse.covered_area.join(", ")}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CoveragePage;
