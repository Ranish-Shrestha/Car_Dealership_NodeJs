import React from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const VehicleDetails = ({ vehicles }) => {
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
