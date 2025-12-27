import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  return (
    <div className="property-card" onClick={() => navigate(`/property/${property.id}`)}>
      <img src={property.image || property.picture} alt={property.title || property.type} />
      <div className="property-info">
        <h3>{property.title || `${property.type} - ${property.bedrooms} Bedrooms`}</h3>
        <p className="location">📍 {property.location}</p>
        <p className="bedrooms">🛏️ {property.bedrooms} Bedrooms</p>
        <p className="price">£{property.price}{property.price > 10000 ? '' : ' / night'}</p>
        <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
};

export default PropertyCard;