import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get the id from the URL

function VehicleDetails() {
  const { id } = useParams();  // Get the vehicle id from the URL
  const [vehicle, setVehicle] = useState(null);  // To store vehicle data
  const [loading, setLoading] = useState(true);  // To manage loading state
  const [error, setError] = useState(null);  // To manage error state

  useEffect(() => {
    // Fetch vehicle details from the API based on the vehicle id
    const fetchVehicleDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3003/vehicles/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch vehicle details');
        }
        const data = await response.json();
        setVehicle(data);  // Set the fetched data to state
      } catch (err) {
        setError(err.message);  // Handle any error during fetch
      } finally {
        setLoading(false);  // Set loading to false after fetching
      }
    };

    fetchVehicleDetails();
  }, [id]);  // The effect will run again if the id changes

  if (loading) {
    return <p>Loading...</p>;  // Display loading while data is being fetched
  }

  if (error) {
    return <p>Error: {error}</p>;  // Display error message if fetch fails
  }

  if (!vehicle) {
    return <p>No vehicle data found</p>;  // Display message if no vehicle data is available
  }

  // Destructure vehicle details
  const { make, model, price, kms, description, images } = vehicle;

  return (
    <div className="vehicle-details">
      <h1>{make} {model}</h1>

      {/* Bootstrap Carousel */}
      <div id="vehicleCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images && images.length > 0 ? (
            images.map((image, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img src={image} className="d-block w-100 carousel-img" alt={`Vehicle Image ${index + 1}`} />
              </div>
            ))
          ) : (
            <div className="carousel-item active">
              <img src="default-image.jpg" className="d-block w-100 carousel-img" alt="No image available" />
            </div>
          )}
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#vehicleCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#vehicleCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div>
        {/* Additional vehicle details */}
        <p><strong>Price:</strong> ${price}</p>
        <p><strong>KMs:</strong> {kms}</p>
        <p><strong>Description:</strong> {description}</p>
      </div>
    </div>
  );
}

export default VehicleDetails;
