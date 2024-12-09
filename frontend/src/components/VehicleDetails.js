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
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const VehicleDetails = ({ vehicles }) => {
  const { id } = useParams();
  const vehicle = vehicles.find((v) => v.id === parseInt(id));

  useEffect(() => {
    const imgs = document.querySelectorAll('.img-select a');
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem) => {
      imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
      });
    });

    function slideImage() {
      const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
      document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }

    window.addEventListener('resize', slideImage);

    return () => {
      window.removeEventListener('resize', slideImage);
    };
  }, []);

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
    <div className="card-wrapper">
      <div className="card-car-details">
        <div className="car-imgs">
          <div className="img-display">
            <div className="img-showcase">
              <img src={vehicle.image} className="img-fluid" alt={vehicle.name} />
              <img src={vehicle.image} className="img-fluid" alt={vehicle.name} />
              <img src={vehicle.image} className="img-fluid" alt={vehicle.name} />
              <img src={vehicle.image} className="img-fluid" alt={vehicle.name} />
            </div>
          </div>
          <div className="img-select">
            <div className="img-item">
              <a href={vehicle.image} data-id="1">
                <img src={vehicle.image} className="img-fluid" alt={vehicle.name} />
              </a>
            </div>
            <div className="img-item">
              <a href={vehicle.image} data-id="2">
                <img src={vehicle.image} className="img-fluid" alt={vehicle.name} />
              </a>
            </div>
            <div className="img-item">
              <a href={vehicle.image} data-id="3">
                <img src={vehicle.image} className="img-fluid" alt={vehicle.name} />
              </a>
            </div>
            <div className="img-item">
              <a href={vehicle.image} data-id="4">
                <img src={vehicle.image} className="img-fluid" alt={vehicle.name} />
              </a>
            </div>
          </div>
        </div>
        <div className="car-content">
          <h2 className="car-title">{vehicle.name}</h2>
          <Link to="/" className="car-link">Back to List</Link>
          <div className="car-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span>4.7 (21)</span>
          </div>

          <div className="car-price">
            <p className="last-price">Old Price: <span>{vehicle.price}</span></p>
            <p className="new-price">New Price: <span>${(vehicle.price * 0.95).toFixed(2)}</span></p>
          </div>

          <div className="car-detail">
            <h2>About this car:</h2>
            <p>{vehicle.description}</p>
            <ul>
              <li>Color: <span>White</span></li>
              <li>Available: <span>In stock</span></li>
              <li>Category: <span>Cars</span></li>
              <li>Shipping Area: <span>All over the world</span></li>
              <li>Shipping Fee: <span>Free</span></li>
            </ul>
          </div>

          <div className="social-links">
            <p>Share At:</p>
            <a href={vehicle.image}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href={vehicle.image}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href={vehicle.image}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href={vehicle.image}>
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href={vehicle.image}>
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
      <Link to="/" className="btn btn-secondary mt-3">Back to List</Link>
    </div>
  );
}

export default VehicleDetails;