import React, { useState } from 'react';

const AddCar = () => {
  const [car, setCar] = useState({
    make: '',
    model: '',
    price: '',
    kms: '',
    description: '',
    images: ['', '', '', ''], // Initialize with four empty strings for images
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (index, value) => {
    const newImages = [...car.images];
    newImages[index] = value;
    setCar((prev) => ({
      ...prev,
      images: newImages,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/vehicles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
      });
      if (!response.ok) {
        throw new Error('Failed to add car');
      }
      const data = await response.json();
      console.log('Car added:', data);
      // Optionally, redirect or update the UI to show the new car
    } catch (error) {
      console.error('Error adding car:', error);
    }
  };

  return (
    <div className="add-car container mt-5">
      <h1 className="text-center mb-4">Add New Car</h1>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="make" className="form-label">Make</label>
            <input type="text" className="form-control" id="make" name="make" value={car.make} onChange={handleChange} required />
            <div className="invalid-feedback">Please provide a make.</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="model" className="form-label">Model</label>
            <input type="text" className="form-control" id="model" name="model" value={car.model} onChange={handleChange} required />
            <div className="invalid-feedback">Please provide a model.</div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number" className="form-control" id="price" name="price" value={car.price} onChange={handleChange} required />
            <div className="invalid-feedback">Please provide a price.</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="kms" className="form-label">KMs</label>
            <input type="number" className="form-control" id="kms" name="kms" value={car.kms} onChange={handleChange} required />
            <div className="invalid-feedback">Please provide the kilometers.</div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" name="description" value={car.description} onChange={handleChange} required></textarea>
          <div className="invalid-feedback">Please provide a description.</div>
        </div>
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="image1" className="form-label">Image 1</label>
            <input type="text" className="form-control" id="image1" value={car.images[0]} onChange={(e) => handleImageChange(0, e.target.value)} required />
            <div className="invalid-feedback">Please provide an image URL.</div>
          </div>
          <div className="col-md-3">
            <label htmlFor="image2" className="form-label">Image 2</label>
            <input type="text" className="form-control" id="image2" value={car.images[1]} onChange={(e) => handleImageChange(1, e.target.value)} required />
            <div className="invalid-feedback">Please provide an image URL.</div>
          </div>
          <div className="col-md-3">
            <label htmlFor="image3" className="form-label">Image 3</label>
            <input type="text" className="form-control" id="image3" value={car.images[2]} onChange={(e) => handleImageChange(2, e.target.value)} required />
            <div className="invalid-feedback">Please provide an image URL.</div>
          </div>
          <div className="col-md-3">
            <label htmlFor="image4" className="form-label">Image 4</label>
            <input type="text" className="form-control" id="image4" value={car.images[3]} onChange={(e) => handleImageChange(3, e.target.value)} required />
            <div className="invalid-feedback">Please provide an image URL.</div>
          </div>
        </div>
        <button type="submit" className="btn addcar">Add Car</button>
      </form>
      <div className="image-preview mt-4">
        <div className="row">
          {car.images.map((image, index) => (
            image && (
              <div key={index} className="col-md-3">
                <img src={image} alt={`Car ${index + 1}`} className="img-fluid rounded" />
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCar;