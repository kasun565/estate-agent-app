import React from 'react';
import PropertyCard from './PropertyCard';
import './PropertyList.css';

const PropertyList = ({ properties }) => {
  return (
    <div className="property-list">
      {properties.length === 0 ? (
        <p className="no-results">No properties found matching your criteria.</p>
      ) : (
        properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))
      )}
    </div>
  );
};

export default PropertyList;