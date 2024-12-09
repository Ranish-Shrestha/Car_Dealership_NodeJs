import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import VehicleDetails from './components/VehicleDetails'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample vehicle data
const vehicles = [
  { id: 1, name: 'Toyota Corolla', price: 20000, kms: 5000, image: 'https://www.fmdt.info/vehicle/toyota/2019/corolla-32-white.png', description: 'A reliable sedan with great mileage.' },
  { id: 2, name: 'Honda Civic', price: 22000, kms: 3000, image: 'https://vehicle-images.dealerinspire.com/6a9d-11000999/thumbnails/large/2HGFE2F59SH518151/3b94b5b95364af1482c9397e6b8c3b7b.png', description: 'A sporty sedan with advanced features.' },
  { id: 3, name: 'Ford Focus', price: 18000, kms: 8000, image: 'https://www.motortrend.com/uploads/sites/10/2017/10/2018-ford-focus-se-sedan-angular-front.png', description: 'A compact car that is fun to drive.' },
  { id: 4, name: 'BMW X5', price: 45000, kms: 2000, image: 'https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=25XO&client=byoc&paint=P0300&fabric=FKPSW&sa=S01CE,S01SF,S0255,S02TB,S0302,S0319,S0322,S03AT,S03MB,S0402,S0420,S0423,S0459,S0481,S0494,S04FL,S04KR,S04T8,S04UR,S0552,S05AC,S05AS,S05DM,S0676,S06AC,S06AK,S06C4,S06CP,S06NX,S06U2,S0775&angle=30', description: 'A luxury SUV with top-notch features.' },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VehicleList vehicles={vehicles} />} />
        <Route path="/vehicle/:id" element={<VehicleDetails vehicles={vehicles} />} />
      </Routes>
    </Router>
  );
}

function VehicleList({ vehicles }) {
  const [filter, setFilter] = useState('');
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);

    if (value === 'price') {
      setFilteredVehicles([...vehicles].sort((a, b) => a.price - b.price));
    } else if (value === 'kms') {
      setFilteredVehicles([...vehicles].sort((a, b) => a.kms - b.kms));
    } else {
      setFilteredVehicles(vehicles);
    }
  };

  return (
    <div className="container-fluid app">
      <header className="d-flex flex-column align-items-center py-3 bg-dark text-white full-width">
        <h1>Car Dealership</h1>
      </header>

      <main>
      <select className="form-select w-25 mt-3" onChange={handleFilterChange} value={filter}>
          <option value="">Filter by price or KMs</option>
          <option value="price">Price</option>
          <option value="kms">KMs</option>
        </select>
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
}

export default App;
