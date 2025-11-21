import { useRef, useState } from "react";
import { useLoaderData } from "react-router";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const defaultPosition = [23.685, 90.3563];
const defaultZoom = 6.5;

const CoveragePage = () => {
  const warehouses = useLoaderData();
  const [position, setPosition] = useState(defaultPosition);
  const [zoom, setZoom] = useState(defaultZoom);
  const searchInputRef = useRef();
  const mapRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();

    const searchTerm = searchInputRef.current.value;
    const warehouse = warehouses.find((warehouse) =>
      warehouse.district.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setPosition(
      warehouse ? [warehouse.latitude, warehouse.longitude] : defaultPosition
    );
    setZoom(searchTerm ? 12 : defaultZoom);

    mapRef.current.flyTo(position, zoom);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-base-content">
        We are available in 64 districts
      </h2>

      <form
        className="relative w-full max-w-sm flex justify-center rounded-full"
        onSubmit={handleSearch}
      >
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search warehouse by district names"
          className="input input-bordered px-4 w-full rounded-full border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 placeholder-gray-400 shadow-md transition-all duration-200 bg-base-100"
        />
        <button className="absolute top-0 right-0 btn btn-accent rounded-full z-10 px-4">
          Search
        </button>
      </form>

      <MapContainer
        ref={mapRef}
        center={position}
        zoom={defaultZoom}
        scrollWheelZoom={false}
        className="w-full h-[500px] rounded-xl border-2 border-base-100"
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
