import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditVehicle = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState({
    make: '',
    model: '',
    price: '',
    kms: '',
    description: '',
    images: ['', '', '', ''],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await fetch(`http://localhost:4000/vehicles/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch vehicle details');
        }
        const data = await response.json();
        setVehicle(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (index, value) => {
    const newImages = [...vehicle.images];
    newImages[index] = value;
    setVehicle((prev) => ({
      ...prev,
      images: newImages,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/vehicles/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(vehicle),
      });
      if (!response.ok) {
        throw new Error('Failed to update vehicle');
      }
      const data = await response.json();
      console.log('Vehicle updated:', data);
      navigate(`/vehicle/${id}`);
    } catch (error) {
      console.error('Error updating vehicle:', error);
    }
  };

  if (loading) return <p>Loading vehicle details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-5 p-5">
      <div className="card p-4">
        <h1 className="text-center mb-4">Edit Vehicle</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="make" className="form-label">Make</label>
            <input type="text" className="form-control" id="make" name="make" value={vehicle.make} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="model" className="form-label">Model</label>
            <input type="text" className="form-control" id="model" name="model" value={vehicle.model} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number" className="form-control" id="price" name="price" value={vehicle.price} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="kms" className="form-label">KMs</label>
            <input type="number" className="form-control" id="kms" name="kms" value={vehicle.kms} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" name="description" value={vehicle.description} onChange={handleChange} required></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="image1" className="form-label">Image 1</label>
            <input type="text" className="form-control" id="image1" value={vehicle.images[0]} onChange={(e) => handleImageChange(0, e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="image2" className="form-label">Image 2</label>
            <input type="text" className="form-control" id="image2" value={vehicle.images[1]} onChange={(e) => handleImageChange(1, e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="image3" className="form-label">Image 3</label>
            <input type="text" className="form-control" id="image3" value={vehicle.images[2]} onChange={(e) => handleImageChange(2, e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="image4" className="form-label">Image 4</label>
            <input type="text" className="form-control" id="image4" value={vehicle.images[3]} onChange={(e) => handleImageChange(3, e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-warning">Update Vehicle</button>
        </form>
      </div>
    </div>
  );
};

export default EditVehicle;
