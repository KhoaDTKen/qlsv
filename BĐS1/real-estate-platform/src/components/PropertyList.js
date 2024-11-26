import React from 'react';
import './PropertyList.css';

const PropertyList = ({ properties }) => {
  // Kiểm tra xem properties có phải là undefined hay không
  if (!properties || properties.length === 0) {
    return <p>Không có bất động sản nào để hiển thị.</p>;
  }

  return (
    <div className="property-list">
      {properties.map((property) => (
        <div key={property.id} className="property-item">
          <h3>{property.name}</h3>
          <img src={property.image} alt={property.name} />
          <p>{property.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
