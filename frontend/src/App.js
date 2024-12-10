import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VehicleList from './components/VehicleList';
import VehicleDetails from './components/VehicleDetails';
import AddCar from './components/AddCar'; // Import the AddCar component
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VehicleList />} />
        <Route path="/vehicle/:id" element={<VehicleDetails />} />
        <Route path="/add-car" element={<AddCar />} /> {/* Add the route for AddCar */}
      </Routes>
    </Router>
  );
}

export default App;