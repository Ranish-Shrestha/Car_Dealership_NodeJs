import React from 'react';
import { useParams, Link } from 'react-router-dom';

const vehicles = [
  { id: 1, name: 'Toyota Corolla', price: 20000, kms: 5000, image: 'https://via.placeholder.com/150', description: 'A reliable sedan with great mileage.' },
  { id: 2, name: 'Honda Civic', price: 22000, kms: 3000, image: 'https://via.placeholder.com/150', description: 'A sporty sedan with advanced features.' },
  { id: 3, name: 'Ford Focus', price: 18000, kms: 8000, image: 'https://via.placeholder.com/150', description: 'A compact car that is fun to drive.' },
  { id: 4, name: 'BMW X5', price: 45000, kms: 2000, image: 'https://via.placeholder.com/150', description: 'A luxury SUV with top-notch features.' },
];

const VehicleDetails = () => {
  const { id } = useParams();
  const vehicle = vehicles.find((v) => v.id === parseInt(id));

  if (!vehicle) {
    return <h2>Vehicle not found</h2>;
  }

  return (
    <div className="container details-page">
      <h1>{vehicle.name}</h1>
      <img src={vehicle.image} className="img-fluid" alt={vehicle.name} />
      <p>Price: ${vehicle.price}</p>
      <p>KMs: {vehicle.kms}</p>
      <p>Description: {vehicle.description}</p>
      <Link to="/" className="btn btn-secondary mt-3">Back to List</Link>
    </div>
  );
};

export default VehicleDetails;
