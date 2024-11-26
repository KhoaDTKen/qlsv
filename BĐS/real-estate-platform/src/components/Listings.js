import React, { useState, useEffect } from 'react';

const Listings = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch property data from API
    // This is mock data for demonstration
    const mockData = [
      { id: 1, name: 'Luxury Villa', location: 'Hanoi', price: '$500,000' },
      { id: 2, name: 'Modern Apartment', location: 'HCMC', price: '$300,000' },
    ];
    setProperties(mockData);
  }, []);

  return (
    <div>
      <h1>Property Listings</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            {property.name} - {property.location} - {property.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
