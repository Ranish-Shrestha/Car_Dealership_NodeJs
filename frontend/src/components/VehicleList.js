import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Fetch vehicle data
async function fetchVehicleData() {
  const url = "http://localhost:3003/vehicles";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    console.log("Fetched vehicles:", data);
    return data;
  } catch (error) {
    console.error("Error fetching vehicle data:", error);
    return [];
  }
}

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const [filter, setFilter] = useState({ minPrice: 0, maxPrice: Infinity, maxKms: Infinity });
  const [page, setPage] = useState(1);
  const vehiclesPerPage = 10;

  useEffect(() => {
    const getVehicles = async () => {
      const data = await fetchVehicleData();
      setVehicles(data);
    };
    getVehicles();
  }, []);

  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.price >= (filter.minPrice || 0) &&
      vehicle.price <= (filter.maxPrice || Infinity) &&
      vehicle.kms <= (filter.maxKms || Infinity)
  );

  const totalPages = Math.ceil(filteredVehicles.length / vehiclesPerPage);
  const vehiclesToDisplay = filteredVehicles.slice(
    (page - 1) * vehiclesPerPage,
    page * vehiclesPerPage
  );

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value === '' ? (name === 'maxPrice' || name === 'maxKms' ? Infinity : 0) : parseInt(value),
    }));
  };

  if (vehicles.length === 0) {
    return <p>Loading vehicles...</p>;
  }
  if (filteredVehicles.length === 0) {
    return <p>No vehicles match your criteria. Please adjust the filters.</p>;
  }

  return (
    <div className="vehicle-list">
      <h1>Car Dealership</h1>
      <div className="filters">
        <label>
          Min Price:
          <input
            type="number"
            name="minPrice"
            value={filter.minPrice}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            name="maxPrice"
            value={filter.maxPrice === Infinity ? '' : filter.maxPrice}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Max KMs:
          <input
            type="number"
            name="maxKms"
            value={filter.maxKms === Infinity ? '' : filter.maxKms}
            onChange={handleFilterChange}
          />
        </label>
      </div>

      <div className="vehicle-grid">
        {vehiclesToDisplay.map((vehicle) => (
          <div key={vehicle.id} className="vehicle-card">
            {/* Display the first image */}
            <img src={vehicle.images[0] || 'default-image.jpg'} alt={vehicle.make} />
            <h2>{vehicle.make}</h2>
            <p>Price: ${vehicle.price}</p>
            <p>KMs: {vehicle.kms}</p>
            <p>{vehicle.description?.slice(0, 100) || 'No description available.'}</p>
            <Link to={`/vehicle/${vehicle._id}`}>View Details</Link>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default VehicleList;