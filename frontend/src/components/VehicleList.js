const VehicleList = () => {
  const [filter, setFilter] = useState('');
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);

  console.log(filteredVehicles);  // Add this line to check the data

  return (
    <div className="app">
      <header>
        <h1>Car Dealership</h1>
        <select onChange={handleFilterChange} value={filter}>
          <option value="">Filter by price or KMs</option>
          <option value="price">Price</option>
          <option value="kms">KMs</option>
        </select>
      </header>

      <main>
        <div className="vehicle-grid">
          {filteredVehicles.slice(0, 16).map((vehicle) => (
            <div key={vehicle.id} className="vehicle-card">
              <img src={vehicle.image} alt={vehicle.name} />
              <h2>{vehicle.name}</h2>
              <p>Price: ${vehicle.price}</p>
              <p>KMs: {vehicle.kms}</p>
              <Link to={`/vehicle/${vehicle.id}`} className="details-link">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
