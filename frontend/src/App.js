import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Sample vehicle data
const vehicles = [
  { id: 1, name: 'Toyota Corolla', price: 20000, kms: 5000, image: 'https://via.placeholder.com/150', description: 'A reliable sedan with great mileage.' },
  { id: 2, name: 'Honda Civic', price: 22000, kms: 3000, image: 'https://via.placeholder.com/150', description: 'A sporty sedan with advanced features.' },
  { id: 3, name: 'Ford Focus', price: 18000, kms: 8000, image: 'https://via.placeholder.com/150', description: 'A compact car that is fun to drive.' },
  { id: 4, name: 'BMW X5', price: 45000, kms: 2000, image: 'https://via.placeholder.com/150', description: 'A luxury SUV with top-notch features.' },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VehicleList />} />
      </Routes>
    </Router>
  );
}

function VehicleList() {
  return (
    <div className="vehicle-list">
      <h1>Car Dealership</h1>
      <div className="vehicle-grid">
        {vehicles.map(vehicle => (
          <div key={vehicle.id} className="vehicle-card">
            <img src={vehicle.image} alt={vehicle.name} />
            <h2>{vehicle.name}</h2>
            <p>Price: ${vehicle.price}</p>
            <p>KMs: {vehicle.kms}</p>
            <Link to={`/vehicle/${vehicle.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
