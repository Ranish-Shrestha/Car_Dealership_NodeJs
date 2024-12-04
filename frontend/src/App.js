import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VehicleList from './components/VehicleList'; // Updated import path
import VehicleDetails from './components/VehicleDetails'; // Updated import path

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
