import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VehicleList from './components/VehicleList';
import VehicleDetails from './components/VehicleDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VehicleList />} />
        <Route path="/vehicle/:id" element={<VehicleDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
