import React from 'react';
import { useParams } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Property Details for ID: {id}</h1>
      {/* Display property information based on ID */}
    </div>
  );
};

export default PropertyDetails;
