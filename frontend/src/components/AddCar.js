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
    <div className="add-car">
      <h1>Add New Car</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Make:
          <input type="text" name="make" value={car.make} onChange={handleChange} />
        </label>
        <label>
          Model:
          <input type="text" name="model" value={car.model} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={car.price} onChange={handleChange} />
        </label>
        <label>
          KMs:
          <input type="number" name="kms" value={car.kms} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={car.description} onChange={handleChange}></textarea>
        </label>
        <label>
          Image 1:
          <input type="text" value={car.images[0]} onChange={(e) => handleImageChange(0, e.target.value)} />
        </label>
        <label>
          Image 2:
          <input type="text" value={car.images[1]} onChange={(e) => handleImageChange(1, e.target.value)} />
        </label>
        <label>
          Image 3:
          <input type="text" value={car.images[2]} onChange={(e) => handleImageChange(2, e.target.value)} />
        </label>
        <label>
          Image 4:
          <input type="text" value={car.images[3]} onChange={(e) => handleImageChange(3, e.target.value)} />
        </label>
        <button type="submit" className="btn btn-primary">Add Car</button>
      </form>
      <div className="image-preview">
        {car.images.map((image, index) => (
          image && <img key={index} src={image} alt={`Car ${index + 1}`} className="img-fluid" />
        ))}
      </div>
    </div>
  );
};

export default AddCar;