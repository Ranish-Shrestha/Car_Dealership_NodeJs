import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VehicleDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    fetch(`/api/vehicles/${id}`) // Adjust the API endpoint
      .then((response) => response.json())
      .then((data) => setVehicle(data));
  }, [id]);

  if (!vehicle) return <div>Loading...</div>;

  return (
    <div>
      <h1>{vehicle.name}</h1>
      <img src={vehicle.image} alt={vehicle.name} />
      <p>Price: {vehicle.price}</p>
      <p>KMs Driven: {vehicle.kms}</p>
      <p>{vehicle.fullInfo}</p>
    </div>
  );
};

export default VehicleDetails;
