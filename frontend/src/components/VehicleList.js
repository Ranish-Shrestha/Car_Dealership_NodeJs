
import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

const vehicles = [ 
  { id: 1, name: 'Toyota Corolla', price: 20000, kms: 5000, image: 'https://via.placeholder.com/150', description: 'A reliable sedan with great mileage.' },
  { id: 2, name: 'Honda Civic', price: 22000, kms: 3000, image: 'https://via.placeholder.com/150', description: 'A sporty sedan with advanced features.' }, 
  { id: 3, name: 'Ford Focus', price: 18000, kms: 8000, image: 'https://via.placeholder.com/150', description: 'A compact car that is fun to drive.' }, 
  { id: 4, name: 'BMW X5', price: 45000, kms: 2000, image: 'https://via.placeholder.com/150', description: 'A luxury SUV with top-notch features.' }, 
];

const VehicleList = () => {
  const [filter, setFilter] = useState('');
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);

  const handleFilterChange = (e) => { 
    const value = e.target.value; 
    setFilter(value); 
    
    if (value === 'price') { 
      setFilteredVehicles([...vehicles].sort((a, b) => a.price - b.price)); 
    } else if (value === 'kms') { 
      setFilteredVehicles([...vehicles].sort((a, b) => a.kms - b.kms)); 
    } else { setFilteredVehicles(vehicles); 
    } 
  };


  return (
    <div className="container app">
      <header className="d-flex justify-content-between align-items-center py-3">
        <h1>Car Dealership</h1>
        <select className="form-select" onChange={handleFilterChange} value={filter}>
          <option value="">Filter by price or KMs</option>
          <option value="price">Price</option>
          <option value="kms">KMs</option>
        </select>
      </header>

      <main>
        <div className="row vehicle-grid">
          {filteredVehicles.slice(0, 16).map((vehicle) => (
           <div key={vehicle.id} className="col-md-3 mb-4 vehicle-card"> 
            <div className="card"> 
              <img src={vehicle.image} className="card-img-top" alt={vehicle.name} /> 
              <div className="card-body"> 
                <h5 className="card-title">{vehicle.name}</h5> 
                <p className="card-text">Price: ${vehicle.price}</p> 
                <p className="card-text">KMs: {vehicle.kms}</p> 
                <Link to={`/vehicle/${vehicle.id}`} className="btn btn-primary"> 
                  View Details 
                </Link> 
              </div> 
            </div> 
          </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default VehicleList;