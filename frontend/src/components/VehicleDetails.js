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
    return <h2>Vehicle not found</h2>;
  }

  return (
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
};

export default VehicleDetails;