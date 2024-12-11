import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


async function fetchVehicleData() {
  const url = "http://localhost:4000/vehicles";
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

  return (
    <div className="vehicle-list-container">
      <header className="vehicle-list-header">
        <h1 className="text-white text-center py-3">Car Dealership</h1>
      </header>
      <div className="container mt-4">
        <div className="filters mb-4 row">
          <div className="col-md-4 mb-3">
            <label className="form-label">
              Min Price:
              <input
                type="number"
                name="minPrice"
                className="form-control"
                value={filter.minPrice}
                onChange={handleFilterChange}
              />
            </label>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">
              Max Price:
              <input
                type="number"
                name="maxPrice"
                className="form-control"
                value={filter.maxPrice === Infinity ? '' : filter.maxPrice}
                onChange={handleFilterChange}
              />
            </label>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">
              Max KMs:
              <input
                type="number"
                name="maxKms"
                className="form-control"
                value={filter.maxKms === Infinity ? '' : filter.maxKms}
                onChange={handleFilterChange}
              />
            </label>
          </div>
          <div className="col-12 text-end">
            <Link to="/add-car" className="btn btn-primary">Add Car</Link>
          </div>
        </div>

        {filteredVehicles.length > 0 ? (
          <div className="vehicle-grid row">
            {vehiclesToDisplay.map((vehicle) => (
              <div key={vehicle.id} className="vehicle-card col-md-4 mb-4">
                <div className="card h-100">
                  <img src={vehicle.images[0] || 'default-image.jpg'} alt={vehicle.make} className="card-img-top" />
                  <div className="card-body">
                    <h2 className="card-title">{vehicle.make}</h2>
                    <p className="card-text">Price: ${vehicle.price}</p>
                    <p className="card-text">KMs: {vehicle.kms}</p>
                    <p className="card-text">{vehicle.description?.slice(0, 100) || 'No description available.'}</p>
                    <Link to={`/vehicle/${vehicle._id}`} className="btn btn-secondary">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No vehicles match your criteria. Please adjust the filters.</p>
        )}

        <div className="pagination">
          <button className="btn btn-outline-primary" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
            Previous
          </button>
          <span className="mx-2">
            Page {page} of {totalPages || 1}
          </span>
          <button
            className="btn btn-outline-primary"
            disabled={page === totalPages || totalPages === 0}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default VehicleList;
