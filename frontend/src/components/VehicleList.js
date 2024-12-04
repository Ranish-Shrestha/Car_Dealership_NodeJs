import React, { useState, useEffect } from 'react';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  useEffect(() => {
    fetch('/api/vehicles') // Adjust the API endpoint based on your backend
      .then((response) => response.json())
      .then((data) => {
        setVehicles(data);
        setFilteredVehicles(data);
      });
  }, []);

  const filterVehicles = (criteria) => {
    const filtered = vehicles.filter((vehicle) => {
      if (criteria === 'price') {
        return vehicle.price <= 50000; // Example criteria
      } else if (criteria === 'kms') {
        return vehicle.kms <= 50000; // Example criteria
      }
      return true;
    });
    setFilteredVehicles(filtered);
  };

  return (
    <div>
      <h1>Vehicle List</h1>
      <div>
        <button onClick={() => filterVehicles('price')}>Filter by Price</button>
        <button onClick={() => filterVehicles('kms')}>Filter by KMs</button>
      </div>
      <div className="vehicle-grid">
        {filteredVehicles.slice(0, 16).map((vehicle) => (
          <div key={vehicle.id} className="vehicle-card">
            <img src={vehicle.image} alt={vehicle.name} />
            <h3>{vehicle.name}</h3>
            <p>{vehicle.abstractInfo}</p>
            <button
              onClick={() => window.location.href = `/vehicle/${vehicle.id}`}
            >
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleList;
